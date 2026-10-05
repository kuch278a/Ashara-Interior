import React, { useState, useEffect, useMemo } from 'react';
import {
  Users, Layers, FileText, Database, Plus,
  RefreshCw, ChevronRight, ArrowUpRight, Building2,
  CheckCircle2, SlidersHorizontal, Filter, Search, X,
  LogOut, Quote
} from 'lucide-react';
import {
  getConsultations, getDynamicProjects, saveProject, deleteProject,
  getDynamicBlogPosts, saveBlogPost, deleteBlogPost, updateConsultationStatus, deleteConsultation,
  isFirebaseConfigured, loginAdminUser, logoutAdminUser, uploadImage,
  getDynamicTestimonials, saveTestimonial, deleteTestimonial, subscribeToTestimonials
} from '../services/firebaseService';

import AdminLoginScreen      from './admin/AdminLoginScreen';
import AdminProjectsTab      from './admin/AdminProjectsTab';
import AdminLeadsTab         from './admin/AdminLeadsTab';
import AdminBlogTab          from './admin/AdminBlogTab';
import AdminTestimonialsTab  from './admin/AdminTestimonialsTab';
import AdminProjectModal     from './admin/AdminProjectModal';
import AdminBlogModal        from './admin/AdminBlogModal';
import AdminTestimonialModal from './admin/AdminTestimonialModal';
import AdminDeleteConfirm    from './admin/AdminDeleteConfirm';

export default function AdminPortal({ onNavigate }) {
  const [adminUser, setAdminUser] = useState(() => {
    try {
      const saved = sessionStorage.getItem('ashara_admin_auth');
      if (!saved) return null;
      const parsed = JSON.parse(saved);
      if (parsed && parsed.email) return parsed;
      sessionStorage.removeItem('ashara_admin_auth');
      return null;
    } catch (e) { return null; }
  });
  const [loginEmail,    setLoginEmail]    = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError,    setLoginError]    = useState('');
  const [isLoggingIn,   setIsLoggingIn]   = useState(false);
  const [activeTab,    setActiveTab]    = useState('projects');
  const [leads,        setLeads]        = useState([]);
  const [projects,     setProjects]     = useState([]);
  const [blogPosts,    setBlogPosts]    = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading,    setIsLoading]    = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(null);
  const [notification,  setNotification]  = useState(null);
  const [searchQuery,           setSearchQuery]           = useState('');
  const [projectCategoryFilter, setProjectCategoryFilter] = useState('ALL');
  const [leadStatusFilter,      setLeadStatusFilter]      = useState('ALL');
  const [blogCategoryFilter,    setBlogCategoryFilter]    = useState('ALL');
  const [testimonialFilter,     setTestimonialFilter]     = useState('ALL');
  const [editingProject,          setEditingProject]          = useState(null);
  const [isProjectModalOpen,      setIsProjectModalOpen]      = useState(false);
  const [projectImageFile,        setProjectImageFile]        = useState(null);
  const [projectImagePreview,     setProjectImagePreview]     = useState('');
  const [projectGalleryFiles,     setProjectGalleryFiles]     = useState([]);
  const [projectGalleryPreviews,  setProjectGalleryPreviews]  = useState([]);
  const [editingPost,      setEditingPost]      = useState(null);
  const [isBlogModalOpen,  setIsBlogModalOpen]  = useState(false);
  const [blogImageFile,    setBlogImageFile]    = useState(null);
  const [blogImagePreview, setBlogImagePreview] = useState('');
  const [editingTestimonial,     setEditingTestimonial]     = useState(null);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [uploadStatus,  setUploadStatus]  = useState({ active: false, stage: '', percent: 0 });
  const [copiedId,      setCopiedId]      = useState(null);

  useEffect(() => {
    if (!adminUser) return;
    loadAllData();
    const unsub = subscribeToTestimonials((list) => {
      if (list && list.length > 0) setTestimonials(list);
    });
    return () => { if (typeof unsub === 'function') unsub(); };
  }, [adminUser]);

  const showToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4500);
  };
  const handleCopy = (text, id) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    showToast('Copied to clipboard', 'info');
  };
  const formatFileSize = (bytes) => {
    if (!bytes) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault(); setLoginError(''); setIsLoggingIn(true);
    try {
      const res = await loginAdminUser(loginEmail, loginPassword);
      if (res.success) { setAdminUser(res.user); showToast(`Welcome back, ${res.user.name || 'Studio Director'}`); }
      else { setLoginError(res.error || 'Invalid director credentials'); }
    } catch { setLoginError('Authentication failed. Please verify connection and credentials.'); }
    finally { setIsLoggingIn(false); }
  };
  const handleLogout = async () => {
    await logoutAdminUser(); setAdminUser(null); setLoginEmail(''); setLoginPassword('');
    showToast('Signed out of Studio Atelier', 'info');
  };
  const loadAllData = async (isManualRefresh = false) => {
    if (isManualRefresh) setIsRefreshing(true); else setIsLoading(true);
    try {
      const [leadsData, projectsData, blogData, testimonialsData] = await Promise.all([
        getConsultations(), getDynamicProjects(), getDynamicBlogPosts(), getDynamicTestimonials()
      ]);
      setLeads(leadsData || []); setProjects(projectsData || []);
      setBlogPosts(blogData || []); setTestimonials(testimonialsData || []);
      setLastRefreshed(new Date());
      if (isManualRefresh) showToast('Atelier database synchronized');
    } catch { showToast('Could not sync remote data. Offline cache active.', 'error'); }
    finally { setIsLoading(false); setIsRefreshing(false); }
  };
  const handleUpdateLeadStatus = async (leadId, newStatus) => {
    try {
      await updateConsultationStatus(leadId, newStatus);
      setLeads(prev => prev.map(l => String(l.id) === String(leadId) ? { ...l, status: newStatus } : l));
      showToast(`Lead marked as ${newStatus.toUpperCase()}`);
    } catch { showToast('Failed to update lead status', 'error'); }
  };
  const handleOpenNewProject = () => {
    setEditingProject({ title: '', category: 'GOVERNMENTAL', tag: 'GOVERNMENTAL', subtitle: '', image: '', description: '' });
    setProjectImageFile(null); setProjectImagePreview(''); setProjectGalleryFiles([]); setProjectGalleryPreviews([]);
    setIsProjectModalOpen(true);
  };
  const handleOpenEditProject = (proj) => {
    setEditingProject({ ...proj }); setProjectImageFile(null); setProjectImagePreview('');
    setProjectGalleryFiles([]); setProjectGalleryPreviews([]); setIsProjectModalOpen(true);
  };
  const handleSaveProject = async (e) => {
    e.preventDefault(); if (!editingProject) return;
    setUploadStatus({ active: true, stage: 'Preparing project data...', percent: 10 });
    try {
      let projectData = { ...editingProject };
      if (projectImageFile) {
        const r = await uploadImage(projectImageFile, 'projects', (p) => {
          setUploadStatus({ active: true, stage: p.stage === 'compressing' ? 'Optimizing architectural photo...' : `Uploading (${p.percent}%)...`, percent: p.percent });
        });
        if (r.success) { projectData.image = r.url; }
        else { showToast('Image processing failed: ' + (r.error || 'Unknown error'), 'error'); setUploadStatus({ active: false, stage: '', percent: 0 }); return; }
      }
      if (projectGalleryFiles.length > 0) {
        const galleryUrls = [];
        for (let i = 0; i < projectGalleryFiles.length; i++) {
          setUploadStatus({ active: true, stage: `Uploading gallery image ${i + 1} of ${projectGalleryFiles.length}...`, percent: 40 + Math.round((i / projectGalleryFiles.length) * 50) });
          const r = await uploadImage(projectGalleryFiles[i], 'projects');
          if (r.success) { galleryUrls.push(r.url); }
          else { showToast(`Gallery image ${i + 1} failed: ` + (r.error || 'Unknown error'), 'error'); setUploadStatus({ active: false, stage: '', percent: 0 }); return; }
        }
        projectData.gallery = [...(projectData.gallery || []), ...galleryUrls];
      }
      setUploadStatus({ active: true, stage: 'Syncing with atelier database...', percent: 95 });
      await saveProject(projectData);
      setIsProjectModalOpen(false); setEditingProject(null);
      setProjectImageFile(null); setProjectImagePreview(''); setProjectGalleryFiles([]); setProjectGalleryPreviews([]);
      showToast(`Project "${projectData.title}" saved successfully`);
      await loadAllData();
    } catch { showToast('Error saving project. Please try again.', 'error'); }
    finally { setUploadStatus({ active: false, stage: '', percent: 0 }); }
  };
  const handleOpenNewTestimonial = () => {
    setEditingTestimonial({ clientName: '', role: '', organization: '', projectId: '', rating: 5, quote: '', isFeatured: true });
    setIsTestimonialModalOpen(true);
  };
  const handleOpenEditTestimonial = (t) => { setEditingTestimonial({ ...t }); setIsTestimonialModalOpen(true); };
  const handleSaveTestimonial = async (e) => {
    e.preventDefault(); if (!editingTestimonial) return;
    try {
      await saveTestimonial(editingTestimonial);
      setIsTestimonialModalOpen(false); setEditingTestimonial(null);
      showToast('Client testimonial saved successfully');
      await loadAllData();
    } catch { showToast('Error saving testimonial. Please try again.', 'error'); }
  };
  const handleOpenNewPost = () => {
    setEditingPost({ title: '', category: 'CIVIC ARCHITECTURE', readTime: '4 MIN READ', excerpt: '', fullContent: '', image: '' });
    setBlogImageFile(null); setBlogImagePreview(''); setIsBlogModalOpen(true);
  };
  const handleOpenEditPost = (post) => { setEditingPost({ ...post }); setBlogImageFile(null); setBlogImagePreview(''); setIsBlogModalOpen(true); };
  const handleSaveBlogPost = async (e) => {
    e.preventDefault(); if (!editingPost) return;
    setUploadStatus({ active: true, stage: 'Preparing article...', percent: 10 });
    try {
      let postData = { ...editingPost };
      if (blogImageFile) {
        const r = await uploadImage(blogImageFile, 'blog', (p) => {
          setUploadStatus({ active: true, stage: p.stage === 'compressing' ? 'Optimizing cover photo...' : `Uploading (${p.percent}%)...`, percent: p.percent });
        });
        if (r.success) { postData.image = r.url; }
        else { showToast('Image processing failed: ' + (r.error || 'Unknown error'), 'error'); setUploadStatus({ active: false, stage: '', percent: 0 }); return; }
      }
      setUploadStatus({ active: true, stage: 'Publishing to journal...', percent: 95 });
      await saveBlogPost(postData);
      setIsBlogModalOpen(false); setEditingPost(null); setBlogImageFile(null); setBlogImagePreview('');
      showToast('Journal article published');
      await loadAllData();
    } catch { showToast('Error publishing article. Please try again.', 'error'); }
    finally { setUploadStatus({ active: false, stage: '', percent: 0 }); }
  };
  const handleConfirmDelete = async () => {
    if (!deleteConfirm) return;
    try {
      if (deleteConfirm.type === 'project')     { await deleteProject(deleteConfirm.id);     showToast('Project removed from portfolio'); }
      if (deleteConfirm.type === 'blog')        { await deleteBlogPost(deleteConfirm.id);    showToast('Article removed from journal'); }
      if (deleteConfirm.type === 'testimonial') { await deleteTestimonial(deleteConfirm.id); showToast('Testimonial removed from studio records'); }
      if (deleteConfirm.type === 'lead')        { await deleteConsultation(deleteConfirm.id); showToast('Inquiry removed from records'); }
      setDeleteConfirm(null); await loadAllData();
    } catch { showToast('Failed to delete item', 'error'); }
  };
  const newLeadsCount = useMemo(() => leads.filter(l => (l.status || 'new').toLowerCase() === 'new').length, [leads]);
  const filteredProjects = useMemo(() => projects.filter(p => {
    const s = !searchQuery || (p.title||'').toLowerCase().includes(searchQuery.toLowerCase()) || (p.subtitle||'').toLowerCase().includes(searchQuery.toLowerCase()) || (p.description||'').toLowerCase().includes(searchQuery.toLowerCase());
    return s && (projectCategoryFilter === 'ALL' || (p.category||p.tag||'').toUpperCase().includes(projectCategoryFilter));
  }), [projects, searchQuery, projectCategoryFilter]);
  const filteredLeads = useMemo(() => leads.filter(l => {
    const s = !searchQuery || (l.fullName||'').toLowerCase().includes(searchQuery.toLowerCase()) || (l.email||'').toLowerCase().includes(searchQuery.toLowerCase()) || (l.telephone||'').toLowerCase().includes(searchQuery.toLowerCase()) || (l.enquiry||l.message||'').toLowerCase().includes(searchQuery.toLowerCase());
    return s && (leadStatusFilter === 'ALL' || (l.status||'new').toLowerCase() === leadStatusFilter.toLowerCase());
  }), [leads, searchQuery, leadStatusFilter]);
  const filteredBlogPosts = useMemo(() => blogPosts.filter(b => {
    const s = !searchQuery || (b.title||'').toLowerCase().includes(searchQuery.toLowerCase()) || (b.excerpt||'').toLowerCase().includes(searchQuery.toLowerCase());
    return s && (blogCategoryFilter === 'ALL' || (b.category||'').toUpperCase() === blogCategoryFilter);
  }), [blogPosts, searchQuery, blogCategoryFilter]);
  const filteredTestimonials = useMemo(() => testimonials.filter(t => {
    const q = (searchQuery||'').toLowerCase();
    const s = !searchQuery || (t.clientName||'').toLowerCase().includes(q) || (t.organization||'').toLowerCase().includes(q) || (t.role||'').toLowerCase().includes(q) || (t.quote||'').toLowerCase().includes(q);
    return s && (testimonialFilter === 'ALL' || String(t.projectId) === String(testimonialFilter));
  }), [testimonials, searchQuery, testimonialFilter]);

  if (!adminUser) {
    return (
      <AdminLoginScreen
        loginEmail={loginEmail} setLoginEmail={setLoginEmail}
        loginPassword={loginPassword} setLoginPassword={setLoginPassword}
        loginError={loginError} isLoggingIn={isLoggingIn}
        onSubmit={handleLoginSubmit} onNavigate={onNavigate}
      />
    );
  }
  return (
    <div className="min-h-screen bg-[#F7F6F2] dark:bg-[#070E18] py-8 px-4 sm:px-8 lg:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="bg-white/80 dark:bg-[#0C1726]/80 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 p-5 sm:p-6 rounded-xs shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-ashara-gold/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-12 h-12 rounded-xs bg-ashara-teal/10 dark:bg-ashara-gold/15 border border-ashara-teal/20 dark:border-ashara-gold/30 flex items-center justify-center shrink-0 shadow-inner">
              <Building2 className="w-6 h-6 text-ashara-teal dark:text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[9.5px] uppercase tracking-[0.3em] font-bold text-ashara-teal dark:text-white">STUDIO MANAGEMENT ATELIER</span>
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider ${isFirebaseConfigured ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25' : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/25'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isFirebaseConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  <Database className="w-2.5 h-2.5" />
                  <span>{isFirebaseConfigured ? 'Live Cloud Sync' : 'Local Sandbox'}</span>
                </div>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl text-ashara-teal dark:text-white font-normal mt-0.5">Ashara Executive Portal</h1>
            </div>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <button onClick={() => loadAllData(true)} disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-ashara-teal dark:text-white dark:text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition border border-gray-200 dark:border-white/10 disabled:opacity-50" title="Synchronize database">
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-ashara-teal dark:text-white' : ''}`} />
              <span className="hidden sm:inline">{isRefreshing ? 'Syncing...' : 'Sync'}</span>
            </button>
            <button onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-gray-300 dark:border-white/15 text-xs uppercase tracking-wider font-semibold text-ashara-teal dark:text-white dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xs transition">
              <span>View Site</span><ArrowUpRight className="w-3.5 h-3.5 text-ashara-teal dark:text-white" />
            </button>
            <div className="h-6 w-px bg-gray-200 dark:bg-white/10 mx-1 hidden sm:block" />
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs">
              <div className="w-6 h-6 rounded-full bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-[10px] font-bold flex items-center justify-center">
                {(adminUser.name || adminUser.email || 'D')[0].toUpperCase()}
              </div>
              <span className="text-xs font-mono text-ashara-teal dark:text-white truncate max-w-[140px]">{adminUser.email || 'Director'}</span>
            </div>
            <button onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-rose-500/10 hover:bg-rose-500 hover:text-white border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs uppercase tracking-wider font-semibold rounded-xs transition duration-200" title="Sign Out">
              <LogOut className="w-3.5 h-3.5" /><span>Sign Out</span>
            </button>
          </div>
        </header>

        {notification && (
          <div className={`p-4 rounded-xs text-xs uppercase tracking-wider font-semibold flex items-center justify-between shadow-lg border animate-slide-down ${notification.type === 'error' ? 'bg-rose-600 text-white border-rose-700' : notification.type === 'info' ? 'bg-ashara-teal text-white border-ashara-teal/80' : 'bg-[#1E4E4E] dark:bg-ashara-gold text-white dark:text-ashara-dark border-ashara-teal dark:border-ashara-gold'}`}>
            <div className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 shrink-0" /><span>{notification.message}</span></div>
            <button onClick={() => setNotification(null)} className="p-1 hover:opacity-75 transition"><X className="w-4 h-4" /></button>
          </div>
        )}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tab: 'leads',        label: 'Client Inquiries',      count: leads.length,        icon: <Users className="w-5 h-5" />,    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20', sub: <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{newLeadsCount} New Leads</span>, action: 'View matrix' },
            { tab: 'projects',     label: 'Portfolio Showcase',    count: projects.length,     icon: <Layers className="w-5 h-5" />,   color: 'bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-white border-ashara-teal/20 dark:border-ashara-gold/30', sub: <span className="text-ashara-teal dark:text-white font-light truncate">Gov • Corp • Commercial</span>, action: 'Manage' },
            { tab: 'blog',         label: 'Architectural Journal', count: blogPosts.length,    icon: <FileText className="w-5 h-5" />, color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20', sub: <span className="text-ashara-teal dark:text-white font-light truncate">Published Essays & Insights</span>, action: 'Edit' },
            { tab: 'testimonials', label: 'Client Voices',         count: testimonials.length, icon: <Quote className="w-5 h-5" />,   color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20', sub: <span className="text-ashara-teal dark:text-white font-light truncate">Project Reviews & Ratings</span>, action: 'Manage' },
          ].map(({ tab, label, count, icon, color, sub, action }) => (
            <div key={tab} onClick={() => setActiveTab(tab)}
              className={`p-5 bg-white dark:bg-[#0C1726] border rounded-xs shadow-xs hover:shadow-md transition-all cursor-pointer group ${activeTab === tab ? 'border-ashara-teal dark:border-ashara-gold ring-1 ring-ashara-teal dark:ring-ashara-gold' : 'border-gray-200 dark:border-white/10'}`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ashara-teal dark:text-white">{label}</p>
                  <h3 className="font-serif text-3xl font-bold text-ashara-teal dark:text-white mt-1">{count}</h3>
                </div>
                <div className={`w-10 h-10 rounded-xs ${color} border flex items-center justify-center group-hover:scale-110 transition-transform`}>{icon}</div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs">
                {sub}
                <span className="text-[10px] text-ashara-teal dark:text-white group-hover:text-ashara-teal dark:group-hover:text-ashara-teal transition flex items-center gap-0.5">{action}<ChevronRight className="w-3 h-3" /></span>
              </div>
            </div>
          ))}
        </section>

        <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 p-4 sm:p-5 rounded-xs shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <nav className="flex items-center gap-1.5 p-1 bg-gray-100/80 dark:bg-white/5 rounded-xs border border-gray-200/60 dark:border-white/5 overflow-x-auto">
              {[
                { key: 'projects',     label: 'Projects Showcase', icon: <Layers className="w-4 h-4" />,   count: projects.length },
                { key: 'leads',        label: 'Client Enquiries',  icon: <Users className="w-4 h-4" />,    count: leads.length, badge: newLeadsCount },
                { key: 'blog',         label: 'The Journal',       icon: <FileText className="w-4 h-4" />, count: blogPosts.length },
                { key: 'testimonials', label: 'Client Voices',     icon: <Quote className="w-4 h-4" />,    count: testimonials.length },
              ].map(({ key, label, icon, count, badge }) => (
                <button key={key} onClick={() => { setActiveTab(key); setSearchQuery(''); }}
                  className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all whitespace-nowrap ${activeTab === key ? 'bg-white dark:bg-[#1E2E42] text-ashara-teal dark:text-white shadow-sm' : 'text-ashara-teal dark:text-white hover:text-ashara-teal dark:hover:text-white'}`}>
                  {icon}<span>{label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${badge && badge > 0 ? 'bg-emerald-500 text-white font-bold' : activeTab === key ? 'bg-ashara-teal/10 dark:bg-ashara-gold/20 text-ashara-teal dark:text-white' : 'bg-gray-200/80 dark:bg-white/10 text-ashara-teal'}`}>{count}</span>
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              {activeTab === 'projects' && <button onClick={handleOpenNewProject} className="inline-flex items-center gap-2 px-4 py-2.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold rounded-xs transition shadow-sm"><Plus className="w-4 h-4 stroke-[2.5]" /><span>Add New Project</span></button>}
              {activeTab === 'blog' && <button onClick={handleOpenNewPost} className="inline-flex items-center gap-2 px-4 py-2.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold rounded-xs transition shadow-sm"><Plus className="w-4 h-4 stroke-[2.5]" /><span>Publish New Article</span></button>}
              {activeTab === 'testimonials' && <button onClick={handleOpenNewTestimonial} className="inline-flex items-center gap-2 px-4 py-2.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold rounded-xs transition shadow-sm"><Plus className="w-4 h-4 stroke-[2.5]" /><span>Add Testimonial</span></button>}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-white/5">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ashara-teal dark:text-white" />
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={activeTab === 'projects' ? 'Search projects...' : activeTab === 'leads' ? 'Search inquiries...' : activeTab === 'testimonials' ? 'Search reviews...' : 'Search articles...'}
                className="w-full pl-10 pr-8 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs text-xs text-ashara-teal dark:text-white placeholder-gray-400 focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold transition" />
              {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ashara-teal dark:text-white hover:text-ashara-teal p-0.5"><X className="w-3.5 h-3.5" /></button>}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {activeTab === 'projects' && (
                <div className="flex items-center gap-1.5 text-xs text-ashara-teal dark:text-white">
                  <Filter className="w-3.5 h-3.5" />
                  <select value={projectCategoryFilter} onChange={(e) => setProjectCategoryFilter(e.target.value)}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs text-xs text-ashara-teal dark:text-white focus:outline-none focus:border-ashara-teal">
                    <option value="ALL">All Categories ({projects.length})</option>
                    <option value="GOVERNMENTAL">Governmental</option>
                    <option value="PRIVATE">Private Entities</option>
                    <option value="CORPORATION">Corporations</option>
                    <option value="COMMERCIAL">Commercial</option>
                  </select>
                </div>
              )}
              {activeTab === 'testimonials' && (
                <div className="flex items-center gap-1.5 text-xs text-ashara-teal dark:text-white">
                  <Filter className="w-3.5 h-3.5" />
                  <select value={testimonialFilter} onChange={(e) => setTestimonialFilter(e.target.value)}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs text-xs text-ashara-teal dark:text-white focus:outline-none focus:border-ashara-teal">
                    <option value="ALL">All Project Links ({testimonials.length})</option>
                    {projects.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
                  </select>
                </div>
              )}
              {activeTab === 'leads' && (
                <div className="flex items-center gap-1.5 text-xs text-ashara-teal dark:text-white">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <select value={leadStatusFilter} onChange={(e) => setLeadStatusFilter(e.target.value)}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs text-xs text-ashara-teal dark:text-white focus:outline-none focus:border-ashara-teal">
                    <option value="ALL">All Inquiries ({leads.length})</option>
                    <option value="new">New Inquiries ({newLeadsCount})</option>
                    <option value="contacted">Contacted</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>

        {activeTab === 'projects'     && <AdminProjectsTab     filteredProjects={filteredProjects}       searchQuery={searchQuery} onOpenNew={handleOpenNewProject}     onOpenEdit={handleOpenEditProject}     onDelete={setDeleteConfirm} />}
        {activeTab === 'leads'        && <AdminLeadsTab        filteredLeads={filteredLeads}              searchQuery={searchQuery} copiedId={copiedId}                   onCopy={handleCopy}                    onUpdateStatus={handleUpdateLeadStatus} onDelete={setDeleteConfirm} />}
        {activeTab === 'blog'         && <AdminBlogTab         filteredBlogPosts={filteredBlogPosts}      searchQuery={searchQuery} onOpenNew={handleOpenNewPost}         onOpenEdit={handleOpenEditPost}        onDelete={setDeleteConfirm} />}
        {activeTab === 'testimonials' && <AdminTestimonialsTab filteredTestimonials={filteredTestimonials} searchQuery={searchQuery} projects={projects}                  onOpenNew={handleOpenNewTestimonial}   onOpenEdit={handleOpenEditTestimonial} onDelete={setDeleteConfirm} />}

      </div>

      {isProjectModalOpen && (
        <AdminProjectModal
          editingProject={editingProject} setEditingProject={setEditingProject}
          projectImageFile={projectImageFile} setProjectImageFile={setProjectImageFile}
          projectImagePreview={projectImagePreview} setProjectImagePreview={setProjectImagePreview}
          projectGalleryFiles={projectGalleryFiles} setProjectGalleryFiles={setProjectGalleryFiles}
          projectGalleryPreviews={projectGalleryPreviews} setProjectGalleryPreviews={setProjectGalleryPreviews}
          uploadStatus={uploadStatus} formatFileSize={formatFileSize}
          onClose={() => { if (!uploadStatus.active) { setIsProjectModalOpen(false); setProjectImageFile(null); setProjectImagePreview(''); }}}
          onSubmit={handleSaveProject}
        />
      )}
      {isBlogModalOpen && (
        <AdminBlogModal
          editingPost={editingPost} setEditingPost={setEditingPost}
          blogImageFile={blogImageFile} setBlogImageFile={setBlogImageFile}
          blogImagePreview={blogImagePreview} setBlogImagePreview={setBlogImagePreview}
          uploadStatus={uploadStatus} formatFileSize={formatFileSize}
          onClose={() => { if (!uploadStatus.active) { setIsBlogModalOpen(false); setBlogImageFile(null); setBlogImagePreview(''); }}}
          onSubmit={handleSaveBlogPost}
        />
      )}
      {isTestimonialModalOpen && (
        <AdminTestimonialModal
          editingTestimonial={editingTestimonial} setEditingTestimonial={setEditingTestimonial}
          projects={projects}
          onClose={() => { setIsTestimonialModalOpen(false); setEditingTestimonial(null); }}
          onSubmit={handleSaveTestimonial}
        />
      )}
      <AdminDeleteConfirm
        deleteConfirm={deleteConfirm}
        onCancel={() => setDeleteConfirm(null)}
        onConfirm={handleConfirmDelete}
      />

    </div>
  );
}

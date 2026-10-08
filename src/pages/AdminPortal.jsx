import React, { useState, useEffect, useMemo } from 'react';
import {
  Users, Layers, Database, Plus,
  RefreshCw, ChevronRight, ArrowUpRight, Building2,
  CheckCircle2, SlidersHorizontal, Filter, Search, X,
  LogOut, Quote, Menu
} from 'lucide-react';
import {
  getConsultations, getDynamicProjects, saveProject, deleteProject,
  updateConsultationStatus, deleteConsultation,
  isFirebaseConfigured, loginAdminUser, logoutAdminUser, uploadImage,
  getDynamicTestimonials, saveTestimonial, deleteTestimonial, subscribeToTestimonials
} from '../services/firebaseService';

import AdminLoginScreen      from './admin/AdminLoginScreen';
import AdminProjectsTab      from './admin/AdminProjectsTab';
import AdminLeadsTab         from './admin/AdminLeadsTab';
import AdminTestimonialsTab  from './admin/AdminTestimonialsTab';
import AdminProjectModal     from './admin/AdminProjectModal';
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
  const [testimonials, setTestimonials] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [notification,  setNotification]  = useState(null);
  const [searchQuery,           setSearchQuery]           = useState('');
  const [projectCategoryFilter, setProjectCategoryFilter] = useState('ALL');
  const [leadStatusFilter,      setLeadStatusFilter]      = useState('ALL');
  const [testimonialFilter,     setTestimonialFilter]     = useState('ALL');
  const [editingProject,          setEditingProject]          = useState(null);
  const [isProjectModalOpen,      setIsProjectModalOpen]      = useState(false);
  const [projectImageFile,        setProjectImageFile]        = useState(null);
  const [projectImagePreview,     setProjectImagePreview]     = useState('');
  const [projectGalleryFiles,     setProjectGalleryFiles]     = useState([]);
  const [projectGalleryPreviews,  setProjectGalleryPreviews]  = useState([]);
  const [editingTestimonial,     setEditingTestimonial]     = useState(null);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [uploadStatus,  setUploadStatus]  = useState({ active: false, stage: '', percent: 0 });
  const [copiedId,      setCopiedId]      = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    if (isManualRefresh) setIsRefreshing(true);
    try {
      const [leadsData, projectsData, testimonialsData] = await Promise.all([
        getConsultations(), getDynamicProjects(), getDynamicTestimonials()
      ]);
      setLeads(leadsData || []); setProjects(projectsData || []);
      setTestimonials(testimonialsData || []);
      if (isManualRefresh) showToast('Atelier database synchronized');
    } catch { showToast('Could not sync remote data. Offline cache active.', 'error'); }
    finally { setIsRefreshing(false); }
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

  const handleConfirmDelete = async () => {
    if (!deleteConfirm) return;
    try {
      if (deleteConfirm.type === 'project')     { await deleteProject(deleteConfirm.id);     showToast('Project removed from portfolio'); }
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

  const NAV_CONFIG = [
    { key: 'projects',     label: 'Projects Showcase', icon: Layers, count: projects.length },
    { key: 'leads',        label: 'Client Enquiries',  icon: Users,  count: leads.length, badge: newLeadsCount },
    { key: 'testimonials', label: 'Client Voices',     icon: Quote,  count: testimonials.length },
  ];
  const activeNav = NAV_CONFIG.find((n) => n.key === activeTab);

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#F7F6F2] dark:bg-[#070E18] transition-colors duration-300 lg:grid lg:grid-cols-[270px_minmax(0,1fr)] lg:grid-rows-[auto_minmax(0,1fr)] lg:[grid-template-areas:'sidebar_header''sidebar_main']">

      {/* Mobile backdrop behind the sidebar drawer */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* ==================== SIDEBAR ==================== */}
      <aside className={`[grid-area:sidebar] fixed inset-y-0 left-0 z-50 w-[280px] lg:w-auto lg:static lg:translate-x-0 bg-ashara-teal dark:bg-[#0C1726] border-r border-black/10 dark:border-white/10 flex flex-col overflow-y-auto transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        {/* Brand */}
        <div className="p-5 border-b border-white/10 relative">
          <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 p-1.5 text-white/60 hover:text-white transition lg:hidden" aria-label="Close menu">
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xs bg-ashara-gold/15 border border-ashara-gold/30 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-ashara-gold" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-ashara-gold">Studio Atelier</p>
              <h2 className="font-serif text-lg text-white font-normal leading-tight truncate">Ashara Portal</h2>
            </div>
          </div>
          <div className={`mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-wider ${isFirebaseConfigured ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-400/25' : 'bg-amber-500/10 text-amber-300 border border-amber-400/25'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isFirebaseConfigured ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <Database className="w-2.5 h-2.5" />
            <span>{isFirebaseConfigured ? 'Live Cloud Sync' : 'Local Sandbox'}</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1">
          <p className="px-3 pt-2 pb-1.5 text-[9px] uppercase tracking-[0.25em] font-bold text-white/35">Manage</p>
          {NAV_CONFIG.map(({ key, label, icon: Icon, count, badge }) => (
            <button key={key} onClick={() => { setActiveTab(key); setSearchQuery(''); setIsSidebarOpen(false); }}
              className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xs text-xs uppercase tracking-wider font-semibold transition-all ${activeTab === key ? 'bg-white/10 text-white' : 'text-white/55 hover:text-white hover:bg-white/5'}`}>
              {activeTab === key && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-ashara-gold rounded-full" />}
              <Icon className="w-4 h-4 shrink-0" />
              <span className="flex-1 text-left truncate">{label}</span>
              {badge > 0 && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />}
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold shrink-0 ${badge > 0 ? 'bg-emerald-500 text-white' : activeTab === key ? 'bg-ashara-gold/20 text-ashara-gold' : 'bg-white/10 text-white/60'}`}>{count}</span>
            </button>
          ))}
        </nav>

        {/* User + Sign Out */}
        <div className="mt-auto p-4 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-ashara-gold text-ashara-dark text-xs font-bold flex items-center justify-center shrink-0">
              {(adminUser.name || adminUser.email || 'D')[0].toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">{adminUser.name || 'Studio Director'}</p>
              <p className="text-[10px] font-mono text-white/50 truncate">{adminUser.email || 'Director'}</p>
            </div>
          </div>
          <button onClick={handleLogout}
            className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-rose-500/15 hover:bg-rose-500 border border-rose-400/25 hover:border-rose-500 text-rose-300 hover:text-white text-xs uppercase tracking-wider font-semibold rounded-xs transition duration-200">
            <LogOut className="w-3.5 h-3.5" /><span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ==================== HEADER ==================== */}
      <header className="[grid-area:header] sticky top-0 z-30 bg-white/85 dark:bg-[#0C1726]/85 backdrop-blur-xl border-b border-gray-200/80 dark:border-white/10 px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3 sm:gap-4">
        <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 -ml-1 text-ashara-teal dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xs transition" aria-label="Open menu">
          <Menu className="w-5 h-5" />
        </button>
        <div className="min-w-0">
          <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-ashara-teal/60 dark:text-ashara-gold">Studio Management Atelier</p>
          <h1 className="font-serif text-lg sm:text-xl text-ashara-teal dark:text-white font-normal truncate">{activeNav ? activeNav.label : 'Dashboard'}</h1>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {(activeTab === 'projects' || activeTab === 'testimonials') && (
            <button onClick={activeTab === 'projects' ? handleOpenNewProject : handleOpenNewTestimonial}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold rounded-xs transition shadow-sm">
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span className="hidden sm:inline">{activeTab === 'projects' ? 'Add Project' : 'Add Testimonial'}</span>
            </button>
          )}
          <button onClick={() => loadAllData(true)} disabled={isRefreshing} title="Synchronize database"
            className="p-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-ashara-teal dark:text-white rounded-xs transition disabled:opacity-50">
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
          <button onClick={() => onNavigate('home')} title="View live site"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 border border-gray-300 dark:border-white/15 text-xs uppercase tracking-wider font-semibold text-ashara-teal dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xs transition">
            <span className="hidden md:inline">View Site</span><ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ==================== MAIN ==================== */}
      <main className="[grid-area:main] lg:overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 animate-fade-in">

        {/* Stat Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { tab: 'leads',        label: 'Client Inquiries',      count: leads.length,        icon: <Users className="w-5 h-5" />,    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20', sub: <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{newLeadsCount} New Leads</span>, action: 'View matrix' },
            { tab: 'projects',     label: 'Portfolio Showcase',    count: projects.length,     icon: <Layers className="w-5 h-5" />,   color: 'bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-white border-ashara-teal/20 dark:border-ashara-gold/30', sub: <span className="text-ashara-teal dark:text-white font-light truncate">Gov • Corp • Commercial</span>, action: 'Manage' },
            { tab: 'testimonials', label: 'Client Voices',         count: testimonials.length, icon: <Quote className="w-5 h-5" />,   color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20', sub: <span className="text-ashara-teal dark:text-white font-light truncate">Project Reviews</span>, action: 'Manage' },
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

        {/* Toolbar: Search + Filters */}
        <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 p-3 sm:p-4 rounded-xs shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ashara-teal dark:text-white" />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={activeTab === 'projects' ? 'Search projects...' : activeTab === 'leads' ? 'Search inquiries...' : 'Search reviews...'}
              className="w-full pl-10 pr-8 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs text-xs text-ashara-teal dark:text-white placeholder-gray-400 focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold transition" />
            {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ashara-teal dark:text-white hover:text-ashara-teal p-0.5"><X className="w-3.5 h-3.5" /></button>}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 sm:ml-auto">
            {activeTab === 'projects' && (
              <div className="flex items-center gap-1.5 text-xs text-ashara-teal dark:text-white">
                <Filter className="w-3.5 h-3.5" />
                <select value={projectCategoryFilter} onChange={(e) => setProjectCategoryFilter(e.target.value)}
                  className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs text-xs text-ashara-teal dark:text-white focus:outline-none focus:border-ashara-teal">
                  <option value="ALL" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">All Categories ({projects.length})</option>
                  <option value="GOVERNMENTAL" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">Governmental</option>
                  <option value="PRIVATE" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">Private Entities</option>
                  <option value="CORPORATION" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">Corporations</option>
                  <option value="COMMERCIAL" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">Commercial</option>
                  <option value="RESIDENTIAL" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">Residential</option>
                </select>
              </div>
            )}
            {activeTab === 'testimonials' && (
              <div className="flex items-center gap-1.5 text-xs text-ashara-teal dark:text-white">
                <Filter className="w-3.5 h-3.5" />
                <select value={testimonialFilter} onChange={(e) => setTestimonialFilter(e.target.value)}
                  className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs text-xs text-ashara-teal dark:text-white focus:outline-none focus:border-ashara-teal">
                  <option value="ALL" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">All Project Links ({testimonials.length})</option>
                  {projects.map((p) => <option key={p.id} value={p.id} className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">{p.title}</option>)}
                </select>
              </div>
            )}
            {activeTab === 'leads' && (
              <div className="flex items-center gap-1.5 text-xs text-ashara-teal dark:text-white">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <select value={leadStatusFilter} onChange={(e) => setLeadStatusFilter(e.target.value)}
                  className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs text-xs text-ashara-teal dark:text-white focus:outline-none focus:border-ashara-teal">
                  <option value="ALL" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">All Inquiries ({leads.length})</option>
                  <option value="new" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">New Inquiries ({newLeadsCount})</option>
                  <option value="contacted" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">Contacted</option>
                  <option value="completed" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">Completed</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'projects'     && <AdminProjectsTab     filteredProjects={filteredProjects}       searchQuery={searchQuery} onOpenNew={handleOpenNewProject}     onOpenEdit={handleOpenEditProject}     onDelete={setDeleteConfirm} />}
        {activeTab === 'leads'        && <AdminLeadsTab        filteredLeads={filteredLeads}              searchQuery={searchQuery} copiedId={copiedId}                   onCopy={handleCopy}                    onUpdateStatus={handleUpdateLeadStatus} onDelete={setDeleteConfirm} />}
        {activeTab === 'testimonials' && <AdminTestimonialsTab filteredTestimonials={filteredTestimonials} searchQuery={searchQuery} projects={projects}                  onOpenNew={handleOpenNewTestimonial}   onOpenEdit={handleOpenEditTestimonial} onDelete={setDeleteConfirm} />}

      </main>

      {/* Toast Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 left-4 sm:left-auto sm:max-w-sm z-[60] p-4 rounded-xs text-xs uppercase tracking-wider font-semibold flex items-center justify-between shadow-lg border animate-slide-down ${notification.type === 'error' ? 'bg-rose-600 text-white border-rose-700' : notification.type === 'info' ? 'bg-ashara-teal text-white border-ashara-teal/80' : 'bg-[#1E4E4E] dark:bg-ashara-gold text-white dark:text-ashara-dark border-ashara-teal dark:border-ashara-gold'}`}>
          <div className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 shrink-0" /><span>{notification.message}</span></div>
          <button onClick={() => setNotification(null)} className="p-1 hover:opacity-75 transition"><X className="w-4 h-4" /></button>
        </div>
      )}

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

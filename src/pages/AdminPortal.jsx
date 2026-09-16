import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Layers, 
  FileText, 
  Database, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle, 
  Clock, 
  Mail, 
  Phone, 
  ExternalLink,
  Save,
  X,
  AlertCircle,
  Lock,
  Eye,
  EyeOff,
  LogOut,
  Loader2,
  Upload,
  ImagePlus,
  Search,
  Filter,
  Sparkles,
  RefreshCw,
  ChevronRight,
  ArrowUpRight,
  Copy,
  Check,
  MessageSquare,
  Building2,
  Briefcase,
  Landmark,
  Calendar,
  Info,
  CheckCircle2,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { 
  getConsultations, 
  getDynamicProjects, 
  saveProject, 
  deleteProject, 
  getDynamicBlogPosts, 
  saveBlogPost, 
  deleteBlogPost,
  updateConsultationStatus,
  isFirebaseConfigured,
  loginAdminUser,
  logoutAdminUser,
  uploadImage
} from '../services/firebaseService';
import AsharaLogo from '../components/AsharaLogo';

export default function AdminPortal({ onNavigate }) {
  // Authentication State
  const [adminUser, setAdminUser] = useState(() => {
    const saved = sessionStorage.getItem('ashara_admin_auth');
    return saved ? JSON.parse(saved) : null;
  });

  // Login Form States
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Portal Navigation & Data
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'leads' | 'blog'
  const [leads, setLeads] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(null);
  const [notification, setNotification] = useState(null);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [projectCategoryFilter, setProjectCategoryFilter] = useState('ALL');
  const [leadStatusFilter, setLeadStatusFilter] = useState('ALL');
  const [blogCategoryFilter, setBlogCategoryFilter] = useState('ALL');

  // Form Modal States
  const [editingProject, setEditingProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [projectImageFile, setProjectImageFile] = useState(null);
  const [projectImagePreview, setProjectImagePreview] = useState('');

  const [editingPost, setEditingPost] = useState(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [blogImageFile, setBlogImageFile] = useState(null);
  const [blogImagePreview, setBlogImagePreview] = useState('');

  // Delete Confirmation Modal State
  const [deleteConfirm, setDeleteConfirm] = useState(null); // { type: 'project' | 'blog', id, title }

  // Upload Status
  const [uploadStatus, setUploadStatus] = useState({ active: false, stage: '', percent: 0 });

  // Clipboard feedback state
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    if (adminUser) {
      loadAllData();
    }
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
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    try {
      const res = await loginAdminUser(loginEmail, loginPassword);
      if (res.success) {
        setAdminUser(res.user);
        showToast(`Welcome back, ${res.user.name || 'Studio Director'}`);
      } else {
        setLoginError(res.error || 'Invalid director credentials');
      }
    } catch (err) {
      setLoginError('Authentication failed. Please verify connection and credentials.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logoutAdminUser();
    setAdminUser(null);
    setLoginEmail('');
    setLoginPassword('');
    showToast('Signed out of Studio Atelier', 'info');
  };

  const loadAllData = async (isManualRefresh = false) => {
    if (isManualRefresh) setIsRefreshing(true);
    else setIsLoading(true);

    try {
      const [leadsData, projectsData, blogData] = await Promise.all([
        getConsultations(),
        getDynamicProjects(),
        getDynamicBlogPosts()
      ]);
      setLeads(leadsData || []);
      setProjects(projectsData || []);
      setBlogPosts(blogData || []);
      setLastRefreshed(new Date());
      if (isManualRefresh) {
        showToast('Atelier database synchronized');
      }
    } catch (err) {
      console.error('Failed to load atelier data:', err);
      showToast('Could not sync remote data. Offline cache active.', 'error');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  // --- Lead Status Management ---
  const handleUpdateLeadStatus = async (leadId, newStatus) => {
    try {
      await updateConsultationStatus(leadId, newStatus);
      setLeads(prev => prev.map(l => String(l.id) === String(leadId) ? { ...l, status: newStatus } : l));
      showToast(`Lead marked as ${newStatus.toUpperCase()}`);
    } catch (err) {
      showToast('Failed to update lead status', 'error');
    }
  };

  // --- Project CRUD ---
  const handleOpenNewProject = () => {
    setEditingProject({
      title: '',
      category: 'GOVERNMENTAL',
      tag: 'GOVERNMENTAL',
      subtitle: '',
      image: '',
      description: ''
    });
    setProjectImageFile(null);
    setProjectImagePreview('');
    setIsProjectModalOpen(true);
  };

  const handleOpenEditProject = (proj) => {
    setEditingProject({ ...proj });
    setProjectImageFile(null);
    setProjectImagePreview('');
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    if (!editingProject) return;
    setUploadStatus({ active: true, stage: 'Preparing project data...', percent: 10 });
    try {
      let projectData = { ...editingProject };
      if (projectImageFile) {
        const uploadResult = await uploadImage(projectImageFile, 'projects', (p) => {
          setUploadStatus({
            active: true,
            stage: p.stage === 'compressing' ? 'Optimizing architectural photo...' : `Uploading (${p.percent}%)...`,
            percent: p.percent
          });
        });
        if (uploadResult.success) {
          projectData.image = uploadResult.url;
        } else {
          showToast('Image processing failed: ' + (uploadResult.error || 'Unknown error'), 'error');
          setUploadStatus({ active: false, stage: '', percent: 0 });
          return;
        }
      }
      setUploadStatus({ active: true, stage: 'Syncing with atelier database...', percent: 95 });
      await saveProject(projectData);
      setIsProjectModalOpen(false);
      setEditingProject(null);
      setProjectImageFile(null);
      setProjectImagePreview('');
      showToast(`Project "${projectData.title}" saved successfully`);
      await loadAllData();
    } catch (err) {
      console.error('Failed to save project:', err);
      showToast('Error saving project. Please try again.', 'error');
    } finally {
      setUploadStatus({ active: false, stage: '', percent: 0 });
    }
  };

  const handleConfirmDelete = async () => {
    if (!deleteConfirm) return;
    try {
      if (deleteConfirm.type === 'project') {
        await deleteProject(deleteConfirm.id);
        showToast('Project removed from portfolio');
      } else if (deleteConfirm.type === 'blog') {
        await deleteBlogPost(deleteConfirm.id);
        showToast('Article removed from journal');
      }
      setDeleteConfirm(null);
      await loadAllData();
    } catch (err) {
      showToast('Failed to delete item', 'error');
    }
  };

  // --- Blog CRUD ---
  const handleOpenNewPost = () => {
    setEditingPost({
      title: '',
      category: 'CIVIC ARCHITECTURE',
      readTime: '4 MIN READ',
      excerpt: '',
      fullContent: '',
      image: ''
    });
    setBlogImageFile(null);
    setBlogImagePreview('');
    setIsBlogModalOpen(true);
  };

  const handleOpenEditPost = (post) => {
    setEditingPost({ ...post });
    setBlogImageFile(null);
    setBlogImagePreview('');
    setIsBlogModalOpen(true);
  };

  const handleSaveBlogPost = async (e) => {
    e.preventDefault();
    if (!editingPost) return;
    setUploadStatus({ active: true, stage: 'Preparing article...', percent: 10 });
    try {
      let postData = { ...editingPost };
      if (blogImageFile) {
        const uploadResult = await uploadImage(blogImageFile, 'blog', (p) => {
          setUploadStatus({
            active: true,
            stage: p.stage === 'compressing' ? 'Optimizing cover photo...' : `Uploading (${p.percent}%)...`,
            percent: p.percent
          });
        });
        if (uploadResult.success) {
          postData.image = uploadResult.url;
        } else {
          showToast('Image processing failed: ' + (uploadResult.error || 'Unknown error'), 'error');
          setUploadStatus({ active: false, stage: '', percent: 0 });
          return;
        }
      }
      setUploadStatus({ active: true, stage: 'Publishing to journal...', percent: 95 });
      await saveBlogPost(postData);
      setIsBlogModalOpen(false);
      setEditingPost(null);
      setBlogImageFile(null);
      setBlogImagePreview('');
      showToast('Journal article published');
      await loadAllData();
    } catch (err) {
      console.error('Failed to publish article:', err);
      showToast('Error publishing article. Please try again.', 'error');
    } finally {
      setUploadStatus({ active: false, stage: '', percent: 0 });
    }
  };

  // --- Filtered Computations ---
  const newLeadsCount = useMemo(() => leads.filter(l => (l.status || 'new').toLowerCase() === 'new').length, [leads]);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesSearch = !searchQuery || 
        (p.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.subtitle || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const category = (p.category || p.tag || '').toUpperCase();
      const matchesCategory = projectCategoryFilter === 'ALL' || category.includes(projectCategoryFilter);

      return matchesSearch && matchesCategory;
    });
  }, [projects, searchQuery, projectCategoryFilter]);

  const filteredLeads = useMemo(() => {
    return leads.filter(l => {
      const matchesSearch = !searchQuery ||
        (l.fullName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (l.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (l.telephone || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (l.enquiry || l.message || '').toLowerCase().includes(searchQuery.toLowerCase());

      const status = (l.status || 'new').toLowerCase();
      const matchesStatus = leadStatusFilter === 'ALL' || status === leadStatusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [leads, searchQuery, leadStatusFilter]);

  const filteredBlogPosts = useMemo(() => {
    return blogPosts.filter(b => {
      const matchesSearch = !searchQuery ||
        (b.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (b.excerpt || '').toLowerCase().includes(searchQuery.toLowerCase());

      const category = (b.category || '').toUpperCase();
      const matchesCategory = blogCategoryFilter === 'ALL' || category === blogCategoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [blogPosts, searchQuery, blogCategoryFilter]);

  // ----------------------------------------------------
  // 1. UNAUTHENTICATED: LUXURY ATELIER LOGIN SCREEN
  // ----------------------------------------------------
  if (!adminUser) {
    return (
      <div className="min-h-[92vh] flex items-center justify-center py-16 px-4 sm:px-6 relative overflow-hidden bg-[#FAF9F5] dark:bg-[#070E18] transition-colors duration-500">
        
        {/* Architectural Ambient Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-ashara-teal/10 via-ashara-gold/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-ashara-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-lg relative z-10">
          <div className="bg-white/90 dark:bg-[#0C1726]/90 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-2xl p-8 sm:p-12 rounded-xs space-y-8 relative overflow-hidden">
            
            {/* Top Sovereign Gold Hairline */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-ashara-teal via-ashara-gold to-ashara-teal" />

            {/* Header & Emblem */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/30 shadow-inner mx-auto mb-2">
                <Lock className="w-6 h-6 text-ashara-teal dark:text-ashara-gold stroke-[1.7]" />
              </div>
              
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.38em] text-ashara-teal dark:text-ashara-gold font-bold">
                  STUDIO ATELIER CMS
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white font-normal">
                  Director Access
                </h1>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 font-light max-w-sm mx-auto leading-relaxed">
                Curated portfolio and architectural client lead management for Ashara Interiors studio directors.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              {loginError && (
                <div className="p-3.5 bg-rose-500/10 border border-rose-500/25 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2.5 rounded-xs animate-shake">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span className="font-medium">{loginError}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-gray-700 dark:text-gray-300">
                  Director Email / ID
                </label>
                <input
                  type="text"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="admin@ashara.com"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white placeholder-gray-400 rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold transition shadow-inner"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-gray-700 dark:text-gray-300">
                  Security Passcode
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white placeholder-gray-400 rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold transition pr-10 shadow-inner"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold transition p-1"
                    title={showPassword ? "Hide passcode" : "Show passcode"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 rounded-xs"
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>AUTHENTICATING DIRECTOR...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>UNLOCK ATELIER PORTAL</span>
                  </>
                )}
              </button>
            </form>

            {/* Return Link */}
            <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs">
              <button
                onClick={() => onNavigate('home')}
                className="text-gray-500 dark:text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold font-medium transition flex items-center gap-1.5"
              >
                ← Return to Public Gallery
              </button>
              <span className="text-[10px] font-mono text-gray-400">
                v2.4 Atelier
              </span>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2. AUTHENTICATED: EXECUTIVE STUDIO MANAGEMENT ATELIER
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#F7F6F2] dark:bg-[#070E18] py-8 px-4 sm:px-8 lg:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ==================================================== */}
        {/* TOP EXECUTIVE APP BAR                               */}
        {/* ==================================================== */}
        <header className="bg-white/80 dark:bg-[#0C1726]/80 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 p-5 sm:p-6 rounded-xs shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-ashara-gold/10 rounded-full blur-2xl pointer-events-none" />

          {/* Studio Brand & Title */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-12 h-12 rounded-xs bg-ashara-teal/10 dark:bg-ashara-gold/15 border border-ashara-teal/20 dark:border-ashara-gold/30 flex items-center justify-center shrink-0 shadow-inner">
              <Building2 className="w-6 h-6 text-ashara-teal dark:text-ashara-gold" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[9.5px] uppercase tracking-[0.3em] font-bold text-ashara-teal dark:text-ashara-gold">
                  STUDIO MANAGEMENT ATELIER
                </span>
                
                {/* Live Sync Status Pill */}
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider ${
                  isFirebaseConfigured 
                    ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25' 
                    : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/25'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isFirebaseConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  <Database className="w-2.5 h-2.5" />
                  <span>{isFirebaseConfigured ? 'Live Cloud Sync' : 'Local Sandbox'}</span>
                </div>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal dark:text-white font-normal mt-0.5">
                Ashara Executive Portal
              </h1>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <button
              onClick={() => loadAllData(true)}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-ashara-charcoal dark:text-gray-200 text-xs uppercase tracking-wider font-semibold rounded-xs transition border border-gray-200 dark:border-white/10 disabled:opacity-50"
              title="Synchronize database"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-ashara-teal dark:text-ashara-gold' : ''}`} />
              <span className="hidden sm:inline">{isRefreshing ? 'Syncing...' : 'Sync'}</span>
            </button>

            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-gray-300 dark:border-white/15 text-xs uppercase tracking-wider font-semibold text-ashara-charcoal dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xs transition"
            >
              <span>View Site</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
            </button>

            <div className="h-6 w-px bg-gray-200 dark:bg-white/10 mx-1 hidden sm:block" />

            {/* Director Profile Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs">
              <div className="w-6 h-6 rounded-full bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-[10px] font-bold flex items-center justify-center">
                {(adminUser.name || adminUser.email || 'D')[0].toUpperCase()}
              </div>
              <span className="text-xs font-mono text-gray-600 dark:text-gray-300 truncate max-w-[140px]">
                {adminUser.email || 'Director'}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-rose-500/10 hover:bg-rose-500 hover:text-white border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs uppercase tracking-wider font-semibold rounded-xs transition duration-200"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </header>

        {/* ==================================================== */}
        {/* TOAST NOTIFICATION                                  */}
        {/* ==================================================== */}
        {notification && (
          <div className={`p-4 rounded-xs text-xs uppercase tracking-wider font-semibold flex items-center justify-between shadow-lg border animate-slide-down ${
            notification.type === 'error' 
              ? 'bg-rose-600 text-white border-rose-700'
              : notification.type === 'info'
              ? 'bg-ashara-teal text-white border-ashara-teal/80'
              : 'bg-[#1E4E4E] dark:bg-ashara-gold text-white dark:text-ashara-dark border-ashara-teal dark:border-ashara-gold'
          }`}>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{notification.message}</span>
            </div>
            <button onClick={() => setNotification(null)} className="p-1 hover:opacity-75 transition">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ==================================================== */}
        {/* EXECUTIVE TELEMETRY & KPI STRIP                      */}
        {/* ==================================================== */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Leads */}
          <div 
            onClick={() => setActiveTab('leads')}
            className={`p-5 bg-white dark:bg-[#0C1726] border rounded-xs shadow-xs hover:shadow-md transition-all cursor-pointer group ${
              activeTab === 'leads' 
                ? 'border-ashara-teal dark:border-ashara-gold ring-1 ring-ashara-teal dark:ring-ashara-gold' 
                : 'border-gray-200 dark:border-white/10'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gray-500 dark:text-gray-400">
                  Client Inquiries
                </p>
                <h3 className="font-serif text-3xl font-bold text-ashara-charcoal dark:text-white mt-1">
                  {leads.length}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {newLeadsCount} New Leads
              </span>
              <span className="text-[10px] text-gray-400 group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition flex items-center gap-0.5">
                View matrix <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Card 2: Projects */}
          <div 
            onClick={() => setActiveTab('projects')}
            className={`p-5 bg-white dark:bg-[#0C1726] border rounded-xs shadow-xs hover:shadow-md transition-all cursor-pointer group ${
              activeTab === 'projects' 
                ? 'border-ashara-teal dark:border-ashara-gold ring-1 ring-ashara-teal dark:ring-ashara-gold' 
                : 'border-gray-200 dark:border-white/10'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gray-500 dark:text-gray-400">
                  Portfolio Showcase
                </p>
                <h3 className="font-serif text-3xl font-bold text-ashara-charcoal dark:text-white mt-1">
                  {projects.length}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xs bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-ashara-gold border border-ashara-teal/20 dark:border-ashara-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs">
              <span className="text-gray-600 dark:text-gray-300 font-light truncate">
                Gov • Corp • Commercial
              </span>
              <span className="text-[10px] text-gray-400 group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition flex items-center gap-0.5">
                Manage <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Card 3: Journal Articles */}
          <div 
            onClick={() => setActiveTab('blog')}
            className={`p-5 bg-white dark:bg-[#0C1726] border rounded-xs shadow-xs hover:shadow-md transition-all cursor-pointer group ${
              activeTab === 'blog' 
                ? 'border-ashara-teal dark:border-ashara-gold ring-1 ring-ashara-teal dark:ring-ashara-gold' 
                : 'border-gray-200 dark:border-white/10'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gray-500 dark:text-gray-400">
                  Architectural Journal
                </p>
                <h3 className="font-serif text-3xl font-bold text-ashara-charcoal dark:text-white mt-1">
                  {blogPosts.length}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs">
              <span className="text-gray-600 dark:text-gray-300 font-light truncate">
                Published Essays & Insights
              </span>
              <span className="text-[10px] text-gray-400 group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition flex items-center gap-0.5">
                Edit <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Card 4: System Architecture */}
          <div className="p-5 bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-xs shadow-xs">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gray-500 dark:text-gray-400">
                  Cloud Infrastructure
                </p>
                <h3 className="font-serif text-2xl font-bold text-ashara-charcoal dark:text-white mt-1">
                  {isFirebaseConfigured ? 'Connected' : 'Offline Mode'}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="truncate">
                {lastRefreshed ? `Synced ${lastRefreshed.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : 'Ready'}
              </span>
              <span className="text-[9px] uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400">
                100% Operational
              </span>
            </div>
          </div>

        </section>

        {/* ==================================================== */}
        {/* WORKSPACE TOOLBAR & TAB SWITCHER                     */}
        {/* ==================================================== */}
        <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 p-4 sm:p-5 rounded-xs shadow-xs space-y-4">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Segmented Pill Tabs */}
            <nav className="flex items-center gap-1.5 p-1 bg-gray-100/80 dark:bg-white/5 rounded-xs border border-gray-200/60 dark:border-white/5 overflow-x-auto">
              
              <button
                onClick={() => { setActiveTab('projects'); setSearchQuery(''); }}
                className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all whitespace-nowrap ${
                  activeTab === 'projects'
                    ? 'bg-white dark:bg-[#1E2E42] text-ashara-teal dark:text-ashara-gold shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Projects Showcase</span>
                <span className={`px-2 py-0.2 rounded-full text-[10px] font-mono ${
                  activeTab === 'projects'
                    ? 'bg-ashara-teal/10 dark:bg-ashara-gold/20 text-ashara-teal dark:text-ashara-gold'
                    : 'bg-gray-200/80 dark:bg-white/10 text-gray-500'
                }`}>
                  {projects.length}
                </span>
              </button>

              <button
                onClick={() => { setActiveTab('leads'); setSearchQuery(''); }}
                className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all whitespace-nowrap ${
                  activeTab === 'leads'
                    ? 'bg-white dark:bg-[#1E2E42] text-ashara-teal dark:text-ashara-gold shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Client Enquiries</span>
                <span className={`px-2 py-0.2 rounded-full text-[10px] font-mono ${
                  newLeadsCount > 0 
                    ? 'bg-emerald-500 text-white font-bold' 
                    : 'bg-gray-200/80 dark:bg-white/10 text-gray-500'
                }`}>
                  {leads.length}
                </span>
              </button>

              <button
                onClick={() => { setActiveTab('blog'); setSearchQuery(''); }}
                className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs transition-all whitespace-nowrap ${
                  activeTab === 'blog'
                    ? 'bg-white dark:bg-[#1E2E42] text-ashara-teal dark:text-ashara-gold shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>The Journal</span>
                <span className={`px-2 py-0.2 rounded-full text-[10px] font-mono ${
                  activeTab === 'blog'
                    ? 'bg-ashara-teal/10 dark:bg-ashara-gold/20 text-ashara-teal dark:text-ashara-gold'
                    : 'bg-gray-200/80 dark:bg-white/10 text-gray-500'
                }`}>
                  {blogPosts.length}
                </span>
              </button>

            </nav>

            {/* Primary Action Button */}
            <div className="flex items-center gap-3">
              {activeTab === 'projects' && (
                <button
                  onClick={handleOpenNewProject}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold rounded-xs transition shadow-sm"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                  <span>Add New Project</span>
                </button>
              )}

              {activeTab === 'blog' && (
                <button
                  onClick={handleOpenNewPost}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold rounded-xs transition shadow-sm"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                  <span>Publish New Article</span>
                </button>
              )}
            </div>

          </div>

          {/* Search & Secondary Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-white/5">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  activeTab === 'projects' ? "Search projects by title, client, or narrative..." :
                  activeTab === 'leads' ? "Search inquiries by client name, email, or message..." :
                  "Search journal articles..."
                }
                className="w-full pl-10 pr-8 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs text-xs text-ashara-charcoal dark:text-white placeholder-gray-400 focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold transition"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')} 
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Context Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              
              {/* Category Filter for Projects */}
              {activeTab === 'projects' && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Filter className="w-3.5 h-3.5" />
                  <select
                    value={projectCategoryFilter}
                    onChange={(e) => setProjectCategoryFilter(e.target.value)}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs text-xs text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal"
                  >
                    <option value="ALL">All Categories ({projects.length})</option>
                    <option value="GOVERNMENTAL">Governmental</option>
                    <option value="PRIVATE">Private Entities</option>
                    <option value="CORPORATION">Corporations</option>
                    <option value="COMMERCIAL">Commercial</option>
                  </select>
                </div>
              )}

              {/* Status Filter for Leads */}
              {activeTab === 'leads' && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <select
                    value={leadStatusFilter}
                    onChange={(e) => setLeadStatusFilter(e.target.value)}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs text-xs text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal"
                  >
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

        {/* ==================================================== */}
        {/* TAB 1: PROJECTS SHOWCASE MATRIX                      */}
        {/* ==================================================== */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            
            {/* Empty State */}
            {filteredProjects.length === 0 ? (
              <div className="p-16 text-center bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-xs space-y-4">
                <div className="w-14 h-14 rounded-full bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-ashara-gold flex items-center justify-center mx-auto">
                  <Layers className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-ashara-charcoal dark:text-white">
                    {searchQuery ? 'No matching architectural projects found' : 'No projects in CMS yet'}
                  </h3>
                  <p className="text-xs text-gray-500 max-w-md mx-auto">
                    {searchQuery 
                      ? `Try adjusting your search term "${searchQuery}" or clear the category filter.`
                      : 'Click the button below to add your first curated project showcase.'}
                  </p>
                </div>
                {!searchQuery && (
                  <button
                    onClick={handleOpenNewProject}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-semibold rounded-xs"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create First Project</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((proj) => (
                  <div 
                    key={proj.id}
                    className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-xs overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
                  >
                    {/* Project Photography Banner */}
                    <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                      <img 
                        src={proj.image} 
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
                        }}
                      />

                      {/* Translucent Category Tag */}
                      <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[9px] uppercase tracking-wider px-2.5 py-1 font-semibold rounded-xs border border-white/15">
                        {proj.category || proj.tag || 'GOVERNMENTAL'}
                      </div>

                      {/* Quick Edit Overlay Button */}
                      <button
                        onClick={() => handleOpenEditProject(proj)}
                        className="absolute bottom-3 right-3 p-2 bg-white/90 dark:bg-ashara-charcoal/90 text-ashara-charcoal dark:text-white rounded-xs shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-ashara-teal hover:text-white dark:hover:bg-ashara-gold dark:hover:text-ashara-dark"
                        title="Edit Project"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Project Information */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ashara-teal dark:text-ashara-gold">
                          {proj.subtitle || 'BESPOKE ARCHITECTURE'}
                        </p>
                        <h3 className="font-serif text-xl font-bold text-ashara-charcoal dark:text-white line-clamp-1">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-300 font-light line-clamp-3 leading-relaxed">
                          {proj.description}
                        </p>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-3.5 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs">
                        <span className="text-[10px] font-mono text-gray-400">
                          ID: {String(proj.id).slice(-8)}
                        </span>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleOpenEditProject(proj)}
                            className="p-1.5 text-gray-500 hover:text-ashara-teal dark:text-gray-400 dark:hover:text-ashara-gold transition rounded-xs hover:bg-gray-100 dark:hover:bg-white/5"
                            title="Edit Project"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          
                          <button
                            onClick={() => setDeleteConfirm({ type: 'project', id: proj.id, title: proj.title })}
                            className="p-1.5 text-rose-500 hover:text-rose-700 transition rounded-xs hover:bg-rose-50 dark:hover:bg-rose-500/10"
                            title="Delete Project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 2: CLIENT CONSULTATION LEADS MATRIX              */}
        {/* ==================================================== */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            
            {filteredLeads.length === 0 ? (
              <div className="p-16 text-center bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-xs space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <Users className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-ashara-charcoal dark:text-white">
                    {searchQuery ? 'No matching consultation inquiries' : 'No client leads recorded yet'}
                  </h3>
                  <p className="text-xs text-gray-500 max-w-md mx-auto">
                    When visitors submit inquiries through the Contact page, they will instantly appear here with contact actions.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLeads.map((lead, idx) => {
                  const leadKey = lead.id || `lead_${idx}`;
                  const status = (lead.status || 'new').toLowerCase();
                  
                  return (
                    <div 
                      key={leadKey}
                      className={`p-6 bg-white dark:bg-[#0C1726] border rounded-xs shadow-xs space-y-4 flex flex-col justify-between transition-all hover:shadow-md ${
                        status === 'new'
                          ? 'border-emerald-500/40 dark:border-emerald-500/30 ring-1 ring-emerald-500/20'
                          : 'border-gray-200 dark:border-white/10'
                      }`}
                    >
                      {/* Lead Header */}
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-ashara-gold font-bold text-sm flex items-center justify-center shrink-0">
                              {(lead.fullName || 'Client')[0].toUpperCase()}
                            </div>
                            <div>
                              <h3 className="font-serif text-lg font-bold text-ashara-charcoal dark:text-white leading-tight">
                                {lead.fullName || 'Anonymous Client'}
                              </h3>
                              <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                                <Clock className="w-3 h-3" />
                                {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent'}
                              </p>
                            </div>
                          </div>

                          {/* Interactive Status Selector */}
                          <select
                            value={status}
                            onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                            className={`px-2 py-1 text-[9px] uppercase font-bold tracking-wider rounded-xs border focus:outline-none cursor-pointer ${
                              status === 'new'
                                ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30'
                                : status === 'contacted'
                                ? 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30'
                                : 'bg-gray-200/60 dark:bg-white/10 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-white/15'
                            }`}
                          >
                            <option value="new">● New</option>
                            <option value="contacted">● Contacted</option>
                            <option value="completed">● Completed</option>
                          </select>
                        </div>

                        {/* Contact Data Pills */}
                        <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                          {lead.email && (
                            <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-white/5 rounded-xs">
                              <div className="flex items-center gap-2 truncate">
                                <Mail className="w-3.5 h-3.5 text-ashara-teal dark:text-ashara-gold shrink-0" />
                                <span className="truncate text-xs">{lead.email}</span>
                              </div>
                              <button
                                onClick={() => handleCopy(lead.email, `email_${leadKey}`)}
                                className="text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold p-1"
                                title="Copy Email"
                              >
                                {copiedId === `email_${leadKey}` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          )}

                          {lead.telephone && (
                            <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-white/5 rounded-xs">
                              <div className="flex items-center gap-2 truncate">
                                <Phone className="w-3.5 h-3.5 text-ashara-teal dark:text-ashara-gold shrink-0" />
                                <span className="truncate text-xs font-mono">{lead.telephone}</span>
                              </div>
                              <button
                                onClick={() => handleCopy(lead.telephone, `phone_${leadKey}`)}
                                className="text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold p-1"
                                title="Copy Phone"
                              >
                                {copiedId === `phone_${leadKey}` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Message / Scope */}
                        <div className="p-3.5 bg-gray-50/75 dark:bg-white/5 border-l-2 border-ashara-teal dark:border-ashara-gold rounded-r-xs">
                          <p className="text-xs text-gray-700 dark:text-gray-300 italic leading-relaxed line-clamp-4">
                            “{lead.enquiry || lead.message || 'General architectural consultation request'}”
                          </p>
                        </div>
                      </div>

                      {/* Direct Engagement Actions */}
                      <div className="pt-3 border-t border-gray-100 dark:border-white/5 flex items-center gap-2">
                        {lead.telephone && (
                          <a
                            href={`https://wa.me/${lead.telephone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Greetings ${lead.fullName || 'Client'}, thank you for contacting Ashara Interiors regarding your architectural inquiry.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] uppercase tracking-wider font-semibold rounded-xs transition text-center shadow-xs flex items-center justify-center gap-1.5"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </a>
                        )}

                        {lead.email && (
                          <a
                            href={`mailto:${lead.email}?subject=${encodeURIComponent('Ashara Interiors — Architectural Consultation Follow-up')}`}
                            className="flex-1 py-2 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-[10px] uppercase tracking-wider font-semibold rounded-xs transition text-center shadow-xs flex items-center justify-center gap-1.5"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Send Email</span>
                          </a>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 3: JOURNAL & EDITORIAL ARTICLES                  */}
        {/* ==================================================== */}
        {activeTab === 'blog' && (
          <div className="space-y-6">
            
            {filteredBlogPosts.length === 0 ? (
              <div className="p-16 text-center bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-xs space-y-4">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                  <FileText className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-ashara-charcoal dark:text-white">
                    {searchQuery ? 'No matching journal articles' : 'No articles published yet'}
                  </h3>
                  <p className="text-xs text-gray-500 max-w-md mx-auto">
                    Publish architectural essays, material studies, and design thought-leadership.
                  </p>
                </div>
                {!searchQuery && (
                  <button
                    onClick={handleOpenNewPost}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-semibold rounded-xs"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Write First Article</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredBlogPosts.map((post) => (
                  <div 
                    key={post.id}
                    className="p-6 bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-xs shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-ashara-teal dark:text-ashara-gold">
                          {post.category || 'ARCHITECTURAL ESSAY'} • {post.readTime || '4 MIN READ'}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">
                          ID: {String(post.id).slice(-6)}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-ashara-charcoal dark:text-white">
                        {post.title}
                      </h3>

                      <p className="text-xs text-gray-600 dark:text-gray-300 font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                      <span className="text-[10px] text-gray-400">
                        {post.updatedAt ? `Updated ${new Date(post.updatedAt).toLocaleDateString()}` : 'Published'}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenEditPost(post)}
                          className="p-2 text-gray-500 hover:text-ashara-teal dark:text-gray-300 dark:hover:text-ashara-gold transition rounded-xs hover:bg-gray-100 dark:hover:bg-white/5"
                          title="Edit Article"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm({ type: 'blog', id: post.id, title: post.title })}
                          className="p-2 text-rose-500 hover:text-rose-700 transition rounded-xs hover:bg-rose-50 dark:hover:bg-rose-500/10"
                          title="Delete Article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>

      {/* ==================================================== */}
      {/* MODAL 1: PROJECT EDITOR (WITH LIVE CARD PREVIEW)     */}
      {/* ==================================================== */}
      {isProjectModalOpen && editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xs shadow-2xl space-y-6 p-6 sm:p-8">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-ashara-teal dark:text-ashara-gold font-bold">
                  PROJECT SHOWCASE CURATOR
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal dark:text-white mt-0.5">
                  {editingProject.id ? 'Edit Architectural Project' : 'Curate New Project'}
                </h3>
              </div>
              <button 
                onClick={() => {
                  if (!uploadStatus.active) {
                    setIsProjectModalOpen(false);
                    setProjectImageFile(null);
                    setProjectImagePreview('');
                  }
                }} 
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white p-2 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-6">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* LEFT: Live Preview Card (What visitors will see!) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500 dark:text-gray-400">
                      Live Public Card Preview
                    </span>
                    <span className="text-[9px] px-2 py-0.5 bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-ashara-gold font-semibold uppercase tracking-wider rounded">
                      Real-time
                    </span>
                  </div>

                  <div className="border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-[#070E18] rounded-xs overflow-hidden shadow-md">
                    <div className="aspect-[16/10] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                      <img 
                        src={projectImagePreview || editingProject.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'} 
                        alt="Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute top-2.5 left-2.5 bg-black/75 text-white text-[9px] uppercase tracking-wider px-2 py-0.5 font-semibold rounded-xs">
                        {editingProject.category || 'GOVERNMENTAL'}
                      </div>
                    </div>

                    <div className="p-4 space-y-1.5">
                      <p className="text-[9px] uppercase tracking-[0.25em] font-semibold text-ashara-teal dark:text-ashara-gold">
                        {editingProject.subtitle || 'SUBTITLE PREVIEW'}
                      </p>
                      <h4 className="font-serif text-lg font-bold text-ashara-charcoal dark:text-white line-clamp-1">
                        {editingProject.title || 'Project Title Headline'}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 font-light line-clamp-2">
                        {editingProject.description || 'Architectural narrative details and spatial philosophy...'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Form Fields */}
                <div className="lg:col-span-7 space-y-4">
                  
                  {/* Title */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                      placeholder="e.g., Oromia Presidential Suites"
                    />
                  </div>

                  {/* Category & Subtitle */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                        Category Tag *
                      </label>
                      <select
                        value={editingProject.category || editingProject.tag || 'GOVERNMENTAL'}
                        onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value, tag: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                      >
                        <option value="GOVERNMENTAL">GOVERNMENTAL</option>
                        <option value="PRIVATE ORGANIZATION">PRIVATE ORGANIZATION</option>
                        <option value="PRIVATE CORPORATION">PRIVATE CORPORATION</option>
                        <option value="PRIVATE COMPANY">PRIVATE COMPANY</option>
                        <option value="COMMERCIAL">COMMERCIAL</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                        Subtitle / Scope Tag
                      </label>
                      <input
                        type="text"
                        value={editingProject.subtitle || ''}
                        onChange={(e) => setEditingProject({ ...editingProject, subtitle: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                        placeholder="e.g., CIVIC HEADQUARTERS"
                      />
                    </div>
                  </div>

                  {/* Architectural Narrative */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                      Architectural Narrative *
                    </label>
                    <textarea
                      rows="3"
                      required
                      value={editingProject.description || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold resize-none"
                      placeholder="Describe the architectural highlights, materiality, lighting..."
                    />
                  </div>

                  {/* Image Upload Zone */}
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300">
                      Project Photography
                    </label>

                    {/* Selected File Badge */}
                    {projectImageFile ? (
                      <div className="flex items-center justify-between p-3 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/30 rounded-xs">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <CheckCircle className="w-4 h-4 text-ashara-teal dark:text-ashara-gold shrink-0" />
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-ashara-charcoal dark:text-white truncate">
                              {projectImageFile.name}
                            </p>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                              <span>{formatFileSize(projectImageFile.size)}</span>
                              <span>•</span>
                              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Smart Web Compression Enabled</span>
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setProjectImageFile(null);
                            setProjectImagePreview('');
                          }}
                          className="text-gray-400 hover:text-rose-500 dark:hover:text-rose-400 p-1.5 text-xs flex items-center gap-1 shrink-0"
                          title="Remove file"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center gap-1.5 w-full p-4 bg-gray-50 dark:bg-white/5 border-2 border-dashed border-gray-300 dark:border-white/15 hover:border-ashara-teal dark:hover:border-ashara-gold text-gray-600 dark:text-gray-300 cursor-pointer transition-all duration-200 group rounded-xs">
                        <Upload className="w-5 h-5 text-gray-400 group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition" />
                        <span className="text-xs uppercase tracking-wider font-semibold group-hover:text-ashara-teal dark:group-hover:text-ashara-gold transition">
                          Upload high-resolution image file
                        </span>
                        <span className="text-[10px] text-gray-400 font-light">
                          Supports JPG, PNG, WEBP — automatically optimized for lightning-fast loading
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              setProjectImageFile(file);
                              const reader = new FileReader();
                              reader.onload = () => setProjectImagePreview(reader.result);
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </label>
                    )}

                    {/* Or URL input */}
                    <div className="pt-1">
                      <p className="text-[9px] uppercase tracking-wider text-gray-400 mb-1">
                        Or paste image URL (Unsplash or cloud link)
                      </p>
                      <input
                        type="text"
                        value={editingProject.image || ''}
                        onChange={(e) => {
                          setEditingProject({ ...editingProject, image: e.target.value });
                          setProjectImageFile(null);
                          setProjectImagePreview('');
                        }}
                        className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                        placeholder="https://images.unsplash.com/..."
                      />
                    </div>

                  </div>

                </div>

              </div>

              {/* Upload Progress Bar */}
              {uploadStatus.active && (
                <div className="space-y-1.5 p-3 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/20 rounded-xs">
                  <div className="flex items-center justify-between text-xs font-medium text-ashara-teal dark:text-ashara-gold">
                    <span className="flex items-center gap-1.5">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {uploadStatus.stage}
                    </span>
                    <span>{uploadStatus.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 overflow-hidden rounded-full">
                    <div 
                      className="bg-ashara-teal dark:bg-ashara-gold h-full transition-all duration-300 ease-out rounded-full"
                      style={{ width: `${Math.max(10, uploadStatus.percent)}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Form Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setIsProjectModalOpen(false);
                    setProjectImageFile(null);
                    setProjectImagePreview('');
                  }}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-300 hover:text-ashara-charcoal dark:hover:text-white transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploadStatus.active}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold transition shadow-sm disabled:opacity-50 rounded-xs"
                >
                  {uploadStatus.active ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  <span>{uploadStatus.active ? (uploadStatus.stage || 'Saving...') : 'Save Project to Portfolio'}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* MODAL 2: JOURNAL ARTICLE PUBLISHER                   */}
      {/* ==================================================== */}
      {isBlogModalOpen && editingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-xs shadow-2xl space-y-6 p-6 sm:p-8">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-ashara-teal dark:text-ashara-gold font-bold">
                  THE ASHARA JOURNAL
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal dark:text-white mt-0.5">
                  {editingPost.id ? 'Edit Architectural Article' : 'Publish New Journal Essay'}
                </h3>
              </div>
              <button 
                onClick={() => {
                  if (!uploadStatus.active) {
                    setIsBlogModalOpen(false);
                    setBlogImageFile(null);
                    setBlogImagePreview('');
                  }
                }} 
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white p-2 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSaveBlogPost} className="space-y-4">
              
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                  placeholder="e.g., Monumental Acoustics in Ethiopian Public Architecture"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                    Category Tag *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingPost.category || ''}
                    onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                    placeholder="e.g., CIVIC ARCHITECTURE"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                    Estimated Reading Time
                  </label>
                  <input
                    type="text"
                    value={editingPost.readTime || '4 MIN READ'}
                    onChange={(e) => setEditingPost({ ...editingPost, readTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                  Editorial Excerpt / Abstract *
                </label>
                <textarea
                  rows="2"
                  required
                  value={editingPost.excerpt || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold resize-none"
                  placeholder="Summary for journal cards and social preview..."
                />
              </div>

              {/* Cover Image Upload */}
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300">
                  Article Cover Image
                </label>

                {blogImageFile ? (
                  <div className="flex items-center justify-between p-3 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/30 rounded-xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <CheckCircle className="w-4 h-4 text-ashara-teal dark:text-ashara-gold shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-ashara-charcoal dark:text-white truncate">
                          {blogImageFile.name}
                        </p>
                        <p className="text-[10px] text-gray-500 font-mono">
                          {formatFileSize(blogImageFile.size)} • Smart Compression Ready
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setBlogImageFile(null);
                        setBlogImagePreview('');
                      }}
                      className="text-gray-400 hover:text-rose-500 p-1 text-xs flex items-center gap-1"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                ) : (
                  <label className="flex items-center justify-center gap-2 w-full p-3 bg-gray-50 dark:bg-white/5 border-2 border-dashed border-gray-300 dark:border-white/15 hover:border-ashara-teal dark:hover:border-ashara-gold text-gray-600 dark:text-gray-300 cursor-pointer transition-all duration-200 group rounded-xs">
                    <ImagePlus className="w-4 h-4 text-gray-400 group-hover:text-ashara-teal dark:group-hover:text-ashara-gold" />
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      Click to upload cover photograph
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setBlogImageFile(file);
                          const reader = new FileReader();
                          reader.onload = () => setBlogImagePreview(reader.result);
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </label>
                )}

                <input
                  type="text"
                  value={editingPost.image || ''}
                  onChange={(e) => {
                    setEditingPost({ ...editingPost, image: e.target.value });
                    setBlogImageFile(null);
                    setBlogImagePreview('');
                  }}
                  className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                  placeholder="Or paste cover image URL..."
                />
              </div>

              {/* Full Article Content */}
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                  Full Essay Content (Paragraphs)
                </label>
                <textarea
                  rows="6"
                  value={editingPost.fullContent || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, fullContent: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold resize-none"
                  placeholder="Full essay narrative..."
                />
              </div>

              {/* Upload Progress Bar */}
              {uploadStatus.active && (
                <div className="space-y-1.5 p-3 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/20 rounded-xs">
                  <div className="flex items-center justify-between text-xs font-medium text-ashara-teal dark:text-ashara-gold">
                    <span className="flex items-center gap-1.5">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {uploadStatus.stage}
                    </span>
                    <span>{uploadStatus.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 overflow-hidden rounded-full">
                    <div 
                      className="bg-ashara-teal dark:bg-ashara-gold h-full transition-all duration-300 ease-out rounded-full"
                      style={{ width: `${Math.max(10, uploadStatus.percent)}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploadStatus.active}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold transition rounded-xs disabled:opacity-50"
                >
                  {uploadStatus.active ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  <span>{uploadStatus.active ? 'Publishing...' : 'Publish to Journal'}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* MODAL 3: DELETE CONFIRMATION                         */}
      {/* ==================================================== */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 w-full max-w-md p-6 rounded-xs shadow-2xl space-y-5">
            <div className="flex items-center gap-3 text-rose-500">
              <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ashara-charcoal dark:text-white">
                Confirm Deletion
              </h3>
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Are you sure you want to remove <span className="font-semibold text-ashara-charcoal dark:text-white">"{deleteConfirm.title}"</span>? This action cannot be undone.
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs uppercase tracking-wider font-bold rounded-xs transition shadow-sm"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

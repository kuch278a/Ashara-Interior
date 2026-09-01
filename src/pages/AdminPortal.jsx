import React, { useState, useEffect } from 'react';
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
  Loader2
} from 'lucide-react';
import { 
  getConsultations, 
  getDynamicProjects, 
  saveProject, 
  deleteProject, 
  getDynamicBlogPosts, 
  saveBlogPost, 
  isFirebaseConfigured,
  loginAdminUser,
  logoutAdminUser
} from '../services/firebase';

export default function AdminPortal({ onNavigate }) {
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

  // Portal Tab & Data States
  const [activeTab, setActiveTab] = useState('leads'); // 'leads' | 'projects' | 'blog'
  const [leads, setLeads] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState('');

  // Form Modal States
  const [editingProject, setEditingProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);

  useEffect(() => {
    if (adminUser) {
      loadAllData();
    }
  }, [adminUser]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    try {
      const res = await loginAdminUser(loginEmail, loginPassword);
      if (res.success) {
        setAdminUser(res.user);
      } else {
        setLoginError(res.error || 'Invalid credentials');
      }
    } catch (err) {
      setLoginError('Authentication failed. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logoutAdminUser();
    setAdminUser(null);
    setLoginEmail('');
    setLoginPassword('');
  };

  const loadAllData = async () => {
    setIsLoading(true);
    try {
      const [leadsData, projectsData, blogData] = await Promise.all([
        getConsultations(),
        getDynamicProjects(),
        getDynamicBlogPosts()
      ]);
      setLeads(leadsData || []);
      setProjects(projectsData || []);
      setBlogPosts(blogData || []);
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  // --- Project CRUD ---
  const handleSaveProject = async (e) => {
    e.preventDefault();
    if (!editingProject) return;
    await saveProject(editingProject);
    setIsProjectModalOpen(false);
    setEditingProject(null);
    showToast('Project saved successfully');
    await loadAllData();
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      await deleteProject(id);
      showToast('Project removed');
      await loadAllData();
    }
  };

  // --- Blog CRUD ---
  const handleSaveBlogPost = async (e) => {
    e.preventDefault();
    if (!editingPost) return;
    await saveBlogPost(editingPost);
    setIsBlogModalOpen(false);
    setEditingPost(null);
    showToast('Journal article published');
    await loadAllData();
  };

  // ----------------------------------------------------
  // 1. UNAUTHENTICATED: LUXURY ADMIN LOGIN SCREEN
  // ----------------------------------------------------
  if (!adminUser) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center py-16 px-6 sm:px-10 animate-fade-in">
        <div className="w-full max-w-md bg-white dark:bg-ashara-charcoal border border-gray-200 dark:border-white/10 shadow-2xl p-8 sm:p-10 space-y-8 rounded-xs">
          
          {/* Header & Emblem */}
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark rounded-full flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-5 h-5 stroke-[1.8]" />
            </div>
            <p className="text-[9.5px] uppercase tracking-[0.35em] text-ashara-teal dark:text-ashara-gold font-semibold">
              MANAGEMENT ATELIER
            </p>
            <h2 className="font-serif text-3xl text-ashara-charcoal dark:text-white font-normal">
              Admin Access
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-light">
              Restricted portal for Ashara Interiors studio directors and client lead management.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {loginError && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Admin Email / Username
              </label>
              <input
                type="text"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="admin@ashara.com"
                className="w-full px-4 py-3 bg-[#EBF2F2]/60 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white placeholder-gray-400 focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold transition"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Passcode / Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 bg-[#EBF2F2]/60 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white placeholder-gray-400 focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold transition pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full mt-2 py-3.5 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-ashara-teal-hover dark:hover:bg-ashara-gold/80 transition duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>AUTHENTICATING...</span>
                </>
              ) : (
                <span>SIGN IN TO ATELIER</span>
              )}
            </button>
          </form>

          {/* Quick Return & Hint */}
          <div className="pt-4 border-t border-gray-100 dark:border-white/5 text-center space-y-2">
            <button
              onClick={() => onNavigate('home')}
              className="text-xs text-gray-500 hover:text-ashara-teal dark:hover:text-ashara-gold uppercase tracking-wider font-medium transition"
            >
              ← Return to Public Website
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2. AUTHENTICATED: STUDIO ADMIN MANAGEMENT PORTAL
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-ashara-dark py-10 px-6 sm:px-10 lg:px-16 animate-fade-in transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-ashara-teal dark:text-ashara-gold">
                MANAGEMENT ATELIER
              </span>
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider ${
                isFirebaseConfigured 
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                  : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
              }`}>
                <Database className="w-2.5 h-2.5" />
                {isFirebaseConfigured ? 'Live Firebase Cloud' : 'Local Sandbox Mode'}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white font-normal mt-1">
              Studio Admin & CMS
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-block text-xs font-mono text-gray-500 dark:text-gray-400">
              {adminUser.email || 'Director'}
            </span>
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 border border-gray-300 dark:border-white/20 text-xs uppercase tracking-wider font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition"
            >
              View Site
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-600/10 border border-rose-600/20 text-rose-600 dark:text-rose-400 text-xs uppercase tracking-wider font-semibold hover:bg-rose-600 hover:text-white transition"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="p-4 bg-ashara-teal text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-between shadow-md animate-fade-in">
            <span>{notification}</span>
            <X className="w-4 h-4 cursor-pointer" onClick={() => setNotification('')} />
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-white/10 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-semibold transition border-b-2 ${
              activeTab === 'leads'
                ? 'border-ashara-teal text-ashara-teal dark:border-ashara-gold dark:text-ashara-gold'
                : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Consultation Leads ({leads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-semibold transition border-b-2 ${
              activeTab === 'projects'
                ? 'border-ashara-teal text-ashara-teal dark:border-ashara-gold dark:text-ashara-gold'
                : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Projects CMS ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('blog')}
            className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest font-semibold transition border-b-2 ${
              activeTab === 'blog'
                ? 'border-ashara-teal text-ashara-teal dark:border-ashara-gold dark:text-ashara-gold'
                : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Journal CMS ({blogPosts.length})</span>
          </button>
        </div>

        {/* Tab 1: Consultation Leads */}
        {activeTab === 'leads' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl text-ashara-charcoal dark:text-white">
                Incoming Client Enquiries
              </h2>
              <span className="text-xs text-gray-500">
                {leads.length} recorded inquiries
              </span>
            </div>

            {leads.length === 0 ? (
              <div className="p-12 text-center bg-white dark:bg-ashara-charcoal border border-gray-200 dark:border-white/5 rounded-xs space-y-2">
                <Users className="w-8 h-8 text-gray-400 mx-auto" />
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">No consultation leads yet.</p>
                <p className="text-xs text-gray-400">When visitors fill out the Contact form, their details will appear here in real time.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leads.map((lead, idx) => (
                  <div 
                    key={lead.id || idx}
                    className="p-6 bg-white dark:bg-ashara-charcoal border border-gray-200 dark:border-white/10 rounded-xs shadow-xs space-y-4 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-ashara-charcoal dark:text-white">
                          {lead.fullName || 'Anonymous Client'}
                        </h3>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : 'Recent'}
                        </p>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] uppercase font-bold tracking-wider rounded">
                        {lead.status || 'NEW'}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                      {lead.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-ashara-teal dark:text-ashara-gold" />
                          <a href={`mailto:${lead.email}`} className="hover:underline truncate">{lead.email}</a>
                        </div>
                      )}
                      {lead.telephone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-ashara-teal dark:text-ashara-gold" />
                          <a href={`tel:${lead.telephone}`} className="hover:underline">{lead.telephone}</a>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t border-gray-100 dark:border-white/5">
                      <p className="text-xs text-gray-700 dark:text-gray-300 italic leading-relaxed line-clamp-4">
                        “{lead.enquiry || lead.message || 'General project enquiry'}”
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      {lead.telephone && (
                        <a
                          href={`https://wa.me/${lead.telephone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] uppercase tracking-wider font-semibold rounded transition"
                        >
                          WhatsApp
                        </a>
                      )}
                      {lead.email && (
                        <a
                          href={`mailto:${lead.email}`}
                          className="flex-1 text-center py-1.5 bg-ashara-teal hover:bg-ashara-teal-hover text-white text-[10px] uppercase tracking-wider font-semibold rounded transition"
                        >
                          Email
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Projects CMS */}
        {activeTab === 'projects' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl text-ashara-charcoal dark:text-white">
                  Studio Architectural Projects
                </h2>
                <p className="text-xs text-gray-500">Manage case studies, photography, and scopes</p>
              </div>
              <button
                onClick={() => {
                  setEditingProject({
                    title: '',
                    category: 'GOVERNMENTAL',
                    subtitle: '',
                    image: '',
                    description: ''
                  });
                  setIsProjectModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition"
              >
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj) => (
                <div 
                  key={proj.id}
                  className="bg-white dark:bg-ashara-charcoal border border-gray-200 dark:border-white/10 rounded-xs overflow-hidden shadow-xs flex flex-col justify-between"
                >
                  <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = proj.fallbackImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <span className="absolute top-3 left-3 bg-black/70 text-white text-[9px] uppercase tracking-wider px-2 py-0.5 font-semibold">
                      {proj.category || proj.tag}
                    </span>
                  </div>

                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-ashara-charcoal dark:text-white">
                        {proj.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                        {proj.subtitle}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 font-light mt-2">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-4 border-t border-gray-100 dark:border-white/5">
                      <button
                        onClick={() => {
                          setEditingProject(proj);
                          setIsProjectModalOpen(true);
                        }}
                        className="p-2 text-gray-600 hover:text-ashara-teal dark:text-gray-300 dark:hover:text-ashara-gold transition"
                        title="Edit Project"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="p-2 text-rose-500 hover:text-rose-700 transition"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Blog CMS */}
        {activeTab === 'blog' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl text-ashara-charcoal dark:text-white">
                  The Ashara Journal Articles
                </h2>
                <p className="text-xs text-gray-500">Publish architectural essays and design thought-leadership</p>
              </div>
              <button
                onClick={() => {
                  setEditingPost({
                    title: '',
                    category: 'CIVIC ARCHITECTURE',
                    readTime: '4 MIN READ',
                    excerpt: '',
                    fullContent: ''
                  });
                  setIsBlogModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition"
              >
                <Plus className="w-4 h-4" />
                <span>New Article</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <div 
                  key={post.id}
                  className="p-6 bg-white dark:bg-ashara-charcoal border border-gray-200 dark:border-white/10 rounded-xs shadow-xs space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[9.5px] uppercase tracking-[0.2em] font-semibold text-ashara-teal dark:text-ashara-gold block">
                      {post.category} • {post.readTime}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-ashara-charcoal dark:text-white mt-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 font-light leading-relaxed mt-2 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100 dark:border-white/5">
                    <button
                      onClick={() => {
                        setEditingPost(post);
                        setIsBlogModalOpen(true);
                      }}
                      className="p-2 text-gray-600 hover:text-ashara-teal dark:text-gray-300 dark:hover:text-ashara-gold transition"
                      title="Edit Article"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Modal: Project Edit/Add */}
      {isProjectModalOpen && editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-ashara-charcoal border border-gray-200 dark:border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl rounded-xs">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
              <h3 className="font-serif text-2xl text-ashara-charcoal dark:text-white">
                {editingProject.id ? 'Edit Project' : 'Add New Project'}
              </h3>
              <button onClick={() => setIsProjectModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  required
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal"
                  placeholder="e.g., Oromia Presidential Suites"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Category Tag
                  </label>
                  <select
                    value={editingProject.category || editingProject.tag || 'GOVERNMENTAL'}
                    onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value, tag: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal"
                  >
                    <option value="GOVERNMENTAL">GOVERNMENTAL</option>
                    <option value="PRIVATE ORGANIZATION">PRIVATE ORGANIZATION</option>
                    <option value="PRIVATE CORPORATION">PRIVATE CORPORATION</option>
                    <option value="PRIVATE COMPANY">PRIVATE COMPANY</option>
                    <option value="COMMERCIAL">COMMERCIAL</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={editingProject.subtitle || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, subtitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal"
                    placeholder="e.g., CIVIC HEADQUARTERS"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Image URL or Path
                </label>
                <input
                  type="text"
                  required
                  value={editingProject.image || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal"
                  placeholder="./assets/p1_prosperity.png or https://..."
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Architectural Narrative / Description
                </label>
                <textarea
                  rows="4"
                  required
                  value={editingProject.description || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal resize-none"
                  placeholder="Describe the architectural highlights, materials, lighting..."
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setIsProjectModalOpen(false)}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-gray-600 dark:text-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Project</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Blog Edit/Add */}
      {isBlogModalOpen && editingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-white dark:bg-ashara-charcoal border border-gray-200 dark:border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl rounded-xs">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
              <h3 className="font-serif text-2xl text-ashara-charcoal dark:text-white">
                {editingPost.id ? 'Edit Article' : 'Publish New Article'}
              </h3>
              <button onClick={() => setIsBlogModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveBlogPost} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Article Title
                </label>
                <input
                  type="text"
                  required
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal"
                  placeholder="e.g., Monumental Acoustics in Ethiopian Public Spaces"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    required
                    value={editingPost.category || ''}
                    onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal"
                    placeholder="e.g., CIVIC ARCHITECTURE"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={editingPost.readTime || '4 MIN READ'}
                    onChange={(e) => setEditingPost({ ...editingPost, readTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Short Excerpt
                </label>
                <textarea
                  rows="2"
                  required
                  value={editingPost.excerpt || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal resize-none"
                  placeholder="Summary for cards..."
                ></textarea>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Full Article Body
                </label>
                <textarea
                  rows="6"
                  required
                  value={editingPost.fullContent || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, fullContent: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white focus:outline-none focus:border-ashara-teal resize-none"
                  placeholder="Full essay content..."
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-gray-600 dark:text-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition"
                >
                  <Save className="w-4 h-4" />
                  <span>Publish Article</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

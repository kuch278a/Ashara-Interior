import React, { useState } from 'react';
import {
  X, Save, Loader2, Upload, CheckCircle,
  Plus, Trash2, ArrowLeft, ArrowRight, Link2
} from 'lucide-react';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const CATEGORIES = [
  'INTERIOR', 'LANDSCAPE', 'ARCHITECTURE', 'GOVERNMENTAL',
  'PRIVATE ORGANIZATION', 'PRIVATE CORPORATION', 'PRIVATE COMPANY',
  'COMMERCIAL', 'RESIDENTIAL'
];
const inputCls = "w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-teal dark:text-white rounded-sm focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold";
const labelCls = "block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white mb-1.5";

export default function AdminProjectModal({
  editingProject, setEditingProject,
  projectImageFile, setProjectImageFile,
  projectImagePreview, setProjectImagePreview,
  projectGalleryFiles, setProjectGalleryFiles,
  uploadStatus, onClose, onSubmit, formatFileSize,
}) {
  const [newUrl, setNewUrl] = useState('');
  if (!editingProject) return null;

  const gallery = editingProject.gallery || [];
  const totalGallery = gallery.length + projectGalleryFiles.length;

  const addGalleryUrl = () => {
    const trimmed = newUrl.trim();
    if (!trimmed) return;
    if (totalGallery >= 8) return alert('Gallery is limited to 8 images maximum.');
    setEditingProject({ ...editingProject, gallery: [...gallery, trimmed] });
    setNewUrl('');
  };

  const moveGalleryUrl = (idx, dir) => {
    const target = idx + dir;
    if (target < 0 || target >= gallery.length) return;
    const reordered = [...gallery];
    [reordered[idx], reordered[target]] = [reordered[target], reordered[idx]];
    setEditingProject({ ...editingProject, gallery: reordered });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div role="dialog" aria-modal="true" aria-labelledby="project-modal-title" className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-sm shadow-2xl space-y-6 p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-ashara-teal dark:text-white font-bold">PROJECT SHOWCASE CURATOR</span>
            <h2 id="project-modal-title" className="font-serif text-2xl sm:text-3xl text-ashara-teal dark:text-white mt-0.5">
              {editingProject.id ? 'Edit Architectural Project' : 'Curate New Project'}
            </h2>
          </div>
          <button onClick={onClose} disabled={uploadStatus.active} aria-label="Close project modal" className="text-ashara-teal dark:text-white hover:text-ashara-teal dark:hover:text-white p-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ashara-gold rounded-sm">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white">Live Public Card Preview</span>
                <span className="text-[9px] px-2 py-0.5 bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-white font-semibold uppercase tracking-wider rounded">Real-time</span>
              </div>
              <div className="border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-[#070E18] rounded-sm overflow-hidden shadow-md">
                <div className="aspect-[16/10] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                  <img src={projectImagePreview || editingProject.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'} alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'; }} />
                  <div className="absolute top-2.5 left-2.5 bg-black/75 text-white text-[9px] uppercase tracking-wider px-2 py-0.5 font-semibold rounded-sm">
                    {editingProject.category || 'GOVERNMENTAL'}
                  </div>
                </div>
                <div className="p-4 space-y-1.5">
                  <p className="text-[9px] uppercase tracking-[0.25em] font-semibold text-ashara-teal dark:text-white">{editingProject.subtitle || 'SUBTITLE PREVIEW'}</p>
                  <h4 className="font-serif text-lg font-bold text-ashara-teal dark:text-white line-clamp-1">{editingProject.title || 'Project Title Headline'}</h4>
                  <p className="text-xs text-ashara-teal dark:text-white font-light line-clamp-2">{editingProject.description || 'Architectural narrative details...'}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div>
                <label className={labelCls}>Project Title *</label>
                <input type="text" required value={editingProject.title} onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })} className={inputCls} placeholder="e.g., Oromia Presidential Suites" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Category Tag *</label>
                  <select value={editingProject.category || editingProject.tag || 'GOVERNMENTAL'} onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value, tag: e.target.value })} className={inputCls}>
                    {CATEGORIES.map(c => <option key={c} value={c} className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Subtitle / Scope Tag</label>
                  <input type="text" value={editingProject.subtitle || ''} onChange={(e) => setEditingProject({ ...editingProject, subtitle: e.target.value })} className={inputCls} placeholder="e.g., CIVIC HEADQUARTERS" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { k: 'isHero', label: 'Show in Hero Section' },
                  { k: 'isOurWorks', label: 'Show in Our Works Section' }
                ].map(({ k, label }) => (
                  <label key={k} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={Boolean(editingProject[k])} onChange={(e) => setEditingProject({ ...editingProject, [k]: e.target.checked })} className="w-4 h-4 text-ashara-teal border-gray-300 rounded focus:ring-ashara-teal" />
                    <span className="text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white">{label}</span>
                  </label>
                ))}
              </div>
              <div>
                <label className={labelCls}>Architectural Narrative *</label>
                <textarea rows="3" required value={editingProject.description || ''} onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })} className={`${inputCls} resize-none`} placeholder="Describe the architectural highlights, materiality, lighting..." />
              </div>

              {/* Main Image Upload */}
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white">Project Photography</label>
                {projectImageFile ? (
                  <div className="flex items-center justify-between p-3 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/30 rounded-sm">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <CheckCircle className="w-4 h-4 text-ashara-teal dark:text-white shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-ashara-teal dark:text-white truncate">{projectImageFile.name}</p>
                        <p className="text-[10px] text-ashara-teal dark:text-white flex items-center gap-1.5">
                          <span>{formatFileSize(projectImageFile.size)}</span><span>•</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Smart Web Compression Enabled</span>
                        </p>
                      </div>
                    </div>
                    <button type="button" onClick={() => { setProjectImageFile(null); setProjectImagePreview(''); }} className="text-ashara-teal dark:text-white hover:text-rose-500 dark:hover:text-rose-400 p-1.5 text-xs flex items-center gap-1 shrink-0" title="Remove file">
                      <X className="w-3.5 h-3.5" /><span>Remove</span>
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center gap-1.5 w-full p-4 bg-gray-50 dark:bg-white/5 border-2 border-dashed border-gray-300 dark:border-white/15 hover:border-ashara-teal dark:hover:border-ashara-gold text-ashara-teal dark:text-white cursor-pointer transition-all duration-200 group rounded-sm">
                    <Upload className="w-5 h-5 text-ashara-teal dark:text-white group-hover:text-ashara-teal transition" />
                    <span className="text-xs uppercase tracking-wider font-semibold group-hover:text-ashara-teal transition">Upload high-resolution image file</span>
                    <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="hidden" onChange={(e) => {
                      const file = e.target.files?.[0];
                      e.target.value = '';
                      if (!file) return;
                      if (!ALLOWED_TYPES.includes(file.type)) return alert('Invalid file format. Only JPG, PNG, WEBP, or GIF images are allowed.');
                      if (file.size > 10 * 1024 * 1024) return alert('Image file size exceeds 10MB limit. Please choose a smaller image.');
                      setProjectImageFile(file);
                      const r = new FileReader();
                      r.onload = () => setProjectImagePreview(r.result);
                      r.readAsDataURL(file);
                    }} />
                  </label>
                )}

                {/* Gallery Manager */}
                <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white">Gallery Images (Sub-images for Detail Page)</label>
                    <span className="text-[10px] font-mono font-medium text-ashara-teal/70 dark:text-ashara-gold">{totalGallery}/8 slots used</span>
                  </div>

                  {gallery.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-[9px] uppercase tracking-wider text-ashara-teal/70 dark:text-white/70 font-semibold">Active Gallery Photos ({gallery.length}) — Reorder or remove:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                        {gallery.map((url, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm">
                            <div className="relative w-12 h-12 shrink-0 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden">
                              <img src={url} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80'; }} />
                              <span className="absolute bottom-0 right-0 bg-black/75 text-white text-[8px] font-mono px-1">#{idx + 1}</span>
                            </div>
                            <p className="text-[10px] font-mono text-ashara-teal dark:text-white truncate flex-1 min-w-0" title={url}>{url}</p>
                            <div className="flex items-center gap-0.5 shrink-0">
                              <button type="button" disabled={idx === 0} onClick={() => moveGalleryUrl(idx, -1)} className="p-1 text-ashara-teal dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 rounded-sm disabled:opacity-20" title="Move left/up"><ArrowLeft className="w-3.5 h-3.5" /></button>
                              <button type="button" disabled={idx === gallery.length - 1} onClick={() => moveGalleryUrl(idx, 1)} className="p-1 text-ashara-teal dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 rounded-sm disabled:opacity-20" title="Move right/down"><ArrowRight className="w-3.5 h-3.5" /></button>
                              <button type="button" onClick={() => setEditingProject({ ...editingProject, gallery: gallery.filter((_, i) => i !== idx) })} className="p-1 text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-sm transition" title="Remove"><Trash2 className="w-3.5 h-3.5" /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-1">
                    <div className="relative flex-1">
                      <Link2 className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="url" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addGalleryUrl(); } }} placeholder="Paste image URL to add to gallery (https://...)" disabled={totalGallery >= 8} className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs text-ashara-teal dark:text-white rounded-sm focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold disabled:opacity-50" />
                    </div>
                    <button type="button" onClick={addGalleryUrl} disabled={!newUrl.trim() || totalGallery >= 8} className="px-3.5 py-2 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs font-semibold rounded-sm transition flex items-center gap-1.5 disabled:opacity-40 shrink-0">
                      <Plus className="w-3.5 h-3.5" /><span>Add URL</span>
                    </button>
                  </div>

                  {projectGalleryFiles.length > 0 && (
                    <div className="space-y-1.5">
                      <p className="text-[9px] uppercase tracking-wider text-ashara-teal/70 dark:text-white/70 font-semibold">Queued for Upload ({projectGalleryFiles.length}):</p>
                      <div className="flex flex-wrap gap-2">
                        {projectGalleryFiles.map((file, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/30 rounded-sm">
                            <CheckCircle className="w-4 h-4 text-ashara-teal dark:text-white shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-semibold text-ashara-teal dark:text-white truncate max-w-[180px]">{file.name}</p>
                              <p className="text-[10px] text-ashara-teal dark:text-white">{formatFileSize(file.size)}</p>
                            </div>
                            <button type="button" onClick={() => setProjectGalleryFiles(prev => prev.filter((_, i) => i !== idx))} className="text-ashara-teal dark:text-white hover:text-rose-500 dark:hover:text-rose-400 p-1 text-xs" title="Remove"><X className="w-3.5 h-3.5" /></button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {totalGallery < 8 && (
                    <label className="flex flex-col items-center justify-center gap-1.5 w-full p-4 bg-gray-50 dark:bg-white/5 border-2 border-dashed border-gray-300 dark:border-white/15 hover:border-ashara-teal dark:hover:border-ashara-gold text-ashara-teal dark:text-white cursor-pointer transition-all duration-200 group rounded-sm">
                      <Upload className="w-5 h-5 text-ashara-teal dark:text-white group-hover:text-ashara-teal transition" />
                      <span className="text-xs uppercase tracking-wider font-semibold group-hover:text-ashara-teal transition">Upload gallery image files</span>
                      <span className="text-[10px] text-ashara-teal/70 dark:text-white/70 font-light">Supports JPG, PNG, WEBP — up to {8 - totalGallery} more image(s)</span>
                      <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple className="hidden" onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        e.target.value = '';
                        const valid = files.filter(f => ALLOWED_TYPES.includes(f.type) && f.size <= 10 * 1024 * 1024);
                        if (valid.length < files.length) alert('Some files were ignored because they are not valid images or exceed 10MB.');
                        if (valid.length > 0) {
                          const room = Math.max(0, 8 - totalGallery);
                          const accepted = valid.slice(0, room);
                          if (accepted.length < valid.length) alert(`Gallery is limited to 8 images — ${valid.length - accepted.length} file(s) were not added.`);
                          if (accepted.length > 0) setProjectGalleryFiles([...projectGalleryFiles, ...accepted]);
                        }
                      }} />
                    </label>
                  )}
                </div>

                <div className="pt-1">
                  <p className="text-[9px] uppercase tracking-wider text-ashara-teal dark:text-white mb-1">Or paste image URL (Unsplash or cloud link)</p>
                  <input type="text" value={editingProject.image || ''} onChange={(e) => { setEditingProject({ ...editingProject, image: e.target.value }); setProjectImageFile(null); setProjectImagePreview(''); }} className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs text-ashara-teal dark:text-white rounded-sm focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold" placeholder="https://images.unsplash.com/..." />
                </div>
              </div>
            </div>
          </div>

          {uploadStatus.active && (
            <div className="space-y-1.5 p-3 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/20 rounded-sm">
              <div className="flex items-center justify-between text-xs font-medium text-ashara-teal dark:text-white">
                <span className="flex items-center gap-1.5"><Loader2 className="w-4 h-4 animate-spin" />{uploadStatus.stage}</span>
                <span>{uploadStatus.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 overflow-hidden rounded-full">
                <div className="bg-ashara-teal dark:bg-ashara-gold h-full transition-all duration-300 ease-out rounded-full" style={{ width: `${Math.max(10, uploadStatus.percent)}%` }} />
              </div>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
            <button type="button" onClick={onClose} disabled={uploadStatus.active} className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-ashara-teal dark:text-white hover:text-ashara-teal transition">Cancel</button>
            <button type="submit" disabled={uploadStatus.active} className="inline-flex items-center gap-2 px-6 py-2.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold transition shadow-sm disabled:opacity-50 rounded-sm">
              {uploadStatus.active ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{uploadStatus.active ? (uploadStatus.stage || 'Saving...') : 'Save Project to Portfolio'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

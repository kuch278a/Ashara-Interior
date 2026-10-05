import React from 'react';
import { X, Save, Loader2, Upload, CheckCircle } from 'lucide-react';

export default function AdminProjectModal({
  editingProject, setEditingProject,
  projectImageFile, setProjectImageFile,
  projectImagePreview, setProjectImagePreview,
  projectGalleryFiles, setProjectGalleryFiles,
  projectGalleryPreviews, setProjectGalleryPreviews,
  uploadStatus,
  onClose, onSubmit,
  formatFileSize,
}) {
  if (!editingProject) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xs shadow-2xl space-y-6 p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-ashara-teal dark:text-white font-bold">PROJECT SHOWCASE CURATOR</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ashara-teal dark:text-white mt-0.5">
              {editingProject.id ? 'Edit Architectural Project' : 'Curate New Project'}
            </h3>
          </div>
          <button onClick={onClose} disabled={uploadStatus.active} className="text-ashara-teal dark:text-white hover:text-ashara-teal dark:hover:text-white p-2 transition">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Live Preview */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white">Live Public Card Preview</span>
                <span className="text-[9px] px-2 py-0.5 bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-white font-semibold uppercase tracking-wider rounded">Real-time</span>
              </div>
              <div className="border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-[#070E18] rounded-xs overflow-hidden shadow-md">
                <div className="aspect-[16/10] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                  <img src={projectImagePreview || editingProject.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'} alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'; }} />
                  <div className="absolute top-2.5 left-2.5 bg-black/75 text-white text-[9px] uppercase tracking-wider px-2 py-0.5 font-semibold rounded-xs">
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
            {/* Form Fields */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white mb-1.5">Project Title *</label>
                <input type="text" required value={editingProject.title} onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-teal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                  placeholder="e.g., Oromia Presidential Suites" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white mb-1.5">Category Tag *</label>
                  <select value={editingProject.category || editingProject.tag || 'GOVERNMENTAL'}
                    onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value, tag: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-teal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold">
                    <option value="GOVERNMENTAL" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">GOVERNMENTAL</option>
                    <option value="PRIVATE ORGANIZATION" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">PRIVATE ORGANIZATION</option>
                    <option value="PRIVATE CORPORATION" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">PRIVATE CORPORATION</option>
                    <option value="PRIVATE COMPANY" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">PRIVATE COMPANY</option>
                    <option value="COMMERCIAL" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">COMMERCIAL</option>
                    <option value="RESIDENTIAL" className="bg-white dark:bg-[#0D151C] text-ashara-teal dark:text-white">RESIDENTIAL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white mb-1.5">Subtitle / Scope Tag</label>
                  <input type="text" value={editingProject.subtitle || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, subtitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-teal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                    placeholder="e.g., CIVIC HEADQUARTERS" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white mb-1.5">Architectural Narrative *</label>
                <textarea rows="3" required value={editingProject.description || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-teal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold resize-none"
                  placeholder="Describe the architectural highlights, materiality, lighting..." />
              </div>
              {/* Main Image Upload */}
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white">Project Photography</label>
                {projectImageFile ? (
                  <div className="flex items-center justify-between p-3 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/30 rounded-xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <CheckCircle className="w-4 h-4 text-ashara-teal dark:text-white shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-ashara-teal dark:text-white truncate">{projectImageFile.name}</p>
                        <p className="text-[10px] text-ashara-teal dark:text-white flex items-center gap-1.5">
                          <span>{formatFileSize(projectImageFile.size)}</span><span>�</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Smart Web Compression Enabled</span>
                        </p>
                      </div>
                    </div>
                    <button type="button" onClick={() => { setProjectImageFile(null); setProjectImagePreview(''); }}
                      className="text-ashara-teal dark:text-white hover:text-rose-500 dark:hover:text-rose-400 p-1.5 text-xs flex items-center gap-1 shrink-0" title="Remove file">
                      <X className="w-3.5 h-3.5" /><span>Remove</span>
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center gap-1.5 w-full p-4 bg-gray-50 dark:bg-white/5 border-2 border-dashed border-gray-300 dark:border-white/15 hover:border-ashara-teal dark:hover:border-ashara-gold text-ashara-teal dark:text-white cursor-pointer transition-all duration-200 group rounded-xs">
                    <Upload className="w-5 h-5 text-ashara-teal dark:text-white group-hover:text-ashara-teal dark:group-hover:text-ashara-teal transition" />
                    <span className="text-xs uppercase tracking-wider font-semibold group-hover:text-ashara-teal dark:group-hover:text-ashara-teal transition">Upload high-resolution image file</span>
                    <span className="text-[10px] text-ashara-teal dark:text-white font-light">Supports JPG, PNG, WEBP � automatically optimized for lightning-fast loading</span>
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) { setProjectImageFile(file); const r = new FileReader(); r.onload = () => setProjectImagePreview(r.result); r.readAsDataURL(file); }
                    }} />
                  </label>
                )}
                {/* Gallery Upload */}
                <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-white/10">
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white">Gallery Images (Sub-images for Detail Page)</label>
                  {projectGalleryFiles.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {projectGalleryFiles.map((file, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/30 rounded-xs">
                          <CheckCircle className="w-4 h-4 text-ashara-teal dark:text-white shrink-0" />
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-ashara-teal dark:text-white truncate max-w-[180px]">{file.name}</p>
                            <p className="text-[10px] text-ashara-teal dark:text-white">{formatFileSize(file.size)}</p>
                          </div>
                          <button type="button" onClick={() => { setProjectGalleryFiles(prev => prev.filter((_, i) => i !== idx)); setProjectGalleryPreviews(prev => prev.filter((_, i) => i !== idx)); }}
                            className="text-ashara-teal dark:text-white hover:text-rose-500 dark:hover:text-rose-400 p-1 text-xs" title="Remove">
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center gap-1.5 w-full p-4 bg-gray-50 dark:bg-white/5 border-2 border-dashed border-gray-300 dark:border-white/15 hover:border-ashara-teal dark:hover:border-ashara-gold text-ashara-teal dark:text-white cursor-pointer transition-all duration-200 group rounded-xs">
                      <Upload className="w-5 h-5 text-ashara-teal dark:text-white group-hover:text-ashara-teal dark:group-hover:text-ashara-teal transition" />
                      <span className="text-xs uppercase tracking-wider font-semibold group-hover:text-ashara-teal dark:group-hover:text-ashara-teal transition">Upload gallery images (multiple)</span>
                      <span className="text-[10px] text-ashara-teal dark:text-white font-light">Supports JPG, PNG, WEBP � will appear in project detail gallery grid</span>
                      <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => {
                        const files = Array.from(e.target.files);
                        if (files.length > 0) {
                          const newFiles = [...projectGalleryFiles, ...files].slice(0, 8);
                          setProjectGalleryFiles(newFiles);
                          files.forEach(file => { const r = new FileReader(); r.onload = () => setProjectGalleryPreviews(prev => [...prev, r.result]); r.readAsDataURL(file); });
                        }
                      }} />
                    </label>
                  )}
                  {(editingProject.gallery && editingProject.gallery.length > 0) && (
                    <div className="pt-2">
                      <p className="text-[9px] uppercase tracking-wider text-ashara-teal dark:text-white mb-1">Current gallery URLs:</p>
                      <div className="flex flex-wrap gap-2">
                        {editingProject.gallery.map((url, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xs">
                            <img src={url} alt="" className="w-10 h-10 object-cover rounded" />
                            <input type="text" value={url} readOnly className="flex-1 px-2 py-1 bg-transparent text-[10px] text-ashara-teal dark:text-white truncate" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* URL input fallback */}
                <div className="pt-1">
                  <p className="text-[9px] uppercase tracking-wider text-ashara-teal dark:text-white mb-1">Or paste image URL (Unsplash or cloud link)</p>
                  <input type="text" value={editingProject.image || ''} onChange={(e) => { setEditingProject({ ...editingProject, image: e.target.value }); setProjectImageFile(null); setProjectImagePreview(''); }}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs text-ashara-teal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                    placeholder="https://images.unsplash.com/..." />
                </div>
              </div>
            </div>
          </div>
          {/* Upload Progress */}
          {uploadStatus.active && (
            <div className="space-y-1.5 p-3 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/20 rounded-xs">
              <div className="flex items-center justify-between text-xs font-medium text-ashara-teal dark:text-white">
                <span className="flex items-center gap-1.5"><Loader2 className="w-4 h-4 animate-spin" />{uploadStatus.stage}</span>
                <span>{uploadStatus.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 overflow-hidden rounded-full">
                <div className="bg-ashara-teal dark:bg-ashara-gold h-full transition-all duration-300 ease-out rounded-full" style={{ width: `${Math.max(10, uploadStatus.percent)}%` }} />
              </div>
            </div>
          )}
          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
            <button type="button" onClick={onClose} disabled={uploadStatus.active}
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-ashara-teal dark:text-white hover:text-ashara-teal dark:hover:text-white transition">Cancel</button>
            <button type="submit" disabled={uploadStatus.active}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold transition shadow-sm disabled:opacity-50 rounded-xs">
              {uploadStatus.active ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{uploadStatus.active ? (uploadStatus.stage || 'Saving...') : 'Save Project to Portfolio'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

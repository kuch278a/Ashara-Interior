import React from 'react';
import { X, Save, Loader2, ImagePlus, CheckCircle } from 'lucide-react';

export default function AdminBlogModal({
  editingPost, setEditingPost,
  blogImageFile, setBlogImageFile,
  blogImagePreview, setBlogImagePreview,
  uploadStatus, onClose, onSubmit, formatFileSize,
}) {
  if (!editingPost) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-xs shadow-2xl space-y-6 p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-ashara-teal dark:text-ashara-gold font-bold">THE ASHARA JOURNAL</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ashara-charcoal dark:text-white mt-0.5">
              {editingPost.id ? 'Edit Architectural Article' : 'Publish New Journal Essay'}
            </h3>
          </div>
          <button onClick={onClose} disabled={uploadStatus.active} className="text-gray-400 hover:text-gray-600 dark:hover:text-white p-2 transition">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">Article Title *</label>
            <input type="text" required value={editingPost.title} onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
              placeholder="e.g., Monumental Acoustics in Ethiopian Public Architecture" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">Category Tag *</label>
              <input type="text" required value={editingPost.category || ''} onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                placeholder="e.g., CIVIC ARCHITECTURE" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">Estimated Reading Time</label>
              <input type="text" value={editingPost.readTime || '4 MIN READ'} onChange={(e) => setEditingPost({ ...editingPost, readTime: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">Editorial Excerpt / Abstract *</label>
            <textarea rows="2" required value={editingPost.excerpt || ''} onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold resize-none"
              placeholder="Summary for journal cards and social preview..." />
          </div>
          {/* Cover Image */}
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300">Article Cover Image</label>
            {blogImageFile ? (
              <div className="flex items-center justify-between p-3 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/30 rounded-xs">
                <div className="flex items-center gap-2.5 min-w-0">
                  <CheckCircle className="w-4 h-4 text-ashara-teal dark:text-ashara-gold shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-ashara-charcoal dark:text-white truncate">{blogImageFile.name}</p>
                    <p className="text-[10px] text-gray-500 font-mono">{formatFileSize(blogImageFile.size)} • Smart Compression Ready</p>
                  </div>
                </div>
                <button type="button" onClick={() => { setBlogImageFile(null); setBlogImagePreview(''); }}
                  className="text-gray-400 hover:text-rose-500 p-1 text-xs flex items-center gap-1">
                  <X className="w-3.5 h-3.5" /><span>Remove</span>
                </button>
              </div>
            ) : (
              <label className="flex items-center justify-center gap-2 w-full p-3 bg-gray-50 dark:bg-white/5 border-2 border-dashed border-gray-300 dark:border-white/15 hover:border-ashara-teal dark:hover:border-ashara-gold text-gray-600 dark:text-gray-300 cursor-pointer transition-all duration-200 group rounded-xs">
                <ImagePlus className="w-4 h-4 text-gray-400 group-hover:text-ashara-teal dark:group-hover:text-ashara-gold" />
                <span className="text-xs uppercase tracking-wider font-semibold">Click to upload cover photograph</span>
                <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) { setBlogImageFile(file); const r = new FileReader(); r.onload = () => setBlogImagePreview(r.result); r.readAsDataURL(file); }
                }} />
              </label>
            )}
            <input type="text" value={editingPost.image || ''} onChange={(e) => { setEditingPost({ ...editingPost, image: e.target.value }); setBlogImageFile(null); setBlogImagePreview(''); }}
              className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
              placeholder="Or paste cover image URL..." />
          </div>
          {/* Full Content */}
          <div>
            <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-700 dark:text-gray-300 mb-1.5">Full Essay Content (Paragraphs)</label>
            <textarea rows="6" value={editingPost.fullContent || ''} onChange={(e) => setEditingPost({ ...editingPost, fullContent: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold resize-none"
              placeholder="Full essay narrative..." />
          </div>
          {uploadStatus.active && (
            <div className="space-y-1.5 p-3 bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/20 rounded-xs">
              <div className="flex items-center justify-between text-xs font-medium text-ashara-teal dark:text-ashara-gold">
                <span className="flex items-center gap-1.5"><Loader2 className="w-4 h-4 animate-spin" />{uploadStatus.stage}</span>
                <span>{uploadStatus.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 overflow-hidden rounded-full">
                <div className="bg-ashara-teal dark:bg-ashara-gold h-full transition-all duration-300 ease-out rounded-full" style={{ width: `${Math.max(10, uploadStatus.percent)}%` }} />
              </div>
            </div>
          )}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
            <button type="button" onClick={onClose} className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-gray-600 dark:text-gray-300">Cancel</button>
            <button type="submit" disabled={uploadStatus.active}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold transition rounded-xs disabled:opacity-50">
              {uploadStatus.active ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{uploadStatus.active ? 'Publishing...' : 'Publish to Journal'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

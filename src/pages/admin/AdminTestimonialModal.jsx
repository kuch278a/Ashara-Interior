import React from 'react';
import { X, Save, Star } from 'lucide-react';

export default function AdminTestimonialModal({ editingTestimonial, setEditingTestimonial, projects, onClose, onSubmit }) {
  if (!editingTestimonial) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-xs shadow-2xl p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-ashara-teal dark:text-white font-bold">CLIENT SOCIAL PROOF</span>
            <h3 className="font-serif text-2xl text-ashara-teal dark:text-white">
              {editingTestimonial.id ? 'Edit Testimonial' : 'Add Client Testimonial'}
            </h3>
          </div>
          <button onClick={onClose} className="text-ashara-teal dark:text-white hover:text-ashara-teal dark:hover:text-white p-1"><X className="w-5 h-5" /></button>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white mb-1">Client Name / Rep *</label>
              <input type="text" required value={editingTestimonial.clientName || ''} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, clientName: e.target.value })}
                className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs text-ashara-teal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                placeholder="e.g., Deputy President's Office" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white mb-1">Role / Title</label>
              <input type="text" value={editingTestimonial.role || ''} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, role: e.target.value })}
                className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs text-ashara-teal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                placeholder="e.g., Executive Bureau" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white mb-1">Organization / Company *</label>
              <input type="text" required value={editingTestimonial.organization || ''} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, organization: e.target.value })}
                className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs text-ashara-teal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold"
                placeholder="e.g., Prosperity Party HQ" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white mb-1">Linked Project</label>
              <select value={editingTestimonial.projectId || ''} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, projectId: e.target.value })}
                className="w-full px-3 py-2 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs text-ashara-teal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold">
                <option value="">General Studio Testimonial</option>
                {projects.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
              </select>
            </div>
          </div>
          {/* Star Rating */}
          <div>
            <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white mb-1">Star Rating (1 - 5)</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} type="button" onClick={() => setEditingTestimonial({ ...editingTestimonial, rating: star })} className="p-1 hover:scale-115 transition-transform">
                  <Star className={`w-5 h-5 ${star <= (editingTestimonial.rating || 5) ? 'fill-amber-500 text-amber-500' : 'text-gray-300 dark:text-white'}`} />
                </button>
              ))}
              <span className="text-xs font-semibold text-ashara-teal dark:text-white ml-2">{editingTestimonial.rating || 5} Stars</span>
            </div>
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-wider font-bold text-ashara-teal dark:text-white mb-1">Client Quote / Review *</label>
            <textarea rows="4" required value={editingTestimonial.quote || ''} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, quote: e.target.value })}
              className="w-full px-3 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-teal dark:text-white rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold resize-none"
              placeholder="Paste or write the client testimonial quote here..." />
          </div>
          <div className="flex items-center gap-2 pt-1">
            <input type="checkbox" id="featuredToggle" checked={editingTestimonial.isFeatured !== false}
              onChange={(e) => setEditingTestimonial({ ...editingTestimonial, isFeatured: e.target.checked })}
              className="rounded text-ashara-teal dark:text-white focus:ring-ashara-teal w-4 h-4" />
            <label htmlFor="featuredToggle" className="text-xs text-ashara-teal dark:text-white">Feature prominently on site & homepage</label>
          </div>
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
            <button type="button" onClick={onClose} className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-ashara-teal dark:text-white">Cancel</button>
            <button type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold rounded-xs transition shadow-sm">
              <Save className="w-4 h-4" /><span>Save Testimonial</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

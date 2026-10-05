import React from 'react';
import { Quote, Plus, Star, Edit3, Trash2 } from 'lucide-react';

export default function AdminTestimonialsTab({ filteredTestimonials, searchQuery, projects, onOpenNew, onOpenEdit, onDelete }) {
  return (
    <div className="space-y-6 animate-fade-in">
      {filteredTestimonials.length === 0 ? (
        <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 p-12 text-center rounded-xs space-y-4">
          <div className="w-12 h-12 rounded-full bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-white flex items-center justify-center mx-auto">
            <Quote className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl text-ashara-teal dark:text-white">No client testimonials found</h3>
            <p className="text-xs text-ashara-teal dark:text-white max-w-sm mx-auto">
              {searchQuery ? 'Try adjusting your search criteria.' : 'Add client testimonials to highlight social proof in project details.'}
            </p>
          </div>
          <button onClick={onOpenNew}
            className="inline-flex items-center gap-2 px-4 py-2 bg-ashara-teal text-white text-xs uppercase tracking-wider font-semibold rounded-xs">
            <Plus className="w-4 h-4" /><span>Add First Testimonial</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((t) => {
            const linkedProj = projects.find(p => String(p.id) === String(t.projectId));
            return (
              <div key={t.id} className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 p-6 rounded-xs shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative group">
                <div className="flex items-center justify-end gap-2">
                  {linkedProj ? (
                    <span className="text-[9px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-ashara-teal/10 text-ashara-teal dark:text-white border border-ashara-teal/20 truncate max-w-[160px]">{linkedProj.title}</span>
                  ) : (
                    <span className="text-[9px] uppercase tracking-wider font-normal px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-ashara-teal dark:text-white">General Studio</span>
                  )}
                </div>
                <p className="font-serif italic text-ashara-teal dark:text-white text-xs sm:text-[13px] leading-relaxed line-clamp-4 font-light">"{t.quote}"</p>
                <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-ashara-teal dark:text-white uppercase tracking-wider truncate">{t.clientName}</p>
                    <p className="text-[11px] text-ashara-teal dark:text-white truncate">
                      {t.role && `${t.role} � `}<span className="font-medium text-ashara-teal dark:text-white">{t.organization}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button onClick={() => onOpenEdit(t)}
                      className="p-1.5 text-ashara-teal hover:text-ashara-teal dark:text-white dark:hover:text-white rounded hover:bg-gray-100 dark:hover:bg-white/5 transition"
                      title="Edit Testimonial"><Edit3 className="w-3.5 h-3.5" /></button>
                    <button onClick={() => onDelete({ type: 'testimonial', id: t.id, title: `${t.clientName} (${t.organization})` })}
                      className="p-1.5 text-rose-500 hover:text-rose-700 rounded hover:bg-rose-50 dark:hover:bg-rose-500/10 transition"
                      title="Delete Testimonial"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Layers, Plus, Edit3, Trash2 } from 'lucide-react';

export default function AdminProjectsTab({
  filteredProjects,
  searchQuery,
  onOpenNew,
  onOpenEdit,
  onDelete,
}) {
  return (
    <div className="space-y-6">
      {filteredProjects.length === 0 ? (
        <div className="p-16 text-center bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-xs space-y-4">
          <div className="w-14 h-14 rounded-full bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-white flex items-center justify-center mx-auto">
            <Layers className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl text-ashara-teal dark:text-white">
              {searchQuery ? 'No matching architectural projects found' : 'No projects in CMS yet'}
            </h3>
            <p className="text-xs text-ashara-teal dark:text-white max-w-md mx-auto">
              {searchQuery
                ? `Try adjusting your search term "${searchQuery}" or clear the category filter.`
                : 'Click the button below to add your first curated project showcase.'}
            </p>
          </div>
          {!searchQuery && (
            <button onClick={onOpenNew}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-semibold rounded-xs">
              <Plus className="w-4 h-4" /><span>Create First Project</span>
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-xs overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group">
              <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                <img src={proj.image} alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'; }} />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[9px] uppercase tracking-wider px-2.5 py-1 font-semibold rounded-xs border border-white/15">
                  {proj.category || proj.tag || 'GOVERNMENTAL'}
                </div>
                <button onClick={() => onOpenEdit(proj)}
                  className="absolute bottom-3 right-3 p-2 bg-white/90 dark:bg-ashara-charcoal/90 text-ashara-teal dark:text-white rounded-xs shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-ashara-teal hover:text-white dark:hover:bg-ashara-gold dark:hover:text-ashara-dark"
                  title="Edit Project">
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ashara-teal dark:text-white">
                    {proj.subtitle || 'BESPOKE ARCHITECTURE'}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-ashara-teal dark:text-white line-clamp-1">{proj.title}</h3>
                  <p className="text-xs text-ashara-teal dark:text-white font-light line-clamp-3 leading-relaxed">{proj.description}</p>
                </div>
                <div className="pt-3.5 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono text-ashara-teal dark:text-white">ID: {String(proj.id).slice(-8)}</span>
                  <div className="flex items-center gap-1">
                    <button onClick={() => onOpenEdit(proj)}
                      className="p-1.5 text-ashara-teal hover:text-ashara-teal dark:text-white dark:hover:text-white transition rounded-xs hover:bg-gray-100 dark:hover:bg-white/5"
                      title="Edit Project"><Edit3 className="w-4 h-4" /></button>
                    <button onClick={() => onDelete({ type: 'project', id: proj.id, title: proj.title })}
                      className="p-1.5 text-rose-500 hover:text-rose-700 transition rounded-xs hover:bg-rose-50 dark:hover:bg-rose-500/10"
                      title="Delete Project"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

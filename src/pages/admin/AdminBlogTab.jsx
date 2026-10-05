import React from 'react';
import { FileText, Plus, Edit3, Trash2 } from 'lucide-react';

export default function AdminBlogTab({ filteredBlogPosts, searchQuery, onOpenNew, onOpenEdit, onDelete }) {
  return (
    <div className="space-y-6">
      {filteredBlogPosts.length === 0 ? (
        <div className="p-16 text-center bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-xs space-y-4">
          <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
            <FileText className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl text-ashara-teal dark:text-white">
              {searchQuery ? 'No matching journal articles' : 'No articles published yet'}
            </h3>
            <p className="text-xs text-ashara-teal dark:text-white max-w-md mx-auto">
              Publish architectural essays, material studies, and design thought-leadership.
            </p>
          </div>
          {!searchQuery && (
            <button onClick={onOpenNew}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ashara-teal dark:bg-ashara-gold text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-semibold rounded-xs">
              <Plus className="w-4 h-4" /><span>Write First Article</span>
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBlogPosts.map((post) => (
            <div key={post.id} className="p-6 bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-xs shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-ashara-teal dark:text-white">
                    {post.category || 'ARCHITECTURAL ESSAY'} � {post.readTime || '4 MIN READ'}
                  </span>
                  <span className="text-[10px] text-ashara-teal dark:text-white font-mono">ID: {String(post.id).slice(-6)}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-ashara-teal dark:text-white">{post.title}</h3>
                <p className="text-xs text-ashara-teal dark:text-white font-light leading-relaxed line-clamp-3">{post.excerpt}</p>
              </div>
              <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-ashara-teal dark:text-white">
                  {post.updatedAt ? `Updated ${new Date(post.updatedAt).toLocaleDateString()}` : 'Published'}
                </span>
                <div className="flex items-center gap-2">
                  <button onClick={() => onOpenEdit(post)}
                    className="p-2 text-ashara-teal hover:text-ashara-teal dark:text-white dark:hover:text-white transition rounded-xs hover:bg-gray-100 dark:hover:bg-white/5"
                    title="Edit Article"><Edit3 className="w-4 h-4" /></button>
                  <button onClick={() => onDelete({ type: 'blog', id: post.id, title: post.title })}
                    className="p-2 text-rose-500 hover:text-rose-700 transition rounded-xs hover:bg-rose-50 dark:hover:bg-rose-500/10"
                    title="Delete Article"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

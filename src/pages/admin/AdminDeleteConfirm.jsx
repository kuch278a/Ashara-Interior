import React from 'react';
import { Trash2, X, AlertCircle } from 'lucide-react';

export default function AdminDeleteConfirm({ deleteConfirm, onCancel, onConfirm }) {
  if (!deleteConfirm) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 w-full max-w-md p-6 rounded-xs shadow-2xl space-y-5">
        <div className="flex items-center gap-3 text-rose-500">
          <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0">
            <Trash2 className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-bold text-ashara-teal dark:text-white">Confirm Deletion</h3>
        </div>
        <p className="text-xs text-ashara-teal dark:text-white leading-relaxed">
          Are you sure you want to remove <span className="font-semibold text-ashara-teal dark:text-white">"{deleteConfirm.title}"</span>? This action cannot be undone.
        </p>
        <div className="flex items-center justify-end gap-3 pt-2">
          <button type="button" onClick={onCancel}
            className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-ashara-teal dark:text-white hover:text-ashara-teal dark:hover:text-white transition">
            Cancel
          </button>
          <button type="button" onClick={onConfirm}
            className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs uppercase tracking-wider font-bold rounded-xs transition shadow-sm">
            Delete Permanently
          </button>
        </div>
      </div>
    </div>
  );
}

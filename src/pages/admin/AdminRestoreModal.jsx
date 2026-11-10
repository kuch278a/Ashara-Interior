import React from 'react';
import { UploadCloud, RefreshCw } from 'lucide-react';

export default function AdminRestoreModal({ candidate, isRestoring, onCancel, onConfirm }) {
  if (!candidate) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-sm shadow-2xl p-6 sm:p-8 max-w-md w-full space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-ashara-gold flex items-center justify-center shrink-0">
            <UploadCloud className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-ashara-teal dark:text-white">Restore Studio Catalog</h3>
            <p className="text-xs text-ashara-teal/70 dark:text-white/70">Confirm catalog data import</p>
          </div>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-sm space-y-2 text-xs text-ashara-teal dark:text-white">
          <p className="font-semibold uppercase tracking-wider text-[10px] text-ashara-teal/70 dark:text-ashara-gold">Found in backup file:</p>
          <ul className="space-y-1 font-mono text-xs">
            <li>• {candidate.projects.length} Architectural Project(s)</li>
            <li>• {candidate.testimonials.length} Client Testimonial(s)</li>
            <li>• {candidate.leads.length} Consultation Lead(s)</li>
          </ul>
          {candidate.exportedAt && (
            <p className="text-[10px] text-gray-400 dark:text-white/40 pt-1">
              Created: {new Date(candidate.exportedAt).toLocaleString()}
            </p>
          )}
        </div>

        <p className="text-xs text-ashara-teal/80 dark:text-white/80 leading-relaxed">
          This will merge the backup items with your current studio catalog and sync them with both local cache and Firestore.
        </p>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button type="button" onClick={onCancel} disabled={isRestoring} className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-ashara-teal dark:text-white hover:opacity-75 transition">
            Cancel
          </button>
          <button type="button" onClick={onConfirm} disabled={isRestoring} className="inline-flex items-center gap-2 px-5 py-2 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-xs uppercase tracking-wider font-bold rounded-sm transition shadow-sm disabled:opacity-50">
            {isRestoring ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <UploadCloud className="w-3.5 h-3.5" />}
            <span>{isRestoring ? 'Restoring...' : 'Confirm & Restore'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}


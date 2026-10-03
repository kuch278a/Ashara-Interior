import React from 'react';
import { Users, Mail, Phone, Clock, MessageSquare, Copy, Check } from 'lucide-react';

export default function AdminLeadsTab({ filteredLeads, searchQuery, copiedId, onCopy, onUpdateStatus }) {
  return (
    <div className="space-y-6">
      {filteredLeads.length === 0 ? (
        <div className="p-16 text-center bg-white dark:bg-[#0C1726] border border-gray-200 dark:border-white/10 rounded-xs space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <Users className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl text-ashara-charcoal dark:text-white">
              {searchQuery ? 'No matching consultation inquiries' : 'No client leads recorded yet'}
            </h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              When visitors submit inquiries through the Contact page, they will instantly appear here with contact actions.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeads.map((lead, idx) => {
            const leadKey = lead.id || `lead_${idx}`;
            const status = (lead.status || 'new').toLowerCase();
            return (
              <div key={leadKey}
                className={`p-6 bg-white dark:bg-[#0C1726] border rounded-xs shadow-xs space-y-4 flex flex-col justify-between transition-all hover:shadow-md ${status === 'new' ? 'border-emerald-500/40 dark:border-emerald-500/30 ring-1 ring-emerald-500/20' : 'border-gray-200 dark:border-white/10'}`}>
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-ashara-teal/10 dark:bg-ashara-gold/15 text-ashara-teal dark:text-ashara-gold font-bold text-sm flex items-center justify-center shrink-0">
                        {(lead.fullName || 'Client')[0].toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-ashara-charcoal dark:text-white leading-tight">{lead.fullName || 'Anonymous Client'}</h3>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent'}
                        </p>
                      </div>
                    </div>
                    <select value={status} onChange={(e) => onUpdateStatus(lead.id, e.target.value)}
                      className={`px-2 py-1 text-[9px] uppercase font-bold tracking-wider rounded-xs border focus:outline-none cursor-pointer ${status === 'new' ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30' : status === 'contacted' ? 'bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/30' : 'bg-gray-200/60 dark:bg-white/10 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-white/15'}`}>
                      <option value="new">● New</option>
                      <option value="contacted">● Contacted</option>
                      <option value="completed">● Completed</option>
                    </select>
                  </div>
                  <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                    {lead.email && (
                      <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-white/5 rounded-xs">
                        <div className="flex items-center gap-2 truncate">
                          <Mail className="w-3.5 h-3.5 text-ashara-teal dark:text-ashara-gold shrink-0" />
                          <span className="truncate text-xs">{lead.email}</span>
                        </div>
                        <button onClick={() => onCopy(lead.email, `email_${leadKey}`)} className="text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold p-1" title="Copy Email">
                          {copiedId === `email_${leadKey}` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    )}
                    {lead.telephone && (
                      <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-white/5 rounded-xs">
                        <div className="flex items-center gap-2 truncate">
                          <Phone className="w-3.5 h-3.5 text-ashara-teal dark:text-ashara-gold shrink-0" />
                          <span className="truncate text-xs font-mono">{lead.telephone}</span>
                        </div>
                        <button onClick={() => onCopy(lead.telephone, `phone_${leadKey}`)} className="text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold p-1" title="Copy Phone">
                          {copiedId === `phone_${leadKey}` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="p-3.5 bg-gray-50/75 dark:bg-white/5 border-l-2 border-ashara-teal dark:border-ashara-gold rounded-r-xs">
                    <p className="text-xs text-gray-700 dark:text-gray-300 italic leading-relaxed line-clamp-4">
                      "{lead.enquiry || lead.message || 'General architectural consultation request'}"
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-100 dark:border-white/5 flex items-center gap-2">
                  {lead.telephone && (
                    <a href={`https://wa.me/${lead.telephone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Greetings ${lead.fullName || 'Client'}, thank you for contacting Ashara Interiors regarding your architectural inquiry.`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] uppercase tracking-wider font-semibold rounded-xs transition text-center shadow-xs flex items-center justify-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" /><span>WhatsApp</span>
                    </a>
                  )}
                  {lead.email && (
                    <a href={`mailto:${lead.email}?subject=${encodeURIComponent('Ashara Interiors — Architectural Consultation Follow-up')}`}
                      className="flex-1 py-2 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-[10px] uppercase tracking-wider font-semibold rounded-xs transition text-center shadow-xs flex items-center justify-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" /><span>Send Email</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

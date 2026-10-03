import React from 'react';
import { ShieldCheck, Lock, AlertCircle, Loader2 } from 'lucide-react';

export default function AdminLoginScreen({
  loginEmail, setLoginEmail,
  loginPassword, setLoginPassword,
  loginError,
  isLoggingIn,
  onSubmit,
  onNavigate,
}) {
  return (
    <div className="min-h-[92vh] flex items-center justify-center py-16 px-4 sm:px-6 relative overflow-hidden bg-[#FAF9F5] dark:bg-[#070E18] transition-colors duration-500">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-ashara-teal/10 via-ashara-gold/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-ashara-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="w-full max-w-lg relative z-10">
        <div className="bg-white/90 dark:bg-[#0C1726]/90 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-2xl p-8 sm:p-12 rounded-xs space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-ashara-teal via-ashara-gold to-ashara-teal" />
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-ashara-teal/5 dark:bg-ashara-gold/10 border border-ashara-teal/20 dark:border-ashara-gold/30 shadow-inner mx-auto mb-2">
              <Lock className="w-6 h-6 text-ashara-teal dark:text-ashara-gold stroke-[1.7]" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.38em] text-ashara-teal dark:text-ashara-gold font-bold">STUDIO ATELIER CMS</p>
              <h1 className="font-serif text-3xl sm:text-4xl text-ashara-charcoal dark:text-white font-normal">Director Access</h1>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-light max-w-sm mx-auto leading-relaxed">
              Curated portfolio and architectural client lead management for Ashara Interiors studio directors.
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-5">
            {loginError && (
              <div className="p-3.5 bg-rose-500/10 border border-rose-500/25 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2.5 rounded-xs animate-shake">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="font-medium">{loginError}</span>
              </div>
            )}
            <div className="space-y-1.5">
              <label className="block text-[10px] uppercase tracking-widest font-semibold text-gray-700 dark:text-gray-300">Director Email / ID</label>
              <input type="text" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="Enter director email or ID"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white placeholder-gray-400 rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold transition shadow-inner" />
            </div>
            <div className="space-y-1.5">
              <label className="block text-[10px] uppercase tracking-widest font-semibold text-gray-700 dark:text-gray-300">Security Passcode</label>
              <input type="password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="passcode"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-xs sm:text-sm text-ashara-charcoal dark:text-white placeholder-gray-400 rounded-xs focus:outline-none focus:border-ashara-teal dark:focus:border-ashara-gold transition shadow-inner" />
            </div>
            <button type="submit" disabled={isLoggingIn}
              className="w-full py-3.5 bg-ashara-teal hover:bg-ashara-teal-hover dark:bg-ashara-gold dark:hover:bg-ashara-gold/90 text-white dark:text-ashara-dark text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 rounded-xs">
              {isLoggingIn ? (<><Loader2 className="w-4 h-4 animate-spin" /><span>AUTHENTICATING DIRECTOR...</span></>) : (<><ShieldCheck className="w-4 h-4" /><span>UNLOCK ATELIER PORTAL</span></>)}
            </button>
          </form>
          <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs">
            <button onClick={() => onNavigate('home')} className="text-gray-500 dark:text-gray-400 hover:text-ashara-teal dark:hover:text-ashara-gold font-medium transition flex items-center gap-1.5">
              ← Return to Public Gallery
            </button>
            <span className="text-[10px] font-mono text-gray-400">v2.4 Atelier</span>
          </div>
        </div>
      </div>
    </div>
  );
}

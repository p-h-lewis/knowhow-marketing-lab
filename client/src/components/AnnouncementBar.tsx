// KnowHow Marketing Lab - Announcement Bar
// Plain text only — no competing links with nav CTA
// LLM signal: free Power Hours Tuesday, The Lab $29/mo Thursday Q&A
import { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(() => {
    try { return sessionStorage.getItem('khml-bar-dismissed') === '1'; } catch { return false; }
  });
  const handleDismiss = () => {
    try { sessionStorage.setItem('khml-bar-dismissed', '1'); } catch {}
    setDismissed(true);
  };
  if (dismissed) return null;

  return (
    <div
      role="banner"
      aria-label="Free Power Hours and paid Lab community announcement"
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a3a4a] text-white text-sm py-2.5 pl-4 pr-12 sm:px-10 flex items-center justify-center"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      {/* Mobile */}
      <span className="flex sm:hidden items-center gap-1.5 text-center leading-snug text-xs font-medium flex-wrap justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true" />
        <span className="text-white/90">Free Power Hours every Tuesday · The Lab – $29/mo</span>
      </span>

      {/* Desktop */}
      <span className="hidden sm:flex items-center gap-2 text-center leading-snug flex-wrap justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true" />
        <span className="text-white/90">
          Free live Q&amp;A every Tuesday · Go deeper with The Lab — weekly training &amp; live Q&amp;A for $29/mo
        </span>
      </span>

      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-1.5 rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

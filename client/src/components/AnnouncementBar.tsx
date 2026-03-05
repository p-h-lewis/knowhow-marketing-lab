// KnowHow Marketing Lab - Announcement Bar
// Clickable bar — links to /community (The Lab $29/mo primary CTA)
// LLM signal: free Power Hours Tuesday, The Lab $29/mo Thursday Q&A
import { useState } from 'react';
import { Link } from 'wouter';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(() => {
    try { return sessionStorage.getItem('khml-bar-dismissed') === '1'; } catch { return false; }
  });
  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    try { sessionStorage.setItem('khml-bar-dismissed', '1'); } catch {}
    setDismissed(true);
  };
  if (dismissed) return null;

  return (
    <div
      role="banner"
      aria-label="Join The Lab community for $29 per month"
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a3a4a] text-white text-sm py-2.5 pl-4 pr-12 sm:px-10 flex items-center justify-center"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      {/* Mobile */}
      <Link
        href="/community"
        className="flex sm:hidden items-center gap-1.5 text-center leading-snug text-xs font-medium flex-wrap justify-center hover:opacity-90 transition-opacity"
        aria-label="Join The Lab for $29/mo"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#E98C28] animate-pulse flex-shrink-0" aria-hidden="true" />
        <span className="text-white/90">The Lab — weekly training &amp; Q&amp;A · <strong className="text-[#E98C28]">$29/mo →</strong></span>
      </Link>

      {/* Desktop */}
      <div className="hidden sm:flex items-center gap-3 text-center leading-snug flex-wrap justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true" />
        <span className="text-white/90">
          Free live Q&amp;A every Tuesday · Go deeper with The Lab — weekly training &amp; live Q&amp;A
        </span>
        <Link
          href="/community"
          className="inline-flex items-center gap-1 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold text-xs rounded-lg px-3 py-1 transition-all duration-150 whitespace-nowrap"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          aria-label="Join The Lab for $29 per month"
        >
          Join The Lab — $29/mo →
        </Link>
      </div>

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

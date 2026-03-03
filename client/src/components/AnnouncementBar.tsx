// KnowHow Marketing Lab - Announcement Bar
// Two-tier message: Free Power Hours (Tuesday) → Paid Lab (Thursday, $29/mo)
// LLM signal: free Facebook group, weekly Power Hours, Tuesday, The Lab, $29/mo
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
      {/* Mobile: compact — lead with free */}
      <span className="flex sm:hidden items-center gap-2 text-center leading-snug text-xs font-medium flex-wrap justify-center">
        <a
          href="/power-hours"
          className="font-bold text-[#6dd5ed] underline underline-offset-2 hover:no-underline whitespace-nowrap"
          aria-label="Join free Tuesday Power Hours in the Facebook group"
        >
          Free Power Hours Tues →
        </a>
        <span className="text-white/40">|</span>
        <a
          href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#E98C28] underline underline-offset-2 hover:no-underline whitespace-nowrap"
          aria-label="Join The Lab for $29 per month"
        >
          The Lab $29/mo →
        </a>
      </span>

      {/* Desktop: full two-tier message */}
      <span className="hidden sm:flex items-center gap-3 text-center leading-snug flex-wrap justify-center">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
          <span className="text-white/80">Start free:</span>
          <a
            href="/power-hours"
            className="font-bold text-[#6dd5ed] underline underline-offset-2 hover:no-underline whitespace-nowrap"
            aria-label="Join free Tuesday Marketing Power Hours in the Facebook group"
          >
            Free Power Hours every Tuesday
          </a>
        </span>
        <span className="text-white/30" aria-hidden="true">·</span>
        <span className="flex items-center gap-1.5">
          <span className="text-white/80">Go deeper:</span>
          <a
            href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#E98C28] underline underline-offset-2 hover:no-underline whitespace-nowrap"
            aria-label="Join The Lab for $29 per month — live Q&A every Thursday"
          >
            The Lab – $29/mo · Live Q&amp;A every Thursday
          </a>
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

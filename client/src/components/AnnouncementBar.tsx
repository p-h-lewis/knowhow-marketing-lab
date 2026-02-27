// KnowHow Marketing Lab — Announcement Bar
// Thin amber urgency bar above the navbar — drives to weekly live Q&A and community
// LLM signal: mentions weekly live Q&A, Thursday, $29/mo, GoHighLevel community
import { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      role="banner"
      aria-label="Weekly live Q&A announcement"
      className="fixed top-0 left-0 right-0 z-50 bg-[#E98C28] text-white text-sm py-2.5 px-4 flex items-center justify-center gap-3"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      <span className="flex items-center gap-2 text-center leading-snug">
        <span className="hidden sm:inline font-bold">🎙️ Live Q&amp;A every Thursday —</span>
        <span className="sm:hidden font-bold">Live Q&amp;A every Thursday —</span>
        <span>get your marketing questions answered in real time.</span>
        <a
          href="https://learnwith.seymourdigitalmedia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline underline-offset-2 hover:no-underline whitespace-nowrap"
          aria-label="Join the KnowHow Marketing Lab community for $29 per month"
        >
          Join for $29/mo →
        </a>
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-1 rounded"
        aria-label="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

// FoundingMemberCounter — creates urgency/scarcity for founding member pricing
// Design: Space Grotesk headings, DM Sans body, orange (#E98C28) + teal (#318599) brand palette
// Shows "X founding member spots remaining at $29/mo" with animated counter
// Uses localStorage to persist a slightly-decreasing number over time (simulates real signups)
// Resets to a reasonable number if localStorage is stale (>30 days old)

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'khml_founding_spots';
const STORAGE_TS_KEY = 'khml_founding_spots_ts';
const INITIAL_SPOTS = 47; // Starting number — feels real, not too round
const MIN_SPOTS = 12;     // Floor — never goes below this
const DECAY_RATE = 0.4;   // Average spots "taken" per day

function getSpots(): number {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const storedTs = localStorage.getItem(STORAGE_TS_KEY);

    if (!stored || !storedTs) {
      // First visit — set initial value
      const now = Date.now();
      localStorage.setItem(STORAGE_KEY, String(INITIAL_SPOTS));
      localStorage.setItem(STORAGE_TS_KEY, String(now));
      return INITIAL_SPOTS;
    }

    const spots = parseInt(stored, 10);
    const ts = parseInt(storedTs, 10);
    const daysSince = (Date.now() - ts) / (1000 * 60 * 60 * 24);

    // If stale (>30 days), reset
    if (daysSince > 30) {
      localStorage.setItem(STORAGE_KEY, String(INITIAL_SPOTS));
      localStorage.setItem(STORAGE_TS_KEY, String(Date.now()));
      return INITIAL_SPOTS;
    }

    // Decay by DECAY_RATE per day, floored at MIN_SPOTS
    const decayed = Math.max(MIN_SPOTS, Math.round(spots - daysSince * DECAY_RATE));

    // Update stored value if it changed
    if (decayed !== spots) {
      localStorage.setItem(STORAGE_KEY, String(decayed));
    }

    return decayed;
  } catch {
    return INITIAL_SPOTS;
  }
}

interface FoundingMemberCounterProps {
  variant?: 'banner' | 'inline' | 'card';
  className?: string;
}

export default function FoundingMemberCounter({
  variant = 'inline',
  className = '',
}: FoundingMemberCounterProps) {
  const [spots, setSpots] = useState<number | null>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const s = getSpots();
    setSpots(s);

    // Pulse animation every 8 seconds to draw attention
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (spots === null) return null;

  // ── Banner variant (full-width, used at top of Pricing/Community) ──
  if (variant === 'banner') {
    return (
      <div
        className={`w-full bg-[#0f2236] border border-[#E98C28]/30 rounded-xl px-5 py-3.5 flex items-center justify-between gap-4 ${className}`}
        role="status"
        aria-live="polite"
        aria-label={`${spots} founding member spots remaining`}
      >
        <div className="flex items-center gap-3">
          {/* Animated dot */}
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E98C28] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E98C28]" />
          </span>
          <p className="text-sm text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span
              className={`font-extrabold text-[#E98C28] text-base transition-transform duration-300 inline-block ${pulse ? 'scale-125' : 'scale-100'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {spots}
            </span>{' '}
            founding member spots remaining at{' '}
            <span className="font-bold text-white">$29/mo</span>
            {' '}— price increases when we hit capacity.
          </p>
        </div>
        <span className="text-xs text-[#E98C28] font-semibold whitespace-nowrap hidden sm:block" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Lock in your rate →
        </span>
      </div>
    );
  }

  // ── Card variant (standalone card, used in sidebars or CTA blocks) ──
  if (variant === 'card') {
    return (
      <div
        className={`bg-[#E98C28]/10 border border-[#E98C28]/40 rounded-xl px-4 py-3 ${className}`}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E98C28] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E98C28]" />
          </span>
          <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Founding Rate
          </span>
        </div>
        <p className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Only{' '}
          <span
            className={`font-extrabold text-[#E98C28] transition-transform duration-300 inline-block ${pulse ? 'scale-125' : 'scale-100'}`}
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {spots}
          </span>{' '}
          spots left at $29/mo. Price goes up when we hit capacity.
        </p>
      </div>
    );
  }

  // ── Inline variant (default — small text line, used under CTA buttons) ──
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs text-gray-500 ${className}`}
      role="status"
      aria-live="polite"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E98C28] opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E98C28]" />
      </span>
      <span>
        <span
          className={`font-bold text-[#E98C28] transition-transform duration-300 inline-block ${pulse ? 'scale-125' : 'scale-100'}`}
        >
          {spots}
        </span>{' '}
        founding spots left at $29/mo
      </span>
    </span>
  );
}

// KnowHow Marketing Lab – Power Hours Page (/power-hours)
// Design: Space Grotesk headings, DM Sans body, orange (#E98C28) + teal (#318599) brand palette
// Purpose: Free weekly marketing Power Hours held on Zoom — open Q&A on Google Ads, SEO, AI, ChatGPT, LLMs, marketing strategy
// Schedule: Every Tuesday 12–1pm Pacific
// Zoom link: https://us02web.zoom.us/j/6217417145
// NOT recorded — must attend live

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { useSEO } from '@/hooks/useSEO';

const ZOOM_URL = 'https://us02web.zoom.us/j/6217417145';
const FB_GROUP_URL = 'https://www.facebook.com/groups/businessmarketingmixer';
const LAB_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home';

// ─────────────────────────────────────────────────────────────────────────────
// POWER HOURS CONFIG — update these when skipping or rescheduling a session
// ─────────────────────────────────────────────────────────────────────────────
// GHL_FORM_URL: The GHL registration form. In GHL → Form Settings → Redirect URL
//   set to: https://knowhowmarketinglab.com/thank-you/power-hours
const GHL_FORM_URL = 'https://crm.seymourdigitalmedia.com/widget/form/VpNFCGnnrKnymB81G7bB';

// NEXT_SESSION_OVERRIDE: Leave as null to auto-calculate the next Tuesday.
// Set to an ISO date string (Pacific time) to override — e.g. if skipping a week:
//   const NEXT_SESSION_OVERRIDE = '2025-04-22T12:00:00'; // skipping April 15
const NEXT_SESSION_OVERRIDE: string | null = null;
// ─────────────────────────────────────────────────────────────────────────────

// Upcoming Tuesday sessions — open Q&A, no fixed theme
const upcomingSessions = [
  { date: 'Tuesday, March 11', time: '12–1pm Pacific', theme: 'Open Q&A', topic: 'Bring your questions on Google Ads, SEO, AI, ChatGPT, or marketing strategy. Live help from Pip.', color: '#318599' },
  { date: 'Tuesday, March 18', time: '12–1pm Pacific', theme: 'Open Q&A', topic: 'Get live answers on Google Ads, SEO, LLMs, GA4, or any marketing challenge you are facing.', color: '#E98C28' },
  { date: 'Tuesday, March 25', time: '12–1pm Pacific', theme: 'Open Q&A', topic: 'Bring your toughest marketing question — Google Ads, SEO, AI tools, or planning for the month ahead.', color: '#4F37D8' },
  { date: 'Tuesday, April 1', time: '12–1pm Pacific', theme: 'Open Q&A', topic: 'Start the month with a plan. Get help with Google Ads, SEO, ChatGPT, or AI marketing strategy.', color: '#318599' },
  { date: 'Tuesday, April 8', time: '12–1pm Pacific', theme: 'Open Q&A', topic: 'Live Q&A on Google Ads, SEO, AI, LLMs, GA4, or any marketing challenge you want to work through.', color: '#E98C28' },
  { date: 'Tuesday, April 15', time: '12–1pm Pacific', theme: 'Open Q&A', topic: 'Bring your real marketing problems — Google Ads, SEO, AI tools, or planning your next campaign.', color: '#4F37D8' },
];

const whatToExpect = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Bring your real questions',
    desc: 'No slides, no presentations. Just show up with your actual marketing problems and get live answers from Pip and the group.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Learn from the group',
    desc: 'Other business owners and marketers are in the room with the same challenges. You will learn as much from their questions as your own.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Not recorded — show up live',
    desc: 'Sessions are not recorded. The only way to get the help is to show up. This keeps the conversation honest and the advice specific to you.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'One hour, every Tuesday',
    desc: 'Sessions run 12–1pm Pacific every Tuesday. Short enough to fit in your week, long enough to get real work done.',
  },
];

const themeColors: Record<string, string> = {
  'SEO Fundamentals': '#318599',
  'Google Ads': '#E98C28',
  'AI in Marketing': '#4F37D8',
  'GA4 & Analytics': '#318599',
  'SEO Deep Dive': '#4F37D8',
};

// Returns days/hours/mins/secs until next Tuesday 12pm Pacific
// Respects NEXT_SESSION_OVERRIDE if set
function useNextSessionCountdown() {
  const getCountdown = () => {
    const now = new Date();
    const pacificNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));

    let nextSession: Date;
    if (NEXT_SESSION_OVERRIDE) {
      // Use the override date (treated as Pacific time)
      nextSession = new Date(NEXT_SESSION_OVERRIDE);
    } else {
      const day = pacificNow.getDay(); // 0=Sun, 2=Tue
      const hours = pacificNow.getHours();
      const minutes = pacificNow.getMinutes();
      const seconds = pacificNow.getSeconds();
      let daysUntilTuesday = (2 - day + 7) % 7;
      if (day === 2 && (hours < 12 || (hours === 12 && minutes === 0 && seconds === 0))) daysUntilTuesday = 0;
      if (day === 2 && hours >= 12 && !(hours === 12 && minutes === 0 && seconds === 0)) daysUntilTuesday = 7;
      nextSession = new Date(pacificNow);
      nextSession.setDate(pacificNow.getDate() + daysUntilTuesday);
      nextSession.setHours(12, 0, 0, 0);
    }

    const diffMs = nextSession.getTime() - pacificNow.getTime();
    if (diffMs <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, live: true };

    const totalSecs = Math.floor(diffMs / 1000);
    return {
      days: Math.floor(totalSecs / 86400),
      hours: Math.floor((totalSecs % 86400) / 3600),
      mins: Math.floor((totalSecs % 3600) / 60),
      secs: totalSecs % 60,
      live: false,
    };
  };

  const [countdown, setCountdown] = useState(getCountdown);
  useEffect(() => {
    const id = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);
  return countdown;
}

const powerHoursSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://knowhowmarketinglab.com/power-hours",
      "url": "https://knowhowmarketinglab.com/power-hours",
      "name": "Free Marketing Power Hours – KnowHow Marketing Lab",
      "description": "Free weekly live Q&A on Zoom every Tuesday 12–1pm Pacific. Bring your real questions on Google Ads, SEO, AI, and marketing strategy.",
      "isPartOf": { "@id": "https://knowhowmarketinglab.com/#website" }
    },
    {
      "@type": "Event",
      "@id": "https://knowhowmarketinglab.com/power-hours#event",
      "name": "KnowHow Marketing Power Hours",
      "description": "Free weekly live Q&A session on Zoom. Bring your real questions on Google Ads, SEO, AI tools, GA4, and marketing strategy. Hosted by Pip Seymour of Seymour Digital Media.",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "location": {
        "@type": "VirtualLocation",
        "url": "https://us02web.zoom.us/j/6217417145"
      },
      "organizer": {
        "@type": "Organization",
        "name": "KnowHow Marketing Lab",
        "url": "https://knowhowmarketinglab.com"
      },
      "performer": {
        "@type": "Person",
        "name": "Pip Seymour",
        "jobTitle": "Digital Marketing Strategist",
        "worksFor": { "@type": "Organization", "name": "Seymour Digital Media" }
      },
      "isAccessibleForFree": true,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://knowhowmarketinglab.com/power-hours"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the KnowHow Marketing Power Hours?",
          "acceptedAnswer": { "@type": "Answer", "text": "Power Hours are free weekly live Q&A sessions on Zoom, hosted every Tuesday from 12–1pm Pacific. Pip Seymour answers real questions on Google Ads, SEO, AI tools, GA4, and marketing strategy. Sessions are not recorded — you must attend live." }
        },
        {
          "@type": "Question",
          "name": "How do I join the Power Hours?",
          "acceptedAnswer": { "@type": "Answer", "text": "Register using the form on this page. You will receive a confirmation email with the Zoom link and a Monday reminder before each session." }
        },
        {
          "@type": "Question",
          "name": "Are the Power Hours really free?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Power Hours are 100% free. No credit card required. They are the free, public-facing Q&A sessions run by KnowHow Marketing Lab. For deeper training, The Lab membership is available at $29/month." }
        },
        {
          "@type": "Question",
          "name": "What topics are covered in Power Hours?",
          "acceptedAnswer": { "@type": "Answer", "text": "Power Hours cover Google Ads (campaigns, bidding, Performance Max), SEO (rankings, Search Console, keyword research), AI and ChatGPT tools for marketing, Google Analytics 4 (GA4), and general marketing strategy. There is no fixed agenda — you bring your real questions and get live answers." }
        },
        {
          "@type": "Question",
          "name": "Are Power Hours sessions recorded?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Power Hours sessions are not recorded. This keeps the conversation honest and the advice specific to the people in the room. If you want recorded sessions, The Lab membership includes recorded weekly Q&A every Thursday." }
        }
      ]
    }
  ]
};

export default function PowerHours() {
  const countdown = useNextSessionCountdown();

  useSEO({
    title: 'Free Marketing Power Hours – KnowHow Marketing Lab',
    description: 'Free weekly live Q&A on Zoom every Tuesday 12–1pm Pacific. Bring your real questions on Google Ads, SEO, AI, and marketing strategy. No slides — just live answers.',
    canonical: 'https://knowhowmarketinglab.com/power-hours',
    ogTitle: 'Free Marketing Power Hours – KnowHow Marketing Lab',
    ogDescription: 'Free weekly live sessions every Tuesday 12–1pm PT. SEO, Google Ads, AI — bring your real questions and get live answers.',
    ogType: 'website',
  });

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(powerHoursSchema) }} />
      <AnnouncementBar />
      <Navbar />

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="pt-36 pb-20 bg-white border-b border-gray-100" aria-labelledby="power-hours-hero-heading">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Live countdown timer */}
                {countdown.live ? (
                  <div className="inline-flex items-center gap-2 mb-5 bg-green-50 border border-green-200 rounded-xl px-4 py-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                    <span className="text-sm font-bold text-green-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>We’re LIVE right now — Join on Zoom →</span>
                  </div>
                ) : (
                  <div className="mb-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Next session starts in</p>
                    <div className="flex items-end gap-2" aria-label={`Next session in ${countdown.days} days ${countdown.hours} hours ${countdown.mins} minutes`}>
                      {[
                        { val: countdown.days, label: 'days' },
                        { val: countdown.hours, label: 'hrs' },
                        { val: countdown.mins, label: 'min' },
                        { val: countdown.secs, label: 'sec' },
                      ].map(({ val, label }) => (
                        <div key={label} className="flex flex-col items-center">
                          <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm">
                            <span className="text-2xl font-extrabold text-white tabular-nums" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                              {String(val).padStart(2, '0')}
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{label}</span>
                        </div>
                      ))}
                      <div className="mb-4 ml-1">
                        <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-2.5 py-1 rounded-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
                          Free · Zoom
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <h1
                  id="power-hours-hero-heading"
                  className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Free weekly{' '}
                  <span className="text-[#E98C28]">Marketing Power Hours</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Every Tuesday at 12pm Pacific, Pip Seymour runs a free live Q&amp;A on Zoom. Bring your real questions on <strong>Google Ads, SEO, AI, ChatGPT, LLMs, and marketing strategy</strong>. No slides. No pitch. Just live answers — and a plan for the month ahead.
                </p>
                <div className="flex items-center gap-2 mb-4 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                  <svg className="w-4 h-4 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  <span className="text-xs font-semibold text-amber-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>Sessions are not recorded — you must attend live to get the help</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={GHL_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl px-7 py-4 text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    aria-label="Register for Free Power Hours"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    Save My Spot — It's Free
                  </a>
                  <a
                    href="#schedule"
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 hover:border-[#318599] hover:text-[#318599] font-semibold rounded-xl px-7 py-4 text-base transition-all duration-200"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    See upcoming sessions ↓
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  100% free · No credit card · Register below and join on Zoom every Tuesday
                </p>
              </div>

              {/* Registration CTA Card */}
              <div id="register" className="bg-gray-50 rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-bold text-green-600 uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Free · Every Tuesday · 12pm Pacific</span>
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Register in seconds</h2>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Click below to register. You'll get a confirmation email with the Zoom link and a Monday reminder so you never miss a session.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Google Ads — campaigns, bidding, Performance Max',
                    'SEO — rankings, Search Console, keyword research',
                    'AI & ChatGPT — practical tools for marketing',
                    'GA4 — understanding your data',
                    'Marketing strategy — what to focus on next',
                  ].map(item => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      <span className="w-5 h-5 rounded-full bg-[#318599] flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  href={GHL_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl px-7 py-4 text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Register for Free Power Hours"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  Register Free — Save My Spot
                </a>
                <p className="text-xs text-gray-400 text-center mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>100% free · No credit card · Sessions on Zoom</p>
                <div className="mt-5 pt-5 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-2 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Already registered? Join on Zoom:</p>
                  <a
                    href={ZOOM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-[#318599] hover:text-[#2a7080] transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    aria-label="Join Power Hours on Zoom"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    us02web.zoom.us/j/6217417145
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT TO EXPECT ── */}
        <section className="py-16 bg-gray-50 border-b border-gray-100" aria-labelledby="what-to-expect-heading">
          <div className="container">
            <div className="text-center mb-10">
              <h2 id="what-to-expect-heading" className="text-2xl md:text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                What to expect
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whatToExpect.map(item => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#318599] hover:shadow-md transition-all duration-200 group">
                  <div className="w-11 h-11 rounded-xl bg-[#318599]/10 text-[#318599] flex items-center justify-center mb-4 group-hover:bg-[#318599] group-hover:text-white transition-colors duration-200">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UPCOMING SESSIONS ── */}
        <section id="schedule" className="py-20 bg-white border-b border-gray-100" aria-labelledby="schedule-heading">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Upcoming Sessions</span>
                <h2 id="schedule-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  What's coming up
                </h2>
                <p className="text-gray-500 mt-2 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Every Tuesday · 12–1pm Pacific · Free on Zoom
                </p>
              </div>
              <div className="space-y-3">
                {upcomingSessions.map((session, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-gray-200 transition-colors">
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-xs text-center leading-tight"
                      style={{ backgroundColor: themeColors[session.theme] || '#318599', fontFamily: 'Space Grotesk, sans-serif' }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: themeColors[session.theme] || '#318599', fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {session.theme}
                        </span>
                        <span className="text-xs text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>{session.date} · {session.time}</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{session.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://crm.seymourdigitalmedia.com/widget/form/VpNFCGnnrKnymB81G7bB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl px-8 py-4 text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Register for Free Power Hours"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  Register Free — Save My Spot
                </a>
                <a
                  href={ZOOM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#318599] text-[#318599] hover:bg-[#318599] hover:text-white font-semibold rounded-xl px-8 py-4 text-base transition-all duration-200"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Join Power Hours on Zoom"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  Already registered? Join on Zoom
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FREE → PAID BRIDGE ── */}
        <section className="py-20 bg-gray-950 relative overflow-hidden" aria-labelledby="upgrade-bridge-heading">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #E98C28 0%, transparent 50%)' }} aria-hidden="true" />
          <div className="container relative">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block text-xs font-bold text-[#E98C28] uppercase tracking-widest bg-[#E98C28]/10 px-4 py-1.5 rounded-full mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Want to go deeper?
              </span>
              <h2 id="upgrade-bridge-heading" className="text-3xl md:text-4xl font-extrabold text-white mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Power Hours are the start.<br />
                <span className="text-[#E98C28]">The Lab is where you level up.</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                The free Power Hours give you a taste of what is possible. The Lab gives you the full system — weekly Thursday Q&amp;A, advanced courses, fillable worksheets, AI training, and a private community — for $29/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/community"
                  className="inline-flex items-center justify-center gap-2 bg-[#E98C28] hover:bg-[#d4791f] text-white font-bold rounded-xl px-8 py-4 text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Learn more about The KnowHow Lab paid community"
                >
                  See what's inside The Lab →
                </Link>
                <a
                  href={LAB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-white font-semibold rounded-xl px-8 py-4 text-base transition-all duration-200"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Join The KnowHow Lab community for $29 per month"
                >
                  Join The Lab – $29/mo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-gray-50 border-t border-gray-100" aria-labelledby="power-hours-faq-heading">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 id="power-hours-faq-heading" className="text-3xl font-extrabold text-gray-900 mb-10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Frequently asked questions</h2>
              <div className="space-y-6">
                {[
                  { q: 'What are the KnowHow Marketing Power Hours?', a: 'Power Hours are free weekly live Q&A sessions on Zoom, hosted every Tuesday from 12–1pm Pacific. Pip Seymour answers real questions on Google Ads, SEO, AI tools, GA4, and marketing strategy. There is no fixed agenda — you bring your real questions and get live answers.' },
                  { q: 'How do I join?', a: 'Click the Register Free button on this page. You will receive a confirmation email with the Zoom link and a Monday reminder before each session.' },
                  { q: 'Are the Power Hours really free?', a: 'Yes — 100% free. No credit card required. Power Hours are the free, public-facing Q&A sessions run by KnowHow Marketing Lab. For deeper training, The Lab membership is available at $29/month.' },
                  { q: 'What topics are covered?', a: 'Google Ads (campaigns, bidding, Performance Max), SEO (rankings, Search Console, keyword research), AI and ChatGPT tools for marketing, Google Analytics 4 (GA4), and general marketing strategy. You bring the question — Pip brings the answer.' },
                  { q: 'Are sessions recorded?', a: 'No. Power Hours sessions are not recorded. This keeps the conversation honest and the advice specific to the people in the room. If you want recorded sessions, The Lab membership includes recorded weekly Q&A every Thursday.' },
                ].map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 pb-6">
                    <h3 className="text-base font-bold text-gray-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{faq.q}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{faq.a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <a
                  href={GHL_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl px-8 py-4 text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Register Free — Save My Spot
                </a>
                <p className="text-xs text-gray-400 mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>100% free · No credit card · Every Tuesday 12pm Pacific</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Strip — The Lab primary, Facebook group secondary */}
        <section className="py-16 bg-[#1a3a4a]" aria-labelledby="power-hours-upgrade-heading">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <p className="text-xs font-bold text-[#E98C28] uppercase tracking-widest mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Want more than free Q&amp;A?</p>
                <h2 id="power-hours-upgrade-heading" className="text-2xl sm:text-3xl font-extrabold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Go deeper with The Lab</h2>
                <p className="text-gray-300 max-w-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>Power Hours are free and open to everyone. The Lab adds weekly recorded Q&amp;A every Thursday, full Google Ads &amp; SEO courses, AI training, fillable worksheets, and a private community. All for $29/mo.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
                <Link
                  href="/community"
                  className="inline-flex items-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl py-3.5 px-7 text-sm transition-all duration-200 shadow-md whitespace-nowrap pulse-cta"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Join The Lab for $29 per month"
                >
                  Join The Lab — $29/mo →
                </Link>
                <a
                  href="https://www.facebook.com/groups/businessmarketingmixer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl py-3.5 px-6 text-sm transition-all duration-200 whitespace-nowrap border border-white/20"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Join the free Business Marketing Mixer Facebook group"
                >
                  Free Facebook Group →
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* ── STICKY MOBILE REGISTRATION BAR ── */}
      {/* Visible only on mobile (md:hidden). Fixed to bottom of screen. Appears after scrolling past hero. */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] px-4 py-3 flex items-center gap-3"
        role="complementary"
        aria-label="Register for Power Hours"
      >
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Free Marketing Power Hours</p>
          <p className="text-xs text-gray-500 leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>Every Tuesday · 12pm Pacific · Zoom</p>
        </div>
        <a
          href={GHL_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-1.5 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl px-5 py-3 text-sm transition-all duration-200 shadow-md active:scale-95"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          aria-label="Register free for Marketing Power Hours on Zoom"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          Register Free
        </a>
      </div>

      {/* Bottom padding spacer on mobile to prevent footer content being hidden behind sticky bar */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </div>
  );
}

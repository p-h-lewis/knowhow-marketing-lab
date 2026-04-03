// KnowHow Marketing Lab - Mastermind Discovery Call Thank You Page
// URL: /mastermind-thank-you
// Design: Brand colors #E98C28 / #318599 / #4F37D8, Space Grotesk headings, DM Sans body
// Typography: Large, readable text throughout — min 18px body, 20px+ for key content
// Features: Add to Calendar widget, real YouTube session embed, FB group + Power Hours CTA

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { useSEO } from '@/hooks/useSEO';

// Real KnowHow session: "Coworking Space | Audit & Strategy Summary" (Jan 1, 2026)
const SESSION_VIDEO_ID = 'QP1LCdRWfpo';

// Add to Calendar links — these open the user's preferred calendar app
function buildCalendarLinks(title: string, description: string, location: string) {
  const now = new Date();
  // Placeholder times — GHL will send the real invite via email
  const start = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000); // 2 days from now as placeholder
  const end = new Date(start.getTime() + 30 * 60 * 1000); // 30 min

  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const google = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&dates=${fmt(start)}/${fmt(end)}`;

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\n');

  const icsBlob = `data:text/calendar;charset=utf8,${encodeURIComponent(ics)}`;

  const outlook = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&startdt=${start.toISOString()}&enddt=${end.toISOString()}`;

  return { google, ics: icsBlob, outlook };
}

function AddToCalendar() {
  const [open, setOpen] = useState(false);
  const links = buildCalendarLinks(
    'Mastermind Discovery Call — KnowHow Marketing Lab',
    'Your 30-minute discovery call with Pip Seymour & Phelan Lewis. Check your email for the exact time and Zoom link.',
    'Zoom (link in your confirmation email)'
  );

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 bg-white border-2 border-[#318599] text-[#318599] font-bold px-7 py-3.5 rounded-full hover:bg-[#318599] hover:text-white transition-all text-base"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Add to your calendar
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-20 min-w-[220px] overflow-hidden">
          <a
            href={links.google}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 text-gray-800 text-base font-medium transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            onClick={() => setOpen(false)}
          >
            <span className="text-xl">📅</span> Google Calendar
          </a>
          <a
            href={links.ics}
            download="mastermind-discovery-call.ics"
            className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 text-gray-800 text-base font-medium transition-colors border-t border-gray-100"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            onClick={() => setOpen(false)}
          >
            <span className="text-xl">🍎</span> Apple Calendar
          </a>
          <a
            href={links.outlook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 text-gray-800 text-base font-medium transition-colors border-t border-gray-100"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            onClick={() => setOpen(false)}
          >
            <span className="text-xl">📧</span> Outlook
          </a>
        </div>
      )}
    </div>
  );
}

const PREPARE_ITEMS = [
  'Your current monthly marketing budget',
  'Your biggest marketing challenge right now',
  'What you\'ve already tried (ads, SEO, content, etc.)',
  'What a "win" would look like for you in 8 weeks',
];

export default function MastermindThankYou() {
  useSEO({
    title: 'You\'re Booked — Mastermind Discovery Call | KnowHow Marketing Lab',
    description: 'Your Mastermind Discovery Call is confirmed. Here\'s what to do next before your call with Pip Seymour and Phelan Lewis.',
    canonical: 'https://knowhowmarketinglab.com/mastermind-thank-you',
    ogType: 'website',
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content">

        {/* ── HERO CONFIRMATION ── */}
        <section className="pt-20 pb-20 bg-[#1a1a2e] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #E98C28 0%, transparent 50%), radial-gradient(circle at 80% 30%, #318599 0%, transparent 50%)' }}
          />
          <div className="container max-w-3xl relative text-center">
            {/* Checkmark icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#E98C28]/20 border-2 border-[#E98C28]/40 mb-7">
              <svg className="w-12 h-12 text-[#E98C28]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E98C28] animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>You're booked</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Your discovery call<br />
              <span style={{ color: '#E98C28' }}>is confirmed.</span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Pip or Phelan will be in touch shortly to confirm the details. In the meantime, here's how to make the most of your 30 minutes.
            </p>
            {/* Add to Calendar CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AddToCalendar />
              <p className="text-gray-400 text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                A calendar invite is also on its way to your email.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT TO EXPECT + PREPARE ── */}
        <section className="py-20 bg-gray-50 border-b border-gray-100">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: what happens on the call */}
              <div>
                <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#318599] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What to expect</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  What happens on the call
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  This is a genuine conversation, not a sales pitch. We'll spend 30 minutes understanding where you are with your marketing, what you're trying to achieve, and whether the Mastermind is the right fit.
                </p>
                <ul className="space-y-4">
                  {[
                    'We\'ll review your current marketing situation',
                    'You\'ll tell us your biggest challenge and goal',
                    'We\'ll explain exactly what the 8 weeks looks like',
                    'You decide if it\'s right — no pressure either way',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#318599]/10 text-[#318599] text-sm font-bold flex items-center justify-center">✓</span>
                      <span className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: how to prepare */}
              <div className="rounded-2xl border border-[#E98C28]/20 bg-[#E98C28]/5 p-8">
                <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#E98C28] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Come prepared</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Have these ready for the call
                </h2>
                <ul className="space-y-4">
                  {PREPARE_ITEMS.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-[#E98C28]/20 text-[#E98C28] text-sm font-bold flex items-center justify-center">{i + 1}</span>
                      <span className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-base text-gray-500 italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  The more specific you are, the more useful the call will be for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WATCH A REAL SESSION ── */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#318599] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>See it in action</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Watch a real KnowHow session
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                This is exactly the kind of work we do inside the Mastermind — live audits, real websites, real data. No slides, no theory. Just practical marketing you can use immediately.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${SESSION_VIDEO_ID}?rel=0&modestbranding=1`}
                title="KnowHow Marketing Lab — Live Coworking Session: Audit & Strategy Summary"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* ── WHILE YOU WAIT ── */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#318599] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>While you wait</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Make the most of the time before your call
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">

              {/* Card 1: The Lab */}
              <div className="rounded-2xl border border-gray-200 bg-white p-7 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-extrabold" style={{ color: '#E98C28', fontFamily: 'Space Grotesk, sans-serif' }}>01</span>
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Try The Lab for $29/mo</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  The Lab is our weekly live coaching membership. Every Thursday we review real websites and ads live. It's the best way to get a feel for how we work before the Mastermind starts.
                </p>
                <a
                  href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold hover:underline mt-auto"
                  style={{ color: '#E98C28', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Start your 7-day free trial →
                </a>
              </div>

              {/* Card 2: Free FB Group */}
              <div className="rounded-2xl border border-gray-200 bg-white p-7 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-extrabold" style={{ color: '#318599', fontFamily: 'Space Grotesk, sans-serif' }}>02</span>
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Join the free community</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  The Business Marketing Mixer is our free Facebook group for business owners. Ask questions, share wins, and get feedback from Pip, Phelan, and the community.
                </p>
                <a
                  href="https://www.facebook.com/groups/businessmarketingmixer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold hover:underline mt-auto"
                  style={{ color: '#318599', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Join the Facebook group →
                </a>
              </div>

              {/* Card 3: Free Power Hours */}
              <div className="rounded-2xl border border-gray-200 bg-white p-7 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-extrabold" style={{ color: '#4F37D8', fontFamily: 'Space Grotesk, sans-serif' }}>03</span>
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Attend a free Power Hour</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Every Tuesday we run a free 60-minute Power Hour — live marketing Q&A, hot seat audits, and practical takeaways. It's a great way to meet us before your discovery call.
                </p>
                <Link
                  href="/power-hours"
                  className="text-base font-bold hover:underline mt-auto"
                  style={{ color: '#4F37D8', fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  See the next Power Hour →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── MASTERMIND DETAILS CTA ── */}
        <section className="py-20 bg-[#1a1a2e]">
          <div className="container max-w-3xl text-center">
            <span className="inline-block text-sm font-bold tracking-widest uppercase text-[#E98C28] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Before your call</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Read the full Mastermind details
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The more you know about the program before the call, the more useful our conversation will be. The full breakdown — curriculum, format, investment, and who it's for — is all on the Mastermind page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mastermind"
                className="inline-block bg-[#E98C28] text-white font-bold px-10 py-4 rounded-full hover:bg-[#d47d1f] transition-colors text-lg"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Read the Mastermind details →
              </Link>
              <Link
                href="/"
                className="inline-block border border-gray-600 text-gray-300 font-semibold px-10 py-4 rounded-full hover:border-gray-400 hover:text-white transition-colors text-lg"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

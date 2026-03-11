// KnowHow Marketing Lab — Thank You: Power Hours Registration
// Design: Space Grotesk headings, DM Sans body, orange (#E98C28) + teal (#318599)
// Purpose: Post-registration confirmation page for Free Power Hours sign-ups
// Tracking: Fires GTM generate_lead event on mount for GA4 conversion tracking

import { useEffect } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

const ZOOM_URL = 'https://us02web.zoom.us/j/6217417145';
const FB_GROUP_URL = 'https://www.facebook.com/groups/businessmarketingmixer';

// Build the next Tuesday date dynamically — always returns next Tuesday (never today)
function getNextTuesday(): Date {
  const now = new Date();
  const pacificNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
  const day = pacificNow.getDay(); // 0=Sun, 2=Tue
  // Always go to the NEXT Tuesday, never today
  const daysUntilTuesday = day === 2 ? 7 : (2 - day + 7) % 7;
  const next = new Date(pacificNow);
  next.setDate(pacificNow.getDate() + daysUntilTuesday);
  next.setHours(12, 0, 0, 0); // 12pm PT
  return next;
}

function pad(n: number) { return String(n).padStart(2, '0'); }

function toICSDate(d: Date) {
  // Format as UTC: 20pm PT = 8pm UTC (PST) or 7pm UTC (PDT)
  // Use 20:00 UTC as a reasonable approximation for 12pm PT
  const utc = new Date(d);
  utc.setHours(20, 0, 0, 0); // 12pm PT ≈ 20:00 UTC (PST)
  return `${utc.getUTCFullYear()}${pad(utc.getUTCMonth() + 1)}${pad(utc.getUTCDate())}T${pad(utc.getUTCHours())}${pad(utc.getUTCMinutes())}00Z`;
}

function toGCalDate(d: Date) {
  const utc = new Date(d);
  utc.setHours(20, 0, 0, 0);
  const end = new Date(utc);
  end.setHours(21, 0, 0, 0);
  const fmt = (dt: Date) => `${dt.getUTCFullYear()}${pad(dt.getUTCMonth() + 1)}${pad(dt.getUTCDate())}T${pad(dt.getUTCHours())}${pad(dt.getUTCMinutes())}00Z`;
  return `${fmt(utc)}/${fmt(end)}`;
}

function formatDisplayDate(d: Date) {
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

export default function ThankYouPowerHours() {
  const nextTuesday = getNextTuesday();
  const displayDate = formatDisplayDate(nextTuesday);

  const eventTitle = encodeURIComponent('Free Marketing Power Hours – KnowHow Marketing Lab');
  const eventDesc = encodeURIComponent(
    'Join Pip live on Zoom for a free open Q&A on Google Ads, SEO, AI, ChatGPT, LLMs, and marketing strategy. Bring your real questions — no slides, just live answers. NOT recorded — you must attend live. Check your confirmation email for the Zoom link.'
  );
  const eventLocation = encodeURIComponent('https://us02web.zoom.us/j/6217417145');

  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${toGCalDate(nextTuesday)}&details=${eventDesc}&location=${eventLocation}&recur=RRULE:FREQ=WEEKLY;BYDAY=TU`;

  const icsStart = toICSDate(nextTuesday);
  const icsEnd = (() => {
    const e = new Date(nextTuesday);
    e.setHours(21, 0, 0, 0);
    return toICSDate(e);
  })();

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//KnowHow Marketing Lab//Power Hours//EN',
    'BEGIN:VEVENT',
    `DTSTART:${icsStart}`,
    `DTEND:${icsEnd}`,
    'RRULE:FREQ=WEEKLY;BYDAY=TU',
    `SUMMARY:Free Marketing Power Hours – KnowHow Marketing Lab`,
    `DESCRIPTION:Join Pip live on Zoom for a free open Q&A on Google Ads\\, SEO\\, AI\\, ChatGPT\\, LLMs\\, and marketing strategy. NOT recorded — you must attend live. Check your confirmation email for the Zoom link.`,
    `LOCATION:https://us02web.zoom.us/j/6217417145`,
    `URL:https://us02web.zoom.us/j/6217417145`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const icsDataUrl = `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;

  const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${eventTitle}&startdt=${new Date(nextTuesday).toISOString()}&enddt=${new Date(new Date(nextTuesday).setHours(13)).toISOString()}&body=${eventDesc}&location=${eventLocation}`;

  useEffect(() => {
    document.title = "You're Registered! – Free Power Hours | KnowHow Marketing Lab";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'You have registered for Free Marketing Power Hours. Add the session to your calendar and join the Facebook group to get started.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/thank-you/power-hours');

    // Inject WebPage schema for this confirmation page
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "You're Registered – Free Power Hours | KnowHow Marketing Lab",
      "description": "Registration confirmation page for Free Marketing Power Hours. Weekly live Q&A on Google Ads, SEO, AI, and GA4 every Tuesday 12–1pm PT.",
      "url": "https://knowhowmarketinglab.com/thank-you/power-hours",
      "isPartOf": { "@type": "WebSite", "name": "KnowHow Marketing Lab", "url": "https://knowhowmarketinglab.com" }
    });
    document.head.appendChild(schema);

    // GTM dataLayer push — fires generate_lead conversion event
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'generate_lead',
        form_name: 'power_hours',
        method: 'ghl_form',
        page_path: '/thank-you/power-hours',
      });
    }

    return () => {
      document.title = 'KnowHow Marketing Lab – Free SEO & Google Ads Training';
      if (schema.parentNode) schema.parentNode.removeChild(schema);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />

      <main style={{ paddingTop: '6.5rem' }}>
        {/* ── HERO CONFIRMATION ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-2xl mx-auto text-center px-4">

            {/* Success icon */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #318599, #2a7080)' }}
              aria-hidden="true"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Success checkmark">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              You're registered
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              See you Tuesday at 12pm Pacific!
            </h1>

            <p className="text-lg text-gray-600 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Your spot is saved for <strong className="text-gray-900">{displayDate}</strong>.
            </p>
            <p className="text-base text-gray-500 mb-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Check your inbox — a confirmation email with the session details is on its way. In the meantime, do these two things so you're ready to go.
            </p>

            {/* ── TWO ACTION CARDS ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12 text-left">

              {/* Step 1: Add to Calendar */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E98C28] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Step 1</p>
                    <h2 className="text-base font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Add to your calendar</h2>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Save the recurring Tuesday session so you never miss it. It repeats every week.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={googleCalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 bg-white border border-gray-200 hover:border-[#E98C28] hover:bg-amber-50 text-gray-700 hover:text-[#E98C28] font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-200"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    aria-label="Add Free Power Hours to Google Calendar"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19.5 3h-2V1.5a.5.5 0 00-1 0V3h-9V1.5a.5.5 0 00-1 0V3h-2A2.5 2.5 0 002 5.5v14A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5v-14A2.5 2.5 0 0019.5 3zM4.5 4h2v1.5a.5.5 0 001 0V4h9v1.5a.5.5 0 001 0V4h2A1.5 1.5 0 0121 5.5V8H3V5.5A1.5 1.5 0 014.5 4zM19.5 21h-15A1.5 1.5 0 013 19.5V9h18v10.5A1.5 1.5 0 0119.5 21z"/>
                    </svg>
                    Google Calendar
                  </a>
                  <a
                    href={icsDataUrl}
                    download="power-hours-knowhow.ics"
                    className="flex items-center gap-2.5 bg-white border border-gray-200 hover:border-[#318599] hover:bg-teal-50 text-gray-700 hover:text-[#318599] font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-200"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    aria-label="Download .ics file to add Power Hours to Apple Calendar or Outlook"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Apple Calendar / Outlook (.ics)
                  </a>
                </div>
              </div>

              {/* Step 2: Save Zoom Link */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#318599] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Step 2</p>
                    <h2 className="text-base font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Save your Zoom link</h2>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Power Hours runs live on Zoom every Tuesday at 12pm Pacific. Sessions are <strong className="text-gray-700">not recorded</strong> — you must attend live.
                </p>
                <div className="bg-[#318599]/10 border border-[#318599]/20 rounded-xl p-4 text-sm text-[#1a3a4a]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <strong style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Check your confirmation email</strong> — the Zoom link is included there. Can't find it? Check your spam folder or re-register above.
                </div>
              </div>
            </div>

            {/* ── WHAT HAPPENS NEXT ── */}
            <div className="mb-10 text-left">
              <h2 className="text-xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                What happens next
              </h2>
              <ol className="space-y-4 list-none p-0 m-0" role="list">
                {[
                  {
                    step: '1',
                    title: 'Check your inbox',
                    desc: 'A confirmation email is on its way with the Zoom link, session details, and a reminder to add it to your calendar.',
                    color: '#E98C28',
                  },
                  {
                    step: '2',
                    title: 'Save your Zoom link',
                    desc: 'Your confirmation email includes the Zoom link. Bookmark it or add it to your calendar so you\'re ready to join on Tuesday at 12pm Pacific.',
                    color: '#318599',
                  },
                  {
                    step: '3',
                    title: 'You\'ll get a reminder on Monday',
                    desc: 'We\'ll send you a reminder email on Monday evening so you don\'t forget. No spam — just the one reminder.',
                    color: '#4F37D8',
                  },
                  {
                    step: '4',
                    title: 'Show up Tuesday at 12pm Pacific',
                    desc: 'Bring your biggest marketing question — SEO, Google Ads, GA4, or AI. Pip will be live on Zoom ready to help. No slides, no agenda, just real answers.',
                    color: '#E98C28',
                  },
                ].map(item => (
                  <li key={item.step} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-sm mt-0.5"
                      style={{ background: item.color, fontFamily: 'Space Grotesk, sans-serif' }}
                      aria-hidden="true"
                    >
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* ── WHAT TO BRING ── */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-10 text-left">
              <h2 className="text-base font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                What to bring on Tuesday
              </h2>
              <ul className="space-y-2" role="list">
                {[
                  'Your biggest marketing question right now — SEO, Google Ads, GA4, or AI',
                  'Your website URL if you want live feedback on your traffic or ads',
                  'A notepad — you will leave with a clear next step',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    <span className="w-5 h-5 rounded-full bg-[#E98C28] flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── UPGRADE NUDGE ── */}
            <div className="border border-gray-100 rounded-2xl p-6 text-left">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Want more?</p>
              <h2 className="text-lg font-extrabold text-gray-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Go deeper in The Lab
              </h2>
              <p className="text-sm text-gray-500 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Power Hours gives you one hour a week. The Lab gives you the full Google Ads course, Thursday live Q&amp;A, AI marketing training, and a private community — for $29/mo.
              </p>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#E98C28] hover:text-[#d4791f] transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="Learn more about The Lab community membership"
              >
                See what's inside The Lab →
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// KnowHow Marketing Lab — Thank You: Power Hours Registration
// Design: Space Grotesk headings, DM Sans body, orange (#E98C28) + teal (#318599)
// Purpose: Post-registration confirmation page for Free Power Hours sign-ups
// Tracking: Fires GTM generate_lead event on mount for GA4 conversion tracking

import { useEffect } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

const FB_GROUP_URL = 'https://www.facebook.com/groups/businessmarketingmixer';

// Build the next Tuesday date dynamically
function getNextTuesday(): Date {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 2=Tue
  const daysUntilTuesday = (2 - day + 7) % 7 || 7;
  const next = new Date(now);
  next.setDate(now.getDate() + daysUntilTuesday);
  next.setHours(12, 0, 0, 0); // 12pm local — will be adjusted for PT in calendar links
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
    'Join Pip live in the Business Marketing Mixer Facebook group for a free open Q&A session on SEO, Google Ads, and AI marketing. Bring your real questions — no slides, just live answers.\n\nJoin here: https://www.facebook.com/groups/businessmarketingmixer'
  );
  const eventLocation = encodeURIComponent('https://www.facebook.com/groups/businessmarketingmixer');

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
    `DESCRIPTION:Join Pip live in the Business Marketing Mixer Facebook group for a free open Q&A on SEO\\, Google Ads\\, and AI marketing. Join here: https://www.facebook.com/groups/businessmarketingmixer`,
    `LOCATION:https://www.facebook.com/groups/businessmarketingmixer`,
    `URL:https://www.facebook.com/groups/businessmarketingmixer`,
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

              {/* Step 2: Join Facebook Group */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#318599] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Step 2</p>
                    <h2 className="text-base font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Join the Facebook group</h2>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Power Hours runs live inside the Business Marketing Mixer group. Join now so you're ready when Tuesday arrives.
                </p>
                <a
                  href={FB_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-white font-bold text-sm px-4 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                  style={{ background: 'linear-gradient(135deg, #318599, #2a7080)', fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Join the Business Marketing Mixer Facebook group"
                >
                  Join Business Marketing Mixer →
                </a>
              </div>
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

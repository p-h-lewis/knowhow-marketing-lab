// KnowHow Marketing Lab – Power Hours Page (/power-hours)
// Design: Space Grotesk headings, DM Sans body, orange (#E98C28) + teal (#318599) brand palette
// Purpose: Free weekly marketing Power Hours held in the Business Marketing Mixer Facebook group
// Schedule: Every Tuesday 12–1pm Pacific
// CTA: Join the free Facebook group → https://www.facebook.com/groups/businessmarketingmixer

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

const FB_GROUP_URL = 'https://www.facebook.com/groups/businessmarketingmixer';
const LAB_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home';

// Upcoming Tuesday sessions — themes rotate weekly
const upcomingSessions = [
  { date: 'Tuesday, March 11', time: '12–1pm Pacific', theme: 'SEO Fundamentals', topic: 'How to read your Google Search Console data and find quick wins', color: '#318599' },
  { date: 'Tuesday, March 18', time: '12–1pm Pacific', theme: 'Google Ads', topic: 'Campaign structure basics — what you should set up before spending a dollar', color: '#E98C28' },
  { date: 'Tuesday, March 25', time: '12–1pm Pacific', theme: 'AI in Marketing', topic: 'Using ChatGPT to write better ad copy and meta descriptions', color: '#4F37D8' },
  { date: 'Tuesday, April 1', time: '12–1pm Pacific', theme: 'GA4 & Analytics', topic: 'Understanding your traffic sources and what the numbers actually mean', color: '#318599' },
  { date: 'Tuesday, April 8', time: '12–1pm Pacific', theme: 'Google Ads', topic: 'Bidding strategies explained — when to use manual vs smart bidding', color: '#E98C28' },
  { date: 'Tuesday, April 15', time: '12–1pm Pacific', theme: 'SEO Deep Dive', topic: 'Keyword clusters and how to build content that ranks', color: '#4F37D8' },
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
    title: 'Weekly themed topics',
    desc: 'Each session has a theme — SEO, Google Ads, AI, or GA4 — so you can plan ahead and come prepared with topic-specific questions.',
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

export default function PowerHours() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Free Marketing Power Hours – KnowHow Marketing Lab';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Join our free weekly Marketing Power Hours every Tuesday 12–1pm Pacific. Bring your real questions on SEO, Google Ads, and AI. No slides — just live answers.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/power-hours');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Free Marketing Power Hours – KnowHow Marketing Lab');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'Free weekly live sessions every Tuesday 12–1pm PT. SEO, Google Ads, AI — bring your real questions and get live answers.');
    return () => {
      document.title = 'KnowHow Marketing Lab – Free SEO & Google Ads Training';
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to email provider (Mailchimp, GHL, etc.)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />

      <main id="main-content">

        {/* ── HERO ── */}
        <section className="pt-36 pb-20 bg-white border-b border-gray-100" aria-labelledby="power-hours-hero-heading">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-bold text-green-600 uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Free · Every Tuesday · 12–1pm Pacific
                  </span>
                </div>
                <h1
                  id="power-hours-hero-heading"
                  className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Free weekly{' '}
                  <span className="text-[#E98C28]">Marketing Power Hours</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Every Tuesday at 12pm Pacific, Pip Seymour opens up a live Q&amp;A session in the free <strong>Business Marketing Mixer</strong> Facebook group. Bring your real questions on SEO, Google Ads, and AI marketing. No slides. No pitch. Just live answers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={FB_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1565d8] text-white font-bold rounded-xl px-7 py-4 text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    aria-label="Join the free Business Marketing Mixer Facebook group"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Join the Free Group
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
                  100% free · No credit card · Just join the Facebook group and show up
                </p>
              </div>

              {/* Email capture card */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#E98C28] flex items-center justify-center mb-5" aria-hidden="true">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Get the weekly session reminder
                </h2>
                <p className="text-sm text-gray-500 mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  We'll email you the topic and link before each Tuesday session so you never miss it.
                </p>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                    <svg className="w-8 h-8 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-bold text-green-800 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>You're on the list!</p>
                    <p className="text-green-600 text-xs mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Check your inbox for the next session details.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3" aria-label="Sign up for Power Hours email reminders">
                    <div>
                      <label htmlFor="ph-name" className="block text-xs font-semibold text-gray-700 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>First name</label>
                      <input
                        id="ph-name"
                        type="text"
                        required
                        placeholder="Your first name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#318599] focus:border-transparent"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="ph-email" className="block text-xs font-semibold text-gray-700 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Email address</label>
                      <input
                        id="ph-email"
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="you@yourcompany.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#318599] focus:border-transparent"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                        aria-required="true"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#E98C28] hover:bg-[#d4791f] text-white font-bold rounded-xl px-6 py-3.5 text-sm transition-all duration-200 shadow-sm hover:shadow-md"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Send me the reminders →
                    </button>
                    <p className="text-xs text-gray-400 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                )}
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
                  Every Tuesday · 12–1pm Pacific · Free in the Facebook group
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
              <div className="text-center mt-8">
                <a
                  href={FB_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1565d8] text-white font-bold rounded-xl px-8 py-4 text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-label="Join the free Business Marketing Mixer Facebook group to attend Power Hours"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Join Free – Business Marketing Mixer
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

      </main>

      <Footer />
    </div>
  );
}

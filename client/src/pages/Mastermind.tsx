// KnowHow Marketing Lab, AI Marketing Accelerator Mastermind Page (/mastermind)
// Design: Brand colors #E98C28 (amber) | #318599 (teal) | #4F37D8 (indigo)
// Fonts: Space Grotesk (headings) | DM Sans (body)
// Purpose: Sales page for the 8-seat, 8-week, $2,000/seat AI Marketing Accelerator Mastermind
// CTA: Book a discovery call (GHL calendar, placeholder until calendar is set up)
// Urgency: Only 8 spots, cohort starts May 12 2026

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { useSEO } from '@/hooks/useSEO';

const DISCOVERY_CALL_URL = 'https://crm.seymourdigitalmedia.com/widget/booking/6AuyeLl8HIzgz285Vfca';
const LAB_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce';

const COHORT_START = 'May 12, 2026';
const TOTAL_SEATS = 8;
const SEATS_REMAINING = 5; // Update weekly

const curriculum = [
  {
    week: 'Week 1',
    title: 'Foundation & Audit',
    topics: ['GA4 setup and data audit', 'Google Search Console baseline', 'Identifying your biggest quick wins'],
    color: '#318599',
  },
  {
    week: 'Week 2',
    title: 'AI-Powered SEO',
    topics: ['ChatGPT + Claude for content strategy', 'Keyword clustering with AI', 'On-page optimisation framework'],
    color: '#E98C28',
  },
  {
    week: 'Week 3',
    title: 'Google Ads Architecture',
    topics: ['Campaign structure for your business', 'Audience and keyword strategy', 'Conversion tracking setup'],
    color: '#4F37D8',
  },
  {
    week: 'Week 4',
    title: 'Bidding & Budget',
    topics: ['Smart Bidding vs Manual, when to use each', 'Budget allocation across campaigns', 'Quality Score and Ad Rank'],
    color: '#318599',
  },
  {
    week: 'Week 5',
    title: 'Measurement & Reporting',
    topics: ['GTM implementation', 'GA4 custom reports and dashboards', 'Proving ROI to stakeholders'],
    color: '#E98C28',
  },
  {
    week: 'Week 6',
    title: 'AI Agents & Automation',
    topics: ['Building custom AI agents for your workflow', 'Automating reporting with Google Ads Scripts', 'GBP optimisation with AI'],
    color: '#4F37D8',
  },
  {
    week: 'Week 7',
    title: 'Advanced Implementation',
    topics: ['Generative Engine Optimisation (GEO)', 'LLM visibility and citation strategy', 'Advanced audience segmentation'],
    color: '#318599',
  },
  {
    week: 'Week 8',
    title: 'Your 90-Day Plan',
    topics: ['Build your personal marketing roadmap', 'Accountability structure post-Mastermind', 'Alumni community access and next steps'],
    color: '#E98C28',
  },
];

const included = [
  { icon: '🎯', title: '8 live 90-min group sessions', desc: 'Every week for 8 weeks, small group, high-touch. Your real accounts reviewed live.' },
  { icon: '💬', title: 'Private async support', desc: 'Ask questions between sessions in the private GHL community. Get answers within 24 hours.' },
  { icon: '📊', title: 'Live account reviews', desc: 'Bring your actual GA4, GSC, and Google Ads data. We work on your specific situation, not hypotheticals.' },
  { icon: '🤖', title: 'AI tools and frameworks', desc: 'Every session includes hands-on AI implementation, ChatGPT, Claude, Manus, and custom agents.' },
  { icon: '📚', title: 'All course materials', desc: 'Full access to the KnowHow Marketing Lab course library for the duration of the programme.' },
  { icon: '🏆', title: 'Lifetime alumni access', desc: 'Stay in the alumni community after the cohort ends. Network, share wins, and get ongoing support.' },
];

const faqs = [
  {
    q: 'Who is this Mastermind for?',
    a: 'It is designed for marketing managers, business owners, and consultants who are already doing digital marketing but want to move faster and get better results. You should have at least one active Google Ads campaign or website you are trying to grow organically. This is not a beginner course, it is an implementation programme.',
  },
  {
    q: 'What is the difference between the Mastermind and The Lab membership?',
    a: 'The Lab ($29/month) is where you learn, weekly live Q&A, course content, and community. The Mastermind ($2,000) is where you implement. It is a small-group, 8-week intensive where we work directly on your accounts and campaigns. The Mastermind is the fast track; The Lab is the ongoing support structure.',
  },
  {
    q: 'What happens after the 8 weeks?',
    a: 'You keep lifetime access to the alumni community. Many Mastermind graduates transition into The Lab membership for ongoing weekly coaching. You will also have a personal marketing roadmap built in Week 8 to keep you on track.',
  },
  {
    q: 'How many people are in the group?',
    a: 'Maximum 8 seats per cohort. This is intentional, small enough that every session can include a live review of your actual accounts, not just generic advice.',
  },
  {
    q: 'What is the discovery call?',
    a: 'A 15-minute conversation to make sure the Mastermind is the right fit for where you are right now. There is no hard sell. If it is not the right time, we will tell you honestly and point you toward the right next step.',
  },
  {
    q: 'When does the cohort start and what are the session times?',
    a: `The first cohort starts ${COHORT_START}. Sessions run weekly on Wednesdays at 10am Pacific / 1pm Eastern / 6pm UK, running for 90 minutes. All sessions are recorded and available to cohort members within 24 hours.`,
  },
];

export default function Mastermind() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useSEO({
    title: 'AI Marketing Accelerator Mastermind, 8 Seats, 8 Weeks | KnowHow Marketing Lab',
    description: `Small-group intensive for marketers who want real results. 8 seats, 8 weeks, $2,000. Live account reviews, AI tools, Google Ads, SEO, and GA4. Cohort starts ${COHORT_START}.`,
    canonical: 'https://knowhowmarketinglab.com/mastermind',
    ogType: 'website',
    ogImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-mastermind_d6b886b8.png',
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            'name': 'AI Marketing Accelerator Mastermind',
            'description': `A 8-week small-group intensive for marketers. Live account reviews, AI tools, Google Ads, SEO, GA4, and a personal 90-day roadmap. Cohort starts ${COHORT_START}.`,
            'provider': {
              '@type': 'Organization',
              'name': 'KnowHow Marketing Lab',
              'url': 'https://knowhowmarketinglab.com',
            },
            'offers': {
              '@type': 'Offer',
              'price': '2000',
              'priceCurrency': 'USD',
              'availability': 'https://schema.org/LimitedAvailability',
              'validFrom': '2026-04-01',
            },
            'numberOfCredits': 8,
            'educationalCredentialAwarded': 'Certificate of Completion',
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://knowhowmarketinglab.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Mastermind', 'item': 'https://knowhowmarketinglab.com/mastermind' },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqs.map(f => ({
              '@type': 'Question',
              'name': f.q,
              'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
            })),
          }),
        }}
      />

      <Navbar />

      {/* ── STICKY CTA BAR ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        aria-hidden={!showStickyBar}
      >
        <div className="bg-[#1a1a2e] border-t border-white/10 py-3 px-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AI Marketing Accelerator Mastermind</span>
              <span className="text-white/60 text-sm ml-3">Only {SEATS_REMAINING} of {TOTAL_SEATS} seats remaining · Starts {COHORT_START}</span>
            </div>
            <a
              href={DISCOVERY_CALL_URL}
              className="ml-auto bg-[#E98C28] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#d47d20] transition-colors text-sm whitespace-nowrap"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Book Your Discovery Call →
            </a>
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="pt-28 pb-16 bg-[#1a1a2e] relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #E98C28 0%, transparent 50%), radial-gradient(circle at 80% 20%, #318599 0%, transparent 50%), radial-gradient(circle at 60% 80%, #4F37D8 0%, transparent 50%)' }} />
        <div className="container max-w-5xl relative">
          {/* Urgency badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#E98C28]/20 border border-[#E98C28]/40 text-[#E98C28] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E98C28] animate-pulse" />
              {SEATS_REMAINING} of {TOTAL_SEATS} seats remaining · Cohort starts {COHORT_START}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                AI Marketing<br />
                <span style={{ color: '#E98C28' }}>Accelerator</span><br />
                Mastermind
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                A 8-week small-group intensive for marketers who are done watching tutorials and ready to implement. We work on your real accounts, live, every Wednesday, until your campaigns and content are actually performing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={DISCOVERY_CALL_URL}
                  className="inline-block bg-[#E98C28] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d47d20] transition-colors text-base text-center"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Book a Free Discovery Call →
                </a>
                <a
                  href="#curriculum"
                  className="inline-block border border-white/20 text-white/80 font-semibold px-8 py-4 rounded-full hover:border-white/50 hover:text-white transition-colors text-base text-center"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  See the curriculum
                </a>
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '8', label: 'Seats per cohort', color: '#E98C28' },
                  { value: '8', label: 'Weeks of live coaching', color: '#318599' },
                  { value: '$2,000', label: 'One-time investment', color: '#4F37D8' },
                  { value: '90 min', label: 'Per weekly session', color: '#E98C28' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-white/5">
                    <div className="text-2xl md:text-3xl font-extrabold mb-1" style={{ color: stat.color, fontFamily: 'Space Grotesk, sans-serif' }}>{stat.value}</div>
                    <div className="text-white/60 text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Wednesdays · 10-11:30am Pacific · 1-2:30pm Eastern · 6-7:30pm UK
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#318599] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>This is for you if</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>You are already doing marketing, you just want it to work better</h2>
              <ul className="space-y-3">
                {[
                  'You have Google Ads running but are not confident the budget is being spent well',
                  'You know SEO matters but cannot tell if what you are doing is actually moving the needle',
                  'You have heard about AI tools but are not sure how to use them in your real workflow',
                  'You want expert eyes on your actual accounts, not generic advice',
                  'You are a marketing manager, consultant, or business owner with at least one active campaign',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#318599]/10 text-[#318599] text-xs font-bold flex items-center justify-center">✓</span>
                    <span className="text-gray-700 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#E98C28] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>This is NOT for you if</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>You are looking for a beginner course or a done-for-you service</h2>
              <ul className="space-y-3">
                {[
                  'You have never run a Google Ads campaign or published a piece of content',
                  'You want someone else to manage your marketing for you',
                  'You are not willing to share your actual account data in a small group setting',
                  'You cannot commit to 90 minutes per week for 8 weeks',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#E98C28]/10 text-[#E98C28] text-xs font-bold flex items-center justify-center">✗</span>
                    <span className="text-gray-700 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#4F37D8] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What you get</span>
            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Everything included for $2,000</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all bg-white">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-base" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section id="curriculum" className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#E98C28] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8-week programme</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The curriculum</h2>
            <p className="text-gray-600 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>Each session is 90 minutes. The first 30 minutes covers the week's topic. The remaining 60 minutes is live account reviews, your real data, your real questions.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {curriculum.map((week, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: week.color, fontFamily: 'Space Grotesk, sans-serif' }}>{week.week}</span>
                  <h3 className="font-bold text-gray-900 text-base" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{week.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {week.topics.map((topic, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: week.color }} />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE LAB VS MASTERMIND ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#318599] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>How it fits together</span>
            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The Lab vs the Mastermind</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Feature</th>
                  <th className="text-center p-4 font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The Lab<br /><span className="text-[#318599] font-normal text-xs">$29-$49/month</span></th>
                  <th className="text-center p-4 font-bold text-gray-900 bg-[#E98C28]/5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Mastermind<br /><span className="text-[#E98C28] font-normal text-xs">$2,000 one-time</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Weekly live sessions', '✓ Thursday Q&A', '✓ 90-min Wednesday intensive'],
                  ['Group size', 'Open community', 'Max 8 people'],
                  ['Live account reviews', 'Occasional', '✓ Every session'],
                  ['AI tools training', '✓ Course content', '✓ Hands-on implementation'],
                  ['Personal roadmap', ', ', '✓ Built in Week 8'],
                  ['Async support', '✓ Community', '✓ Private channel'],
                  ['Duration', 'Ongoing monthly', '8 weeks intensive'],
                  ['Alumni access', ', ', '✓ Lifetime'],
                ].map(([feature, lab, mm], i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="p-4 text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>{feature}</td>
                    <td className="p-4 text-center text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>{lab}</td>
                    <td className="p-4 text-center font-medium bg-[#E98C28]/5" style={{ color: '#E98C28', fontFamily: 'DM Sans, sans-serif' }}>{mm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Many Mastermind graduates join The Lab afterwards for ongoing weekly coaching.{' '}
            <Link href="/pricing" className="text-[#318599] hover:underline">See The Lab →</Link>
          </p>
        </div>
      </section>

      {/* ── MEET YOUR COACHES ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#4F37D8] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Your coaches</span>
            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Who you will be working with</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Pip Seymour',
                role: 'SEO, Analytics & AI Strategy',
                company: 'Seymour Digital Media',
                bio: 'Pip has spent over a decade helping businesses grow through data-driven SEO and analytics. She specialises in GA4, Google Search Console, and using AI to build content strategies that actually rank. She runs the Thursday Lab sessions and leads the SEO and analytics weeks of the Mastermind.',
                color: '#318599',
                initials: 'PS',
              },
              {
                name: 'Phelan',
                role: 'Google Ads & Paid Search',
                company: 'KnowHow Marketing Lab',
                bio: 'Phelan manages Google Ads accounts across multiple industries and has built a reputation for clear, practical advice on campaign structure, bidding strategy, and conversion tracking. He leads the Google Ads weeks of the Mastermind and reviews participant accounts live every session.',
                color: '#E98C28',
                initials: 'PH',
              },
            ].map((coach, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ backgroundColor: coach.color, fontFamily: 'Space Grotesk, sans-serif' }}>
                    {coach.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{coach.name}</h3>
                    <p className="text-sm font-medium" style={{ color: coach.color, fontFamily: 'DM Sans, sans-serif' }}>{coach.role}</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>{coach.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{coach.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#E98C28] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Common questions</span>
            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-gray-900 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold transition-transform duration-200" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #E98C28 0%, transparent 50%), radial-gradient(circle at 70% 50%, #318599 0%, transparent 50%)' }} />
        <div className="container max-w-3xl text-center relative">
          <span className="inline-flex items-center gap-1.5 bg-[#E98C28]/20 border border-[#E98C28]/40 text-[#E98C28] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E98C28] animate-pulse" />
            {SEATS_REMAINING} spots remaining
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Ready to stop guessing and start getting results?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Book a free 15-minute discovery call. We will talk through where you are, what you are trying to achieve, and whether the Mastermind is the right fit. No pressure, no hard sell.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={DISCOVERY_CALL_URL}
              className="inline-block bg-[#E98C28] text-white font-bold px-10 py-4 rounded-full hover:bg-[#d47d20] transition-colors text-base"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Book Your Free Discovery Call →
            </a>
            <Link
              href="/pricing"
              className="inline-block border border-white/20 text-white/80 font-semibold px-10 py-4 rounded-full hover:border-white/50 hover:text-white transition-colors text-base"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Or join The Lab, $29/mo
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Cohort starts {COHORT_START} · Wednesdays 10-11:30am Pacific · Max 8 seats
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// KnowHow Marketing Lab — About Page
// /about — Full instructor bios, SeymourDigitalMedia connection, schema markup
// Schema: AboutPage, Person, Organization, BreadcrumbList
// Internal links: → /#free-course, /pricing, /#videos, /resources
// External links: → seymourdigitalmedia.com, youtube.com/@knowhowmarketinglab, skillshop.withgoogle.com

import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About KnowHow Marketing Lab — Pip Seymour & Phelan Lewis",
            "description": "KnowHow Marketing Lab was founded by Pip Seymour and Phelan Lewis of Seymour Digital Media. Learn about our data-driven approach to SEO, Google Ads, and AI marketing education.",
            "url": "https://knowhowmarketinglab.com/about",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://knowhowmarketinglab.com/about" }
              ]
            },
            "about": {
              "@type": "Organization",
              "name": "KnowHow Marketing Lab",
              "description": "Free digital marketing education platform for medium-sized businesses. Courses in SEO, Google Ads, GA4, and AI marketing.",
              "url": "https://knowhowmarketinglab.com",
              "sameAs": [
                "https://www.youtube.com/@knowhowmarketinglab",
                "https://learnwith.seymourdigitalmedia.com/",
                "https://seymourdigitalmedia.com/"
              ],
              "founder": [
                {
                  "@type": "Person",
                  "name": "Pip Seymour",
                  "jobTitle": "SEO & Content Strategy Lead",
                  "worksFor": { "@type": "Organization", "name": "Seymour Digital Media", "url": "https://seymourdigitalmedia.com/" },
                  "knowsAbout": ["SEO", "Google Search Console", "GA4", "Generative Engine Optimization", "Content Strategy", "Digital Marketing"]
                },
                {
                  "@type": "Person",
                  "name": "Phelan Lewis",
                  "jobTitle": "Google Ads & Analytics Lead",
                  "worksFor": { "@type": "Organization", "name": "KnowHow Marketing Lab", "url": "https://knowhowmarketinglab.com" },
                  "knowsAbout": ["Google Ads", "Google Tag Manager", "GA4", "AI Marketing Automation", "PPC"]
                }
              ]
            }
          })
        }}
      />

      <AnnouncementBar />
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section className="pt-24 pb-16 bg-gray-50" aria-labelledby="about-page-heading">
          <div className="container max-w-3xl text-center">
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              About Us
            </span>
            <h1
              id="about-page-heading"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              We Teach What We Actually Do
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              KnowHow Marketing Lab was built by two agency veterans who were tired of seeing businesses pay for marketing they did not understand. We believe every medium-sized business deserves access to the same data-driven strategies that enterprise brands use — taught clearly, without jargon, and without a six-figure agency retainer.
            </p>
          </div>
        </section>

        {/* What We Teach / This Not That */}
        <section className="py-16 bg-white" aria-labelledby="what-we-teach">
          <div className="container max-w-4xl">
            <h2
              id="what-we-teach"
              className="text-2xl font-extrabold text-gray-900 text-center mb-10"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              What KnowHow Marketing Lab Is — and Is Not
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#f0faf7] rounded-2xl border border-[#318599]/20 p-6">
                <h3 className="font-extrabold text-[#318599] text-lg mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  ✓ This is what we do
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Data-driven SEO using GA4, GSC, and real analytics',
                    'Google Ads strategy built for ROI, not just clicks',
                    'Content building and Generative Engine Optimization (GEO)',
                    'AI marketing tools: ChatGPT, AI agents, automation',
                    'Google Tag Manager and conversion tracking setup',
                    'Training for medium-sized businesses and marketing teams',
                    'Weekly live Q&A and support sessions every Thursday',
                    'Monthly deep-dive training on a specific topic',
                    'Actionable homework with fillable worksheets',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      <svg className="w-4 h-4 text-[#318599] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <h3 className="font-extrabold text-gray-500 text-lg mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  ✗ This is what we do not do
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Link building — we focus on content building instead',
                    'Social media marketing courses',
                    'Email marketing or CRM training',
                    'Generic "digital marketing" theory',
                    'Paid tools or software you need to buy',
                    'Promises of specific ranking positions',
                    'Training for beginners who want to become freelancers',
                    'Affiliate marketing or e-commerce dropshipping',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Instructors */}
        <section className="py-16 bg-gray-50" aria-labelledby="instructors-heading">
          <div className="container max-w-4xl">
            <h2
              id="instructors-heading"
              className="text-2xl font-extrabold text-gray-900 text-center mb-10"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Meet Your Instructors
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Pip Seymour',
                  role: 'SEO & Content Strategy Lead',
                  color: '#E98C28',
                  initials: 'PS',
                  bio: [
                    'Pip Seymour is the founder of Seymour Digital Media and the lead SEO and content strategist at KnowHow Marketing Lab. With over 20 years of digital marketing agency experience, Pip has helped hundreds of medium-sized businesses improve their Google rankings using data-driven SEO methods.',
                    'Pip specializes in Google Search Console analysis, GA4 reporting, content strategy, and Generative Engine Optimization (GEO) — the practice of optimizing content to be cited by AI systems like ChatGPT and Google AI Overviews.',
                    'Pip\'s approach is always data-first: no guessing, no vanity metrics, no link building. Just clear analysis of what Google is already telling you and a strategy to act on it.',
                  ],
                  expertise: ['SEO Strategy', 'Google Search Console', 'GA4 Analytics', 'GEO / AI SEO', 'Content Strategy', 'Google Business Profile'],
                  company: 'Seymour Digital Media',
                  companyUrl: 'https://seymourdigitalmedia.com/',
                },
                {
                  name: 'Phelan Lewis',
                  role: 'Google Ads & Analytics Lead',
                  color: '#318599',
                  initials: 'PL',
                  bio: [
                    'Phelan Lewis is the Google Ads and marketing analytics lead at KnowHow Marketing Lab. He has managed millions of dollars in Google Ads spend across industries including retail, professional services, healthcare, and manufacturing.',
                    'Phelan\'s expertise covers the full Google Ads ecosystem: Search campaigns, Display, Performance Max, Google Ads Editor, and AI-powered bidding strategies. He also leads the AI marketing and automation training in the VIP Community.',
                    'Phelan believes that Google Ads only works when it is connected to solid analytics. His training always starts with GA4 and conversion tracking before touching a single campaign.',
                  ],
                  expertise: ['Google Ads Strategy', 'Google Ads Editor', 'GA4 & Conversion Tracking', 'Google Tag Manager', 'AI Marketing Automation', 'Performance Max'],
                  company: null,
                  companyUrl: null,
                },
              ].map(instructor => (
                <article
                  key={instructor.name}
                  className="bg-white rounded-2xl border border-gray-100 p-7"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0"
                      style={{ background: instructor.color, fontFamily: 'Space Grotesk, sans-serif' }}
                      aria-hidden="true"
                    >
                      {instructor.initials}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="name">
                        {instructor.name}
                      </h3>
                      <p className="text-sm font-semibold" style={{ color: instructor.color, fontFamily: 'DM Sans, sans-serif' }} itemProp="jobTitle">
                        {instructor.role}
                      </p>
                      {instructor.company && (
                        <a
                          href={instructor.companyUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                          aria-label={`Visit ${instructor.company} website`}
                          itemProp="worksFor"
                        >
                          {instructor.company} ↗
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-5">
                    {instructor.bio.map((para, i) => (
                      <p key={i} className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="description">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Areas of Expertise
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {instructor.expertise.map(skill => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{ background: `${instructor.color}15`, color: instructor.color, fontFamily: 'DM Sans, sans-serif' }}
                          itemProp="knowsAbout"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SeymourDigitalMedia connection */}
        <section className="py-16 bg-white" aria-labelledby="sdm-heading">
          <div className="container max-w-3xl">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 text-center">
              <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Our Agency
              </span>
              <h2
                id="sdm-heading"
                className="text-2xl font-extrabold text-gray-900 mt-2 mb-4"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Powered by Seymour Digital Media
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                KnowHow Marketing Lab is the education arm of{' '}
                <a
                  href="https://seymourdigitalmedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#318599] font-semibold hover:underline"
                  aria-label="Visit Seymour Digital Media — digital marketing agency"
                >
                  Seymour Digital Media
                </a>
                , a full-service digital marketing agency. Everything we teach in our courses and community is based on the same strategies we use for our agency clients. When you learn from KnowHow Marketing Lab, you are learning from practitioners — not theorists.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://seymourdigitalmedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  aria-label="Visit Seymour Digital Media agency website"
                >
                  Visit Seymour Digital Media ↗
                </a>
                <a href="/#free-course" className="btn-primary" aria-label="Start the free SEO course">
                  Start Free Course →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Internal navigation */}
        <section className="py-12 bg-gray-50 border-t border-gray-100" aria-label="Explore KnowHow Marketing Lab">
          <div className="container">
            <h2 className="text-lg font-bold text-gray-900 text-center mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Start Learning Today
            </h2>
            <div className="grid sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: 'Free SEO Course', href: '/#free-course', desc: '8 modules, no credit card' },
                { label: 'Video Library', href: '/#videos', desc: '60+ free lessons' },
                { label: 'Community & Pricing', href: '/pricing', desc: '$29/mo VIP membership' },
                { label: 'Free Resources', href: '/resources', desc: 'Official Google docs' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="bg-white rounded-xl border border-gray-100 p-4 hover:border-[#E98C28] hover:shadow-sm transition-all duration-200 group text-center"
                >
                  <p className="font-bold text-sm text-gray-900 group-hover:text-[#E98C28] transition-colors mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {link.label}
                  </p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>{link.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

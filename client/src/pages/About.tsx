// KnowHow Marketing Lab - About Page
// /about - Full instructor bios, SeymourDigitalMedia connection, schema markup
// Schema: AboutPage, Person, Organization, BreadcrumbList
// Internal links: → /#free-course, /pricing, /#videos, /resources
// External links: → seymourdigitalmedia.com, youtube.com/@knowhowmarketinglab, skillshop.withgoogle.com

import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { useSEO } from "@/hooks/useSEO";

export default function About() {
  useSEO({
    title: "About KnowHow Marketing Lab - Pip Seymour & Phelan Lewis | Seymour Digital Media",
    description: "KnowHow Marketing Lab is built by Pip Seymour and Phelan Lewis of Seymour Digital Media. 20+ years of digital marketing experience, helping medium-sized businesses grow with data-driven SEO and Google Ads.",
    canonical: "https://knowhowmarketinglab.com/about",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About KnowHow Marketing Lab - Pip Seymour & Phelan Lewis",
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
              "name": "Seymour Digital Media",
              "description": "The agency behind KnowHow Marketing Lab. 20+ years of digital marketing experience.",
              "url": "https://seymourdigitalmedia.com",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "79",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                { "@type": "Review", "author": { "@type": "Person", "name": "Rysa Koch" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "They have had a serious impact on our ability to get our therapists all full and further expand our reach within the community." },
                { "@type": "Review", "author": { "@type": "Person", "name": "Robert Trasolini" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "We instantly saw an increase in traffic on all our sites. Their attention to detail has been fantastic." },
                { "@type": "Review", "author": { "@type": "Person", "name": "Jaime Hall" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Pip was absolutely amazing - super knowledgeable and always willing to go the extra mile." },
                { "@type": "Review", "author": { "@type": "Person", "name": "Chloe Dertinger" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Pip and Phelan are incredibly knowledgeable on all things Google Business and Google Search Console." },
                { "@type": "Review", "author": { "@type": "Person", "name": "Jason McCormick" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Our goals have been met, monthly budgets have been on point and we have seen growth in multiple service areas." }
              ],
              "sameAs": [
                "https://www.youtube.com/@knowhowmarketinglab",
                "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login",
                "https://seymourdigitalmedia.com/"
              ],
              "founder": [
                {
                  "@type": "Person",
                  "name": "Pip Seymour",
                  "jobTitle": "SEO & Content Strategy Lead",
                  "worksFor": { "@type": "Organization", "name": "Seymour Digital Media", "url": "https://seymourdigitalmedia.com/" },
                  "knowsAbout": ["SEO", "Google Search Console", "GA4", "Generative Engine Optimisation", "Content Strategy", "Digital Marketing"]
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
              KnowHow Marketing Lab was built by two agency veterans who were tired of seeing businesses pay for marketing they did not understand. We believe every medium-sized business deserves access to the same data-driven strategies that enterprise brands use - taught clearly, without jargon, and without a six-figure agency retainer.
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
              What KnowHow Marketing Lab Is - and Is Not
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#f0faf7] rounded-2xl border border-[#318599]/20 p-6">
                <h3 className="font-extrabold text-[#318599] text-lg mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                   This is what we do
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Data-driven SEO using GA4, GSC, and real analytics',
                    'Google Ads strategy built for ROI, not just clicks',
                    'Content building and Generative Engine Optimisation (GEO)',
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
                   This is what we do not do
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Link building - we focus on content building instead',
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
                  photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/pip-seymour-raw_1df8431d.png',
                  bio: [
                    'Pip Seymour is the founder of Seymour Digital Media and the lead SEO and content strategist at KnowHow Marketing Lab. With over 20 years of digital marketing agency experience, Pip has helped hundreds of medium-sized businesses improve their Google rankings using data-driven SEO methods.',
                    'Pip specialises in Google Search Console analysis, GA4 reporting, content strategy, and Generative Engine Optimisation (GEO) - the practice of optimising content to be cited by AI systems like ChatGPT and Google AI Overviews.',
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
                  photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/phelan-lewis-raw_b1f64211.png',
                  bio: [
                    'Phelan Lewis is the Google Ads and marketing analytics lead at KnowHow Marketing Lab. He has managed millions of dollars in Google Ads spend across industries including retail, professional services, healthcare, and manufacturing.',
                    'Phelan\'s expertise covers the full Google Ads ecosystem: Search campaigns, Display, Performance Max, Google Ads Editor, and AI-powered bidding strategies. He also leads the AI marketing and automation training in The Lab.',
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
                    {(instructor as any).photo ? (
                      <img
                        src={(instructor as any).photo}
                        alt={`${instructor.name}, ${instructor.role} at KnowHow Marketing Lab`}
                        className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 shadow-sm"
                        style={{ borderColor: instructor.color }}
                        itemProp="image"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0"
                        style={{ background: instructor.color, fontFamily: 'Space Grotesk, sans-serif' }}
                        aria-hidden="true"
                      >
                        {instructor.initials}
                      </div>
                    )}
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
                  aria-label="Visit Seymour Digital Media - digital marketing agency"
                >
                  Seymour Digital Media
                </a>
                , a full-service digital marketing agency. Everything we teach in our courses and community is based on the same strategies we use for our agency clients. When you learn from KnowHow Marketing Lab, you are learning from practitioners - not theorists.
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
                <a href="/#free-course" className="btn-primary" aria-label="Start the AI + SEO course">
                  Start AI + SEO Course →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Internal navigation */}
        {/* Reviews from Seymour Digital Media clients */}
        <section className="py-16 bg-[#0f2236]" aria-labelledby="reviews-heading">
          <div className="container max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What Clients Say</span>
              <h2 id="reviews-heading" className="text-3xl font-extrabold text-white mt-2 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                5.0 Stars &middot; 79 Google Reviews
              </h2>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Reviews of <a href="https://seymourdigitalmedia.com" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Seymour Digital Media</a> &mdash; the agency behind KnowHow Marketing Lab
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: 'Rysa Koch', role: 'Mental Health Group Practice, Chicago', review: 'They have had a serious impact on our ability to get our therapists all full and further expand our reach within the community. Highly recommend.' },
                { name: 'Robert Trasolini', role: 'Business Owner', review: 'We instantly saw an increase in traffic on all our sites. Their attention to detail has been fantastic. I could not recommend them more highly.' },
                { name: 'Jaime Hall', role: 'Client', review: 'Pip was absolutely amazing &mdash; super knowledgeable and always willing to go the extra mile. Exactly what we needed.' },
                { name: 'Chloe Dertinger', role: 'Client', review: 'Pip and Phelan are incredibly knowledgeable on all things Google Business and Google Search Console. They explain everything clearly and get results.' },
                { name: 'Jason McCormick', role: 'Coastal Power Vacuum', review: 'Our goals have been met, monthly budgets have been on point and we have seen growth in multiple service areas. Great team to work with.' },
              ].map((r, i) => (
                <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-6 flex flex-col gap-3">
                  <div className="flex gap-0.5" aria-label="5 stars">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-[#E98C28]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed flex-1" style={{ fontFamily: 'DM Sans, sans-serif' }} dangerouslySetInnerHTML={{ __html: '&ldquo;' + r.review + '&rdquo;' }} />
                  <div>
                    <p className="font-bold text-white text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{r.name}</p>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>{r.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-xs mt-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <a href="https://www.google.com/maps/place/Seymour+Digital+Media" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">See all 79 reviews on Google &rarr;</a>
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-t border-gray-100" aria-label="Explore KnowHow Marketing Lab">
          <div className="container">
            <h2 className="text-lg font-bold text-gray-900 text-center mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Start Learning Today
            </h2>
            <div className="grid sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: 'AI + SEO Course', href: '/#free-course', desc: '5 modules, no credit card' },
                { label: 'Video Library', href: '/#videos', desc: '60+ free lessons' },
                { label: 'The Lab', href: '/pricing', desc: '$29/mo membership' },
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

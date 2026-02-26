// KnowHow Marketing Lab — Free SEO Course Section
// Drives conversion to GoHighLevel course platform

const modules = [
  { num: '01', title: 'Search & SERPs Fundamentals', desc: 'Understand how Google works, what SERPs are, and why SEO matters for your business.', tag: 'SEO Basics' },
  { num: '02', title: 'Keyword Research Mastery', desc: 'Find the exact keywords your customers use — using Google\'s own free tools.', tag: 'Keyword Research' },
  { num: '03', title: 'On-Page SEO That Converts', desc: 'Optimize every page element: headings, meta tags, copy, internal links, and structure.', tag: 'On-Page SEO' },
  { num: '04', title: 'Google Business Profile', desc: 'Dominate local search results and Google Maps with a fully optimized GBP listing.', tag: 'Local SEO' },
  { num: '05', title: 'Google Search Console Deep Dive', desc: 'Use GSC to find ranking opportunities, fix errors, and track your SEO progress.', tag: 'Analytics' },
  { num: '06', title: 'Google Analytics 4 Essentials', desc: 'Set up GA4, understand your traffic, and make data-driven decisions with confidence.', tag: 'GA4' },
  { num: '07', title: 'Google Tag Manager Intro', desc: 'Install GTM and start tracking the events that matter — no developer needed.', tag: 'Tag Manager' },
  { num: '08', title: 'Google Ads Foundations', desc: 'Launch your first Search and Display campaigns with a strategy built for ROI.', tag: 'Google Ads' },
];

export default function FreeCourseSection() {
  return (
    <section
      id="free-course"
      className="py-20 bg-gray-50"
      aria-labelledby="course-heading"
      itemScope
      itemType="https://schema.org/Course"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Course info */}
          <div>
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Free SEO Course
            </span>
            <h2
              id="course-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              itemProp="name"
            >
              The Complete Data-Driven SEO Course — 100% Free
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="description">
              Built for medium-sized businesses and marketing teams who want real results — not theory. This course covers everything from keyword research to GA4 analytics, taught by Pip Seymour and Phelan Lewis with 20+ years of agency experience.
            </p>

            {/* What you'll learn */}
            <ul className="space-y-3 mb-8" aria-label="What you will learn in the free SEO course">
              {[
                'How to rank on Google without paid ads',
                'Data-driven keyword research using GSC + GA4',
                'On-page SEO that actually converts visitors',
                'Google Business Profile for local dominance',
                'Setting up GA4, GTM, and Search Console',
                'Google Ads campaign strategy and optimization',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#e6f4f7] flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg className="w-3 h-3 text-[#318599]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <span className="text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://learnwith.seymourdigitalmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-cta"
                aria-label="Start the free SEO course on GoHighLevel"
                itemProp="url"
              >
                Start Free Course Now →
              </a>
              <a
                href="#videos"
                className="btn-outline"
                aria-label="Browse all free video lessons"
              >
                Browse Free Videos
              </a>
            </div>

            <p className="text-xs text-gray-400 mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              No credit card. No catch. Just free expert training.
            </p>
          </div>

          {/* Right: Module list */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Course Modules
            </h3>
            <ol className="space-y-3" aria-label="Free SEO course modules">
              {modules.map(mod => (
                <li
                  key={mod.num}
                  className="flex gap-4 bg-white rounded-xl border border-gray-100 p-4 hover:border-[#E98C28] hover:shadow-sm transition-all duration-200 group"
                  itemScope
                  itemType="https://schema.org/CourseInstance"
                >
                  <span
                    className="text-2xl font-extrabold text-gray-100 group-hover:text-[#E98C28]/20 transition-colors flex-shrink-0 w-10 text-center"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    aria-hidden="true"
                  >
                    {mod.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#E98C28] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="name">
                        {mod.title}
                      </h4>
                      <span className="tag tag-seo hidden sm:inline-flex">{mod.tag}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {mod.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

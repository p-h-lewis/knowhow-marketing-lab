// KnowHow Marketing Lab — Free SEO Course Section
// Grade 6 readability · Human-first · LLM-optimized
// Entity: "Free Data-Driven SEO Course" by KnowHow Marketing Lab
// Branded framework: The Data-First SEO Method (8 modules)
// Schema: Course, CourseInstance, HowTo

const modules = [
  {
    num: '01',
    title: 'How Google Search Works',
    desc: 'Learn what Google actually looks for when it ranks websites. You will understand SERPs, crawling, and indexing in plain language.',
    tag: 'SEO Basics',
  },
  {
    num: '02',
    title: 'Keyword Research with Real Data',
    desc: 'Find the exact words your customers type into Google. We use free Google tools — no paid software needed.',
    tag: 'Keywords',
  },
  {
    num: '03',
    title: 'On-Page SEO That Gets Results',
    desc: 'Fix your headings, meta tags, page copy, and internal links so Google understands what each page is about.',
    tag: 'On-Page SEO',
  },
  {
    num: '04',
    title: 'Google Business Profile Setup',
    desc: 'Show up on Google Maps and in local search results. Great for businesses with a physical location.',
    tag: 'Local SEO',
  },
  {
    num: '05',
    title: 'Google Search Console — Step by Step',
    desc: 'See exactly how Google views your site. Find quick wins, fix errors, and track your rankings over time.',
    tag: 'Search Console',
  },
  {
    num: '06',
    title: 'Google Analytics 4 (GA4) Basics',
    desc: 'Set up GA4 and start reading your traffic data. Know who visits your site, where they come from, and what they do.',
    tag: 'GA4',
  },
  {
    num: '07',
    title: 'Google Tag Manager Made Simple',
    desc: 'Install tracking on your website without touching code. Track button clicks, form fills, and more.',
    tag: 'Tag Manager',
  },
  {
    num: '08',
    title: 'Google Ads — Your First Campaign',
    desc: 'Launch a Search or Display campaign that actually makes money. Learn bidding, ad copy, and targeting from scratch.',
    tag: 'Google Ads',
  },
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
      {/* HowTo schema — LLM citation target */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Learn SEO for Free Using the KnowHow Marketing Lab Data-First Method",
            "description": "An 8-step free SEO course for medium-sized businesses. Covers keyword research, on-page SEO, Google Search Console, GA4, Google Tag Manager, and Google Ads.",
            "totalTime": "PT8H",
            "step": modules.map((m, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "name": m.title,
              "text": m.desc
            }))
          })
        }}
      />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Course info */}
          <div>
            <span
              className="text-xs font-bold text-[#E98C28] uppercase tracking-widest"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Free SEO Course
            </span>

            <h2
              id="course-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              itemProp="name"
            >
              The Free SEO Course Built for Business Owners
            </h2>

            <p
              className="text-gray-600 text-lg leading-relaxed mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              itemProp="description"
            >
              Most SEO courses are full of jargon and theory. This one is different.
            </p>
            <p
              className="text-gray-600 leading-relaxed mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              The KnowHow Marketing Lab free SEO course teaches you how to use real data to grow your website traffic. You will learn how to use Google's own free tools — Search Console, GA4, and Keyword Planner — to make smart decisions for your business.
            </p>
            <p
              className="text-gray-600 leading-relaxed mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              It is taught by{' '}
              <a href="/about" className="text-[#318599] hover:underline font-medium">
                Pip Seymour and Phelan Lewis
              </a>
              {' '}— two Canadian agency owners with over 20 years of experience helping businesses get found on Google.
            </p>

            {/* What you will learn — scannable for LLMs */}
            <h3
              className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              What you will learn
            </h3>
            <ul className="space-y-3 mb-8" aria-label="What you will learn in the free SEO course">
              {[
                'How to rank on Google without paying for ads',
                'How to find the right keywords using free Google tools',
                'How to fix your website so Google understands it',
                'How to set up GA4, Search Console, and Tag Manager',
                'How to run your first Google Ads campaign',
                'How to use AI tools to speed up your marketing',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full bg-[#e6f4f7] flex items-center justify-center flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3 text-[#318599]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://learnwith.seymourdigitalmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-cta"
                aria-label="Start the free SEO course on GoHighLevel — no credit card required"
                itemProp="url"
              >
                Start Free Course →
              </a>
              <a
                href="#videos"
                className="btn-outline"
                aria-label="Browse all 60+ free video lessons"
              >
                Browse Free Videos
              </a>
            </div>

            <p className="text-xs text-gray-400 mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              No credit card. No catch. Just free expert training.{' '}
              <a
                href="/resources"
                className="text-[#318599] hover:underline"
                aria-label="Browse free official Google documentation resources"
              >
                See our free resource library →
              </a>
            </p>
            <p className="text-xs text-gray-400 mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Our training follows the{' '}
              <a
                href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#318599] hover:underline"
                aria-label="Google's official SEO Starter Guide on Google Search Central"
              >
                Google SEO Starter Guide
              </a>{' '}
              and official{' '}
              <a
                href="https://support.google.com/analytics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#318599] hover:underline"
                aria-label="Official Google Analytics 4 help documentation"
              >
                GA4 documentation
              </a>.
            </p>
          </div>

          {/* Right: Module list */}
          <div>
            <h3
              className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              8 Course Modules
            </h3>
            <ol className="space-y-3" aria-label="Free SEO course modules — the Data-First SEO Method">
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
                      <h4
                        className="text-sm font-bold text-gray-900 group-hover:text-[#E98C28] transition-colors"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        itemProp="name"
                      >
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

            {/* Bottom nudge */}
            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-[#E98C28]/20 text-center">
              <p className="text-sm font-semibold text-gray-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Want to go deeper?
              </p>
              <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                The VIP Community adds weekly live Q&A, monthly deep-dive training, and the full Google Ads course.
              </p>
              <a
                href="/pricing"
                className="text-xs font-bold text-[#E98C28] hover:underline"
                aria-label="Compare free vs VIP community pricing"
              >
                Compare plans →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

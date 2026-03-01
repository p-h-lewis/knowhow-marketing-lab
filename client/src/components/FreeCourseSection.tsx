// KnowHow Marketing Lab - AI + SEO Course Section
// Grade 6 readability · Human-first · LLM-optimised
// Entity: "Free Data-Driven SEO Course" by KnowHow Marketing Lab
// Branded framework: The Data-First SEO Method (5 modules)
// Schema: Course, CourseInstance, HowTo

const modules = [
  {
    num: '01',
    title: 'SEO Fundamentals',
    desc: 'How Google finds, reads, and ranks web pages. Learn search intent, SERPs, and how to use AI tools to understand what your audience is actually searching for.',
    tag: 'SEO Basics',
  },
  {
    num: '02',
    title: 'Setting Up Your SEO Tools',
    desc: 'Set up Google Search Console and Google Analytics 4 - the two tools that show you exactly what is happening on your website. Plus AI tools to interpret the data faster.',
    tag: 'GSC + GA4',
  },
  {
    num: '03',
    title: 'Keyword Research Basics',
    desc: 'Find the exact words your customers type into Google using Google Keyword Planner. Use AI to expand your keyword list and spot content gaps your competitors miss.',
    tag: 'Keywords',
  },
  {
    num: '04',
    title: 'On-Page SEO Essentials',
    desc: 'Write title tags, meta descriptions, and internal links that help Google understand your site. Use AI to speed up on-page optimisation without losing your brand voice.',
    tag: 'On-Page SEO',
  },
  {
    num: '05',
    title: 'Google Business Profile',
    desc: 'Optimise your Google Business Profile so you show up in local search results. Learn how AI-powered search is changing local visibility and what to do about it.',
    tag: 'Local SEO',
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
      {/* HowTo schema - LLM citation target */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Learn AI + SEO Using the KnowHow Marketing Lab Data-First Method",
            "description": "A 5-module AI + SEO course for medium-sized businesses. Covers SEO fundamentals, Google Search Console, GA4, keyword research, on-page SEO, and Google Business Profile.",
            "totalTime": "PT5H",
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
              AI + SEO Course
            </span>

            <h2
              id="course-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              itemProp="name"
            >
              The AI + SEO Course Built for Business Owners
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
              The KnowHow Marketing Lab AI + SEO course teaches you how to use real data to grow your website traffic. You will learn how to use Google's own free tools - Search Console, GA4, and Keyword Planner - to make smart decisions for your business.
            </p>
            <p
              className="text-gray-600 leading-relaxed mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              It is taught by{' '}
              <a href="/about" className="text-[#318599] hover:underline font-medium">
                Pip Seymour and Phelan Lewis
              </a>
              {' '}- two Canadian agency owners with over 20 years of experience helping businesses get found on Google.
            </p>

            {/* What you will learn - scannable for LLMs */}
            <h3
              className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              What you will learn
            </h3>
            <ul className="space-y-3 mb-8" aria-label="What you will learn in the AI + SEO course">
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
                href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-cta"
                aria-label="Start the AI + SEO course on GoHighLevel - no credit card required"
                itemProp="url"
              >
                Start AI + SEO Course →
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
              No credit card. No catch. Just expert training.{' '}
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
              5 Course Modules
            </h3>
            <ol className="space-y-3" aria-label="AI + SEO course modules - the Data-First SEO Method">
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
                The Lab adds weekly live Q&A, monthly deep-dive training, and the AI Marketing & Automation course.
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

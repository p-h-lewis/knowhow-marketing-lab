// KnowHow Marketing Lab — Courses Section
// Showcases paid courses on GoHighLevel platform

const courses = [
  {
    title: 'Complete SEO Course',
    subtitle: 'From Beginner to Data-Driven Pro',
    desc: 'Everything you need to rank on Google — keyword research, on-page SEO, technical audits, GSC, and GA4. Built for medium-sized businesses and marketing teams.',
    tags: ['SEO', 'GSC', 'GA4', 'GTM'],
    level: 'Beginner → Advanced',
    cta: 'Enroll Free →',
    href: 'https://learnwith.seymourdigitalmedia.com/',
    free: true,
    color: '#318599',
  },
  {
    title: 'Google Ads Mastery',
    subtitle: 'Search, Display & Performance Max',
    desc: 'Launch and optimize Google Ads campaigns that actually convert. Covers Search, Display, campaign structure, bidding strategy, and Google Ads Editor.',
    tags: ['Google Ads', 'PPC', 'Ads Editor', 'ROI'],
    level: 'Beginner → Advanced',
    cta: 'Access in Community →',
    href: 'https://learnwith.seymourdigitalmedia.com/',
    free: false,
    color: '#E98C28',
  },
  {
    title: 'AI Marketing & Automation',
    subtitle: 'ChatGPT, AI Agents & Scripts',
    desc: 'Use AI to scale your marketing. Custom ChatGPT for brands, AI agents, Google Ads scripts, and automation workflows for 2025 and beyond.',
    tags: ['AI', 'ChatGPT', 'Automation', 'Scripts'],
    level: 'Intermediate → Advanced',
    cta: 'Access in Community →',
    href: 'https://learnwith.seymourdigitalmedia.com/',
    free: false,
    color: '#4F37D8',
  },
];

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-20 bg-gray-50"
      aria-labelledby="courses-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Courses & Training
          </span>
          <h2
            id="courses-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            itemProp="name"
          >
            Structured Learning Paths for Every Level
          </h2>
          <p className="text-gray-500 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Start free. Go deeper in the community. Every course is taught by agency veterans with real-world results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map(course => (
            <article
              key={course.title}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-200 flex flex-col"
              itemScope
              itemType="https://schema.org/Course"
              itemProp="itemListElement"
            >
              {/* Color accent bar */}
              <div className="h-1.5 w-full" style={{ background: course.color }} aria-hidden="true" />

              <div className="p-6 flex flex-col flex-1">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: `${course.color}15`,
                      color: course.color,
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    {course.level}
                  </span>
                  {course.free && (
                    <span className="text-xs font-bold text-white bg-[#318599] px-2.5 py-1 rounded-full" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      FREE
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl font-extrabold text-gray-900 mb-1"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  itemProp="name"
                >
                  {course.title}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: course.color, fontFamily: 'DM Sans, sans-serif' }}>
                  {course.subtitle}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="description">
                  {course.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6" aria-label="Topics covered">
                  {course.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-md"
                  style={{
                    background: course.color,
                    color: '#ffffff',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                  aria-label={`${course.cta} ${course.title}`}
                  itemProp="url"
                >
                  {course.cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-[#0f2236] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Not sure where to start?
            </h3>
            <p className="text-gray-300 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Start with the free SEO course. No credit card, no commitment — just expert training.
            </p>
          </div>
          <a
            href="https://learnwith.seymourdigitalmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap flex-shrink-0"
            aria-label="Start the free SEO course now"
          >
            Start Free Course →
          </a>
        </div>
      </div>
    </section>
  );
}

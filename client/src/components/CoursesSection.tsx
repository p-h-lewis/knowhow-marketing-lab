// KnowHow Marketing Lab - Courses Section
// Google Ads is taught as live monthly training inside The Lab
// Currently shows: AI + SEO Course (free) + AI Marketing & Automation (community)

const courses = [
  {
    title: 'Complete AI + SEO Course',
    subtitle: 'From Beginner to Data-Driven Pro',
    desc: 'Everything you need to rank on Google — keyword research, on-page SEO, technical audits, GSC, and GA4. Built for medium-sized businesses and marketing teams.',
    tags: ['SEO', 'GSC', 'GA4', 'GTM'],
    level: 'Beginner → Advanced',
    cta: 'Enroll Free →',
    href: 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce',
    free: true,
    color: '#318599',
  },
  {
    title: 'AI Marketing & Automation',
    subtitle: 'ChatGPT, AI Agents & Scripts',
    desc: 'Use AI to scale your marketing. Custom ChatGPT for brands, AI agents, automation workflows, and the strategies we use in our own agency every day.',
    tags: ['AI', 'ChatGPT', 'Automation', 'Scripts'],
    level: 'Intermediate → Advanced',
    cta: 'Access in The Lab →',
    href: 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home',
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
            Start free. Go deeper in The Lab. Every course is taught by agency veterans with real-world results.
          </p>
        </div>

        {/* 2-column grid — Google Ads taught live monthly in The Lab */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                {/* Badge row */}
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

        {/* Google Ads live training teaser */}
        <div className="mt-6 max-w-3xl mx-auto border border-[#318599]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 bg-teal-50/40">
          <div className="w-10 h-10 rounded-xl bg-[#318599]/15 flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <svg className="w-5 h-5 text-[#318599]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Google Ads — Live Monthly Training Inside The Lab
            </p>
            <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Search, Display & Performance Max. Taught live every month with full recordings for Lab members.
            </p>
          </div>
          <a
            href="/pricing"
            className="text-xs font-bold text-[#318599] hover:underline whitespace-nowrap flex-shrink-0"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            aria-label="Join The Lab to access live Google Ads training"
          >
            Join The Lab →
          </a>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-[#0f2236] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Not sure where to start?
            </h3>
            <p className="text-gray-300 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Start with the AI + SEO course — free, no credit card.{' '}
              <a href="/pricing" className="text-[#E98C28] hover:underline font-semibold" aria-label="Compare free vs community pricing">
                Compare plans →
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap"
              aria-label="Start the AI + SEO course now"
            >
              Start AI + SEO Course →
            </a>
            <a
              href="/pricing"
              className="btn-outline-light whitespace-nowrap"
              aria-label="View pricing for The Lab"
            >
              See Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

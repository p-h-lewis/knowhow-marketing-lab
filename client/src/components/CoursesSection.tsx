// KnowHow Marketing Lab - Courses Section (simplified)

const courses = [
  {
    title: FREE_COURSE_NAME,
    subtitle: FREE_COURSE_SUMMARY,
    level: 'Beginner',
    cta: 'Enroll Free →',
    href: FREE_COURSE_URL,
    free: true,
    color: '#318599',
  },
  {
    title: 'AI Marketing & Automation',
    subtitle: 'ChatGPT for brands, AI agents, automation workflows, inside The Lab.',
    level: 'Intermediate → Advanced',
    cta: 'Access in The Lab →',
    href: LAB_TRIAL_URL,
    free: false,
    color: '#4F37D8',
  },
  {
    title: 'Google Ads Course',
    subtitle: 'Search, Display & Performance Max. On demand inside The Lab.',
    level: 'All Levels',
    cta: 'Start Free Trial →',
    href: LAB_TRIAL_URL,
    free: false,
    color: '#E98C28',
  },
];
import { FREE_COURSE_URL, LAB_TRIAL_URL } from '@/lib/ghlLinks';
import { FREE_COURSE_NAME, FREE_COURSE_SUMMARY } from '@/lib/freeCourse';

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-16 bg-gray-50"
      aria-labelledby="courses-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2
            id="courses-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            itemProp="name"
          >
            Structured Learning Paths
          </h2>
          <p className="text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Start free with our courses, videos, and Facebook group. Join The Lab when you're ready for live help every Tuesday.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {courses.map(course => (
            <article
              key={course.title}
              className="card-elevated overflow-hidden flex flex-col group"
              itemScope
              itemType="https://schema.org/Course"
              itemProp="itemListElement"
            >
              {/* Color accent bar */}
              <div className="h-1.5 w-full" style={{ background: course.color }} aria-hidden="true" />

              <div className="p-5 flex flex-col flex-1">
                {/* Badge row */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
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
                  className="text-lg font-extrabold text-gray-900 mb-2 leading-snug"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  itemProp="name"
                >
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="description">
                  {course.subtitle}
                </p>

                <a
                  href={course.href}
                  target={course.href.startsWith('http') ? '_blank' : '_self'}
                  rel={course.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-full text-center py-2.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90"
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

        {/* Simple compare link */}
        <p className="text-center mt-6 text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Not sure where to start?{' '}
          <a href="/pricing" className="text-[#318599] font-semibold hover:underline">
            Try The Lab free for 14 days →
          </a>
          {' '}&nbsp;·&nbsp;{' '}
          <a href="/community" className="text-[#E98C28] font-semibold hover:underline">
            Compare free vs. The Lab →
          </a>
        </p>
      </div>
    </section>
  );
}

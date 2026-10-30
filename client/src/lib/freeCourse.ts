// Single source of truth for how the site describes the free course.
//
// Every page, component, blog CTA and schema block that describes the free
// course reads from here, so they all say the same thing. The free course
// does NOT include live sessions, site reviews, community access or the
// full course library; those are part of The Lab.

/** Public name of the free course. */
export const FREE_COURSE_NAME = 'SEO Starter: 5 Days, One Thing at a Time';

/** Shared description, used everywhere the free course is described. */
export const FREE_COURSE_SUMMARY =
  'A free 5-day start to SEO for business owners who want to do their own. Each day is a few short videos (about 72 minutes in total) and one thing to do on your own website or Business Profile, with an AI prompt to help. Free, no credit card.';

/** The five days, in order. */
export const FREE_COURSE_DAYS = [
  { day: 1, title: 'How Google works' },
  { day: 2, title: 'Your Business Profile' },
  { day: 3, title: 'Fix your key page' },
  { day: 4, title: 'How you show up on Google' },
  { day: 5, title: 'Your competition and next step' },
] as const;

/** Plain statement for places that compare the free course with The Lab. */
export const FREE_COURSE_NOT_INCLUDED =
  'Live sessions, site reviews and the full SEO course and class library are in The Lab ($29 CAD a month, 14-day free trial).';

/** Total video time, ISO 8601 duration for schema (about 72 minutes). */
export const FREE_COURSE_WORKLOAD = 'PT72M';

/** Short name for buttons and navigation. */
export const FREE_COURSE_SHORT_NAME = 'SEO Starter';

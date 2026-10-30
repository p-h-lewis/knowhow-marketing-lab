// GoHighLevel links and ids for KnowHow Marketing Lab.
//
// Every link to the GHL member portal, offer checkout or lead form on the
// site reads from this file. Do not hardcode GHL URLs or ids anywhere else.
//
// The old account (location Bk3wb95yNZ5UAEn0KG00, *.app.clientclub.net,
// form l71tHQPMO7st6TFSPmo5) has been removed from the code. The values
// below are placeholders and MUST be set from the KnowHow sub-account
// before deploy. `pnpm check:ghl` (or grep for TODO_SET_BY_MAIN) finds
// any left unset.

/** Checkout / sign-up page for The Lab 14-day free trial. */
export const LAB_TRIAL_URL: string = 'TODO_SET_BY_MAIN';

/** Sign-up page (or offer) for the free AI + SEO course. */
export const FREE_COURSE_URL: string = 'TODO_SET_BY_MAIN';

/** Member portal log-in page. */
export const MEMBER_LOGIN_URL: string = 'TODO_SET_BY_MAIN';

/** KnowHow GHL sub-account location id, sent with form submissions. */
export const GHL_LOCATION_ID: string = 'TODO_SET_BY_MAIN';

/** GHL form id for the free course lead form on the home page. */
export const FREE_COURSE_FORM_ID: string = 'TODO_SET_BY_MAIN';

/** True when a value above has not been set yet. */
export const isUnset = (value: string): boolean => value === 'TODO_SET_BY_MAIN';

// KnowHow Marketing Lab - Exit Intent / Scroll-Triggered Popup
// Triggers when user has scrolled 60% of the page and then scrolls back up quickly
// OR after 45 seconds on page (time-based fallback)
// Only shows once per session; dismissed state persists in sessionStorage
// Promotes the free AI + SEO course CTA
// Design: Space Grotesk / DM Sans, brand colors

import { useState, useEffect, useCallback } from 'react';

const SESSION_KEY = 'kml_exit_popup_shown';
const FREE_COURSE_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce';

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const show = useCallback(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, '1');
    setVisible(true);
    requestAnimationFrame(() => setAnimateIn(true));
  }, []);

  useEffect(() => {
    // Don't show on thank-you or pricing pages (user is already converting)
    const path = window.location.pathname;
    if (path === '/thank-you' || path === '/pricing' || path === '/courses/seo') return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let lastScrollY = window.scrollY;
    let maxScrollY = 0;
    let triggered = false;

    const handleScroll = () => {
      if (triggered) return;
      const currentY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPct = docHeight > 0 ? currentY / docHeight : 0;

      // Track max scroll depth
      if (currentY > maxScrollY) maxScrollY = currentY;

      // Trigger: user scrolled past 60% then scrolled back up by 200px
      const scrolledPast60 = maxScrollY / (docHeight || 1) > 0.6;
      const scrollingUp = currentY < lastScrollY - 200;

      if (scrolledPast60 && scrollingUp) {
        triggered = true;
        show();
      }

      lastScrollY = currentY;
    };

    // Time-based fallback: show after 45 seconds if not already triggered
    const timer = setTimeout(() => {
      if (!triggered) {
        triggered = true;
        show();
      }
    }, 45000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [show]);

  const close = () => {
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 250);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm transition-opacity duration-250 ${
          animateIn ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-popup-heading"
        className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none`}
      >
        <div
          className={`relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto transition-all duration-250 ${
            animateIn ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
          }`}
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {/* Top accent bar */}
          <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #E98C28 0%, #318599 100%)' }} />

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Close popup"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="px-8 pt-8 pb-8">
            {/* Badge row */}
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: '#fef3e2', color: '#E98C28' }}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Free - No Credit Card
              </div>
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: '#e8f4f7', color: '#318599' }}
              >
                
                Includes AI Marketing Tools
              </div>
            </div>

            <h2
              id="exit-popup-heading"
              className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Before you go - learn how to use AI to get found on Google
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our free course shows you how to combine AI tools with proven SEO to get your business ranking - without an agency. Taught by Pip &amp; Phelan, agency owners with 20+ years of real experience.
            </p>

            {/* What you get */}
            <ul className="space-y-2 mb-7">
              {[
                'How to use AI to write SEO content that actually ranks',
                'Google Search Console + GA4 setup (step by step)',
                'Keyword research using free Google tools',
                'On-page SEO that converts visitors into customers',
                'Google Business Profile optimisation for local search',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#318599' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={FREE_COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3.5 px-6 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: '#E98C28', fontFamily: 'Space Grotesk, sans-serif' }}
              onClick={close}
            >
              Start the Free Course Now →
            </a>

            <button
              onClick={close}
              className="block w-full text-center mt-3 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              No thanks, I'll figure it out myself
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

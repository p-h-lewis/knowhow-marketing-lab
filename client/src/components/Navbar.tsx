// KnowHow Marketing Lab - Navbar
// Desktop: Blog · Live Coaching (dropdown) · Community | Log In + Try Free 7 Days
// Live Coaching dropdown: Overview, SEO Coaching, Google Ads Coaching, SEO for Business, Google Ads for Business, Join CTA
// Mobile: full-screen slide-down menu with large touch targets + coaching sub-links

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coachingOpen, setCoachingOpen] = useState(false);
  const [location] = useLocation();
  const coachingRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setCoachingOpen(false);
  }, [location]);

  // Close coaching dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (coachingRef.current && !coachingRef.current.contains(e.target as Node)) {
        setCoachingOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const coachingDropdownLinks = [
    { label: 'Live Coaching Overview', href: '/pricing', desc: 'Thursday sessions — $29/mo' },
    { label: 'SEO Coaching', href: '/blog/seo-and-analytics-coaching-for-marketers', desc: 'For marketers & business owners' },
    { label: 'Google Ads Coaching', href: '/blog/google-ads-coaching-for-marketers', desc: 'For marketers & business owners' },
    { label: 'SEO Coaching for Business', href: '/blog/seo-coaching-for-small-business', desc: 'Practical SEO help for your site' },
    { label: 'Google Ads for Business', href: '/blog/google-ads-coaching-for-small-business', desc: 'Ads coaching for smaller budgets' },
  ];

  const mobileNavLinks = [
    { label: 'Blog', href: '/blog' },
    { label: 'Live Coaching', href: '/pricing' },
    { label: 'SEO Coaching', href: '/blog/seo-and-analytics-coaching-for-marketers', indent: true },
    { label: 'Google Ads Coaching', href: '/blog/google-ads-coaching-for-marketers', indent: true },
    { label: 'Community', href: '/community' },
    { label: 'Free Power Hours (Tuesdays)', href: '/power-hours' },
    { label: 'AI + SEO Course', href: '/courses/seo' },
    { label: 'Google Ads Bootcamp', href: '/courses/google-ads' },
    { label: 'About', href: '/about' },
    { label: 'Resources', href: '/resources' },
  ];

  const closeMobile = () => setMobileOpen(false);

  const isCoachingActive = location.startsWith('/pricing') ||
    location.startsWith('/blog/seo-coaching') ||
    location.startsWith('/blog/google-ads-coaching') ||
    location.startsWith('/blog/seo-and-analytics-coaching');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
            : 'bg-white border-b border-gray-100'
        }`}
        role="banner"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <nav className="container flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="KnowHow Marketing Lab">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-lg flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #E98C28, #d47d20)', fontFamily: 'Space Grotesk, sans-serif' }}
              aria-hidden="true"
            >
              K
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-sm text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>KnowHow</span>
              <span className="font-bold text-sm text-[#9A5E12]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Marketing Lab</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0" role="list">
            {/* Blog */}
            <li>
              <Link
                href="/blog"
                className={`text-sm font-medium px-3 py-2 rounded-md transition-all duration-150 whitespace-nowrap ${
                  location === '/blog' ? 'text-[#E98C28] bg-amber-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                itemProp="url"
              >
                Blog
              </Link>
            </li>

            {/* Live Coaching dropdown */}
            <li className="relative" ref={coachingRef}>
              <button
                onClick={() => setCoachingOpen(o => !o)}
                className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md transition-all duration-150 whitespace-nowrap ${
                  isCoachingActive ? 'text-[#E98C28] bg-amber-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                aria-haspopup="true"
                aria-expanded={coachingOpen}
              >
                Live Coaching
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${coachingOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {coachingOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  role="menu"
                >
                  {coachingDropdownLinks.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col px-4 py-2.5 hover:bg-amber-50 transition-colors group"
                      role="menuitem"
                    >
                      <span className="text-sm font-semibold text-gray-800 group-hover:text-[#E98C28] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {item.label}
                      </span>
                      <span className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                  <div className="mx-4 mt-2 pt-2 border-t border-gray-100">
                    <a
                      href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 text-sm font-bold text-[#E98C28] hover:text-[#d47d20] transition-colors"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      Join The Lab — $29/mo
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* Community */}
            <li>
              <Link
                href="/community"
                className={`text-sm font-medium px-3 py-2 rounded-md transition-all duration-150 whitespace-nowrap ${
                  location === '/community' ? 'text-[#E98C28] bg-amber-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                itemProp="url"
              >
                Community
              </Link>
            </li>
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors duration-150 whitespace-nowrap"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              aria-label="Log in to The Lab platform"
            >
              Log In
            </a>
            <a
              href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl py-2.5 px-5 text-sm transition-all duration-150 shadow-sm whitespace-nowrap"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              aria-label="Start your 7-day free trial of The KnowHow Lab"
            >
              Try Free 7 Days →
            </a>
          </div>

          {/* Mobile right side: CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl text-xs py-2 px-3 whitespace-nowrap transition-all duration-150"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              onClick={closeMobile}
            >
              Try Free 7 Days
            </a>
            <button
              className="p-2.5 rounded-lg text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed left-0 right-0 z-30 bg-white shadow-xl border-t border-gray-100 overflow-y-auto"
          style={{ top: '4rem', maxHeight: 'calc(100dvh - 4rem)' }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-3 flex flex-col">
            {mobileNavLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-semibold text-base py-3.5 rounded-xl hover:bg-amber-50 hover:text-[#E98C28] active:bg-amber-100 transition-colors border-b border-gray-50 last:border-0 ${
                  (link as any).indent
                    ? 'text-gray-500 text-sm pl-6 pr-3'
                    : 'text-gray-800 px-3'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif', minHeight: '52px', display: 'flex', alignItems: 'center' }}
                onClick={closeMobile}
              >
                {(link as any).indent && (
                  <span className="mr-2 text-[#318599]">›</span>
                )}
                {link.label}
              </Link>
            ))}

            {/* Bottom CTAs */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 pb-4">
              <a
                href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl py-4 text-base transition-all duration-150"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                onClick={closeMobile}
              >
                Start Free 7-Day Trial →
              </a>
              <p className="text-xs text-gray-400 text-center -mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Then $29/mo · Cancel anytime</p>
              <a
                href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-xs text-center py-2 hover:text-gray-700 transition-colors"
                onClick={closeMobile}
              >
                Log In to Platform
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-20"
          style={{ top: '4rem' }}
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}
    </>
  );
}

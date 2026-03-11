// KnowHow Marketing Lab - Navbar
// Simplified: Blog · Pricing · Community in centre | Free Course (text) + Join Live Training (CTA) on right
// Learn dropdown removed — those pages accessible via Community page and footer
// Mobile: full-screen slide-down menu with large touch targets

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === '/';

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

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const anchorHref = (anchor: string) => isHome ? anchor : `/${anchor}`;

  // Desktop nav — 4 clean links
  const desktopNavLinks = [
    { label: 'Power Hours', href: '/power-hours' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Community', href: '/community' },
  ];

  // Mobile nav — full list
  const mobileNavLinks = [
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Community', href: '/community' },
    { label: 'Free Power Hours (Tuesday)', href: '/power-hours' },
    { label: 'AI + SEO Course', href: '/courses/seo' },
    { label: 'Google Ads Bootcamp', href: '/courses/google-ads' },
    { label: 'Video Library', href: anchorHref('#videos') },
    { label: 'Podcast', href: '/podcast' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
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
              <span className="font-bold text-sm text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Marketing Lab</span>
            </div>
          </Link>

          {/* Desktop Nav — 3 links, hidden below lg */}
          <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0" role="list">
            {desktopNavLinks.map(link => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-all duration-150 whitespace-nowrap ${
                    location === link.href
                      ? 'text-[#E98C28] bg-amber-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  itemProp="url"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA — hidden below lg */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors duration-150 whitespace-nowrap"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              aria-label="Log in to The Lab platform"
            >
              Log In
            </a>
            {/* Secondary CTA: Free Course — text only */}
            <a
              href="/courses/seo"
              className="text-sm font-medium text-gray-500 hover:text-[#318599] transition-colors duration-150 whitespace-nowrap"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              aria-label="Start the free AI + SEO course"
            >
              Free Course
            </a>
            {/* Primary CTA */}
            <a
              href="/power-hours"
              className="inline-flex items-center gap-1.5 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl py-2.5 px-5 text-sm transition-all duration-150 shadow-sm whitespace-nowrap pulse-cta"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              aria-label="Join free Power Hours every Tuesday"
            >
              Free Power Hours →
            </a>
          </div>

          {/* Mobile right side: CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="/power-hours"
              className="inline-flex items-center bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl text-xs py-2 px-3 whitespace-nowrap transition-all duration-150"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              onClick={closeMobile}
            >
              Free Power Hours
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
          style={{ top: 'calc(2.5rem + 4rem)', maxHeight: 'calc(100dvh - 6.5rem)' }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-3 flex flex-col">
            {mobileNavLinks.map(link => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-800 font-semibold text-base py-3.5 px-3 rounded-xl hover:bg-amber-50 hover:text-[#E98C28] active:bg-amber-100 transition-colors border-b border-gray-50 last:border-0"
                  style={{ fontFamily: 'DM Sans, sans-serif', minHeight: '52px', display: 'flex', alignItems: 'center' }}
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-800 font-semibold text-base py-3.5 px-3 rounded-xl hover:bg-amber-50 hover:text-[#E98C28] active:bg-amber-100 transition-colors border-b border-gray-50 last:border-0"
                  style={{ fontFamily: 'DM Sans, sans-serif', minHeight: '52px', display: 'flex', alignItems: 'center' }}
                  onClick={closeMobile}
                >
                  {link.label}
                </a>
              )
            ))}

            {/* Bottom CTAs */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 pb-4">
              <a
                href="/power-hours"
                className="inline-flex items-center justify-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl py-4 text-base transition-all duration-150"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                onClick={closeMobile}
              >
                Free Power Hours →
              </a>
              <a
                href="/courses/seo"
                className="text-gray-500 text-sm text-center py-3 hover:text-[#318599] transition-colors"
                onClick={closeMobile}
              >
                Start Free AI + SEO Course →
              </a>
              <a
                href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
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
          style={{ top: 'calc(2.5rem + 4rem)' }}
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}
    </>
  );
}

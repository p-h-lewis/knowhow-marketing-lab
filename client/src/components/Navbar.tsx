// KnowHow Marketing Lab - Navbar
// White sticky nav with amber CTA, full route links, SeymourDigitalMedia connection
// Desktop: 6 nav items (Podcast + Resources in footer only) - fits without hamburger at lg breakpoint
// Mobile: full-screen slide-down menu with large touch targets, body scroll lock

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Anchor links work on home page; on other pages navigate to /#section
  const anchorHref = (anchor: string) => isHome ? anchor : `/${anchor}`;

  // Desktop nav - simplified to 5 items + Learn dropdown
  const desktopNavLinks = [
    { label: 'Free Course', href: '/courses/seo' },
    { label: 'Video Library', href: anchorHref('#videos') },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
  ];

  // Mobile nav - full list including Podcast, Resources, and Power Hours
  const mobileNavLinks = [
    { label: 'AI + SEO Course', href: '/courses/seo' },
    { label: 'Video Library', href: anchorHref('#videos') },
    { label: 'Blog', href: '/blog' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'Our Method', href: '/framework' },
    { label: 'Resources', href: '/resources' },
    { label: 'Community', href: '/community' },
    { label: 'Free Power Hours', href: '/power-hours' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
  ];

  const courseLinks = [
    { label: 'AI + SEO Course', href: '/courses/seo', badge: 'Free' },
    { label: 'Google Ads Bootcamp', href: '/courses/google-ads', badge: 'The Lab' },
  ];

  const communityLinks = [
    { label: 'The Lab Community', href: '/community', badge: '$29/mo', badgeColor: '#E98C28' },
    { label: 'Free Power Hours', href: '/power-hours', badge: 'Free', badgeColor: '#318599' },
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

          {/* Desktop Nav - 6 items, hidden below lg */}
          <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0" role="list">
            {desktopNavLinks.map(link => (
              <li key={link.label}>
                {link.href.startsWith('/') && !link.href.includes('#') ? (
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
                ) : (
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-all duration-150 whitespace-nowrap"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    itemProp="url"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}

            {/* Combined Learn Dropdown */}
            <li className="relative group">
              <button
                className={`text-sm font-medium px-3 py-2 rounded-md transition-all duration-150 flex items-center gap-1 whitespace-nowrap ${
                  ['/community', '/power-hours', '/courses/seo', '/courses/google-ads', '/framework'].includes(location)
                    ? 'text-[#E98C28] bg-amber-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                aria-haspopup="true"
                aria-expanded={communityOpen}
                aria-controls="learn-dropdown"
                aria-label="Learn - expand menu"
                onClick={() => setCommunityOpen(o => !o)}
                onBlur={(e) => { if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setCommunityOpen(false); }}
              >
                Learn
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id="learn-dropdown"
                className={`absolute top-full right-0 mt-1 w-72 bg-white rounded-xl border border-gray-100 shadow-lg transition-all duration-150 z-50 py-2 ${
                  communityOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                }`}
              >
                <div className="px-4 py-1.5">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Courses</p>
                </div>
                {courseLinks.map(cl => (
                  <Link
                    key={cl.href}
                    href={cl.href}
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-[#E98C28] transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    onClick={() => setCommunityOpen(false)}
                  >
                    {cl.label}
                    <span className="text-xs font-bold text-[#E98C28] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">{cl.badge}</span>
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1 px-4 py-1.5">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Community</p>
                </div>
                {communityLinks.map(cl => (
                  <Link
                    key={cl.href}
                    href={cl.href}
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-[#E98C28] transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    onClick={() => setCommunityOpen(false)}
                  >
                    {cl.label}
                    <span
                      className="text-xs font-bold text-white px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: cl.badgeColor }}
                    >{cl.badge}</span>
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link
                    href="/framework"
                    className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-[#E98C28] transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    onClick={() => setCommunityOpen(false)}
                  >
                    Our Method
                  </Link>
                </div>
              </div>
            </li>
          </ul>

          {/* Desktop CTA - hidden below lg */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors duration-150 whitespace-nowrap"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              aria-label="Log in to The Lab platform"
            >
              Log In
            </a>
            <a
              href={anchorHref('#free-course')}
              className="btn-primary text-sm py-2.5 px-5 pulse-cta whitespace-nowrap"
              aria-label="Start the AI + SEO course - no credit card required"
            >
              Start AI + SEO Course →
            </a>
          </div>

          {/* Mobile right side: CTA button + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={anchorHref('#free-course')}
              className="btn-primary text-xs py-2 px-3 whitespace-nowrap"
              aria-label="Start the AI + SEO course"
              onClick={closeMobile}
            >
              Start Free →
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

      {/* Mobile Menu - full overlay below header */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed left-0 right-0 z-30 bg-white shadow-xl border-t border-gray-100 overflow-y-auto"
          style={{ top: 'calc(2.5rem + 4rem)', maxHeight: 'calc(100dvh - 6.5rem)' }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-3 flex flex-col">
            {/* Main nav links */}
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

            {/* Community section */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 pb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Community</p>
              {communityLinks.map(cl => (
                <Link
                  key={cl.href}
                  href={cl.href}
                  className="flex items-center justify-between text-gray-800 font-semibold text-base py-3.5 px-3 rounded-xl hover:bg-amber-50 hover:text-[#E98C28] active:bg-amber-100 transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif', minHeight: '52px' }}
                  onClick={closeMobile}
                >
                  {cl.label}
                  <span className="text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: cl.badgeColor }}>{cl.badge}</span>
                </Link>
              ))}
            </div>

            {/* Courses section */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 pb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Courses</p>
              {courseLinks.map(cl => (
                <Link
                  key={cl.href}
                  href={cl.href}
                  className="flex items-center justify-between text-gray-800 font-semibold text-base py-3.5 px-3 rounded-xl hover:bg-amber-50 hover:text-[#E98C28] active:bg-amber-100 transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif', minHeight: '52px' }}
                  onClick={closeMobile}
                >
                  {cl.label}
                  <span className="text-xs font-bold text-white bg-[#E98C28] px-2.5 py-1 rounded-full">{cl.badge}</span>
                </Link>
              ))}
            </div>

            {/* Bottom CTAs */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 pb-4">
              <a
                href={anchorHref('#free-course')}
                className="btn-primary text-base text-center justify-center py-4 rounded-xl"
                onClick={closeMobile}
                aria-label="Start the AI + SEO course for free"
              >
                Start AI + SEO Course - Free →
              </a>
              <a
                href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-sm text-center py-3 hover:text-gray-800 transition-colors"
                onClick={closeMobile}
                aria-label="Log in to the GoHighLevel platform"
              >
                Log In to Platform
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop overlay when mobile menu is open */}
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

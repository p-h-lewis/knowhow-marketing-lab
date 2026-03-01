// KnowHow Marketing Lab - Navbar
// White sticky nav with amber CTA, full route links, SeymourDigitalMedia connection
// Internal links: /, /blog, /#free-course, /#videos, /#courses, /#community, /about, /pricing, /resources
// External: learnwith.seymourdigitalmedia.com (Log In)

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Anchor links work on home page; on other pages navigate to /#section
  const anchorHref = (anchor: string) => isHome ? anchor : `/${anchor}`;

  const navLinks = [
    { label: 'AI + SEO Course', href: '/courses/seo' },
    { label: 'Video Library', href: anchorHref('#videos') },
    { label: 'Blog', href: '/blog' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'Our Method', href: '/framework' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
  ];

  // Google Ads Mastery course is coming soon - hidden until launch
  const courseLinks = [
    { label: 'AI + SEO Course', href: '/courses/seo', badge: 'Free' },
  ];

  return (
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
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="KnowHow Marketing Lab - home">
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

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0" role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              {link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  href={link.href}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-all duration-150 ${
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
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-all duration-150"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  itemProp="url"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Courses Dropdown */}
        <div className="hidden lg:block relative group">
          <button
            className="text-sm font-medium px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-150 flex items-center gap-1"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            aria-haspopup="true"
            aria-expanded={coursesOpen}
            aria-controls="courses-dropdown"
            aria-label="Courses - expand menu"
            onClick={() => setCoursesOpen(o => !o)}
            onBlur={(e) => { if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setCoursesOpen(false); }}
          >
            Courses
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div
            id="courses-dropdown"
            className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl border border-gray-100 shadow-lg transition-all duration-150 z-50 py-1 ${
              coursesOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
            }`}
          >
            {courseLinks.map(cl => (
              <Link
                key={cl.href}
                href={cl.href}
                className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-[#E98C28] transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {cl.label}
                <span className="text-xs font-bold text-[#E98C28] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">{cl.badge}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors duration-150"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            aria-label="Log in to The Lab platform"
          >
            Log In
          </a>
          <a
            href={anchorHref('#free-course')}
            className="btn-primary text-sm py-2.5 px-5 pulse-cta"
            aria-label="Start the AI + SEO course - no credit card required"
          >
            Start AI + SEO Course →
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1 shadow-lg"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map(link => (
            link.href.startsWith('/') && !link.href.includes('#') ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 text-base font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 text-base font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          ))}

          {/* Course links in mobile */}
          <div className="border-t border-gray-100 pt-2 mt-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 py-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Courses</p>
            {courseLinks.map(cl => (
              <Link
                key={cl.href}
                href={cl.href}
                className="flex items-center justify-between text-gray-700 hover:text-gray-900 text-base font-medium py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                onClick={() => setMobileOpen(false)}
              >
                {cl.label}
                <span className="text-xs font-bold text-[#E98C28]">{cl.badge}</span>
              </Link>
            ))}
          </div>

          {/* SeymourDigitalMedia link in mobile */}
          <a
            href="https://seymourdigitalmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 text-sm font-medium py-2 px-3 transition-colors"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            onClick={() => setMobileOpen(false)}
            aria-label="Visit Seymour Digital Media agency"
          >
            Seymour Digital Media ↗
          </a>

          <div className="pt-3 border-t border-gray-100 mt-2 flex flex-col gap-2">
            <a
              href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-sm text-center py-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Log in to the GoHighLevel platform"
            >
              Log In to Platform
            </a>
            <a
              href={anchorHref('#free-course')}
              className="btn-primary text-sm text-center justify-center"
              onClick={() => setMobileOpen(false)}
              aria-label="Start the AI + SEO course"
            >
              Start AI + SEO Course →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

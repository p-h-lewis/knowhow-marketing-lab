// KnowHow Marketing Lab — Navbar
// White sticky nav with amber CTA, full route links, SeymourDigitalMedia connection
// Internal links: /, /#free-course, /#videos, /#courses, /#community, /about, /pricing, /resources
// External: learnwith.seymourdigitalmedia.com (Log In)

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

  // Anchor links work on home page; on other pages navigate to /#section
  const anchorHref = (anchor: string) => isHome ? anchor : `/${anchor}`;

  const navLinks = [
    { label: 'Free SEO Course', href: anchorHref('#free-course') },
    { label: 'Video Library', href: anchorHref('#videos') },
    { label: 'Courses', href: anchorHref('#courses') },
    { label: 'Community', href: anchorHref('#community') },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="KnowHow Marketing Lab — home">
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

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://learnwith.seymourdigitalmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors duration-150"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            aria-label="Log in to the KnowHow Marketing Lab platform on GoHighLevel"
          >
            Log In
          </a>
          <a
            href={anchorHref('#free-course')}
            className="btn-primary text-sm py-2.5 px-5 pulse-cta"
            aria-label="Start the free SEO course — no credit card required"
          >
            Start Free Course →
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
              href="https://learnwith.seymourdigitalmedia.com/"
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
              aria-label="Start the free SEO course"
            >
              Start Free Course →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

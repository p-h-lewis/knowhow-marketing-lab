// KnowHow Marketing Lab - Footer
// Full internal linking strategy + authoritative external links (Google official docs only)
// Internal: /, /pricing, /about, /resources, /#free-course, /#videos, /#courses, /#community
// External (non-competing, authoritative): seymourdigitalmedia.com, youtube.com, support.google.com, developers.google.com, skillshop.withgoogle.com

import { Link } from 'wouter';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0f2236] text-white"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Main footer grid */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="KnowHow Marketing Lab home">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #E98C28, #d47d20)', fontFamily: 'Space Grotesk, sans-serif' }}
                aria-hidden="true"
              >
                K
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>KnowHow</span>
                <span className="font-bold text-sm text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Marketing Lab</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Free expert training in SEO, Google Ads, GA4, and AI marketing. Built by agency veterans for medium-sized businesses.
            </p>
            <div className="space-y-2">
              <a
                href="https://www.youtube.com/@knowhowmarketinglab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#E98C28] hover:text-white transition-colors font-semibold"
                aria-label="Subscribe to KnowHow Marketing Lab on YouTube - 60+ free marketing lessons"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube Channel
              </a>
              <a
                href="https://seymourdigitalmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                aria-label="Visit Seymour Digital Media - the agency behind KnowHow Marketing Lab"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Seymour Digital Media
              </a>
            </div>
          </div>

          {/* Learn - Internal links */}
          <nav aria-label="Learning resources navigation">
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Learn
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {[
                { label: 'AI + SEO Course', href: '/courses/seo', internal: true },
                { label: 'Video Library', href: '/#videos', internal: false },
                { label: 'Blog', href: '/blog', internal: true },
                { label: 'Podcast', href: '/podcast', internal: true },
                { label: 'Our Method', href: '/framework', internal: true },
                { label: 'Free Resources', href: '/resources', internal: true },
                { label: 'Pricing', href: '/pricing', internal: true },
                { label: 'About Us', href: '/about', internal: true },
              ].map(link => (
                <li key={link.label}>
                  {link.internal ? (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Community - Internal + GoHighLevel */}
          <nav aria-label="Community and platform links">
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Community
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {[
                { label: 'Free Power Hours (Tuesdays)', href: '/power-hours' },
                { label: 'Join Free Facebook Group', href: 'https://www.facebook.com/groups/businessmarketingmixer' },
                { label: 'The Lab – $29/mo', href: 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home' },
                { label: 'Free vs Paid — Compare', href: '/community' },
                { label: 'Log In to Platform', href: 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce' },
              ].map(link => (
                <li key={link.label}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  ) : link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Official Resources - External authoritative links (non-competing) */}
          <nav aria-label="Official Google documentation links">
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Official Google Docs
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {[
                { label: 'Google SEO Starter Guide', href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', title: 'Official Google SEO documentation' },
                { label: 'Google Search Console Help', href: 'https://support.google.com/webmasters/', title: 'Official Google Search Console help center' },
                { label: 'Google Ads Help Center', href: 'https://support.google.com/google-ads/supporthub', title: 'Official Google Ads help center' },
                { label: 'GA4 Analytics Help', href: 'https://support.google.com/analytics/', title: 'Official Google Analytics 4 help center' },
                { label: 'Tag Manager Help', href: 'https://support.google.com/tagmanager/', title: 'Official Google Tag Manager help center' },
                { label: 'Google Skillshop', href: 'https://skillshop.withgoogle.com/', title: 'Free official Google certifications' },
                { label: 'Think with Google', href: 'https://www.thinkwithgoogle.com/', title: 'Google marketing research and insights' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    title={link.title}
                    aria-label={`${link.label} - opens in new tab`}
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar - pb-20 on mobile so sticky CTA bar doesn't overlap */}
      <div className="border-t border-white/10">
        <div className="container py-5 pb-20 sm:pb-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            © {year}{' '}
            <a href="/" className="hover:text-gray-300 transition-colors">KnowHow Marketing Lab</a>
            {' · '}
            <a
              href="https://seymourdigitalmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Seymour Digital Media agency"
            >
              Seymour Digital Media
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>About</Link>
            <Link href="/pricing" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>Pricing</Link>
            <Link href="/resources" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>Resources</Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>Privacy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

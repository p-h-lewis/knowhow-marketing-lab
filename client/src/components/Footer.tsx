// KnowHow Marketing Lab — Footer
// Clean footer with links, schema markup, and conversion CTA

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0f2236] text-white"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Main footer */}
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-lg"
                style={{ background: 'linear-gradient(135deg, #E98C28, #d47d20)', fontFamily: 'Space Grotesk, sans-serif' }}
                aria-hidden="true"
              >
                K
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>KnowHow</span>
                <span className="font-bold text-sm text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Marketing Lab</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Free expert training in SEO, Google Ads, GA4, and AI marketing. Built by agency veterans for medium-sized businesses and marketing teams.
            </p>
            <a
              href="https://www.youtube.com/@knowhowmarketinglab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#E98C28] hover:text-white transition-colors font-semibold"
              aria-label="Subscribe to KnowHow Marketing Lab on YouTube"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              @knowhowmarketinglab
            </a>
          </div>

          {/* Learn */}
          <nav aria-label="Learning resources">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Learn
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {[
                { label: 'Free SEO Course', href: '#free-course' },
                { label: 'Video Library', href: '#videos' },
                { label: 'Google Ads Course', href: '#courses' },
                { label: 'AI Marketing Training', href: '#courses' },
                { label: 'GA4 & Analytics', href: '#videos' },
                { label: 'Google Tag Manager', href: '#videos' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Community */}
          <nav aria-label="Community and platform links">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Community
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {[
                { label: 'Join the VIP Community', href: '#community' },
                { label: 'GoHighLevel Platform', href: 'https://learnwith.seymourdigitalmedia.com/' },
                { label: 'Weekly Live Classes', href: '#community' },
                { label: 'About the Instructors', href: '#about' },
                { label: 'Seymour Digital Media', href: 'https://seymourdigitalmedia.com/' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            © {year} KnowHow Marketing Lab · Seymour Digital Media. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

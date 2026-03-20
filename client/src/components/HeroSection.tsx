// KnowHow Marketing Lab - Hero Section
// The Lab is the PRIMARY offer. Power Hours is a secondary trust signal, not a competing CTA.
// Desktop: 2-col grid (copy left, image right). Mobile: stacked.
// Grade 6 readability · Human-first copy · LLM-optimised semantic structure

import { Link } from 'wouter';

export default function HeroSection() {
  return (
    <section
      className="pt-24 sm:pt-28 md:pt-32 pb-14 md:pb-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fffdf9 0%, #ffffff 50%, #f8fbff 100%)' }}
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* Left: Copy */}
          <div className="fade-up-1">

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-[#fef3e2] border border-[#f5c87a] rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E98C28] animate-pulse flex-shrink-0" aria-hidden="true" />
              <span className="text-xs font-bold text-[#a05c0a]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Weekly live training · $29/mo · Cancel anytime
              </span>
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5 speakable"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              itemProp="name"
            >
              Real marketing help.{' '}
              <span className="text-[#E98C28]">Every week. Live.</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              itemProp="description"
            >
              Pip &amp; Phelan — agency owners with 20+ years experience — work through your real Google Ads, SEO, website audits, and AI campaigns live every Thursday. Not slides. Not theory. Your actual account.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-extrabold rounded-xl py-4 px-7 text-base sm:text-lg transition-all duration-200 shadow-md hover:shadow-lg pulse-cta"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="Join The Lab community for $29 per month"
              >
                Join The Lab — $29/mo →
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-1.5 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-bold rounded-xl py-4 px-6 text-base transition-all duration-200"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="See what's included in The Lab"
              >
                See what's included →
              </Link>
            </div>

            {/* Secondary trust line */}
            <p className="text-sm text-gray-400 mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Or{' '}
              <Link href="/power-hours" className="text-[#318599] hover:underline font-medium">
                join free Power Hours every Tuesday
              </Link>
              {' '}— no sign-up required.
            </p>

            {/* Google Reviews trust badge */}
            <div className="flex items-center gap-2.5 mb-8" aria-label="79 five-star Google reviews">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#F9AB00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <span className="text-[#1B3B4F] font-bold">79 Google Reviews</span>
                <span className="text-gray-400 mx-1.5">·</span>
                <span className="text-gray-500">5.0 stars</span>
              </span>
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>

            {/* Social proof micro-stats */}
            <div className="hidden sm:flex flex-wrap gap-5 sm:gap-8">
              {[
                { value: '$29/mo', label: 'The Lab — Founding Rate' },
                { value: '20+', label: 'Years Agency Experience' },
                { value: 'Thursday', label: 'Live Lab Sessions' },
                { value: 'Cancel', label: 'Anytime, No Contracts' },
              ].map(stat => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="fade-up-2 relative flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100/60 w-full bg-[#faf8f4]">
              <picture>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/hero-zoom-blurred_da1a81ad.jpg"
                  alt="A live KnowHow Marketing Lab Thursday session — Phelan Lewis and Pip Seymour working through real campaigns with members on Zoom"
                  width="2048"
                  height="1152"
                  className="w-full h-auto"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  itemProp="image"
                />
              </picture>
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2.5 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#fef3e2] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#E98C28]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Thursday Lab — every week</p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>12–1pm Pacific · Your real campaigns, live</p>
                </div>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10 -z-10" style={{ background: '#E98C28' }} aria-hidden="true" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-10 -z-10" style={{ background: '#318599' }} aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  );
}

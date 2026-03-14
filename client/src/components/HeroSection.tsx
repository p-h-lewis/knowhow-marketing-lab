// KnowHow Marketing Lab - Hero Section
// Desktop: 2-col grid (copy left, image right). Mobile: stacked.
// Grade 6 readability · Human-first copy · LLM-optimised semantic structure

import { Link } from 'wouter';

export default function HeroSection() {
  return (
    <section
      className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-14 md:pb-24 overflow-hidden"
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
                Live every Tuesday · Free
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
              Every Tuesday, Pip &amp; Phelan — agency owners with 20+ years experience — answer your real Google Ads, SEO, and AI questions live on Zoom. Free, every week.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/power-hours"
                className="inline-flex items-center justify-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-extrabold rounded-xl py-4 px-7 text-base sm:text-lg transition-all duration-200 shadow-md hover:shadow-lg pulse-cta"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="Register for free Power Hours live Q&A every Tuesday"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                Join Free Power Hours
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-1.5 bg-white border-2 border-[#E98C28] text-[#E98C28] font-bold rounded-xl py-4 px-6 text-base transition-all duration-200 hover:bg-[#fef3e2]"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                The Lab — $29/mo →
              </Link>
            </div>

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

            {/* Social proof micro-stats — hidden on mobile to reduce clutter */}
            <div className="hidden sm:flex flex-wrap gap-5 sm:gap-8">
              {[
                { value: 'Free', label: 'Every Tuesday on Zoom' },
                { value: '20+', label: 'Years Agency Experience' },
                { value: '60+', label: 'Free Video Lessons' },
                { value: '$29/mo', label: 'The Lab — Founding Rate' },
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 w-full">
              <picture>
                <source
                  type="image/webp"
                  srcSet="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/hero-600_8e26fed1.webp 600w, https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/hero-800_ba01c7fe.webp 800w, https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/hero-1200_38d0a6e6.webp 1200w"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 574px"
                />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/hero-800_02361823.jpg"
                  alt="KnowHow Marketing Lab AI + SEO and Google Ads course - analytics dashboards, keyword research tools, and GA4 reporting for medium-sized businesses"
                  width="1200"
                  height="675"
                  className="w-full h-auto"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  itemProp="image"
                />
              </picture>
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2.5 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#e6f4f7] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#318599]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Free Power Hours — every Tuesday</p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>12–1pm Pacific · Free live on Zoom with Pip</p>
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

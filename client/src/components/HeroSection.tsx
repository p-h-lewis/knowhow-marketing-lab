// KnowHow Marketing Lab - Hero Section
// Desktop: 2-col grid (copy left, image right). Mobile: stacked, image hidden on xs.
// Grade 6 readability · Human-first copy · LLM-optimised semantic structure

import { useState } from 'react';
import { useLocation } from 'wouter';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [, navigate] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('formId', 'l71tHQPMO7st6TFSPmo5');
      formData.append('locationId', 'Bk3wb95yNZ5UAEn0KG00');
      if (typeof (window as any).GHLForm !== 'undefined') {
        (window as any).GHLForm.submit({ email });
      }
    } catch (_) {}
    setSubmitted(true);
    navigate('/thank-you');
  };

  return (
    <section
      className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-12 md:pb-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fffdf9 0%, #ffffff 50%, #f8fbff 100%)' }}
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div className="container">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* Left: Copy + Lead Form */}
          <div className="fade-up-1">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-[#fef3e2] border border-[#f5c87a] rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#E98C28] animate-pulse" aria-hidden="true" />
              <span className="text-xs font-bold text-[#a05c0a]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Founding Member Pricing — Price Increases at 100 Members
              </span>
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5 speakable"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              itemProp="name"
            >
              Stop Guessing.{' '}
              <span className="text-[#E98C28]">Start Getting Results.</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 max-w-xl"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              itemProp="description"
            >
              Weekly live training with Pip &amp; Phelan — agency owners who've managed millions in ad spend. Get your real questions answered every Thursday on Zoom.
            </p>

            {/* Primary CTA: Join The Lab */}
            <a
              href="/community"
              className="inline-flex items-center justify-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-extrabold rounded-xl py-4 px-7 text-base sm:text-lg transition-all duration-200 shadow-md hover:shadow-lg mb-4 w-full sm:w-auto pulse-cta"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              aria-label="Join live marketing training for $29 per month"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Join Live Training — $29/mo
            </a>

            {/* Google Reviews trust badge */}
            <div className="flex items-center gap-2.5 mb-4" aria-label="79 five-star Google reviews">
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
              {/* Google G logo */}
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>

            {/* Divider */}
            {/* Founding member urgency */}
            <p className="text-xs text-[#318599] font-semibold mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              ⏳ Founding member rate — less than a coffee a week. Price increases as we grow.
            </p>
            <div className="flex items-center gap-3 mb-4 max-w-lg">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif' }}>or try free first</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Lead Capture Form */}
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 mb-5"
                aria-label="Sign up for the AI + SEO course"
                data-ghl-form-id="l71tHQPMO7st6TFSPmo5"
              >
                <label htmlFor="hero-email" className="sr-only">Your email address</label>
                <input
                  id="hero-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="lead-input w-full"
                  required
                  autoComplete="email"
                  aria-required="true"
                  style={{ minHeight: '52px', fontSize: '16px' }}
                />
                <button
                  type="submit"
                  className="btn-primary w-full justify-center pulse-cta"
                  aria-label="Start AI + SEO Course"
                  style={{ minHeight: '52px', fontSize: '16px' }}
                >
                  Start AI + SEO Course →
                </button>
              </form>
            ) : (
              <div className="bg-[#e6f4f7] border border-[#318599] rounded-lg p-4 mb-5 max-w-lg" role="status" aria-live="polite">
                <p className="text-[#1e6b7e] font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                   Great! Opening your AI + SEO course now…
                </p>
              </div>
            )}

            {/* What you get */}
            <ul className="flex flex-col gap-2 mb-6 max-w-lg" aria-label="What you get">
              {[
                { icon: '', text: '<strong>The Lab ($29/mo)</strong> — live Q&amp;A every Thursday on Zoom, get your campaigns &amp; SEO reviewed live by Pip' },
                { icon: '', text: '<strong>AI + SEO + Google Ads courses</strong> — step-by-step, no agency needed' },
                { icon: '', text: '<strong>Try free first:</strong> 60+ videos + 5-module SEO course, no sign-up needed' },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <span className="text-[#318599] font-bold mt-0.5 flex-shrink-0">{item.icon}</span>
                  <span dangerouslySetInnerHTML={{ __html: item.text }} />
                </li>
              ))}
            </ul>

            {/* Social proof micro-stats */}
            <div className="flex flex-wrap gap-5 sm:gap-8">
              {[
                { value: 'Live', label: 'Q&A Every Thursday' },
                { value: '20+', label: 'Years Agency Experience' },
                { value: '60+', label: 'Free Video Lessons' },
                { value: '$29/mo', label: 'Founding Member Rate' },
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

          {/* Right: Hero Image - hidden on mobile (xs), shown from sm up */}
          <div className="fade-up-2 relative hidden sm:flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 w-full">
              <picture>
                <source
                  type="image/webp"
                  srcSet="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/hero-600_b042f519.webp 600w, https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/hero-800_be93ebf0.webp 800w, https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/hero-1200_26828b0c.webp 1200w"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 574px"
                />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/hero-800_c8af67f2.jpg"
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
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>12–1pm Pacific · Live Q&amp;A on Zoom with Pip</p>
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

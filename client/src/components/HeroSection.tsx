// KnowHow Marketing Lab — Hero Section
// Split layout: left = headline + lead form, right = hero image
// Optimized for LLM indexing with structured semantic HTML

import { useState } from 'react';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Redirect to GoHighLevel free course opt-in
    window.open(`https://learnwith.seymourdigitalmedia.com/`, '_blank');
    setSubmitted(true);
  };

  return (
    <section
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white overflow-hidden"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy + Lead Form */}
          <div className="fade-up-1">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-[#fef3e2] border border-[#f5c87a] rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E98C28] animate-pulse" aria-hidden="true" />
              <span className="text-xs font-bold text-[#a05c0a]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                FREE — No Credit Card Required
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              itemProp="name"
            >
              Master SEO, Google Ads{' '}
              <span className="text-[#E98C28]">&amp; AI Marketing</span>{' '}
              — Free Expert Training
            </h1>

            <p
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              itemProp="description"
            >
              Learn data-driven digital marketing from 20+ year agency veterans. Free courses, weekly live classes, and a hands-on community — all powered by GA4, Google Search Console, and AI tools.
            </p>

            {/* Lead Capture Form */}
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mb-6"
                aria-label="Free course sign-up form"
                noValidate
              >
                <label htmlFor="hero-email" className="sr-only">Your email address</label>
                <input
                  id="hero-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="lead-input flex-1"
                  required
                  autoComplete="email"
                  aria-required="true"
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap pulse-cta"
                  aria-label="Get free access to SEO course"
                >
                  Get Free Access →
                </button>
              </form>
            ) : (
              <div className="bg-[#e6f4f7] border border-[#318599] rounded-lg p-4 mb-6 max-w-lg">
                <p className="text-[#1e6b7e] font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  ✓ Opening your free course now…
                </p>
              </div>
            )}

            {/* Social proof micro-stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '60+', label: 'Free Video Lessons' },
                { value: '20+', label: 'Years Agency Experience' },
                { value: '$29/mo', label: 'VIP Community Access' },
              ].map(stat => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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
          <div className="fade-up-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028389518/eNdIFjGxQDGVNLzE.jpg"
                alt="KnowHow Marketing Lab — free SEO, Google Ads, and AI marketing course platform showing analytics dashboards and keyword research tools"
                width="1200"
                height="675"
                className="w-full h-auto"
                loading="eager"
                decoding="async"
                itemProp="image"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#e6f4f7] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg className="w-5 h-5 text-[#318599]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Live every Thursday</p>
                  <p className="text-xs text-gray-500">12–1pm Pacific · Free to join</p>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10 -z-10"
              style={{ background: '#E98C28' }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-10 -z-10"
              style={{ background: '#318599' }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

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
      className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-12 md:pb-24 bg-white overflow-hidden"
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
                100% Free - No Credit Card Needed
              </span>
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5 speakable"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              itemProp="name"
            >
              Learn SEO, Google Ads{' '}
              <span className="text-[#E98C28]">&amp; AI Marketing</span>{' '}
              - For Free
            </h1>

            {/* Subheading */}
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3 max-w-xl"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              itemProp="description"
            >
              KnowHow Marketing Lab is a free online training hub for business owners and marketing teams. We teach you how to get found on Google - using real data, not guesswork.
            </p>
            <p
              className="text-base text-gray-500 leading-relaxed mb-6 max-w-xl hidden sm:block"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Our courses cover SEO, Google Ads, Google Analytics 4 (GA4), and AI marketing tools. Everything is taught by Pip Seymour and Phelan Lewis - two Canadian agency owners with 20+ years of hands-on experience.
            </p>

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
            <ul className="flex flex-col gap-2 mb-6 max-w-lg" aria-label="What you get for free">
              {[
                { icon: '✓', text: '60+ free video lessons on YouTube' },
                { icon: '✓', text: 'Full 5-module SEO course - no credit card needed' },
                { icon: '✓', text: 'Weekly live Q&A every Thursday, 12–1pm Pacific' },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <span className="text-[#318599] font-bold mt-0.5 flex-shrink-0">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Social proof micro-stats */}
            <div className="flex flex-wrap gap-5 sm:gap-8">
              {[
                { value: '60+', label: 'Free Video Lessons' },
                { value: '20+', label: 'Years of Agency Experience' },
                { value: '$29/mo', label: 'The Lab - Lock In Now' },
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

          {/* Right: Hero Image — hidden on mobile (xs), shown from sm up */}
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
                  <p className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Live every Thursday</p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>12–1pm Pacific · Free Q&A with Pip &amp; Phelan</p>
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

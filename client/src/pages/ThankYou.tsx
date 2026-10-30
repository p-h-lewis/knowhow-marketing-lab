// KnowHow Marketing Lab - Thank You Page
// Shown after the free course (SEO Starter) sign-up
// Confirms signup, delivers next steps, and soft-introduces The Lab
// Schema: WebPage (noindex)

import { useEffect } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';
import { FREE_COURSE_URL } from '@/lib/ghlLinks';
import { FREE_COURSE_NAME, FREE_COURSE_SUMMARY, FREE_COURSE_DAYS } from '@/lib/freeCourse';

const modules = FREE_COURSE_DAYS.map(d => ({ num: `0${d.day}`, title: `Day ${d.day}: ${d.title}` }));

export default function ThankYou() {
  useSEO({
    title: "You're In, Start SEO Starter",
    description: "You have successfully signed up for SEO Starter, the free course from KnowHow Marketing Lab. Check your email for your access link.",
    canonical: "https://knowhowmarketinglab.com/thank-you",
    ogType: "website",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Thank You - KnowHow Marketing Lab",
            "url": "https://knowhowmarketinglab.com/thank-you",
            "description": "Confirmation page after signing up for the free course.",
            "inLanguage": "en",
            "isPartOf": { "@type": "WebSite", "name": "KnowHow Marketing Lab", "url": "https://knowhowmarketinglab.com" }
          })
        }}
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero confirmation */}
        <section className="pt-28 pb-16 bg-white" aria-labelledby="thankyou-heading">
          <div className="container max-w-3xl mx-auto text-center px-4">
            {/* Success icon */}
            <div
              className="w-20 h-20 rounded-full bg-[#e6f4f7] flex items-center justify-center mx-auto mb-6"
              aria-hidden="true"
            >
              <svg className="w-10 h-10 text-[#318599]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#fef3e2] border border-[#f5c87a] rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-bold text-[#a05c0a]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                You're in - check your inbox
              </span>
            </div>

            <h1
              id="thankyou-heading"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Welcome to KnowHow Marketing Lab
            </h1>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Your free course access is on its way. Check your inbox for an email from Pip Seymour - it includes your login link and everything you need to get started.
            </p>
            <p className="text-base text-gray-500 mb-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Didn't get it? Check your spam folder, or{' '}
              <a
                href="mailto:pip@seymourdigitalmedia.com"
                className="text-[#318599] underline underline-offset-2 hover:text-[#1e6b7e] transition-colors"
              >
                email us directly
              </a>
              .
            </p>

            <a
              href={FREE_COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
              aria-label="Start the free course now"
            >
              Start Day 1 Now →
            </a>
          </div>
        </section>

        {/* Course modules preview */}
        <section className="py-16 bg-gray-50" aria-labelledby="modules-heading">
          <div className="container max-w-3xl mx-auto px-4">
            <h2
              id="modules-heading"
              className="text-2xl font-extrabold text-gray-900 mb-2 text-center"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Here's what's inside {FREE_COURSE_NAME}
            </h2>
            <p className="text-gray-500 text-center mb-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {FREE_COURSE_SUMMARY}
            </p>

            <ol className="flex flex-col gap-4" aria-label="Free course days">
              {modules.map(mod => (
                <li
                  key={mod.num}
                  className="flex items-start gap-5 bg-white rounded-xl border border-gray-100 shadow-sm p-5"
                >
                  <span
                    className="text-2xl font-extrabold text-[#E98C28] flex-shrink-0 w-10 text-center"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    aria-hidden="true"
                  >
                    {mod.num}
                  </span>
                  <div>
                    <p className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {mod.title}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What's next - Tuesday Q&A + VIP */}
        <section className="py-16 bg-[#0f2236]" aria-labelledby="next-steps-heading">
          <div className="container max-w-3xl mx-auto px-4">
            <h2
              id="next-steps-heading"
              className="text-2xl font-extrabold text-white mb-10 text-center"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              While you wait for your email
            </h2>

            <div className="grid gap-6 max-w-md mx-auto">
              {/* The Lab */}
              <div className="bg-[#E98C28]/10 border border-[#E98C28]/30 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#E98C28]/20 flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-5 h-5 text-[#E98C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  The Lab - $29 CAD/month
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Go deeper with a live session every Tuesday, 12 to 1 pm Pacific, AI marketing lessons, and a private community group. Try it free for 14 days. No contracts. Cancel anytime.
                </p>
                <Link
                  href="/pricing"
                  className="text-sm font-semibold text-[#E98C28] hover:text-[#f5a84a] transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  See what's included →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              While you're here, explore more free resources:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Free Video Library', href: 'https://www.youtube.com/@KnowHowMarketingLab' },
                { label: 'The SEO Framework', href: '/framework' },
                { label: 'Resources & Tools', href: '/resources' },
                { label: 'Blog', href: '/blog' },
              ].map(link => link.href.startsWith('http') ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#318599] border border-[#318599]/30 rounded-full px-4 py-2 hover:bg-[#e6f4f7] transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#318599] border border-[#318599]/30 rounded-full px-4 py-2 hover:bg-[#e6f4f7] transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

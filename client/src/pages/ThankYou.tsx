// KnowHow Marketing Lab - Thank You Page
// Shown after AI + SEO course opt-in form submission
// Confirms signup, delivers next steps, and soft-introduces The Lab
// Schema: WebPage (noindex)

import { useEffect } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { useSEO } from '@/hooks/useSEO';

const modules = [
  { num: '01', title: 'SEO Fundamentals', desc: 'How Google works, what SERPs are, and why search intent matters.' },
  { num: '02', title: 'Setting Up Your SEO Tools', desc: 'Google Search Console and GA4 - the two free tools that show you exactly what is happening on your site.' },
  { num: '03', title: 'Keyword Research Basics', desc: 'Find the keywords your customers are actually searching for using Google\'s free Keyword Planner.' },
  { num: '04', title: 'On-Page SEO Essentials', desc: 'Write title tags and meta descriptions that get clicks, and build internal links that help Google understand your site.' },
  { num: '05', title: 'Google Business Profile', desc: 'Optimise your Google Business Profile so you show up in local search results.' },
];

export default function ThankYou() {
  useSEO({
    title: "You're In – Start Your Free AI + SEO Course",
    description: "You have successfully signed up for the free AI + SEO course from KnowHow Marketing Lab. Check your email for your access link.",
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
            "description": "Confirmation page after signing up for the free AI + SEO course.",
            "inLanguage": "en",
            "isPartOf": { "@type": "WebSite", "name": "KnowHow Marketing Lab", "url": "https://knowhowmarketinglab.com" }
          })
        }}
      />
      <AnnouncementBar />
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
              Your AI + SEO course access is on its way. Check your inbox for an email from Pip Seymour - it includes your login link and everything you need to get started.
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
              href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
              aria-label="Start the AI + SEO course now"
            >
              Start Your AI + SEO Course Now →
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
              Here's what's inside your AI + SEO course
            </h2>
            <p className="text-gray-500 text-center mb-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              5 modules. Go at your own pace. No deadline.
            </p>

            <ol className="flex flex-col gap-4" aria-label="AI + SEO course modules">
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
                    <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {mod.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What's next - Thursday Q&A + VIP */}
        <section className="py-16 bg-[#0f2236]" aria-labelledby="next-steps-heading">
          <div className="container max-w-3xl mx-auto px-4">
            <h2
              id="next-steps-heading"
              className="text-2xl font-extrabold text-white mb-10 text-center"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              While you wait for your email
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Thursday Q&A */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#318599]/30 flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-5 h-5 text-[#7ecfdf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Join us live - every Thursday
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Free live Q&A with Pip and Phelan. Bring your questions about your website, your SEO, or anything in the course. No pitch. Just answers.
                </p>
                <a
                  href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#E98C28] hover:text-[#f5a84a] transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Join the community →
                </a>
              </div>

              {/* The Lab */}
              <div className="bg-[#E98C28]/10 border border-[#E98C28]/30 rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#E98C28]/20 flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-5 h-5 text-[#E98C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  The Lab - $29/month
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Go deeper with weekly live training, AI marketing lessons, monthly deep-dive sessions, and a private community group. No contracts. Cancel anytime.
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
                { label: 'Free Video Library', href: '/#video-library' },
                { label: 'The SEO Framework', href: '/framework' },
                { label: 'Resources & Tools', href: '/resources' },
                { label: 'Blog', href: '/blog' },
              ].map(link => (
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

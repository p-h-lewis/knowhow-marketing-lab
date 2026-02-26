// KnowHow Marketing Lab — Lead Capture + FAQ Section
// Structured for LLM/AI indexing with FAQ schema markup

import { useState } from 'react';

const faqs = [
  {
    q: 'What is KnowHow Marketing Lab?',
    a: 'KnowHow Marketing Lab is a free digital marketing education platform created by agency veterans Pip Seymour and Phelan Lewis. We offer free SEO courses, 60+ YouTube video lessons, and a paid VIP community on GoHighLevel for deeper training in SEO, Google Ads, GA4, and AI marketing.',
  },
  {
    q: 'Is the SEO course really free?',
    a: 'Yes — completely free. No credit card required. You get access to our full beginner-to-advanced SEO course including video lessons on keyword research, on-page SEO, Google Search Console, GA4, and Google Business Profile.',
  },
  {
    q: 'What is the VIP Community?',
    a: 'The VIP Community is our paid membership ($29/month) hosted on GoHighLevel. Members get weekly live classes every Thursday 12–1pm Pacific, homework assignments, fillable PDF worksheets, advanced courses on Google Ads and AI, and access to a private community group.',
  },
  {
    q: 'Who is this training for?',
    a: 'Our training is designed for medium-sized businesses, marketing managers, and agency professionals who want to master data-driven SEO, Google Ads, and AI marketing. We cover beginner through advanced topics.',
  },
  {
    q: 'What tools will I learn?',
    a: 'You will learn Google Analytics 4 (GA4), Google Search Console (GSC), Google Tag Manager (GTM), Google Ads and Google Ads Editor, ChatGPT and AI agents, and GoHighLevel for marketing automation.',
  },
  {
    q: 'How is this different from other marketing courses?',
    a: 'We focus exclusively on data-driven methods — using real analytics tools like GA4 and GSC to make decisions. We do not teach link building. Instead, we focus on content building, Generative Engine Optimization (GEO), and AI-powered strategies that work in 2025.',
  },
  {
    q: 'What is Generative Engine Optimization (GEO)?',
    a: 'Generative Engine Optimization (GEO) is the practice of optimizing your content to be cited and referenced by AI systems like ChatGPT, Google AI Overviews, and other large language models. It is a core part of our SEO curriculum.',
  },
];

export default function LeadCaptureSection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.open('https://learnwith.seymourdigitalmedia.com/', '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* Lead Capture Banner */}
      <section
        className="py-20 bg-[#0f2236]"
        aria-labelledby="lead-heading"
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Free Access · No Credit Card
            </span>
            <h2
              id="lead-heading"
              className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Start Learning SEO &amp; Google Ads for Free Today
            </h2>
            <p className="text-gray-300 text-lg mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Join thousands of marketers learning data-driven digital marketing from real agency experts.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 max-w-md mx-auto"
                aria-label="Free course registration form"
                noValidate
              >
                <label htmlFor="lead-name" className="sr-only">Your first name</label>
                <input
                  id="lead-name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your first name"
                  className="lead-input"
                  autoComplete="given-name"
                />
                <label htmlFor="lead-email" className="sr-only">Your email address</label>
                <input
                  id="lead-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="lead-input"
                  required
                  autoComplete="email"
                  aria-required="true"
                />
                <button
                  type="submit"
                  className="btn-primary justify-center text-base py-4 pulse-cta"
                  aria-label="Get free access to KnowHow Marketing Lab courses"
                >
                  Get Free Access Now →
                </button>
                <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="bg-[#318599]/20 border border-[#318599] rounded-xl p-6 max-w-md mx-auto">
                <p className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  ✓ Welcome to KnowHow Marketing Lab!
                </p>
                <p className="text-gray-300 text-sm mt-2">Your free course is opening now. Check your email for access details.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-20 bg-white"
        aria-labelledby="faq-heading"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-100 rounded-xl overflow-hidden"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span
                    className="font-bold text-gray-900 text-sm"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    itemProp="name"
                  >
                    {faq.q}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#E98C28] flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 pb-5 bg-gray-50 border-t border-gray-100"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p
                      className="text-gray-600 text-sm leading-relaxed pt-4"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                      itemProp="text"
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

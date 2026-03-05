// KnowHow Marketing Lab - Lead Capture + FAQ Section
// Grade 6 readability · Human-first · LLM-optimised FAQ schema
// FAQ answers written as complete, citable sentences for AI Overviews
// Internal links: /pricing, /resources, /about, /blog

import { useState } from 'react';
import { useLocation } from 'wouter';

const faqs = [
  {
    q: 'What is KnowHow Marketing Lab?',
    a: 'KnowHow Marketing Lab is a free online training hub for business owners and marketing teams. It was created by Pip Seymour and Phelan Lewis - two Canadian digital marketing agency owners with over 20 years of experience. The platform offers AI + SEO courses, 60+ free YouTube video lessons, and a paid VIP community on GoHighLevel for deeper training in SEO, Google Ads, GA4, and AI marketing.',
  },
  {
    q: 'Is the SEO course really free?',
    a: 'Yes - the KnowHow Marketing Lab free SEO course is completely free. There is no credit card required and no trial period. You get full access to all 5 course modules, including lessons on SEO fundamentals, setting up your SEO tools, keyword research, on-page SEO essentials, and Google Business Profile.',
  },
  {
    q: 'How do I get started for free?',
    a: 'The easiest free starting point is the free Power Hours on Zoom every Tuesday from 12–1pm Pacific — Pip answers real marketing questions live with no sign-up, no credit card, and no commitment. You can also join the Business Marketing Mixer Facebook group for ongoing community support. The free AI + SEO course and 60+ YouTube video lessons are also completely free.',
  },
  {
    q: 'What is The Lab?',
    a: 'The Lab is a paid membership at $29 per month, hosted on the GoHighLevel platform. It is the next step after the free resources. Members get weekly live Q&A every Thursday 12–1pm Pacific, a monthly deep-dive training session, homework assignments with fillable PDF worksheets, advanced courses on Google Ads and AI marketing, and access to a private community group with Pip and Phelan.',
  },
  {
    q: 'Who is this training for?',
    a: 'KnowHow Marketing Lab is designed for medium-sized businesses, marketing managers, and business owners who want to understand and control their own digital marketing. The training covers beginner through advanced topics, so you do not need any prior experience to get started.',
  },
  {
    q: 'What tools will I learn to use?',
    a: 'You will learn how to use Google Analytics 4 (GA4), Google Search Console, Google Tag Manager, Google Ads and Google Ads Editor, ChatGPT and AI agents for marketing, and GoHighLevel for marketing automation. All of these tools are free or have free versions.',
  },
  {
    q: 'How is KnowHow Marketing Lab different from other marketing courses?',
    a: 'KnowHow Marketing Lab focuses on data-driven methods - using real analytics tools like GA4 and Google Search Console to make decisions. The training does not teach link building. Instead, it focuses on content building, Generative Engine Optimisation (GEO), and AI-powered strategies. Everything taught is based on what Pip and Phelan actually do for their agency clients at Seymour Digital Media.',
  },
  {
    q: 'What is Generative Engine Optimisation (GEO)?',
    a: 'Generative Engine Optimisation (GEO) is the practice of optimising your website content so it gets cited by AI tools like ChatGPT, Google AI Overviews, and Perplexity. It is a core part of our SEO curriculum. The key is creating clear, well-structured content that fully answers questions - the same content that ranks well on Google also tends to get cited by AI systems.',
  },
];

export default function LeadCaptureSection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [, navigate] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Submit to GHL via external tracking
    try {
      if (typeof (window as any).GHLForm !== 'undefined') {
        (window as any).GHLForm.submit({ firstName: name, email });
      }
    } catch (_) {
      // Silent fail - redirect still happens
    }
    setSubmitted(true);
    navigate('/thank-you');
  };

  return (
    <>
      {/* Lead Capture Banner */}
      <section
        className="py-14 md:py-20 bg-[#0f2236]"
        aria-labelledby="lead-heading"
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span
              className="text-xs font-bold text-[#E98C28] uppercase tracking-widest"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Free Access · No Credit Card
            </span>
            <h2
              id="lead-heading"
              className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Ready to Learn? Start for Free Today.
            </h2>
            <p
              className="text-gray-300 text-lg mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Get instant access to the AI + SEO course - 5 modules, no credit card, no catch.
            </p>
            <p
              className="text-gray-400 text-sm mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Or join The Lab for weekly live Q&A, monthly training, and the full Google Ads course - all for $29/month.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 max-w-md mx-auto"
                aria-label="Free course sign-up form"
                noValidate
              >
                <label htmlFor="lead-name" className="sr-only">Your first name</label>
                <input
                  id="lead-name"
                  name="firstName"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your first name"
                  className="lead-input"
                  autoComplete="given-name"
                  style={{ fontSize: '16px', minHeight: '52px' }}
                />
                <label htmlFor="lead-email" className="sr-only">Your email address</label>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="lead-input"
                  required
                  autoComplete="email"
                  aria-required="true"
                  style={{ fontSize: '16px', minHeight: '52px' }}
                />
                <button
                  type="submit"
                  className="btn-primary justify-center text-base py-4 pulse-cta"
                  aria-label="Start the free KnowHow Marketing Lab SEO course"
                >
                  Start AI + SEO Course Now →
                </button>
                <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  We respect your privacy. No spam. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div
                className="bg-[#318599]/20 border border-[#318599] rounded-xl p-6 max-w-md mx-auto"
                role="status"
                aria-live="polite"
              >
                <p className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                   You are in! Welcome to KnowHow Marketing Lab.
                </p>
                <p className="text-gray-300 text-sm mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Your AI + SEO course is opening now. Check your email for your access link.
                </p>
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
          <div className="text-center mb-10">
            <span
              className="text-xs font-bold text-[#318599] uppercase tracking-widest"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Got Questions?
            </span>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Everything you need to know about KnowHow Marketing Lab.
            </p>
          </div>

          {/* Quick-nav links for AI crawlers and users */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href="/pricing"
              className="btn-outline text-sm py-2.5 px-4"
              aria-label="Compare free vs VIP community plans and pricing"
            >
              Compare Plans →
            </a>
            <a
              href="/resources"
              className="btn-outline text-sm py-2.5 px-4"
              aria-label="Browse free official Google documentation resources"
            >
              Free Resources →
            </a>
            <a
              href="/about"
              className="btn-outline text-sm py-2.5 px-4"
              aria-label="About Pip Seymour and Phelan Lewis - KnowHow Marketing Lab instructors"
            >
              About Us →
            </a>
            <a
              href="/blog"
              className="btn-outline text-sm py-2.5 px-4"
              aria-label="Read free digital marketing guides on the KnowHow Marketing Lab blog"
            >
              Read the Blog →
            </a>
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

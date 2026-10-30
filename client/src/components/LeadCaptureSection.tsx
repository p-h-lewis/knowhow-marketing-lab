// KnowHow Marketing Lab - Lead Capture + FAQ Section
// Grade 6 readability · Human-first · LLM-optimised FAQ schema
// FAQ answers written as complete, citable sentences for AI Overviews
// Internal links: /pricing, /resources, /about, /blog

import { useState } from 'react';
import { FREE_COURSE_URL } from '@/lib/ghlLinks';
import { FREE_COURSE_NAME, FREE_COURSE_SUMMARY } from '@/lib/freeCourse';

const faqs = [
  {
    q: 'What is KnowHow Marketing Lab?',
    a: 'KnowHow Marketing Lab is a free online training hub for business owners and marketing teams. It was created by Pip Seymour and Phelan Lewis - two Canadian digital marketing agency owners with 30+ years of combined experience. The platform offers AI + SEO courses, 60+ free YouTube video lessons, and a paid VIP community on GoHighLevel for deeper training in SEO, Google Ads, GA4, and AI marketing.',
  },
  {
    q: 'Is the free course really free?',
    a: `Yes. ${FREE_COURSE_SUMMARY} Live sessions, site reviews and the full course library are in The Lab.`,
  },
  {
    q: 'How do I get started for free?',
    a: 'The easiest free starting point is the Business Marketing Mixer Facebook group for ongoing community support. When you want live help, The Lab has a 14-day free trial with a live session every Tuesday, 12 to 1 pm Pacific. The free course, SEO Starter, and 60+ YouTube video lessons are also completely free.',
  },
  {
    q: 'What is The Lab?',
    a: 'The Lab is a paid membership at $29 CAD per month, hosted on the GoHighLevel platform. It is the next step after the free resources. Members get Tuesday Lab sessions (12 to 1 pm Pacific) where Pip and Phelan work through their real campaigns, ad accounts, and SEO issues live, hands-on help, not just Q&A. The first half of each session is teaching or a tip, then Q&A and live audits. Plus homework with fillable PDF worksheets, advanced courses on Google Ads and AI marketing, and access to a private community group.',
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
    a: 'KnowHow Marketing Lab focuses on data-driven methods - using real analytics tools like GA4 and Google Search Console to make decisions. The training does not teach link building. Instead, it focuses on content building, AI SEO (also called GEO), and AI-powered strategies. Everything taught is based on what Pip and Phelan actually do for their agency clients at Seymour Digital Media.',
  },
  {
    q: 'What is AI SEO (also called GEO)?',
    a: 'AI SEO (also called GEO) is the practice of optimizing your website content so it gets cited by AI tools like ChatGPT, Google AI Overviews, and Perplexity. It is a core part of our SEO curriculum. The key is creating clear, well-structured content that fully answers questions - the same content that ranks well on Google also tends to get cited by AI systems.',
  },
];

export default function LeadCaptureSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              Start with the free course.
            </h2>
            <p
              className="text-gray-300 text-lg mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {FREE_COURSE_NAME}
            </p>
            <p
              className="text-gray-300 text-base mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {FREE_COURSE_SUMMARY}
            </p>
            <a
              href={FREE_COURSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center text-base py-4 px-8"
              aria-label={`Start the free course: ${FREE_COURSE_NAME}`}
            >
              Start the Free Course →
            </a>
            <p className="text-xs text-gray-500 mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              You sign up with your name and email on the next page.
            </p>
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

// KnowHow Marketing Lab - Lead Capture + FAQ Section
// Grade 6 readability · Human-first · LLM-optimised FAQ schema
// FAQ answers written as complete, citable sentences for AI Overviews
// Internal links: /pricing, /resources, /about, /blog

import { useState } from 'react';

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
    a: 'The Lab is a paid membership at $29 per month, hosted on the GoHighLevel platform. It is the next step after the free resources. Members get Thursday Lab sessions (12–1pm Pacific) where Pip and Phelan work through their real campaigns, ad accounts, and SEO issues live — hands-on help, not just Q&A. Plus monthly deep-dive training, homework with fillable PDF worksheets, advanced courses on Google Ads and AI marketing, and access to a private community group.',
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

const CHALLENGES = [
  { id: 'seo', label: 'SEO & getting found on Google', icon: '🔍' },
  { id: 'ads', label: 'Google Ads & paid traffic', icon: '📢' },
  { id: 'analytics', label: 'Understanding my analytics', icon: '📊' },
  { id: 'ai', label: 'Using AI in my marketing', icon: '🤖' },
  { id: 'website', label: 'My website not converting', icon: '🌐' },
  { id: 'all', label: 'All of the above honestly', icon: '😅' },
];

export default function LeadCaptureSection() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [challenge, setChallenge] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // POST to GHL form submission endpoint
    // Form ID: l71tHQPMO7st6TFSPmo5 (KnowHow Free Course Opt In)
    // Location ID: Bk3wb95yNZ5UAEn0KG00
    try {
      await fetch(
        'https://services.leadconnectorhq.com/forms/submit',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formId: 'l71tHQPMO7st6TFSPmo5',
            locationId: 'Bk3wb95yNZ5UAEn0KG00',
            firstName: name,
            email,
            // Pass challenge as a custom field note
            message: `Biggest challenge: ${challenge}`,
          }),
        }
      );
    } catch (_) {
      // Silent fail — redirect still happens even if GHL is unreachable
    }
    setLoading(false);
    setSubmitted(true);
    // Redirect to the free course after a brief success flash
    setTimeout(() => {
      window.location.href = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce';
    }, 1800);
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
              Tell us what you are working on.
            </h2>
            <p
              className="text-gray-300 text-lg mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              We will match you with the right free training to get you moving in the next 20 minutes.
            </p>
            {/* Step indicator */}
            {!submitted && (
              <div className="flex items-center justify-center gap-2 mb-6">
                {[1, 2].map(s => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step >= s ? 'bg-[#E98C28] text-white' : 'bg-white/20 text-white/50'
                      }`}
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {s}
                    </div>
                    {s < 2 && <div className={`w-8 h-0.5 ${step > s ? 'bg-[#E98C28]' : 'bg-white/20'}`} />}
                  </div>
                ))}
              </div>
            )}

            {!submitted ? (
              <div className="max-w-md mx-auto">
                {/* Step 1: Challenge selector */}
                {step === 1 && (
                  <div>
                    <p className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      What is your biggest marketing challenge right now?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {CHALLENGES.map(c => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => { setChallenge(c.label); setStep(2); }}
                          className={`flex items-center gap-2.5 text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                            challenge === c.label
                              ? 'border-[#E98C28] bg-[#E98C28]/20 text-white'
                              : 'border-white/20 bg-white/10 text-white hover:border-[#E98C28]/60 hover:bg-white/15'
                          }`}
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          <span className="text-base flex-shrink-0" aria-hidden="true">{c.icon}</span>
                          <span>{c.label}</span>
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      We will tailor your free course access based on your answer.
                    </p>
                  </div>
                )}

                {/* Step 2: Name + email */}
                {step === 2 && (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3" aria-label="Free course sign-up form" noValidate>
                    <p className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Great choice. Where should we send your access?
                    </p>
                    <p className="text-gray-400 text-sm mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      You said: <span className="text-[#E98C28] font-medium">{challenge}</span>
                    </p>
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
                      disabled={loading}
                      className="btn-primary justify-center text-base py-4 pulse-cta disabled:opacity-70 disabled:cursor-not-allowed"
                      aria-label="Start the free KnowHow Marketing Lab SEO course"
                    >
                      {loading ? 'Setting up your access…' : 'Get Free Access Now →'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-gray-400 hover:text-gray-300 underline text-center"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      ← Change my answer
                    </button>
                    <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      We respect your privacy. No spam. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
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
                  Your free access is opening now. Check your email for your access link.
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

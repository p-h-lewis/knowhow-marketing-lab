// KnowHow Marketing Lab - Hero Section
// The Lab is the only paid offer and the only live session (Tuesdays 12 to 1 pm Pacific).
// Desktop: 2-col grid (copy left, image right). Mobile: stacked.
// Grade 6 readability · Human-first copy · LLM-optimised semantic structure

import { Link } from 'wouter';
import { LAB_TRIAL_URL } from '@/lib/ghlLinks';

export default function HeroSection() {
  return (
    <section
      className="pt-24 sm:pt-28 md:pt-32 pb-14 md:pb-24 overflow-hidden"
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
                14-day free trial · Then $29 CAD/mo · Cancel anytime
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
              You know how most business owners spend thousands on marketing courses and agencies and still can't tell if any of it is actually working? What we do is look at your actual website, ads, and content live every week so you leave each Tuesday session knowing exactly what to fix and why. In fact, we ran these sessions for two years and members kept showing up every single week.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={LAB_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-extrabold rounded-xl py-4 px-7 text-base sm:text-lg transition-all duration-200 shadow-md hover:shadow-lg pulse-cta"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="Start your 14-day free trial of The KnowHow Lab"
              >
                Start Free 14-Day Trial →
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-1.5 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-bold rounded-xl py-4 px-6 text-base transition-all duration-200"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="See what's included in The Lab"
              >
                See what's included →
              </Link>
            </div>

            {/* Member quote, social proof immediately below CTA */}
            <blockquote
              className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 mb-6 max-w-xl"
              aria-label="Member testimonial"
            >
              <div className="w-8 h-8 rounded-full bg-[#E98C28] text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5" aria-hidden="true">B</div>
              <div>
                <p className="text-sm text-gray-700 leading-relaxed italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  &ldquo;I felt totally ignorant before the course. After completing it I feel like I am an expert.&rdquo;
                </p>
                <footer className="text-xs text-gray-400 mt-1 not-italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <cite>Bob, Photographer, Lab Member</cite>
                </footer>
              </div>
            </blockquote>

            {/* Social proof micro-stats */}
            <div className="flex flex-wrap gap-4 sm:gap-8">
              {[
                { value: '$29 CAD/mo', label: 'The Lab, Monthly' },
                { value: '30+', label: 'Years Combined Experience' },
                { value: 'Tuesday', label: 'Live Lab Sessions' },
                { value: 'Cancel', label: 'Anytime, No Contracts' },
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100/60 w-full bg-[#faf8f4]">
              <picture>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/hero-zoom-v2_e0a6ccfe.jpg"
                  alt="A live KnowHow Marketing Lab session, Phelan and Pip working through real campaigns with members on Zoom"
                  width="2048"
                  height="1152"
                  className="w-full h-auto"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  itemProp="image"
                />
              </picture>
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2.5 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#fef3e2] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#E98C28]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Tuesday Lab, every week</p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>12 to 1 pm Pacific · Your real website and ads, live</p>
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

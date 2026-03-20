import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const recoveryLinks = [
  {
    href: "/",
    label: "AI + SEO Course",
    desc: "Start the 5-module AI + SEO course - no credit card needed.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: "/#videos",
    label: "Video Library",
    desc: "60+ free marketing videos - no sign-up required.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: "/blog",
    label: "Blog",
    desc: "Free guides on SEO, Google Ads, GA4, and AI marketing.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    href: "/pricing",
    label: "Community - $29/mo",
    desc: "Weekly live Q&A, AI marketing training, and private group.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function NotFound() {
  useSEO({
    title: "Page Not Found - KnowHow Marketing Lab",
    description: "The page you are looking for could not be found. Browse our AI + SEO course, video library, blog, or community.",
    canonical: "https://knowhowmarketinglab.com/404",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Page Not Found - KnowHow Marketing Lab",
            "url": "https://knowhowmarketinglab.com/404",
            "description": "The page you are looking for could not be found.",
            "inLanguage": "en",
            "isPartOf": { "@type": "WebSite", "name": "KnowHow Marketing Lab", "url": "https://knowhowmarketinglab.com" }
          })
        }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 flex items-center py-24">
        <div className="container max-w-3xl text-center">
          {/* Fun 404 illustration */}
          <div className="relative inline-flex flex-col items-center mb-8">
            {/* Animated magnifying glass looking for the page */}
            <div className="relative">
              <div
                className="text-8xl md:text-9xl font-extrabold select-none"
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  background: 'linear-gradient(135deg, #E98C28 0%, #318599 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                404
              </div>
              {/* Floating emoji */}
              <span
                className="absolute -top-4 -right-6 text-3xl"
                style={{ animation: 'bounce 2s infinite' }}
                aria-hidden="true"
              >
                
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Looks like this page has a higher bounce rate than your website
          </h1>
          <p className="text-gray-500 text-lg mb-3 max-w-lg mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            (We checked Google Analytics. It's gone.)
          </p>
          <p className="text-gray-400 text-sm mb-12 max-w-md mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            The page you're looking for may have moved or been removed. Here are some helpful places to start:
          </p>

          {/* Recovery links grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {recoveryLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-start gap-4 p-5 rounded-xl border-2 border-gray-100 hover:border-[#E98C28] hover:shadow-sm transition-all duration-200 text-left group"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#fef3e2] flex items-center justify-center text-[#E98C28] group-hover:bg-[#E98C28] group-hover:text-white transition-all duration-200">
                  {link.icon}
                </span>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{link.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#318599] hover:underline"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// KnowHow Marketing Lab - Podcast Page
// Monthly podcast about what's happening in SEO, Google Ads, and AI marketing
// Hosted on YouTube - no RSS feed needed
// Schema: PodcastSeries, ItemList, BreadcrumbList

import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { useSEO } from "@/hooks/useSEO";

const FREE_COURSE_URL = "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce";
const COMMUNITY_URL = "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home";
const YOUTUBE_PLAYLIST = "https://www.youtube.com/playlist?list=PL3NGUighqOX6JF-ImrO289qWbpsd7kuA4";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@KnowHowMarketingLab";

// Embed the playlist as a YouTube playlist embed
const PLAYLIST_EMBED = "https://www.youtube.com/embed/videoseries?list=PL3NGUighqOX6JF-ImrO289qWbpsd7kuA4";

const topics = [
  "What is actually working in SEO right now",
  "How AI is changing Google search and what to do about it",
  "Google Ads strategy for medium-sized businesses",
  "GA4 and analytics - what the data is telling us",
  "Real case studies from Seymour Digital Media clients",
  "Tools, updates, and what to ignore",
];

export default function Podcast() {
  useSEO({
    title: "KnowHow Marketing Lab Podcast - Monthly Marketing Insights",
    description: "The KnowHow Marketing Lab monthly podcast. Pip Seymour and Phelan Lewis discuss what is actually happening in SEO, Google Ads, and AI marketing. Free on YouTube.",
    canonical: "https://knowhowmarketinglab.com/podcast",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "url": "https://knowhowmarketinglab.com/podcast",
                "name": "KnowHow Marketing Lab Podcast",
                "description": "Monthly podcast by Pip Seymour and Phelan Lewis covering SEO, Google Ads, and AI marketing. Free on YouTube.",
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Podcast", "item": "https://knowhowmarketinglab.com/podcast" }
                  ]
                }
              },
              {
                "@type": "PodcastSeries",
                "name": "KnowHow Marketing Lab Podcast",
                "description": "A monthly podcast by Pip Seymour and Phelan Lewis of Seymour Digital Media. Each episode covers what is actually happening in SEO, Google Ads, and AI marketing — with practical advice for medium-sized businesses.",
                "url": "https://knowhowmarketinglab.com/podcast",
                "webFeed": YOUTUBE_PLAYLIST,
                "author": [
                  {
                    "@type": "Person",
                    "name": "Pip Seymour",
                    "url": "https://knowhowmarketinglab.com/about"
                  },
                  {
                    "@type": "Person",
                    "name": "Phelan Lewis",
                    "url": "https://knowhowmarketinglab.com/about"
                  }
                ],
                "publisher": {
                  "@type": "Organization",
                  "name": "KnowHow Marketing Lab",
                  "url": "https://knowhowmarketinglab.com"
                }
              }
            ]
          })
        }}
      />
      <AnnouncementBar />
      <Navbar />

      <main id="main-content">

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-[#0f2236] to-[#1a3a54]" aria-labelledby="podcast-heading">
          <div className="container max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E98C28] animate-pulse" aria-hidden="true"></span>
              <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Monthly Episode</span>
            </div>
            <h1
              id="podcast-heading"
              className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              The KnowHow Marketing Lab{" "}
              <span className="text-[#E98C28]">Podcast</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Every month, Pip Seymour and Phelan Lewis sit down to talk about what is actually happening in SEO, Google Ads, and AI marketing — no fluff, no hype, just honest analysis from two agency owners who are in it every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={YOUTUBE_PLAYLIST}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E98C28] text-white font-bold text-sm hover:bg-[#d47d1e] transition-all duration-200"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="Watch all podcast episodes on YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-white/30 text-white font-bold text-sm hover:border-white/60 transition-all duration-200"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="Subscribe to KnowHow Marketing Lab on YouTube"
              >
                Subscribe to Channel
              </a>
            </div>
          </div>
        </section>

        {/* Playlist embed */}
        <section className="py-16 bg-gray-50" aria-labelledby="episodes-heading">
          <div className="container max-w-4xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>All Episodes</span>
              <h2 id="episodes-heading" className="text-3xl font-extrabold text-gray-900 mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Watch the Full Playlist
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={PLAYLIST_EMBED}
                  title="KnowHow Marketing Lab Podcast - Full YouTube Playlist"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              New episodes drop monthly.{" "}
              <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">
                Subscribe on YouTube
              </a>{" "}
              so you never miss one.
            </p>
          </div>
        </section>

        {/* What we cover */}
        <section className="py-16 bg-white" aria-labelledby="topics-heading">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What We Cover</span>
                <h2 id="topics-heading" className="text-3xl font-extrabold text-gray-900 mt-2 mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Honest talk about what is working right now
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Each episode is a real conversation between two agency owners who spend their days working on SEO, Google Ads, and AI marketing for medium-sized businesses. No sponsors. No scripts. Just what we are actually seeing.
                </p>
                <ul className="space-y-3" aria-label="Podcast topics">
                  {topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#e6f4f7] flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                        <svg className="w-3 h-3 text-[#318599]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </span>
                      <span className="text-gray-700 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0f2236] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#E98C28]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#E98C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Your hosts</p>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>Seymour Digital Media</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Pip Seymour</p>
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      20+ years in digital marketing. Specialises in SEO strategy, Google Analytics, and content marketing for medium-sized businesses.
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Phelan Lewis</p>
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Google Ads specialist and data analyst. Builds performance-driven campaigns and teaches businesses how to read their own marketing data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50 border-t border-gray-100" aria-labelledby="podcast-cta-heading">
          <div className="container max-w-3xl text-center">
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Go Deeper</span>
            <h2 id="podcast-cta-heading" className="text-3xl font-extrabold text-gray-900 mt-2 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Want to learn alongside us every week?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The podcast is monthly. The Lab is weekly — live Q&amp;A every Thursday, monthly deep-dive training, and a private group of marketers doing the same work you are. All for $29/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pulse-cta"
                aria-label="Join The Lab for $29 per month"
              >
                Join The Lab - $29/mo →
              </a>
              <a
                href={FREE_COURSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="Start the free AI + SEO course"
              >
                Start Free Course
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>Cancel anytime · No contracts · Powered by GoHighLevel</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

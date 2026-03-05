// KnowHow Marketing Lab - Video Library
// Full YouTube video library with category filters and modal player
// Structured for LLM/AI indexing with semantic HTML and schema markup

import { useState, useCallback, useEffect } from 'react';
import { videos, categoryLabels, getYouTubeThumbnail, getYouTubeEmbedUrl, type VideoCategory } from '@/lib/videos';

type FilterKey = VideoCategory | 'all' | 'featured';

const CATEGORIES: Array<{ key: FilterKey; label: string }> = [
  { key: 'featured', label: '★ Start Here' },
  { key: 'all', label: 'All Videos' },
  { key: 'seo', label: 'SEO' },
  { key: 'google-ads', label: 'Google Ads' },
  { key: 'analytics', label: 'Analytics & GA4' },
  { key: 'ai', label: 'AI Marketing' },
  { key: 'live', label: 'Live Classes' },
];

const INITIAL_SHOW = 6;

export default function VideoLibrary() {
  const [activeCategory, setActiveCategory] = useState<FilterKey>('featured');
  const [showAll, setShowAll] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState('');

  const filtered =
    activeCategory === 'featured'
      ? videos.filter(v => v.featured)
      : activeCategory === 'all'
        ? videos
        : videos.filter(v => v.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);

  const openVideo = useCallback((id: string, title: string) => {
    setActiveVideo(id);
    setActiveTitle(title);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeVideo = useCallback(() => {
    setActiveVideo(null);
    setActiveTitle('');
    document.body.style.overflow = '';
  }, []);

  // Close modal on Escape key (WCAG 2.1.2 - No Keyboard Trap)
  useEffect(() => {
    if (!activeVideo) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeVideo(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [activeVideo, closeVideo]);

  const tagClass = (cat: VideoCategory) => {
    const map: Record<VideoCategory, string> = {
      seo: 'tag-seo',
      'google-ads': 'tag-google-ads',
      analytics: 'tag-analytics',
      ai: 'tag-ai',
      live: 'tag-live',
      shorts: 'tag-shorts',
    };
    return `tag ${map[cat]}`;
  };

  return (
    <section
      id="videos"
      className="py-20 bg-white"
      aria-labelledby="videos-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Free Video Library
          </span>
          <h2
            id="videos-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            itemProp="name"
          >
            60+ Free Marketing Lessons - Start Learning Today
          </h2>
          <p className="text-gray-500 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Every video is free. No sign-up required to watch. Want live Q&amp;A and community? <a href="/power-hours" className="text-[#1877F2] font-semibold hover:underline">Join free Power Hours →</a> or <a href="#community" className="text-[#E98C28] font-semibold hover:underline">Join The Lab ($29/mo) →</a>
          </p>
        </div>

        {/* Category Filters - horizontal scroll on mobile, wrap on desktop */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto mb-8">
        <div className="flex gap-2 pb-1 sm:flex-wrap" role="tablist" aria-label="Filter videos by category" style={{ minWidth: 'max-content' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCategory === cat.key}
              onClick={() => { setActiveCategory(cat.key); setShowAll(false); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 border ${
                activeCategory === cat.key
                  ? cat.key === 'featured'
                    ? 'bg-[#318599] text-white border-[#318599] shadow-sm'
                    : 'bg-[#E98C28] text-white border-[#E98C28] shadow-sm'
                  : cat.key === 'featured'
                    ? 'bg-[#318599]/10 text-[#318599] border-[#318599]/30 hover:bg-[#318599] hover:text-white hover:border-[#318599]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#E98C28] hover:text-[#E98C28]'
              }`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-70">
                ({cat.key === 'featured'
                  ? videos.filter(v => v.featured).length
                  : cat.key === 'all'
                    ? videos.length
                    : videos.filter(v => v.category === cat.key).length})
              </span>
            </button>
          ))}
        </div>
        </div>

        {/* Video Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5"
          role="tabpanel"
          aria-label={`${activeCategory === 'featured' ? 'Start Here' : activeCategory === 'all' ? 'All' : categoryLabels[activeCategory as VideoCategory]} videos`}
        >
          {displayed.map((video, idx) => (
            <article
              key={video.id}
              className="video-card group"
              onClick={() => openVideo(video.id, video.title)}
              onKeyDown={e => e.key === 'Enter' && openVideo(video.id, video.title)}
              tabIndex={0}
              role="button"
              aria-label={`Watch: ${video.title}`}
              itemScope
              itemType="https://schema.org/VideoObject"
              itemProp="itemListElement"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img
                  src={getYouTubeThumbnail(video.id)}
                  alt={`${video.title} - KnowHow Marketing Lab free tutorial on YouTube`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading={idx < 4 ? 'eager' : 'lazy'}
                  decoding={idx < 4 ? 'sync' : 'async'}
                  width="320"
                  height="180"
                  itemProp="thumbnailUrl"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#E98C28] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg scale-90 group-hover:scale-100">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-2 left-2">
                  <span className={tagClass(video.category)} aria-label={`Category: ${categoryLabels[video.category]}`}>
                    {categoryLabels[video.category]}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4">
                <h3
                  className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#E98C28] transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  itemProp="name"
                >
                  {video.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                    <path d="M14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                  </svg>
                  KnowHow Marketing Lab
                </p>
                <meta itemProp="uploadDate" content="2024-01-01" />
                <meta itemProp="url" content={video.url} />
              </div>
            </article>
          ))}
        </div>

        {/* Show More / Load All */}
        {filtered.length > INITIAL_SHOW && (
          <div className="mt-10 text-center">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="btn-outline"
                aria-label={`Show all ${filtered.length} videos`}
              >
                Show All {filtered.length} Videos ↓
              </button>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <p className="text-gray-500 text-sm">
                  Showing all {filtered.length} videos. Want more? New videos added weekly.
                </p>
                <a
                  href="https://www.youtube.com/@knowhowmarketinglab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                  aria-label="Subscribe to KnowHow Marketing Lab on YouTube"
                >
                  Subscribe on YouTube →
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Conversion Strip — The Lab primary, Facebook group secondary */}
      <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#1a3a4a] to-[#0f2530] px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xs font-bold text-[#E98C28] uppercase tracking-widest mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Want live Q&amp;A on these topics?</p>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Take it further in The Lab</h3>
          <p className="text-gray-300 text-sm max-w-md" style={{ fontFamily: 'DM Sans, sans-serif' }}>Weekly live Q&amp;A every Thursday, Google Ads &amp; SEO courses, AI tools, and a private community. All for $29/mo.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
          <a
            href="/community"
            className="inline-flex items-center gap-2 bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl py-3 px-6 text-sm transition-all duration-200 shadow-md whitespace-nowrap"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            aria-label="Join The Lab for $29 per month"
          >
            Join The Lab — $29/mo →
          </a>
          <a
            href="https://www.facebook.com/groups/businessmarketingmixer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl py-3 px-5 text-sm transition-all duration-200 whitespace-nowrap border border-white/20"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            aria-label="Join the free Business Marketing Mixer Facebook group"
          >
            Free Facebook Group →
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Playing: ${activeTitle}`}
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
              <p className="text-white text-sm font-semibold truncate max-w-[80%]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {activeTitle}
              </p>
              <button
                onClick={closeVideo}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded"
                aria-label="Close video player"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={getYouTubeEmbedUrl(activeVideo)}
                title={activeTitle}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            {/* CTA below video */}
            <div className="bg-gray-900 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-gray-300 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Start free with Power Hours, or get the full experience in The Lab.
              </p>
              <a
                href="/community"
                className="btn-primary text-sm py-2 px-4 whitespace-nowrap"
                onClick={closeVideo}
              >
                Free or $29/mo — See options →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

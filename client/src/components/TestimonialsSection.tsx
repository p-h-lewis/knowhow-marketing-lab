// KnowHow Marketing Lab - Testimonials Section
// Video testimonials (YouTube embeds) + text quotes from real students
// Schema: Review, AggregateRating
// Internal links: → /pricing, → /#free-course

import { useState } from 'react';

const videoTestimonials = [
  {
    id: 'PBQG3KoJVQg',
    title: 'Why did you take the KnowHow Marketing Lab SEO course?',
    thumbnail: 'https://img.youtube.com/vi/PBQG3KoJVQg/hqdefault.jpg',
    label: 'Why did you take this course?',
  },
  {
    id: 'g6SZeCKQljI',
    title: 'How do you feel after completing the KnowHow Marketing Lab course?',
    thumbnail: 'https://img.youtube.com/vi/g6SZeCKQljI/hqdefault.jpg',
    label: 'How do you feel after the course?',
  },
];

const textTestimonials = [
  {
    quote: 'I cannot recommend Seymour Digital Media Marketing enough! They were instrumental in helping me with my Google Business account. Pip was absolutely amazing — super knowledgeable and always willing to go the extra mile. Their expertise and attention to detail were evident every step of the way.',
    name: 'Jaime Hall',
    role: 'Business Owner',
    company: 'Google Review ★★★★★',
    initial: 'J',
    color: '#E98C28',
    rating: 5,
  },
  {
    quote: 'I had very little knowledge to improve our SEO, especially with everything shifting in the world of AI, and they helped us improve 2 sites. Our traffic is up, our impressions are up, and we finally show up on page one of search results!',
    name: 'Eli Marentette',
    role: 'Business Owner',
    company: 'Google Review ★★★★★',
    initial: 'E',
    color: '#318599',
    rating: 5,
  },
  {
    quote: 'We\'ve worked with Seymour Digital Media for many years. They support us with website help, SEO, Google Ads, local Google optimization, and e-commerce — all within a specialty industry that requires real expertise. The work truly speaks for itself.',
    name: 'Lesley McHale',
    role: 'Business Owner',
    company: 'Google Review ★★★★★',
    initial: 'L',
    color: '#1B3B4F',
    rating: 5,
  },
  {
    quote: 'The team at Seymour Digital are unlike any other marketing team we\'ve connected with. They have had a serious impact on our mental health group practice — helping us get our therapists fully booked and expand our reach within the community.',
    name: 'Rysa Koch',
    role: 'Mental Health Practice',
    company: 'Google Review ★★★★★',
    initial: 'R',
    color: '#E98C28',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#E98C28]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState('');

  const openVideo = (id: string, title: string) => {
    setActiveVideo(id);
    setActiveTitle(title);
  };

  const closeVideo = () => {
    setActiveVideo(null);
    setActiveTitle('');
  };

  return (
    <section
      id="testimonials"
      className="py-14 md:py-20 bg-gray-50 border-t border-gray-100"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Aggregate Rating schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "KnowHow Marketing Lab AI + SEO Course",
            "url": "https://knowhowmarketinglab.com/",
            "provider": {
              "@type": "Organization",
              "name": "KnowHow Marketing Lab",
              "url": "https://knowhowmarketinglab.com"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "79",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": textTestimonials.map(t => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": t.name },
              "reviewBody": t.quote,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": "5"
              }
            }))
          })
        }}
      />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold text-[#E98C28] uppercase tracking-widest"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Real Clients. Real Results.
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Business owners and marketing professionals across Canada — in their own words. Based on 79 Google reviews.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-14 max-w-3xl mx-auto">
          {videoTestimonials.map(v => (
            <button
              key={v.id}
              onClick={() => openVideo(v.id, v.title)}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 hover:border-[#E98C28] transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E98C28]"
              aria-label={`Play video testimonial: ${v.label}`}
            >
              <div className="relative aspect-video bg-gray-100">
                <img
                  src={v.thumbnail}
                  alt={`Video testimonial thumbnail - ${v.label} - KnowHow Marketing Lab student review`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="480"
                  height="270"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#E98C28] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-white text-left">
                <p className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {v.label}
                </p>
                <p className="text-xs text-[#318599] mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  KnowHow Marketing Lab Student
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Text Testimonials Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          itemProp="itemListElement"
        >
          {textTestimonials.map((t, i) => (
            <article
              key={t.name}
              className="card-base p-6 flex flex-col gap-4"
              aria-label={`Testimonial from ${t.name}, ${t.role}`}
              itemScope
              itemType="https://schema.org/Review"
              itemProp="item"
            >
              <StarRating count={t.rating} />
              <blockquote
                className="text-gray-700 text-sm leading-relaxed flex-1"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                itemProp="reviewBody"
              >
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.color, fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-hidden="true"
                >
                  {t.initial}
                </div>
                <div>
                  <p
                    className="text-sm font-bold text-gray-900"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    itemProp="author"
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {t.role}
                  </p>
                  {'company' in t && (
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {(t as any).company}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA below testimonials */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#free-course"
              className="btn-primary"
              aria-label="Start AI + SEO Course"
            >
              Start AI + SEO Course →
            </a>
            <a
              href="/pricing"
              className="btn-outline"
              aria-label="View Pricing"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Playing testimonial: ${activeTitle}`}
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
              <p className="text-white text-sm font-semibold truncate max-w-[80%]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {activeTitle}
              </p>
              <button
                onClick={closeVideo}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded"
                aria-label="Close video testimonial"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title={activeTitle}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="bg-gray-900 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-gray-300 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Ready to get the same results?
              </p>
              <a
                href="#free-course"
                className="btn-primary text-sm py-2 px-4 whitespace-nowrap"
                onClick={closeVideo}
                aria-label="Start AI + SEO Course"
              >
                Start AI + SEO Course →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

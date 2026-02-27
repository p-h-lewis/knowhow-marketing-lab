// KnowHow Marketing Lab — About Section
// Builds trust with instructor bios and agency credentials

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-white"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              About KnowHow Marketing Lab
            </span>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              itemProp="name"
            >
              Real Agency Experience. Real Results.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="description">
              KnowHow Marketing Lab was built by <strong>Pip Seymour</strong> and <strong>Phelan Lewis</strong> — two digital marketing veterans with over 20 years of combined agency experience. We've managed millions in Google Ads spend, ranked hundreds of businesses on Google, and built data-driven marketing strategies for medium-sized businesses across North America.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              We created KnowHow Marketing Lab because we believe every business deserves access to the same strategies that enterprise brands pay agencies six figures for. Our approach is data-first, jargon-free, and always actionable.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="/about"
                className="btn-outline text-sm py-2.5 px-4"
                aria-label="Learn more about Pip Seymour and Phelan Lewis"
              >
                Meet the Team →
              </a>
              <a
                href="https://seymourdigitalmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#318599] hover:underline py-2.5"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="Visit Seymour Digital Media agency website"
              >
                Seymour Digital Media ↗
              </a>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '20+ Years', sub: 'Agency Experience' },
                { label: 'GA4 + GSC', sub: 'Data-Driven Methods' },
                { label: 'Google Ads', sub: 'Certified Specialists' },
                { label: 'AI-First', sub: 'Modern Strategies' },
              ].map(item => (
                <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="font-extrabold text-[#E98C28] text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.label}</p>
                  <p className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Instructor cards */}
          <div className="flex flex-col gap-5">
            {[
              {
                name: 'Pip Seymour',
                role: 'SEO & Content Strategy Lead',
                bio: 'Pip brings 20+ years of SEO and digital marketing agency experience. Specializes in data-driven SEO, Google Search Console, GA4, and Generative Engine Optimization (GEO) for medium-sized businesses.',
                initials: 'PS',
                color: '#E98C28',
              },
              {
                name: 'Phelan Lewis',
                role: 'Google Ads & Analytics Lead',
                bio: 'Phelan is a Google Ads specialist with deep expertise in campaign strategy, Google Ads Editor, Tag Manager, and AI-powered marketing automation. He\'s managed millions in ad spend across multiple industries.',
                initials: 'PL',
                color: '#318599',
              },
            ].map(instructor => (
              <div
                key={instructor.name}
                className="flex gap-5 bg-gray-50 rounded-2xl p-5 border border-gray-100"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0"
                  style={{ background: instructor.color, fontFamily: 'Space Grotesk, sans-serif' }}
                  aria-hidden="true"
                >
                  {instructor.initials}
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 mb-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="name">
                    {instructor.name}
                  </h3>
                  <p className="text-xs font-semibold mb-2" style={{ color: instructor.color, fontFamily: 'DM Sans, sans-serif' }} itemProp="jobTitle">
                    {instructor.role}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="description">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            ))}

            {/* YouTube CTA */}
            <a
              href="https://www.youtube.com/@knowhowmarketinglab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#fef3e2] border border-[#f5c87a] rounded-2xl p-5 hover:shadow-md transition-all duration-200 group"
              aria-label="Subscribe to KnowHow Marketing Lab on YouTube"
            >
              <div className="w-12 h-12 rounded-full bg-[#E98C28] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 group-hover:text-[#E98C28] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Subscribe on YouTube
                </p>
                <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  @knowhowmarketinglab · New videos weekly
                </p>
              </div>
              <svg className="w-5 h-5 text-[#E98C28] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

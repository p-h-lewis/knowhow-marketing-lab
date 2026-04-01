import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

const POST_CONTENT = `<h2 id="industries-charge-industry-rates"><br>Industries charge - Industry Rates</h2>

<p><strong>Hourly Rates:</strong> <a href="https://seymourdigitalmedia.com/services/professional-google-ads-consulting-service/">Google Ads management services </a>typically range from $75 to $200 per hour, depending on the agency’s experience and expertise.</p>

<p><strong>Flat Monthly Fee:</strong> Many agencies offer flat monthly fees, which can range from $1,500 to $5,000 or more, depending on the level of service and the size of the ad spend.</p>

<h2 id="ad-spend">Ad Spend</h2>

<p>The management fee is often correlated with the ad spend. For instance, it’s common for agencies to charge 10-20% of the monthly ad budget. For example, if the ad spend is $10,000 per month, the management fee might range from $1,000 to $2,000.</p>

<h2 id="customization-and-expertise">Customization and Expertise</h2>

<p>Given the high level of customization, including advanced targeting, <a href="https://seymourdigitalmedia.com/remarketing-retargeting/">retargeting</a>, and comprehensive reporting, fees could be on the higher end, reflecting the expertise required.</p>

<h2 id="estimated-cost">Estimated Cost</h2>

<p><strong>For a comprehensive plans:</strong> A fair monthly management fee might range from <strong>$3,000 to $5,000</strong>.</p>

<p><strong>Higher-end services:</strong> If the ad spend is significant (e.g., $20,000+ per month) and the strategy involves highly sophisticated targeting and segmentation, the fee could be <strong>$5,000 to $7,500</strong> or more.</p>

<h2 id="conclusion">Conclusion</h2>

<p>Considering the detailed and customised approach outlined, you should expect to invest in the higher end of the spectrum, likely <strong>$4,000 to $6,000 per month</strong> for comprehensive Google Ads management. </p>

<p>This investment aligns with the strategic objectives of scaling marketing efforts and achieving significant growth through targeted and effective digital advertising.</p>

<h2 id="contact-us">Contact Us</h2>

<div class="wp-block-contact-form-7-contact-form-selector">[contact-form-7 id="5c430e5" title="Contact form 1"]</div>

<style>
html {
scroll-behavior: smooth;
}
</style>`;

export default function PostHowPeopleChargeForGoogleAds() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How People Charge for Google Ads",
  "description": "Industries charge - Industry Rates Hourly Rates: Google Ads management services typically range from $75 to $200 per hour, depending on the agency\u2019s exp...",
  "datePublished": "2024-12-02",
  "dateModified": "2024-12-02",
  "author": {
    "@type": "Person",
    "name": "Pip Seymour",
    "url": "https://knowhowmarketinglab.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "KnowHow Marketing Lab",
    "url": "https://knowhowmarketinglab.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/how-people-charge-google-ads-hero-GqsS4RrbwvrvER2iWPgbq2.webp"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://knowhowmarketinglab.com/how-people-charge-for-google-ads/"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/how-people-charge-google-ads-hero-GqsS4RrbwvrvER2iWPgbq2.webp"
  }
});
    document.head.appendChild(script);
    document.title = 'How People Charge for Google Ads | KnowHow Marketing Lab';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Industries charge - Industry Rates Hourly Rates: Google Ads management services typically range from $75 to $200 per hour, depending on the agency’s exp...');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/blog/how-people-charge-for-google-ads');
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-how-people-charge-W6Hkfogc4VrYAKz36BrC3M.png');
    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (ogImageAlt) ogImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: How People Charge for Google Ads Management');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-how-people-charge-W6Hkfogc4VrYAKz36BrC3M.png');
    const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (twitterImageAlt) twitterImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: How People Charge for Google Ads Management');

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/"},
        {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://knowhowmarketinglab.com/blog"},
        {"@type": "ListItem", "position": 3, "name": "How People Charge for Google Ads", "item": "https://knowhowmarketinglab.com/how-people-charge-for-google-ads"}
      ]
    });
    document.head.appendChild(breadcrumbScript);
    return () => { document.head.removeChild(script); document.head.removeChild(breadcrumbScript); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ReadingProgressBar />
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-[#318599]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#318599]">Blog</Link>
            <span>/</span>
            <span className="text-slate-700 truncate">How People Charge for Google Ads</span>
          </nav>
          {/* Category + Date */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#318599' }}>
              websites &amp; SEO
            </span>
            <time className="text-sm text-slate-500" dateTime="2024-12-02">December 02, 2024</time>
          </div>
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
            How People Charge for Google Ads
          </h1>
          {/* Author */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-slate-200">
            <div className="w-10 h-10 rounded-full bg-[#318599] flex items-center justify-center text-white font-bold text-sm">PS</div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Pip Seymour</p>
              <p className="text-xs text-slate-500">KnowHow Marketing Lab</p>
            </div>
          </div>

        <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl mb-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/how-people-charge-google-ads-hero-GqsS4RrbwvrvER2iWPgbq2.webp"
            alt="How People Charge for Google Ads"
            className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Table of Contents */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">In This Article</h2>
          <ol className="list-decimal list-inside space-y-1.5">
              <li key="industries-charge-industry-rates"><a href="#industries-charge-industry-rates" className="text-[#318599] hover:underline text-sm">Industries charge - Industry Rates</a></li>
              <li key="ad-spend"><a href="#ad-spend" className="text-[#318599] hover:underline text-sm">Ad Spend</a></li>
              <li key="customization-and-expertise"><a href="#customization-and-expertise" className="text-[#318599] hover:underline text-sm">Customization and Expertise</a></li>
              <li key="estimated-cost"><a href="#estimated-cost" className="text-[#318599] hover:underline text-sm">Estimated Cost</a></li>
              <li key="conclusion"><a href="#conclusion" className="text-[#318599] hover:underline text-sm">Conclusion</a></li>
              <li key="contact-us"><a href="#contact-us" className="text-[#318599] hover:underline text-sm">Contact Us</a></li>
          </ol>
        </nav>
          {/* Article Content */}
          <div
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-[#318599] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-li:mb-1 prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-[#318599] prose-blockquote:text-slate-600"
            dangerouslySetInnerHTML={{ __html: POST_CONTENT }}
          />
          {/* CTA - internal link to Google Ads course */}
          <div className="mt-16 bg-gradient-to-br from-[#E98C28] to-[#4F37D8] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Want to go deeper on Google Ads?</h2>
            <p className="text-white/80 mb-6">Join the AI-Powered Google Ads Bootcamp - free course with live monthly training, community support, and expert Q&amp;A every Thursday.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/courses/google-ads" className="inline-block bg-white text-[#E98C28] font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition-colors">Start the Free Google Ads Bootcamp →</a>
              <a href="/pricing" className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-colors">Join The Lab - $29/mo</a>
            </div>
          </div>
                    {/* Back to blog */}
          <div className="mt-10 text-center">
            <Link href="/blog" className="text-[#318599] hover:underline text-sm font-medium">Back to all articles</Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
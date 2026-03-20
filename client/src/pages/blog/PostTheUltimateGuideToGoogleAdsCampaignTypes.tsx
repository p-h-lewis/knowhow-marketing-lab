import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

const POST_CONTENT = `<p>Author: Know How Marketing Lab & Manus AI</p>

<p>Published: December 27, 2025</p>

<p>Category: Google Ads Strategy</p>

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/nzTa2wJEN9k
</div></figure>

<h2 id="the-single-most-important-decision-you-ll-make">The single most important decision you'll make</h2>

<p>Choosing the right Google Ads campaign type is the single most important decision you'll make when setting up your account. Pick the wrong one, and you could burn through your budget with zero results. Pick the right one, and you unlock scalable growth.</p>

<p>But Google changes the rules constantly. In 2025, the landscape looks completely different than it did just a few years ago. Discovery Ads are gone (replaced by Demand Gen). Performance Max has become the default growth engine. And AI is now driving almost every placement decision.</p>

<p>In this guide, we'll break down every active Google Ads campaign type, when to use it, and how to choose the right strategy for your business. All information is backed by official Google Ads documentation.</p>

<h2 id="1-performance-max-pmax">1. Performance Max (PMax)</h2>

<figure class="wp-block-image size-large"><img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-ads-campaign-types-hero-VUBtCKb9yU3ECyDFSmvqzw.webp" alt="Performance Max campaign overview showing connections to Search, YouTube, and Maps" class="wp-image-8932"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>The "Do It All" AI Powerhouse</p>

<p>Performance Max is Google's goal-based campaign type that allows performance advertisers to access all of their Google Ads inventory from a single campaign. It uses AI to optimize your budget and bids across every channel in real-time.</p>

<h3 class="wp-block-heading" id="h-where-ads-appear">Where Ads Appear:</h3>

<ul class="wp-block-list">
<li>Search</li>

<li>YouTube</li>

<li>Display</li>

<li>Discover</li>

<li>Gmail</li>

<li>Maps</li>
</ul>

<h3 class="wp-block-heading" id="h-best-for">Best For:</h3>

<ul class="wp-block-list">
<li>Automated Growth: Advertisers who want to leverage AI to find conversions anywhere.</li>

<li>Multi-Channel Reach: Businesses that want to be everywhere without managing 6 different campaigns.</li>

<li>Conversion Focus: Driving sales, leads, or local store visits.</li>
</ul>

<p>Pro Tip: PMax works best when you feed it high-quality audience signals (like your customer lists) and give it plenty of creative assets (images, videos, headlines) to test.</p>

<h2 id="2-demand-gen">2. Demand Gen</h2>

<figure class="wp-block-image size-large"><img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-ads-campaign-types-hero-VUBtCKb9yU3ECyDFSmvqzw.webp" alt="" class="wp-image-8933"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>The Social-First Engagement Engine</p>

<p>Replacing Discovery Ads, Demand Gen is designed for the modern, social-media-savvy consumer. It focuses on driving engagement and action on Google's most visual and immersive surfaces. Unlike its predecessor, it supports video assets (including Shorts) and offers flexible bidding strategies.</p>

<h3 class="wp-block-heading" id="h-where-ads-appear-0">Where Ads Appear:</h3>

<ul class="wp-block-list">
<li>YouTube (In-Stream, Shorts, Feed)</li>

<li>Discover Feed</li>

<li>Gmail</li>
</ul>

<h3 class="wp-block-heading" id="h-best-for-0">Best For:</h3>

<ul class="wp-block-list">
<li>Brand Engagement: Capturing attention when users are in a "discovery" mindset</li>

<li>Social-Style Creative: Leveraging your best social media videos and images </li>

<li>Finding New Audiences: Using "Lookalike segments" to find people similar to your best customers</li>
</ul>

<h2 id="3-search-campaigns">3. Search Campaigns</h2>

<figure class="wp-block-image size-large"><img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-ads-campaign-types-hero-VUBtCKb9yU3ECyDFSmvqzw.webp" alt="" class="wp-image-8934"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>The High-Intent Foundation</p>

<p>Search campaigns are the classic "text ads" you see at the top of Google search results. They remain the most effective way to capture high-intent traffic people who are actively looking for exactly what you offer right now</p>

<h3 class="wp-block-heading" id="h-where-ads-appear-1">Where Ads Appear:</h3>

<ul class="wp-block-list">
<li>Google Search Results</li>

<li>Google Search Partners (optional)</li>
</ul>

<h3 class="wp-block-heading" id="h-best-for-1">Best For:</h3>

<ul class="wp-block-list">
<li>Direct Sales & Leads: Capturing users ready to buy.</li>

<li>Specific Keywords: Targeting exact problems or solutions (e.g., "emergency plumber near me").</li>

<li>Tight Budget Control: You only pay when someone clicks.</li>
</ul>

<h2 id="4-shopping-campaigns">4. Shopping Campaigns</h2>

<figure class="wp-block-image size-large"><img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-ads-campaign-types-hero-VUBtCKb9yU3ECyDFSmvqzw.webp" alt="" class="wp-image-8935"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>The E-Commerce Essential</p>

<p>If you sell physical products, Shopping campaigns are non-negotiable. They display your product photo, title, price, and store name directly in the search results, often before text ads.</p>

<h3 class="wp-block-heading" id="h-where-ads-appear-2">Where Ads Appear:</h3>

<ul class="wp-block-list">
<li>Google Shopping Tab</li>

<li>Google Search Results (Product Listings)</li>

<li>Google Images</li>

<li>Google Display Network</li>
</ul>

<h3 class="wp-block-heading" id="h-best-for-2">Best For:</h3>

<ul class="wp-block-list">
<li>E-Commerce Stores: Retailers selling physical goods</li>

<li>Visual Selling: Products where price and appearance are key decision factors.</li>

<li>High ROAS: Often delivers better return on ad spend than text ads for retail.</li>
</ul>

<h2 id="5-video-campaigns">5. Video Campaigns</h2>

<figure class="wp-block-image size-large"><img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-ads-campaign-types-hero-VUBtCKb9yU3ECyDFSmvqzw.webp" alt="" class="wp-image-8936"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>The Storytelling Medium</p>

<p>Video campaigns allow you to reach potential customers on YouTube and across the web. With over 2 billion logged-in monthly users, YouTube is a massive engine for both awareness and conversion .</p>

<h3 class="wp-block-heading" id="h-where-ads-appear-3">Where Ads Appear:</h3>

<ul class="wp-block-list">
<li>YouTube Videos (Skippable, Non-skippable, Bumper)</li>

<li>YouTube Search Results</li>

<li>Video Partners on the Display Network</li>
</ul>

<h3 class="wp-block-heading" id="h-best-for-3">Best For:</h3>

<ul class="wp-block-list">
<li>Brand Awareness: Reaching a massive audience at a low cost per view.</li>

<li>Complex Products: Explaining how your product works.</li>

<li>Retargeting: Showing ads to people who viewed your specific videos.</li>
</ul>

<h2 id="6-display-campaigns">6. Display Campaigns</h2>

<figure class="wp-block-image size-large"><img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-ads-campaign-types-hero-VUBtCKb9yU3ECyDFSmvqzw.webp" alt="Google Display Network campaign visualization for brand awareness and retargeting" class="wp-image-8937"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>The Awareness Builder</p>

<p>Display campaigns serve visual banner ads across the Google Display Network (GDN), which reaches over 90% of internet users worldwide. These are "push" ads interrupting users while they browse other content.</p>

<h3 class="wp-block-heading" id="h-where-ads-appear-4">Where Ads Appear:</h3>

<ul class="wp-block-list">
<li>Millions of websites, news pages, and blogs</li>

<li>Apps</li>
</ul>

<h3 class="wp-block-heading" id="h-best-for-4">Best For:</h3>

<ul class="wp-block-list">
<li>Top-of-Funnel Awareness: Getting your brand seen by millions.</li>

<li>Retargeting: "Following" users who visited your site but didn't convert.</li>

<li>Visual Branding: Keeping your brand top-of-mind.</li>
</ul>

<h2 id="7-app-campaigns">7. App Campaigns</h2>

<figure class="wp-block-image size-large"><img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-ads-campaign-types-hero-VUBtCKb9yU3ECyDFSmvqzw.webp" alt="" class="wp-image-8938"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>The Mobile Growth Engine</p>

<p>App campaigns are automated specifically to drive app installs or in-app actions. You provide text, images, and videos, and Google's AI tests different combinations across its networks.</p>

<h3 class="wp-block-heading" id="h-where-ads-appear-5">Where Ads Appear:</h3>

<ul class="wp-block-list">
<li>Google Search</li>

<li>Google Play</li>

<li>YouTube</li>

<li>Google Display Network</li>
</ul>

<h3 class="wp-block-heading" id="h-best-for-5">Best For:</h3>

<ul class="wp-block-list">
<li>Mobile App Growth: Driving installs at scale.</li>

<li>In-App Engagement: Getting existing users to open your app and take action.</li>
</ul>

<h2 id="which-one-should-you-choose">Which One Should You Choose?</h2>

<p>If you're just starting out, here is our recommended hierarchy:</p>

<ol class="wp-block-list">
<li>Start with Search: Capture the high-intent traffic first. It's the most profitable.</li>

<li>Add Retargeting (Display/Demand Gen): Bring back the people who didn't buy.</li>

<li>Scale with Performance Max: Once you have conversion data, let AI find you more customers.</li>
</ol>

<figure class="wp-block-image size-large"><img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-ads-campaign-types-hero-VUBtCKb9yU3ECyDFSmvqzw.webp" alt="" class="wp-image-8939"
                  loading="lazy"
                  decoding="async"
                /></figure>

<h2 id="frequently-asked-questions-faq">Frequently Asked Questions (FAQ)</h2>

<h3 class="wp-block-heading">What is the difference between Performance Max and Demand Gen?</h3>

<p>Performance Max is designed to capture conversions across all Google channels (Search, Maps, YouTube, etc.) using full automation. Demand Gen is focused specifically on visual, social-style engagement on YouTube, Discover, and Gmail, offering more creative control and lookalike audience targeting .</p>

<h3 class="wp-block-heading">Can I run a Performance Max campaign without a product feed?</h3>

<p>Yes! While PMax is powerful for e-commerce with a Merchant Center feed, it works excellently for lead generation and local store visits without one. You just need to provide high-quality text, image, and video assets.</p>

<h3 class="wp-block-heading">Do I still need Search campaigns if I run Performance Max?</h3>

<p>Yes. While PMax covers Search inventory, running a dedicated Search campaign allows you to target specific keywords and control your messaging more precisely, especially for branded terms or high-priority services.</p>

<h3 class="wp-block-heading"> Ready to Master Google Ads?</h3>

<p>Choosing the campaign type is just step one. To truly succeed, you need to know how to structure your account, write killer ad copy, and optimize for ROI.</p>

<p>Join the Know How Marketing Lab Community on Skool!</p>

<p>Get access to:</p>

<ul class="wp-block-list">
<li> Full Google Ads Course (7 Modules)</li>

<li> Live Weekly Training & Q&A</li>

<li> Downloadable Templates & Checklists</li>

<li> AI Prompt Library for Ad Copy</li>
</ul>

<p> <a href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home" rel="noreferrer noopener" target="_blank">Join Know How Marketing Lab Now</a></p>

<h2 id="references">References</h2>

<ul class="wp-block-list">
<li><a href="#" target="_blank" rel="noreferrer noopener">[1] [About Performance Max campaigns - Google Ads Help](https://support.google.com/google-ads/answer/10724817?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[2] [Create a Performance Max campaign - Google Ads Help](https://support.google.com/google-ads/answer/10724896?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[3] [About Performance Max for store goals - Google Ads Help](https://support.google.com/google-ads/answer/12971048?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[4] [Optimization tips for Performance Max - Google Ads Help](https://support.google.com/google-ads/answer/11385582?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[5] [About Demand Gen campaigns - Google Ads Help](https://support.google.com/google-ads/answer/13695777?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[6] [Create a Demand Gen campaign - Google Ads Help](https://support.google.com/google-ads/answer/13695389?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[7] [Demand Gen campaign asset specs - Google Ads Help](https://support.google.com/google-ads/answer/13704860?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[8] [About lookalike segments - Google Ads Help](https://support.google.com/google-ads/answer/13695777?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[9] [Create a Search campaign - Google Ads Help](https://support.google.com/google-ads/answer/9510373?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[10] [About Search campaigns - Google Ads Help](https://support.google.com/google-ads/answer/9510373?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[11] [About Shopping ads - Google Ads Help](https://support.google.com/google-ads/answer/2454022?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[12] [Create a Standard Shopping campaign - Google Ads Help](https://support.google.com/google-ads/answer/3455481?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[13] [About Video campaigns - Google Ads Help](https://support.google.com/google-ads/answer/6340491?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[14] [Create a Video campaign - Google Ads Help](https://support.google.com/google-ads/answer/2375497?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[15] [About Display ads and the Google Display Network - Google Ads Help](https://support.google.com/google-ads/answer/2404190?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[16] [Create a Display campaign - Google Ads Help](https://support.google.com/google-ads/answer/10759203?hl=en )</a></li>

<li><a href="#" target="_blank" rel="noreferrer noopener">[17] [Set up dynamic remarketing - Google Ads Help](https://support.google.com/google-ads/answer/6287125?hl=en )</a></li>

<li><a href="https://support.google.com/google-ads/answer/6247380?hl=en" target="_blank" rel="noreferrer noopener">[18] About App campaigns - Google Ads Help</a></li>
</ul>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Stop Wasting Ad Spend! Master Every Google Ads Campaign Type in Minutes",
  "description": "Learn how to choose and optimize the right Google Ads campaign types - Performance Max, Demand Gen, Search, Shopping, Video, Display, and App Campaigns - to maximize your marketing results. Includes video walkthrough and visual examples.",
  "author": {
    "@type": "Person",
    "name": "Pip Seymour"
  },
  "datePublished": "2025-12-29",
  "publisher": {
    "@type": "Organization",
    "name": "KnowHow Marketing Lab",
    "logo": {
      "@type": "ImageObject",
      "url": "https://knowhowmarketinglab.com/images/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://knowhowmarketinglab.com/the-ultimate-guide-to-google-ads-campaign-types/"
  },
  "video": {
    "@type": "VideoObject",
    "name": "Master Every Google Ads Campaign Type in Minutes",
    "description": "A complete guide to Google Ads campaign types, including Performance Max, Demand Gen, Search, Shopping, Video, Display, and App Campaigns. Learn which to use for best results.",
    "thumbnailUrl": "https://knowhowmarketinglab.com/images/google-ads-campaign-types-thumbnail.jpg",
    "uploadDate": "2025-12-29",
    "contentUrl": "https://knowhowmarketinglab.com/videos/google-ads-campaign-types.mp4",
    "embedUrl": "<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nzTa2wJEN9k?si=AsYGMgk_qgjxsQil" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>",
  
  }
}
</script>

<p></p>`;

export default function PostTheUltimateGuideToGoogleAdsCampaignTypes() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Ultimate Guide to Google Ads Campaign Types (Updated for 2026)",
  "description": "Author: Know How Marketing Lab & Manus AI Published: December 27, 2025 Category: Google Ads Strategy https://youtu.be/nzTa2wJEN9k The single most import...",
  "datePublished": "2025-12-27",
  "dateModified": "2025-12-27",
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
      "url": "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-ads-campaign-types-hero-VUBtCKb9yU3ECyDFSmvqzw.webp"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://knowhowmarketinglab.com/the-ultimate-guide-to-google-ads-campaign-types/"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-ads-campaign-types-hero-VUBtCKb9yU3ECyDFSmvqzw.webp"
  }
});
    document.head.appendChild(script);
    document.title = 'The Ultimate Guide to Google Ads Campaign Types (Updated for 2026) | KnowHow Marketing Lab';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Author: Know How Marketing Lab & Manus AI Published: December 27, 2025 Category: Google Ads Strategy https://youtu.be/nzTa2wJEN9k The single most import...');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/blog/the-ultimate-guide-to-google-ads-campaign-types');
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-google-ads-campaign-types-5uLbH7Efx2SoV8jfE45VZN.png');
    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (ogImageAlt) ogImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: Google Ads Campaign Types - The Ultimate Guide');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-google-ads-campaign-types-5uLbH7Efx2SoV8jfE45VZN.png');
    const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (twitterImageAlt) twitterImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: Google Ads Campaign Types - The Ultimate Guide');

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/"},
        {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://knowhowmarketinglab.com/blog"},
        {"@type": "ListItem", "position": 3, "name": "Google Ads Campaign Types Guide", "item": "https://knowhowmarketinglab.com/the-ultimate-guide-to-google-ads-campaign-types"}
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
            <span className="text-slate-700 truncate">The Ultimate Guide to Google Ads Campaign Types (Updated for 2026)</span>
          </nav>
          {/* Category + Date */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#E98C28' }}>
              Google Ads
            </span>
            <time className="text-sm text-slate-500" dateTime="2025-12-27">December 27, 2025</time>
          </div>
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
            The Ultimate Guide to Google Ads Campaign Types (Updated for 2026)
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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-ads-campaign-types-hero-VUBtCKb9yU3ECyDFSmvqzw.webp"
            alt="The Ultimate Guide to Google Ads Campaign Types (Updated for 2026)"
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
              <li key="the-single-most-important-decision-you-ll-make"><a href="#the-single-most-important-decision-you-ll-make" className="text-[#318599] hover:underline text-sm">The single most important decision you'll make</a></li>
              <li key="1-performance-max-pmax"><a href="#1-performance-max-pmax" className="text-[#318599] hover:underline text-sm">1. Performance Max (PMax)</a></li>
              <li key="2-demand-gen"><a href="#2-demand-gen" className="text-[#318599] hover:underline text-sm">2. Demand Gen</a></li>
              <li key="3-search-campaigns"><a href="#3-search-campaigns" className="text-[#318599] hover:underline text-sm">3. Search Campaigns</a></li>
              <li key="4-shopping-campaigns"><a href="#4-shopping-campaigns" className="text-[#318599] hover:underline text-sm">4. Shopping Campaigns</a></li>
              <li key="5-video-campaigns"><a href="#5-video-campaigns" className="text-[#318599] hover:underline text-sm">5. Video Campaigns</a></li>
              <li key="6-display-campaigns"><a href="#6-display-campaigns" className="text-[#318599] hover:underline text-sm">6. Display Campaigns</a></li>
              <li key="7-app-campaigns"><a href="#7-app-campaigns" className="text-[#318599] hover:underline text-sm">7. App Campaigns</a></li>
              <li key="which-one-should-you-choose"><a href="#which-one-should-you-choose" className="text-[#318599] hover:underline text-sm">Which One Should You Choose?</a></li>
              <li key="frequently-asked-questions-faq"><a href="#frequently-asked-questions-faq" className="text-[#318599] hover:underline text-sm">Frequently Asked Questions (FAQ)</a></li>
              <li key="references"><a href="#references" className="text-[#318599] hover:underline text-sm">References</a></li>
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
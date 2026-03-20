// Blog Post: How to Set Up Google Search Console (Step by Step)
// Slug: /blog/how-to-set-up-google-search-console
// Cluster: AI SEO / Data-Driven SEO
// Internal links: /blog/ai-seo-guide, /blog/ga4-set-up-guide, /blog/keyword-research-keyword-clusters, /courses/seo, /our-method
// Author: Pip Seymour & Phelan Lewis

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

const COMMUNITY_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home';

export default function PostHowToSetUpGoogleSearchConsole() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Set Up Google Search Console (Step-by-Step Guide for 2026)",
      "description": "A complete step-by-step guide to setting up Google Search Console for your business website. Learn how to verify your site, submit your sitemap, and start reading your search performance data.",
      "author": [
        { "@type": "Person", "name": "Pip Seymour", "url": "https://knowhowmarketinglab.com/about" },
        { "@type": "Person", "name": "Phelan Lewis", "url": "https://knowhowmarketinglab.com/about" }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "KnowHow Marketing Lab",
        "url": "https://knowhowmarketinglab.com",
        "logo": { "@type": "ImageObject", "url": "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/local-seo-google-business-hero-YBQ73Yy9cjPFMhHcoBa3kn.webp" }
      },
      "datePublished": "2026-03-02",
      "dateModified": "2026-03-02",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://knowhowmarketinglab.com/blog/how-to-set-up-google-search-console" },
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80", "width": 1200, "height": 630 },
      "articleSection": "SEO",
      "keywords": ["google search console setup", "how to set up google search console", "google search console tutorial", "GSC setup guide", "search console for business"]
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://knowhowmarketinglab.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "How to Set Up Google Search Console", "item": "https://knowhowmarketinglab.com/blog/how-to-set-up-google-search-console" }
      ]
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Google Search Console free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Google Search Console is completely free. You just need a Google account to sign up at search.google.com/search-console." } },
        { "@type": "Question", "name": "How long does it take for Google Search Console to show data?", "acceptedAnswer": { "@type": "Answer", "text": "It usually takes 24 to 48 hours after verification before you start seeing data. Full performance data (clicks, impressions, average position) typically appears within 3 to 7 days." } },
        { "@type": "Question", "name": "Do I need Google Search Console if I already have GA4?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. GA4 and Google Search Console measure different things. GA4 tracks what happens after someone arrives on your site. Google Search Console tracks how your site appears in Google search results - which keywords you rank for, how many people see your pages, and whether Google can crawl your site properly." } },
        { "@type": "Question", "name": "What is the difference between a domain property and a URL prefix property in Google Search Console?", "acceptedAnswer": { "@type": "Answer", "text": "A domain property covers all versions of your site (http, https, www, non-www) in one property. A URL prefix property only covers the exact URL you enter. Domain properties are recommended because they give you a complete picture of your site's performance." } },
        { "@type": "Question", "name": "How do I submit my sitemap in Google Search Console?", "acceptedAnswer": { "@type": "Answer", "text": "In Google Search Console, go to Sitemaps in the left menu, type your sitemap URL (usually sitemap.xml), and click Submit. Google will then crawl your sitemap and use it to discover all your pages." } }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumb);
    document.head.appendChild(breadcrumbScript);
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/blog/how-to-set-up-google-search-console');
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-google-search-console-d8wF7pi3TPSAS8reGMUycE.png');
    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (ogImageAlt) ogImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: How to Set Up Google Search Console');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-google-search-console-d8wF7pi3TPSAS8reGMUycE.png');
    const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (twitterImageAlt) twitterImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: How to Set Up Google Search Console');
    document.title = 'How to Set Up Google Search Console (Step-by-Step Guide for 2026) | KnowHow Marketing Lab';
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(faqScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ReadingProgressBar />
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl" itemScope itemType="https://schema.org/Article">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <li><Link href="/" className="hover:text-[#318599] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-[#318599] transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-600">How to Set Up Google Search Console</li>
            </ol>
          </nav>

          {/* Category + Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#e8f4f7] text-[#318599] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>SEO</span>
            <span className="text-sm text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>March 2, 2026</span>
            <span className="text-sm text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>10 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="headline">
            How to Set Up Google Search Console (Step-by-Step Guide for 2026)
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Google Search Console is one of the most important free tools for any business with a website. It shows you exactly how your site appears in Google search - which keywords bring people to you, which pages Google has indexed, and whether there are any technical problems holding you back. This guide walks you through the full setup from start to finish.
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
            <div>
              <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Pip Seymour &amp; Phelan Lewis</p>
              <p className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>KnowHow Marketing Lab - Seymour Digital Media</p>
            </div>
          </div>

          {/* Hero Image */}
          <figure className="mb-10">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="Google Search Console dashboard showing search performance data including clicks, impressions, and average position"
              className="w-full rounded-2xl shadow-md"
              loading="eager"
              fetchPriority="high"
              itemProp="image"
            />
          </figure>

          {/* Jump to sections */}
          <nav aria-label="Article sections" className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
            <p className="text-sm font-bold text-gray-700 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>In this guide:</p>
            <ol className="space-y-2 text-sm text-[#318599]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <li><a href="#what-is-gsc" className="hover:underline">1. What is Google Search Console and why does it matter?</a></li>
              <li><a href="#gsc-vs-ga4" className="hover:underline">2. Google Search Console vs GA4 - what is the difference?</a></li>
              <li><a href="#create-account" className="hover:underline">3. Step 1 - Create your Google Search Console account</a></li>
              <li><a href="#add-property" className="hover:underline">4. Step 2 - Add your website as a property</a></li>
              <li><a href="#verify-site" className="hover:underline">5. Step 3 - Verify your website</a></li>
              <li><a href="#submit-sitemap" className="hover:underline">6. Step 4 - Submit your sitemap</a></li>
              <li><a href="#read-data" className="hover:underline">7. Step 5 - Read your first performance report</a></li>
              <li><a href="#link-ga4" className="hover:underline">8. Step 6 - Link Google Search Console to GA4</a></li>
              <li><a href="#what-to-check" className="hover:underline">9. What to check in Google Search Console every month</a></li>
              <li><a href="#faq" className="hover:underline">10. Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* Article Body */}
          <div
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-[#318599] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-li:mb-1 prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-[#318599] prose-blockquote:text-slate-600"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: `
<h2 id="what-is-gsc">What is Google Search Console and why does it matter?</h2>

<p>Google Search Console (GSC) is a free tool from Google that shows you how your website performs in Google search results. It is not the same as Google Analytics. While Google Analytics 4 (GA4) tells you what people do <em>after</em> they arrive on your site, Google Search Console tells you what happens <em>before</em> they click - how often your pages appear in search, which keywords trigger them, and where you rank.</p>

<p>For medium-sized businesses, this data is essential. Without it, you are guessing. With it, you can see exactly which pages are bringing in search traffic, which keywords you are almost ranking for (and can push to page one with a small content update), and whether Google can actually find and read your pages properly.</p>

<p>This is the first tool we set up for every client at <a href="https://seymourdigitalmedia.com" target="_blank" rel="noopener noreferrer">Seymour Digital Media</a>, and it is Step 1 of the <a href="/our-method">Data-First AI SEO Method</a> we teach at KnowHow Marketing Lab.</p>

<h2 id="gsc-vs-ga4">Google Search Console vs GA4 - what is the difference?</h2>

<p>This is the most common question we get. Here is the simple version:</p>

<table>
<thead><tr><th>Google Search Console</th><th>Google Analytics 4</th></tr></thead>
<tbody>
<tr><td>Shows how your site appears in Google search</td><td>Shows what visitors do on your site</td></tr>
<tr><td>Tracks clicks, impressions, average position</td><td>Tracks sessions, pageviews, conversions</td></tr>
<tr><td>Tells you which keywords bring people to you</td><td>Tells you which pages people visit and for how long</td></tr>
<tr><td>Shows technical issues (crawl errors, indexing)</td><td>Shows user behaviour and conversion paths</td></tr>
<tr><td>Data starts from when you verify your site</td><td>Data starts from when you install the tracking code</td></tr>
</tbody>
</table>

<p>You need both. They work together. Once you connect them (Step 6 below), you can see the full picture: which keywords bring people to your site, and what those people do once they arrive.</p>

<p>If you have not set up GA4 yet, read our guide: <a href="/blog/ga4-set-up-guide">How to Set Up Google Analytics 4 (Step by Step)</a>.</p>

<h2 id="create-account">Step 1 - Create your Google Search Console account</h2>

<p>Go to <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">search.google.com/search-console</a> and sign in with your Google account. Use the same Google account that manages your other Google tools (Google Ads, GA4, Google Business Profile) so everything is connected.</p>

<p>If this is your first time, you will land on a welcome screen asking you to add a property. If you already have an account, click the property selector in the top left and choose "Add property."</p>

<h2 id="add-property">Step 2 - Add your website as a property</h2>

<p>Google Search Console gives you two types of properties:</p>

<ul>
<li><strong>Domain property</strong> - covers your entire domain including all subdomains, http, https, www, and non-www versions. This is the recommended option because it gives you a complete picture of your site.</li>
<li><strong>URL prefix property</strong> - only covers the exact URL you enter (e.g., https://yourdomain.com). Use this if you only want to track one specific version of your site.</li>
</ul>

<p><strong>We recommend the Domain property.</strong> It is more complete and avoids the problem of your data being split across multiple properties (for example, if some of your pages are indexed under www and some under non-www).</p>

<p>To add a domain property, type your domain name without https:// (just yourdomain.com) and click Continue.</p>

<h2 id="verify-site">Step 3 - Verify your website</h2>

<p>Google needs to confirm that you actually own the website before it shows you data. There are several ways to verify. Here are the most common ones:</p>

<h3>Option A - DNS record verification (recommended for domain properties)</h3>

<p>Google will give you a TXT record to add to your DNS settings. Log into your domain registrar or DNS provider (GoDaddy, HostGator, Cloudflare, etc.), go to your DNS settings, add the TXT record Google provides, and click Verify in Search Console. This can take a few minutes to a few hours to propagate.</p>

<h3>Option B - HTML file upload</h3>

<p>Download the HTML verification file Google provides, upload it to the root folder of your website, and click Verify. The file needs to stay there permanently or verification will fail.</p>

<h3>Option C - HTML meta tag</h3>

<p>Add a meta tag to the &lt;head&gt; section of your website's homepage. This is the easiest option if you use a CMS like WordPress - just paste the meta tag into your theme's header or use a plugin like Yoast SEO or Rank Math.</p>

<h3>Option D - Google Analytics or Google Tag Manager</h3>

<p>If you already have GA4 or Google Tag Manager installed on your site, you can verify through either of those. Google will automatically confirm ownership because you already have their code on your site.</p>

<p>Once verification is complete, Google will start collecting data for your site. It usually takes 24 to 48 hours before you see your first performance data.</p>

<h2 id="submit-sitemap">Step 4 - Submit your sitemap</h2>

<p>A sitemap is a file that lists all the pages on your website. Submitting it to Google Search Console tells Google exactly which pages exist and helps it crawl your site faster and more completely.</p>

<p>Most websites have a sitemap at one of these URLs:</p>
<ul>
<li>yourdomain.com/sitemap.xml</li>
<li>yourdomain.com/sitemap_index.xml</li>
<li>yourdomain.com/wp-sitemap.xml (WordPress)</li>
</ul>

<p>To submit your sitemap in Google Search Console:</p>
<ol>
<li>Click <strong>Sitemaps</strong> in the left menu</li>
<li>In the "Add a new sitemap" field, type your sitemap URL (just the path, e.g., sitemap.xml)</li>
<li>Click <strong>Submit</strong></li>
</ol>

<p>Google will show you the status of your sitemap - how many URLs it found, how many it has indexed, and whether there are any errors. Check back after a few days to see the results.</p>

<p>If you do not have a sitemap, most SEO plugins (Yoast, Rank Math) generate one automatically. If you are on a custom-built site, your developer can create one or you can use a free sitemap generator tool.</p>

<h2 id="read-data">Step 5 - Read your first performance report</h2>

<p>Once data starts coming in, the most important report to check is the <strong>Performance</strong> report. You will find it in the left menu. Here is what the key metrics mean:</p>

<table>
<thead><tr><th>Metric</th><th>What it means</th><th>What to look for</th></tr></thead>
<tbody>
<tr><td><strong>Total clicks</strong></td><td>How many times people clicked your site in Google search</td><td>Is this growing month over month?</td></tr>
<tr><td><strong>Total impressions</strong></td><td>How many times your pages appeared in search results</td><td>High impressions + low clicks = title/description needs work</td></tr>
<tr><td><strong>Average CTR</strong></td><td>Click-through rate - what percentage of impressions turn into clicks</td><td>Under 2% for most pages is a sign your title tags need improvement</td></tr>
<tr><td><strong>Average position</strong></td><td>Where your pages rank on average across all searches</td><td>Positions 4-10 are the "almost there" zone - small improvements can move you to page one</td></tr>
</tbody>
</table>

<p>The most valuable thing you can do in your first week is look at the <strong>Queries</strong> tab in the Performance report. This shows you every keyword that triggered your pages in Google search. You will often find keywords you did not know you were ranking for - and keywords you are almost ranking for that you can target more deliberately.</p>

<p>This is exactly the kind of data we use in the <a href="/our-method">Data-First AI SEO Method</a> - starting with what Google is already telling you, then building on it.</p>

<h2 id="link-ga4">Step 6 - Link Google Search Console to GA4</h2>

<p>Connecting Google Search Console to GA4 gives you a combined view of your search performance and user behaviour in one place. You can see which organic search keywords bring people to your site AND what those people do once they arrive.</p>

<p>To link them:</p>
<ol>
<li>In GA4, go to <strong>Admin</strong> (the gear icon in the bottom left)</li>
<li>Under "Property settings," click <strong>Search Console links</strong></li>
<li>Click <strong>Link</strong></li>
<li>Select your Google Search Console property from the list</li>
<li>Choose the GA4 data stream you want to link to</li>
<li>Click <strong>Submit</strong></li>
</ol>

<p>Once linked, you will find a new "Search Console" section in your GA4 reports under Reports > Acquisition > Search Console. This shows you organic search landing pages and queries with full GA4 engagement data alongside them.</p>

<h2 id="what-to-check">What to check in Google Search Console every month</h2>

<p>Once your account is set up, here is a simple monthly routine that takes about 20 minutes:</p>

<h3>1. Performance report - check for wins and drops</h3>
<p>Compare this month to last month. Are clicks and impressions growing? If a page has dropped significantly, check whether Google has changed how it ranks that topic or whether a competitor has published better content.</p>

<h3>2. Coverage report - check for indexing issues</h3>
<p>Go to <strong>Pages</strong> (previously called Coverage) in the left menu. Look for any pages with errors or warnings. Common issues include pages that are "Discovered but not indexed" (Google knows they exist but has not crawled them yet) and pages with "Crawl anomaly" errors.</p>

<h3>3. Core Web Vitals - check your page experience scores</h3>
<p>Go to <strong>Core Web Vitals</strong> in the left menu. This shows you how fast your pages load and how stable they are for users. Pages with "Poor" scores are worth fixing - Google uses these scores as a ranking factor.</p>

<h3>4. Queries near the top - find your "almost there" keywords</h3>
<p>In the Performance report, filter by average position between 4 and 15. These are pages that are close to the top of page one. A small content update - adding a section that answers a related question, improving your title tag, or adding internal links - can often push them into the top 3.</p>

<p>For a full walkthrough of how to use this data to build a keyword strategy, read our guide: <a href="/blog/keyword-research-keyword-clusters">How to Do Keyword Research Using Keyword Clusters</a>.</p>

<h2 id="faq">Frequently Asked Questions</h2>

<h3>Is Google Search Console free?</h3>
<p>Yes. Google Search Console is completely free. You just need a Google account to sign up at <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">search.google.com/search-console</a>. There is no paid version - all features are available to everyone at no cost.</p>

<h3>How long does it take for Google Search Console to show data?</h3>
<p>It usually takes 24 to 48 hours after verification before you start seeing data. Full performance data (clicks, impressions, average position) typically appears within 3 to 7 days. Historical data is not available - GSC only shows data from the date you verified your site onwards, up to 16 months back.</p>

<h3>Do I need Google Search Console if I already have GA4?</h3>
<p>Yes. GA4 and Google Search Console measure different things. GA4 tracks what happens after someone arrives on your site. Google Search Console tracks how your site appears in Google search results - which keywords you rank for, how many people see your pages, and whether Google can crawl your site properly. You need both tools working together for a complete picture.</p>

<h3>What is the difference between a domain property and a URL prefix property?</h3>
<p>A domain property covers all versions of your site (http, https, www, non-www) in one property. A URL prefix property only covers the exact URL you enter. Domain properties are recommended because they give you a complete picture of your site's performance without splitting data across multiple properties.</p>

<h3>How do I submit my sitemap in Google Search Console?</h3>
<p>In Google Search Console, go to Sitemaps in the left menu, type your sitemap URL (usually sitemap.xml), and click Submit. Google will then crawl your sitemap and use it to discover all your pages. Most websites have their sitemap at yourdomain.com/sitemap.xml.</p>

<h3>What should I do if Google Search Console shows crawl errors?</h3>
<p>Go to the Pages report and click on the error type to see which specific pages are affected. Common fixes include: updating internal links that point to deleted pages, setting up 301 redirects for pages that have moved, and checking that your robots.txt file is not accidentally blocking important pages.</p>
            ` }}
          />

          {/* CTA Banner */}
          <div className="mt-12 bg-[#0f2236] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Want to learn how to use this data to grow your business?
            </h2>
            <p className="text-white/80 mb-6 text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The free AI + SEO Course covers Google Search Console, GA4, keyword research, and on-page SEO - step by step. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/courses/seo" className="inline-block bg-[#E98C28] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4791f] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Start the Free AI + SEO Course</a>
              <a href="/our-method" className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>See the Data-First Method</a>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Related articles</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: '/blog/ai-seo-guide', title: 'The Complete Guide to AI SEO', category: 'AI Marketing', time: '15 min read' },
                { href: '/blog/ga4-set-up-guide', title: 'How to Set Up Google Analytics 4 (Step by Step)', category: 'SEO', time: '12 min read' },
                { href: '/blog/keyword-research-keyword-clusters', title: 'How to Do Keyword Research Using Keyword Clusters', category: 'SEO', time: '11 min read' },
              ].map(post => (
                <Link key={post.href} href={post.href} className="block bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors border border-gray-100">
                  <span className="text-xs font-bold text-[#318599] uppercase tracking-wide block mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{post.category}</span>
                  <p className="text-sm font-bold text-gray-800 leading-snug mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{post.title}</p>
                  <p className="text-xs text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>{post.time}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <Link href="/blog" className="text-[#318599] hover:underline text-sm font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Back to all articles
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
}

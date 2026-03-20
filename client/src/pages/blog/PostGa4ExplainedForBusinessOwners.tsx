// Blog Post: GA4 Explained for Business Owners
// Slug: /blog/ga4-explained-for-business-owners
// Cluster: AI SEO / Data-Driven SEO
// Internal links: /blog/ai-seo-guide, /blog/ga4-set-up-guide, /blog/how-to-set-up-google-search-console, /courses/seo, /our-method
// Author: Pip Seymour & Phelan Lewis
// Voice: Grade 6 level, conversational, no emojis, no em dashes

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

export default function PostGa4ExplainedForBusinessOwners() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "GA4 Explained for Business Owners (Plain Language Guide for 2026)",
      "description": "Google Analytics 4 explained in plain language for business owners. Learn what GA4 tracks, what the key reports mean, and how to use it to make better marketing decisions without needing to be a data analyst.",
      "author": [
        { "@type": "Person", "name": "Pip Seymour", "url": "https://knowhowmarketinglab.com/about" },
        { "@type": "Person", "name": "Phelan Lewis", "url": "https://knowhowmarketinglab.com/about" }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "KnowHow Marketing Lab",
        "url": "https://knowhowmarketinglab.com",
        "logo": { "@type": "ImageObject", "url": "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-analytics-4-setup-hero-dU5h22dYaajZknWEGNwLKc.webp" }
      },
      "datePublished": "2026-03-02",
      "dateModified": "2026-03-02",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://knowhowmarketinglab.com/blog/ga4-explained-for-business-owners" },
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", "width": 1200, "height": 630 },
      "articleSection": "SEO",
      "keywords": ["GA4 explained", "google analytics 4 for beginners", "what is GA4", "GA4 for business owners", "google analytics 4 guide", "GA4 reports explained"]
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://knowhowmarketinglab.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "GA4 Explained for Business Owners", "item": "https://knowhowmarketinglab.com/blog/ga4-explained-for-business-owners" }
      ]
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is GA4?",
          "acceptedAnswer": { "@type": "Answer", "text": "GA4 stands for Google Analytics 4. It is a free tool from Google that tracks what people do on your website. It shows you how many people visit your site, where they come from, which pages they look at, and whether they take actions like filling out a form or making a purchase." }
        },
        {
          "@type": "Question",
          "name": "Is GA4 free?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. GA4 is completely free. You just need a Google account to sign up at analytics.google.com. There is a paid version called Google Analytics 360, but the free version has everything a medium-sized business needs." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between GA4 and Universal Analytics?",
          "acceptedAnswer": { "@type": "Answer", "text": "Universal Analytics (UA) was the old version of Google Analytics. Google shut it down in July 2023. GA4 is the new version. The biggest difference is that GA4 tracks everything as events (actions people take), while UA tracked sessions and pageviews. GA4 also has better privacy features and works across websites and apps." }
        },
        {
          "@type": "Question",
          "name": "What is an event in GA4?",
          "acceptedAnswer": { "@type": "Answer", "text": "An event in GA4 is any action a user takes on your website. This includes page views, button clicks, form submissions, video plays, file downloads, and purchases. GA4 automatically tracks many events without any setup. You can also set up custom events to track specific actions that matter to your business." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between GA4 and Google Search Console?",
          "acceptedAnswer": { "@type": "Answer", "text": "GA4 tracks what people do after they arrive on your website. Google Search Console tracks how your site appears in Google search results before people click. You need both tools. GA4 tells you about user behaviour on your site. Google Search Console tells you about your visibility in search." }
        },
        {
          "@type": "Question",
          "name": "How do I know if GA4 is working on my website?",
          "acceptedAnswer": { "@type": "Answer", "text": "The easiest way to check is to open your website in one browser tab and open GA4 in another. In GA4, go to Reports and click Realtime. If you can see yourself as an active user on your site, GA4 is working correctly." }
        }
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
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/blog/ga4-explained-for-business-owners');
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-ga4-explained-YePtELeRScrfhDwGWtxoYe.png');
    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (ogImageAlt) ogImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: GA4 Explained for Business Owners');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-ga4-explained-YePtELeRScrfhDwGWtxoYe.png');
    const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (twitterImageAlt) twitterImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: GA4 Explained for Business Owners');
    document.title = 'GA4 Explained for Business Owners (Plain Language Guide for 2026) | KnowHow Marketing Lab';

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
              <li className="text-gray-600">GA4 Explained for Business Owners</li>
            </ol>
          </nav>

          {/* Category + Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#e8f4f7] text-[#318599] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>SEO</span>
            <span className="text-sm text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>March 2, 2026</span>
            <span className="text-sm text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>9 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="headline">
            GA4 Explained for Business Owners (Plain Language Guide for 2026)
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Google Analytics 4 can feel confusing at first. The reports look different from the old version, the words are new, and it is not always clear what you should actually be looking at. This guide explains GA4 in plain language so you can understand what it is telling you and use it to make better decisions for your business.
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
              alt="Google Analytics 4 dashboard showing website traffic data, user behaviour reports, and conversion metrics for a business"
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
              <li><a href="#what-is-ga4" className="hover:underline">1. What is GA4 and what does it do?</a></li>
              <li><a href="#ga4-vs-ua" className="hover:underline">2. GA4 vs the old Google Analytics</a></li>
              <li><a href="#ga4-vs-gsc" className="hover:underline">3. GA4 vs Google Search Console</a></li>
              <li><a href="#key-terms" className="hover:underline">4. Key GA4 terms explained simply</a></li>
              <li><a href="#reports" className="hover:underline">5. The five reports every business owner should check</a></li>
              <li><a href="#conversions" className="hover:underline">6. How to set up conversions in GA4</a></li>
              <li><a href="#monthly-routine" className="hover:underline">7. A simple monthly GA4 routine</a></li>
              <li><a href="#faq" className="hover:underline">8. Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* Article Body */}
          <div
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-[#318599] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-li:mb-1 prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-[#318599] prose-blockquote:text-slate-600"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: `
<h2 id="what-is-ga4">What is GA4 and what does it do?</h2>

<p>GA4 stands for Google Analytics 4. It is a free tool from Google that tracks what people do on your website. When someone visits your site, GA4 records what pages they look at, how long they stay, where they came from, and whether they do something important like fill out a form or buy something.</p>

<p>Think of it like a security camera for your website. It watches everything that happens and saves a record of it. Then you can go back and look at that record to understand what is working and what is not.</p>

<p>For a business owner, GA4 answers questions like:</p>
<ul>
<li>How many people visited my website this month?</li>
<li>Which pages do people look at the most?</li>
<li>Where are my visitors coming from (Google, social media, email, etc.)?</li>
<li>Are people filling out my contact form?</li>
<li>Which marketing channel is bringing in the most leads?</li>
</ul>

<p>This is the "Measure" step in the <a href="/our-method">Data-First AI SEO Method</a>. Before you can improve your marketing, you need to know what is happening right now. GA4 gives you that starting point.</p>

<h2 id="ga4-vs-ua">GA4 vs the old Google Analytics</h2>

<p>If you used Google Analytics before July 2023, you were using Universal Analytics (UA). Google shut that down and replaced it with GA4. The two tools look very different, which is why a lot of people find GA4 confusing at first.</p>

<p>Here are the main differences:</p>

<table>
<thead><tr><th>Old Google Analytics (UA)</th><th>GA4 (new version)</th></tr></thead>
<tbody>
<tr><td>Tracked sessions and pageviews</td><td>Tracks events (every action a user takes)</td></tr>
<tr><td>Bounce rate was a key metric</td><td>Engagement rate replaced bounce rate</td></tr>
<tr><td>Data was stored indefinitely</td><td>Data is stored for 14 months by default (can extend to 26)</td></tr>
<tr><td>No cross-device tracking</td><td>Tracks users across devices and apps</td></tr>
<tr><td>Less privacy-friendly</td><td>Built for a privacy-first world (GDPR, iOS changes)</td></tr>
<tr><td>Reports were easier to find</td><td>Reports are more flexible but take getting used to</td></tr>
</tbody>
</table>

<p>The good news is that once you understand how GA4 works, it gives you much better information than the old version. The key is knowing which reports to look at and what the numbers actually mean.</p>

<p>If you have not set up GA4 yet, our step-by-step guide walks you through the whole process: <a href="/blog/ga4-set-up-guide">How to Set Up Google Analytics 4</a>.</p>

<h2 id="ga4-vs-gsc">GA4 vs Google Search Console</h2>

<p>A lot of people mix these two up. They are both free Google tools, but they measure completely different things.</p>

<table>
<thead><tr><th>GA4</th><th>Google Search Console</th></tr></thead>
<tbody>
<tr><td>Tracks what people do on your site</td><td>Tracks how your site shows up in Google search</td></tr>
<tr><td>Shows sessions, users, conversions</td><td>Shows clicks, impressions, average position</td></tr>
<tr><td>Tells you what happens after someone arrives</td><td>Tells you what happens before someone clicks</td></tr>
<tr><td>Works for all traffic sources</td><td>Only covers Google organic search</td></tr>
</tbody>
</table>

<p>You need both. They work together. Once you connect them, you can see the full picture: which keywords bring people to your site, and what those people do once they arrive.</p>

<p>Read our guide to get Google Search Console set up: <a href="/blog/how-to-set-up-google-search-console">How to Set Up Google Search Console (Step by Step)</a>.</p>

<h2 id="key-terms">Key GA4 terms explained simply</h2>

<p>GA4 uses some words that are not always obvious. Here is a plain-language glossary of the terms you will see most often:</p>

<table>
<thead><tr><th>GA4 term</th><th>What it means in plain language</th></tr></thead>
<tbody>
<tr><td><strong>Users</strong></td><td>The number of individual people who visited your site. One person who visits three times counts as one user.</td></tr>
<tr><td><strong>Sessions</strong></td><td>The number of visits to your site. One person who visits three times counts as three sessions.</td></tr>
<tr><td><strong>Events</strong></td><td>Any action a user takes. Viewing a page, clicking a button, filling out a form, watching a video - all of these are events.</td></tr>
<tr><td><strong>Conversions</strong></td><td>The events that matter most to your business. Usually form submissions, phone calls, purchases, or sign-ups. You decide which events count as conversions.</td></tr>
<tr><td><strong>Engagement rate</strong></td><td>The percentage of sessions where someone actually engaged with your site (spent more than 10 seconds, viewed more than one page, or converted). This replaced bounce rate.</td></tr>
<tr><td><strong>Traffic source</strong></td><td>Where your visitors came from. Common sources include Organic Search (Google), Direct (typed your URL), Referral (another website), Social (social media), and Email.</td></tr>
<tr><td><strong>Landing page</strong></td><td>The first page someone sees when they arrive on your site.</td></tr>
<tr><td><strong>Realtime</strong></td><td>A live view of who is on your site right now.</td></tr>
</tbody>
</table>

<h2 id="reports">The five reports every business owner should check</h2>

<p>GA4 has a lot of reports. Most of them you will never need. Here are the five that actually matter for a medium-sized business:</p>

<h3>1. Acquisition - Traffic Acquisition</h3>
<p>This report shows where your visitors come from. It breaks down your traffic by channel: Organic Search, Direct, Referral, Social, Email, and Paid Search. This tells you which marketing channels are working. If organic search is bringing you 80% of your traffic, that is a sign your SEO is working. If direct traffic is very high, that means people are coming back to your site directly, which is a sign of brand awareness.</p>
<p>To find it: Reports > Acquisition > Traffic Acquisition.</p>

<h3>2. Engagement - Pages and Screens</h3>
<p>This report shows which pages on your site get the most views. It also shows how long people spend on each page and how many of those visits lead to a conversion. This tells you which content is most popular and which pages are doing the best job of converting visitors into leads or customers.</p>
<p>To find it: Reports > Engagement > Pages and Screens.</p>

<h3>3. Conversions</h3>
<p>This report shows how many times your key actions (form submissions, purchases, sign-ups) happened. It is the most important report for measuring whether your website is actually doing its job. If you are getting a lot of traffic but very few conversions, something is wrong with your pages or your offer.</p>
<p>To find it: Reports > Engagement > Conversions.</p>

<h3>4. Acquisition - User Acquisition</h3>
<p>Similar to Traffic Acquisition, but this report focuses on where your new users came from the first time they ever visited your site. This is useful for understanding which channels are bringing in new customers versus which ones are bringing back people who already know you.</p>
<p>To find it: Reports > Acquisition > User Acquisition.</p>

<h3>5. Realtime</h3>
<p>This shows you who is on your site right now. It is useful for checking that GA4 is working correctly, and for seeing the immediate impact of a new email campaign or social post. If you send an email to your list and then check Realtime, you should see a spike in visitors.</p>
<p>To find it: Reports > Realtime.</p>

<h2 id="conversions">How to set up conversions in GA4</h2>

<p>By default, GA4 tracks a lot of events automatically. But it does not know which events matter most to your business. You need to tell it. This is called setting up conversions.</p>

<p>For most businesses, the most important conversions are:</p>
<ul>
<li>Form submissions (contact forms, quote requests, lead forms)</li>
<li>Phone calls (if you have click-to-call on your site)</li>
<li>Purchases (if you have an online store)</li>
<li>Email sign-ups</li>
<li>Key page views (like a thank-you page after a form submission)</li>
</ul>

<p>The easiest way to set up a conversion is to mark an existing event as a conversion. Here is how:</p>
<ol>
<li>In GA4, go to <strong>Admin</strong> (the gear icon in the bottom left)</li>
<li>Under "Property settings," click <strong>Events</strong></li>
<li>Find the event you want to mark as a conversion (e.g., "form_submit" or "generate_lead")</li>
<li>Toggle the "Mark as conversion" switch to on</li>
</ol>

<p>If the event you want to track is not showing up automatically, you may need to set it up using Google Tag Manager. Our full setup guide covers this: <a href="/blog/ga4-set-up-guide">How to Set Up Google Analytics 4</a>.</p>

<h2 id="monthly-routine">A simple monthly GA4 routine</h2>

<p>You do not need to check GA4 every day. A monthly review is enough for most businesses. Here is a simple routine that takes about 15 minutes:</p>

<h3>Step 1 - Check your traffic trend</h3>
<p>Go to Reports > Acquisition > Traffic Acquisition. Set the date range to the last 30 days and compare it to the previous 30 days. Is total traffic going up or down? Which channels are growing and which are shrinking?</p>

<h3>Step 2 - Check your conversions</h3>
<p>Go to Reports > Engagement > Conversions. How many conversions did you get this month? Is that more or less than last month? Which pages are driving the most conversions?</p>

<h3>Step 3 - Check your top pages</h3>
<p>Go to Reports > Engagement > Pages and Screens. Which pages got the most views? Are the pages you care about (your service pages, your pricing page, your contact page) getting traffic? If not, that is a sign you need to do more to drive people to those pages.</p>

<h3>Step 4 - Look for anything unusual</h3>
<p>Is there a page that suddenly got a lot more or a lot less traffic? Is there a channel that dropped off? Unusual changes are worth investigating. They might mean a technical problem, a Google algorithm update, or a marketing campaign that worked really well.</p>

<p>Once you have your GA4 data, the next step is to connect it with your Google Search Console data to understand the full picture. Read our guide: <a href="/blog/how-to-set-up-google-search-console">How to Set Up Google Search Console (Step by Step)</a>.</p>

<p>And if you want to understand how all of this fits into a complete SEO strategy, start with: <a href="/blog/ai-seo-guide">The Complete Guide to AI SEO</a>.</p>

<h2 id="faq">Frequently Asked Questions</h2>

<h3>What is GA4?</h3>
<p>GA4 stands for Google Analytics 4. It is a free tool from Google that tracks what people do on your website. It shows you how many people visit your site, where they come from, which pages they look at, and whether they take actions like filling out a form or making a purchase.</p>

<h3>Is GA4 free?</h3>
<p>Yes. GA4 is completely free. You just need a Google account to sign up at <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">analytics.google.com</a>. There is a paid version called Google Analytics 360, but the free version has everything a medium-sized business needs.</p>

<h3>What is the difference between GA4 and Universal Analytics?</h3>
<p>Universal Analytics (UA) was the old version of Google Analytics. Google shut it down in July 2023. GA4 is the new version. The biggest difference is that GA4 tracks everything as events (actions people take), while UA tracked sessions and pageviews. GA4 also has better privacy features and works across websites and apps.</p>

<h3>What is an event in GA4?</h3>
<p>An event in GA4 is any action a user takes on your website. This includes page views, button clicks, form submissions, video plays, file downloads, and purchases. GA4 automatically tracks many events without any setup. You can also set up custom events to track specific actions that matter to your business.</p>

<h3>What is the difference between GA4 and Google Search Console?</h3>
<p>GA4 tracks what people do after they arrive on your website. Google Search Console tracks how your site appears in Google search results before people click. You need both tools. GA4 tells you about user behaviour on your site. Google Search Console tells you about your visibility in search.</p>

<h3>How do I know if GA4 is working on my website?</h3>
<p>The easiest way to check is to open your website in one browser tab and open GA4 in another. In GA4, go to Reports and click Realtime. If you can see yourself as an active user on your site, GA4 is working correctly.</p>
            ` }}
          />

          {/* CTA Banner */}
          <div className="mt-12 bg-[#0f2236] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Want to learn how to use GA4 to grow your business?
            </h2>
            <p className="text-white/80 mb-6 text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The free AI + SEO Course covers GA4, Google Search Console, keyword research, and on-page SEO. Step by step. No credit card required.
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
                { href: '/blog/how-to-set-up-google-search-console', title: 'How to Set Up Google Search Console (Step by Step)', category: 'SEO', time: '10 min read' },
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

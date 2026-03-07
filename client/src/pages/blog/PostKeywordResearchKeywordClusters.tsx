// Blog Post: How to Do Keyword Research Using Keyword Clusters
// Slug: /blog/keyword-research-keyword-clusters
// Cluster: AI SEO / Data-Driven SEO
// Internal links: /blog/ai-seo-guide, /blog/how-to-set-up-google-search-console, /blog/ga4-set-up-guide, /courses/seo, /our-method
// Author: Pip Seymour & Phelan Lewis

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Link } from 'wouter';

export default function PostKeywordResearchKeywordClusters() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Do Keyword Research Using Keyword Clusters (2026 Guide)",
      "description": "Learn how to build keyword clusters using Google Keyword Planner and AI tools. This step-by-step guide shows medium-sized businesses how to group keywords by topic, map them to pages, and build topical authority that ranks.",
      "author": [
        { "@type": "Person", "name": "Pip Seymour", "url": "https://knowhowmarketinglab.com/about" },
        { "@type": "Person", "name": "Phelan Lewis", "url": "https://knowhowmarketinglab.com/about" }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "KnowHow Marketing Lab",
        "url": "https://knowhowmarketinglab.com",
        "logo": { "@type": "ImageObject", "url": "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/keyword-research-clusters-hero-LZJ8zMpUxzkZ8jLM4YNoFi.webp" }
      },
      "datePublished": "2026-03-02",
      "dateModified": "2026-03-02",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://knowhowmarketinglab.com/blog/keyword-research-keyword-clusters" },
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80", "width": 1200, "height": 630 },
      "articleSection": "SEO",
      "keywords": ["keyword research", "keyword clusters", "keyword clustering", "how to do keyword research", "google keyword planner", "topical authority SEO"]
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://knowhowmarketinglab.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Keyword Research Using Keyword Clusters", "item": "https://knowhowmarketinglab.com/blog/keyword-research-keyword-clusters" }
      ]
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a keyword cluster?", "acceptedAnswer": { "@type": "Answer", "text": "A keyword cluster is a group of related keywords that all share the same search intent. Instead of targeting one keyword per page, you target a whole cluster - the main topic plus all the related questions and variations people search for around that topic. This is how Google actually evaluates topical authority." } },
        { "@type": "Question", "name": "How many keywords should be in a cluster?", "acceptedAnswer": { "@type": "Answer", "text": "A typical keyword cluster has 5 to 20 keywords. The main head term (e.g., 'keyword research') plus 4 to 19 related long-tail keywords and question keywords that share the same intent. The exact number depends on how broad the topic is." } },
        { "@type": "Question", "name": "Is Google Keyword Planner free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Google Keyword Planner is free to use. You need a Google Ads account to access it, but you do not need to run any ads or spend any money. Just create a Google Ads account, skip the campaign setup, and go directly to the Keyword Planner tool." } },
        { "@type": "Question", "name": "What is the difference between keyword research and keyword clustering?", "acceptedAnswer": { "@type": "Answer", "text": "Keyword research is the process of finding keywords people search for. Keyword clustering is the process of organising those keywords into topic groups based on shared intent. You do keyword research first, then cluster the results. Clustering is what turns a list of keywords into a content strategy." } },
        { "@type": "Question", "name": "How does keyword clustering help with AI search?", "acceptedAnswer": { "@type": "Answer", "text": "AI systems like ChatGPT and Google AI Overviews look for comprehensive, authoritative coverage of a topic - not just a page that mentions a keyword. When you build content around keyword clusters, you demonstrate topical authority. This makes your content more likely to be cited by AI systems when someone asks a question in your topic area." } }
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
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/blog/keyword-research-keyword-clusters');
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-keyword-clusters-4Ay3SrDJrk3ZBf9BvnCsnK.png');
    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (ogImageAlt) ogImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: Keyword Research Using Keyword Clusters');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-keyword-clusters-4Ay3SrDJrk3ZBf9BvnCsnK.png');
    const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (twitterImageAlt) twitterImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: Keyword Research Using Keyword Clusters');
    document.title = 'How to Do Keyword Research Using Keyword Clusters (2026 Guide) | KnowHow Marketing Lab';
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(breadcrumbScript);
      document.head.removeChild(faqScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
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
              <li className="text-gray-600">Keyword Research Using Keyword Clusters</li>
            </ol>
          </nav>

          {/* Category + Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-[#e8f4f7] text-[#318599] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>SEO</span>
            <span className="text-sm text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>March 2, 2026</span>
            <span className="text-sm text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>11 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }} itemProp="headline">
            How to Do Keyword Research Using Keyword Clusters (2026 Guide)
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Most keyword research guides teach you how to find keywords. This one teaches you what to do with them. Keyword clustering is the strategy that turns a list of keywords into a content plan - and it is the reason some businesses dominate entire topic areas in Google while others rank for nothing. Here is how to do it using free tools.
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
              src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80"
              alt="Keyword research and keyword clustering strategy - mapping keywords to content topics for SEO"
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
              <li><a href="#what-is-clustering" className="hover:underline">1. What is keyword clustering and why does it matter?</a></li>
              <li><a href="#old-vs-new" className="hover:underline">2. The old way vs the cluster way</a></li>
              <li><a href="#step1-seed" className="hover:underline">3. Step 1 - Find your seed keywords</a></li>
              <li><a href="#step2-expand" className="hover:underline">4. Step 2 - Expand with Google Keyword Planner</a></li>
              <li><a href="#step3-ai" className="hover:underline">5. Step 3 - Use AI to expand your clusters fast</a></li>
              <li><a href="#step4-group" className="hover:underline">6. Step 4 - Group keywords by intent</a></li>
              <li><a href="#step5-map" className="hover:underline">7. Step 5 - Map clusters to pages</a></li>
              <li><a href="#step6-prioritise" className="hover:underline">8. Step 6 - Prioritise which clusters to target first</a></li>
              <li><a href="#gsc-data" className="hover:underline">9. How to use Google Search Console data in your cluster strategy</a></li>
              <li><a href="#faq" className="hover:underline">10. Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* Article Body */}
          <div
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-[#318599] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-li:mb-1 prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-[#318599] prose-blockquote:text-slate-600"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: `
<h2 id="what-is-clustering">What is keyword clustering and why does it matter?</h2>

<p>A keyword cluster is a group of related keywords that all share the same search intent. Instead of targeting one keyword per page, you target a whole cluster - the main topic plus all the related questions and variations people search for around that topic.</p>

<p>Here is a simple example. If you sell accounting software for manufacturers, your seed keyword might be "accounting software for manufacturers." But people also search for "manufacturing ERP software," "job costing software for manufacturers," "inventory accounting software," and "best accounting software for small manufacturers." These are all part of the same cluster. One well-written page that covers the full topic will rank for all of them - not just the one keyword you optimised for.</p>

<p>This matters because Google has shifted from matching keywords to understanding topics. Its systems now evaluate whether your content demonstrates genuine expertise on a subject - what Google calls "topical authority." Keyword clusters are how you build that authority systematically.</p>

<p>It also matters for AI search. When someone asks ChatGPT or Google AI Overviews a question, the AI looks for comprehensive, authoritative coverage of the topic - not just a page that mentions a keyword. Content built around clusters is far more likely to be cited by AI systems. This is a core part of the <a href="/blog/ai-seo-guide">AI SEO strategy</a> we teach at KnowHow Marketing Lab.</p>

<h2 id="old-vs-new">The old way vs the cluster way</h2>

<table>
<thead><tr><th>Old approach (one keyword per page)</th><th>Cluster approach (topic per page)</th></tr></thead>
<tbody>
<tr><td>Write a page targeting "accounting software for manufacturers"</td><td>Write a page covering the full topic: what it is, who needs it, key features, how to choose, top options</td></tr>
<tr><td>Ranks for one keyword (maybe)</td><td>Ranks for 10-50 related keywords</td></tr>
<tr><td>Thin content that Google deprioritises</td><td>Comprehensive content that builds topical authority</td></tr>
<tr><td>No connection between pages</td><td>Pages link to each other, reinforcing the topic cluster</td></tr>
<tr><td>Ignored by AI systems</td><td>More likely to be cited by ChatGPT, Gemini, AI Overviews</td></tr>
</tbody>
</table>

<h2 id="step1-seed">Step 1 - Find your seed keywords</h2>

<p>Seed keywords are the broad topics your business covers. They are not long-tail keywords - they are the main subjects you want to be known for. For most medium-sized businesses, you will have 5 to 15 seed keywords.</p>

<p>The best way to find your seed keywords is to answer this question: <strong>What are the main problems your customers come to you to solve?</strong> Each answer is likely a seed keyword.</p>

<p>For example, a digital marketing agency for manufacturers might have these seed keywords:</p>
<ul>
<li>SEO for manufacturers</li>
<li>Google Ads for manufacturing companies</li>
<li>industrial marketing strategy</li>
<li>B2B lead generation for manufacturers</li>
<li>manufacturing website design</li>
</ul>

<p>Write down your seed keywords before moving to the next step. You will use them as the starting point for your keyword research in Google Keyword Planner.</p>

<p>You can also find seed keywords by looking at what your competitors rank for. Go to <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">Google Search Console</a> and look at the Queries report - the keywords you already rank for are a strong signal of what topics Google associates with your site. If you have not set up Google Search Console yet, read our guide: <a href="/blog/how-to-set-up-google-search-console">How to Set Up Google Search Console (Step by Step)</a>.</p>

<h2 id="step2-expand">Step 2 - Expand with Google Keyword Planner</h2>

<p>Google Keyword Planner is a free tool inside Google Ads. You do not need to run any ads to use it - just create a Google Ads account, skip the campaign setup, and go to Tools > Keyword Planner.</p>

<p>To expand your seed keywords into a full cluster:</p>
<ol>
<li>Click <strong>Discover new keywords</strong></li>
<li>Enter one of your seed keywords (e.g., "SEO for manufacturers")</li>
<li>Set your location to your target market (Canada, United States, etc.)</li>
<li>Click <strong>Get results</strong></li>
</ol>

<p>Google will show you a list of related keywords with monthly search volume, competition level, and suggested bid ranges. Download this list as a CSV file - you will use it in Step 4.</p>

<p>Key things to look for in the results:</p>
<ul>
<li><strong>Monthly search volume</strong> - how many people search for this keyword each month. Anything above 100 searches per month is worth considering for a medium-sized business.</li>
<li><strong>Competition</strong> - how many advertisers are bidding on this keyword. High competition often means high commercial intent - people searching this keyword are ready to buy.</li>
<li><strong>Long-tail variations</strong> - keywords with 4 or more words that are more specific. These are often easier to rank for and convert better because the searcher knows exactly what they want.</li>
</ul>

<p>Repeat this process for each of your seed keywords. You will end up with a large list of keywords - that is fine. The next step is to organise them.</p>

<h2 id="step3-ai">Step 3 - Use AI to expand your clusters fast</h2>

<p>Once you have your Keyword Planner data, use an AI tool to expand each cluster further. This is one of the most time-saving applications of AI in SEO.</p>

<p>Open ChatGPT or Gemini and use a prompt like this:</p>

<blockquote>
<p>"I am writing a comprehensive guide about [your seed keyword] for [your target audience]. Give me 20 related questions and keyword variations that someone searching this topic might also search for. Include question-based keywords (how to, what is, why does), comparison keywords (vs, alternative, best), and long-tail variations."</p>
</blockquote>

<p>The AI will generate a list of keyword ideas that complement what you found in Keyword Planner. Add the relevant ones to your keyword list. You are not trying to rank for all of them - you are trying to understand the full shape of the topic so your content covers it completely.</p>

<p>This is part of the "Find" phase in the <a href="/our-method">Data-First AI SEO Method</a> - using data and AI together to build a complete picture of what your audience is searching for before you write a single word.</p>

<h2 id="step4-group">Step 4 - Group keywords by intent</h2>

<p>Now you have a large list of keywords. The next step is to group them by search intent - what the person searching actually wants to find or do.</p>

<p>There are four main types of search intent:</p>

<table>
<thead><tr><th>Intent type</th><th>What the searcher wants</th><th>Example keywords</th></tr></thead>
<tbody>
<tr><td><strong>Informational</strong></td><td>To learn something</td><td>"what is keyword clustering," "how does SEO work"</td></tr>
<tr><td><strong>Navigational</strong></td><td>To find a specific website or page</td><td>"Google Keyword Planner login," "KnowHow Marketing Lab blog"</td></tr>
<tr><td><strong>Commercial</strong></td><td>To research before buying</td><td>"best SEO tools for manufacturers," "keyword research software comparison"</td></tr>
<tr><td><strong>Transactional</strong></td><td>To buy or take action</td><td>"hire SEO agency for manufacturers," "buy keyword research tool"</td></tr>
</tbody>
</table>

<p>Keywords with the same intent belong in the same cluster. Keywords with different intent belong on different pages - even if they are about the same general topic. For example, "what is keyword clustering" (informational) and "keyword clustering tool" (commercial) should be on separate pages because the searcher wants different things.</p>

<p>Go through your keyword list and tag each keyword with its intent type. Then group the informational keywords together, the commercial keywords together, and so on. Each group is a cluster - and each cluster maps to one page on your website.</p>

<h2 id="step5-map">Step 5 - Map clusters to pages</h2>

<p>Each keyword cluster maps to one page. The rule is: <strong>one cluster, one page</strong>. Do not try to target multiple unrelated clusters on a single page - Google will not know what the page is about and will not rank it for anything.</p>

<p>Here is how to map your clusters to pages:</p>

<table>
<thead><tr><th>Cluster type</th><th>Best page type</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Broad informational topic</td><td>Pillar post (long, comprehensive guide)</td><td>"SEO for manufacturers - the complete guide"</td></tr>
<tr><td>Specific subtopic</td><td>Cluster post (focused, detailed article)</td><td>"How to do keyword research for manufacturing companies"</td></tr>
<tr><td>Commercial / comparison</td><td>Service page or comparison page</td><td>"Best SEO agency for manufacturers in Canada"</td></tr>
<tr><td>Transactional / local</td><td>Landing page</td><td>"SEO services for manufacturers in Toronto"</td></tr>
</tbody>
</table>

<p>The pillar post covers the broad topic. The cluster posts cover specific subtopics in more detail. Each cluster post links back to the pillar post, and the pillar post links out to all the cluster posts. This internal linking structure tells Google that your site has comprehensive coverage of the topic - which is exactly what builds topical authority.</p>

<h2 id="step6-prioritise">Step 6 - Prioritise which clusters to target first</h2>

<p>You cannot write all your content at once. Here is how to prioritise which clusters to tackle first:</p>

<h3>Priority 1 - Clusters where you already have some ranking</h3>
<p>Check Google Search Console for keywords where you rank between position 4 and 15. These are your "almost there" keywords - you are already on page one or close to it. A well-written cluster post targeting these keywords can push you into the top 3 faster than starting from scratch.</p>

<h3>Priority 2 - Clusters with high commercial intent and moderate volume</h3>
<p>Keywords with 200 to 2,000 monthly searches and high competition often indicate strong commercial intent. These are the keywords that bring in customers who are ready to buy, not just browsers.</p>

<h3>Priority 3 - Clusters that directly support your core service</h3>
<p>If you sell accounting software for manufacturers, your highest priority cluster is "accounting software for manufacturers" - not a tangentially related topic. Start with the clusters that are closest to what you actually sell.</p>

<h3>Priority 4 - Clusters with low competition and growing volume</h3>
<p>New topics (like AI SEO, GEO, or AI Overviews) often have lower competition because fewer people have written about them yet. Getting in early on a growing topic can establish your site as an authority before the competition catches up.</p>

<h2 id="gsc-data">How to use Google Search Console data in your cluster strategy</h2>

<p>Once you have been running Google Search Console for a few months, it becomes your most valuable keyword research tool - because it shows you real data about your actual website, not just general market data.</p>

<p>Here is how to use it in your cluster strategy:</p>

<ol>
<li><strong>Find your existing clusters</strong> - In the Performance report, look at which keywords are already bringing you traffic. Group them by topic. These are your existing clusters - they tell you which topics Google already associates with your site.</li>
<li><strong>Find gaps in your clusters</strong> - If you rank for "SEO for manufacturers" but not for "keyword research for manufacturers" or "on-page SEO for manufacturing companies," those are gaps in your cluster. Write content to fill them.</li>
<li><strong>Find your "almost there" keywords</strong> - Filter the Performance report by average position 4-15. These keywords are close to the top of page one. A targeted cluster post can often push them into the top 3.</li>
<li><strong>Track cluster performance over time</strong> - As you add cluster posts, watch whether the total impressions and clicks for that topic area grow. This is how you measure whether your cluster strategy is working.</li>
</ol>

<p>For a full walkthrough of how to set up and read Google Search Console, see our guide: <a href="/blog/how-to-set-up-google-search-console">How to Set Up Google Search Console (Step by Step)</a>.</p>

<h2 id="faq">Frequently Asked Questions</h2>

<h3>What is a keyword cluster?</h3>
<p>A keyword cluster is a group of related keywords that all share the same search intent. Instead of targeting one keyword per page, you target a whole cluster - the main topic plus all the related questions and variations people search for around that topic. This is how Google evaluates topical authority, and it is how modern SEO content strategy works.</p>

<h3>How many keywords should be in a cluster?</h3>
<p>A typical keyword cluster has 5 to 20 keywords. The main head term plus 4 to 19 related long-tail keywords and question keywords that share the same intent. The exact number depends on how broad the topic is. A broad topic like "SEO for manufacturers" might have 30 or more keywords in its cluster. A narrow topic like "how to set up conversion tracking in GA4" might have 5 to 8.</p>

<h3>Is Google Keyword Planner free?</h3>
<p>Yes. Google Keyword Planner is completely free. You need a Google Ads account to access it, but you do not need to run any ads or spend any money. Create a Google Ads account at ads.google.com, skip the campaign setup, and go to Tools > Keyword Planner. All the data is available at no cost.</p>

<h3>What is the difference between keyword research and keyword clustering?</h3>
<p>Keyword research is the process of finding keywords people search for. Keyword clustering is the process of organising those keywords into topic groups based on shared intent. You do keyword research first, then cluster the results. Clustering is what turns a list of keywords into a content strategy. Without clustering, keyword research is just a spreadsheet of words. With clustering, it becomes a roadmap for your content.</p>

<h3>How does keyword clustering help with AI search?</h3>
<p>AI systems like ChatGPT and Google AI Overviews look for comprehensive, authoritative coverage of a topic - not just a page that mentions a keyword. When you build content around keyword clusters, you demonstrate topical authority. This makes your content more likely to be cited by AI systems when someone asks a question in your topic area. This is a core part of Generative Engine Optimization (GEO) - the strategy of making your content visible in AI-generated answers, not just traditional search results.</p>

<h3>How many clusters should a medium-sized business target?</h3>
<p>Start with 3 to 5 clusters that are directly related to your core services. Build out each cluster fully before moving to the next one. A well-built cluster of 5 to 10 pieces of content will outperform 50 thin, unrelated pages every time. Quality and topical depth beat volume.</p>
            ` }}
          />

          {/* CTA Banner */}
          <div className="mt-12 bg-[#0f2236] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Learn the full keyword and content strategy in the free course
            </h2>
            <p className="text-white/80 mb-6 text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The free AI + SEO Course covers keyword research, Google Keyword Planner, on-page SEO, and content strategy - step by step. No credit card required.
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
                { href: '/blog/how-to-set-up-google-search-console', title: 'How to Set Up Google Search Console (Step by Step)', category: 'SEO', time: '10 min read' },
                { href: '/blog/ga4-explained-for-business-owners', title: 'GA4 Explained for Business Owners', category: 'SEO', time: '9 min read' },
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

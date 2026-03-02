import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Link } from 'wouter';

const POST_CONTENT = `<p>By Pip Seymour • December 20, 2025 • 5 min read</p>

<figure class="wp-block-kadence-image kb-image8891_e9d1a9-1c size-large"><img src="https://knowhowmarketinglab.com/wp-content/uploads/2025/12/google_ads_masterclass_hero-1024x572.png" alt="man working on google ads and conversions are the main target" class="kb-img wp-image-8892"/></figure>

<p>Let’s be honest: Google Ads feels like a casino where the house always wins.</p>

<p>You pour money in, pull the lever, and hope for the best. Some days you get a few clicks, other days you get nothing but a bill. It’s frustrating, expensive, and it feels like you’re always one step behind.</p>

<p>What if you could stop gambling and start building a predictable, profitable system? What if you had the exact roadmap that agencies use to turn ad spend into a consistent flow of customers?</p>

<p>We’ve built it. And it’s available exclusively to members of the KnowHow Marketing Lab.</p>

<h2 id="introducing-the-5-week-google-ads-masterclass">Introducing: The 5-Week Google Ads Masterclass</h2>

<p>This isn’t a playlist of random YouTube videos. It’s a structured, 5-week accelerator designed to take you from a confused beginner to a confident, data-driven marketer. We don’t just show you what to do; we show you how to do it, step-by-step.</p>

<p>This is the system we use for our own clients, now available to you.</p>

<p>Ready to stop guessing and start growing?</p>

<h2 id="the-khml-google-ads-mastery-framework">The KHML Google Ads Mastery Framework</h2>

<figure class="wp-block-image size-large"><img src="https://knowhowmarketinglab.com/wp-content/uploads/2025/12/khml_framework_graphic-572x1024.png" alt="" class="wp-image-8893"/></figure>

<p>This is the curriculum we'll follow. We recommend watching one class per week to give yourself time to implement the homework and see real results in your campaigns. Then come to a Q & A to get your questions answered</p>

<p>Before you can build a house, you need a solid foundation. This class ensures you understand the core concepts that 90% of beginners skip. We'll demystify the platform and give you the confidence to navigate it like a pro.</p>

<p>What You'll Master:Understanding how Google Ads works isn't optional—it's the difference between profitable campaigns and wasted budget. In this first class, we break down the Google Ads Auction so you understand why it's not just about the highest bid. You'll learn how <a href="https://youtu.be/E5iVGlfjxTc" target="_blank" rel="noreferrer noopener">Quality Score</a> impacts your costs and why relevance is more important than budget size.</p>

<h2 id="the-roadmap-what-you-ll-master-in-5-weeks">The Roadmap: What You’ll Master in 5 Weeks</h2>

<p>Here’s the curriculum—the exact path you’ll follow to build your profit machine.</p>

<h3 class="wp-block-heading">Week 1: The Foundation (Class 1)</h3>

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/_jqGM9V1QHY
</div></figure>

<p>Before you spend a single dollar, you need to understand the game. We cover the non-negotiable fundamentals, including the one thing that determines if you get a “discount” on your clicks: <a href="https://youtu.be/E5iVGlfjxTc" target="_blank" rel="noreferrer noopener">Quality Score</a></p>

<p>Quick Tip (The Simple Version): Quality Score is just Google’s grade on how helpful your ad is. It answers three questions:</p>

<ol class="wp-block-list">
<li>Does your ad match the search? (Ad Relevance)</li>

<li>Do people actually click your ad? (Expected CTR)</li>

<li>Is your website good? (Landing Page Experience) Get an ‘A’ on these, and Google rewards you with cheaper clicks and better placements.<br><br>Full Free Class: <a href="https://knowhowmarketinglab.com/google-ads-class-1-fundamentals/">Google Ads Fundamentals</a></li>
</ol>

<h3 class="wp-block-heading">Week 2: Building Your First Search Campaign (Class 2)</h3>

<p>This is where the rubber meets the road. We guide you through building a professional search campaign from scratch, including keyword research, ad <a href="https://knowhowmarketinglab.com/adgroups-based-on-user-intent/">copywriting that converts</a>, and structuring your campaigns for success.</p>

<h3 class="wp-block-heading">Week 3: Mastering Automation (Class 3)</h3>

<p>Meet Performance Max and Demand Gen—Google’s powerful AI-driven campaign types. We show you how to “feed the machine” the right data to find customers you never knew you had, across YouTube, Gmail, and the Discover feed.</p>

<h3 class="wp-block-heading">Week 4: Tracking What Matters (Class 4)</h3>

<p>An ad campaign without conversion tracking is just a hobby. We walk you through the technical setup (made simple) to ensure you know exactly which ads are making you money and which are wasting it.</p>

<h3 class="wp-block-heading">Week 5: The Optimization Engine (Class 5)</h3>

<p>Your campaign is live—now the real work begins. We teach you the weekly and monthly rhythms of optimization, from managing negative keywords to <a href="https://knowhowmarketinglab.com/the-ultimate-guide-to-google-ads-bidding-strategies-2026-edition/">adjusting bids </a>and scaling your winners.</p>

<h3 class="wp-block-heading">Why is This Exclusive to the Lab?</h3>

<p>Because information alone isn’t enough. Transformation requires support.</p>

<p>Inside the KnowHow Marketing Lab, you don’t just get the videos. You get:</p>

<ul class="wp-block-list">
<li>Direct Support: Stuck on a step? Ask in the community and get answers from us and other members.</li>

<li>Homework & Feedback: Each class has an assignment. Post your work, and we’ll help you improve.</li>

<li>The Full Asset Library: Download all the slide decks, checklists, and templates.</li>

<li>A Community of Peers: Learn alongside other business owners who are on the same journey.</li>
</ul>

<h2 id="stop-gambling-start-building">Stop Gambling. Start Building.</h2>

<p>For less than the cost of a few wasted clicks on a bad campaign, you can get the entire system to build a profitable one.</p>

<p>This masterclass is your path to turning Google Ads from an expense into your most powerful growth engine.</p>

<p><a href="https://www.skool.com/knowhow-marketing-lab/" target="_blank" rel="noreferrer noopener">Join the KnowHow Marketing Lab</a> to access the Masterclass</p>

<div class="wp-block-buttons">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.skool.com/knowhow-marketing-lab/" target="_blank" rel="noreferrer noopener">Join Us and Learn Google Ads </a></div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Free Google Ads Masterclass: The 5-Week Roadmap to Profitable Campaigns",
  "description": "A complete 5-week Google Ads training program for medium-sized businesses. Learn fundamentals, campaign creation, automation, conversion tracking, and optimization.",
  "image": "https://knowhowmarketinglab.com/wp-content/uploads/google_ads_masterclass_hero.png",
  "author": {
    "@type": "Person",
    "name": "Pip Seymour",
    "url": "https://seymourdigitalmedia.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "KnowHow Marketing Lab",
    "logo": {
      "@type": "ImageObject",
      "url": "https://knowhowmarketinglab.com/wp-content/uploads/KHML-Logo.png"
    }
  },
  "datePublished": "2025-12-20",
  "dateModified": "2025-12-20"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://knowhowmarketinglab.com/wp-content/uploads/google_ads_masterclass_hero.png",
  "description": "Business professional managing Google Ads campaigns with conversion growth metrics",
  "name": "Google Ads Masterclass Hero Image"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://knowhowmarketinglab.com/wp-content/uploads/khml_framework_graphic.png",
  "description": "The KHML Google Ads Mastery Framework: 5-week learning pathway from fundamentals to optimization",
  "name": "KHML Google Ads Mastery Framework"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://knowhowmarketinglab.com/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/#webpage",
      "url": "https://knowhowmarketinglab.com/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/",
      "name": "Google Ads Masterclass: The 5-Week Roadmap to Profitable Campaigns"
    },
    {
      "@type": "Person",
      "@id": "https://knowhowmarketinglab.com/#person-pip-seymour",
      "name": "Pip Seymour",
      "url": "https://knowhowmarketinglab.com/"
    },
    {
      "@type": "Organization",
      "@id": "https://knowhowmarketinglab.com/#organization",
      "name": "KnowHow Marketing Lab",
      "url": "https://knowhowmarketinglab.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://knowhowmarketinglab.com/wp-content/uploads/2025/08/cropped-KHML-Logo-V04_LOGO.webp"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://knowhowmarketinglab.com/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/#image-hero",
      "url": "https://knowhowmarketinglab.com/wp-content/uploads/2025/12/google_ads_masterclass_hero-1024x572.png"
    },
    {
      "@type": "ImageObject",
      "@id": "https://knowhowmarketinglab.com/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/#image-framework",
      "url": "https://knowhowmarketinglab.com/wp-content/uploads/2025/12/khml_framework_graphic-scaled.png"
    },
    {
      "@type": "VideoObject",
      "@id": "https://knowhowmarketinglab.com/google-ads-class-1-fundamentals/#video",
      "name": "Google Ads Class 1: Fundamentals",
      "description": "Beginner Google Ads class covering fundamentals, campaign types, the ad auction, Quality Score, and key metrics.",
      "uploadDate": "2025-12-27",
      "duration": "PT1H",
      "contentUrl": "https://youtu.be/_jqGM9V1QHY",
      "embedUrl": "https://www.youtube.com/embed/_jqGM9V1QHY?si=QNs-2OGN3nHJh8pP",
      "publisher": {
        "@id": "https://knowhowmarketinglab.com/#organization"
      },
      "creator": {
        "@id": "https://knowhowmarketinglab.com/#person-pip-seymour"
      }
    },
    {
      "@type": "BlogPosting",
      "@id": "https://knowhowmarketinglab.com/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/#post",
      "headline": "Google Ads Masterclass: The 5-Week Roadmap to Profitable Campaigns",
      "datePublished": "2025-12-20",
      "dateModified": "2025-12-20",
      "author": {
        "@id": "https://knowhowmarketinglab.com/#person-pip-seymour"
      },
      "publisher": {
        "@id": "https://knowhowmarketinglab.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://knowhowmarketinglab.com/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/#webpage"
      },
      "isAccessibleForFree": false,
      "image": [
        { "@id": "https://knowhowmarketinglab.com/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/#image-hero" },
        { "@id": "https://knowhowmarketinglab.com/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/#image-framework" }
      ],
      "about": [
        "Google Ads",
        "PPC",
        "Search advertising",
        "Performance Max",
        "Conversion tracking",
        "Campaign optimization"
      ],
      "keywords": [
        "Google Ads masterclass",
        "Google Ads roadmap",
        "PPC",
        "Quality Score",
        "Search campaign",
        "Performance Max",
        "Conversion tracking",
        "Optimization"
      ],
      "description": "A structured 5-week Google Ads masterclass roadmap designed to take beginners from fundamentals to profitable campaign optimization inside the KnowHow Marketing Lab."
    },
    {
      "@type": "Course",
      "@id": "https://knowhowmarketinglab.com/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/#course",
      "name": "Google Ads Masterclass: The 5-Week Roadmap to Profitable Campaigns",
      "description": "A structured 5-week accelerator designed to take students from beginner fundamentals to confident, data-driven Google Ads campaign creation and optimization.",
      "educationalLevel": "Beginner",
      "inLanguage": "en",
      "provider": {
        "@id": "https://knowhowmarketinglab.com/#organization"
      },
      "creator": {
        "@id": "https://knowhowmarketinglab.com/#person-pip-seymour"
      },
      "isAccessibleForFree": false,
      "offers": {
        "@type": "Offer",
        "url": "https://www.skool.com/knowhow-marketing-lab/about?ref=455e817e556949058a9b18745bbc56ed",
        "category": "Subscription",
        "availability": "https://schema.org/InStock"
      },
      "coursePrerequisites": "No prior Google Ads experience required.",
      "teaches": [
        "Google Ads fundamentals and the ad auction",
        "Building a search campaign from scratch",
        "Automation campaign types (Performance Max, Demand Gen)",
        "Conversion tracking and measurement setup",
        "Ongoing optimization and scaling routines"
      ],
      "hasPart": [
        {
          "@type": "Course",
          "name": "Week 1: The Foundation (Class 1)",
          "url": "https://knowhowmarketinglab.com/google-ads-class-1-fundamentals/"
        },
        {
          "@type": "Course",
          "name": "Week 2: Building Your First Search Campaign (Class 2)"
        },
        {
          "@type": "Course",
          "name": "Week 3: Mastering Automation (Class 3)"
        },
        {
          "@type": "Course",
          "name": "Week 4: Tracking What Matters (Class 4)"
        },
        {
          "@type": "Course",
          "name": "Week 5: The Optimization Engine (Class 5)"
        }
      ],
      "video": {
        "@id": "https://knowhowmarketinglab.com/google-ads-class-1-fundamentals/#video"
      }
    }
  ]
}
</script>`;

export default function PostGoogleAdsMasterclassThe5WeekRoadmapToProfitableCampaigns() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Google Ads Masterclass: The 5-Week Roadmap to Profitable Campaigns",
  "description": "By Pip Seymour \u2022 December 20, 2025 \u2022 5 min read Let\u2019s be honest: Google Ads feels like a casino where the house always wins. You pour money in, pull the...",
  "datePublished": "2025-12-20",
  "dateModified": "2025-12-20",
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
      "url": "https://knowhowmarketinglab.com/wp-content/uploads/2025/08/cropped-KHML-Logo-V04_FAVICON-1-180x180.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://knowhowmarketinglab.com/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/"
  }
});
    document.head.appendChild(script);
    document.title = 'Google Ads Masterclass: The 5-Week Roadmap to Profitable Campaigns | KnowHow Marketing Lab';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'By Pip Seymour • December 20, 2025 • 5 min read Let’s be honest: Google Ads feels like a casino where the house always wins. You pour money in, pull the...');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/');
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-[#318599]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#318599]">Blog</Link>
            <span>/</span>
            <span className="text-slate-700 truncate">Google Ads Masterclass: The 5-Week Roadmap to Profitable Campaigns</span>
          </nav>
          {/* Category + Date */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#E98C28' }}>
              Google Ads
            </span>
            <time className="text-sm text-slate-500" dateTime="2025-12-20">December 20, 2025</time>
          </div>
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
            Google Ads Masterclass: The 5-Week Roadmap to Profitable Campaigns
          </h1>
          {/* Author */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-slate-200">
            <div className="w-10 h-10 rounded-full bg-[#318599] flex items-center justify-center text-white font-bold text-sm">PS</div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Pip Seymour</p>
              <p className="text-xs text-slate-500">KnowHow Marketing Lab</p>
            </div>
          </div>


        {/* Table of Contents */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">In This Article</h2>
          <ol className="list-decimal list-inside space-y-1.5">
              <li key="introducing-the-5-week-google-ads-masterclass"><a href="#introducing-the-5-week-google-ads-masterclass" className="text-[#318599] hover:underline text-sm">Introducing: The 5-Week Google Ads Masterclass</a></li>
              <li key="the-khml-google-ads-mastery-framework"><a href="#the-khml-google-ads-mastery-framework" className="text-[#318599] hover:underline text-sm">The KHML Google Ads Mastery Framework</a></li>
              <li key="the-roadmap-what-you-ll-master-in-5-weeks"><a href="#the-roadmap-what-you-ll-master-in-5-weeks" className="text-[#318599] hover:underline text-sm">The Roadmap: What You’ll Master in 5 Weeks</a></li>
              <li key="stop-gambling-start-building"><a href="#stop-gambling-start-building" className="text-[#318599] hover:underline text-sm">Stop Gambling. Start Building.</a></li>
          </ol>
        </nav>
          {/* Article Content */}
          <div
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-[#318599] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-li:mb-1 prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-[#318599] prose-blockquote:text-slate-600"
            dangerouslySetInnerHTML={{ __html: POST_CONTENT }}
          />
          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#318599] to-[#4F37D8] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Want to put this into practice?</h2>
            <p className="text-white/80 mb-6">Join The Lab — live monthly training, community support, and the Data-First AI SEO Method.</p>
            <a href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce" className="inline-block bg-white text-[#318599] font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Join The Lab — $29/month
            </a>
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
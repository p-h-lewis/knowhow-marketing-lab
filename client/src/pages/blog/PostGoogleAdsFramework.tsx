// /blog/google-ads-framework, The KnowHow Google Ads Framework pillar post
// Design: White/light, Space Grotesk headings, DM Sans body, orange #E98C28, teal #318599
// Schema: Article, FAQPage, HowTo, BreadcrumbList
// Internal links: /courses/google-ads, /community, /pricing, /blog/the-ultimate-guide-to-google-ads-campaign-types, /blog/the-ultimate-guide-to-google-ads-bidding-strategies
// GEO: Named framework "The KnowHow Google Ads Framework", complete 5-phase methodology, structured for AI citation
// Target audience: Medium-sized businesses, marketing managers, business owners

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { Link } from 'wouter';

const COMMUNITY_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce';

const phases = [
  {
    num: '01',
    title: 'Foundation, Set Up to Measure Everything',
    subtitle: 'Before you spend a dollar, make sure every click is tracked.',
    color: '#318599',
    steps: [
      { name: 'Conversion tracking', desc: 'Install Google Ads conversion tracking for every meaningful action: form submissions, phone calls, purchases, and key page visits. Without this, Google\'s AI has no signal to optimise toward. This is the single most important setup step.' },
      { name: 'Google Analytics 4 (GA4)', desc: 'Link your Google Ads account to GA4. Import GA4 conversions into Google Ads. This gives you a complete picture of what happens after the click, not just whether someone converted, but how long they stayed, what pages they visited, and whether they came back.' },
      { name: 'Google Tag Manager (GTM)', desc: 'Use GTM to manage all your tracking tags in one place. This makes it easy to add, update, or troubleshoot tracking without touching your website code every time.' },
      { name: 'Audience lists', desc: 'Create remarketing audiences in Google Ads before you launch: all website visitors, visitors who viewed key pages, and visitors who started but did not complete a conversion. You will not use these immediately, but they need time to populate.' },
    ],
    aiTip: 'Use ChatGPT to audit your conversion tracking setup: "Here is my Google Ads conversion action list [paste it]. What am I missing? What should I add for a [your business type] business?"'
  },
  {
    num: '02',
    title: 'Research, Know Your Market Before You Bid',
    subtitle: 'The campaigns that fail are the ones launched without research.',
    color: '#E98C28',
    steps: [
      { name: 'Keyword research', desc: 'Use Google Keyword Planner to find the exact phrases your customers type when they are ready to buy or hire. Focus on commercial intent keywords, phrases that indicate someone is actively looking for a solution, not just learning about a topic. Group keywords by intent: high-intent (ready to buy), mid-intent (comparing options), and low-intent (researching).' },
      { name: 'Competitor analysis', desc: 'Run your top competitors through Google\'s Auction Insights (available once your campaigns are live) and use the Ad Preview and Diagnosis tool to see what ads appear for your target keywords. Note their messaging, offers, and landing pages. Your goal is not to copy them, it is to differentiate.' },
      { name: 'Search intent mapping', desc: 'For each keyword group, identify the search intent: informational (learning), navigational (looking for a specific site), or transactional (ready to act). Only bid on transactional keywords in your first campaigns. Informational keywords burn budget without driving conversions.' },
      { name: 'Budget and CPA benchmarking', desc: 'Before you set a budget, estimate your target cost per acquisition (CPA). If your average customer is worth $2,000 and you close 1 in 5 leads, your lead is worth $400. You can afford to spend up to $400 to acquire a lead and still be profitable. This number drives every budget and bidding decision.' },
    ],
    aiTip: 'Ask ChatGPT: "I run a [business type] in [location]. Give me 20 high-intent Google Ads keywords that a potential customer would type when they are ready to hire or buy. Separate them by intent level."'
  },
  {
    num: '03',
    title: 'Build, Structure Your Account for Scale',
    subtitle: 'Account structure is the difference between a campaign you can optimise and one you cannot.',
    color: '#4F37D8',
    steps: [
      { name: 'Campaign structure', desc: 'Start with one Search campaign per product or service category. Do not put everything in one campaign, you lose the ability to control budgets and settings per category. Each campaign should have a clear goal, a daily budget, and a target geographic area.' },
      { name: 'Ad group structure based on user intent', desc: 'Within each campaign, create ad groups based on user intent, not just topic. A "plumber near me" ad group has different intent than a "how to fix a leaking pipe" ad group. Group keywords with the same intent together so you can write ads that match exactly what the user is looking for. Read our full guide on <a href="/blog/adgroups-based-on-user-intent" class="text-[#318599] hover:underline">ad groups based on user intent</a>.' },
      { name: 'Responsive Search Ads (RSAs)', desc: 'Write 10-15 headlines and 4 descriptions for each ad group. Include your target keyword in at least 3 headlines. Lead with the benefit, not the feature. Include a clear call to action. Pin your most important headline in position 1 so it always shows. Google\'s AI will test combinations and find the best performers.' },
      { name: 'Landing pages', desc: 'Every ad group should send traffic to a landing page that matches the ad\'s message exactly. If your ad says "Free Quote for Commercial Plumbing," the landing page should be about commercial plumbing with a free quote form, not your homepage. Message match is one of the highest-impact conversion rate factors.' },
    ],
    aiTip: 'Use ChatGPT to write your RSA headlines: "Write 15 Google Ads headlines for a [business type] targeting [keyword]. Each headline must be under 30 characters. Lead with the benefit. Include urgency where appropriate."'
  },
  {
    num: '04',
    title: 'Optimise, Let Data Drive Every Decision',
    subtitle: 'The first 30 days are about learning. After that, every decision should be data-driven.',
    color: '#318599',
    steps: [
      { name: 'Search term reports', desc: 'Review your search term report weekly for the first month. Add irrelevant terms as negative keywords immediately. Look for high-performing search terms that are not in your keyword list, add them as exact match keywords. This is where most of the early budget waste is found and fixed.' },
      { name: 'Bidding strategy progression', desc: 'Start with Manual CPC or Maximise Clicks to gather data. Once you have 30+ conversions in a 30-day period, switch to a Smart Bidding strategy (Target CPA or Target ROAS). Smart Bidding needs conversion data to work, launching it on a new campaign with no data is one of the most common Google Ads mistakes. Read our full guide on <a href="/blog/the-ultimate-guide-to-google-ads-bidding-strategies" class="text-[#318599] hover:underline">Google Ads bidding strategies</a>.' },
      { name: 'Quality Score optimisation', desc: 'Quality Score (1-10) affects how much you pay per click and where your ads appear. Improve it by increasing ad relevance (match ad copy to keywords), improving expected CTR (write more compelling headlines), and improving landing page experience (faster load times, relevant content, clear CTA).' },
      { name: 'Asset performance review', desc: 'In your RSAs, check which headlines and descriptions are rated "Best," "Good," or "Low." Replace "Low" rated assets with new variations. Over time, you will build a library of proven messaging that you can use across campaigns.' },
    ],
    aiTip: 'Export your search term report and paste the top 50 terms into ChatGPT. Ask: "Which of these search terms are not relevant to [your business]? Which should I add as negative keywords?"'
  },
  {
    num: '05',
    title: 'Scale, Grow What Works, Cut What Does Not',
    subtitle: 'Scaling is not about spending more. It is about spending more on what is already working.',
    color: '#E98C28',
    steps: [
      { name: 'Budget reallocation', desc: 'Once you have 60+ days of data, identify your best-performing campaigns by cost per conversion. Increase budgets on campaigns with a CPA below your target. Reduce or pause campaigns with a CPA above your target. Do not increase budgets on underperforming campaigns hoping they will improve, fix them first.' },
      { name: 'Remarketing campaigns', desc: 'Your remarketing audiences should now be populated (from Phase 1). Launch a Display or Demand Gen remarketing campaign targeting people who visited your site but did not convert. These people already know you, they are far cheaper to convert than cold traffic.' },
      { name: 'Performance Max (when ready)', desc: 'Once you have strong conversion data and proven messaging, consider adding a Performance Max campaign. PMax uses your existing assets and conversion data to find new customers across all Google channels. It works best as a complement to your Search campaigns, not a replacement. Read our full guide on <a href="/blog/the-ultimate-guide-to-google-ads-campaign-types" class="text-[#318599] hover:underline">Google Ads campaign types</a>.' },
      { name: 'Reporting and iteration', desc: 'Build a monthly reporting cadence. Track: total spend, total conversions, cost per conversion, conversion rate, and impression share. Compare month over month. Set a clear target CPA or ROAS for each campaign and make decisions based on whether you are hitting it, not on gut feel.' },
    ],
    aiTip: 'Ask ChatGPT: "Here is my Google Ads performance data for the last 30 days: [paste data]. Which campaigns should I scale, which should I optimise, and which should I pause? Explain your reasoning."'
  }
];

const faqs = [
  {
    q: 'What is The KnowHow Google Ads Framework?',
    a: 'The KnowHow Google Ads Framework is a 5-phase methodology for building, managing, and scaling Google Ads campaigns for medium-sized businesses. The five phases are: Foundation (tracking setup), Research (keyword and competitor analysis), Build (account structure and ad creation), Optimise (data-driven improvements), and Scale (growing what works). It is taught in the KnowHow Marketing Lab Google Ads course and in The Lab community.'
  },
  {
    q: 'How much should a medium-sized business spend on Google Ads?',
    a: 'There is no universal answer, but a practical starting point for most medium-sized businesses is $1,500 to $3,000 per month. This gives Google\'s AI enough data to optimise within 30 to 60 days. The right budget depends on your target cost per acquisition (CPA), your average customer value, and how competitive your keywords are. Use Google Keyword Planner to estimate average CPCs in your category, then work backwards from your CPA target to set a realistic budget.'
  },
  {
    q: 'How long does it take for Google Ads to work?',
    a: 'Most Google Ads campaigns need 30 to 90 days to reach full performance. The first 30 days are a learning phase, Google\'s AI is gathering data about which users convert. Days 30 to 60 are the optimisation phase, you use your search term data to add negative keywords, improve ad copy, and refine targeting. By day 90, you should have enough conversion data to switch to Smart Bidding and start scaling. Campaigns that are paused or heavily modified during the learning phase take longer to reach performance.'
  },
  {
    q: 'What is the most important Google Ads metric to track?',
    a: 'Cost per conversion (also called cost per acquisition or CPA) is the most important metric for most businesses. It tells you exactly how much you are paying to acquire a customer or lead. Compare your CPA to your customer lifetime value to determine whether your campaigns are profitable. Clicks, impressions, and CTR are secondary metrics, they matter, but only in the context of whether they are driving conversions at a profitable cost.'
  },
  {
    q: 'Should I use Performance Max or Search campaigns?',
    a: 'Start with Search campaigns. They give you the most control and transparency, you can see exactly which keywords and search terms are driving results. Once you have 60+ conversions and proven messaging, add a Performance Max campaign as a complement to your Search campaigns. PMax works best when it has strong conversion data and high-quality creative assets to work with. Running PMax without conversion data or without Search campaigns running alongside it is one of the most common Google Ads mistakes.'
  },
  {
    q: 'What is a good Google Ads conversion rate?',
    a: 'Average Google Ads conversion rates vary significantly by industry. For lead generation (form submissions), 2% to 5% is typical. For e-commerce, 1% to 3% is common. For high-intent service businesses (like legal, medical, or home services), 5% to 15% is achievable with well-optimised landing pages. The most important benchmark is your own historical data, focus on improving your conversion rate month over month rather than comparing to industry averages.'
  },
  {
    q: 'Do I need a Google Ads agency or can I manage it myself?',
    a: 'You can manage Google Ads yourself if you invest in learning the platform properly. The KnowHow Marketing Lab offers a Google Ads Bootcamp — included in The Lab at $29/mo covering the fundamentals, and The Lab community ($29/month) provides live weekly training where Pip and Phelan work through your actual campaigns in real time. Many medium-sized businesses manage their own Google Ads successfully with the right training and tools. An agency makes sense when you have proven campaigns you want to scale aggressively, or when you do not have the time to manage the platform yourself.'
  },
  {
    q: 'What is the difference between Google Ads and SEO?',
    a: 'Google Ads (paid search) puts your business at the top of search results immediately, you pay per click. SEO (organic search) builds your rankings over time through content and technical optimisation, it is free per click but takes months to see results. For most businesses, the best strategy is to use Google Ads for immediate traffic and lead generation while building SEO for long-term organic growth. They are complementary, not competing strategies.'
  }
];

export default function PostGoogleAdsFramework() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'The KnowHow Google Ads Framework, 5 Phases to Profitable Campaigns | KnowHow Marketing Lab';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'The complete Google Ads framework for medium-sized businesses. The KnowHow 5-phase method: Foundation, Research, Build, Optimise, Scale. Learn how to build profitable Google Ads campaigns from scratch.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/blog/google-ads-framework');

    // Article schema
    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The KnowHow Google Ads Framework, 5 Phases to Profitable Campaigns (2026)",
      "description": "The complete Google Ads framework for medium-sized businesses. The KnowHow 5-phase method: Foundation, Research, Build, Optimise, Scale.",
      "datePublished": "2026-03-23",
      "dateModified": "2026-03-23",
      "author": [
        { "@type": "Person", "name": "Pip Seymour", "url": "https://knowhowmarketinglab.com/about", "jobTitle": "Google Ads & Digital Marketing Strategist" },
        { "@type": "Person", "name": "Phelan Lewis", "url": "https://knowhowmarketinglab.com/about", "jobTitle": "Google Tag Manager & Analytics Specialist" }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "KnowHow Marketing Lab",
        "url": "https://knowhowmarketinglab.com",
        "logo": { "@type": "ImageObject", "url": "https://knowhowmarketinglab.com/favicon.ico" }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://knowhowmarketinglab.com/blog/google-ads-framework" },
      "about": [
        { "@type": "Thing", "name": "Google Ads" },
        { "@type": "Thing", "name": "Pay-Per-Click Advertising" },
        { "@type": "Thing", "name": "Digital Marketing" }
      ]
    });
    document.head.appendChild(articleScript);

    // HowTo schema
    const howToScript = document.createElement('script');
    howToScript.type = 'application/ld+json';
    howToScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "The KnowHow Google Ads Framework, How to Build Profitable Google Ads Campaigns",
      "description": "A 5-phase framework for building, managing, and scaling Google Ads campaigns for medium-sized businesses.",
      "step": phases.map(p => ({
        "@type": "HowToStep",
        "name": `Phase ${p.num}: ${p.title}`,
        "text": p.subtitle,
        "itemListElement": p.steps.map(s => ({
          "@type": "HowToDirection",
          "text": `${s.name}: ${s.desc.replace(/<[^>]*>/g, '')}`
        }))
      }))
    });
    document.head.appendChild(howToScript);

    // FAQ schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    });
    document.head.appendChild(faqScript);

    // Breadcrumb schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://knowhowmarketinglab.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "The KnowHow Google Ads Framework", "item": "https://knowhowmarketinglab.com/blog/google-ads-framework" }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      [articleScript, howToScript, faqScript, breadcrumbScript].forEach(s => {
        if (document.head.contains(s)) document.head.removeChild(s);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ReadingProgressBar />
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#318599] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#318599] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-700">Google Ads Framework</span>
          </nav>

          {/* Category + date */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E98C28] bg-[#E98C28]/10 px-3 py-1 rounded-full">Google Ads</span>
            <span className="text-sm text-slate-400">March 23, 2026</span>
            <span className="text-sm text-slate-400">·</span>
            <span className="text-sm text-slate-400">15 min read</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            The KnowHow Google Ads Framework: 5 Phases to Profitable Campaigns
          </h1>

          {/* Byline */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-[#E98C28] flex items-center justify-center text-white font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>KH</div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Pip Seymour & Phelan Lewis</p>
              <p className="text-xs text-slate-500">KnowHow Marketing Lab · 20+ years Google Ads experience</p>
            </div>
          </div>

          {/* Intro */}
          <div className="mb-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Most Google Ads campaigns fail for the same reasons: no conversion tracking, wrong campaign type, keywords without intent, and budgets increased before the data is ready. The result is a lot of spend with nothing to show for it.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <strong>The KnowHow Google Ads Framework</strong> is the 5-phase process we use with our agency clients, and teach in <Link href="/courses/google-ads" className="text-[#318599] hover:underline">our Google Ads Bootcamp — included in The Lab at $29/mo</Link> and <Link href="/community" className="text-[#318599] hover:underline">The Lab</Link>, to build campaigns that actually work. It is not a shortcut. It is a structured process that removes the guesswork and replaces it with data.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The five phases are: <strong>Foundation</strong> (set up to measure everything), <strong>Research</strong> (know your market before you bid), <strong>Build</strong> (structure your account for scale), <strong>Optimise</strong> (let data drive every decision), and <strong>Scale</strong> (grow what works, cut what does not). Each phase has specific steps, tools, and AI-assisted shortcuts.
            </p>
          </div>

          {/* Phase overview visual */}
          <div className="bg-slate-900 rounded-2xl p-6 mb-12">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">The KnowHow Google Ads Framework</p>
            <div className="flex flex-wrap gap-2">
              {phases.map((p, i) => (
                <a key={i} href={`#phase-${p.num}`} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  <span className="font-bold text-[#E98C28]">{p.num}</span>
                  <span>{p.title.split(', ')[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Jump links */}
          <div className="bg-slate-50 rounded-2xl p-6 mb-12 border border-slate-100">
            <p className="text-sm font-semibold text-slate-700 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>In this guide:</p>
            <ol className="space-y-2">
              {[
                { href: '#phase-01', label: 'Phase 01: Foundation, Set Up to Measure Everything' },
                { href: '#phase-02', label: 'Phase 02: Research, Know Your Market Before You Bid' },
                { href: '#phase-03', label: 'Phase 03: Build, Structure Your Account for Scale' },
                { href: '#phase-04', label: 'Phase 04: Optimise, Let Data Drive Every Decision' },
                { href: '#phase-05', label: 'Phase 05: Scale, Grow What Works, Cut What Does Not' },
                { href: '#common-mistakes', label: 'The 5 Most Common Google Ads Mistakes' },
                { href: '#faq', label: 'Frequently Asked Questions' },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="text-[#318599] hover:underline text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Phases */}
          {phases.map((phase, pi) => (
            <section key={pi} id={`phase-${phase.num}`} className="mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: phase.color, fontFamily: 'Space Grotesk, sans-serif' }}>
                  {phase.num}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{phase.title}</h2>
                  <p className="text-slate-500 mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{phase.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {phase.steps.map((step, si) => (
                  <div key={si} className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5" style={{ backgroundColor: phase.color }} />
                    <div>
                      <p className="font-semibold text-slate-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{step.name}</p>
                      <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }} dangerouslySetInnerHTML={{ __html: step.desc }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <p className="text-xs font-bold text-[#318599] uppercase tracking-wider mb-2">AI Shortcut for Phase {phase.num}</p>
                <p className="text-sm text-slate-700 italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>{phase.aiTip}</p>
              </div>
            </section>
          ))}

          {/* Common mistakes */}
          <section id="common-mistakes" className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The 5 Most Common Google Ads Mistakes</h2>
            <p className="text-lg text-slate-600 mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              After managing Google Ads for medium-sized businesses for 20+ years, these are the mistakes we see most often, and the ones that cost the most money.
            </p>
            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: 'Launching without conversion tracking',
                  desc: 'If Google does not know what a conversion is, it cannot optimise toward one. Every dollar you spend before conversion tracking is set up is wasted. This is the most common and most expensive mistake.'
                },
                {
                  num: '02',
                  title: 'Using broad match keywords without negative keywords',
                  desc: 'Broad match keywords will match your ads to searches that have nothing to do with your business. Without a negative keyword list, you will burn budget on irrelevant traffic. Review your search term report weekly for the first 60 days.'
                },
                {
                  num: '03',
                  title: 'Switching to Smart Bidding too early',
                  desc: 'Smart Bidding (Target CPA, Target ROAS) needs conversion data to work. Switching before you have 30+ conversions in 30 days puts Google\'s AI in a learning phase with no signal, it will spend your budget inefficiently. Start with Manual CPC or Maximise Clicks, gather data, then switch.'
                },
                {
                  num: '04',
                  title: 'Sending all traffic to the homepage',
                  desc: 'Your homepage is for people who already know you. Ad traffic is for people who do not. Send every ad group to a dedicated landing page that matches the ad\'s message exactly. A relevant landing page improves Quality Score, reduces cost per click, and dramatically increases conversion rate.'
                },
                {
                  num: '05',
                  title: 'Increasing budgets on underperforming campaigns',
                  desc: 'More budget does not fix a broken campaign, it just burns more money faster. If a campaign has a high CPA or low conversion rate, fix the underlying problem first (keywords, ad copy, landing page, bidding strategy) before increasing the budget.'
                },
              ].map((m, i) => (
                <div key={i} className="flex gap-4 p-5 border border-slate-200 rounded-xl">
                  <span className="flex-shrink-0 text-2xl font-bold text-slate-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.num}</span>
                  <div>
                    <p className="font-bold text-slate-800 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.title}</p>
                    <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Free course CTA */}
          <div className="bg-slate-900 rounded-2xl p-8 mb-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Learn the Full Framework, Free</h2>
            <p className="text-slate-300 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The KnowHow Google Ads course walks through every phase of this framework with video lessons, templates, and real campaign examples. No credit card required.
            </p>
            <Link href="/courses/google-ads">
              <button className="bg-[#E98C28] hover:bg-[#d47d20] text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Join the Google Ads Bootcamp →
              </button>
            </Link>
            <p className="text-slate-400 text-sm mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Want live help with your campaigns? <Link href="/community" className="text-[#E98C28] hover:underline">Try The Lab free for 7 days →</Link>
            </p>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-slate-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Related posts */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Related Reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: '/blog/the-ultimate-guide-to-google-ads-campaign-types', title: 'Google Ads Campaign Types 2026, Every Type Explained', cat: 'Google Ads' },
                { href: '/blog/the-ultimate-guide-to-google-ads-bidding-strategies', title: 'Google Ads Bidding Strategies 2026, Which One Should You Use?', cat: 'Google Ads' },
                { href: '/blog/adgroups-based-on-user-intent', title: 'How to Structure Ad Groups Based on User Intent', cat: 'Google Ads' },
                { href: '/blog/ai-seo-course', title: 'AI SEO Course, How to Rank on Google and in ChatGPT (2026)', cat: 'AI SEO' },
              ].map((post, i) => (
                <Link key={i} href={post.href} className="block p-5 border border-slate-200 rounded-xl hover:border-[#E98C28]/40 hover:bg-slate-50 transition-all group">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E98C28]">{post.cat}</span>
                  <p className="font-semibold text-slate-800 mt-1 group-hover:text-[#E98C28] transition-colors leading-snug" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{post.title}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-[#E98C28] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Get Help With Your Google Ads Campaigns</h2>
            <p className="text-white/90 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Join The Lab, Pip and Phelan work through your actual campaigns live every Thursday. Try free for 7 days.
            </p>
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#E98C28] font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors text-lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Start Your Free 7-Day Trial →
            </a>
            <p className="text-white/70 text-sm mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>$29/month after trial · Cancel anytime</p>
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
}

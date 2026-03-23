// /blog/ai-seo-course — Dedicated page targeting "ai seo course" (116 impressions, pos 53 in GSC)
// Design: White/light, Space Grotesk headings, DM Sans body, orange #E98C28, teal #318599
// Schema: Article, FAQPage, Course, BreadcrumbList
// Internal links: /courses/seo, /courses/google-ads, /pricing, /community, /blog/ai-seo-guide, /framework
// GEO: Named framework "The KnowHow AI SEO Method", complete methodology, structured for AI citation

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { Link } from 'wouter';

const COMMUNITY_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce';

const faqs = [
  {
    q: 'What is an AI SEO course?',
    a: 'An AI SEO course teaches you how to use artificial intelligence tools — like ChatGPT, Google Gemini, and Perplexity — to speed up and improve your SEO work. This includes using AI for keyword research, writing title tags and meta descriptions, creating content outlines, analysing Google Search Console data, and optimising your pages to appear in AI-powered search results like Google AI Overviews, ChatGPT search, and Perplexity.'
  },
  {
    q: 'What is the difference between traditional SEO and AI SEO?',
    a: 'Traditional SEO focuses on ranking in Google\'s standard blue-link results. AI SEO (also called GEO — Generative Engine Optimisation) adds a second goal: getting your content cited or recommended by AI search engines like ChatGPT, Perplexity, and Google\'s AI Overviews. The tactics overlap significantly — quality content, clear structure, schema markup, and authority signals matter for both — but AI SEO adds specific requirements like named frameworks, complete methodologies, and structured data that AI engines can extract and attribute.'
  },
  {
    q: 'Is the KnowHow AI SEO course free?',
    a: 'Yes. The foundational AI + SEO course at KnowHow Marketing Lab is completely free. No credit card required. You get 5 modules covering AI-powered keyword research, on-page SEO, Google Search Console, GA4, and Google Business Profile. For live weekly training, monthly deep-dives, and hands-on help with your real campaigns, The Lab membership is $29/month with a 7-day free trial.'
  },
  {
    q: 'How long does it take to learn AI SEO?',
    a: 'You can learn the core concepts of AI SEO in 2 to 4 weeks if you dedicate a few hours per week. The KnowHow free course covers the foundations in 5 modules. Applying what you learn and seeing results in Google Search Console typically takes 4 to 12 weeks, depending on how competitive your niche is and how consistently you publish content.'
  },
  {
    q: 'Do I need to know coding to do AI SEO?',
    a: 'No. AI SEO does not require coding. You need to understand how to write good content, structure it with clear headings, add schema markup (which most website platforms handle automatically or with plugins), and use AI tools to speed up the process. KnowHow Marketing Lab teaches everything from scratch — if you can use Google, you can learn AI SEO.'
  },
  {
    q: 'What AI tools are used in AI SEO?',
    a: 'The most commonly used AI tools for SEO include: ChatGPT (for keyword research, content outlines, title tags, and meta descriptions), Google Gemini (for understanding search intent and Google-specific optimisation), Perplexity (for researching how AI engines answer questions in your niche), Google Search Console (for tracking rankings and identifying opportunities), and GA4 (for understanding how visitors behave on your site). The KnowHow AI SEO course covers all of these.'
  },
  {
    q: 'What is GEO (Generative Engine Optimisation)?',
    a: 'GEO stands for Generative Engine Optimisation. It is the practice of optimising your content to be cited, recommended, or summarised by AI-powered search engines like ChatGPT, Perplexity, Google AI Overviews, and Microsoft Copilot. GEO builds on traditional SEO — if you rank well on Google, you are already doing many of the right things. GEO adds specific tactics like creating named frameworks, writing comprehensive answers to specific questions, and using structured data so AI engines can extract and attribute your content accurately.'
  },
  {
    q: 'How is KnowHow Marketing Lab different from other SEO courses?',
    a: 'KnowHow Marketing Lab is built by Pip Seymour and Phelan Lewis — agency owners with 20+ years of hands-on experience managing real campaigns for medium-sized businesses. The training is practical and data-driven, not theoretical. The free course covers the foundations. The Lab community ($29/month) adds live weekly sessions where Pip and Phelan work through your actual website, ad account, or SEO audit in real time — not just pre-recorded videos.'
  }
];

const steps = [
  {
    num: '01',
    title: 'Audit Your Current Visibility',
    desc: 'Before you do anything, you need to know where you stand. Set up Google Search Console (free) and run a basic site audit. Find out which pages are already getting impressions, which keywords you are ranking for, and where your biggest gaps are. AI tools like ChatGPT can help you interpret your Search Console data in plain language.',
    aiTip: 'Paste your top 10 Search Console queries into ChatGPT and ask: "What content gaps do these queries reveal? What related topics am I not covering?"'
  },
  {
    num: '02',
    title: 'Research Keywords with AI',
    desc: 'Use Google Keyword Planner to find the exact phrases your customers type. Then use ChatGPT to expand your list, identify search intent, and spot content gaps your competitors miss. Focus on two types: informational keywords (questions people ask) and commercial keywords (phrases people use when they are ready to buy or hire).',
    aiTip: 'Ask ChatGPT: "Give me 20 questions that a marketing manager at a medium-sized business would type into Google when researching [your topic]." Then validate them in Keyword Planner.'
  },
  {
    num: '03',
    title: 'Create Content That Answers Questions Completely',
    desc: 'AI search engines cite content that fully answers a question in one place. Write comprehensive posts that cover a topic from every angle — what it is, how it works, when to use it, common mistakes, and a step-by-step process. Use clear H2 and H3 headings. Include a FAQ section. The goal is to be the most complete answer available, not just a good answer.',
    aiTip: 'Use ChatGPT to generate a "People Also Ask" list for your topic. Answer every question in your post. This is exactly what AI engines scan for when deciding who to cite.'
  },
  {
    num: '04',
    title: 'Optimise On-Page Elements',
    desc: 'Write title tags that include your target keyword and a reason to click. Write meta descriptions that answer "why should I click this result?" Use your target keyword in the H1, in the first paragraph, and in at least one H2. Add internal links to related pages. Compress images and add descriptive alt text. These are the basics — but most sites do them poorly.',
    aiTip: 'Use ChatGPT to generate 5 title tag options for each page. Pick the one that is most specific and most compelling. Then ask it to write a meta description that leads with the benefit, not the topic.'
  },
  {
    num: '05',
    title: 'Add Schema Markup',
    desc: 'Schema markup is code that tells search engines and AI engines exactly what your content is about. Add Article schema to blog posts, FAQPage schema to FAQ sections, Course schema to course pages, and Person schema to author bios. Google uses schema for rich results. AI engines use schema to understand and attribute your content accurately.',
    aiTip: 'Ask ChatGPT: "Write FAQPage schema markup for these questions: [paste your FAQ questions and answers]." Then add it to your page in a script tag.'
  },
  {
    num: '06',
    title: 'Build Topical Authority with Content Clusters',
    desc: 'Google and AI engines reward sites that comprehensively cover a topic — not just one post about it. Build content clusters: one comprehensive pillar post on a broad topic, supported by 6 to 8 detailed posts on specific subtopics. Every supporting post links back to the pillar. This signals to Google and AI engines that you are an authority on the topic, not just a site with one good article.',
    aiTip: 'Ask ChatGPT: "Give me 8 supporting post ideas for a pillar post about [your topic]. Each should target a specific long-tail keyword and link back to the pillar."'
  },
  {
    num: '07',
    title: 'Track, Measure, and Iterate',
    desc: 'SEO is not a one-time task. Check Google Search Console every two weeks. Look for queries with growing impressions but low CTR — these are pages where a better title tag could drive more clicks immediately. Look for queries where you are ranking on page 2 or 3 — these are pages where adding more content or improving structure could push you to page 1. Use GA4 to track which pages drive the most conversions, not just traffic.',
    aiTip: 'Export your Search Console data monthly and paste it into ChatGPT. Ask: "Based on this data, which 3 pages should I prioritise improving this month and why?"'
  }
];

export default function PostAiSeoCourse() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Title and meta
    document.title = 'AI SEO Course — How to Rank on Google and in ChatGPT (2026) | KnowHow Marketing Lab';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'The complete AI SEO course for business owners and marketing teams. Learn The KnowHow AI SEO Method — 7 steps to rank on Google and get cited by ChatGPT, Perplexity, and Google AI Overviews. Free guide.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/blog/ai-seo-course');

    // Article schema
    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "AI SEO Course — How to Rank on Google and in ChatGPT, Perplexity, and AI Overviews (2026)",
      "description": "The complete AI SEO course for business owners and marketing teams. Learn The KnowHow AI SEO Method — 7 steps to rank on Google and get cited by ChatGPT, Perplexity, and Google AI Overviews.",
      "datePublished": "2026-03-23",
      "dateModified": "2026-03-23",
      "author": [
        { "@type": "Person", "name": "Pip Seymour", "url": "https://knowhowmarketinglab.com/about", "jobTitle": "SEO & Digital Marketing Strategist" },
        { "@type": "Person", "name": "Phelan Lewis", "url": "https://knowhowmarketinglab.com/about", "jobTitle": "Google Ads & Analytics Specialist" }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "KnowHow Marketing Lab",
        "url": "https://knowhowmarketinglab.com",
        "logo": { "@type": "ImageObject", "url": "https://knowhowmarketinglab.com/favicon.ico" }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://knowhowmarketinglab.com/blog/ai-seo-course" },
      "about": [
        { "@type": "Thing", "name": "AI SEO" },
        { "@type": "Thing", "name": "Generative Engine Optimisation" },
        { "@type": "Thing", "name": "Search Engine Optimisation" }
      ]
    });
    document.head.appendChild(articleScript);

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

    // Course schema
    const courseScript = document.createElement('script');
    courseScript.type = 'application/ld+json';
    courseScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "The KnowHow AI SEO Method — AI SEO Course for Business Owners",
      "description": "A 7-step AI SEO course teaching business owners and marketing teams how to rank on Google and get cited by ChatGPT, Perplexity, and Google AI Overviews.",
      "url": "https://knowhowmarketinglab.com/blog/ai-seo-course",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "KnowHow Marketing Lab",
        "url": "https://knowhowmarketinglab.com"
      },
      "courseMode": "online",
      "educationalLevel": "Beginner to Intermediate",
      "inLanguage": "en",
      "isAccessibleForFree": true,
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CAD" },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "instructor": [
          { "@type": "Person", "name": "Pip Seymour" },
          { "@type": "Person", "name": "Phelan Lewis" }
        ]
      }
    });
    document.head.appendChild(courseScript);

    // Breadcrumb schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://knowhowmarketinglab.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI SEO Course", "item": "https://knowhowmarketinglab.com/blog/ai-seo-course" }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      [articleScript, faqScript, courseScript, breadcrumbScript].forEach(s => {
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
            <span className="text-slate-700">AI SEO Course</span>
          </nav>

          {/* Category + date */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#318599] bg-[#318599]/10 px-3 py-1 rounded-full">AI SEO</span>
            <span className="text-sm text-slate-400">March 23, 2026</span>
            <span className="text-sm text-slate-400">·</span>
            <span className="text-sm text-slate-400">12 min read</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            AI SEO Course: How to Rank on Google and in ChatGPT, Perplexity, and AI Overviews (2026)
          </h1>

          {/* Byline */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-[#E98C28] flex items-center justify-center text-white font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>KH</div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Pip Seymour & Phelan Lewis</p>
              <p className="text-xs text-slate-500">KnowHow Marketing Lab · 20+ years agency experience</p>
            </div>
          </div>

          {/* Intro */}
          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-xl text-slate-700 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Search has changed. People are no longer just typing into Google — they are asking ChatGPT, Perplexity, and Google's AI Overviews for answers. And if your business is not showing up in those answers, you are invisible to a growing share of your potential customers.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              This guide teaches you <strong>The KnowHow AI SEO Method</strong> — a 7-step process we use with our agency clients to rank on Google <em>and</em> get cited by AI search engines. It is the same approach we teach in <Link href="/courses/seo" className="text-[#318599] hover:underline">our free AI + SEO course</Link> and in <Link href="/community" className="text-[#318599] hover:underline">The Lab</Link>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              You do not need to be a technical expert. You do not need to write code. You need a clear process, the right free tools, and the discipline to do the work consistently. Let's get into it.
            </p>
          </div>

          {/* Jump links */}
          <div className="bg-slate-50 rounded-2xl p-6 mb-12 border border-slate-100">
            <p className="text-sm font-semibold text-slate-700 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>In this guide:</p>
            <ol className="space-y-2">
              {[
                { href: '#what-is-ai-seo', label: 'What is AI SEO?' },
                { href: '#traditional-vs-ai-seo', label: 'Traditional SEO vs AI SEO — what is different?' },
                { href: '#the-knowhow-method', label: 'The KnowHow AI SEO Method (7 steps)' },
                { href: '#geo-explained', label: 'GEO: How to get cited by ChatGPT and Perplexity' },
                { href: '#free-course', label: 'Free AI SEO course — what is included' },
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

          {/* Section 1: What is AI SEO */}
          <section id="what-is-ai-seo" className="mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>What is AI SEO?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              AI SEO is the practice of using artificial intelligence tools to improve your search engine rankings — and optimising your content to appear in AI-powered search results. It combines two things:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: 'AI-assisted SEO', desc: 'Using tools like ChatGPT and Gemini to speed up keyword research, content creation, title tag writing, and data analysis.' },
                { label: 'Generative Engine Optimisation (GEO)', desc: 'Structuring your content so AI search engines like ChatGPT, Perplexity, and Google AI Overviews cite and recommend it.' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                  <p className="font-semibold text-slate-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.label}</p>
                  <p className="text-sm text-slate-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-slate-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The term "AI SEO" is sometimes used interchangeably with GEO, AEO (Answer Engine Optimisation), LLMO (Large Language Model Optimisation), and AIO (AI Optimisation). They all refer to variations of the same goal: making sure your business shows up when people ask AI tools for recommendations in your category. For a deeper dive into all these terms, read our <Link href="/blog/ai-seo-guide" className="text-[#318599] hover:underline">complete AI SEO guide</Link>.
            </p>
          </section>

          {/* Section 2: Traditional vs AI SEO */}
          <section id="traditional-vs-ai-seo" className="mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Traditional SEO vs AI SEO — What Is Different?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Traditional SEO and AI SEO share the same foundation: quality content, clear structure, and authority signals. The difference is in the goal and some of the tactics.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-4 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Factor</th>
                    <th className="text-left p-4 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Traditional SEO</th>
                    <th className="text-left p-4 font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AI SEO (GEO)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Goal', 'Rank in Google blue-link results', 'Rank in Google + be cited by AI engines'],
                    ['Content style', 'Keyword-optimised, comprehensive', 'Same, plus named frameworks and complete Q&A'],
                    ['Structure', 'H1, H2, H3 hierarchy', 'Same, plus FAQ sections and jump-to navigation'],
                    ['Schema markup', 'Article, BreadcrumbList', 'Same, plus FAQPage, Course, Person, HowTo'],
                    ['Authority signals', 'Domain authority, content depth', 'Same, plus author expertise signals and citations'],
                    ['Measurement', 'Google Search Console rankings', 'GSC + manual AI engine queries to check citations'],
                  ].map(([factor, trad, ai], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-4 font-medium text-slate-800 border-b border-slate-100" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{factor}</td>
                      <td className="p-4 text-slate-600 border-b border-slate-100" style={{ fontFamily: 'DM Sans, sans-serif' }}>{trad}</td>
                      <td className="p-4 text-slate-600 border-b border-slate-100" style={{ fontFamily: 'DM Sans, sans-serif' }}>{ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#E98C28]/10 border border-[#E98C28]/30 rounded-xl p-5">
              <p className="text-slate-800 font-semibold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The key insight:</p>
              <p className="text-slate-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                If you do good traditional SEO, you are already doing 80% of what AI SEO requires. The remaining 20% is about structure, schema, and creating content that AI engines can extract and attribute to you specifically.
              </p>
            </div>
          </section>

          {/* Section 3: The KnowHow AI SEO Method */}
          <section id="the-knowhow-method" className="mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The KnowHow AI SEO Method</h2>
            <p className="text-lg text-slate-500 mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              A 7-step process for ranking on Google and getting cited by AI search engines
            </p>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-5 p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#318599]/40 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {step.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{step.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{step.desc}</p>
                    <div className="bg-[#318599]/10 rounded-lg p-3">
                      <p className="text-xs font-semibold text-[#318599] uppercase tracking-wider mb-1">AI Tip</p>
                      <p className="text-sm text-slate-700 italic" style={{ fontFamily: 'DM Sans, sans-serif' }}>{step.aiTip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: GEO */}
          <section id="geo-explained" className="mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>GEO: How to Get Cited by ChatGPT and Perplexity</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Generative Engine Optimisation (GEO) is the part of AI SEO that most guides skip. Here is what actually works, based on how AI engines select and cite sources.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Create a named, branded framework',
                  body: 'AI engines love to cite named methodologies because they are attributable. "The KnowHow AI SEO Method" is more likely to be cited than "here are some SEO tips." Name your process. Use that name consistently across your site, your YouTube channel, and your community. When someone asks ChatGPT "how do I do AI SEO," it is far more likely to cite a named, structured methodology.'
                },
                {
                  title: 'Answer questions completely — do not tease',
                  body: 'Perplexity and ChatGPT answer questions. Your content needs to answer questions completely — not push people to buy something to get the answer. The more completely you answer a question in a single post, the more likely an AI engine is to cite you. Your courses and community are the upsell. Your content is the trust-builder.'
                },
                {
                  title: 'Add FAQPage schema to every post',
                  body: 'FAQPage schema tells AI engines exactly which questions your content answers and what the answers are. It is one of the most direct signals you can send to AI search engines. Add it to every blog post and course page. This is already done on all KnowHow Marketing Lab pages — it is one of the reasons our content gets cited.'
                },
                {
                  title: 'Publish on YouTube and embed on your site',
                  body: 'Google AI Overviews increasingly pull from YouTube transcripts. Perplexity indexes YouTube. A 5-10 minute video on each of your core topics — posted to YouTube, transcribed, and embedded on the matching blog post — dramatically increases your chances of being cited in AI search results.'
                },
                {
                  title: 'Add author expertise signals',
                  body: 'AI engines look for author authority. Your About page and author bios should clearly state years of experience, specific areas of expertise, credentials, and the types of businesses you have helped. Add Person schema to author bios. This is what gets you cited as a credible source rather than an anonymous website.'
                },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-[#E98C28] pl-5 py-2">
                  <h3 className="font-bold text-slate-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Free course CTA */}
          <section id="free-course" className="mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The Free KnowHow AI SEO Course — What Is Included</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The <Link href="/courses/seo" className="text-[#318599] hover:underline">KnowHow AI + SEO course</Link> is completely free. No credit card required. It covers the foundations of AI SEO in 5 modules:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { num: '01', title: 'SEO Fundamentals', desc: 'How Google finds, reads, and ranks pages. Search intent, SERPs, and AI tools for understanding what your audience searches for.' },
                { num: '02', title: 'Setting Up Your SEO Tools', desc: 'Google Search Console and GA4 — the two free tools that show you exactly what is happening on your website.' },
                { num: '03', title: 'Keyword Research', desc: 'Find the exact words your customers type using Google Keyword Planner, expanded with AI tools.' },
                { num: '04', title: 'On-Page SEO Essentials', desc: 'Title tags, meta descriptions, and internal links that help Google and AI engines understand your site.' },
                { num: '05', title: 'Google Business Profile', desc: 'Optimise for local search and AI Overviews — increasingly important as AI pulls from Business Profiles.' },
              ].map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <span className="text-xs font-bold text-[#E98C28] uppercase tracking-wider">Module {m.num}</span>
                  <h3 className="font-bold text-slate-900 mt-1 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.title}</h3>
                  <p className="text-sm text-slate-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>{m.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA box */}
            <div className="bg-slate-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Start the Free AI SEO Course</h3>
              <p className="text-slate-300 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>5 modules. No credit card. Start learning today.</p>
              <Link href="/courses/seo">
                <button className="bg-[#E98C28] hover:bg-[#d47d20] text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Access the Free Course →
                </button>
              </Link>
              <p className="text-slate-400 text-sm mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Want live weekly training? <Link href="/community" className="text-[#E98C28] hover:underline">Try The Lab free for 7 days →</Link>
              </p>
            </div>
          </section>

          {/* Glossary */}
          <section className="mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AI SEO Glossary</h2>
            <p className="text-lg text-slate-600 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The AI SEO space has a lot of acronyms. Here is what they all mean:
            </p>
            <div className="space-y-3">
              {[
                { term: 'AI SEO', def: 'The umbrella term for using AI tools to improve SEO and optimising content for AI search engines.' },
                { term: 'GEO (Generative Engine Optimisation)', def: 'Optimising content to be cited or recommended by AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews.' },
                { term: 'AEO (Answer Engine Optimisation)', def: 'Structuring content to become the direct answer that AI engines give to a specific question.' },
                { term: 'LLMO (Large Language Model Optimisation)', def: 'The technical side of GEO — optimising content so large language models (LLMs) like GPT-4 and Gemini can accurately extract and attribute it.' },
                { term: 'AI Overviews', def: 'Google\'s AI-generated summaries that appear at the top of search results for certain queries. Previously called SGE (Search Generative Experience).' },
                { term: 'Schema markup', def: 'Structured data code added to web pages that tells search engines and AI engines exactly what the content is about.' },
                { term: 'Topical authority', def: 'The degree to which a website is seen as a comprehensive, credible source on a specific topic — built through content clusters.' },
                { term: 'Content cluster', def: 'A group of related pages — one comprehensive pillar post and several supporting posts — that together cover a topic comprehensively.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 py-3 border-b border-slate-100">
                  <dt className="font-semibold text-slate-800 min-w-[200px]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.term}</dt>
                  <dd className="text-slate-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item.def}</dd>
                </div>
              ))}
            </div>
          </section>

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
                { href: '/blog/ai-seo-guide', title: 'The Complete AI SEO Guide — GEO, AEO, LLMO, and AI Overviews Explained', cat: 'AI SEO' },
                { href: '/blog/the-ultimate-guide-to-google-ads-campaign-types', title: 'Google Ads Campaign Types 2026 — Every Type Explained', cat: 'Google Ads' },
                { href: '/blog/the-ultimate-guide-to-google-ads-bidding-strategies', title: 'Google Ads Bidding Strategies 2026 — Which One Should You Use?', cat: 'Google Ads' },
                { href: '/blog/keyword-research-keyword-clusters', title: 'Keyword Research & Keyword Clusters — The Complete Guide', cat: 'SEO' },
              ].map((post, i) => (
                <Link key={i} href={post.href} className="block p-5 border border-slate-200 rounded-xl hover:border-[#318599]/40 hover:bg-slate-50 transition-all group">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#318599]">{post.cat}</span>
                  <p className="font-semibold text-slate-800 mt-1 group-hover:text-[#318599] transition-colors leading-snug" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{post.title}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-[#E98C28] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Ready to Put This Into Practice?</h2>
            <p className="text-white/90 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Join The Lab — live AI SEO and Google Ads training every Thursday with Pip and Phelan. Try free for 7 days.
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

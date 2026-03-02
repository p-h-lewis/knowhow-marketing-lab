import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Link } from 'wouter';

const POST_CONTENT = `<p>Duration: 45 minutes + 15 minutes Q&A<br>Level: Beginner</p>

<p>Course: KnowHow Marketing Lab - Master Google Ads Series</p>

<h2 id="learning-objectives">Learning Objectives</h2>

<p>By the end of this class, students will be able to:</p>

<ol class="wp-block-list">
<li>Understand how Google Ads works and why it is essential for business growth</li>

<li>Identify the different types of Google Ads campaigns and when to use each</li>

<li>Navigate the Google Ads interface with confidence</li>

<li>Understand the Google Ads auction system and how ads are ranked</li>

<li>Define key metrics and terminology used in Google Ads</li>
</ol>

<h2 id="class-outline">Class Outline</h2>

<h3 class="wp-block-heading" id="h-introduction">Introduction</h3>

<p>Welcome to Google Ads Class 1! This is the foundation of your Google Ads journey. </p>

<p>Today, we start with the fundamentals - understanding what Google Ads is, how it works, and the key concepts you need to know before launching your first campaign. If you like reading and watching you'll get double the information :) </p>

<p>Google Ads is one of the most powerful advertising platforms available to businesses of all sizes. Whether you are a local service provider, an e-commerce store, or a B2B company, Google Ads can help you reach potential customers at the exact moment they are searching for what you offer. The key to success is understanding how the platform works and building campaigns strategically from the ground up.</p>

<h3 class="wp-block-heading" id="h-what-is-google-ads-and-why-does-it-matter">What Is Google Ads and Why Does It Matter?</h3>

<h3 class="wp-block-heading" id="h-what-is-google-ads">What Is Google Ads?</h3>

<p>Google Ads (formerly Google AdWords) is Google's online advertising platform that allows businesses to display ads on Google's search results pages, YouTube, Gmail, and millions of partner websites across the internet. When someone searches for a product or service on Google, they see a mix of organic search results and paid ads. Google Ads allows you to place your business at the top of those search results, making it easier for potential customers to find you.</p>

<h3 class="wp-block-heading" id="h-why-google-ads-matters-for-your-business">Why Google Ads Matters for Your Business</h3>

<p>Google Ads offers several unique advantages that make it an essential tool for modern marketing:</p>

<p><strong>Immediate Visibility: </strong>Unlike SEO, which can take months to show results, Google Ads can put your business at the top of search results within hours of launching a campaign. This immediate visibility is especially valuable for new businesses or time-sensitive promotions.</p>

<p>Highly Targeted Reach: Google Ads allows you to target users based on their search intent, location, device, demographics, and even the time of day. This precision targeting ensures your ads are shown to people who are most likely to be interested in your products or services.</p>

<p>Measurable Results: Every click, impression, and conversion is tracked, giving you complete visibility into how your advertising budget is being spent and what results you are getting. This data-driven approach allows you to continuously optimize your campaigns for better performance.</p>

<p>Flexible Budgeting: You control how much you spend each day, and you only pay when someone clicks on your ad (in most campaign types). This pay-per-click model means you are paying for actual engagement, not just impressions.</p>

<p>Scalability: Whether you have a budget of fifty dollars per day or five thousand dollars per day, Google Ads can scale with your business. As you see positive results, you can increase your budget to drive even more traffic and conversions.</p>

<h3 class="wp-block-heading" id="h-how-google-ads-works-the-auction-system">How Google Ads Works: The Auction System</h3>

<p>Understanding the Google Ads Auction</p>

<p>Many people assume that the advertiser who bids the highest amount always wins the top ad position. However, Google Ads uses a more sophisticated system called the Ad Auction that considers both your bid and the quality of your ad.</p>

<p>Every time someone performs a search on Google, an auction takes place in milliseconds to determine which ads will be shown and in what order. The auction considers three main factors:</p>

<p><strong>Your Bid: </strong>This is the maximum amount you are willing to pay for a click on your ad. You can set bids manually or use automated bidding strategies that adjust your bids based on your goals (such as maximizing conversions or achieving a target return on ad spend).</p>

<p><strong>Quality Score:</strong> This is Google's rating of the quality and relevance of your keywords, ads, and landing pages. Quality Score is measured on a scale of one to ten, with ten being the best. A higher Quality Score means your ads are more relevant to the user's search, which can result in lower costs and better ad positions.</p>

<p><strong>Ad Rank: </strong>Your Ad Rank is calculated by multiplying your bid by your Quality Score (plus other factors like ad extensions and expected impact). The ads with the highest Ad Rank win the top positions on the search results page.</p>

<h3 class="wp-block-heading" id="h-why-quality-score-matters">Why Quality Score Matters</h3>

<p>Quality Score is one of the most important concepts in Google Ads because it directly impacts both your ad position and your cost per click. A high Quality Score can allow you to outrank competitors who are bidding more than you, while also paying less per click.</p>

<p><strong>Quality Score is determined by three main components:</strong></p>

<ul class="wp-block-list">
<li><strong>Expected Click-Through Rate (CTR): </strong>How likely is it that someone will click on your ad when it is shown? Google looks at historical performance and relevance to predict this.</li>

<li><strong>Ad Relevance: </strong>How closely does your ad match the intent of the user's search query? Your ad copy should directly address what the user is looking for.</li>

<li><strong>Landing Page Experience: </strong>Does your landing page provide a good user experience? Is it relevant to the ad and search query? Is it fast, mobile-friendly, and easy to navigate?</li>

<li>Improving your Quality Score should be a priority in every campaign because it leads to lower costs and better results.</li>
</ul>

<h3 class="wp-block-heading" id="h-types-of-google-ads-campaigns-10-minutes">Types of Google Ads Campaigns (10 minutes)</h3>

<p>Google Ads offers several different campaign types, each designed for specific goals and audiences. Understanding the differences between these campaign types will help you choose the right one for your business objectives.</p>

<p><strong>Search Campaigns</strong></p>

<p>Search campaigns are the most common type of Google Ads campaign. Your ads appear at the top of Google search results when users search for keywords related to your business. Search campaigns are intent-based, meaning people are actively looking for what you offer, which makes them highly effective for driving conversions.</p>

<p><strong>Best for:</strong> Businesses that want to capture demand from people actively searching for their products or services. Examples include local service providers, e-commerce stores, and B2B companies.</p>

<p><strong>Display Campaigns</strong></p>

<p>Display campaigns show visual banner ads on millions of websites, apps, and videos across the Google Display Network. These ads are great for building brand awareness and reaching people who may not be actively searching for your product but fit your target audience profile.</p>

<p><strong>Best for:</strong> Brand awareness, remarketing to previous website visitors, and reaching a broad audience with visual messaging.</p>

<p><strong>Video Campaigns (YouTube Ads)</strong></p>

<p>Video campaigns allow you to run ads on YouTube and across Google's video partner sites. You can run skippable in-stream ads, non-skippable ads, bumper ads, and discovery ads. Video is a powerful medium for storytelling and engaging audiences.</p>

<p><strong>Best for: </strong>Building brand awareness, demonstrating products, and engaging audiences with compelling visual content.</p>

<p><strong>Shopping Campaigns</strong></p>

<p>Shopping campaigns are designed specifically for e-commerce businesses. Your product listings appear in Google Shopping results with an image, price, and store name. These ads are highly visual and allow users to compare products before clicking.</p>

<p><strong>Best for:</strong> E-commerce stores that want to showcase their products directly in search results.</p>

<p><strong>Performance Max Campaigns</strong></p>

<p>Performance Max is Google's newest campaign type that uses automation and machine learning to optimize your ads across all of Google's channels - Search, Display, YouTube, Gmail, and Discover. You provide assets (headlines, descriptions, images, videos), and Google automatically creates and tests combinations to find what works best.</p>

<p><strong>Best for: </strong>Businesses that want to maximize conversions across all Google channels with minimal manual management. We will cover Performance Max in detail in Class 3.</p>

<p><strong>App Campaigns</strong></p>

<p>App campaigns are designed to promote mobile apps across Google Search, Google Play, YouTube, and the Display Network. Google automatically optimizes your ads to drive app installs or in-app actions.</p>

<p><strong>Best for: </strong>Mobile app developers looking to increase downloads and user engagement.</p>

<h2 id="key-metrics-and-terminology">Key Metrics and Terminology</h2>

<p>Understanding the language of Google Ads is essential for managing and optimizing your campaigns. Here are the key metrics you will encounter:</p>

<p><strong>Impressions: </strong>The number of times your ad is shown to users.</p>

<p><strong>Clicks: </strong>The number of times users click on your ad.</p>

<p><strong>Click-Through Rate (CTR):</strong> The percentage of impressions that result in clicks. Calculated as (Clicks ÷ Impressions) × 100. A higher CTR indicates that your ad is relevant and compelling.</p>

<p><strong>Cost Per Click (CPC): </strong>The average amount you pay each time someone clicks on your ad.</p>

<p><strong>Conversions: </strong>The number of times users complete a desired action after clicking your ad, such as making a purchase, filling out a form, or calling your business.</p>

<p><strong>Conversion Rate: </strong>The percentage of clicks that result in conversions. Calculated as (Conversions ÷ Clicks) × 100.</p>

<p><strong>Cost Per Conversion (CPA):</strong> The average amount you pay for each conversion. Calculated as Total Cost ÷ Conversions.</p>

<p><strong>Return on Ad Spend (ROAS): </strong>The revenue generated for every dollar spent on ads. Calculated as Revenue ÷ Ad Spend. For example, a ROAS of 4:1 means you earn four dollars for every dollar spent.</p>

<p><strong>Quality Score:</strong> Google's rating (1-10) of the quality and relevance of your keywords, ads, and landing pages.</p>

<p><strong>Ad Rank: </strong>The position of your ad on the search results page, determined by your bid, Quality Score, and other factors.</p>

<h3 class="wp-block-heading" id="h-navigating-the-google-ads-interface">Navigating the Google Ads Interface</h3>

<p>When you first log into Google Ads, the interface can feel overwhelming. Here is a quick overview of the main sections you will use:</p>

<p><strong>Dashboard/Overview:</strong> This is your home screen, showing a summary of your account performance, including impressions, clicks, conversions, and spend.</p>

<p><strong>Campaigns: </strong>This is where you create and manage your campaigns. Each campaign has its own budget, targeting settings, and campaign type.</p>

<p><strong>Ad Groups: </strong>Within each campaign, you create ad groups that contain related keywords and ads. Organizing your ad groups tightly around themes improves relevance and Quality Score.</p>

<p><strong>Keywords: </strong>This is where you manage the keywords you are bidding on and add negative keywords to exclude irrelevant searches.</p>

<p><strong>Ads & Extensions: </strong>This section allows you to create and edit your ads and add extensions (additional information like phone numbers, site links, and callouts).</p>

<p><strong>Recommendations: </strong>Google provides automated recommendations to improve your campaigns. While some are helpful, always evaluate recommendations critically before implementing them.</p>

<p><strong>Reports</strong>: Access detailed performance reports to analyze your campaigns by time, device, location, and more.</p>

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/_jqGM9V1QHY
</div></figure>

<h2 id="homework-assignment">Homework Assignment</h2>

<p>To reinforce what you have learned in Class 1, complete the following tasks before the next class:</p>

<h3 class="wp-block-heading" id="h-task-1-set-up-your-google-ads-account">Task 1: Set Up Your Google Ads Account</h3>

<p>If you do not already have a Google Ads account, create one at <a target="_blank" rel="noreferrer noopener" href="http://ads.google.com">ads.google.com</a>. You do not need to launch a campaign yet - just complete the account setup process. Make sure you link your Google Ads account to a Google Analytics property if you have one, as this will provide valuable insights into user behaviour after they click your ads.</p>

<h3 class="wp-block-heading" id="h-task-2-explore-the-interface">Task 2: Explore the Interface</h3>

<p>Spend at least 15 minutes exploring the Google Ads interface. Familiarize yourself with the main sections: Campaigns, Ad Groups, Keywords, Ads & Extensions, and Reports. Click around and get comfortable with where things are located.</p>

<h3 class="wp-block-heading" id="h-task-3-research-your-competitors">Task 3: Research Your Competitors</h3>

<p>Search for keywords related to your business on Google and take note of the ads that appear. Who are your main competitors in the paid search space? What messaging are they using in their ads? What landing pages are they sending traffic to? Write down at least three observations about what you see.</p>

<h3 class="wp-block-heading" id="h-task-4-define-your-campaign-goal">Task 4: Define Your Campaign Goal</h3>

<p>Think about what you want to achieve with Google Ads. Is it to generate leads, drive online sales, increase phone calls, or build brand awareness? Write down your primary campaign goal and the action you want users to take after clicking your ad (e.g., fill out a contact form, make a purchase, call your business).</p>

<h3 class="wp-block-heading" id="h-task-5-identify-10-keywords">Task 5: Identify 10 Keywords</h3>

<p>Brainstorm at least ten keywords that potential customers might use to search for your products or services. Think about the specific terms people would type into Google when they are ready to buy or take action. Write these down - you will use them when we build your first campaign in Class 2.</p>

<h2 id="key-takeaways">Key Takeaways</h2>

<p>•Google Ads is a powerful platform that allows you to reach potential customers at the moment they are searching for what you offer.</p>

<ul class="wp-block-list">
<li>The Google Ads auction considers both your bid and your Quality Score to determine ad position and cost.</li>

<li>Quality Score is critical - it affects both your ad rank and your cost per click.</li>

<li>There are multiple campaign types (Search, Display, Video, Shopping, Performance Max, App), each suited for different goals.</li>

<li>Understanding key metrics like CTR, CPC, conversions, and ROAS is essential for measuring and optimizing campaign performance.</li>

<li>Proper account setup and goal definition are the foundation of successful campaigns.</li>
</ul>

<h2 id="next-steps">Next Steps</h2>

<p>In Class 2: Create a Search Campaign, we will take everything you have learned today and put it into action. You will learn how to structure a search campaign, choose the right keywords, write compelling ads, and set up your first campaign from start to finish. Come prepared with your homework completed and your campaign goal clearly defined.</p>

<p>Join the KnowHow Marketing Lab community on Skool for ongoing support, resources, and live Q&A sessions. This is where you can ask questions, share your progress, and connect with fellow marketers on the same journey.</p>

<p>See you in Class 2. Join us in our paid community and keep up on SEO and Google Ads </p>`;

export default function PostGoogleAdsClass1Fundamentals() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Google Ads Class 1: Fundamentals",
  "description": "Duration: 45 minutes + 15 minutes Q&A Level: Beginner Course: KnowHow Marketing Lab - Master Google Ads Series Learning Objectives By the end of this cl...",
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
      "url": "https://knowhowmarketinglab.com/wp-content/uploads/2025/08/cropped-KHML-Logo-V04_FAVICON-1-180x180.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "/blog/google-ads-class-1-fundamentals"
  }
});
    document.head.appendChild(script);
    document.title = 'Google Ads Class 1: Fundamentals | KnowHow Marketing Lab';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Duration: 45 minutes + 15 minutes Q&A Level: Beginner Course: KnowHow Marketing Lab - Master Google Ads Series Learning Objectives By the end of this cl...');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/blog/google-ads-class-1-fundamentals');

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/"},
        {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://knowhowmarketinglab.com/blog"},
        {"@type": "ListItem", "position": 3, "name": "Google Ads Class 1: Fundamentals", "item": "https://knowhowmarketinglab.com/google-ads-class-1-fundamentals"}
      ]
    });
    document.head.appendChild(breadcrumbScript);
    return () => { document.head.removeChild(script); document.head.removeChild(breadcrumbScript); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
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
            <span className="text-slate-700 truncate">Google Ads Class 1: Fundamentals</span>
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
            Google Ads Class 1: Fundamentals
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
              <li key="learning-objectives"><a href="#learning-objectives" className="text-[#318599] hover:underline text-sm">Learning Objectives</a></li>
              <li key="class-outline"><a href="#class-outline" className="text-[#318599] hover:underline text-sm">Class Outline</a></li>
              <li key="key-metrics-and-terminology"><a href="#key-metrics-and-terminology" className="text-[#318599] hover:underline text-sm">Key Metrics and Terminology</a></li>
              <li key="homework-assignment"><a href="#homework-assignment" className="text-[#318599] hover:underline text-sm">Homework Assignment</a></li>
              <li key="key-takeaways"><a href="#key-takeaways" className="text-[#318599] hover:underline text-sm">Key Takeaways</a></li>
              <li key="next-steps"><a href="#next-steps" className="text-[#318599] hover:underline text-sm">Next Steps</a></li>
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
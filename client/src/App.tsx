// KnowHow Marketing Lab - App Root
// Light theme, conversion-optimized routing
// Code-split with React.lazy: each page loads only when visited
// Routes: / | /blog | /blog/:slug | /framework | /pricing | /resources | /about | /privacy | /terms | /courses/seo | /courses/google-ads | /thank-you | /podcast | /free-course | /blog/how-to-set-up-google-search-console | /blog/keyword-research-keyword-clusters | /blog/ga4-explained-for-business-owners

import { lazy, Suspense, useState, useEffect } from "react";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
// Perf: Toaster (sonner) and TooltipProvider (radix-tooltip) are deferred — they pull in
// the ui-core chunk (33KB gzipped) which was in the critical path. They load after first interaction.
const Toaster = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));
const TooltipProvider = lazy(() => import("@/components/ui/tooltip").then(m => ({ default: m.TooltipProvider })));
// Lazy-load non-critical UI to reduce TBT on initial render
const CookieConsent = lazy(() => import("./components/CookieConsent"));
const ExitIntentPopup = lazy(() => import("./components/ExitIntentPopup"));
const StickyMobileCTA = lazy(() => import('./components/StickyMobileCTA'));
// Eagerly load Home (first page most visitors see)
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load all other pages - they only download when visited
const Pricing = lazy(() => import("./pages/Pricing"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Framework = lazy(() => import("./pages/Framework"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const CourseSEO = lazy(() => import("./pages/CourseSEO"));
const CourseGoogleAds = lazy(() => import("./pages/CourseGoogleAds"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Podcast = lazy(() => import("./pages/Podcast"));
const FreeCourse = lazy(() => import('./pages/FreeCourse'));
const Community = lazy(() => import('./pages/Community'));
const PowerHours = lazy(() => import('./pages/PowerHours'));
const Trial = lazy(() => import('./pages/Trial'));
const ThankYouPowerHours = lazy(() => import('./pages/ThankYouPowerHours'));

// WordPress migrated blog posts - exact same URLs to preserve SEO rankings
const PostUrlRedirectsEverythingYouNeedToKnowForSeo = lazy(() => import('./pages/blog/PostUrlRedirectsEverythingYouNeedToKnowForSeo'));
const PostHowPeopleChargeForGoogleAds = lazy(() => import('./pages/blog/PostHowPeopleChargeForGoogleAds'));
const PostHowAiIsShapingMarketing = lazy(() => import('./pages/blog/PostHowAiIsShapingMarketing'));
const PostAiSeoGuide = lazy(() => import('./pages/blog/PostAiSeoGuide'));
const PostGoogleAdsMasterclassThe5WeekRoadmapToProfitableCampaigns = lazy(() => import('./pages/blog/PostGoogleAdsMasterclassThe5WeekRoadmapToProfitableCampaigns'));
const PostTheUltimateGuideToGoogleAdsBiddingStrategies = lazy(() => import('./pages/blog/PostTheUltimateGuideToGoogleAdsBiddingStrategies'));
const PostGoogleAdsClass1Fundamentals = lazy(() => import('./pages/blog/PostGoogleAdsClass1Fundamentals'));
const PostTheUltimateGuideToGoogleAdsCampaignTypes = lazy(() => import('./pages/blog/PostTheUltimateGuideToGoogleAdsCampaignTypes'));
const PostAdgroupsBasedOnUserIntent = lazy(() => import('./pages/blog/PostAdgroupsBasedOnUserIntent'));
const PostGa4SetUpGuide = lazy(() => import('./pages/blog/PostGa4SetUpGuide'));
const PostHowToSetUpGoogleSearchConsole = lazy(() => import('./pages/blog/PostHowToSetUpGoogleSearchConsole'));
const PostKeywordResearchKeywordClusters = lazy(() => import('./pages/blog/PostKeywordResearchKeywordClusters'));
const PostGa4ExplainedForBusinessOwners = lazy(() => import('./pages/blog/PostGa4ExplainedForBusinessOwners'));
const PostAiSeoCourse = lazy(() => import('./pages/blog/PostAiSeoCourse'));
const PostGoogleAdsFramework = lazy(() => import('./pages/blog/PostGoogleAdsFramework'));
const PostSEOAnalyticsCoachingForMarketers = lazy(() => import('./pages/blog/PostSEOAnalyticsCoachingForMarketers'));
const PostGoogleAdsCoachingForMarketers = lazy(() => import('./pages/blog/PostGoogleAdsCoachingForMarketers'));

// Minimal page-transition fallback - matches site background to avoid flash
function PageLoader() {
  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 rounded-full border-4 border-[#E98C28] border-t-transparent animate-spin"
          aria-hidden="true"
        />
        <span className="text-sm text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Loading...
        </span>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/resources" component={Resources} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />

        {/* WordPress migrated blog posts - specific routes MUST come before /blog/:slug catch-all */}
        <Route path="/blog/url-redirects-everything-you-need-to-know-for-seo" component={PostUrlRedirectsEverythingYouNeedToKnowForSeo} />
        <Route path="/blog/url-redirects-everything-you-need-to-know-for-seo/" component={PostUrlRedirectsEverythingYouNeedToKnowForSeo} />
        <Route path="/blog/how-people-charge-for-google-ads" component={PostHowPeopleChargeForGoogleAds} />
        <Route path="/blog/how-people-charge-for-google-ads/" component={PostHowPeopleChargeForGoogleAds} />
        <Route path="/blog/how-ai-is-shaping-marketing" component={PostHowAiIsShapingMarketing} />
        <Route path="/blog/how-ai-is-shaping-marketing/" component={PostHowAiIsShapingMarketing} />
        <Route path="/blog/ai-seo-guide" component={PostAiSeoGuide} />
        <Route path="/blog/ai-seo-guide/" component={PostAiSeoGuide} />
        <Route path="/blog/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns" component={PostGoogleAdsMasterclassThe5WeekRoadmapToProfitableCampaigns} />
        <Route path="/blog/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/" component={PostGoogleAdsMasterclassThe5WeekRoadmapToProfitableCampaigns} />
        <Route path="/blog/the-ultimate-guide-to-google-ads-bidding-strategies" component={PostTheUltimateGuideToGoogleAdsBiddingStrategies} />
        <Route path="/blog/the-ultimate-guide-to-google-ads-bidding-strategies/" component={PostTheUltimateGuideToGoogleAdsBiddingStrategies} />
        <Route path="/blog/google-ads-class-1-fundamentals" component={PostGoogleAdsClass1Fundamentals} />
        <Route path="/blog/google-ads-class-1-fundamentals/" component={PostGoogleAdsClass1Fundamentals} />
        <Route path="/blog/the-ultimate-guide-to-google-ads-campaign-types" component={PostTheUltimateGuideToGoogleAdsCampaignTypes} />
        <Route path="/blog/the-ultimate-guide-to-google-ads-campaign-types/" component={PostTheUltimateGuideToGoogleAdsCampaignTypes} />
        <Route path="/blog/adgroups-based-on-user-intent" component={PostAdgroupsBasedOnUserIntent} />
        <Route path="/blog/adgroups-based-on-user-intent/" component={PostAdgroupsBasedOnUserIntent} />
        <Route path="/blog/ga4-set-up-guide" component={PostGa4SetUpGuide} />
        <Route path="/blog/ga4-set-up-guide/" component={PostGa4SetUpGuide} />
        <Route path="/blog/how-to-set-up-google-search-console" component={PostHowToSetUpGoogleSearchConsole} />
        <Route path="/blog/how-to-set-up-google-search-console/" component={PostHowToSetUpGoogleSearchConsole} />
        <Route path="/blog/keyword-research-keyword-clusters" component={PostKeywordResearchKeywordClusters} />
        <Route path="/blog/keyword-research-keyword-clusters/" component={PostKeywordResearchKeywordClusters} />
        <Route path="/blog/ga4-explained-for-business-owners" component={PostGa4ExplainedForBusinessOwners} />
        <Route path="/blog/ga4-explained-for-business-owners/" component={PostGa4ExplainedForBusinessOwners} />
        <Route path="/blog/ai-seo-course" component={PostAiSeoCourse} />
        <Route path="/blog/ai-seo-course/" component={PostAiSeoCourse} />
        <Route path="/blog/google-ads-framework" component={PostGoogleAdsFramework} />
        <Route path="/blog/google-ads-framework/" component={PostGoogleAdsFramework} />
        <Route path="/blog/seo-and-analytics-coaching-for-marketers" component={PostSEOAnalyticsCoachingForMarketers} />
        <Route path="/blog/seo-and-analytics-coaching-for-marketers/" component={PostSEOAnalyticsCoachingForMarketers} />
        <Route path="/blog/google-ads-coaching-for-marketers" component={PostGoogleAdsCoachingForMarketers} />
        <Route path="/blog/google-ads-coaching-for-marketers/" component={PostGoogleAdsCoachingForMarketers} />

        {/* Catch-all for /blog/:slug - must come AFTER specific blog routes */}
        <Route path="/blog/:slug" component={BlogPost} />

        <Route path="/framework" component={Framework} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/courses/seo" component={CourseSEO} />
        <Route path="/courses/google-ads" component={CourseGoogleAds} />
        <Route path="/thank-you/power-hours" component={ThankYouPowerHours} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/podcast" component={Podcast} />
        <Route path="/free-course" component={FreeCourse} />
        <Route path="/community" component={Community} />
        <Route path="/community/" component={Community} />
        <Route path="/power-hours" component={PowerHours} />
        <Route path="/power-hours/" component={PowerHours} />
        <Route path="/trial" component={Trial} />
        <Route path="/trial/" component={Trial} />

        {/* Root-level legacy URLs (without /blog/ prefix) */}
        <Route path="/url-redirects-everything-you-need-to-know-for-seo/" component={PostUrlRedirectsEverythingYouNeedToKnowForSeo} />
        <Route path="/url-redirects-everything-you-need-to-know-for-seo" component={PostUrlRedirectsEverythingYouNeedToKnowForSeo} />
        <Route path="/how-people-charge-for-google-ads/" component={PostHowPeopleChargeForGoogleAds} />
        <Route path="/how-people-charge-for-google-ads" component={PostHowPeopleChargeForGoogleAds} />
        <Route path="/how-ai-is-shaping-marketing/" component={PostHowAiIsShapingMarketing} />
        <Route path="/how-ai-is-shaping-marketing" component={PostHowAiIsShapingMarketing} />
        <Route path="/ai-seo-guide/" component={PostAiSeoGuide} />
        <Route path="/ai-seo-guide" component={PostAiSeoGuide} />
        <Route path="/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns/" component={PostGoogleAdsMasterclassThe5WeekRoadmapToProfitableCampaigns} />
        <Route path="/google-ads-masterclass-the-5-week-roadmap-to-profitable-campaigns" component={PostGoogleAdsMasterclassThe5WeekRoadmapToProfitableCampaigns} />
        <Route path="/the-ultimate-guide-to-google-ads-bidding-strategies/" component={PostTheUltimateGuideToGoogleAdsBiddingStrategies} />
        <Route path="/the-ultimate-guide-to-google-ads-bidding-strategies" component={PostTheUltimateGuideToGoogleAdsBiddingStrategies} />
        <Route path="/google-ads-class-1-fundamentals/" component={PostGoogleAdsClass1Fundamentals} />
        <Route path="/google-ads-class-1-fundamentals" component={PostGoogleAdsClass1Fundamentals} />
        <Route path="/the-ultimate-guide-to-google-ads-campaign-types/" component={PostTheUltimateGuideToGoogleAdsCampaignTypes} />
        <Route path="/the-ultimate-guide-to-google-ads-campaign-types" component={PostTheUltimateGuideToGoogleAdsCampaignTypes} />
        <Route path="/adgroups-based-on-user-intent/" component={PostAdgroupsBasedOnUserIntent} />
        <Route path="/adgroups-based-on-user-intent" component={PostAdgroupsBasedOnUserIntent} />
        <Route path="/ga4-set-up-guide/" component={PostGa4SetUpGuide} />
        <Route path="/ga4-set-up-guide" component={PostGa4SetUpGuide} />

        {/*  301 Redirects: old WordPress URLs → new Manus URLs  */}
        {/* Course pages */}
        <Route path="/seo-course"><Redirect to="/courses/seo" /></Route>
        <Route path="/seo-course/"><Redirect to="/courses/seo" /></Route>
        <Route path="/google-ads-course"><Redirect to="/courses/google-ads" /></Route>
        <Route path="/google-ads-course/"><Redirect to="/courses/google-ads" /></Route>
        <Route path="/seo-ranking-accelerator-lab"><Redirect to="/courses/seo" /></Route>
        <Route path="/seo-ranking-accelerator-lab/"><Redirect to="/courses/seo" /></Route>
        <Route path="/product/seo-lab-intro"><Redirect to="/courses/seo" /></Route>
        <Route path="/product/seo-lab-intro/"><Redirect to="/courses/seo" /></Route>
        <Route path="/product/seo-ranking-accelerator-lab"><Redirect to="/courses/seo" /></Route>
        <Route path="/product/seo-ranking-accelerator-lab/"><Redirect to="/courses/seo" /></Route>
        <Route path="/seo"><Redirect to="/courses/seo" /></Route>
        <Route path="/seo/"><Redirect to="/courses/seo" /></Route>
        <Route path="/courses/knowhow-marketing-mastermind-lab-2022-2-2"><Redirect to="/courses/seo" /></Route>
        <Route path="/courses/knowhow-marketing-mastermind-lab-2022-2-2/"><Redirect to="/courses/seo" /></Route>
        {/* Waitlist / pricing */}
        <Route path="/waitlist"><Redirect to="/pricing" /></Route>
        <Route path="/waitlist/"><Redirect to="/pricing" /></Route>
        <Route path="/join-the-google-ads-course-bootcamp-waitlist"><Redirect to="/courses/google-ads" /></Route>
        <Route path="/join-the-google-ads-course-bootcamp-waitlist/"><Redirect to="/courses/google-ads" /></Route>
        <Route path="/join-our-google-ads-masterclass"><Redirect to="/courses/google-ads" /></Route>
        <Route path="/join-our-google-ads-masterclass/"><Redirect to="/courses/google-ads" /></Route>
        <Route path="/vip-marketing-lab"><Redirect to="/pricing" /></Route>
        <Route path="/vip-marketing-lab/"><Redirect to="/pricing" /></Route>
        <Route path="/shop"><Redirect to="/pricing" /></Route>
        <Route path="/shop/"><Redirect to="/pricing" /></Route>
        {/* Community - old slug redirects to new /community page */}
        <Route path="/sem-ai-knowhow-community"><Redirect to="/community" /></Route>
        <Route path="/sem-ai-knowhow-community/"><Redirect to="/community" /></Route>
        {/* Privacy / legal */}
        <Route path="/privacy-policy"><Redirect to="/privacy" /></Route>
        <Route path="/privacy-policy/"><Redirect to="/privacy" /></Route>
        <Route path="/refund_returns"><Redirect to="/privacy" /></Route>
        <Route path="/refund_returns/"><Redirect to="/privacy" /></Route>
        {/* Thank you */}
        <Route path="/thank-you-joining-waitlist"><Redirect to="/thank-you" /></Route>
        <Route path="/thank-you-joining-waitlist/"><Redirect to="/thank-you" /></Route>
        {/* Blog categories and tags → /blog */}
        <Route path="/blog/"><Redirect to="/blog" /></Route>
        <Route path="/category/ai"><Redirect to="/blog" /></Route>
        <Route path="/category/ai/"><Redirect to="/blog" /></Route>
        <Route path="/category/google-ads"><Redirect to="/blog" /></Route>
        <Route path="/category/google-ads/"><Redirect to="/blog" /></Route>
        <Route path="/category/websites-seo"><Redirect to="/blog" /></Route>
        <Route path="/category/websites-seo/"><Redirect to="/blog" /></Route>
        <Route path="/category/uncategorized"><Redirect to="/blog" /></Route>
        <Route path="/category/uncategorized/"><Redirect to="/blog" /></Route>
        <Route path="/tag/beginner"><Redirect to="/blog" /></Route>
        <Route path="/tag/beginner/"><Redirect to="/blog" /></Route>
        <Route path="/tag/google-ads"><Redirect to="/blog" /></Route>
        <Route path="/tag/google-ads/"><Redirect to="/blog" /></Route>
        <Route path="/tag/google-ads-strategy"><Redirect to="/blog" /></Route>
        <Route path="/tag/google-ads-strategy/"><Redirect to="/blog" /></Route>
        <Route path="/tag/strategy"><Redirect to="/blog" /></Route>
        <Route path="/tag/strategy/"><Redirect to="/blog" /></Route>
        <Route path="/author/cris"><Redirect to="/about" /></Route>
        <Route path="/author/cris/"><Redirect to="/about" /></Route>
        {/* Resources */}
        <Route path="/free-google-ads-tool"><Redirect to="/resources" /></Route>
        <Route path="/free-google-ads-tool/"><Redirect to="/resources" /></Route>
        <Route path="/google-analytics-live-training"><Redirect to="/resources" /></Route>
        <Route path="/google-analytics-live-training/"><Redirect to="/resources" /></Route>
        <Route path="/how-to-improve-your-agencys-workflow-when-working-with-influencers"><Redirect to="/blog" /></Route>
        <Route path="/how-to-improve-your-agencys-workflow-when-working-with-influencers/"><Redirect to="/blog" /></Route>
        <Route path="/3-things-you-need-to-know-about-your-keywords"><Redirect to="/blog" /></Route>
        <Route path="/3-things-you-need-to-know-about-your-keywords/"><Redirect to="/blog" /></Route>
        {/* WordPress-only pages → home */}
        <Route path="/members-page"><Redirect to="/" /></Route>
        <Route path="/members-page/"><Redirect to="/" /></Route>
        <Route path="/my-account"><Redirect to="/" /></Route>
        <Route path="/my-account/"><Redirect to="/" /></Route>
        <Route path="/mlp"><Redirect to="/" /></Route>
        <Route path="/mlp/"><Redirect to="/" /></Route>
        <Route path="/vsl"><Redirect to="/" /></Route>
        <Route path="/vsl/"><Redirect to="/" /></Route>
        <Route path="/questionnaire-page"><Redirect to="/" /></Route>
        <Route path="/questionnaire-page/"><Redirect to="/" /></Route>
        <Route path="/landing-page"><Redirect to="/" /></Route>
        <Route path="/landing-page/"><Redirect to="/" /></Route>
        <Route path="/webinar-registration-page"><Redirect to="/" /></Route>
        <Route path="/webinar-registration-page/"><Redirect to="/" /></Route>
        <Route path="/step/ral-landing-page"><Redirect to="/courses/seo" /></Route>
        <Route path="/step/ral-landing-page/"><Redirect to="/courses/seo" /></Route>
        <Route path="/lessons/qa-seo-audit-strategy-summary-3"><Redirect to="/courses/seo" /></Route>
        <Route path="/lessons/qa-seo-audit-strategy-summary-3/"><Redirect to="/courses/seo" /></Route>

        <Route path="/the-lab"><Redirect to="/pricing" /></Route>
        <Route path="/the-lab/"><Redirect to="/pricing" /></Route>
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  // Defer non-critical overlays until after the page is interactive
  // This prevents CookieConsent from being the LCP element on mobile
  // (it was appearing as LCP because it rendered before the hero on slow connections)
  const [overlaysReady, setOverlaysReady] = useState(false);
  useEffect(() => {
    // Load overlays after first user interaction or 3s timeout
    // This keeps them off the critical path entirely
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      setOverlaysReady(true);
    };
    const events = ['scroll', 'click', 'touchstart', 'keydown', 'mousemove'];
    events.forEach(e => window.addEventListener(e, load, { once: true, passive: true }));
    const timer = setTimeout(load, 3000);
    return () => {
      events.forEach(e => window.removeEventListener(e, load));
      clearTimeout(timer);
    };
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        {/* TooltipProvider deferred — loads ui-core (33KB gz) off critical path */}
        <Suspense fallback={null}>
          <TooltipProvider>
            {/* Toaster deferred — loads sonner off critical path */}
            <Suspense fallback={null}>
              <Toaster />
            </Suspense>
            <Router />
            {/* Non-critical overlays: deferred until after page is interactive */}
            {/* This prevents CookieConsent from being selected as LCP element */}
            {overlaysReady && (
              <>
                <Suspense fallback={null}>
                  <CookieConsent />
                </Suspense>
                <Suspense fallback={null}>
                  <ExitIntentPopup />
                </Suspense>
                <Suspense fallback={null}>
                  <StickyMobileCTA />
                </Suspense>
              </>
            )}
          </TooltipProvider>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

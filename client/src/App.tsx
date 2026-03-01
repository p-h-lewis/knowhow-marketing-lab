// KnowHow Marketing Lab - App Root
// Light theme, conversion-optimized routing
// Code-split with React.lazy: each page loads only when visited
// Routes: / | /blog | /blog/:slug | /framework | /pricing | /resources | /about | /privacy | /terms | /courses/seo | /courses/google-ads | /thank-you

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CookieConsent from "./components/CookieConsent";
import ExitIntentPopup from "./components/ExitIntentPopup";

// Eagerly load Home (first page most visitors see)
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

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
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/framework" component={Framework} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/courses/seo" component={CourseSEO} />
        <Route path="/courses/google-ads" component={CourseGoogleAds} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/podcast" component={Podcast} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieConsent />
          <ExitIntentPopup />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

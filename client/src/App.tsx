// KnowHow Marketing Lab — App Root
// Light theme, conversion-optimized routing
// Routes: / | /blog | /blog/:slug | /framework | /pricing | /resources | /about | /privacy | /terms | /courses/seo | /courses/google-ads | /thank-you

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Framework from "./pages/Framework";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CourseSEO from "./pages/CourseSEO";
import CourseGoogleAds from "./pages/CourseGoogleAds";
import ThankYou from "./pages/ThankYou";
import CookieConsent from "./components/CookieConsent";

function Router() {
  return (
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
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
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
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

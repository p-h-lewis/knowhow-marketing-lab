// KnowHow Marketing Lab - Home Page
// Full conversion engine: Hero → Trust → AI + SEO Course → Videos → Courses → Community → Testimonials → About → Lead Capture → FAQ → Footer
// Schema: WebPage, EducationalOrganization, Course, VideoObject, FAQPage, BreadcrumbList
// Internal links: /pricing, /about, /resources, /#sections
// External links: seymourdigitalmedia.com, youtube.com, learnwith.seymourdigitalmedia.com, support.google.com, developers.google.com

import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import FreeCourseSection from '@/components/FreeCourseSection';
import VideoLibrary from '@/components/VideoLibrary';
import CoursesSection from '@/components/CoursesSection';
import CommunitySection from '@/components/CommunitySection';
import AboutSection from '@/components/AboutSection';
import LeadCaptureSection from '@/components/LeadCaptureSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  useSEO({
    title: "KnowHow Marketing Lab - AI + SEO, Google Ads & AI Marketing Training",
    description: "Master SEO, Google Ads, GA4, and AI marketing with free expert-led courses. 60+ free video lessons, weekly live Q&A, and a data-driven community. Learn from 20+ year agency veterans.",
    canonical: "https://knowhowmarketinglab.com/",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-white">

      {/* WebPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "KnowHow Marketing Lab - AI + SEO, Google Ads & AI Marketing Training",
            "description": "Free expert training in SEO, GA4, and AI marketing. 60+ free video lessons, weekly live classes, and The KnowHow Lab community on GoHighLevel. Built by agency veterans Pip Seymour and Phelan Lewis.",
            "url": "https://knowhowmarketinglab.com/",
            "inLanguage": "en-US",
            "isPartOf": { "@type": "WebSite", "name": "KnowHow Marketing Lab", "url": "https://knowhowmarketinglab.com" },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" }
              ]
            },
            "about": {
              "@type": "EducationalOrganization",
              "name": "KnowHow Marketing Lab",
              "description": "Free digital marketing education for medium-sized businesses. Courses in SEO, Google Ads, GA4, Google Tag Manager, and AI marketing automation.",
              "url": "https://knowhowmarketinglab.com",
              "sameAs": [
                "https://www.youtube.com/@knowhowmarketinglab",
                "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login",
                "https://seymourdigitalmedia.com/"
              ],
              "founder": [
                {
                  "@type": "Person",
                  "name": "Pip Seymour",
                  "jobTitle": "SEO & Content Strategy Lead",
                  "worksFor": { "@type": "Organization", "name": "Seymour Digital Media", "url": "https://seymourdigitalmedia.com/" },
                  "knowsAbout": ["SEO", "Google Search Console", "GA4", "Generative Engine Optimization", "Content Strategy"]
                },
                {
                  "@type": "Person",
                  "name": "Phelan Lewis",
                  "jobTitle": "Google Ads & Analytics Lead",
                  "knowsAbout": ["Google Ads", "Google Tag Manager", "GA4", "AI Marketing Automation", "PPC"]
                }
              ]
            }
          })
        }}
      />

      {/* Course schema - AI + SEO Course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Free Data-Driven SEO Course",
            "description": "A 5-module AI + SEO course for medium-sized businesses. Covers keyword research, on-page SEO, Google Search Console, GA4, Google Business Profile, and Generative Engine Optimization (GEO). No credit card required.",
            "url": "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/login",
            "provider": {
              "@type": "Organization",
              "name": "KnowHow Marketing Lab",
              "url": "https://knowhowmarketinglab.com",
              "sameAs": "https://seymourdigitalmedia.com/"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "category": "Free"
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "instructor": [
                { "@type": "Person", "name": "Pip Seymour" },
                { "@type": "Person", "name": "Phelan Lewis" }
              ]
            },
            "about": [
              { "@type": "Thing", "name": "Search Engine Optimization" },
              { "@type": "Thing", "name": "Google Search Console" },
              { "@type": "Thing", "name": "Google Analytics 4" },
              { "@type": "Thing", "name": "Google Business Profile" },
              { "@type": "Thing", "name": "Generative Engine Optimization" }
            ]
          })
        }}
      />

      {/* ItemList schema - internal page sections for AI navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "KnowHow Marketing Lab - Page Sections",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "AI + SEO Course", "url": "https://knowhowmarketinglab.com/#free-course" },
              { "@type": "ListItem", "position": 2, "name": "Free Video Library", "url": "https://knowhowmarketinglab.com/#videos" },
              { "@type": "ListItem", "position": 3, "name": "Courses - AI + SEO & AI Marketing", "url": "https://knowhowmarketinglab.com/#courses" },
              { "@type": "ListItem", "position": 4, "name": "The KnowHow Lab on GoHighLevel", "url": "https://knowhowmarketinglab.com/#community" },
              { "@type": "ListItem", "position": 5, "name": "Pricing - Free vs Community", "url": "https://knowhowmarketinglab.com/pricing" },
              { "@type": "ListItem", "position": 6, "name": "About Pip Seymour & Phelan Lewis", "url": "https://knowhowmarketinglab.com/about" },
              { "@type": "ListItem", "position": 7, "name": "Free Resources - Official Google Docs", "url": "https://knowhowmarketinglab.com/resources" }
            ]
          })
        }}
      />

      <AnnouncementBar />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <FreeCourseSection />
        <VideoLibrary />
        <CoursesSection />
        <CommunitySection />
        <TestimonialsSection />
        <AboutSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
}

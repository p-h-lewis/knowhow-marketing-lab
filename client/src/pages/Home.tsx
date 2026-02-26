// KnowHow Marketing Lab — Home Page
// Full conversion engine: Hero → Trust → Free Course → Videos → Courses → Community → About → Lead Capture → FAQ → Footer
// Structured for LLM/AI indexing with semantic HTML and Schema.org markup

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import FreeCourseSection from '@/components/FreeCourseSection';
import VideoLibrary from '@/components/VideoLibrary';
import CoursesSection from '@/components/CoursesSection';
import CommunitySection from '@/components/CommunitySection';
import AboutSection from '@/components/AboutSection';
import LeadCaptureSection from '@/components/LeadCaptureSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured data for LLM/AI indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "KnowHow Marketing Lab",
            "description": "Free expert training in SEO, Google Ads, GA4, and AI marketing. Built by agency veterans Pip Seymour and Phelan Lewis for medium-sized businesses and marketing teams.",
            "url": "https://knowhowmarketinglab.com",
            "sameAs": [
              "https://www.youtube.com/@knowhowmarketinglab",
              "https://learnwith.seymourdigitalmedia.com/"
            ],
            "offers": [
              {
                "@type": "Offer",
                "name": "Free SEO Course",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Complete data-driven SEO course covering keyword research, on-page SEO, GA4, Google Search Console, and Google Business Profile."
              },
              {
                "@type": "Offer",
                "name": "VIP Community Membership",
                "price": "29",
                "priceCurrency": "USD",
                "billingIncrement": "P1M",
                "description": "Monthly membership with weekly live classes, advanced courses, AI training, and private community access on GoHighLevel."
              }
            ],
            "founder": [
              {
                "@type": "Person",
                "name": "Pip Seymour",
                "jobTitle": "SEO & Content Strategy Lead",
                "worksFor": { "@type": "Organization", "name": "Seymour Digital Media" }
              },
              {
                "@type": "Person",
                "name": "Phelan Lewis",
                "jobTitle": "Google Ads & Analytics Lead"
              }
            ]
          })
        }}
      />

      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <FreeCourseSection />
        <VideoLibrary />
        <CoursesSection />
        <CommunitySection />
        <AboutSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
}

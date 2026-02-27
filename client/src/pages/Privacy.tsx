// /privacy — Privacy Policy
// Schema: WebPage + BreadcrumbList
// Internal links: / | /about | /pricing
// Grade 6 reading level — plain language, no legal jargon
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Link } from 'wouter';
import { useSEO } from "@/hooks/useSEO";

export default function Privacy() {
  useSEO({
    title: "Privacy Policy | KnowHow Marketing Lab",
    description: "KnowHow Marketing Lab privacy policy. Learn how we collect, use, and protect your personal information in compliance with CASL and GDPR.",
    canonical: "https://knowhowmarketinglab.com/privacy",
    ogType: "website",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy — KnowHow Marketing Lab",
            "url": "https://knowhowmarketinglab.com/privacy",
            "description": "How KnowHow Marketing Lab collects, uses, and protects your personal information.",
            "inLanguage": "en",
            "isPartOf": { "@type": "WebSite", "name": "KnowHow Marketing Lab", "url": "https://knowhowmarketinglab.com" },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
                { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://knowhowmarketinglab.com/privacy" }
              ]
            }
          })
        }}
      />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 pt-20" id="main-content">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b border-gray-100 py-3">
          <div className="container">
            <ol className="flex items-center gap-2 text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <li><Link href="/" className="hover:text-[#E98C28] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium">Privacy Policy</li>
            </ol>
          </div>
        </nav>

        <article className="py-16" itemScope itemType="https://schema.org/WebPage">
          <div className="container max-w-3xl">
            <header className="mb-10">
              <p className="text-xs font-bold text-[#E98C28] uppercase tracking-widest mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Legal
              </p>
              <h1
                className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                itemProp="name"
              >
                Privacy Policy
              </h1>
              <p className="text-gray-500 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Last updated: February 2026 · Applies to <strong>knowhowmarketinglab.com</strong> and <strong>learnwith.seymourdigitalmedia.com</strong>
              </p>
            </header>

            <div className="prose prose-gray max-w-none" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="text">

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Who we are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                KnowHow Marketing Lab is a digital marketing education platform run by Seymour Digital Media. We teach SEO, Google Ads, Google Analytics 4, and AI marketing to medium-sized businesses. Our main website is <strong>knowhowmarketinglab.com</strong>. Our course and community platform is hosted at <strong>learnwith.seymourdigitalmedia.com</strong> and powered by GoHighLevel.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                What information we collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                We only collect information you give us directly. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                <li>Your email address when you sign up for a free course or join the community</li>
                <li>Your name if you create an account on our course platform</li>
                <li>Payment information when you purchase a membership (processed securely by Stripe — we never see your card number)</li>
                <li>Messages you send us through contact forms</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We also collect basic website analytics data (like which pages you visit and how long you stay) through Google Analytics 4 and Google Tag Manager. This data is anonymous and helps us improve the site.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                How we use your information
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                <li>To send you the free course materials you signed up for</li>
                <li>To give you access to the community and paid courses</li>
                <li>To send you helpful marketing tips and updates (you can unsubscribe anytime)</li>
                <li>To improve our website and courses based on how people use them</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your information to anyone. We do not share it with third parties except the tools we use to run our business (GoHighLevel for community/courses, Stripe for payments, Google Analytics for site analytics).
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website uses cookies to remember your preferences and to track anonymous analytics data. You can turn off cookies in your browser settings at any time. If you do, some parts of the site may not work as expected.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use Google Tag Manager to manage our tracking tags. You can learn more about how Google uses data at{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#318599] hover:underline"
                >
                  policies.google.com/privacy
                </a>.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Your rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                <li>Ask us what personal data we hold about you</li>
                <li>Ask us to delete your data</li>
                <li>Unsubscribe from our emails at any time (every email has an unsubscribe link)</li>
                <li>Cancel your community membership at any time with no penalty</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                To exercise any of these rights, email us at <strong>hello@seymourdigitalmedia.com</strong>.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Data security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We take reasonable steps to protect your information. Our course platform (GoHighLevel) and payment processor (Stripe) use industry-standard encryption. We do not store payment card details on our servers.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Changes to this policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this policy from time to time. If we make significant changes, we will let you know by email or by posting a notice on this page. The date at the top of this page always shows when it was last updated.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Contact us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this policy, email us at <strong>hello@seymourdigitalmedia.com</strong> or visit{' '}
                <a
                  href="https://www.seymourdigitalmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#318599] hover:underline"
                >
                  seymourdigitalmedia.com
                </a>.
              </p>
            </div>

            {/* Internal navigation */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
              <Link href="/" className="text-sm text-[#318599] hover:underline font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                ← Back to Home
              </Link>
              <Link href="/terms" className="text-sm text-[#318599] hover:underline font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Terms of Service
              </Link>
              <Link href="/about" className="text-sm text-[#318599] hover:underline font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                About Us
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

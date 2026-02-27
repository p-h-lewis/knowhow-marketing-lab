// /terms — Terms of Service
// Schema: WebPage + BreadcrumbList
// Internal links: / | /privacy | /pricing | /about
// Grade 6 reading level — plain language
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Link } from 'wouter';
import { useSEO } from "@/hooks/useSEO";

export default function Terms() {
  useSEO({
    title: "Terms of Service | KnowHow Marketing Lab",
    description: "KnowHow Marketing Lab terms of service. Read our terms for using our free courses, community membership, and website content.",
    canonical: "https://knowhowmarketinglab.com/terms",
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
            "name": "Terms of Service — KnowHow Marketing Lab",
            "url": "https://knowhowmarketinglab.com/terms",
            "description": "Terms of service for using KnowHow Marketing Lab's free courses, community membership, and website.",
            "inLanguage": "en",
            "isPartOf": { "@type": "WebSite", "name": "KnowHow Marketing Lab", "url": "https://knowhowmarketinglab.com" },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
                { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://knowhowmarketinglab.com/terms" }
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
              <li className="text-gray-900 font-medium">Terms of Service</li>
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
                Terms of Service
              </h1>
              <p className="text-gray-500 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Last updated: February 2026 · Applies to <strong>knowhowmarketinglab.com</strong> and <strong>learnwith.seymourdigitalmedia.com</strong>
              </p>
            </header>

            <div className="prose prose-gray max-w-none" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="text">

              <p className="text-gray-600 leading-relaxed mb-6">
                By using KnowHow Marketing Lab — including our free courses, video library, community membership, or website — you agree to these terms. Please read them. They are written in plain language.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Who we are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                KnowHow Marketing Lab is operated by Seymour Digital Media. We provide digital marketing education — free video lessons, structured courses, and a paid community membership hosted on GoHighLevel at <strong>learnwith.seymourdigitalmedia.com</strong>.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Free content
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our free courses and video library are available to anyone. You can watch, share, and learn from them at no cost. You may not copy, repackage, or sell our content as your own. All content is the intellectual property of Seymour Digital Media.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Community membership
              </h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                The VIP Community is a paid monthly membership at $29/month (early access pricing — subject to change for new members). As a member you get:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                <li>Access to all paid courses on our GoHighLevel platform</li>
                <li>Weekly live Q&amp;A sessions every Thursday</li>
                <li>Monthly deep-dive training workshops</li>
                <li>Private community access</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can cancel your membership at any time. Your access continues until the end of your current billing period. We do not offer refunds for partial months, but you will never be charged after you cancel.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                See our <Link href="/pricing" className="text-[#318599] hover:underline">pricing page</Link> for full details on what is included.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Your account
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You are responsible for keeping your account login details safe. Do not share your account with others. If you think someone else has accessed your account, contact us immediately at <strong>hello@seymourdigitalmedia.com</strong>.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Community rules
              </h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Our community is a professional, supportive space. We expect all members to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                <li>Be respectful and helpful to other members</li>
                <li>Not spam, promote competing services, or post irrelevant content</li>
                <li>Not share course materials outside the community</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to remove any member who violates these rules, without a refund.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Results disclaimer
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our courses and community teach real, proven strategies. But we cannot guarantee specific results. Marketing results depend on many factors — your industry, competition, budget, and how consistently you apply what you learn. What we can guarantee is that we will teach you everything we know, clearly and honestly.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                External links
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website links to official Google documentation and other authoritative sources. We are not responsible for the content of external websites. These links are provided for educational purposes only.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Changes to these terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update these terms from time to time. We will let you know about significant changes by email or by posting a notice on this page. Continued use of our site or community after changes means you accept the updated terms.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Contact
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Questions? Email us at <strong>hello@seymourdigitalmedia.com</strong> or visit{' '}
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
              <Link href="/privacy" className="text-sm text-[#318599] hover:underline font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Privacy Policy
              </Link>
              <Link href="/pricing" className="text-sm text-[#318599] hover:underline font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Pricing
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

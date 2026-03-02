// KnowHow Marketing Lab - Terms & Conditions
// Covers: free content, paid membership, email marketing consent, advertising, GoHighLevel, results disclaimer
// Last updated: March 2026

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Link } from 'wouter';
import { useSEO } from "@/hooks/useSEO";

const LAST_UPDATED = "March 1, 2026";
const CONTACT_EMAIL = "pip@seymourdigitalmedia.com";
const COMPANY_NAME = "Seymour Digital Media Inc.";
const SITE_NAME = "KnowHow Marketing Lab";
const SITE_URL = "https://knowhowmarketinglab.com";

export default function Terms() {
  useSEO({
    title: "Terms & Conditions - KnowHow Marketing Lab",
    description: "Terms and Conditions for KnowHow Marketing Lab. Read our terms for using our free AI + SEO course, The KnowHow Lab membership, email marketing, and website content.",
    canonical: "https://knowhowmarketinglab.com/terms",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms & Conditions - KnowHow Marketing Lab",
            "url": "https://knowhowmarketinglab.com/terms",
            "description": "Terms and conditions for using KnowHow Marketing Lab's courses, community membership, and website.",
            "inLanguage": "en",
            "isPartOf": { "@type": "WebSite", "name": "KnowHow Marketing Lab", "url": "https://knowhowmarketinglab.com" },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/" },
                { "@type": "ListItem", "position": 2, "name": "Terms & Conditions", "item": "https://knowhowmarketinglab.com/terms" }
              ]
            }
          })
        }}
      />
      <AnnouncementBar />
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section className="pt-32 pb-10 bg-gray-50 border-b border-gray-200">
          <div className="container max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <li><Link href="/" className="hover:text-[#E98C28] transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-900 font-medium">Terms &amp; Conditions</li>
              </ol>
            </nav>
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Legal</span>
            <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Terms &amp; Conditions
            </h1>
            <p className="text-gray-500 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Last updated: {LAST_UPDATED} &nbsp;&middot;&nbsp; Applies to <strong>knowhowmarketinglab.com</strong>
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div style={{ fontFamily: 'DM Sans, sans-serif' }}>

              <p className="text-gray-700 leading-relaxed mb-8">
                By accessing or using {SITE_NAME} (<strong>{SITE_URL}</strong>), enrolling in any of our courses, or joining The KnowHow Lab community, you agree to be bound by these Terms &amp; Conditions. These terms are a legally binding agreement between you and {COMPANY_NAME} ("we", "us", or "our"). If you do not agree, please do not use our services.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>1. About Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {SITE_NAME} is a digital marketing education platform operated by {COMPANY_NAME}. We provide free and paid training in SEO, Google Analytics 4, Google Ads, and AI marketing for medium-sized businesses. Our paid community, The KnowHow Lab, is hosted on the GoHighLevel platform. For questions, contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#318599] hover:underline">{CONTACT_EMAIL}</a>.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>2. Free Content and Website Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our free AI + SEO course, video library, blog, and downloadable resources are available to anyone at no cost. You may access, watch, and learn from this content for your own personal or professional development. You may not copy, reproduce, repackage, resell, or distribute our content as your own without our express written permission. All content on this website is the intellectual property of {COMPANY_NAME}.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may share links to our content and reference our materials with proper attribution. You may not scrape, frame, or systematically download our content using automated tools.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>3. The KnowHow Lab Membership</h2>

              <h3 className="text-base font-bold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>3.1 What Is Included</h3>
              <p className="text-gray-700 leading-relaxed mb-3">The KnowHow Lab is a paid monthly membership hosted on GoHighLevel. As a member you receive:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                <li>Access to all paid courses on our GoHighLevel platform</li>
                <li>Weekly live Q&amp;A sessions every Thursday</li>
                <li>Monthly deep-dive training workshops</li>
                <li>Access to the private member community</li>
                <li>All future courses and content added during your membership</li>
              </ul>

              <h3 className="text-base font-bold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>3.2 Pricing and Billing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The KnowHow Lab is currently priced at <strong>$29 per month (USD)</strong>. This is an early access price and is subject to change for new members. Existing members will be given at least 30 days' notice before any price increase takes effect for their account.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your membership renews automatically on a monthly basis on the same date each month. Payment is processed by GoHighLevel. By providing your payment details, you authorise GoHighLevel to charge your payment method on a recurring monthly basis until you cancel.
              </p>

              <h3 className="text-base font-bold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>3.3 Cancellation and Refunds</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may cancel your membership at any time. Your access will continue until the end of your current billing period, after which you will not be charged again. We do not offer refunds for partial months or for any period already billed. To cancel, log in to your GoHighLevel account and manage your subscription settings, or contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#318599] hover:underline">{CONTACT_EMAIL}</a>.
              </p>

              <h3 className="text-base font-bold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>3.4 Account Access</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your membership is for your personal use only. You may not share your login credentials with others or allow multiple people to access the platform under one account. We reserve the right to terminate accounts found to be sharing access, without a refund.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>4. Community Standards</h2>
              <p className="text-gray-700 leading-relaxed mb-3">The KnowHow Lab community is a professional, supportive space for marketers and business owners. By joining, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                <li>Treat all members and hosts with respect</li>
                <li>Not spam, promote competing services, or post irrelevant promotional content</li>
                <li>Not share course materials, recordings, or resources outside the community</li>
                <li>Not engage in harassment, discrimination, or abusive behaviour of any kind</li>
                <li>Not post content that is defamatory, misleading, or illegal</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to remove any member who violates these standards, at our sole discretion and without a refund.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>5. Email Marketing and Communications</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By signing up for our free course or joining The KnowHow Lab, you are providing express consent to receive email communications from KnowHow Marketing Lab and Seymour Digital Media. These communications may include course access information, training reminders, new content announcements, and promotional offers for our services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We comply with Canada's Anti-Spam Legislation (CASL) and, where applicable, the CAN-SPAM Act and GDPR. You can unsubscribe from marketing emails at any time by clicking the unsubscribe link in any email. Transactional emails (such as billing receipts and course access links) are not marketing emails and will continue to be sent as necessary to deliver the services you have purchased.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>6. Advertising and Retargeting</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We run paid advertising campaigns on Google Search and the Google Display Network. We use Google Ads remarketing, which means visitors to this website may see our advertisements on other websites, YouTube, or in Google Search after leaving our site. This is done through cookies placed by Google Tag Manager. For more information on how this works and how to opt out, please see our <Link href="/privacy" className="text-[#318599] hover:underline">Privacy Policy</Link>.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>7. Results Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our courses and community teach real, proven digital marketing strategies used by our agency, Seymour Digital Media, with real clients. However, we cannot guarantee specific results from applying what you learn. Marketing outcomes depend on many factors outside our control, including your industry, competitive landscape, budget, website quality, and how consistently and correctly you apply the strategies taught.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any case studies, examples, or results mentioned on this website represent the experiences of specific clients and are not a guarantee that you will achieve the same outcomes. We commit to teaching you everything we know, clearly and honestly, and to keeping our content current as the digital marketing landscape evolves.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on this website and within The KnowHow Lab - including course videos, written materials, templates, frameworks, and graphics - is owned by {COMPANY_NAME} and protected by copyright law. You are granted a limited, non-exclusive, non-transferable licence to access and use this content for your own personal or business purposes during your membership. This licence does not permit you to reproduce, distribute, or create derivative works from our content.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>9. Third-Party Platforms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our courses and community are hosted on GoHighLevel. Your use of the GoHighLevel platform is also subject to <a href="https://www.gohighlevel.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">GoHighLevel's Terms of Service</a>. We are not responsible for any changes to GoHighLevel's platform, pricing, or availability, though we will make reasonable efforts to notify members of any significant changes that affect their access.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website also links to external resources including Google's official documentation, YouTube, and other authoritative sources. We are not responsible for the content of external websites. Links are provided for educational purposes only.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>10. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, {COMPANY_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website, our courses, or The KnowHow Lab membership. Our total liability to you for any claim arising from these terms shall not exceed the amount you paid us in the 3 months preceding the claim.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website and its content are provided "as is" without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms &amp; Conditions are governed by the laws of the Province of British Columbia, Canada, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved in the courts of British Columbia, Canada.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>12. Changes to These Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update these Terms &amp; Conditions from time to time. When we make material changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify members by email. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>13. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms &amp; Conditions, please contact:
              </p>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 text-sm text-gray-700">
                <p className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{COMPANY_NAME}</p>
                <p>Operating as: {SITE_NAME}</p>
                <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#318599] hover:underline">{CONTACT_EMAIL}</a></p>
                <p>Website: <a href={SITE_URL} className="text-[#318599] hover:underline">{SITE_URL}</a></p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
                <Link href="/privacy" className="text-[#318599] hover:underline font-medium">
                  Privacy Policy &rarr;
                </Link>
                <Link href="/pricing" className="text-[#318599] hover:underline font-medium">
                  Pricing &rarr;
                </Link>
                <Link href="/" className="text-gray-500 hover:underline">
                  &larr; Back to Home
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

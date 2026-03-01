// KnowHow Marketing Lab - Privacy Policy
// Covers: Google Analytics 4, Google Ads retargeting, email marketing (GoHighLevel), cookies, CASL/GDPR
// Last updated: March 2026

import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';
import { useSEO } from "@/hooks/useSEO";
import { Link } from 'wouter';

const LAST_UPDATED = "March 1, 2026";
const CONTACT_EMAIL = "pip@seymourdigitalmedia.com";
const COMPANY_NAME = "Seymour Digital Media Inc.";
const SITE_NAME = "KnowHow Marketing Lab";
const SITE_URL = "https://knowhowmarketinglab.com";

export default function Privacy() {
  useSEO({
    title: "Privacy Policy - KnowHow Marketing Lab",
    description: "Privacy Policy for KnowHow Marketing Lab. Learn how we collect, use, and protect your personal information, including our use of Google Analytics, advertising cookies, and email marketing.",
    canonical: `${SITE_URL}/privacy`,
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
            "name": "Privacy Policy - KnowHow Marketing Lab",
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
      <main id="main-content">

        {/* Hero */}
        <section className="pt-32 pb-10 bg-gray-50 border-b border-gray-200">
          <div className="container max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <li><Link href="/" className="hover:text-[#E98C28] transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-900 font-medium">Privacy Policy</li>
              </ol>
            </nav>
            <span className="text-xs font-bold text-[#E98C28] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Legal</span>
            <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Privacy Policy
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
                {SITE_NAME} (<strong>{SITE_URL}</strong>) is operated by {COMPANY_NAME}. This Privacy Policy explains what personal information we collect, why we collect it, how we use it, and your rights regarding that information. By using this website or enrolling in any of our courses or community programs, you agree to the practices described in this policy.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>1. Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {SITE_NAME} is a digital marketing education platform operated by {COMPANY_NAME}, a company based in Australia and Canada. We provide free and paid training in SEO, Google Analytics 4 (GA4), Google Ads, and AI marketing for medium-sized businesses. Our paid community, The KnowHow Lab, is hosted on the GoHighLevel platform.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For privacy inquiries, contact us at: <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#318599] hover:underline">{CONTACT_EMAIL}</a>
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>2. Information We Collect</h2>

              <h3 className="text-base font-bold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>2.1 Information You Provide Directly</h3>
              <p className="text-gray-700 leading-relaxed mb-3">When you sign up for our free course, join The KnowHow Lab, or contact us, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                <li>Your name and email address</li>
                <li>Your business name and website URL (if provided)</li>
                <li>Payment information (processed securely by GoHighLevel — we do not store card details)</li>
                <li>Any messages or questions you send us</li>
              </ul>

              <h3 className="text-base font-bold text-gray-900 mt-6 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>2.2 Information Collected Automatically</h3>
              <p className="text-gray-700 leading-relaxed mb-3">When you visit this website, we automatically collect certain technical and behavioural data through cookies and tracking technologies, including:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                <li>Pages visited, time on page, and navigation paths</li>
                <li>Device type, browser, and operating system</li>
                <li>IP address and approximate geographic location (country/city level)</li>
                <li>Referring website or search query that brought you here</li>
                <li>Interactions with forms, buttons, and videos</li>
              </ul>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>3. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website uses cookies and similar tracking technologies including pixels and tags. We use these for the following purposes:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border border-gray-200 rounded-xl text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Cookie / Technology</th>
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Purpose</th>
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">Google Analytics 4 (GA4)</td>
                      <td className="p-3">Measures website traffic, user behaviour, and conversion events to help us understand which content is most useful and how visitors find us.</td>
                      <td className="p-3 text-[#318599] font-medium">Analytics</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">Google Tag Manager</td>
                      <td className="p-3">Manages and deploys all tracking tags on the site, including GA4 and Google Ads conversion tracking.</td>
                      <td className="p-3 text-[#318599] font-medium">Tag Management</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">Google Ads Remarketing</td>
                      <td className="p-3">Allows us to show targeted ads to people who have previously visited this website when they browse other websites, use Google Search, or watch YouTube. This is how our retargeting campaigns work.</td>
                      <td className="p-3 text-[#E98C28] font-medium">Advertising</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">Google Ads Conversion Tracking</td>
                      <td className="p-3">Tracks when a visitor completes a goal (such as signing up for the free course or joining The KnowHow Lab) after clicking a Google Ad.</td>
                      <td className="p-3 text-[#E98C28] font-medium">Advertising</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Essential / Functional Cookies</td>
                      <td className="p-3">Required for the website to function correctly, including remembering your cookie consent preference.</td>
                      <td className="p-3 text-gray-500 font-medium">Essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                You can manage or opt out of non-essential cookies at any time using the cookie consent banner on this site, or by adjusting your browser settings. To opt out of Google's advertising cookies across all websites, visit <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Google Ad Settings</a> or install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">Google Analytics Opt-out Browser Add-on</a>.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>4. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                <li>Deliver the free AI + SEO course and The KnowHow Lab membership you signed up for</li>
                <li>Send you course access emails, community updates, and weekly training notifications</li>
                <li>Send marketing emails about new courses, training sessions, and offers (only with your consent)</li>
                <li>Improve the website and course content based on how people use them</li>
                <li>Run Google Ads campaigns, including retargeting ads to previous visitors</li>
                <li>Process payments for The KnowHow Lab membership through GoHighLevel</li>
                <li>Respond to your questions and support requests</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>5. Email Marketing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you sign up for our free course or join The KnowHow Lab, you are providing express consent to receive email communications from KnowHow Marketing Lab and Seymour Digital Media. These emails may include course access information, weekly training reminders, new content announcements, and promotional offers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our email marketing is managed through <strong>GoHighLevel</strong>. We comply with Canada's Anti-Spam Legislation (CASL) and, where applicable, the CAN-SPAM Act and GDPR. Every marketing email we send includes a clear and easy unsubscribe link. You can unsubscribe at any time, and we will remove you from our marketing list within 10 business days.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Transactional emails (such as your course login link or billing receipts) are not marketing emails and will still be sent after unsubscribing, as they are necessary to deliver the service you have purchased.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>6. Google Ads and Retargeting</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We run paid advertising campaigns on Google Search and the Google Display Network. As part of these campaigns, we use <strong>Google Ads remarketing</strong>, which means that if you visit this website, you may see our ads on other websites, YouTube, or in Google Search results after you leave.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This is done through a Google Ads remarketing tag (deployed via Google Tag Manager) that places a cookie on your browser. We do not share any personally identifiable information with Google as part of this process. To opt out of Google's interest-based advertising, visit <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">adssettings.google.com</a>.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>7. Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We use the following third-party services to operate this website and deliver our courses:</p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border border-gray-200 rounded-xl text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Service</th>
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Purpose</th>
                      <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Privacy Policy</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {[
                      { service: 'Google Analytics 4', purpose: 'Website analytics and user behaviour tracking', url: 'https://policies.google.com/privacy', label: 'Google Privacy Policy' },
                      { service: 'Google Ads', purpose: 'Paid advertising and remarketing', url: 'https://policies.google.com/privacy', label: 'Google Privacy Policy' },
                      { service: 'Google Tag Manager', purpose: 'Tag and tracking management', url: 'https://policies.google.com/privacy', label: 'Google Privacy Policy' },
                      { service: 'GoHighLevel', purpose: 'Course delivery, community platform, email marketing, and payment processing', url: 'https://www.gohighlevel.com/privacy-policy', label: 'GoHighLevel Privacy Policy' },
                      { service: 'YouTube', purpose: 'Video hosting for free course content and podcast', url: 'https://policies.google.com/privacy', label: 'Google Privacy Policy' },
                    ].map(row => (
                      <tr key={row.service} className="border-b border-gray-100 last:border-0">
                        <td className="p-3 font-medium">{row.service}</td>
                        <td className="p-3">{row.purpose}</td>
                        <td className="p-3"><a href={row.url} target="_blank" rel="noopener noreferrer" className="text-[#318599] hover:underline">{row.label}</a></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8. Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third parties. We share your data only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                <li><strong>With service providers</strong> who help us operate the site and deliver courses (listed in Section 7), under strict data processing agreements</li>
                <li><strong>With Google</strong> for analytics and advertising purposes, as described in Sections 3 and 6</li>
                <li><strong>When required by law</strong>, such as in response to a valid legal request from a government authority</li>
                <li><strong>In the event of a business transfer</strong>, such as a merger or acquisition, where your data may be transferred as part of the transaction</li>
              </ul>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>9. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We retain your personal information for as long as necessary to provide our services and comply with legal obligations:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                <li>Course and community account data is retained for the duration of your membership plus 2 years</li>
                <li>Email marketing data is retained until you unsubscribe, after which we retain a suppression record to honour your opt-out</li>
                <li>Google Analytics data is retained for 14 months (the default GA4 retention period)</li>
                <li>Payment records are retained for 7 years as required by applicable tax law</li>
              </ul>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>10. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Depending on where you are located, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Ask us to correct inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request that we delete your personal information (subject to legal retention requirements)</li>
                <li><strong>Withdrawal of consent:</strong> Withdraw consent to email marketing at any time by clicking unsubscribe in any email</li>
                <li><strong>Opt out of advertising:</strong> Opt out of Google's interest-based advertising via Google Ad Settings</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                To exercise any of these rights, email us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#318599] hover:underline">{CONTACT_EMAIL}</a>. We will respond within 30 days.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>11. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website and our courses are intended for business owners and marketing professionals aged 18 and over. We do not knowingly collect personal information from anyone under the age of 18. If you believe a child has provided us with personal information, please contact us immediately and we will delete it.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>12. Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take reasonable technical and organisational measures to protect your personal information. Our website uses HTTPS encryption. Payment processing is handled entirely by GoHighLevel's PCI-compliant infrastructure — we never see or store your full payment card details. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>13. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make material changes, we will update the "Last updated" date at the top of this page. Continued use of the website after changes are posted constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>14. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact:
              </p>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 text-sm text-gray-700">
                <p className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{COMPANY_NAME}</p>
                <p>Operating as: {SITE_NAME}</p>
                <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#318599] hover:underline">{CONTACT_EMAIL}</a></p>
                <p>Website: <a href={SITE_URL} className="text-[#318599] hover:underline">{SITE_URL}</a></p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
                <Link href="/terms" className="text-[#318599] hover:underline font-medium">
                  Terms &amp; Conditions &rarr;
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

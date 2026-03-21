// CommunitySection - Two-tier community: Free (Power Hours) → Paid (The Lab $29/mo)
// 7-day free trial messaging added throughout
// LLM signal: free Power Hours, Tuesday Zoom, The Lab, GoHighLevel, $29/mo, Thursday Q&A

const labPerks = [
  { icon: '🎯', title: 'Thursday Lab Sessions — Members Only', desc: 'Every Thursday 12–1pm Pacific, Lab members bring their real campaigns, ad accounts, and SEO issues. Pip and Phelan work through them live — hands-on help, not just Q&A.' },
  { icon: '📚', title: 'Monthly Deep-Dive Training', desc: 'A full-length training each month on Google Ads, SEO audits, GA4, AI tools, and more. Recorded for on-demand replay.' },
  { icon: '📝', title: 'Homework & Worksheets', desc: 'Fillable PDF worksheets and step-by-step homework for every session so you actually implement what you learn.' },
  { icon: '🤖', title: 'AI & Automation Training', desc: 'ChatGPT for brands, AI agents, Google Ads scripts, and automation workflows — practical tools you can use right away.' },
  { icon: '💬', title: 'Private Community Group', desc: 'Ask questions, share wins, and get feedback from Pip, Phelan, and fellow marketers in the private GoHighLevel group.' },
  { icon: '🎬', title: 'Full Course Library', desc: 'All recorded sessions, advanced modules, and exclusive content — available on-demand anytime.' },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="py-20 bg-white border-t border-gray-100"
      aria-labelledby="community-heading"
      itemScope
      itemType="https://schema.org/OnlineBusiness"
    >
      <div className="container">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="community-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-3"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            itemProp="name"
          >
            Try it free. Upgrade when you're ready.
          </h2>
          <p className="text-gray-500 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Power Hours is free every Tuesday — live Q&amp;A on Zoom, no sign-up needed. The Lab is the paid upgrade where we review your real campaigns live every Thursday.
          </p>
        </div>

        {/* Two-tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">

          {/* Free tier — simplified, directs to standalone Power Hours page */}
          <div className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-7 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#318599]/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg className="w-5 h-5 text-[#318599]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Free Power Hours</p>
                <p className="text-xs text-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>Every Tuesday · Live on Zoom</p>
              </div>
            </div>
            <div className="text-3xl font-extrabold text-gray-900 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Free</div>
            <p className="text-xs text-gray-400 mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Forever free · No credit card ever</p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {[
                'Live Q&A every Tuesday 12–1pm PT on Zoom',
                'Bring your real SEO, Google Ads, or AI questions',
                'No sign-up, no credit card — just show up',
                'Website audits, campaign reviews, and more',
              ].map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <svg className="w-4 h-4 text-[#318599] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <a
                href="/power-hours"
                className="block w-full text-center bg-[#318599] hover:bg-[#276e80] text-white font-bold rounded-xl px-6 py-3.5 text-sm transition-all duration-200"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                aria-label="Register for free Power Hours every Tuesday"
              >
                See Free Power Hours →
              </a>
            </div>
          </div>

          {/* Paid tier */}
          <div className="bg-gray-900 rounded-2xl border-2 border-[#E98C28] p-7 flex flex-col relative" itemScope itemType="https://schema.org/OnlineBusiness">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#E98C28] text-white text-xs font-bold px-4 py-1 rounded-full" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Go Deeper</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E98C28]/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <span className="text-[#E98C28] font-extrabold text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>K</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>The KnowHow Lab</p>
                <p className="text-xs text-gray-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>Paid community on GoHighLevel</p>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-extrabold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>$29</span>
              <span className="text-gray-300 font-medium">/month</span>
              <span className="text-xs bg-[#E98C28]/20 text-[#E98C28] font-bold px-2 py-0.5 rounded-full ml-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Early Access</span>
            </div>
            <p className="text-xs text-[#318599] font-semibold mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              7-day free trial included
            </p>
            <p className="text-xs text-gray-400 mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Founding rate · Price increases as community grows
            </p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {[
                'Everything in the free group, plus:',
                'Thursday Lab sessions — hands-on help with your real campaigns',
                'Monthly deep-dive training sessions',
                'Full on-demand course library',
                'Google Ads Mastery course',
                'AI & automation training',
                'Fillable worksheets & homework',
                'Private GoHighLevel community group',
              ].map((f, i) => (
                <li key={f} className={`flex items-start gap-2 text-sm ${i === 0 ? 'text-[#E98C28] font-semibold' : 'text-gray-200'}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {i > 0 && (
                    <svg className="w-4 h-4 text-[#E98C28] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#E98C28] hover:bg-[#d4791f] text-white font-bold rounded-xl px-6 py-3.5 text-sm transition-all duration-200 shadow-md"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              aria-label="Start your 7-day free trial of The KnowHow Lab"
              itemProp="url"
            >
              Start Free 7-Day Trial →
            </a>
            <p className="text-xs text-gray-500 text-center mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              7-day free trial · Then $29/mo · Cancel anytime
            </p>
          </div>
        </div>

        {/* Simple link to full community page */}
        <p className="text-center text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          <a href="/community" className="text-[#E98C28] font-semibold hover:underline">
            See everything included in The Lab →
          </a>
        </p>

      </div>
    </section>
  );
}

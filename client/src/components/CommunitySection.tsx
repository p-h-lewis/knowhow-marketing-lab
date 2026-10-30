// CommunitySection - The Lab ($29 CAD/mo, 14-day free trial, live Tuesdays 12 to 1 pm Pacific)

const labPerks = [
  { icon: '🎯', title: 'Tuesday Lab Sessions, Members Only', desc: 'Every Tuesday 12 to 1 pm Pacific, Lab members bring their real campaigns, ad accounts, and SEO issues. Pip and Phelan work through them live, hands-on help, not just Q&A.' },
  { icon: '📚', title: 'Teaching, Then Live Audits', desc: 'The first half of each Tuesday session is teaching or a tip. The second half is Q&A and live audits of your real website and campaigns.' },
  { icon: '📝', title: 'Homework & Worksheets', desc: 'Fillable PDF worksheets and step-by-step homework for every session so you actually implement what you learn.' },
  { icon: '🤖', title: 'AI & Automation Training', desc: 'ChatGPT for brands, AI agents, Google Ads scripts, and automation workflows, practical tools you can use right away.' },
  { icon: '💬', title: 'Private Community Group', desc: 'Ask questions, share wins, and get feedback from Pip, Phelan, and fellow marketers in the private GoHighLevel group.' },
  { icon: '🎬', title: 'Full Course Library', desc: 'All recorded sessions, advanced modules, and exclusive content, available on-demand anytime.' },
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
            Try The Lab free for 14 days.
          </h2>
          <p className="text-gray-500 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            One live session every Tuesday, 12 to 1 pm Pacific. The first half is teaching or a tip. The second half is Q&amp;A and live audits of your real website and campaigns.
          </p>
        </div>

        {/* The Lab card */}
        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto mb-16">

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
              <span className="text-gray-300 font-medium">CAD/month</span>
            </div>
            <p className="text-xs text-[#318599] font-semibold mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              14-day free trial included
            </p>
            <p className="text-xs text-gray-400 mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              No contracts · Cancel anytime
            </p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {[
                'Everything in the free group, plus:',
                'Tuesday Lab sessions, hands-on help with your real campaigns',
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
              aria-label="Start your 14-day free trial of The KnowHow Lab"
              itemProp="url"
            >
              Start Free 14-Day Trial →
            </a>
            <p className="text-xs text-gray-500 text-center mt-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              14-day free trial · Then $29 CAD/mo · Cancel anytime
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

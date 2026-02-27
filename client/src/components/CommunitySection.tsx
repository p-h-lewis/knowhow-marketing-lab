// KnowHow Marketing Lab — Community Section
// Primary conversion point to GoHighLevel VIP Community

const perks = [
  {
    icon: '🎥',
    title: 'Weekly Live Q&A & Support',
    desc: 'Every week, join a live session with Pip and Phelan. Bring your real campaigns, your questions, and your problems — and get answers in real time.',
  },
  {
    icon: '📅',
    title: 'Monthly Deep-Dive Training',
    desc: 'Every month, a full-length training session on a specific topic — Google Ads strategy, SEO audits, GA4 reporting, AI tools, and more. Recorded for on-demand replay.',
  },
  {
    icon: '📋',
    title: 'Homework & Worksheets',
    desc: 'Fillable PDF worksheets and step-by-step homework for every session so you actually implement what you learn — not just watch.',
  },
  {
    icon: '🤖',
    title: 'AI & Automation Training',
    desc: 'ChatGPT for brands, AI agents, Google Ads scripts, and automation workflows — practical tools you can use right away.',
  },
  {
    icon: '💬',
    title: 'Private Community Group',
    desc: 'Ask questions, share wins, and get feedback from Pip, Phelan, and fellow marketers in the private GoHighLevel community.',
  },
  {
    icon: '🎓',
    title: 'Full Course Library',
    desc: 'All recorded sessions, advanced modules, and exclusive content — available on-demand anytime, so you never miss a training.',
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="py-20 bg-white"
      aria-labelledby="community-heading"
      itemScope
      itemType="https://schema.org/OnlineBusiness"
    >
      <div className="container">
        {/* Top: Image + Copy */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <span className="text-xs font-bold text-[#318599] uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              VIP Community
            </span>
            <h2
              id="community-heading"
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              itemProp="name"
            >
              Join the KnowHow Marketing Lab Community
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }} itemProp="description">
              The paid community for marketing professionals and business teams who want to go beyond the basics. Weekly live sessions, advanced courses, AI training, and a private group — all in one place on GoHighLevel.
            </p>

            {/* Pricing */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-extrabold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>$29</span>
                <span className="text-gray-500 font-medium">/month</span>
                <span className="tag tag-seo ml-2">Early Access Price</span>
              </div>
              <p className="text-sm text-gray-500 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Price increases as the community grows. Lock in your rate today.
              </p>
              <ul className="space-y-2 mb-5">
                {['Weekly live Q&A and support', 'Monthly deep-dive training', 'Full course library on-demand', 'Private community group', 'Cancel anytime'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#318599] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center pulse-cta"
                aria-label="Join the KnowHow Marketing Lab VIP community on GoHighLevel"
                itemProp="url"
              >
                Join the Community — $29/mo →
              </a>
            </div>

            <p className="text-xs text-gray-400 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Powered by GoHighLevel · Secure checkout · Cancel anytime
              {' · '}
              <a href="/pricing" className="text-[#318599] hover:underline" aria-label="Compare free vs community plan pricing">
                Compare plans
              </a>
            </p>
          </div>

          {/* Community image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028389518/nCEeJXdeKZHEwyIq.jpg"
                alt="KnowHow Marketing Lab VIP community on GoHighLevel — weekly live classes, private group, SEO and Google Ads training for marketing professionals"
                width="1200"
                height="675"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
                itemProp="image"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-5 -right-5 bg-[#E98C28] text-white rounded-2xl shadow-lg px-5 py-4">
              <p className="text-2xl font-extrabold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Thursdays</p>
              <p className="text-xs opacity-90">12–1pm Pacific · Live Q&amp;A</p>
            </div>
          </div>
        </div>

        {/* Perks Grid */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Everything Included in Your Membership
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map(perk => (
              <div
                key={perk.title}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#318599] hover:shadow-sm transition-all duration-200"
              >
                <div className="text-2xl mb-3" aria-hidden="true">{perk.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {perk.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

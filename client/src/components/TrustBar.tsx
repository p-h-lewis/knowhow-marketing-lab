// KnowHow Marketing Lab - Trust Bar
// Mobile: horizontal scroll, compact. Desktop: flex-wrap

export default function TrustBar() {
  const tools = [
    { name: 'Google Analytics 4', abbr: 'G', href: 'https://support.google.com/analytics/', title: 'Official Google Analytics 4 help center' },
    { name: 'Google Search Console', abbr: 'G', href: 'https://support.google.com/webmasters/', title: 'Official Google Search Console help center' },
    { name: 'Google Tag Manager', abbr: 'G', href: 'https://support.google.com/tagmanager/', title: 'Official Google Tag Manager help center' },
    { name: 'Google Ads', abbr: 'A', href: 'https://support.google.com/google-ads/supporthub', title: 'Official Google Ads help center' },
    { name: 'ChatGPT / AI', abbr: 'A', href: 'https://openai.com/chatgpt/', title: 'ChatGPT by OpenAI' },
    { name: 'GoHighLevel', abbr: 'G', href: 'https://www.gohighlevel.com/', title: 'GoHighLevel - the all-in-one marketing platform used by KnowHow Marketing Lab' },
  ];

  return (
    <section className="bg-gray-50 border-y border-gray-100 py-5" aria-label="Tools and platforms covered in KnowHow Marketing Lab courses">
      <div className="container">
        {/* Label row */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 text-center md:text-left" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Tools You'll Master
        </p>
        {/* Scrollable tool chips */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto">
          <div className="flex gap-2 pb-1 sm:flex-wrap sm:justify-start" style={{ minWidth: 'max-content' }}>
            {tools.map(tool => (
              <a
                key={tool.name}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm hover:border-[#E98C28] hover:shadow-md transition-all duration-150 whitespace-nowrap"
                title={tool.title}
                aria-label={`${tool.name} - ${tool.title}`}
                style={{ minHeight: '40px' }}
              >
                <span className="w-5 h-5 rounded bg-[#E98C28]/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-[9px] font-black text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {tool.abbr}
                  </span>
                </span>
                <span className="text-xs font-semibold text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {tool.name}
                </span>
              </a>
            ))}
            {/* Taught by badge inline on mobile */}
            <div className="inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-2">
              <div className="flex -space-x-1.5" aria-hidden="true">
                {['#E98C28','#318599','#4F37D8'].map((c, i) => (
                  <div key={i} className="w-5 h-5 rounded-full border-2 border-white" style={{ background: c }} />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">Taught by agency pros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

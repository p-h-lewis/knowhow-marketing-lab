// KnowHow Marketing Lab — Trust Bar
// Displays tool logos and social proof to build credibility

export default function TrustBar() {
  const tools = [
    { name: 'Google Analytics 4', abbr: 'GA4' },
    { name: 'Google Search Console', abbr: 'GSC' },
    { name: 'Google Tag Manager', abbr: 'GTM' },
    { name: 'Google Ads', abbr: 'Ads' },
    { name: 'ChatGPT / AI', abbr: 'AI' },
    { name: 'GoHighLevel', abbr: 'GHL' },
  ];

  return (
    <section className="bg-gray-50 border-y border-gray-100 py-6" aria-label="Tools and platforms covered in KnowHow Marketing Lab courses">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Tools You'll Master
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 flex-1">
            {tools.map(tool => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm"
                title={tool.name}
              >
                <span className="w-5 h-5 rounded bg-[#E98C28]/10 flex items-center justify-center" aria-hidden="true">
                  <span className="text-[9px] font-black text-[#E98C28]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {tool.abbr[0]}
                  </span>
                </span>
                <span className="text-xs font-semibold text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {tool.name}
                </span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <div className="flex -space-x-1.5" aria-hidden="true">
              {['#E98C28','#318599','#4F37D8'].map((c, i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white" style={{ background: c }} />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium">Taught by agency pros</span>
          </div>
        </div>
      </div>
    </section>
  );
}

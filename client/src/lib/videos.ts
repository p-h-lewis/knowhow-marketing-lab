// KnowHow Marketing Lab — YouTube Video Library
// All videos from @knowhowmarketinglab channel, categorized for the conversion funnel

export type VideoCategory = 'seo' | 'google-ads' | 'analytics' | 'ai' | 'live' | 'shorts';

export interface Video {
  id: string;
  title: string;
  url: string;
  category: VideoCategory;
  featured?: boolean;
}

function extractId(url: string): string {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : '';
}

export const videos: Video[] = [
  // Featured / Recent
  { id: extractId('https://www.youtube.com/watch?v=gw-OAn5R4AY'), title: 'Finding Your First Keywords', url: 'https://www.youtube.com/watch?v=gw-OAn5R4AY', category: 'seo', featured: true },
  { id: extractId('https://www.youtube.com/watch?v=eGN0oy0ynbE'), title: "Google's Secret Weapon for FREE Keyword Research (No One Talks About This!)", url: 'https://www.youtube.com/watch?v=eGN0oy0ynbE', category: 'seo', featured: true },
  { id: extractId('https://www.youtube.com/watch?v=dwTFHna3NcE'), title: 'Google Analytics 4 Complete Tutorial: Master GA4 in Under 1 Hour (2025)', url: 'https://www.youtube.com/watch?v=dwTFHna3NcE', category: 'analytics', featured: true },
  { id: extractId('https://www.youtube.com/watch?v=vc3_tzeZ-cU'), title: 'Google Search Console Tutorial: See How People Find Your Website (Complete Guide)', url: 'https://www.youtube.com/watch?v=vc3_tzeZ-cU', category: 'seo', featured: true },
  { id: extractId('https://www.youtube.com/watch?v=Ec79dFI_bq0'), title: 'Google Ads Intro Class', url: 'https://www.youtube.com/watch?v=Ec79dFI_bq0', category: 'google-ads', featured: true },
  { id: extractId('https://www.youtube.com/watch?v=1cvo5VpEJKA'), title: 'Google Ads | Display Campaigns Class', url: 'https://www.youtube.com/watch?v=1cvo5VpEJKA', category: 'google-ads', featured: true },

  // SEO Videos
  { id: extractId('https://www.youtube.com/watch?v=TM0rB77AHiE'), title: 'Intro to Google Search Console', url: 'https://www.youtube.com/watch?v=TM0rB77AHiE', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=fAuyE8LEfNw'), title: 'How to Link Google Search Console & GA4', url: 'https://www.youtube.com/watch?v=fAuyE8LEfNw', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=Wf_LyiG0SgI'), title: 'How to Set Up Google Search Console | Step-by-Step Verification Tutorial', url: 'https://www.youtube.com/watch?v=Wf_LyiG0SgI', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=bU3TXU8RzxI'), title: 'Search & SERPs | Class | 2022', url: 'https://www.youtube.com/watch?v=bU3TXU8RzxI', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=8pxWdKlQAsg'), title: 'Keyword Research', url: 'https://www.youtube.com/watch?v=8pxWdKlQAsg', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=H0DbjpkqsaI'), title: 'Live Class | On-Page SEO', url: 'https://www.youtube.com/watch?v=H0DbjpkqsaI', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=1irlM3bws9Q'), title: 'Q&A | Google Search Console (GSC)', url: 'https://www.youtube.com/watch?v=1irlM3bws9Q', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=UUhCi0ah5ZU'), title: 'Submitting Your Sitemap in Google Search Console', url: 'https://www.youtube.com/watch?v=UUhCi0ah5ZU', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=JRDiDzQRAn4'), title: 'Google Search Console GSC | Complete Overview', url: 'https://www.youtube.com/watch?v=JRDiDzQRAn4', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=LOoTk2DxkrY'), title: 'SEO | On-Page SEO', url: 'https://www.youtube.com/watch?v=LOoTk2DxkrY', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=iBoxAbsEHOA'), title: 'On Site | On-Page SEO', url: 'https://www.youtube.com/watch?v=iBoxAbsEHOA', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=D7eS37odJps'), title: 'Website Structure | On-Page SEO', url: 'https://www.youtube.com/watch?v=D7eS37odJps', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=XM_FD8FfbXI'), title: 'SEO Copy That Converts (Module 1 Class 5)', url: 'https://www.youtube.com/watch?v=XM_FD8FfbXI', category: 'ai' },
  { id: extractId('https://www.youtube.com/watch?v=Z2Ci1UPFcKg'), title: 'Home Page | On-Page SEO', url: 'https://www.youtube.com/watch?v=Z2Ci1UPFcKg', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=Brvt0HSKH5s'), title: 'Contact Page SEO Best Practices – Convert More Visitors (Module 2 Class 5)', url: 'https://www.youtube.com/watch?v=Brvt0HSKH5s', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=pFrTNSUDIuU'), title: 'Headings | On-Page SEO', url: 'https://www.youtube.com/watch?v=pFrTNSUDIuU', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=Ae-msg0QGNw'), title: 'Links | On-Page SEO', url: 'https://www.youtube.com/watch?v=Ae-msg0QGNw', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=ZTlGSUj4Tgc'), title: 'Live Class | Advanced Keyword Research Using Google Search Console', url: 'https://www.youtube.com/watch?v=ZTlGSUj4Tgc', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=mSZK7G7dh8g'), title: 'Q&A | Advanced Keyword Research | Using GSC Focused', url: 'https://www.youtube.com/watch?v=mSZK7G7dh8g', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=V7AcqJarAcU'), title: 'Live Class | Advanced On-Page SEO', url: 'https://www.youtube.com/watch?v=V7AcqJarAcU', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=9snZ3_CtPms'), title: 'Q&A | Advanced On-Page SEO', url: 'https://www.youtube.com/watch?v=9snZ3_CtPms', category: 'seo' },

  // Google Ads Videos
  { id: extractId('https://www.youtube.com/watch?v=m1DvSc46FDI'), title: 'Live Class | Google Ads | Optimization 2', url: 'https://www.youtube.com/watch?v=m1DvSc46FDI', category: 'google-ads' },
  { id: extractId('https://www.youtube.com/watch?v=4k9oPdA8AKQ'), title: 'Live Class | Google Ads Packages', url: 'https://www.youtube.com/watch?v=4k9oPdA8AKQ', category: 'google-ads' },
  { id: extractId('https://www.youtube.com/watch?v=KOL-zoZyzBI'), title: 'Q&A | Google Ads Packages', url: 'https://www.youtube.com/watch?v=KOL-zoZyzBI', category: 'google-ads' },

  // Analytics Videos
  { id: extractId('https://www.youtube.com/watch?v=DpBpp0UVcxU'), title: 'Google Analytics 4 GA | Complete Overview', url: 'https://www.youtube.com/watch?v=DpBpp0UVcxU', category: 'analytics' },
  { id: extractId('https://www.youtube.com/watch?v=aPNwDkEj_9Q'), title: 'Q&A | Google Analytics 4', url: 'https://www.youtube.com/watch?v=aPNwDkEj_9Q', category: 'analytics' },
  { id: extractId('https://www.youtube.com/watch?v=mXcvavYb0ts'), title: 'Tag Manager | Complete Overview', url: 'https://www.youtube.com/watch?v=mXcvavYb0ts', category: 'analytics' },
  { id: extractId('https://www.youtube.com/watch?v=99SzV4U8z78'), title: 'What Is Tag Manager | Tag Manager', url: 'https://www.youtube.com/watch?v=99SzV4U8z78', category: 'analytics' },
  { id: extractId('https://www.youtube.com/watch?v=Z5I4Oltwp5w'), title: 'Dashboard | Tag Manager', url: 'https://www.youtube.com/watch?v=Z5I4Oltwp5w', category: 'analytics' },
  { id: extractId('https://www.youtube.com/watch?v=aeRYCTWk96A'), title: 'Q&A | Tag Manager', url: 'https://www.youtube.com/watch?v=aeRYCTWk96A', category: 'analytics' },
  { id: extractId('https://www.youtube.com/watch?v=J3iiuRnF4j8'), title: 'Live Class | Measure Set Up | Reporting | Data Studio', url: 'https://www.youtube.com/watch?v=J3iiuRnF4j8', category: 'ai' },
  { id: extractId('https://www.youtube.com/watch?v=cVA6BA_v4I4'), title: 'Q&A | Measure Set Up | Reporting | Data Studio', url: 'https://www.youtube.com/watch?v=cVA6BA_v4I4', category: 'ai' },

  // Live Classes
  { id: extractId('https://www.youtube.com/watch?v=Rn6uiLO5QbI'), title: 'Live Class | Activation & Set Up', url: 'https://www.youtube.com/watch?v=Rn6uiLO5QbI', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=EXNB6zHug-k'), title: 'Live Class | Google Business Profile', url: 'https://www.youtube.com/watch?v=EXNB6zHug-k', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=9W-yLvGT1ik'), title: 'Q&A | Google Business Profile', url: 'https://www.youtube.com/watch?v=9W-yLvGT1ik', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=ZAOLj87EJa0'), title: 'Coworking | Google Business Profile', url: 'https://www.youtube.com/watch?v=ZAOLj87EJa0', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=kSHEjooMWZ0'), title: 'Live Class | Tag Manager | Intro', url: 'https://www.youtube.com/watch?v=kSHEjooMWZ0', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=m-IBiKxIh4U'), title: 'Live Class | Local SEO', url: 'https://www.youtube.com/watch?v=m-IBiKxIh4U', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=gDCDyOFfjpE'), title: 'Q&A | Local SEO', url: 'https://www.youtube.com/watch?v=gDCDyOFfjpE', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=C1wnh0aWSA4'), title: 'Live Class | On-Page & Technical SEO Audit', url: 'https://www.youtube.com/watch?v=C1wnh0aWSA4', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=7R_js1SZsIw'), title: 'Q&A | On-Page & Technical SEO Audit', url: 'https://www.youtube.com/watch?v=7R_js1SZsIw', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=n6Lg9FaA6MM'), title: 'Live Class | On-Page & Technical SEO Audit (Part 2)', url: 'https://www.youtube.com/watch?v=n6Lg9FaA6MM', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=KVCSJD0dmrU'), title: 'Q&A | On-Page & Technical SEO Audit (Part 2)', url: 'https://www.youtube.com/watch?v=KVCSJD0dmrU', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=W4Me-FLwBz8'), title: 'Q&A | Content Audit', url: 'https://www.youtube.com/watch?v=W4Me-FLwBz8', category: 'ai' },
  { id: extractId('https://www.youtube.com/watch?v=6LhVDA-uCOs'), title: 'Live Class | SEO Audit & Strategy Summary', url: 'https://www.youtube.com/watch?v=6LhVDA-uCOs', category: 'ai' },
  { id: extractId('https://www.youtube.com/watch?v=mCbZlEDOX_s'), title: 'Q&A Part 2 | SEO Audit & Strategy Summary', url: 'https://www.youtube.com/watch?v=mCbZlEDOX_s', category: 'ai' },
  { id: extractId('https://www.youtube.com/watch?v=QP1LCdRWfpo'), title: 'Coworking Space | Audit & Strategy Summary', url: 'https://www.youtube.com/watch?v=QP1LCdRWfpo', category: 'live' },
  { id: extractId('https://www.youtube.com/watch?v=eXeWobtz-NM'), title: 'Coworking Space | Keyword Planner', url: 'https://www.youtube.com/watch?v=eXeWobtz-NM', category: 'live' },

  // Google Business Profile
  { id: extractId('https://www.youtube.com/watch?v=Gzh0UcU_C8A'), title: 'Knowledge Panel | Google Business Profile', url: 'https://www.youtube.com/watch?v=Gzh0UcU_C8A', category: 'ai' },
  { id: extractId('https://www.youtube.com/watch?v=sJF-eAr4MF8'), title: 'Google Business Profile | Complete Overview', url: 'https://www.youtube.com/watch?v=sJF-eAr4MF8', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=pUCgKDoUCBg'), title: 'Where Do We Find GBP | Google Business Profile', url: 'https://www.youtube.com/watch?v=pUCgKDoUCBg', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=c3UVqWi0L5U'), title: 'Communication | Google Business Profile', url: 'https://www.youtube.com/watch?v=c3UVqWi0L5U', category: 'seo' },
  { id: extractId('https://www.youtube.com/watch?v=i3mOIj1sh9o'), title: 'Going Into A Google Profile | Google Business Profile', url: 'https://www.youtube.com/watch?v=i3mOIj1sh9o', category: 'seo' },

  // Shorts
  { id: extractId('https://www.youtube.com/watch?v=lZ2wNVcT2CE'), title: 'Google Ads: You Need 15 Conversions to Move from Max Clicks', url: 'https://www.youtube.com/watch?v=lZ2wNVcT2CE', category: 'shorts' },
];

export const categoryLabels: Record<VideoCategory, string> = {
  'seo': 'SEO',
  'google-ads': 'Google Ads',
  'analytics': 'Analytics & GA4',
  'ai': 'AI Marketing',
  'live': 'Live Classes',
  'shorts': 'Shorts',
};

export const featuredVideos = videos.filter(v => v.featured);

export function getVideosByCategory(category: VideoCategory | 'all'): Video[] {
  if (category === 'all') return videos;
  return videos.filter(v => v.category === category);
}

export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}

export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

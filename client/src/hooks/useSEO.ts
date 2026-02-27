// useSEO — sets per-page <title>, <meta name="description">, and <link rel="canonical">
// Call this at the top of every page component with page-specific values.
// This is the primary SEO signal for Google and LLMs to distinguish pages.

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "course";
}

export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
}: SEOProps) {
  useEffect(() => {
    // --- Title ---
    document.title = title;

    // --- Meta description ---
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      (metaDesc as HTMLMetaElement).name = "description";
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content = description;

    // --- Canonical ---
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      (canonicalEl as HTMLLinkElement).rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    (canonicalEl as HTMLLinkElement).href = canonical;

    // --- OG title ---
    let ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) (ogTitleEl as HTMLMetaElement).content = ogTitle || title;

    // --- OG description ---
    let ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) (ogDescEl as HTMLMetaElement).content = ogDescription || description;

    // --- OG URL ---
    let ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (!ogUrlEl) {
      ogUrlEl = document.createElement("meta");
      (ogUrlEl as HTMLMetaElement).setAttribute("property", "og:url");
      document.head.appendChild(ogUrlEl);
    }
    (ogUrlEl as HTMLMetaElement).content = canonical;

    // --- OG type ---
    let ogTypeEl = document.querySelector('meta[property="og:type"]');
    if (!ogTypeEl) {
      ogTypeEl = document.createElement("meta");
      (ogTypeEl as HTMLMetaElement).setAttribute("property", "og:type");
      document.head.appendChild(ogTypeEl);
    }
    (ogTypeEl as HTMLMetaElement).content = ogType;

    // --- OG image (optional override) ---
    if (ogImage) {
      let ogImgEl = document.querySelector('meta[property="og:image"]');
      if (ogImgEl) (ogImgEl as HTMLMetaElement).content = ogImage;
    }

    // --- Twitter title ---
    let twTitleEl = document.querySelector('meta[name="twitter:title"]');
    if (twTitleEl) (twTitleEl as HTMLMetaElement).content = ogTitle || title;

    // --- Twitter description ---
    let twDescEl = document.querySelector('meta[name="twitter:description"]');
    if (twDescEl) (twDescEl as HTMLMetaElement).content = ogDescription || description;

    return () => {
      // Reset to site defaults on unmount
      document.title = "KnowHow Marketing Lab — Free SEO, Google Ads & AI Marketing Training";
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType]);
}

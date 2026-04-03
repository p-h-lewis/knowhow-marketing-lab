/**
 * OG Meta Tag Middleware
 *
 * Social media crawlers (Facebook, LinkedIn, Twitter/X, Slack, iMessage)
 * do not execute JavaScript. This middleware detects crawler User-Agents
 * and serves a minimal HTML page with the correct og:image, og:title, and
 * og:description for each URL path, then redirects the crawler to the real page.
 *
 * Regular browsers are passed through to the React SPA as normal.
 */

import type { Request, Response, NextFunction } from "express";

const SITE_URL = "https://knowhowmarketinglab.com";

interface PageMeta {
  title: string;
  description: string;
  image: string;
  ogType?: string;
}

const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "KnowHow Marketing Lab - AI SEO & Google Ads Training for Business Owners",
    description:
      "Free AI SEO and Google Ads training for business owners and marketing teams. Learn how to rank on Google and in ChatGPT, Perplexity, and AI search.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-the-lab-55UQsMjgbzaYNNiK63oh8d.png",
    ogType: "website",
  },
  "/power-hours": {
    title: "Free Tuesday Power Hours - Live Marketing Help | KnowHow Marketing Lab",
    description:
      "Join Pip Seymour every Tuesday for a free live Power Hour. Bring your SEO, Google Ads, and AI marketing questions. No fluff, just real help.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-power-hours-G7PMavCGgpBLirSNyngN2s.png",
  },
  "/mastermind": {
    title: "AI Marketing Accelerator Mastermind - 8-Week Intensive | KnowHow Marketing Lab",
    description:
      "8 weeks of intensive small-group coaching for business owners who want a real AI-powered marketing system. Only 8 seats per cohort. $2,000 one-time investment.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-mastermind-H5eP5hpSdzr7Ds6pz94nu3.png",
  },
  "/mastermind-thank-you": {
    title: "You're Booked - Mastermind Discovery Call | KnowHow Marketing Lab",
    description:
      "Your Mastermind Discovery Call is confirmed. Here is what to expect and how to prepare.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-mastermind-H5eP5hpSdzr7Ds6pz94nu3.png",
  },
  "/courses/seo": {
    title: "Free Data-Driven AI SEO Course | KnowHow Marketing Lab",
    description:
      "A free 5-module AI + SEO course for medium-sized businesses. Covers keyword research, on-page SEO, Google Search Console, GA4, and Generative Engine Optimisation.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-seo-course-3NTrrZbwtsArAVDRoPZ22S.png",
    ogType: "article",
  },
  "/courses/google-ads": {
    title: "Google Ads Bootcamp - Included in The Lab at $29/mo | KnowHow Marketing Lab",
    description:
      "The Google Ads Bootcamp covers campaign types, bidding strategies, ad group structure, and AI tools for Google Ads optimisation. Included in The Lab membership.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-google-ads-bootcamp-Dy58pJFn43YmqD3kFXsXuK.png",
    ogType: "article",
  },
  "/blog": {
    title: "Marketing Blog - SEO, Google Ads & AI Marketing Guides | KnowHow Marketing Lab",
    description:
      "Free guides on SEO, Google Ads, GA4, Google Tag Manager, and AI marketing. Written by agency veterans Pip Seymour and Phelan Lewis.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-blog-A7Ah2pjo4CGwwDteftmnxh.png",
  },
  "/pricing": {
    title: "The Lab - $29/mo VIP Marketing Community | KnowHow Marketing Lab",
    description:
      "Weekly live Q&A, monthly deep-dive training, Google Ads Bootcamp, and private community access. $29/month, founding member rate, cancel anytime.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-the-lab-55UQsMjgbzaYNNiK63oh8d.png",
  },
};

// Default fallback meta
const DEFAULT_META: PageMeta = {
  title: "KnowHow Marketing Lab - Free SEO & Google Ads Training",
  description:
    "Free expert training in SEO, Google Ads, GA4, and AI marketing for business owners and marketing teams.",
  image:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-the-lab-55UQsMjgbzaYNNiK63oh8d.png",
  ogType: "website",
};

// Social media crawler User-Agent patterns
const CRAWLER_PATTERNS = [
  /facebookexternalhit/i,
  /linkedinbot/i,
  /twitterbot/i,
  /slackbot/i,
  /whatsapp/i,
  /telegrambot/i,
  /discordbot/i,
  /applebot/i,
  /iframely/i,
  /embedly/i,
  /outbrain/i,
  /pinterest/i,
  /vkshare/i,
  /w3c_validator/i,
  /baiduspider/i,
  /rogerbot/i,
  /msnbot/i,
  /ahrefsbot/i,
  /semrushbot/i,
];

function isCrawler(userAgent: string): boolean {
  return CRAWLER_PATTERNS.some(pattern => pattern.test(userAgent));
}

function buildOGHtml(path: string, meta: PageMeta): string {
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogType = meta.ogType || "website";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(meta.title)}</title>
  <meta name="description" content="${escapeHtml(meta.description)}" />
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />

  <!-- Open Graph -->
  <meta property="og:type" content="${escapeHtml(ogType)}" />
  <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
  <meta property="og:title" content="${escapeHtml(meta.title)}" />
  <meta property="og:description" content="${escapeHtml(meta.description)}" />
  <meta property="og:image" content="${escapeHtml(meta.image)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="KnowHow Marketing Lab" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
  <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
  <meta name="twitter:image" content="${escapeHtml(meta.image)}" />

  <!-- Redirect browsers to the real SPA page -->
  <meta http-equiv="refresh" content="0;url=${escapeHtml(canonicalUrl)}" />
</head>
<body>
  <p>Redirecting to <a href="${escapeHtml(canonicalUrl)}">${escapeHtml(meta.title)}</a>...</p>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function ogMiddleware(req: Request, res: Response, next: NextFunction): void {
  const userAgent = req.headers["user-agent"] || "";

  // Only intercept GET requests from crawlers
  if (req.method !== "GET" || !isCrawler(userAgent)) {
    return next();
  }

  // Skip API routes and static assets
  const path = req.path;
  if (
    path.startsWith("/api/") ||
    path.startsWith("/assets/") ||
    path.startsWith("/static/") ||
    path.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|map|json|txt|xml)$/)
  ) {
    return next();
  }

  // Find the best matching meta for this path
  const meta = PAGE_META[path] || DEFAULT_META;

  const html = buildOGHtml(path, meta);
  res.status(200).set({ "Content-Type": "text/html; charset=utf-8" }).end(html);
}

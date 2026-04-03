/**
 * generate-og-pages.mjs
 *
 * Post-build script that creates per-page HTML files with correct OG meta tags
 * baked in. These are served to social media crawlers by Vercel before they
 * ever see the React SPA's generic index.html.
 *
 * Each page gets its own directory with an index.html containing the correct
 * og:title, og:description, og:image, and og:url.
 *
 * Run after `vite build`: node scripts/generate-og-pages.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "..", "dist");
const SITE_URL = "https://knowhowmarketinglab.com";

// ─── Page meta definitions ────────────────────────────────────────────────────
const PAGE_META = [
  {
    path: "/",
    title: "KnowHow Marketing Lab - Free AI SEO & Google Ads Training",
    description:
      "Free AI SEO and Google Ads training for business owners and marketing teams. Learn how to rank on Google and in ChatGPT, Perplexity, and AI search — from 20-year agency veterans Pip Seymour and Phelan Lewis.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-home_84ca4ccc.png",
    ogType: "website",
  },
  {
    path: "/power-hours",
    title: "Free Tuesday Power Hours - Live Marketing Help | KnowHow Marketing Lab",
    description:
      "Join Pip Seymour every Tuesday for a free live Power Hour. Bring your SEO, Google Ads, and AI marketing questions. No fluff, just real help.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-power-hours_3ed463f2.png",
    ogType: "website",
  },
  {
    path: "/mastermind",
    title: "AI Marketing Accelerator Mastermind - 8-Week Intensive | KnowHow Marketing Lab",
    description:
      "8 weeks of intensive small-group coaching for business owners who want a real AI-powered marketing system. Only 8 seats per cohort. $2,000 one-time investment.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-mastermind_de7ef791.png",
    ogType: "website",
  },
  {
    path: "/mastermind-thank-you",
    title: "You're Booked - Mastermind Discovery Call | KnowHow Marketing Lab",
    description:
      "Your Mastermind Discovery Call is confirmed. Here is what to expect and how to prepare.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-mastermind_de7ef791.png",
    ogType: "website",
  },
  {
    path: "/courses/seo",
    title: "Free Data-Driven AI + SEO Course | KnowHow Marketing Lab",
    description:
      "A free 5-module AI + SEO course for medium-sized businesses. Covers keyword research, on-page SEO, Google Search Console, GA4, and Generative Engine Optimisation.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-seo-course_fd927588.png",
    ogType: "article",
  },
  {
    path: "/courses/google-ads",
    title: "Google Ads Bootcamp - Included in The Lab at $29/mo | KnowHow Marketing Lab",
    description:
      "The Google Ads Bootcamp covers campaign types, bidding strategies, ad group structure, and AI tools for Google Ads optimisation. Included in The Lab membership.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-google-ads-bootcamp_aa1bdf46.png",
    ogType: "article",
  },
  {
    path: "/blog",
    title: "Marketing Blog - SEO, Google Ads & AI Marketing Guides | KnowHow Marketing Lab",
    description:
      "Free guides on SEO, Google Ads, GA4, Google Tag Manager, and AI marketing. Written by agency veterans Pip Seymour and Phelan Lewis.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-blog_75654f29.png",
    ogType: "website",
  },
  {
    path: "/pricing",
    title: "The Lab - $29/mo VIP Marketing Community | KnowHow Marketing Lab",
    description:
      "Weekly live Q&A, monthly deep-dive training, Google Ads Bootcamp, and private community access. $29/month, founding member rate, cancel anytime.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-the-lab_27e632ed.png",
    ogType: "website",
  },
  {
    path: "/community",
    title: "The KnowHow Lab Community - Join Free | KnowHow Marketing Lab",
    description:
      "Join the free KnowHow Marketing Lab community. Get access to weekly Power Hours, marketing guides, and connect with other business owners.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-the-lab_27e632ed.png",
    ogType: "website",
  },
];

// ─── HTML template ─────────────────────────────────────────────────────────────
function buildOGHtml(pagePath, meta) {
  const canonicalUrl = `${SITE_URL}${pagePath}`;
  const ogType = meta.ogType || "website";

  function esc(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(meta.title)}</title>
  <meta name="description" content="${esc(meta.description)}" />
  <link rel="canonical" href="${esc(canonicalUrl)}" />

  <!-- Open Graph -->
  <meta property="og:type" content="${esc(ogType)}" />
  <meta property="og:url" content="${esc(canonicalUrl)}" />
  <meta property="og:title" content="${esc(meta.title)}" />
  <meta property="og:description" content="${esc(meta.description)}" />
  <meta property="og:image" content="${esc(meta.image)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="KnowHow Marketing Lab" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(meta.title)}" />
  <meta name="twitter:description" content="${esc(meta.description)}" />
  <meta name="twitter:image" content="${esc(meta.image)}" />

  <!-- Redirect to the React SPA immediately -->
  <script>window.location.replace("${canonicalUrl}");</script>
  <noscript><meta http-equiv="refresh" content="0;url=${esc(canonicalUrl)}" /></noscript>
</head>
<body>
  <p>Loading <a href="${esc(canonicalUrl)}">${esc(meta.title)}</a>...</p>
</body>
</html>`;
}

// ─── Main ──────────────────────────────────────────────────────────────────────
let generated = 0;
let skipped = 0;

for (const page of PAGE_META) {
  // Build the output directory path (strip leading slash)
  const relPath = page.path.replace(/^\//, "");
  const outDir = path.join(DIST_DIR, relPath);
  const outFile = path.join(outDir, "index.html");

  // Skip if the dist directory doesn't exist yet (build hasn't run)
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`ERROR: dist directory not found at ${DIST_DIR}`);
    console.error("Run `pnpm build` first, then run this script.");
    process.exit(1);
  }

  // Create the directory if needed
  fs.mkdirSync(outDir, { recursive: true });

  // Write the OG HTML file
  const html = buildOGHtml(page.path, page);
  fs.writeFileSync(outFile, html, "utf-8");
  console.log(`  ✓  ${page.path}  →  dist/${relPath}/index.html`);
  generated++;
}

console.log(`\nGenerated ${generated} OG pages, skipped ${skipped}.`);
console.log("Deploy the dist/ directory to Vercel to activate.\n");

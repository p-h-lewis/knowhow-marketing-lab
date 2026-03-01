# KnowHow Marketing Lab — WordPress Redirect Map

This document contains all the redirects needed when migrating from the old WordPress site to the new KnowHow Marketing Lab site. Add these to your WordPress `.htaccess` file (in the root of your WordPress installation) **above** the default WordPress rewrite rules.

---

## How to Apply These Redirects

1. Log in to your WordPress hosting control panel (cPanel, Kinsta, WP Engine, etc.)
2. Navigate to **File Manager** → find `.htaccess` in the root directory
3. Click **Edit** and paste the redirect block below **above** the line that says `# BEGIN WordPress`
4. Save the file

Alternatively, use a plugin like **Redirection** (free, by John Godley) to add these as individual 301 redirects without touching `.htaccess`.

---

## .htaccess Redirect Block

Paste this block **above** `# BEGIN WordPress` in your `.htaccess` file:

```apache
# ============================================================
# KnowHow Marketing Lab - 301 Redirects to New Site
# Applied: March 2026
# ============================================================

# --- Core pages ---
# Old homepage → new homepage (no change needed if same domain)
# Old /community or /membership pages → new pricing page
RedirectMatch 301 ^/community/?$                    /pricing
RedirectMatch 301 ^/membership/?$                   /pricing
RedirectMatch 301 ^/join/?$                         /pricing
RedirectMatch 301 ^/vip/?$                          /pricing
RedirectMatch 301 ^/vip-community/?$                /pricing
RedirectMatch 301 ^/the-lab/?$                      /pricing

# --- Course pages ---
RedirectMatch 301 ^/courses?/?$                     /courses/seo
RedirectMatch 301 ^/free-course/?$                  /courses/seo
RedirectMatch 301 ^/seo-course/?$                   /courses/seo
RedirectMatch 301 ^/ai-seo-course/?$                /courses/seo
RedirectMatch 301 ^/google-ads-course/?$            /courses/seo

# --- About / Contact ---
RedirectMatch 301 ^/about-us/?$                     /about
RedirectMatch 301 ^/contact/?$                      /about
RedirectMatch 301 ^/team/?$                         /about
RedirectMatch 301 ^/pip-seymour/?$                  /about
RedirectMatch 301 ^/phelan-lewis/?$                 /about

# --- Resources / Framework ---
RedirectMatch 301 ^/resources?/?$                   /resources
RedirectMatch 301 ^/tools/?$                        /resources
RedirectMatch 301 ^/free-resources/?$               /resources
RedirectMatch 301 ^/seo-framework/?$                /framework
RedirectMatch 301 ^/framework/?$                    /framework
RedirectMatch 301 ^/5-phase-seo/?$                  /framework

# --- Podcast ---
RedirectMatch 301 ^/podcast/?$                      /podcast
RedirectMatch 301 ^/episodes?/?$                    /podcast

# --- Blog index ---
RedirectMatch 301 ^/articles/?$                     /blog
RedirectMatch 301 ^/guides/?$                       /blog
RedirectMatch 301 ^/news/?$                         /blog

# --- Individual blog posts (WordPress slug → new React blog page or keep on WP) ---
# Note: Posts that exist on WordPress stay on WordPress (same domain).
# Only redirect if you have moved them to the React app.
# The post below is the only one currently in the React app:
RedirectMatch 301 ^/data-driven-seo/?$              /blog/data-driven-seo-guide-medium-sized-businesses

# --- Old category/tag archive pages → blog ---
RedirectMatch 301 ^/category/.*$                    /blog
RedirectMatch 301 ^/tag/.*$                         /blog

# --- Old author pages → about ---
RedirectMatch 301 ^/author/.*$                      /about

# --- Old WordPress pages that no longer exist ---
RedirectMatch 301 ^/sample-page/?$                  /
RedirectMatch 301 ^/hello-world/?$                  /blog
RedirectMatch 301 ^/wp-login\.php$                  /
RedirectMatch 301 ^/wp-admin/?$                     /

# --- Privacy / Terms (if they existed on old site) ---
RedirectMatch 301 ^/privacy-policy/?$               /privacy
RedirectMatch 301 ^/terms-of-service/?$             /terms
RedirectMatch 301 ^/terms-and-conditions/?$         /terms
RedirectMatch 301 ^/disclaimer/?$                   /terms

# ============================================================
# END KnowHow Marketing Lab Redirects
# ============================================================
```

---

## Notes

**301 vs 302:** All redirects above use `301 Permanent`. This passes link equity to the new URL and tells Google the old URL is gone permanently. Do not use 302 (temporary) for these.

**Same domain:** If the new React app and WordPress are on the same domain (`knowhowmarketinglab.com`), the React app will handle routes like `/pricing`, `/about`, `/courses/seo` etc. WordPress only needs to handle redirects for old WordPress-specific URLs (like `/community`, `/about-us`, `/category/...`).

**Testing:** After applying, test each redirect using [httpstatus.io](https://httpstatus.io) or the Chrome DevTools Network tab to confirm 301 responses.

**Google Search Console:** After applying redirects, submit your updated `sitemap.xml` in Google Search Console to speed up re-indexing. Go to **Search Console → Sitemaps → Add a new sitemap** and enter `https://knowhowmarketinglab.com/sitemap.xml`.

---

## GoHighLevel Form → /thank-you Redirect

To make your GoHighLevel opt-in form redirect to `/thank-you` after submission:

1. Log in to GoHighLevel at [app.gohighlevel.com](https://app.gohighlevel.com)
2. Go to **Sites → Funnels** (or **Forms** if using a standalone form)
3. Open the form or funnel step that contains your opt-in form
4. Click on the form element to edit it
5. Look for **Redirect URL** or **Thank You Page** in the form settings
6. Enter: `https://knowhowmarketinglab.com/thank-you`
7. Save and publish

If using a GoHighLevel **Funnel**, set the next step in the funnel sequence to redirect to `https://knowhowmarketinglab.com/thank-you`.

---

## Custom Domain for GoHighLevel Community

To replace `bk3wb95ynz5uaen0kg00.app.clientclub.net` with a branded URL like `community.knowhowmarketinglab.com`:

1. Log in to GoHighLevel → **Communities** → your community → **Settings**
2. Find **Custom Domain** and enter `community.knowhowmarketinglab.com`
3. GoHighLevel will provide a **CNAME record** — copy it
4. In your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
   - Add a new **CNAME record**
   - **Host/Name:** `community`
   - **Value/Points to:** the CNAME from GoHighLevel
5. Wait 10–30 minutes for DNS propagation
6. Test by visiting `https://community.knowhowmarketinglab.com`

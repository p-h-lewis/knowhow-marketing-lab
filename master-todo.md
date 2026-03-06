# KnowHow Marketing Lab — Master To-Do List

**Last updated:** March 2026
**Status key:** 🔴 Urgent · 🟡 This week · 🟠 Soon · ✅ Done

---

## What You Need to Do (Pip)

### 🔴 Do This Weekend

| # | Task | How |
|---|---|---|
| 1 | **Finish the Free AI + SEO Course** | Record the remaining modules. The course page and thank-you page are live and waiting. |
| 2 | **Set the GHL Power Hours form redirect** | In GHL → Forms → Power Hours form → Settings → Redirect URL → paste `https://knowhowmarketinglab.com/thank-you/power-hours` |
| 3 | **Publish the website** | Click the **Publish** button in the Manus Management UI (top right). The site is fully ready. |
| 4 | **Send personal Facebook invites** | Use the 5 post templates + DM template in `facebook-friend-invite-posts.md`. Send to your top 10–20 contacts personally. |

### 🟡 This Week

| # | Task | How |
|---|---|---|
| 5 | **Record the Community walkthrough video** | Use Loom or screen record. 60–90 seconds showing The Lab dashboard. Script is in `community-video-brief.md`. Upload unlisted to YouTube, send me the link — I'll embed it on `/community` immediately. |
| 6 | **Post first Power Hours Facebook post** | Use Hook 1 + Image 1 from `facebook-post-templates.md`. Post Monday morning. Pin the Zoom link in the first comment Tuesday morning. |
| 7 | **Verify Power Hours Zoom link is correct** | Check that the Zoom link in the GHL confirmation email matches the link on `/thank-you/power-hours`. |
| 8 | **Confirm The Lab GHL community URL** | The site links to `bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home` — confirm this is the correct join link. |

### 🟠 Soon (Within 2 Weeks)

| # | Task | How |
|---|---|---|
| 9 | **Set up Google Ads account** | Go to ads.google.com → create account → set billing to CAD. Use `google-ads-plan.md` as the full setup guide. |
| 10 | **Set up conversion tracking in GTM** | GTM is already installed on the site (GTM-W449WJS). Add conversion tags for: free course sign-up, Power Hours registration, Lab join. |
| 11 | **Link Google Ads to GA4** | In Google Ads → Tools → Linked accounts → Google Analytics 4 → link your property. |
| 12 | **Add more videos to "Start Here" filter** | Open `/client/src/lib/videos.ts` and add `featured: true` to any additional videos you want in the Start Here tab. |
| 13 | **Update upcoming Power Hours session dates** | The schedule section in `/power-hours` has hardcoded dates. Update them monthly in `PowerHours.tsx` (the `NEXT_SESSION_OVERRIDE` variable at the top of the file). |

### 🟠 When You Have Time

| # | Task | Notes |
|---|---|---|
| 14 | **Add a "Price going up" urgency notice** | Tell me when you want to add this and I'll build it. E.g., "Early access ends at 100 members." |
| 15 | **Add a "What's inside" video to The Lab page** | Once you record the walkthrough video (#5 above), I'll embed it at the top of `/community`. |
| 16 | **Add blog posts** | The blog is live with placeholder posts. Send me topics and I'll write them, or write them yourself and I'll format and publish them. |
| 17 | **Add more testimonials** | The Community page has 4 testimonials. If you have more from students or clients, send them to me and I'll add them. |
| 18 | **Set up Monday reminder email in GHL** | GHL automation: send Zoom link reminder every Monday to all Power Hours registrants. |

---

## What Manus Will Do (When You Give Me the Input)

| # | Task | What I Need From You |
|---|---|---|
| A | **Embed Community walkthrough video** | YouTube URL of your Loom recording |
| B | **Add new blog posts** | Topic, key points, any screenshots or data |
| C | **Add new podcast episodes** | YouTube URL(s) of new GeekSpeak episodes |
| D | **Update Power Hours session dates** | Just tell me the next session date if you skip a week |
| E | **Build Google Ads campaigns in the account** | Access to your Google Ads account (share access with me) |
| F | **Add urgency banner to Community/Pricing pages** | Tell me what the urgency message should say |
| G | **Add new testimonials** | Name, role, and quote from the student/client |
| H | **Weekly Facebook group post** | Tell me the topic for the week's Power Hours session |
| I | **Add new course modules to the site** | YouTube URL(s) of the new module recordings |

---

## Site Status — What's Done ✅

| Area | Status |
|---|---|
| Homepage | ✅ Live — hero, video library, courses, pricing, testimonials, FAQ |
| Power Hours page | ✅ Live — countdown timer, FAQ, sticky mobile bar, GHL CTA |
| Community page | ✅ Live — perks, curriculum, schedule, testimonials, FAQ, comparison |
| Pricing page | ✅ Live — The Lab dominant, free course secondary |
| Free AI + SEO Course page | ✅ Live — waiting for course modules to be recorded |
| Thank-you pages | ✅ Live — `/thank-you` (course) and `/thank-you/power-hours` |
| Blog | ✅ Live — 6 posts published |
| Podcast / GeekSpeak | ✅ Live — 19 episodes from 2025/2026 added |
| Video Library | ✅ Live — 60+ videos, "Start Here" filter active |
| About page | ✅ Live — Pip & Phelan bios with headshots |
| Framework page | ✅ Live |
| Navigation | ✅ Simplified — 5 items + dual CTA |
| SEO | ✅ Schema on all pages, 100/100 PSI SEO score |
| Technical SEO | ✅ Canonical, OG tags, JSON-LD, sitemap, llms.txt |
| Factual accuracy | ✅ BC Canada, Zoom (not Facebook), Tuesday/Thursday sessions |
| Mobile | ✅ Responsive, sticky Power Hours bar, tap targets |
| CRO | ✅ 3-tier conversion hierarchy applied across all pages |
| Social images | ✅ 5 Power Hours Facebook images created |
| Post templates | ✅ Weekly rotation template + friend invite posts |
| Google Ads plan | ✅ 3 campaigns, full RSA copy, extensions, tracking setup |
| SOP | ✅ Full build SOP saved to Google Drive |

---

## Google Ads Quick-Start Checklist

Before your first ad goes live:

- [ ] Create Google Ads account (ads.google.com)
- [ ] Set billing currency to CAD
- [ ] Add GTM conversion tags for all 3 goals
- [ ] Link Google Ads to GA4
- [ ] Create Campaign 1 (Free Course) — landing page: `/courses/seo`
- [ ] Create Campaign 2 (The Lab) — landing page: `/community`
- [ ] Create Campaign 3 (Power Hours) — landing page: `/power-hours`
- [ ] Add all sitelink, callout, and structured snippet extensions
- [ ] Set geo targeting to Canada (BC priority)
- [ ] Add negative keyword list (jobs, career, youtube, reddit, free download, etc.)
- [ ] Verify conversion tracking with Google Tag Assistant
- [ ] Set daily budgets: $5 / $5 / $3 per campaign
- [ ] Launch and check search terms report daily for first 2 weeks

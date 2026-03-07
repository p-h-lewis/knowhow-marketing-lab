# The Lab — GHL Community Setup Guide

Complete step-by-step instructions for setting up The Lab community in GoHighLevel.

---

## Step 1: Upload the Cover Image

1. Go to **Memberships → Communities → Groups**
2. Click **Login** on The Lab card
3. Inside the community, click the **Settings** gear icon (top right or left sidebar)
4. Find **Cover Image** or **Group Settings**
5. Upload: `/home/ubuntu/webdev-static-assets/the-lab-community-cover.png`
   - White background, teal/orange gradient orb, "The Lab" branding
6. Save

---

## Step 2: Create the 6 Channels

Inside The Lab community, look for **+ Add Channel** or a channels section in the left sidebar.

Create these channels in this order:

| # | Channel Name | Type | Purpose |
|---|---|---|---|
| 1 | 👋 Welcome | Announcement | Intro post, rules, how to use The Lab |
| 2 | 📢 Announcements | Announcement | Session reminders, new content alerts |
| 3 | 💬 General | Discussion | Open conversation, wins, questions |
| 4 | 🔍 SEO Questions | Discussion | SEO, Search Console, rankings, local SEO |
| 5 | 📊 Google Ads Questions | Discussion | Campaigns, bidding, Performance Max, GA4 |
| 6 | 🤖 AI & Analytics | Discussion | ChatGPT, AI tools, GA4, data analysis |

---

## Step 3: Post the Welcome Message

Post this in the **👋 Welcome** channel:

---

**Welcome to The Lab — I'm glad you're here.**

This is the private community for KnowHow Marketing Lab members. Every week we go deep on the stuff that actually moves the needle: Google Ads, SEO, AI tools, and analytics.

**Here's how The Lab works:**

📅 **Every Thursday** — Live Q&A session (recorded and posted here within 24 hours)
📚 **Learning section** — Past session recordings + structured training modules
💬 **Channels** — Ask questions any time, get answers from Pip and the community

**To get the most out of The Lab:**
1. Introduce yourself in 💬 General — tell us your business and your #1 marketing challenge
2. Check the Learning section for past Thursday session recordings
3. Come to the live Thursday Q&A with your real questions

**The Thursday Zoom link is pinned in 📢 Announcements.**

Any questions? Drop them in the channel that fits best, or just post in 💬 General.

— Pip

---

## Step 4: Pin the Zoom Link in Announcements

Post this in **📢 Announcements** and pin it:

---

**📌 Thursday Q&A — Weekly Zoom Link**

Every Thursday · 12–1pm Pacific · Members only

**Zoom:** [your Thursday Q&A Zoom link here]

This is your private members-only Q&A. Bring your real questions on Google Ads, SEO, AI tools, GA4, or anything digital marketing. Sessions are recorded and posted in the Learning section within 24 hours.

See you Thursday!

---

## Step 5: Create 3 Learning Modules

Go to **Learning** (or **Courses**) inside the community. Create 3 modules:

---

### Module 1: Google Ads Grants, Local SEO & AI Tools

**Title:** Google Ads Grants, Local SEO & AI Tools — Thursday Q&A Session

**Description:**
In this session we cover how to use Google Ads Grants for non-profits and local businesses, local SEO strategies that work in 2025, and how AI tools are changing the way we do keyword research and content planning.

**Key topics covered:**
- Google Ads Grants: eligibility, setup, $10,000/month free ad spend
- Local SEO: Google Business Profile optimisation, local pack rankings
- AI tools for keyword research and content briefs
- How to use ChatGPT to speed up SEO workflows

**Upload:** `session1_redacted.mp4` (from `/home/ubuntu/upload/redacted/` once processing completes)

---

### Module 2: Schema Deep Dive, AI SEO & Content Strategy

**Title:** Schema Markup, AI SEO & Content Strategy — Thursday Q&A Session

**Description:**
A deep dive into schema markup and why it matters for AI-powered search results. We also cover how Google's AI Overviews are changing SEO, and how to build a content strategy that ranks in both traditional and AI search.

**Key topics covered:**
- Schema markup types: FAQ, HowTo, Product, LocalBusiness, Event
- How AI Overviews (SGE) work and how to optimise for them
- GEO (Generative Engine Optimisation) — the new SEO
- Content strategy for 2025: topic clusters, pillar pages, entity SEO

**Upload:** `session2_redacted.mp4` (from `/home/ubuntu/upload/redacted/` once processing completes)

---

### Module 3: Keyword Research, Topic Clusters & Search Console

**Title:** Keyword Research, Topic Clusters & Search Console — Thursday Q&A Session

**Description:**
Everything you need to know about keyword research in 2025 — from finding the right keywords to building topic clusters that dominate your niche. Plus a practical walkthrough of Google Search Console to find quick wins.

**Key topics covered:**
- Keyword research process: seed keywords, intent mapping, competition analysis
- Topic clusters: pillar pages, supporting content, internal linking strategy
- Google Search Console: finding quick win keywords, fixing crawl errors
- How to prioritise keywords when you have limited time and budget

**Upload:** `session3_redacted.mp4` (from `/home/ubuntu/upload/redacted/` once processing completes)

---

## Step 6: Video Upload (Once FFmpeg Finishes)

The 3 videos are currently being processed to black out the top 100px (browser chrome, email addresses, account names). They will be ready at:

- `/home/ubuntu/upload/redacted/session1_redacted.mp4` (~65 min, ~1.5GB)
- `/home/ubuntu/upload/redacted/session2_redacted.mp4` (~55 min, ~1.5GB)
- `/home/ubuntu/upload/redacted/session3_redacted.mp4` (~62 min, ~1.2GB)

**To upload to GHL Learning:**
1. Inside each module, click **Add Lesson** → **Video**
2. Upload the corresponding `.mp4` file
3. Add the title and description from Step 5 above
4. Publish the lesson

---

## Step 7: Set Power Hours Form Redirect

In GHL: **Sites → Forms → Power Hours Registration form**
- Go to **Settings** tab
- Set **Redirect URL** to: `https://knowhowmarketinglab.com/thank-you/power-hours`
- Save

This ensures people who register land on the thank-you page (which has the calendar link, Facebook group CTA, and upgrade nudge to The Lab).

---

## Step 8: Publish the Website

Once you've reviewed the site at the preview URL, click **Publish** in the Management UI header (top right).

The site is live at: `knowhowmarketinglab.com`

---

## Checklist Summary

- [ ] Upload cover image to The Lab community
- [ ] Create 6 channels (Welcome, Announcements, General, SEO Questions, Google Ads Questions, AI & Analytics)
- [ ] Post welcome message in 👋 Welcome channel
- [ ] Pin Thursday Zoom link in 📢 Announcements
- [ ] Create 3 Learning modules with titles and descriptions
- [ ] Upload 3 blurred session videos to Learning modules (once FFmpeg finishes — ~30 min)
- [ ] Set Power Hours form redirect to `/thank-you/power-hours`
- [ ] Publish the website
- [ ] Record 60-sec Loom walkthrough of The Lab (script in `community-video-brief.md`)
- [ ] Send personal Facebook invites using templates in `facebook-friend-invite-posts.md`

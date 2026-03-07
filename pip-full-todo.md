# Pip's Complete To-Do List — KnowHow Marketing Lab
**Last updated:** March 2026

Everything you need to do, pulled from the full project. Grouped by urgency.

---

## 🔴 DO THIS WEEKEND (Site Launch)

### 1. Publish the website
- Click **Publish** in the Manus Management UI (top-right button)
- The site is fully built and ready — checkpoint `480f909b` is clean
- Live URL: `knowhowmarketinglab.com`

### 2. Set the Power Hours form redirect in GHL
- Go to: **GHL → Sites → Forms → Power Hours Registration**
- Click the form → **Settings** tab → **Redirect URL**
- Paste: `https://knowhowmarketinglab.com/thank-you/power-hours`
- Save
- **Why:** Without this, people who register land on a blank GHL page instead of your branded thank-you page with the calendar link and Lab upsell

### 3. Set up The Lab GHL community (full guide in `ghl-community-setup-guide.md`)

**a) Fix the group basics (10 min)**
- Go to GHL → Memberships → Communities → The Lab → Login
- Change group name to: **"The Lab — by KnowHow Marketing Lab"**
- Add description: *"Data-driven SEO, Google Ads & AI marketing. Weekly live Q&As every Thursday, session recordings, advanced guides, and direct access to Pip & Phelan."*
- Upload cover image: `the-lab-community-cover.png` (in your Google Drive)
- Fix the owner name — currently shows "The Workshop performance Clinic"

**b) Create 6 channels (10 min)**
1. 👋 Welcome & Introductions
2. 📣 Announcements
3. 💬 General Discussion
4. 🔍 SEO & GEO Questions
5. 📢 Google Ads Questions
6. 🤖 AI & Analytics

**c) Post the welcome message (5 min)**
- Copy the welcome post from `ghl-community-setup-guide.md` → Step 3
- Post in the 👋 Welcome channel and pin it

**d) Pin your Thursday Zoom link in Announcements**
- Post the Thursday Q&A Zoom link in 📣 Announcements and pin it
- Template is in `ghl-community-setup-guide.md` → Step 4

**e) Create 3 Learning modules (20 min)**
- Titles, descriptions, and key topics are written for you in `ghl-community-setup-guide.md` → Step 5
- Module 1: Google Ads Grants, Local SEO & AI Tools
- Module 2: Schema Deep Dive, AI SEO & Content Strategy
- Module 3: Keyword Research, Topic Clusters & Search Console

**f) Upload the 3 blurred session videos**
- Files will be ready at: `/home/ubuntu/upload/redacted/` (processing now, ~20 min)
  - `session1_redacted.mp4` → Module 1
  - `session2_redacted.mp4` → Module 2
  - `session3_redacted.mp4` → Module 3
- In GHL Learning: Add Lesson → Video → Upload file

---

## 🟡 THIS WEEK

### 4. Finish recording the Free AI + SEO Course
- The course page at `/courses/seo` is live and waiting
- Record the remaining modules (you said you were partway through)
- Upload each module to YouTube as **Unlisted**
- Send me the YouTube URLs → I'll embed them on the course page within minutes

### 5. Record the 60-second "What's Inside The Lab" walkthrough video
- Use Loom (free at loom.com) — screen record only, no editing needed
- Full script is in `community-video-brief.md` (also in your Google Drive)
- Upload to YouTube as **Unlisted**
- Send me the URL → I'll embed it on `/community` above the pricing cards
- **Why this matters:** Visitors who watch a "what's inside" video convert at 2–3× the rate of those who don't

### 6. Send personal Facebook invites to The Lab
- 5 post templates + 1 DM template are in `facebook-friend-invite-posts.md` (Google Drive)
- Send personal DMs to your top 10–20 contacts first
- Post Hook 1 publicly on your Facebook profile

### 7. Post the first Power Hours Facebook post
- Use Hook 1 + Image 1 from the post templates
- Post Monday morning before Tuesday's session
- Pin the Zoom link in the first comment on Tuesday morning

### 8. Verify the GHL confirmation email includes the Zoom link
- Register for Power Hours yourself using the form on `/power-hours`
- Check the confirmation email arrives and contains the Zoom link
- If not, go to GHL → Automation → Power Hours workflow → edit the email

### 9. Confirm The Lab community join URL is correct
- The site links to: `bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home`
- Log in and confirm this URL works for new members
- If it's different, let me know and I'll update all the links on the site

---

## 🟠 WITHIN 2 WEEKS

### 10. Set up Google Ads account
- Go to `ads.google.com` → create account
- Set billing currency to **CAD**
- Full campaign structure, RSA copy, and keywords are in `google-ads-plan.md` (Google Drive)

### 11. Set up conversion tracking in GTM (do this BEFORE spending any ad budget)
- GTM is already installed on the site (container ID: GTM-W449WJS)
- Add conversion tags for:
  - Free course sign-up (thank-you page `/thank-you`)
  - Power Hours registration (thank-you page `/thank-you/power-hours`)
  - The Lab join (GHL checkout confirmation)
- Instructions are in `google-ads-plan.md` → Conversion Tracking section

### 12. Link Google Ads to GA4
- In Google Ads → Tools → Linked accounts → Google Analytics 4 → link your property
- Do this before launching ads so you have full attribution data

### 13. Set up Monday reminder email automation in GHL
- GHL → Automation → New workflow
- Trigger: Contact added to Power Hours list
- Action: Send email every Monday at 9am with the Zoom link
- This keeps attendance high without manual work

---

## 🟠 WHEN YOU HAVE TIME

### 14. Add a "Price going up" urgency notice to The Lab page
- Tell me the message (e.g., "Early access pricing ends at 100 members — currently 2 members")
- I'll build and add it to the `/community` page in minutes

### 15. Add new blog posts
- The blog is live with 6 placeholder posts
- Send me topics or rough notes → I'll write, format, and publish them
- Best topics for SEO: "How to rank on Google in 2025", "Google Ads for small business", "ChatGPT for marketing"

### 16. Add more testimonials to the Community page
- Currently has 4 placeholder testimonials
- Send me real quotes from students or clients (name, role, quote)
- I'll replace the placeholders immediately

### 17. Add more videos to the "Start Here" filter in the Video Library
- Currently 12 curated videos are tagged as featured
- To add more: open `client/src/lib/videos.ts` and add `featured: true` to any video
- Or just tell me which videos to feature and I'll do it

### 18. Update Power Hours session dates monthly
- The schedule section shows upcoming sessions
- To update: tell me the next session date if you skip or reschedule a week
- I'll update the `NEXT_SESSION_OVERRIDE` variable in `PowerHours.tsx`

### 19. Launch Google Ads campaigns
- Use `google-ads-plan.md` as your complete setup guide
- Start budgets: $5/day (Course), $5/day (The Lab), $3/day (Power Hours)
- Only launch after conversion tracking is verified (Step 11)

---

## 📋 WEEKLY RHYTHM (ONGOING)

| Day | Task |
|---|---|
| Monday | Post Power Hours reminder on Facebook using the weekly template |
| Tuesday | Run Power Hours on Zoom (free, public, 12–1pm Pacific) |
| Wednesday | Post "This Thursday we're covering..." teaser in The Lab Announcements |
| Thursday | Run The Lab Q&A on Zoom (paid members, 12–1pm Pacific) |
| Thursday (after) | Post session notes in The Lab Announcements (template in `the-lab-content-plan.md`) |
| Friday | Upload Thursday recording to Learning section in GHL |

---

## 📤 THINGS TO SEND ME (I'll build them immediately)

| What to send me | What I'll do |
|---|---|
| YouTube URL of your "What's Inside The Lab" Loom video | Embed it on `/community` above the pricing cards |
| YouTube URL(s) of new Free Course modules | Add them to the course page at `/courses/seo` |
| YouTube URL(s) of new GeekSpeak podcast episodes | Add them to the Podcast page |
| Real testimonials (name, role, quote) | Replace placeholders on the Community page |
| New blog post topics or drafts | Write, format, and publish to the blog |
| Urgency message for The Lab ("price goes up at X members") | Build urgency banner on Community + Pricing pages |
| New Power Hours session topic for the week | Write the Facebook post for that week |
| If The Lab community URL is different from what's on the site | Update all links across the site |

---

## ✅ WHAT'S ALREADY DONE (Don't redo these)

| Area | Status |
|---|---|
| Full website | ✅ Built, CRO-optimised, ready to publish |
| Power Hours page | ✅ Countdown timer, FAQ, sticky mobile bar, GHL CTA |
| Zoom URL removed from public pages | ✅ Link only goes out via confirmation email |
| Community page | ✅ Perks, curriculum, pricing, testimonials, FAQ |
| Pricing page | ✅ The Lab dominant CTA |
| Free Course page | ✅ Waiting for your recordings |
| Thank-you pages | ✅ `/thank-you` and `/thank-you/power-hours` |
| Blog | ✅ 6 posts live |
| Podcast / GeekSpeak | ✅ 19 episodes from 2025/2026 |
| Video Library | ✅ 60+ videos, "Start Here" filter |
| About page | ✅ Pip & Phelan bios with headshots |
| SEO | ✅ Schema on all pages, 100/100 SEO score |
| Mobile CRO | ✅ Sticky bars, tap targets, responsive |
| Social media images | ✅ 5 Power Hours Facebook images |
| Post templates | ✅ Weekly rotation + friend invite posts |
| Google Ads plan | ✅ 3 campaigns, full RSA copy, extensions |
| SOP documentation | ✅ Full build SOP in Google Drive |
| The Lab cover image | ✅ Created, in Google Drive |
| Thursday session transcripts | ✅ 3 sessions transcribed with titles, topics, takeaways |
| Session videos (blur processing) | ✅ Processing now — ready in ~20 min |

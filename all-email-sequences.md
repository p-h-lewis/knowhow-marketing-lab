# All GHL Email Automation Sequences
*KnowHow Marketing Lab — 3 automation workflows*

---

# SEQUENCE 1 — POWER HOURS REGISTRANTS
*Trigger: Form submitted (Power Hours registration form)*
*Tag applied by GHL form: power-hours-registered*

## Workflow: Power Hours — Registration & Follow-Up

```
TRIGGER: Form submitted → Power Hours registration form
    ↓
ACTION: Apply tag "power-hours-registered"
    ↓
ACTION: Send Email → Email 1 (Confirmation + Zoom link)
    ↓
WAIT: Until Monday 9am Pacific (before next Tuesday session)
    ↓
ACTION: Send Email → Email 2 (Monday reminder — "See you tomorrow")
    ↓
WAIT: Until Tuesday 11am Pacific (1 hour before session)
    ↓
ACTION: Send Email → Email 3 (1-hour reminder — "Starting in 1 hour")
    ↓
WAIT: Until Wednesday 9am Pacific (day after session)
    ↓
ACTION: Send Email → Email 4 (Follow-up — "How did it go?")
    ↓
WAIT: 5 days
    ↓
ACTION: Send Email → Email 5 (Next session invite + The Lab mention)
    ↓
END: Add tag "power-hours-follow-up-complete"
```

> **GHL Workflow Tip:** Use "Wait Until" with specific days/times for the reminder emails so they always arrive at the right time relative to Tuesday's session. Set the trigger to re-enroll contacts so repeat registrants get the sequence each time.

---

## Email 1 — Confirmation (Send immediately after registration)
**Subject:** You're registered ✅ Here's your Zoom link for Power Hours

**Preview text:** Tuesday at 12pm Pacific — save this link

---

Hey {{contact.first_name}},

You're in! Here are your details for this Tuesday's Power Hours session:

**📅 Date:** This Tuesday
**🕛 Time:** 12:00pm – 1:00pm Pacific
**💻 Zoom link:** https://us02web.zoom.us/j/6217417145

Save that link — you'll need it on Tuesday. (I'll also send you a reminder the day before and an hour before, just in case.)

**What to bring:**

Come with a real marketing question. It doesn't have to be polished. It doesn't have to be smart. Just bring whatever you're actually stuck on — whether it's SEO, Google Ads, your website, or AI tools.

There are no dumb questions. If you're confused about something, someone else in the room is too.

**What to expect:**

No slides. No presentation. No pitch. Just me (Pip) and whoever else shows up, working through real marketing problems in real time. Some sessions have 3 people. Some have 30. Either way, you'll get answers.

See you Tuesday at noon!

— Pip Seymour
KnowHow Marketing Lab

P.S. If you can't make it this week, the link is the same every Tuesday. Just show up whenever you're ready.

---

## Email 2 — Monday Reminder (Send Monday 9am Pacific)
**Subject:** See you tomorrow at noon 👋 Power Hours reminder

**Preview text:** Your Zoom link is inside — Tuesday 12pm Pacific

---

Hey {{contact.first_name}},

Just a quick reminder — Power Hours is tomorrow!

**📅 Tomorrow (Tuesday)**
**🕛 12:00pm – 1:00pm Pacific**
**💻 Zoom:** https://us02web.zoom.us/j/6217417145

If you have a question you want me to cover, you can reply to this email and send it ahead of time — I'll make sure we get to it.

Otherwise, just show up at noon with whatever's on your mind. See you tomorrow!

— Pip

---

## Email 3 — 1-Hour Reminder (Send Tuesday 11am Pacific)
**Subject:** Starting in 1 hour ⏰ Power Hours today at noon

**Preview text:** Click here to join — Zoom link inside

---

Hey {{contact.first_name}},

Power Hours starts in one hour!

**🕛 12:00pm Pacific — today**
**💻 Join here:** https://us02web.zoom.us/j/6217417145

No prep needed. Just click the link at noon and bring your questions.

See you in a few!

— Pip

---

## Email 4 — Post-Session Follow-Up (Send Wednesday 9am)
**Subject:** How did yesterday's session go?

**Preview text:** I'd love to know what you thought

---

Hey {{contact.first_name}},

Hope you were able to join us yesterday for Power Hours!

Whether you made it or not, I wanted to check in — how are things going with your marketing right now? Is there anything you're still stuck on that we didn't get to cover?

Just hit reply and let me know. I read every response and I'm happy to point you in the right direction.

A couple of things that might help in the meantime:

- **The free resource library** on the website has guides on SEO, Google Ads, and GA4: [knowhowmarketinglab.com](https://knowhowmarketinglab.com)
- **The Business Marketing Mixer** (our free Facebook group) is where I post tips every weekday and where the community hangs out between sessions: [GROUP LINK]

Power Hours runs every Tuesday at noon Pacific — same link, every week. You're always welcome back.

— Pip

---

## Email 5 — Next Session Invite + Lab Mention (Send 5 days after follow-up)
**Subject:** Back again this Tuesday — and something worth knowing about

**Preview text:** Power Hours every week + what's inside The Lab

---

Hey {{contact.first_name}},

Power Hours is back this Tuesday at noon Pacific — same link, same format, new questions.

**💻 Zoom:** https://us02web.zoom.us/j/6217417145

If you've been coming regularly, you've probably noticed that we cover a lot of ground in an hour — but sometimes you want to go deeper on a specific topic, or you want access to the recordings, or you want a more structured learning path.

That's exactly what **The Lab** is for.

The KnowHow Marketing Lab is our private paid community where we go deeper every Thursday — live sessions, recordings, structured modules, and direct access to me and Phelan.

If you're curious, you can learn more here: [knowhowmarketinglab.com/community](https://knowhowmarketinglab.com/community)

Or just keep coming to Power Hours — either way, I'm glad you're here.

See you Tuesday!

— Pip

---
---

# SEQUENCE 2 — THE LAB NEW MEMBERS
*Trigger: Tag applied "the-lab-member" (apply this tag when payment is confirmed / member is added to GHL community)*
*Workflow name: The Lab — New Member Onboarding*

## Workflow: The Lab — New Member Onboarding

```
TRIGGER: Contact Tag Added → "the-lab-member"
    ↓
WAIT: 5 minutes
    ↓
ACTION: Send Email → Email 1 (Welcome to The Lab)
    ↓
WAIT: 1 day
    ↓
ACTION: Send Email → Email 2 (How The Lab works — orientation)
    ↓
WAIT: 2 days
    ↓
ACTION: Send Email → Email 3 (Your first week — what to do)
    ↓
WAIT: 4 days
    ↓
ACTION: Send Email → Email 4 (Thursday session reminder)
    ↓
WAIT: 7 days
    ↓
ACTION: Send Email → Email 5 (Check-in — how's it going?)
    ↓
WAIT: 14 days
    ↓
ACTION: Send Email → Email 6 (Month 1 — what to focus on)
    ↓
END: Add tag "lab-onboarding-complete"
```

---

## Email 1 — Welcome to The Lab (Day 0)
**Subject:** Welcome to The Lab 🎉 You're in

**Preview text:** Here's everything you need to get started

---

Hey {{contact.first_name}},

Welcome to The KnowHow Marketing Lab. I'm genuinely glad you're here.

You've just joined a community of business owners and marketers who are serious about doing this stuff properly — data-driven SEO, Google Ads that actually work, and AI tools that make everything faster.

Here's how to get started right now:

**Step 1 — Access the community**
Your GHL community access is being set up. You'll receive a separate login email from GoHighLevel. Once you're in, head to the community and introduce yourself in the **Welcome channel**.

**Step 2 — Watch the orientation module**
Inside the Learning section, start with **Module 1** — it covers the foundation everything else is built on. Don't skip it even if you think you know this stuff. The way we approach it is different.

**Step 3 — Join us this Thursday**
Every Thursday at 12pm Pacific we run a live session on Google Meet. This is the heart of The Lab — bring your real questions, your real data, and your real problems. We work through them together.

**📅 Thursday at 12pm Pacific**
**💻 Google Meet link:** [INSERT YOUR GOOGLE MEET LINK]

I'll send you a reminder Thursday morning.

Any questions before then — just reply to this email.

Welcome aboard.

— Pip Seymour
KnowHow Marketing Lab

---

## Email 2 — How The Lab Works (Day 1)
**Subject:** How The Lab works — your orientation guide

**Preview text:** Channels, sessions, modules — here's the full picture

---

Hey {{contact.first_name}},

Now that you've had a day to settle in, let me walk you through how The Lab is structured so you can get the most out of it.

**The Community (GHL)**

Inside the community you'll find these channels:

- **Welcome** — introduce yourself here first
- **Announcements** — session reminders, new content, important updates (check this weekly)
- **General** — open discussion, share wins, ask anything
- **SEO Questions** — post your specific SEO questions here for focused answers
- **Google Ads Questions** — same for paid search
- **AI & Analytics** — GA4, GTM, ChatGPT, AI tools

Post your questions in the right channel and you'll get better, faster answers — from me, from Phelan, and from other members.

**The Learning Modules**

The Learning section has structured modules built from real client work. Each one covers a specific topic with recordings, notes, and action steps. Start with Module 1 and work through them in order — they build on each other.

**The Thursday Sessions**

Every Thursday at noon Pacific we go live on Google Meet. No set agenda — we cover what members bring. Recordings are posted in the Learning section within 24 hours if you miss one.

**Phelan's Weekly Deep Dive**

Once a week, Phelan runs a focused 20-minute session on a specific technical topic — GA4 setups, Google Ads scripts, GTM configurations. These are in the Learning section too.

**The Friday Interview Series**

Once a month we interview a practitioner, client, or expert. These are posted in Learning and are worth watching for the real-world perspective.

That's the full picture. Any questions — just ask in the General channel or reply here.

— Pip

---

## Email 3 — Your First Week (Day 3)
**Subject:** Your first week in The Lab — here's what to do

**Preview text:** Three things that will make the biggest difference

---

Hey {{contact.first_name}},

One week in (almost). Here are the three things that will make the biggest difference in your first month:

**1. Post one question in the right channel this week.**

Don't wait until you have a "good enough" question. Whatever you're working on right now — a campaign, a website, a keyword strategy — post it. The faster you start getting feedback on real work, the faster you improve.

**2. Watch Module 1 all the way through.**

I know it's tempting to jump to the topic you think you need most. But Module 1 gives you the framework that makes everything else click. It's worth the 45 minutes.

**3. Show up to Thursday's session.**

Even if you don't have a question ready. Even if you just listen. The live sessions are where the real learning happens — you'll hear questions from other members that you didn't know you had.

That's it. Three things. Do those and you'll get more out of The Lab in your first month than most people get from a $2,000 course.

See you Thursday at noon.

— Pip

---

## Email 4 — Thursday Session Reminder (Day 7)
**Subject:** Thursday session tomorrow — bring your hardest question

**Preview text:** 12pm Pacific — Google Meet link inside

---

Hey {{contact.first_name}},

Quick reminder — Thursday session is tomorrow at noon Pacific.

**📅 Tomorrow (Thursday)**
**🕛 12:00pm – 1:00pm Pacific**
**💻 Google Meet:** [INSERT YOUR GOOGLE MEET LINK]

If you want to make sure your question gets covered, reply to this email with it and I'll add it to the list.

Otherwise, just show up at noon. See you there.

— Pip

---

## Email 5 — Check-In (Day 14)
**Subject:** Two weeks in — how's it going?

**Preview text:** I want to know what's working and what isn't

---

Hey {{contact.first_name}},

You've been in The Lab for two weeks now. I want to check in properly.

How's it going? Specifically:

- Have you been able to make it to the Thursday sessions?
- Is there a topic or module you wish we covered that we haven't yet?
- Is there anything about the community that's confusing or not working for you?

I ask because The Lab is designed to improve based on what members actually need — not what I think they need. Your feedback directly shapes what we build next.

Just hit reply and tell me honestly. Good, bad, or "I haven't really dug in yet" — all answers are useful.

— Pip

---

## Email 6 — Month 1 Focus (Day 28)
**Subject:** One month in — here's what to focus on next

**Preview text:** The roadmap for your next 30 days in The Lab

---

Hey {{contact.first_name}},

You've been in The Lab for a month. Here's what I'd suggest focusing on in month two, depending on where you are:

**If you're just getting started with SEO:**
Work through Modules 1–3 in order. Post your Google Search Console data in the SEO Questions channel and ask for a review. The fastest way to improve is to get eyes on your actual data.

**If you're running Google Ads:**
Bring your account to a Thursday session. We'll look at it live. Most accounts have 2–3 obvious fixes that make a significant difference — and they're usually not what you'd expect.

**If you're focused on AI and analytics:**
Start with the GA4 setup module and Phelan's GTM deep dive. Once your tracking is right, everything else gets easier — you'll finally know what's actually working.

**If you're not sure where to start:**
Post in the General channel: "I'm not sure where to focus — here's what my business looks like: [brief description]." I'll point you in the right direction personally.

The members who get the most out of The Lab are the ones who show up consistently and ask specific questions about real work. That's it. No secret formula.

See you Thursday.

— Pip

---
---

# SEQUENCE 3 — FREE COURSE SIGN-UPS
*Trigger: Form submitted (Free Course / Free Resource opt-in form)*
*Tag applied: free-course-subscriber*
*Workflow name: Free Course — Welcome & Lesson Drip*

## Workflow: Free Course — Welcome & Lesson Drip

```
TRIGGER: Form submitted → Free Course opt-in form
    ↓
ACTION: Apply tag "free-course-subscriber"
    ↓
ACTION: Send Email → Email 1 (Welcome + access instructions)
    ↓
WAIT: 1 day
    ↓
ACTION: Send Email → Email 2 (Lesson 1 — SEO foundations)
    ↓
WAIT: 2 days
    ↓
ACTION: Send Email → Email 3 (Lesson 2 — Google Ads basics)
    ↓
WAIT: 2 days
    ↓
ACTION: Send Email → Email 4 (Lesson 3 — GA4 & tracking)
    ↓
WAIT: 2 days
    ↓
ACTION: Send Email → Email 5 (Lesson 4 — AI for marketing)
    ↓
WAIT: 3 days
    ↓
ACTION: Send Email → Email 6 (Course complete + Power Hours invite)
    ↓
WAIT: 5 days
    ↓
ACTION: Send Email → Email 7 (The Lab offer)
    ↓
END: Add tag "free-course-complete"
```

---

## Email 1 — Welcome + Access (Day 0)
**Subject:** Your free marketing course is ready 🎓

**Preview text:** Here's how to access everything

---

Hey {{contact.first_name}},

Welcome — your free course is ready.

The KnowHow Marketing Lab Free Course covers the four foundations of digital marketing that every business owner needs to understand:

1. **SEO** — how to get found on Google without paying for ads
2. **Google Ads** — how paid search works and when to use it
3. **Analytics & Tracking** — how to know what's actually working
4. **AI for Marketing** — how to use AI tools to work faster and smarter

**Access the course here:** [knowhowmarketinglab.com/free-course](https://knowhowmarketinglab.com/free-course)

Over the next week and a half, I'll also send you one lesson at a time by email — so you can work through it at your own pace without having to remember to log in.

First lesson arrives tomorrow.

In the meantime, if you haven't already — come join the free community where we talk about this stuff every day:

👉 **The Business Marketing Mixer (free Facebook group):** [GROUP LINK]

Talk soon.

— Pip Seymour
KnowHow Marketing Lab

---

## Email 2 — Lesson 1: SEO (Day 1)
**Subject:** Lesson 1: How to get found on Google (without paying for ads)

**Preview text:** The three things Google actually cares about

---

Hey {{contact.first_name}},

Lesson 1 is ready. Today we're covering **SEO** — how to get your website to show up on Google when someone searches for what you sell.

**The short version:**

Google's job is to show the most relevant, trustworthy result for every search. Your job is to make sure Google understands that your website is relevant and trustworthy for the searches that matter to your business.

There are three things Google actually cares about:

**1. Relevance** — Does your page clearly answer the question someone is searching for? This comes down to the words on your page, your headings, and your page titles.

**2. Authority** — Does Google trust your website? This is built over time through other websites linking to yours, your Google Business Profile, and your overall online presence.

**3. Experience** — Is your website fast, mobile-friendly, and easy to use? Google measures this and it affects your rankings.

**Your action for this lesson:**

Go to Google and search for the main thing your business does (e.g., "Vancouver accountant" or "online fitness coaching"). Look at the top 3 results. What do they have in common? What does your website have that they don't — and what are you missing?

The full lesson with video walkthrough is here: [knowhowmarketinglab.com/free-course](https://knowhowmarketinglab.com/free-course)

Lesson 2 (Google Ads) arrives in 2 days.

— Pip

---

## Email 3 — Lesson 2: Google Ads (Day 3)
**Subject:** Lesson 2: Google Ads — when to use them and when not to

**Preview text:** The honest truth about paid search

---

Hey {{contact.first_name}},

Lesson 2 is here. Today: **Google Ads**.

I'm going to give you the honest version — not the sales pitch.

**What Google Ads actually is:**

You pay to show up at the top of Google when someone searches for what you sell. You only pay when someone clicks. The goal is to make sure each click is worth more than it costs you.

**When Google Ads makes sense:**
- You have a proven offer that converts (people buy when they land on your page)
- You need leads or sales now, not in 6 months
- Your average customer value is high enough to justify the cost per click

**When Google Ads doesn't make sense:**
- Your website doesn't convert yet (you'll just pay for traffic that bounces)
- You're selling something with very low margins
- You haven't done any keyword research (you'll waste budget on the wrong searches)

**The most common mistake:**

Running Google Ads before fixing the website. Ads bring traffic. Your website converts that traffic into leads. If the website isn't working, ads just make the problem more expensive.

**Your action for this lesson:**

Go to Google and search for the keyword you'd most want to advertise on. Look at the ads that appear. What do they say? What's the offer? What would make someone click yours instead?

Full lesson here: [knowhowmarketinglab.com/free-course](https://knowhowmarketinglab.com/free-course)

Lesson 3 (Analytics & Tracking) arrives in 2 days.

— Pip

---

## Email 4 — Lesson 3: Analytics & Tracking (Day 5)
**Subject:** Lesson 3: How to know what's actually working

**Preview text:** Most businesses are flying blind. Here's how to fix that.

---

Hey {{contact.first_name}},

Lesson 3 today: **Analytics & Tracking**.

This is the one most people skip — and it's why most marketing budgets get wasted.

**The problem:**

Most business owners have Google Analytics on their website but have never looked at it. Or they look at it but don't know what they're looking at. So they keep spending money on marketing without knowing what's actually driving results.

**What you actually need to track:**

Not page views. Not bounce rate. Not time on site.

You need to track **conversions** — the specific actions that mean someone is interested in buying from you. Phone calls. Form submissions. Booking requests. Purchases.

Once you're tracking conversions, you can answer the question that matters: "Which marketing channel is actually bringing me customers?"

**The three tools that matter:**

1. **Google Analytics 4 (GA4)** — tracks what happens on your website
2. **Google Search Console** — tracks what people search before they find you
3. **Google Tag Manager** — the glue that connects everything without touching your website code

**Your action for this lesson:**

Check if you have GA4 installed on your website. Go to [analytics.google.com](https://analytics.google.com) and see if your property is collecting data. If it's not — that's your first priority.

Full lesson here: [knowhowmarketinglab.com/free-course](https://knowhowmarketinglab.com/free-course)

Lesson 4 (AI for Marketing) arrives in 2 days.

— Pip

---

## Email 5 — Lesson 4: AI for Marketing (Day 7)
**Subject:** Lesson 4: AI tools that actually save you time

**Preview text:** What we use, what we don't, and what's worth your attention

---

Hey {{contact.first_name}},

Last lesson: **AI for Marketing**.

I'm going to skip the hype and tell you what we actually use and what's genuinely useful for business owners right now.

**What AI is good at (right now):**

- **First drafts** — blog posts, email copy, ad headlines, social captions. AI gets you 70% of the way there in 2 minutes. You edit the rest.
- **Keyword research** — ChatGPT and Gemini can help you brainstorm keyword ideas and content angles faster than any other method.
- **FAQ content** — AI is excellent at generating the questions your customers ask and drafting clear answers. This content performs well in Google's AI Overviews.
- **Summarising and repurposing** — take a 60-minute session recording and turn it into a blog post, 5 social posts, and an email in 20 minutes.

**What AI is not good at (yet):**

- Replacing your judgment about what your customers actually need
- Producing accurate data or statistics (always verify)
- Understanding your specific business context without detailed prompting

**The tool I use most:** ChatGPT (GPT-4). For SEO-specific research, Gemini is worth using because it has live Google data.

**Your action for this lesson:**

Open ChatGPT and type: "I run a [your business type] in [your city]. What are the top 10 questions my potential customers are searching for on Google?" Read the list. How many of those questions does your website answer?

Full lesson here: [knowhowmarketinglab.com/free-course](https://knowhowmarketinglab.com/free-course)

Final email arrives in 3 days — I'll wrap up the course and tell you what to do next.

— Pip

---

## Email 6 — Course Complete + Power Hours Invite (Day 10)
**Subject:** You've finished the course 🎓 Here's what's next

**Preview text:** One free thing that will help you apply everything

---

Hey {{contact.first_name}},

You've made it through all four lessons. That puts you ahead of most business owners who've never thought systematically about their marketing.

Here's a quick recap of what you now know:

- **SEO** — relevance, authority, and experience are what Google cares about
- **Google Ads** — only works if your website converts first
- **Analytics** — you need to track conversions, not just traffic
- **AI** — best for first drafts, keyword research, and content repurposing

**The gap between knowing and doing:**

The hardest part isn't understanding the concepts. It's applying them to your specific business, with your specific website, your specific budget, and your specific goals.

That's exactly what Power Hours is for.

Every Tuesday at noon Pacific, I run a free live Q&A on Zoom where you can bring your real marketing questions and we work through them together. No slides. No pitch. Just answers.

**Register free:** [knowhowmarketinglab.com/power-hours](https://knowhowmarketinglab.com/power-hours)

Come with a question from this course — something you're not sure how to apply to your business — and we'll work through it live.

See you Tuesday.

— Pip

---

## Email 7 — The Lab Offer (Day 15)
**Subject:** Ready to go deeper?

**Preview text:** What's inside The Lab and who it's for

---

Hey {{contact.first_name}},

You've finished the free course and (hopefully) joined us for a Power Hours session or two.

If you're finding that you want more — more depth, more structure, more direct access, more accountability — I want to tell you about **The Lab**.

**The KnowHow Marketing Lab** is our private paid community for business owners and marketers who are ready to implement, not just learn.

Here's what's different about The Lab compared to the free course:

| Free Course | The Lab |
|---|---|
| 4 foundational lessons | Ongoing weekly sessions every Thursday |
| Self-paced video content | Live Q&A with your real data and campaigns |
| General concepts | Specific to your business and situation |
| No community | Private channels with direct access to Pip & Phelan |
| Free | $29.99/month (early access pricing) |

The Lab is for you if:
- You're ready to actually implement SEO, Google Ads, or GA4 in your business
- You want someone to look at your actual campaigns and tell you what to fix
- You want to stay current as Google, AI, and the marketing landscape keeps changing

It's not for you if you're just looking for more content to consume without acting on it.

If you're ready: [knowhowmarketinglab.com/community](https://knowhowmarketinglab.com/community)

If you have questions about whether it's right for your situation — just reply to this email.

— Pip

P.S. Early access pricing won't last forever. The price increases as the community grows. If you've been thinking about it, now is the right time.

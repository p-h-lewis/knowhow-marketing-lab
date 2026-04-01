# KnowHow Lab, Post-Trial Email Sequence
## Full Copy + GoHighLevel Setup Guide

This document contains the complete 3-email sequence to convert free trial members into paying subscribers. Each email includes the full subject line, preview text, body copy, and GHL automation setup instructions.

---

## Why This Sequence Works

The 7-day trial window is your highest-leverage conversion moment. Most SaaS and membership businesses lose 60-70% of trial users simply because they never followed up. This sequence is designed to:

1. **Welcome and orient** new members so they get value immediately (Day 1)
2. **Remind and re-engage** members who haven't logged in yet (Day 5)
3. **Create urgency** before the trial ends and the card is charged (Day 7)

The tone matches the KnowHow brand: conversational, honest, helpful, and never pushy.

---

## GHL Automation Setup

Before building the emails, set up the automation trigger in GoHighLevel:

**Trigger:** Contact joins the "The Lab, Trial" tag (or the specific product/offer)
**Workflow name:** `The Lab, 7-Day Trial Sequence`
**Contact filter:** Only fire for contacts who have NOT yet converted to paid (tag: `lab-trial-active`)

### Steps in GHL:
1. Go to **Automation → Workflows → New Workflow**
2. Set trigger: **Product/Offer Purchased** → select "The Lab 7-Day Trial" offer
3. Add **Tag** action: add tag `lab-trial-active`
4. Add **Wait** → 0 minutes → **Send Email** (Email 1)
5. Add **Wait** → 4 days → **Send Email** (Email 2)
6. Add **Wait** → 2 days → **Send Email** (Email 3)
7. Add **If/Else** after Email 3: check if tag `lab-converted` exists → if YES, end workflow; if NO, continue to optional Email 4 (not included here)
8. When a member converts to paid, add tag `lab-converted` and remove `lab-trial-active` to stop the sequence

---

## Email 1: Welcome (Send immediately on Day 1)

**Subject line:** You're in, here's what to do first

**Preview text:** Your 7-day trial starts now. Here's the fastest way to get value.

---

Hey [First Name],

Welcome to The KnowHow Lab. Your 7-day free trial is active right now.

Here's what I'd suggest doing first:

**1. Log in and explore the course library**
Head to your dashboard and take a look at what's available. The Google Ads course and the AI + SEO course are both good starting points depending on what you're working on right now.

**2. Check the Thursday schedule**
Lab sessions run every Thursday 12-1pm Pacific. If there's one coming up this week, show up. Bring a real question, your actual website, your ad account, or a campaign you're working on. That's what the sessions are for.

**3. Introduce yourself in the community**
Drop a quick note in the community group, who you are, what you're working on, and what you're hoping to get out of The Lab. It helps Pip and Phelan know what to focus on, and other members are genuinely helpful.

Your trial runs for 7 days. After that, your card will be charged $29/month, the founding member rate that locks in forever.

If you have any questions, just reply to this email.

Talk soon,
Pip Seymour
KnowHow Marketing Lab

P.S. If you joined specifically to get help with Google Ads or SEO, the Thursday Lab session is the fastest way to get a real answer on your specific situation. Don't wait, bring your actual account.

---

**GHL Notes:**
- From name: `Pip from KnowHow Lab`
- From email: your GHL sending address
- Send time: Immediately on trigger
- Tag to add after send: `trial-email-1-sent`

---

## Email 2: Re-engagement (Send on Day 5)

**Subject line:** Have you had a chance to log in yet?

**Preview text:** Your trial ends in 2 days. Here's the one thing worth doing before then.

---

Hey [First Name],

Your trial is almost halfway through, just checking in.

If you haven't logged in yet, no stress. Life gets busy. But I want to make sure you actually get something useful before your trial ends on Day 7.

Here's the one thing I'd suggest:

**Come to a Thursday Lab session.**

It's every Thursday 12-1pm Pacific. You bring your real campaigns, your website, your Google Ads account, and Pip and Phelan work through it live on screen. Not generic advice. Actual hands-on help with your specific situation.

That's what makes The Lab different from a course or a YouTube channel. You're not just watching someone else's example. You're getting eyes on your actual work.

Your trial ends in 2 days. If you decide it's not for you, you can cancel in under 60 seconds from your account settings, no questions, no forms, no penalty.

But if you haven't tried the Thursday session yet, I'd encourage you to give it one shot first.

[Join the next Thursday session →](https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce)

Talk soon,
Pip

---

**GHL Notes:**
- From name: `Pip from KnowHow Lab`
- Send time: Day 5 (4 days after Email 1)
- Condition: Only send if tag `lab-converted` does NOT exist (i.e., they haven't already upgraded)
- Tag to add after send: `trial-email-2-sent`

---

## Email 3: Trial Ending (Send on Day 7, morning)

**Subject line:** Your trial ends today, quick note from Pip

**Preview text:** No pressure. But here's what happens next.

---

Hey [First Name],

Your 7-day free trial ends today.

If you've been in the sessions, explored the courses, or asked questions in the community, great. I hope it's been useful.

Here's what happens next:

**If you want to keep your access:** You don't need to do anything. Your card will be charged $29 today and your membership continues. You keep the founding member rate, $29/month, locked in forever, even as the price increases for new members.

**If you want to cancel:** Log into your GoHighLevel account and cancel from your subscription settings. It takes about 60 seconds. No questions, no forms, no penalty. Your access continues until the end of today.

Either way, I want to be straight with you: The Lab is worth it if you're actively working on Google Ads or SEO and you want real expert feedback on your actual campaigns. It's not worth it if you're just looking for something to watch passively.

If you've been showing up and getting value, stay. If it wasn't the right fit, no hard feelings, and the free Power Hours are always open to you on Tuesdays.

Thanks for giving it a try.

Pip Seymour
KnowHow Marketing Lab

P.S. If you have a question about whether The Lab is right for you, just reply to this email. I read every one.

---

**GHL Notes:**
- From name: `Pip from KnowHow Lab`
- Send time: Day 7 (2 days after Email 2), send at 8am Pacific so members have the full day to decide
- Condition: Only send if tag `lab-converted` does NOT exist
- Tag to add after send: `trial-email-3-sent`
- After this email: add a 24-hour wait, then check if `lab-converted` exists. If not, optionally send a final "Did you cancel?" email (not included here)

---

## Optional: Post-Conversion Welcome (When member converts to paid)

When a member converts from trial to paid (i.e., the trial ends and they don't cancel), trigger a separate short email:

**Subject:** You're officially a Lab member, welcome

**Body:**

Hey [First Name],

You're in. Your membership is active and your $29/month founding rate is locked in.

A few things to know:

- **Thursday sessions** run every week at 12-1pm Pacific. The link is in your community group.
- **Course library** is always available, no expiry, no drip schedule.
- **Community group** is the best place to ask questions between sessions.

If you ever want to cancel, you can do it in 60 seconds from your account settings. No penalty, no questions.

Thanks for being part of The Lab.

Pip

---

## Sequence Summary Table

| Email | Timing | Subject | Goal |
|-------|--------|---------|------|
| Email 1 | Day 1 (immediate) | You're in, here's what to do first | Orient, activate, build excitement |
| Email 2 | Day 5 | Have you had a chance to log in yet? | Re-engage, highlight Thursday session |
| Email 3 | Day 7 (morning) | Your trial ends today, quick note from Pip | Convert or gracefully release |
| Post-conversion | When paid | You're officially a Lab member | Onboard, reduce churn anxiety |

---

## Tips for Better Results

**Personalization:** Use `[First Name]` merge tags in GHL. Even a first name in the subject line lifts open rates by 10-15%.

**Sender name:** Use `Pip from KnowHow Lab` rather than just `KnowHow Marketing Lab`. Emails from a person outperform emails from a brand in open rates.

**Send time:** For Email 3 (trial ending), send at 8am Pacific so members have time to decide during the day. Avoid sending after 6pm.

**Reply tracking:** In GHL, set up a pipeline stage for replies to trial emails. Anyone who replies is a warm lead, follow up personally.

**Unsubscribe handling:** GHL handles unsubscribes automatically. Do not suppress the Day 7 email for unsubscribers, they are still active trial members and the email is transactional in nature.

---

*Document prepared for KnowHow Marketing Lab, March 2026*

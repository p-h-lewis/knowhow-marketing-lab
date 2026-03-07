# Group Collector → GHL Integration & Email Automation
*The Business Marketing Mixer Facebook Group → GoHighLevel → Welcome Email Sequence*

---

## PART 1 — GROUP COLLECTOR + GHL INTEGRATION SETUP

### What This Does
When someone is **approved** to join The Business Marketing Mixer Facebook group, Group Collector automatically:
1. Captures their name, email (from membership question), and answers
2. Creates a contact in GHL
3. Applies a tag (`facebook-group-member`)
4. Triggers your welcome email automation in GHL

No manual work. No CSV imports. Fully automatic.

---

### STEP 1 — Get Your GHL Location ID
1. Log in to GoHighLevel
2. Go to **Settings** (left sidebar, scroll down)
3. On the **Business Profile** page, find **Location ID** under General Information
4. Copy it and save it somewhere safe (Notepad, Notes app)

> **Important:** Each sub-account has a unique Location ID. Make sure you're in the right sub-account (KnowHow Marketing Lab location).

---

### STEP 2 — Create a Private Integration (Access Token) in GHL
1. Stay on the **Settings** page
2. Scroll down to **Private Integrations**
3. Click **Create New Integration**
4. Name it: `Group Collector — Business Marketing Mixer`
5. Click **Next**
6. Select ONLY these two scopes:
   - ✅ **Edit Contacts** → `contacts.write`
   - ✅ **View Locations** → `locations.readonly`
7. Click **Create**
8. **Copy the Access Token immediately** — save it with your Location ID

> **Critical:** Do NOT regenerate this token after setup. If you do, the integration will break and you'll need to reconnect.

---

### STEP 3 — Connect GHL in Group Collector
1. Open the **Group Collector** Chrome extension
2. Go to your **Business Marketing Mixer** group settings
3. Click **Add Autoresponder**
4. Select **GoHighLevel GHL 2.0** from the list
5. Enter:
   - **Location ID** → paste from Step 1
   - **Access Token** → paste from Step 2
   - **Tags** → type: `facebook-group-member, bmm-new-join`
6. Click **Verify & Update**
7. Green checkmark = connected ✅

---

### STEP 4 — Map the Membership Questions to GHL Fields
In Group Collector, map your 3 membership questions to GHL contact fields:

| Membership Question | GHL Field to Map To |
|---|---|
| What type of business do you run or work in? | Custom Field: `Business Type` |
| What's your biggest marketing challenge right now? | Custom Field: `Marketing Challenge` |
| How did you find this group? | Custom Field: `Lead Source` |

> To create custom fields in GHL: **Settings → Custom Fields → Add Field**

---

### STEP 5 — Test the Integration
1. Have a friend (or yourself from a second account) request to join the group
2. Approve them
3. Check GHL Contacts — they should appear within 60 seconds
4. Confirm the tag `facebook-group-member` is applied
5. Confirm the automation triggers (see Part 2)

---

## PART 2 — GHL AUTOMATION WORKFLOW SETUP

### Workflow Name: `BMM — New Facebook Group Member Welcome`

### Trigger
- **Trigger type:** Contact Tag Added
- **Tag:** `facebook-group-member`

### Workflow Steps

```
TRIGGER: Tag "facebook-group-member" added
    ↓
WAIT: 5 minutes (gives GHL time to fully create the contact)
    ↓
ACTION: Send Email → Email 1 (Welcome)
    ↓
WAIT: 2 days
    ↓
ACTION: Send Email → Email 2 (Your First Win)
    ↓
WAIT: 2 days
    ↓
ACTION: Send Email → Email 3 (Power Hours Invite)
    ↓
WAIT: 3 days
    ↓
ACTION: Send Email → Email 4 (The Real Problem)
    ↓
WAIT: 3 days
    ↓
ACTION: Send Email → Email 5 (The Lab Intro)
    ↓
WAIT: 7 days
    ↓
ACTION: Send Email → Email 6 (Still Here)
    ↓
END: Add tag "bmm-welcome-sequence-complete"
```

---

## PART 3 — EMAIL SEQUENCE (6 EMAILS OVER 17 DAYS)

### Email 1 — Welcome (Send immediately / Day 0)
**Subject:** You're in 👋 Welcome to the Business Marketing Mixer

**Preview text:** Here's what to expect and where to start

---

Hey {{contact.first_name}},

Welcome to The Business Marketing Mixer — I'm really glad you're here.

I'm Pip Seymour. I've been doing digital marketing for over a decade, and I started this group because I kept seeing the same thing: smart business owners spending money on marketing that wasn't working, often because no one had ever explained the basics properly.

That's what this group is for. No jargon. No fluff. Just practical help with SEO, Google Ads, websites, and AI tools — the stuff that actually moves the needle.

**Here's what to expect from me:**

Every weekday I post something useful in the group — a tip, a question, or a real example from client work. Every Wednesday we celebrate wins (yours and mine). And every Tuesday at noon Pacific, I run a **free live Q&A on Zoom** called Power Hours where you can bring your actual marketing questions and we work through them together.

**Your first step:** Head into the group and introduce yourself. Tell us what your business does and what your biggest marketing challenge is right now. I read every single one and I'll reply personally.

See you in there.

— Pip

P.S. If you have a question that can't wait, just reply to this email. I read them all.

---

### Email 2 — Your First Win (Day 2)
**Subject:** The 5-minute thing that changes everything

**Preview text:** Most people skip this. Don't.

---

Hey {{contact.first_name}},

Quick one today.

The single most underused free marketing tool for business owners is **Google Search Console**.

It shows you exactly what people are typing into Google before they find your website. Not what you think they're searching. What they're *actually* searching.

Most business owners have never looked at it. And when they do, they're usually surprised — sometimes the keywords driving traffic aren't the ones they expected at all.

Here's what I want you to do this week:

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your website (takes about 5 minutes)
3. Come back to the group and tell me what you find

If you're already set up, go to **Performance → Search Results** and look at your top 10 queries. Are they what you expected?

This one exercise has changed the direction of more than a few marketing strategies I've worked on.

Reply and let me know what you find — I'm curious.

— Pip

---

### Email 3 — Power Hours Invite (Day 4)
**Subject:** Every Tuesday at noon — bring your real questions

**Preview text:** No slides. No pitch. Just answers.

---

Hey {{contact.first_name}},

I want to make sure you know about **Power Hours**.

Every Tuesday at 12pm Pacific, I run a free live Q&A on Zoom. You show up, you ask your marketing questions, and we work through them together in real time.

No slides. No presentation. No pitch at the end. Just answers to whatever you bring.

People bring things like:
- "My Google Ads are running but I'm not getting leads — what's wrong?"
- "How do I get my business to show up on Google Maps?"
- "I've been told I need to blog but I don't know where to start"
- "What's the difference between SEO and Google Ads and which one should I do first?"

There are no dumb questions. If you're confused about something, someone else in the group is too.

**Register here (free):** [knowhowmarketinglab.com/power-hours](https://knowhowmarketinglab.com/power-hours)

You'll get the Zoom link by email after you register.

I'd love to see you there this Tuesday.

— Pip

---

### Email 4 — The Real Problem (Day 7)
**Subject:** Why most marketing doesn't work (it's not what you think)

**Preview text:** It's rarely the channel. It's almost always this.

---

Hey {{contact.first_name}},

After working with hundreds of businesses on their marketing, I've noticed a pattern.

When marketing isn't working, most people assume the problem is the channel. "Google Ads don't work for my industry." "SEO takes too long." "Social media is a waste of time."

But almost every time I dig in, the real problem is one of three things:

**1. They're targeting the wrong keywords.**
They're optimizing for what they *think* people search for, not what people actually type. (This is why I love Google Search Console — it shows you the truth.)

**2. Their website doesn't convert.**
They're getting traffic, but the website doesn't answer the visitor's question fast enough. People leave in 8 seconds if they can't figure out what you do and why it matters to them.

**3. They're measuring the wrong things.**
Impressions, followers, page views — these feel like progress but they don't pay the bills. Leads, calls, and sales do.

The good news: all three of these are fixable. And none of them require a big budget.

Which one do you think is your biggest challenge right now? Hit reply and tell me — I read every response.

— Pip

---

### Email 5 — The Lab Intro (Day 10)
**Subject:** For those who want to go deeper

**Preview text:** This is what's inside The Lab

---

Hey {{contact.first_name}},

I want to tell you about something I've built for people who are serious about this stuff.

The free group — the tips, the Q&As, the Winning Wednesdays — that's the foundation. It's designed to give you a solid understanding of what good marketing looks like and why it works.

But if you want to actually **implement** it in your business — with step-by-step guidance, live sessions every Thursday, and direct access to me and my business partner Phelan — that's what **The Lab** is for.

**The KnowHow Marketing Lab** is our private paid community for business owners and marketers who are ready to go beyond the basics.

Inside you'll find:
- **Live Thursday sessions** — deep dives into SEO, Google Ads, and AI tools
- **Session recordings** — every Thursday Q&A, organized by topic
- **Structured learning modules** — built from real client work
- **Private channels** — SEO questions, Google Ads questions, AI tools
- **Direct access to me and Phelan** — not a support ticket, actual answers

This isn't a course you buy and forget. It's an active community where we work through real problems together every week.

Early access pricing is available right now.

👉 [knowhowmarketinglab.com/community](https://knowhowmarketinglab.com/community)

If you have questions about whether it's right for you, just reply to this email. I'm happy to talk it through.

— Pip

---

### Email 6 — Still Here (Day 17)
**Subject:** Still here if you need me

**Preview text:** One last thing before I stop filling your inbox

---

Hey {{contact.first_name}},

This is the last email in my welcome sequence, so I'll keep it short.

I just want to say: the group is always here when you need it. Whether you have a quick question, want to celebrate a win, or just want to see what's working for other business owners — that's what it's for.

A few things worth bookmarking:

- **The group:** [facebook.com/groups/businessmarketingmixer] (replace with your actual URL)
- **Free Power Hours (every Tuesday noon Pacific):** [knowhowmarketinglab.com/power-hours](https://knowhowmarketinglab.com/power-hours)
- **The Lab (paid community):** [knowhowmarketinglab.com/community](https://knowhowmarketinglab.com/community)
- **Free resources and blog:** [knowhowmarketinglab.com](https://knowhowmarketinglab.com)

And if you ever want to talk about your specific marketing situation — just reply to any of these emails. I read them all.

Thanks for being part of the community.

— Pip

P.S. If you got value from these emails, the best thing you can do is invite someone else who'd benefit. The more good people in the group, the better the conversations get.

---

## PART 4 — GHL WORKFLOW BUILD INSTRUCTIONS (step by step)

### How to Build This in GHL

1. Go to **Automation → Workflows → Create Workflow**
2. Name it: `BMM — New Facebook Group Member Welcome`
3. Click **Add Trigger**
4. Select: **Contact Tag**
5. Set: Tag is **facebook-group-member**
6. Click **Save Trigger**

**Add each step:**

| Step | Action | Settings |
|---|---|---|
| 1 | Wait | 5 minutes |
| 2 | Send Email | Email 1 — Welcome |
| 3 | Wait | 2 days |
| 4 | Send Email | Email 2 — Your First Win |
| 5 | Wait | 2 days |
| 6 | Send Email | Email 3 — Power Hours Invite |
| 7 | Wait | 3 days |
| 8 | Send Email | Email 4 — The Real Problem |
| 9 | Wait | 3 days |
| 10 | Send Email | Email 5 — The Lab Intro |
| 11 | Wait | 7 days |
| 12 | Send Email | Email 6 — Still Here |
| 13 | Add Tag | `bmm-welcome-sequence-complete` |

7. Set workflow status to **Published**
8. Test by approving one member and checking their contact in GHL

---

## PART 5 — GHL EMAIL SETTINGS CHECKLIST

Before sending any emails, confirm these are set up:

- [ ] **From Name:** Pip Seymour (or KnowHow Marketing Lab)
- [ ] **From Email:** pip@knowhowmarketinglab.com (or your GHL sending domain)
- [ ] **Reply-To:** pip@seymourdigitalmedia.com (or your preferred reply address)
- [ ] **Unsubscribe link:** GHL adds this automatically — confirm it's in the footer
- [ ] **Email sending domain verified** in GHL (Settings → Email Services → Sending Domains)
- [ ] **Test email sent** to yourself before activating workflow

---

## PART 6 — TAGS TO CREATE IN GHL

Create these tags in GHL before connecting Group Collector:

| Tag | When Applied | Purpose |
|---|---|---|
| `facebook-group-member` | When approved to join group | Triggers welcome sequence |
| `bmm-new-join` | When approved to join group | Segment for reporting |
| `power-hours-registered` | When they register for Power Hours | Already applied by Power Hours form |
| `the-lab-member` | When they join The Lab | Applied manually or by payment workflow |
| `bmm-welcome-sequence-complete` | After Email 6 is sent | Know they've received all emails |

To create tags: **Contacts → Tags → Add Tag**

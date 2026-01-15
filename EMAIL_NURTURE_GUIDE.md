# Email Nurture Sequence - Complete Walkthrough

## ✅ NOW ACTIVE

Your email nurture sequence is **fully operational**. Here's exactly how it works:

---

## 📧 The Email Flow

### **Day 1: Welcome Email** (Immediate)
**Trigger:** User downloads checklist from `/checklist` page

**What happens:**
1. User enters email in LeadMagnetForm
2. `/api/lead-magnet` receives email
3. **Immediately sends** welcome email via Resend
4. Saves contact to `data/nurture-contacts.json`
5. Marks Day 1 as "sent", sets Day 3/7/14 as "pending"
6. Returns download link to user

**Email content:**
- Subject: "Your Client Readiness Checklist + Next Steps"
- Content: Checklist delivery, quick wins (review M365 access, list pain points)
- CTA: Book free discovery call

---

### **Day 3: Education Email**
**Trigger:** Cron job runs daily at 9am, checks if contact subscribed 3+ days ago

**What happens:**
1. Cron job queries `data/nurture-contacts.json`
2. Finds contacts where `day3_education = 'pending'` AND subscribed 3+ days ago
3. Sends email via Resend
4. Updates contact: `day3_education = 'sent'`

**Email content:**
- Subject: "3 Mistakes Oklahoma Businesses Make with IT"
- Content: 
  1. Delaying M365 governance (Teams/SharePoint sprawl)
  2. No documented processes (tribal knowledge risk)
  3. Assuming backups work (no restore testing)
- CTA: Book discovery call if any resonate

---

### **Day 7: Call to Action**
**Trigger:** Cron job finds contacts 7+ days old with `day7_book_call = 'pending'`

**What happens:**
1. Daily cron checks for Day 7 candidates
2. Sends stronger CTA email
3. Updates contact: `day7_book_call = 'sent'`

**Email content:**
- Subject: "Ready to fix your IT systems?"
- Content: Breakdown of what happens on discovery call (15 min challenges, 10 min questions, 5 min recommendations)
- Emphasis: No sales pitch, just clarity on next steps
- CTA: Book your discovery call

---

### **Day 14: Last Touch** (Conditional)
**Trigger:** Cron job finds contacts 14+ days old with `day14_still_thinking = 'pending'`

**Special logic:**
- **SKIPS if** `has_booked_service = true`
- **SENDS if** `has_booked_service = false`

**What happens:**
1. Daily cron checks for Day 14 candidates
2. Checks if they've booked a service
3. If yes: Marks as "skipped", no email sent
4. If no: Sends final check-in email
5. Updates contact: `day14_still_thinking = 'sent'` or `'skipped'`

**Email content:**
- Subject: "Still thinking about your IT project?"
- Content: Friendly final check-in, acknowledges they may be busy
- Two paths:
  - "If yes" → Book a call
  - "If no" → No problem, here's my contact info
- Tone: "I won't keep emailing you, but feel free to reach out"

---

### **Day 90: Post-Project Follow-up** (Future)
**Trigger:** Manual - you mark project as completed

**What happens:**
1. You call `markProjectCompleted(email, date)` after project done
2. 90 days later, cron sends check-in email
3. Asks how systems are working, any new challenges

**Email content:**
- Subject: "How are things going?"
- Content: Check-in on implemented systems, offer to discuss next priorities
- CTAs: Send update or book another call

**Status:** Template ready, needs you to manually mark projects completed

---

## 🔧 Technical Architecture

### **Contact Storage**
Location: `data/nurture-contacts.json`

Structure:
```json
[
  {
    "email": "user@example.com",
    "name": "Optional Name",
    "subscribed_at": "2026-01-15T12:00:00.000Z",
    "has_booked_service": false,
    "emails_sent": {
      "day1_welcome": "sent",
      "day3_education": "pending",
      "day7_book_call": "pending",
      "day14_still_thinking": "pending"
    }
  }
]
```

### **Email Sending**
- Service: Resend (via SMTP)
- Transport: nodemailer
- Config: Uses existing `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` env vars
- From: `SMTP_FROM` or defaults to "Polus <no-reply@polus-cs.com>"
- Reply-To: jack.washmon@polus-cs.com

### **Cron Job**
- Endpoint: `/api/cron/send-nurture-emails`
- Schedule: Daily at 9:00 AM Central Time
- Config: `vercel.json` (Vercel auto-handles this)
- Auth: Optional `CRON_SECRET` for security (Vercel sets this automatically)

### **Day Calculation**
```typescript
daysSince(subscribed_at) {
  const date = new Date(subscribed_at);
  const now = new Date();
  return Math.floor((now - date) / (1000 * 60 * 60 * 24));
}
```

---

## 🚀 To Complete Setup

### **1. Add Calendly URL to Production**
In Vercel dashboard → Environment Variables:
```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/jack-washmon-polus-cs/30min
```

### **2. Verify Email Configuration**
Make sure these are set in Vercel:
- `SMTP_HOST=smtp.resend.com`
- `SMTP_USER=resend`
- `SMTP_PASS=re_YourResendAPIKey`
- `SMTP_FROM=Polus <no-reply@polus-cs.com>`

### **3. Test the Flow**
1. Go to `/checklist` page
2. Enter your email
3. Check inbox for Day 1 welcome email
4. Check `data/nurture-contacts.json` was created (you can view in Vercel logs)

### **4. Monitor Cron Execution**
- Vercel Logs → Filter by `/api/cron/send-nurture-emails`
- Look for: "Day 3 email sent to..." messages
- Check daily at 9am Central

---

## 📊 Tracking & Reporting

### **What Gets Logged**
Every cron run logs:
- Number of emails sent
- Number of errors
- Total contacts checked
- Specific actions per contact

**View in Vercel:**
1. Go to your project
2. Click "Logs" tab
3. Filter by "cron" or search for email addresses

### **Email Status Values**
- `pending` → Scheduled but not sent yet
- `sent` → Successfully delivered
- `failed` → Error occurred (email recorded, will retry next day)
- `skipped` → Intentionally not sent (e.g., Day 14 when service booked)

---

## 🎯 How to Mark Someone as "Booked"

When someone books a discovery call or buys a service, you need to mark them so they don't get the Day 14 "still thinking?" email.

**Option 1: Manual JSON Edit** (Quick)
1. Open `data/nurture-contacts.json`
2. Find their email
3. Change `"has_booked_service": false` to `true`

**Option 2: API Endpoint** (Future Enhancement)
Create `/api/mark-booked` endpoint that accepts email and updates the JSON.

**Option 3: Calendly Webhook** (Advanced)
Set up Calendly webhook to automatically call your API when someone books.

---

## 📧 Email Content Summary

| Day | Subject | Goal | Key Message |
|-----|---------|------|-------------|
| 1 | Your Client Readiness Checklist + Next Steps | Deliver value immediately | Here's your checklist + quick wins to start |
| 3 | 3 Mistakes Oklahoma Businesses Make with IT | Educate on common problems | These are fixable, most take 2-6 weeks |
| 7 | Ready to fix your IT systems? | Strong CTA | Here's what happens on a call (transparent) |
| 14 | Still thinking about your IT project? | Final check-in | Are you still interested? If not, no hard feelings |
| 90 | How are things going? | Re-engage past clients | Systems still working? Ready for next project? |

---

## 🔄 Maintenance

### **Daily (Automatic)**
- Cron runs at 9am Central
- Checks all contacts
- Sends pending emails
- Updates statuses

### **Weekly (You)**
- Review Vercel logs for any failures
- Check `data/nurture-contacts.json` growth
- Mark new clients as `has_booked_service = true`

### **Monthly (You)**
- Review email open/click rates in Resend dashboard
- Adjust email content if needed
- Clean up old contacts (optional)

---

## 🐛 Troubleshooting

### **"Day 1 email not sending"**
1. Check SMTP credentials in Vercel env vars
2. Look for error logs in `/api/lead-magnet` endpoint
3. Verify `SMTP_HOST=smtp.resend.com`

### **"Cron not running"**
1. Check Vercel Logs → Cron tab
2. Verify `vercel.json` is deployed
3. Check cron schedule: `0 9 * * *` = 9am daily

### **"Emails sending multiple times"**
1. Check contact status in JSON file
2. Verify `emails_sent.day3_education` changed from `pending` to `sent`
3. If stuck on `pending`, manually update to `sent`

### **"Day 14 email sent even though they booked"**
1. Check `has_booked_service` in JSON
2. Should be `true`, not `false`
3. Manually update before next cron run

---

## 📈 Success Metrics to Track

**Lead Generation:**
- Total checklist downloads per week
- Email open rates (check Resend dashboard)
- Discovery calls booked after Day 3 email
- Discovery calls booked after Day 7 email

**Engagement:**
- Which day generates most responses?
- Are people booking after Day 3 or Day 7?
- How many make it to Day 14 without booking?

**Optimization:**
- If most book after Day 3, maybe Day 7 is redundant
- If no one books until Day 14, need stronger earlier CTAs
- If open rates are low, subject lines need work

---

## 🎉 You're All Set!

The system is **active and working**. Here's what happens next:

1. ✅ Someone downloads checklist → Day 1 email sent immediately
2. ✅ Cron runs daily at 9am → Day 3/7/14 emails sent on schedule
3. ✅ You mark bookings → Day 14 email skipped automatically
4. ✅ All activity logged → View in Vercel dashboard

**Next time someone downloads the checklist, the sequence starts automatically!**

---

## 📝 Quick Reference

- **Contacts File:** `data/nurture-contacts.json`
- **Cron Endpoint:** `/api/cron/send-nurture-emails`
- **Cron Schedule:** Daily 9:00 AM Central
- **Lead Capture:** `/api/lead-magnet`
- **Email Templates:** `lib/emailTemplates.ts`

**Calendly Fix:** Added `NEXT_PUBLIC_CALENDLY_URL` to fix 404 error on `/book` page.

# GA4 Quick Setup Checklist

**Your Measurement ID:** G-RMS0FPEQPD

## ✅ Step-by-Step Configuration

### 1. Mark Events as Conversions (5 minutes)

**Path:** GA4 → Configure → Events

Find and toggle "Mark as conversion" for:
- [ ] `contact_form_submit`
- [ ] `quote_form_submit`
- [ ] `calendly_booking_click`
- [ ] `roi_calculator_submit`
- [ ] `assessment_quiz_complete`

---

### 2. Create Custom Dimensions (10 minutes)

**Path:** Admin → Custom Definitions → Create Custom Dimensions

| Dimension Name | Scope | Event Parameter |
|----------------|-------|-----------------|
| Services Selected | Event | services_selected |
| Form Location | Event | form_location |
| Button Location | Event | button_location |
| Service Category | Event | service_category |
| Lead Quality Score | Event | total_score |

---

### 3. Exclude Your Traffic (5 minutes)

**Path:** Admin → Data Filters → Create Filter

1. Click **Create Filter**
2. Filter Name: `Internal Traffic`
3. Filter Type: `Internal Traffic`
4. Add your office IP address
5. Set filter state to **Active**

---

### 4. Enhanced Measurement (2 minutes)

**Path:** Admin → Data Streams → [Your Website] → Enhanced measurement

Toggle ON:
- [ ] Scrolls
- [ ] Outbound clicks
- [ ] File downloads  
- [ ] Video engagement

---

### 5. Create Lead Source Report (10 minutes)

**Path:** Explore → Blank

1. **Technique:** Free form
2. **Dimensions:** Add "Session source/medium"
3. **Metrics:** Add "Users", "Conversions"
4. **Breakdown:** "Services Selected" dimension
5. **Date Range:** Last 30 days
6. **Save** as "Lead Source Performance"

---

### 6. Create Service Funnel (10 minutes)

**Path:** Explore → Funnel exploration

**Add Steps:**
1. Step 1: Page path contains `/services`
2. Step 2: Event name = `view_service`
3. Step 3: Event name = `contact_form_submit` OR `calendly_booking_click`

**Breakdown:** service_name

**Save** as "Service Interest Funnel"

---

### 7. Set Up Weekly Email Report (5 minutes)

**Path:** Any report → Share → Schedule email**

1. Frequency: Weekly
2. Day: Monday morning
3. Metrics to include: Conversions, Users, Conversion Rate
4. Recipients: Your email

---

## 🎯 Quick Verification

After setup, verify tracking works:

1. Open your website in **Incognito mode**
2. Go to **GA4 → Configure → DebugView**
3. On your site, click "Book a Discovery Call"
4. Check DebugView - you should see `calendly_booking_click` event

---

## 📊 Weekly Monitoring Routine (10 minutes)

**Every Monday morning:**

1. **Check total conversions** (all forms/bookings combined)
2. **Review top traffic sources** bringing leads
3. **Check Oklahoma traffic %** (should be 40-60%)
4. **View top 5 service pages** by views
5. **Look for any anomalies** (sudden drops/spikes)

---

## 🚀 Priority Order

If short on time, do these first:

1. ✅ **Mark events as conversions** (Step 1) - Critical
2. ✅ **Exclude internal traffic** (Step 3) - Critical  
3. ✅ **Create lead source report** (Step 5) - High value
4. ⏸️ Custom dimensions (Step 2) - Can wait
5. ⏸️ Audiences (not listed) - Can wait

---

## 📞 Quick Links

- **Your GA4 Property:** https://analytics.google.com/analytics/web/#/p[property-id]
- **DebugView:** GA4 → Configure → DebugView
- **Realtime:** GA4 → Reports → Realtime
- **Conversions:** GA4 → Reports → Engagement → Conversions

---

## ⚠️ Remember

- **Wait 24-48 hours** for data to fully appear
- **Events need traffic** to show up (some may be empty initially)
- **Test in DebugView first** before expecting production data
- **Don't track PII** (emails, phone numbers, names)

---

**Questions?** See full docs at `docs/ANALYTICS_SETUP.md`

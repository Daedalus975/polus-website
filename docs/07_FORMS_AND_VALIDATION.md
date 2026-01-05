# Forms & Validation (v1)

## A) Lead Magnet
- Field: email (required)
- POST `/api/lead-magnet`
- Response:
  - success returns downloadUrl (PDF) and triggers `lead_magnet_download` event
  - error shows a friendly message

## B) Contact / Quote
Fields:
- name (required)
- email (required)
- company (optional)
- industry (optional dropdown)
- team_size (optional dropdown)
- primary_need (optional multi-select)
- urgency (optional dropdown)
- message (required; min 20 chars)

Anti-spam:
- honeypot field (hidden)
- CAPTCHA placeholder acceptable in v1 (wire later)

## `/api/contact`
- Validate with Zod
- Send email to BUSINESS_INBOX_EMAIL via SMTP (nodemailer)
- If SMTP not configured: return friendly error

Auto-reply (recommended):
Subject: We received your message  
Body: Thanks for reaching out. We’ll reply within 1 business day.  
Fastest path: book a free discovery call here: {BOOKING_URL}

# Stripe & Payments (v1)

Use **Stripe Payment Links**:
- Deposit payment link
- Invoice payment link
- Optional package purchase links

Env vars:
- NEXT_PUBLIC_STRIPE_DEPOSIT_URL
- NEXT_PUBLIC_STRIPE_INVOICE_URL
- NEXT_PUBLIC_STRIPE_PACKAGES_JSON (optional)

`/pay` page requirements:
- Two primary buttons: Pay Deposit, Pay Invoice
- Optional package list if JSON provided
- Text: “Guest checkout supported. No login required.”

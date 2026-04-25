# Copilot Build Pack — Polus LLC Website

This folder is the **single source of truth** for GitHub Copilot.

## How to use with GitHub Copilot (VS Code)
1. Open your repo in VS Code.
2. Copy this `/docs` folder into the repo root.
3. Open Copilot Chat and paste the prompt from **docs/00_COPILOT_PROMPT.md**.
4. Ask Copilot to work in **small commits** and follow **docs/11_DEFINITION_OF_DONE.md**.
5. If Copilot suggests changes that conflict with `/docs`, tell it:
   - “The docs are the source of truth. Update the code, not the docs.”

## Stack (decision)
- Next.js (App Router) + TypeScript
- TailwindCSS
- Sanity v3 (headless CMS for blog posts and case studies)
- Forms: server route + email provider (SMTP or Resend)
- Payments: Stripe **Payment Links** (guest checkout)
- Analytics: Google Analytics 4 (G-RMS0FPEQPD)

## Hard constraints
- Microsoft 365 only (no Google Workspace).
- ITSM is **platform-agnostic** (do not position Jira as the focus).
- No compliance claims (HIPAA/SOC2/CMMC/etc) unless explicitly verified.

## What's included
- PRD, routes, copy deck, component spec, forms spec, Stripe wiring, SEO/analytics, feature flags, definition of done.
- **Blog system (April 2026):** Sanity CMS with 67 published posts, schemas for blog posts and case studies.

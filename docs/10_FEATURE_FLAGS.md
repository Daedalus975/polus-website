# Feature Flags (v1)

Create `src/config/featureFlags.ts`:
- BLOG_ENABLED=false
- RESOURCES_ENABLED=false
- TESTIMONIALS_ENABLED=false

Rules:
- Do not show blog/resources links in nav
- Disabled routes should redirect to `/` or 404

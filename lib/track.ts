type TrackProps = Record<string, unknown>;

export function track(event: string, props: TrackProps = {}) {
  // Replace with GA4 wiring if configured
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[track]", event, props);
  }
}

import { NextResponse } from "next/server";
import { z } from "zod";

const Schema = z.object({ email: z.string().email(), honeypot: z.string().optional() });

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  if (data.honeypot) return NextResponse.json({ ok: true });

  const parsed = Schema.safeParse(data);
  if (!parsed.success) return NextResponse.json({ error: "Validation failed" }, { status: 400 });

  // TODO: store email and/or email the checklist link.
  return NextResponse.json({ ok: true, downloadUrl: "/checklists/process-it-readiness-checklist.pdf" });
}

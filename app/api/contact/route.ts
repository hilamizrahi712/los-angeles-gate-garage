import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_URL = "https://formspree.io/f/mykaqjvo";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const isDiagnostic = data.source === "diagnostic-widget";

  const subject = isDiagnostic
    ? `[DIAGNOSTIC] ${data.severity?.toUpperCase()} — ${data.device_type} issue in ${data.city}`
    : `New estimate request — ${data.service ?? "General"} — ${data.name}`;

  const message = isDiagnostic
    ? [
        `Customer: ${data.name} | ${data.phone} | ${data.city}`,
        `Device: ${data.device_type}`,
        `Severity: ${data.severity}`,
        ``,
        `Reported symptoms:`,
        `  Noise:       ${data.noise}`,
        `  Response:    ${data.response}`,
        `  Maintenance: ${data.maintenance}`,
      ].join("\n")
    : data.message ?? "";

  const payload: Record<string, string> = {
    name: data.name,
    phone: data.phone,
    city: data.city ?? "",
    _subject: subject,
    message,
  };
  if (data.email) payload.email = data.email;
  if (data._replyto) payload._replyto = data._replyto;

  const res = await fetch(FORMSPREE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

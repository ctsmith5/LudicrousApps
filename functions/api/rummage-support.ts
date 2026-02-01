type Env = {
  RESEND_API_KEY?: string;
  SUPPORT_TO_EMAIL?: string;
  SUPPORT_FROM_EMAIL?: string;
};

type SupportPayload = {
  name: string;
  email: string;
  message: string;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function json(data: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json; charset=utf-8" },
    ...init,
  });
}

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const resendKey = ctx.env.RESEND_API_KEY;
  const to = ctx.env.SUPPORT_TO_EMAIL || "support@ludicrousapps.io";
  const from = ctx.env.SUPPORT_FROM_EMAIL || "Rummage Support <onboarding@resend.dev>";

  if (!isNonEmptyString(resendKey)) {
    return json(
      {
        ok: false,
        error:
          "Email service is not configured (missing RESEND_API_KEY). Use the mailto fallback.",
      },
      { status: 501 },
    );
  }

  let payload: SupportPayload;
  try {
    payload = (await ctx.request.json()) as SupportPayload;
  } catch {
    return json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  if (!isNonEmptyString(payload?.name)) {
    return json({ ok: false, error: "Missing name." }, { status: 400 });
  }
  if (!isNonEmptyString(payload?.email)) {
    return json({ ok: false, error: "Missing email." }, { status: 400 });
  }
  if (!isNonEmptyString(payload?.message)) {
    return json({ ok: false, error: "Missing message." }, { status: 400 });
  }

  const subject = `Rummage Support — ${payload.name}`;
  const text = [
    "New Rummage support message",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    "",
    payload.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${resendKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    return json(
      { ok: false, error: "Resend request failed.", details: errText },
      { status: 502 },
    );
  }

  return json({ ok: true });
};


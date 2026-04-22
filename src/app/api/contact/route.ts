import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name?.toString().trim() || "";
    const email = body.email?.toString().trim() || "";
    const subject = body.subject?.toString().trim() || "";
    const message = body.message?.toString().trim() || "";
    const company = body.company?.toString().trim() || "";

    if (company) {
      return Response.json({ ok: true });
    }

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Please fill out name, email, and message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    console.log("CONTACT_TO_EMAIL:", to);
    console.log("CONTACT_FROM_EMAIL:", from);
    console.log("RESEND_API_KEY exists:", !!apiKey);

    if (!to || !from || !apiKey) {
      return Response.json(
        { ok: false, error: "Server email settings are missing." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: subject || `New contact form message from ${name}`,
      text: `Name: ${name}
Email: ${email}
Subject: ${subject || "(No subject)"}

Message:
${message}`,
    });

    console.log("Resend data:", data);
    console.log("Resend error:", error);

    if (error) {
      return Response.json(
        { ok: false, error: `Failed to send message: ${error.message}` },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("CONTACT FORM ERROR:", err);

    return Response.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
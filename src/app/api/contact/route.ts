// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const mailToken = process.env.RESEND_API_KEY;
  const mailTo = process.env.MAIL_TO || "";

  const resend = new Resend(mailToken);

  const { name, phone, email, message } = await req.json();

  const res = await resend.emails.send({
    from: `Contact <${mailTo}>`,
    to: [mailTo],
    template: {
      id: "contact",
      variables: {
        name: name,
        message: message,
        email: email,
        phone: phone,
      },
    },
  });

  if (res.data == null) {
    return NextResponse.json({ status: 500 });
  }
  return NextResponse.json({ status: 200 });
}

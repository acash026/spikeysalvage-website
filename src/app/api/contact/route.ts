import { NextResponse } from "next/server";
import { getTransporter, ADMIN_EMAIL, PUBLIC_CONTACT_EMAIL } from "@/lib/mailer";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, email, phone, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { message: "All required fields must be filled", success: false },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address", success: false },
      { status: 400 }
    );
  }

  const adminEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #f97316; text-align: center;">New Contact Form Message</h2>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  `;

  const customerEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #f97316; text-align: center;">Thanks for Reaching Out!</h2>
      <p style="font-size: 16px; color: #333;">Hi ${name},</p>
      <p style="font-size: 16px; color: #666; line-height: 1.6;">
        Thank you for contacting Spikey Salvage. Our team has received your
        message and will get back to you within 24 hours.
      </p>
      <p style="color: #f97316; font-weight: bold;">We appreciate your business!</p>
    </div>
  `;

  try {
    await prisma.contactMessage.create({
      data: { name, email, phone: phone || null, subject, message },
    });
  } catch (error) {
    console.error("Error saving contact message to the database:", error);
  }

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Message: ${subject}`,
      html: adminEmailHtml,
      replyTo: email,
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thanks for contacting Spikey Salvage",
      html: customerEmailHtml,
      replyTo: PUBLIC_CONTACT_EMAIL,
    });

    return NextResponse.json({ message: "Message sent successfully", success: true });
  } catch (error) {
    console.error("Error sending contact message:", error);
    return NextResponse.json(
      { message: "Error sending message", success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { getTransporter, ADMIN_EMAIL, PUBLIC_CONTACT_EMAIL } from "@/lib/mailer";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, email, phone, year, make, model, partType } = await request.json();

  if (!name || !email || !phone || !year || !make || !model || !partType) {
    return NextResponse.json(
      { message: "All fields are required", success: false },
      { status: 400 }
    );
  }

  const adminEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #f97316; text-align: center;">New Auto Parts Request</h2>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-bottom: 15px;">Customer Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      </div>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-bottom: 15px;">Vehicle Information</h3>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Make:</strong> ${make}</p>
        <p><strong>Model:</strong> ${model}</p>
        <p><strong>Part Type:</strong> ${partType}</p>
      </div>
      <div style="text-align: center; margin-top: 30px;">
        <p style="color: #666; font-size: 14px;">Please respond to this customer as soon as possible.</p>
      </div>
    </div>
  `;

  const customerEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #f97316; text-align: center;">Thank You for Your Request!</h2>
      <div style="text-align: center; margin: 30px 0;">
        <p style="font-size: 18px; color: #333;">Hi ${name},</p>
        <p style="font-size: 16px; color: #666; line-height: 1.6;">
          Thank you for contacting Spikey Salvage about auto parts for your <strong>${year} ${make} ${model}</strong>.
        </p>
        <p style="font-size: 16px; color: #666; line-height: 1.6;">
          We have received your request for <strong>${partType}</strong> parts and our team will get back to you shortly with the best pricing and availability.
        </p>
      </div>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-bottom: 15px;">Your Request Summary</h3>
        <p><strong>Vehicle:</strong> ${year} ${make} ${model}</p>
        <p><strong>Part Type:</strong> ${partType}</p>
        <p><strong>Contact Email:</strong> ${email}</p>
        <p><strong>Contact Phone:</strong> ${phone}</p>
      </div>
      <div style="text-align: center; margin-top: 30px;">
        <p style="color: #666; font-size: 14px;">If you have any questions, please don't hesitate to contact us at ${PUBLIC_CONTACT_EMAIL}.</p>
        <p style="color: #f97316; font-weight: bold;">We appreciate your business!</p>
      </div>
    </div>
  `;

  try {
    await prisma.partRequest.create({
      data: { name, email, phone, year, make, model, partType },
    });
  } catch (error) {
    // Don't block the customer's quote over a DB hiccup — the admin still
    // gets the notification email below either way.
    console.error("Error saving part request to the database:", error);
  }

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: ADMIN_EMAIL,
      subject: `New Auto Parts Request - ${year} ${make} ${model}`,
      html: adminEmailHtml,
      replyTo: email,
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for your auto parts request",
      html: customerEmailHtml,
      replyTo: PUBLIC_CONTACT_EMAIL,
    });

    return NextResponse.json({ message: "Emails sent successfully", success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

// server.js or index.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://www.bigskysalvage.us",
  "https://bigskysalvage.us",
];

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // For development, allow localhost on any port
      if (process.env.MODE !== "production" && origin.includes("localhost")) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.error("Error verifying the email transporter:", error);
  } else {
    console.log("Email transporter is ready");
  }
});

// Basic route for testing
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});
app.get("/api/submissionhit", (req, res) => {
  res.json({ status: "OK", message: "Submission hit endpoint" });
});
// Email endpoint
app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, year, make, model, partType } = req.body;

  // Validation
  if (!name || !email || !phone || !year || !make || !model || !partType) {
    return res.status(400).json({
      message: "All fields are required",
      success: false,
    });
  }

  try {
    // Email to admin
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

    // Email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #f97316; text-align: center;">Thank You for Your Request!</h2>
        
        <div style="text-align: center; margin: 30px 0;">
          <p style="font-size: 18px; color: #333;">Hi ${name},</p>
          <p style="font-size: 16px; color: #666; line-height: 1.6;">
            Thank you for contacting us about auto parts for your <strong>${year} ${make} ${model}</strong>.
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
          <p style="color: #666; font-size: 14px;">
            If you have any questions, please don't hesitate to contact us.
          </p>
          <p style="color: #f97316; font-weight: bold;">
            We appreciate your business!
          </p>
        </div>
      </div>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "marketing.acceleraautoparts@gmail.com", // Replace with your actual admin email
      subject: `New Auto Parts Request - ${year} ${make} ${model}`,
      html: adminEmailHtml,
      replyTo: email,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for your auto parts request",
      html: customerEmailHtml,
    });

    res.status(200).json({
      message: "Emails sent successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      message: "Error sending email",
      success: false,
      error: error.message,
    });
  }
});

// Start server (only for local development)
if (process.env.MODE !== "PRODUCTION") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;

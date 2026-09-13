import { useState, type ChangeEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  X,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// Contact form data type
type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  type: ToastType;
  message: string;
  title: string;
}

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Toast functions
  const showToast = (type: ToastType, message: string) => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "info":
        toast.info(message);
        break;
      default:
        toast(message);
    }
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e?: any) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      showToast("error", "Please fill in all required fields.");

      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("error", "Please enter a valid email address.");

      setIsSubmitting(false);
      return;
    }

    try {
      // Send form data using emailjs
      // Install emailjs-com: npm install emailjs-com
      // And import: import emailjs from "emailjs-com";
      // (You can move the import to the top of the file)
      // import emailjs from "emailjs-com";
      // Or: import { send } from "emailjs-com";
      // For this code, we'll use the send function:
      // import { send } from "emailjs-com";
      // (Add this import at the top)

      // Replace these with your actual EmailJS service, template, and user IDs
      const SERVICE_ID = "service_b304oc2";
      const TEMPLATE_ID = "template_rktjcve";
      const PUBLIC_KEY = "u0jB2jWwkIFUZMmwc";

      // Prepare template params
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      // Dynamically import emailjs-com to avoid SSR issues if needed
      const { send } = await import("emailjs-com");

      await send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      showToast(
        "success",
        "Thank you for contacting us. Our team will get back to you within 24 hours."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      navigate("/thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);

      showToast(
        "error",
        "There was an error submitting your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        <a
          href="tel:+13214657213"
          className="text-blue-500 hover:underline"
          key="phone"
        >
          +1 (321) 465-7213
        </a>,
      ],
      color: "text-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        <a
          href="mailto:info@acceleraautoparts.com"
          className="text-green-500 hover:underline"
          key="email"
        >
          info@acceleraautoparts.com
        </a>,
      ],
      color: "text-green-500",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["987 West Side Ave, Jersey City, New Jersey 07306"],
      color: "text-red-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon-Fri: 8:00 AM - 6:00 PM",
        "Sat: 9:00 AM - 4:00 PM",
        "Sun: Closed",
      ],
      color: "text-orange-500",
    },
  ];

  const subjectOptions = [
    "General Inquiry",
    "Part Request",
    "Technical Support",
    "Warranty Claim",
    "Partnership Inquiry",
    "Pricing Information",
    "Installation Services",
    "Feedback/Complaint",
    "Other",
  ];

  const ToastIcon = ({ type }: { type: ToastType }) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case "info":
        return <MessageCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <MessageCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 transform transition-all duration-300 ease-in-out`}
          >
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ToastIcon type={toast.type} />
                </div>
                <div className="ml-3 w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {toast.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                    {toast.message}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    onClick={() => removeToast(toast.id)}
                    className="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Contact Our Support Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Our friendly part specialists will help you in getting quality auto
            parts at the best price
          </p>
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-orange-500 dark:text-orange-400">
              Supreme Auto Parts LLC
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Your trusted partner for premium automotive parts
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-orange-500" />
                Get In Touch
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${info.color}`}
                    >
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-gray-600 dark:text-gray-300 text-sm"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                Our Location
              </h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?ll=51.503186,-0.119519&z=10&t=m&hl=en-US&gl=US&mapclient=embed&cid=4796882358840715922&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="dark:grayscale dark:invert dark:opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Send className="w-6 h-6 mr-2 text-orange-500" />
                Send us a Message
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      {subjectOptions.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell us how we can help you with your auto parts needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>SENDING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  How long does shipping take?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Standard shipping takes 3-5 business days. Express shipping is
                  available for urgent orders with next-day delivery options.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Do you offer warranties on parts?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Yes, all our parts come with manufacturer warranties. We also
                  offer extended warranties and guarantee the quality of every
                  part we sell.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We accept all major credit cards, PayPal, bank transfers, and
                  offer financing options for larger purchases.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Can I return parts if they don't fit?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Yes, we have a 30-day return policy for unused parts in
                  original packaging. We also offer free return shipping for our
                  mistakes.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Do you offer installation services?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We partner with certified mechanics in your area and can
                  provide installation referrals and technical support.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  How do I find the right part for my vehicle?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Our part specialists can help you identify the correct parts
                  using your VIN number, vehicle make/model, or existing part
                  numbers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-orange-100 text-lg mb-6">
            Our expert team is ready to help you find the perfect auto parts for
            your vehicle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13214657213"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />

              <span>Call Now: +1 (321) 465-7213</span>
            </a>
            <a
              href="mailto:info@acceleraautoparts.com"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    </div>
  );
};

export default ContactUs;

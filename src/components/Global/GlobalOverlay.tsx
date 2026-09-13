import { useState } from "react";
import { FaPhone, FaFileInvoice } from "react-icons/fa";
import { AutoPartsModalForm } from "../Home/AutoPartsForm";

const GlobalOverlay = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Replace with your actual phone number and WhatsApp link
  const phoneNumber = "+1 (321) 465-7213";
  // const whatsappMessage = encodeURIComponent(
  //   "Hello, I'm interested in your auto parts. Please provide more details."
  // );
  // const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <>
      <div className="fixed z-50 pointer-events-none">
        {/* Sticky Contact Buttons - Desktop */}
        <div className="fixed z-40 hidden lg:flex flex-col gap-3 xl:gap-4 right-4 xl:right-6 top-1/2 -translate-y-1/2 pointer-events-auto">
          {/* Quote Button */}

          {/* WhatsApp Button */}
          {/* <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white rounded-full p-3 xl:p-4 shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            aria-label="Contact via WhatsApp"
          >
            <FaWhatsapp className="text-xl xl:text-2xl" />
          </a> */}

          {/* Phone Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="bg-blue-500 text-white rounded-full p-3 xl:p-4 shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            aria-label="Call us"
          >
            <FaPhone className="text-lg xl:text-xl" />
          </a>
        </div>

        {/* Mobile Get a Quote Button - Bottom Left with Animation */}
        <div className="fixed z-40  bottom-4 left-2 pointer-events-auto">
          <button
            onClick={() => setModalOpen(true)}
            className="relative bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg hover:from-orange-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 overflow-hidden group"
            aria-label="Get a quote"
          >
            {/* Animated Background Shimmer */}
            <div className="absolute inset-0 -skew-x-12 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer group-hover:translate-x-full transition-transform duration-1000"></div>

            {/* Pulsing Ring Animation */}
            <div className="absolute inset-0 rounded-full bg-orange-400/30 animate-ping"></div>

            {/* Icon */}
            <FaFileInvoice className="relative text-sm sm:text-base z-10" />

            {/* Text with Gradient */}
            <span className="relative text-xs sm:text-sm font-semibold z-10 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Get a Quote
            </span>

            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-full border-2 border-orange-300/50 animate-pulse"></div>
          </button>
        </div>

        {/* Mobile Contact Buttons - Bottom Center */}
        <div className="fixed z-40 lg:hidden bottom-2 left-1/2 -translate-x-1/2 pointer-events-auto">
          <div className="flex gap-2 sm:gap-3 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg border border-gray-200">
            {/* WhatsApp Button */}
            {/* <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white rounded-full p-2 sm:p-2.5 md:p-3 shadow-sm hover:bg-green-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
              aria-label="Contact via WhatsApp"
            >
              <FaWhatsapp className="text-lg sm:text-lg md:text-xl" />
            </a> */}

            {/* Phone Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="bg-blue-500 text-white rounded-full p-2 sm:p-2.5 md:p-3 shadow-sm hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
              aria-label="Call us"
            >
              <FaPhone className="text-lg sm:text-base md:text-lg" />
            </a>
          </div>
        </div>
      </div>
      <AutoPartsModalForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      {/* Custom CSS for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default GlobalOverlay;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AutoPartsModalForm } from "../Home/AutoPartsForm";
const Footer = () => {
  // Set darkMode to false by default, or replace with your actual logic
  const [darkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={
                  darkMode
                    ? "/assets/logo/logo-light.png"
                    : "/assets/logo/logo-dark.png"
                }
                alt="Accelera Auto Parts Logo"
                className="w-20 h-20 object-contain"
              />
              <span className="ml-2 text-lg font-bold">
                Accelera <span className="text-orange-500">Auto Parts</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for high-quality used auto parts. We provide
              OEM-grade components with the best deals in the market.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/12019845730"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/used-auto-parts"
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Used Auto Parts
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setModalOpen(true);
                  }}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Free Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Parts Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Parts Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/used-auto-parts/used-engines"
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Used Engines
                </Link>
              </li>
              <li>
                <Link
                  to="/used-auto-parts/used-transmissions"
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Used Transmissions
                </Link>
              </li>
              <li>
                <Link
                  to="/used-auto-parts/used-wheels"
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Used Wheels
                </Link>
              </li>
              <li>
                <Link
                  to="/used-auto-parts/used-ac-compressor"
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Used AC Compressor
                </Link>
              </li>
              <li>
                <Link
                  to="/used-auto-parts/used-headlight"
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Used Headlight
                </Link>
              </li>
              <li>
                <Link
                  to="/used-auto-parts/used-radiator"
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Used Radiator
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Phone:{" "}
                <a
                  href="tel:+1201-584-5667"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  +1 (321) 465-7213
                </a>
              </li>
              <li className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:info@acceleraautoparts.com"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  info@acceleraautoparts.com
                </a>
              </li>
              <li className="text-gray-400">
                Address:{" "}
                <span className="hover:text-orange-500 transition-colors duration-200">
                  987 west side Ave jersey city new jersey 07306
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Accelera Auto Parts. All rights
          reserved.
        </div>
        <div className="mt-4 text-center font-bold">
          <p className="text-white text-sm">
            Distributed by{" "}
            <a
              href="https://webhooksstudio.vercel.app/"
              target="_blank"
              className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Webhooks Studio
            </a>
          </p>
          <p className="text-white text-sm">
            Developed by{" "}
            <a
              href="https://charanraj-portfolio.vercel.app/"
              target="_blank"
              className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
            >
              Charanraj
            </a>
          </p>
        </div>
      </div>
      <AutoPartsModalForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;

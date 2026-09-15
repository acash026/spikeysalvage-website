"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { AutoPartsModalForm } from "../Home/AutoPartsForm";
import { siteConfig } from "@/lib/site-config";
import { PARTS } from "@/data/parts";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const featuredParts = PARTS.slice(0, 6);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/assets/logo/spikey-salvage-logo-dark-bg.png"
                alt="Spikey Salvage Logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
                unoptimized
              />
            </div>
            <p className="text-gray-400 mb-1">{siteConfig.parentTagline}</p>
            <p className="text-gray-400 mb-4">{siteConfig.chainTagline}</p>
            <p className="text-gray-400 mb-4">
              Your trusted partner for high-quality used auto parts. We provide
              OEM-grade components with the best deals in the market.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" onClick={handleLinkClick} className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" onClick={handleLinkClick} className="text-gray-400 hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/used-auto-parts" onClick={handleLinkClick} className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Used Auto Parts
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleLinkClick} className="text-gray-400 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
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
              {featuredParts.map((part) => (
                <li key={part.slug}>
                  <Link
                    href={`/used-auto-parts/${part.slug}`}
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {part.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Phone:{" "}
                <a href={siteConfig.phoneHref} className="hover:text-primary transition-colors duration-200">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-gray-400">
                Email:{" "}
                <a href={`mailto:${siteConfig.publicEmail}`} className="hover:text-primary transition-colors duration-200">
                  {siteConfig.publicEmail}
                </a>
              </li>
              <li className="text-gray-400">
                Address:{" "}
                <span>{siteConfig.address.full}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Spikey Salvage. All rights reserved.
        </div>
      </div>
      <AutoPartsModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
};

export default Footer;

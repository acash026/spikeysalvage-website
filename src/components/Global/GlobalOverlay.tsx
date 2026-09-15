"use client";

import { useState } from "react";
import { FaPhone, FaFileInvoice } from "react-icons/fa";
import { AutoPartsModalForm } from "../Home/AutoPartsForm";
import { siteConfig } from "@/lib/site-config";

const GlobalOverlay = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="fixed z-50 pointer-events-none">
        {/* Sticky Contact Buttons - Desktop */}
        <div className="fixed z-40 hidden lg:flex flex-col gap-3 right-4 xl:right-6 top-1/2 -translate-y-1/2 pointer-events-auto">
          <a
            href={siteConfig.phoneHref}
            className="bg-primary text-primary-foreground rounded-full p-3.5 shadow-md hover:bg-primary/90 transition-colors flex items-center justify-center"
            aria-label="Call us"
          >
            <FaPhone className="text-lg" />
          </a>
        </div>

        {/* Mobile Quote + Call - stacked bottom-left, clear of the chat widget's bottom-right corner */}
        <div className="fixed z-40 lg:hidden bottom-5 left-3 flex flex-col items-start gap-2.5 pointer-events-auto">
          <a
            href={siteConfig.phoneHref}
            className="bg-primary text-primary-foreground rounded-full p-3 shadow-md hover:bg-primary/90 transition-colors flex items-center justify-center"
            aria-label="Call us"
          >
            <FaPhone className="text-base" />
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-primary text-primary-foreground rounded-full px-4 py-2.5 shadow-md hover:bg-primary/90 transition-colors flex items-center gap-2"
            aria-label="Get a quote"
          >
            <FaFileInvoice className="text-sm" />
            <span className="text-xs font-semibold">Get a Quote</span>
          </button>
        </div>
      </div>
      <AutoPartsModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default GlobalOverlay;

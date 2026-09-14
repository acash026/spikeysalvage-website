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
            className="bg-gray-900 dark:bg-gray-800 text-white rounded-full p-3.5 shadow-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
            aria-label="Call us"
          >
            <FaPhone className="text-lg" />
          </a>
        </div>

        {/* Mobile Get a Quote Button - Bottom Left */}
        <div className="fixed z-40 bottom-4 left-2 pointer-events-auto">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-primary text-primary-foreground rounded-full px-4 py-2.5 sm:px-6 sm:py-3 shadow-md hover:bg-primary/90 transition-colors flex items-center gap-2"
            aria-label="Get a quote"
          >
            <FaFileInvoice className="text-sm sm:text-base" />
            <span className="text-xs sm:text-sm font-semibold">Get a Quote</span>
          </button>
        </div>

        {/* Mobile Contact Buttons - Bottom Center */}
        <div className="fixed z-40 lg:hidden bottom-2 left-1/2 -translate-x-1/2 pointer-events-auto">
          <div className="flex gap-2 bg-white dark:bg-gray-900 rounded-full p-2 shadow-md border border-gray-200 dark:border-gray-700">
            <a
              href={siteConfig.phoneHref}
              className="bg-gray-900 dark:bg-gray-700 text-white rounded-full p-2.5 flex items-center justify-center"
              aria-label="Call us"
            >
              <FaPhone className="text-base" />
            </a>
          </div>
        </div>
      </div>
      <AutoPartsModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default GlobalOverlay;

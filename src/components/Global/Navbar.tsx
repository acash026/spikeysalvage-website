"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AutoPartsModalForm } from "../Home/AutoPartsForm";
import { siteConfig } from "@/lib/site-config";
import { PARTS } from "@/data/parts";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = () => setIsDropdownOpen(!isDropdownOpen);
  const handleDropdownMouseEnter = () => setIsDropdownOpen(true);
  const handleDropdownMouseLeave = () => setIsDropdownOpen(false);
  const handleMobileDropdownClick = () =>
    setIsMobileDropdownOpen(!isMobileDropdownOpen);

  const isActiveLink = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const isUsedAutoPartsActive = () => pathname.startsWith("/used-auto-parts");

  const getLinkClasses = (path: string) => {
    const baseClasses =
      "px-3 py-2 text-sm font-medium transition-colors duration-200";
    const activeClasses = "text-primary hover:text-primary/80";
    const inactiveClasses =
      "text-gray-700 dark:text-gray-300 hover:text-primary";
    return `${baseClasses} ${isActiveLink(path) ? activeClasses : inactiveClasses}`;
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/logo/spikey-salvage-logo.png"
                  alt="Spikey Salvage Logo"
                  width={96}
                  height={48}
                  className="w-24 h-12 object-contain dark:hidden"
                  priority
                />
                <Image
                  src="/assets/logo/spikey-salvage-logo-dark-bg.png"
                  alt="Spikey Salvage Logo"
                  width={96}
                  height={48}
                  className="hidden w-24 h-12 object-contain dark:block"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" onClick={handleLinkClick} className={getLinkClasses("/")}>
                  HOME
                </Link>
                <Link href="/aboutus" onClick={handleLinkClick} className={getLinkClasses("/aboutus")}>
                  ABOUT US
                </Link>
                <Link href="/contact" onClick={handleLinkClick} className={getLinkClasses("/contact")}>
                  CONTACT
                </Link>
                <div
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <button
                    onClick={handleDropdownClick}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                      isUsedAutoPartsActive()
                        ? "text-primary hover:text-primary/80"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary"
                    }`}
                  >
                    USED AUTO PARTS
                    <svg
                      className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`absolute left-0 mt-0 w-52 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-600 transition-all duration-200 ${
                      isDropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    style={{ top: "calc(100% + 1px)" }}
                  >
                    <div className="py-2 max-h-96 overflow-y-auto">
                      <Link
                        href="/used-auto-parts"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-primary transition-colors duration-150"
                      >
                        Used Auto Parts
                      </Link>
                      {PARTS.map((part) => (
                        <Link
                          key={part.slug}
                          href={`/used-auto-parts/${part.slug}`}
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-primary transition-colors duration-150"
                        >
                          {part.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={siteConfig.phoneHref}
                className="text-gray-700 dark:text-gray-300 hover:text-primary flex items-center transition-colors duration-200"
              >
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {siteConfig.phone}
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              >
                FREE QUOTE
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {darkMode ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <a
                href={siteConfig.phoneHref}
                aria-label="Call us"
                className="p-2 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
                  />
                </svg>
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {darkMode ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="text-gray-700 dark:text-gray-300 hover:text-primary p-2"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`block px-3 py-2 font-medium transition-colors duration-200 ${
                  isActiveLink("/") ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary"
                }`}
              >
                HOME
              </Link>
              <Link
                href="/aboutus"
                onClick={handleLinkClick}
                className={`block px-3 py-2 font-medium transition-colors duration-200 ${
                  isActiveLink("/aboutus") ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary"
                }`}
              >
                ABOUT US
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className={`block px-3 py-2 font-medium transition-colors duration-200 ${
                  isActiveLink("/contact") ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary"
                }`}
              >
                CONTACT
              </Link>

              <div>
                <button
                  onClick={handleMobileDropdownClick}
                  className={`w-full flex items-center justify-between px-3 py-2 font-medium transition-colors duration-200 ${
                    isUsedAutoPartsActive() ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary"
                  }`}
                >
                  USED AUTO PARTS
                  <svg
                    className={`h-4 w-4 transform transition-transform duration-200 ${
                      isMobileDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileDropdownOpen ? "max-h-96 opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 space-y-1 py-2">
                    {PARTS.map((part) => (
                      <Link
                        key={part.slug}
                        href={`/used-auto-parts/${part.slug}`}
                        onClick={handleLinkClick}
                        className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-150"
                      >
                        {part.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-3 py-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  FREE QUOTE
                </button>
              </div>

              <div className="px-3 py-2">
                <a
                  href={siteConfig.phoneHref}
                  className="w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-primary px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      <AutoPartsModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AutoPartsModalForm } from "../Home/AutoPartsForm";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location.pathname]);

  // Desktop dropdown handlers
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  // Mobile dropdown handlers
  const handleMobileDropdownClick = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Helper function to determine if a link is active
  const isActiveLink = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Helper function to determine if used auto parts section is active
  const isUsedAutoPartsActive = () => {
    return location.pathname.startsWith("/used-auto-parts");
  };

  // Helper function to get link classes
  const getLinkClasses = (path: string) => {
    const baseClasses =
      "px-3 py-2 text-sm font-medium transition-colors duration-200";
    const activeClasses = "text-orange-500 hover:text-orange-600";
    const inactiveClasses =
      "text-gray-700 dark:text-gray-300 hover:text-orange-500";

    return `${baseClasses} ${
      isActiveLink(path) ? activeClasses : inactiveClasses
    }`;
  };

  // Handle link clicks - scroll to top and close dropdowns
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
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <Link to="/">
                    <img
                      src={
                        darkMode
                          ? "/assets/logo/logo-dark.png"
                          : "/assets/logo/logo-light.png"
                      }
                      alt="Accelera Auto Parts Logo"
                      className="w-24 h-12 object-contain"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className={getLinkClasses("/")}
                >
                  HOME
                </Link>
                <Link
                  to="/aboutus"
                  onClick={handleLinkClick}
                  className={getLinkClasses("/aboutus")}
                >
                  ABOUT US
                </Link>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className={getLinkClasses("/contact")}
                >
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
                        ? "text-orange-500 hover:text-orange-600"
                        : "text-gray-700 dark:text-gray-300 hover:text-orange-500"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`absolute left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-600 transition-all duration-200 ${
                      isDropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    style={{
                      top: "calc(100% + 1px)", // Ensures the dropdown is positioned right below the button
                    }}
                  >
                    <div className="py-2">
                      <Link
                        to="/used-auto-parts"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 transition-colors duration-150"
                      >
                        Used Auto Parts
                      </Link>
                      <Link
                        to="/used-auto-parts/used-engines"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 transition-colors duration-150"
                      >
                        Used Engines
                      </Link>
                      <Link
                        to="/used-auto-parts/used-transmissions"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 transition-colors duration-150"
                      >
                        Used Transmissions
                      </Link>
                      <Link
                        to="/used-auto-parts/used-wheels"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 transition-colors duration-150"
                      >
                        Used Wheels
                      </Link>
                      <Link
                        to="/used-auto-parts/drive-shaft"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 transition-colors duration-150"
                      >
                        Drive Shaft
                      </Link>
                      <Link
                        to="/used-auto-parts/used-ac-compressor"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 transition-colors duration-150"
                      >
                        Used AC Compressor
                      </Link>
                      <Link
                        to="/used-auto-parts/used-headlight"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 transition-colors duration-150"
                      >
                        Used Headlight
                      </Link>
                      <Link
                        to="/used-auto-parts/used-transfer-case"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 transition-colors duration-150"
                      >
                        Used Transfer Case
                      </Link>
                      <Link
                        to="/used-auto-parts/used-axle-assembly"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 transition-colors duration-150"
                      >
                        Used Axle Assembly
                      </Link>
                      <Link
                        to="/used-auto-parts/used-radiator"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 transition-colors duration-150"
                      >
                        Used Radiator
                      </Link>
                      <Link
                        to="/used-auto-parts/used-steering-column"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 transition-colors duration-150"
                      >
                        Used Steering Column
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+1201-584-5667"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 flex items-center transition-colors duration-200"
              >
                <svg
                  className="h-4 w-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1 (321) 465-7213
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              >
                FREE QUOTE
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {darkMode ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
              <a href="tel:+13214657213" className="p-2 rounded-full bg-orange-500 text-white flex items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
  </svg>
</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {darkMode ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
                to="/"
                onClick={handleLinkClick}
                className={`block px-3 py-2 font-medium transition-colors duration-200 ${
                  isActiveLink("/")
                    ? "text-orange-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-orange-500"
                }`}
              >
                HOME
              </Link>
              <Link
                to="/aboutus"
                onClick={handleLinkClick}
                className={`block px-3 py-2 font-medium transition-colors duration-200 ${
                  isActiveLink("/aboutus")
                    ? "text-orange-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-orange-500"
                }`}
              >
                ABOUT US
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className={`block px-3 py-2 font-medium transition-colors duration-200 ${
                  isActiveLink("/contact")
                    ? "text-orange-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-orange-500"
                }`}
              >
                CONTACT
              </Link>

              {/* Mobile dropdown for Used Auto Parts */}
              <div>
                <button
                  onClick={handleMobileDropdownClick}
                  className={`w-full flex items-center justify-between px-3 py-2 font-medium transition-colors duration-200 ${
                    isUsedAutoPartsActive()
                      ? "text-orange-500"
                      : "text-gray-700 dark:text-gray-300 hover:text-orange-500"
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileDropdownOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 space-y-1 py-2">
                    <Link
                      to="/used-auto-parts/used-engines"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-150"
                    >
                      Used Engines
                    </Link>
                    <Link
                      to="/used-auto-parts/used-transmissions"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-150"
                    >
                      Used Transmissions
                    </Link>
                    <Link
                      to="/used-auto-parts/used-wheels"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-150"
                    >
                      Used Wheels
                    </Link>
                    <Link
                      to="/used-auto-parts/drive-shaft"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-150"
                    >
                      Drive Shaft
                    </Link>
                    <Link
                      to="/used-auto-parts/used-ac-compressor"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-150"
                    >
                      Used AC Compressor
                    </Link>
                    <Link
                      to="/used-auto-parts/used-headlight"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-150"
                    >
                      Used Headlight
                    </Link>
                    <Link
                      to="/used-auto-parts/used-transfer-case"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-150"
                    >
                      Used Transfer Case
                    </Link>
                    <Link
                      to="/used-auto-parts/used-axle-assembly"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-150"
                    >
                      Used Axle Assembly
                    </Link>
                    <Link
                      to="/used-auto-parts/used-radiator"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-150"
                    >
                      Used Radiator
                    </Link>
                    <Link
                      to="/used-auto-parts/used-steering-column"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-150"
                    >
                      Used Steering Column
                    </Link>
                  </div>
                </div>
              </div>

              <div className="px-3 py-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  FREE QUOTE
                </button>
              </div>

              <div className="px-3 py-2">
                <a
                  href="tel:+1201-584-5667"
                  className="w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-orange-500 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +1 (321) 465-7213
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      <AutoPartsModalForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Navbar;

const BrandsWeDeal = () => {
  const brands = [
    {
      image: "/images/brands/toyota.png",
      name: "Toyota",
    },
    {
      image: "/images/brands/ford.png",
      name: "Ford",
    },
    {
      image: "/images/brands/chevrolet.png",
      name: "Chevrolet",
    },
    {
      image: "/images/brands/bmw.png",
      name: "BMW",
    },
    {
      image: "/images/brands/mercedes-benz.png",
      name: "Mercedes-Benz",
    },
    {
      image: "/images/brands/audi.png",
      name: "Audi",
    },
    {
      image: "/images/brands/lexus.png",
      name: "Lexus",
    },
    {
      image: "/images/brands/nissan.png",
      name: "Nissan",
    },
    {
      image: "/images/brands/hyundai.png",
      name: "Hyundai",
    },
    {
      image: "/images/brands/kia.png",
      name: "Kia",
    },
    {
      image: "/images/brands/subaru.png",
      name: "Subaru",
    },
  ];

  // Create extended array for continuous sliding
  const extendedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Responsive Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            <span className="text-orange-500 dark:text-orange-400">
              Some Brands
            </span>{" "}
            We Deal For
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-md sm:max-w-2xl md:max-w-3xl mx-auto">
            We specialize in premium used auto parts from the world's leading
            automotive manufacturers. Every part is carefully inspected and
            tested to meet our high-quality standards.
          </p>
        </div>

        {/* Sliding Logo Banner Container - Only this section has gradient overlays */}
        <div className="relative overflow-hidden">
          {/* First sliding row - left to right */}
          <div className="flex animate-scroll-right mb-6 sm:mb-8 hover:animate-pause">
            {extendedBrands.map((brand, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-1 xs:mx-2 sm:mx-3 md:mx-4 lg:mx-6 flex items-center justify-center group"
              >
                <div className="bg-white dark:bg-gray-700 rounded-full p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:scale-110 w-12 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 flex items-center justify-center border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 h-6 xs:h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 dark:brightness-90 dark:hover:brightness-110"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "none";
                      if (
                        img.nextSibling &&
                        img.nextSibling instanceof HTMLElement
                      ) {
                        img.nextSibling.style.display = "block";
                      }
                    }}
                  />
                  <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200 hidden">
                    {brand.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second sliding row - right to left */}
          <div className="flex animate-scroll-left mb-6 sm:mb-8 hover:animate-pause">
            {extendedBrands.map((brand, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-1 xs:mx-2 sm:mx-3 md:mx-4 lg:mx-6 flex items-center justify-center group"
              >
                <div className="bg-white dark:bg-gray-700 rounded-full p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:scale-110 w-12 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 flex items-center justify-center border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 h-6 xs:h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 dark:brightness-90 dark:hover:brightness-110"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "none";
                      if (
                        img.nextSibling &&
                        img.nextSibling instanceof HTMLElement
                      ) {
                        img.nextSibling.style.display = "block";
                      }
                    }}
                  />
                  <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200 hidden">
                    {brand.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect - Only applied to the sliding section */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-gray-50 dark:from-gray-900 via-gray-50/80 dark:via-gray-900/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-gray-50 dark:from-gray-900 via-gray-50/80 dark:via-gray-900/80 to-transparent"></div>
        </div>
      </div>

      {/* Call-to-action */}
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <p className="text-xs xs:text-sm sm:text-base text-gray-500 dark:text-gray-400">
          Looking for parts from your favorite brand? Contact us today!
        </p>
      </div>

      {/* Responsive CSS for animations and typography */}
      <style>{`
      @keyframes scroll-right {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0%);
        }
      }

      @keyframes scroll-left {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .animate-scroll-right {
        animation: scroll-right 25s linear infinite;
      }

      .animate-scroll-left {
        animation: scroll-left 20s linear infinite;
      }

      .animate-pause {
        animation-play-state: paused;
      }

      .animate-scroll-right:hover,
      .animate-scroll-left:hover {
        animation-play-state: paused;
      }

      * {
        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
      }

      .dark .shadow-lg {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
      }

      .dark .hover\\:shadow-2xl:hover {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      }

      .dark img {
        filter: brightness(0.9) contrast(1.1);
      }

      .dark img:hover {
        filter: brightness(1.1) contrast(1.2) grayscale(0);
      }

      /* Mobile-first responsive animations - faster on mobile */
      @media (max-width: 640px) {
        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
        }
        .animate-scroll-left {
          animation: scroll-left 12s linear infinite;
        }
      }

      /* Tablet animations */
      @media (min-width: 641px) and (max-width: 1024px) {
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
        .animate-scroll-left {
          animation: scroll-left 18s linear infinite;
        }
      }

      /* Desktop animations - slower for better visibility */
      @media (min-width: 1025px) {
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
      }

      /* Responsive font sizes for extra small screens */
      @media (max-width: 400px) {
        h2 {
          font-size: 1.25rem !important;
        }
        p {
          font-size: 0.95rem !important;
        }
      }

      /* Better spacing for mobile */
      @media (max-width: 640px) {
        .flex-shrink-0 {
          margin-left: 0.25rem;
          margin-right: 0.25rem;
        }
      }
      `}</style>
    </section>
  );
};

export default BrandsWeDeal;

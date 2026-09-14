import Image from "next/image";

const BrandsWeDeal = () => {
  const brands = [
    { image: "/images/brands/toyota.png", name: "Toyota" },
    { image: "/images/brands/ford.png", name: "Ford" },
    { image: "/images/brands/chevrolet.png", name: "Chevrolet" },
    { image: "/images/brands/bmw.png", name: "BMW" },
    { image: "/images/brands/mercedes-benz.png", name: "Mercedes-Benz" },
    { image: "/images/brands/audi.png", name: "Audi" },
    { image: "/images/brands/lexus.png", name: "Lexus" },
    { image: "/images/brands/nissan.png", name: "Nissan" },
    { image: "/images/brands/hyundai.png", name: "Hyundai" },
    { image: "/images/brands/kia.png", name: "Kia" },
    { image: "/images/brands/subaru.png", name: "Subaru" },
  ];

  const extendedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            <span className="text-primary">Some Brands</span> We Deal For
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-md sm:max-w-2xl md:max-w-3xl mx-auto">
            We specialize in premium used auto parts from the world&apos;s leading
            automotive manufacturers. Every part is carefully inspected and
            tested to meet our high-quality standards.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right mb-6 sm:mb-8 hover:animate-pause">
            {extendedBrands.map((brand, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-1 xs:mx-2 sm:mx-3 md:mx-4 lg:mx-6 flex items-center justify-center group"
              >
                <div className="bg-white dark:bg-gray-700 rounded-full p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-12 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 flex items-center justify-center border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={64}
                    height={64}
                    className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 h-6 xs:h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 dark:brightness-90 dark:hover:brightness-110"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex animate-scroll-left mb-6 sm:mb-8 hover:animate-pause">
            {extendedBrands.map((brand, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-1 xs:mx-2 sm:mx-3 md:mx-4 lg:mx-6 flex items-center justify-center group"
              >
                <div className="bg-white dark:bg-gray-700 rounded-full p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-12 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 flex items-center justify-center border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={64}
                    height={64}
                    className="w-6 xs:w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 h-6 xs:h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 dark:brightness-90 dark:hover:brightness-110"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-gray-50 dark:from-gray-900 via-gray-50/80 dark:via-gray-900/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-gray-50 dark:from-gray-900 via-gray-50/80 dark:via-gray-900/80 to-transparent"></div>
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <p className="text-xs xs:text-sm sm:text-base text-gray-500 dark:text-gray-400">
          Looking for parts from your favorite brand? Contact us today!
        </p>
      </div>

      <style>{`
      @keyframes scroll-right {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(0%); }
      }
      @keyframes scroll-left {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }
      .animate-scroll-right { animation: scroll-right 25s linear infinite; }
      .animate-scroll-left { animation: scroll-left 20s linear infinite; }
      .animate-scroll-right:hover, .animate-scroll-left:hover { animation-play-state: paused; }

      @media (max-width: 640px) {
        .animate-scroll-right { animation: scroll-right 15s linear infinite; }
        .animate-scroll-left { animation: scroll-left 12s linear infinite; }
        h2 { font-size: 1.5rem; }
        .flex-shrink-0 { margin-left: 0.25rem; margin-right: 0.25rem; }
      }
      @media (min-width: 641px) and (max-width: 1024px) {
        .animate-scroll-right { animation: scroll-right 20s linear infinite; }
        .animate-scroll-left { animation: scroll-left 18s linear infinite; }
      }
      `}</style>
    </section>
  );
};

export default BrandsWeDeal;

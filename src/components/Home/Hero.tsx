import { useState, useEffect, useCallback } from "react";
import { AutoPartsForm } from "./AutoPartsForm";
import { AutoPartsModalForm } from "./AutoPartsForm";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsImageLoaded] = useState<Record<number, boolean>>({});
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  // Generate image paths for 12 images
  const imageSlides = Array.from(
    { length: 12 },
    (_, i) => `/assets/images/accelera_hero_sliders/${i + 1}.jpg`
  );

  // Auto-slide functionality
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
  }, [imageSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + imageSlides.length) % imageSlides.length
    );
  }, [imageSlides.length]);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Preload images for smooth transitions
  useEffect(() => {
    imageSlides.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Image ${index + 1} loaded successfully:`, src);
        setIsImageLoaded((prev) => ({ ...prev, [index]: true }));
      };
      img.onerror = () => {
        console.error(`Image ${index + 1} failed to load:`, src);
        setImageError((prev) => ({ ...prev, [index]: true }));
      };
      img.src = src;
    });
  }, [imageSlides]);

  return (
    <div className="relative min-h-screen h-[120vh] overflow-hidden">
      {/* Image Carousel Background - Hidden on mobile (md and below) */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="relative w-full h-full">
          {imageSlides.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {imageError[index] && (
                // Fallback for failed images
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🏎️</div>
                    <h3 className="text-2xl font-bold mb-2">
                      Image Unavailable
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Slide {index + 1} failed to load
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70 opacity-40"></div>

        {/* Bottom gradient overlay for smooth flow */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 sm:h-56 md:h-64 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent dark:from-gray-950 dark:via-gray-900 dark:to-transparent"></div>
      </div>

      {/* Mobile Background - Enhanced gradient background for mobile */}
<div className="absolute inset-0 lg:hidden">
  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/30"></div>
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>
</div>
      {/* Carousel Navigation - Hidden on mobile */}
      <div className="absolute inset-y-0 left-4 items-center z-20 hidden lg:flex">
        <button
          onClick={prevSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 items-center z-20 hidden lg:flex">
        <button
          onClick={nextSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Carousel Dots - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-2 z-20 hidden lg:flex">
        {imageSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-orange-500 w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Mobile Hero Text - Visible only on mobile */}
        <div className="w-full text-white text-center lg:hidden px-4 pt-8 pb-6">
          <div className="max-w-sm mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
              Get the Best
              <br />
              <span className="text-orange-500">
                Used & Refurbished Auto Parts
              </span>
            </h1>
            <p className="text-gray-200 text-sm sm:text-base mb-4 leading-relaxed">
              Premium quality OEM parts at unbeatable prices. Thoroughly
              inspected and guaranteed.
            </p>
            {/* <div className="flex flex-col space-y-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Grade A Quality Guaranteed</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Thoroughly Inspected</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Best Market Prices</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Desktop Left Content - Hidden on mobile */}
        <div className="flex-1 text-white text-center xl:text-left mb-6 lg:mb-8 xl:mb-0 px-2 pt-20 sm:pt-24 lg:pt-32 xl:pt-0 hidden lg:block">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Find Well-Inspected OEM
            <br className="hidden sm:block" />
            Grade A Used Auto Parts With
            <br className="hidden sm:block" />
            <span className="text-orange-500">The Best Deals</span>
          </h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </button>
        </div>

        {/* Form Section */}
        <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-lg xl:ml-8 w-full lg:flex-none">
          {/* Mobile Form Layout */}
          <div className="lg:hidden w-full">
            <AutoPartsForm
              className="max-h-[60vh] overflow-y-auto w-full bg-white/95 backdrop-blur-sm rounded-lg shadow-xl"
              showTitle={true}
            />
          </div>

          {/* Desktop Form Layout */}
          <div className="hidden lg:block mt-16 xl:mt-0">
            <AutoPartsForm
              className="max-h-[100vh] sm:max-h-[70vh] lg:max-h-[80vh] overflow-y-auto"
              showTitle={true}
            />
          </div>
        </div>
      </div>

      <AutoPartsModalForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Hero;

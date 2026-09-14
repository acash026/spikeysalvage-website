"use client";

import { useState, useEffect, useCallback } from "react";
import { AutoPartsForm, AutoPartsModalForm } from "./AutoPartsForm";
import { siteConfig } from "@/lib/site-config";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const imageSlides = Array.from(
    { length: 12 },
    (_, i) => `/assets/images/hero-slides/${i + 1}.jpg`
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
  }, [imageSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + imageSlides.length) % imageSlides.length);
  }, [imageSlides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    imageSlides.forEach((src, index) => {
      const img = new window.Image();
      img.onerror = () => {
        setImageError((prev) => ({ ...prev, [index]: true }));
      };
      img.src = src;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative min-h-screen h-[120vh] overflow-hidden">
      {/* Image Carousel Background - Hidden on mobile */}
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
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🏎️</div>
                    <h3 className="text-2xl font-bold mb-2">Image Unavailable</h3>
                    <p className="text-gray-300 mb-4">Slide {index + 1} failed to load</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-black/70 opacity-40"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 sm:h-56 md:h-64 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent dark:from-gray-950 dark:via-gray-900 dark:to-transparent"></div>
      </div>

      {/* Mobile Background */}
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
          aria-label="Previous slide"
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 items-center z-20 hidden lg:flex">
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-2 z-20 hidden lg:flex">
        {imageSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Mobile Hero Text */}
        <div className="w-full text-white text-center lg:hidden px-4 pt-8 pb-6">
          <div className="max-w-sm mx-auto">
            <p className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs text-orange-300 mb-3">
              {siteConfig.parentTagline}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
              Get the Best
              <br />
              <span className="text-primary">Used &amp; Refurbished Auto Parts</span>
            </h1>
            <p className="text-gray-200 text-sm sm:text-base mb-4 leading-relaxed">
              Premium quality OEM parts at unbeatable prices. Thoroughly inspected and guaranteed.
            </p>
          </div>
        </div>

        {/* Desktop Left Content */}
        <div className="flex-1 text-white text-center xl:text-left mb-6 lg:mb-8 xl:mb-0 px-2 pt-20 sm:pt-24 lg:pt-32 xl:pt-0 hidden lg:block">
          <p className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-orange-300 mb-5">
            {siteConfig.parentTagline} &mdash; {siteConfig.chainTagline}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Find Well-Inspected OEM
            <br className="hidden sm:block" />
            Grade A Used Auto Parts With
            <br className="hidden sm:block" />
            <span className="text-primary">The Best Deals</span>
          </h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors"
          >
            Contact Us
          </button>
        </div>

        {/* Form Section */}
        <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-lg xl:ml-8 w-full lg:flex-none">
          <div className="lg:hidden w-full">
            <AutoPartsForm
              className="max-h-[60vh] overflow-y-auto w-full bg-white/95 backdrop-blur-sm rounded-lg shadow-xl"
              showTitle={true}
            />
          </div>
          <div className="hidden lg:block mt-16 xl:mt-0">
            <AutoPartsForm
              className="max-h-[100vh] sm:max-h-[70vh] lg:max-h-[80vh] overflow-y-auto"
              showTitle={true}
            />
          </div>
        </div>
      </div>

      <AutoPartsModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Hero;

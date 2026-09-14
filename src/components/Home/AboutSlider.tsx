"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const imageCount = 12;

const AboutSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageCount);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg border border-white/10">
      {Array.from({ length: imageCount }).map((_, index) => (
        <Image
          key={index}
          src={`/assets/images/hero-slides/${index + 1}.jpg`}
          alt={`Spikey Salvage yard photo ${index + 1}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 pointer-events-none" />
    </div>
  );
};

export default AboutSlider;

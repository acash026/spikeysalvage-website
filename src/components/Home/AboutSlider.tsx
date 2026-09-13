// src/components/AboutSlider.tsx
import { useEffect, useState } from "react";

const imageCount = 12;

const AboutSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageCount);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg border border-white/10">
      {Array.from({ length: imageCount }).map((_, index) => (
        <img
          key={index}
          src={`/assets/images/accelera_hero_sliders/${index + 1}.jpg`}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 pointer-events-none" />
    </div>
  );
};

export default AboutSlider;

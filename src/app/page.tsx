import type { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import AboutSection from "@/components/Home/AboutSection";
import BrandsWeDeal from "@/components/Home/BrandsWeDeal";
import UsedAutoPartsInDemand from "@/components/Home/UsedAutoPartsInDemand";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Used OEM Grade A Auto Parts in St Cloud, FL",
  description:
    "Spikey Salvage offers high-quality used OEM Grade A auto parts in St Cloud, FL. Shop used engines, transmissions, wheels, radiators and more with fast US shipping.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <UsedAutoPartsInDemand />
      <BrandsWeDeal />
      <Testimonials />
      <AboutSection />
    </div>
  );
}

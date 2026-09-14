"use client";

import { Users, Shield, Truck, CheckCircle, Wrench, BadgeDollarSign, Target, Eye, Timer, DollarSign, ThumbsUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AutoPartsModalForm } from "./AutoPartsForm";
import { siteConfig } from "@/lib/site-config";

const AboutSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const stats = [
    { icon: <Users className="w-7 h-7" />, number: "1,000+", label: "Satisfied Customers", description: "Trusted by mechanics nationwide" },
    { icon: <Truck className="w-7 h-7" />, number: "5,000+", label: "Parts Shipped", description: "Successfully delivered components" },
    { icon: <Shield className="w-7 h-7" />, number: "99.8%", label: "Quality Assurance", description: "Rigorous inspection standards" },
    { icon: <BadgeDollarSign className="w-7 h-7" />, number: "40-70%", label: "Cost Savings", description: "Below dealer prices" },
  ];

  const values = [
    { icon: <Wrench className="w-6 h-6" />, title: "Premium Quality", description: "Every component undergoes our comprehensive 12-point inspection process to ensure OEM-level performance and reliability.", features: ["12-point inspection", "OEM quality standards", "Performance tested"] },
    { icon: <Timer className="w-6 h-6" />, title: "Fast Delivery", description: "Same-day shipping on orders placed before 3PM EST, with nationwide coverage and tracking on every shipment.", features: ["Same-day shipping", "Nationwide coverage", "Full tracking"] },
    { icon: <DollarSign className="w-6 h-6" />, title: "Unbeatable Value", description: "Premium used parts at 40-70% below dealer prices, without compromising on quality or performance.", features: ["40-70% savings", "No quality compromise", "Transparent pricing"] },
    { icon: <ThumbsUp className="w-6 h-6" />, title: "Expert Support", description: "ASE-certified technical staff available to help you find the right part and provide installation guidance.", features: ["ASE-certified staff", "Technical support", "Installation help"] },
  ];

  const features = [
    { text: "12-point inspection process on all parts", category: "Quality" },
    { text: "90-day minimum warranty on all components", category: "Warranty" },
    { text: "Same-day shipping on orders before 3PM EST", category: "Shipping" },
    { text: "Free technical support from ASE-certified staff", category: "Support" },
    { text: "VIN-specific part matching system", category: "Accuracy" },
    { text: "30-day hassle-free returns", category: "Returns" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center">
          <p className="inline-block bg-white/10 border border-white/10 rounded-full px-3.5 py-1.5 text-orange-300 text-xs sm:text-sm mb-5 sm:mb-6">
            {siteConfig.parentTagline} &mdash; {siteConfig.chainTagline}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-5 sm:mb-6 leading-tight">
            About <span className="text-primary">Spikey Salvage</span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Premium used auto parts with new part performance at 40-70% savings
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/aboutus"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors"
            >
              Explore More
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-8 sm:-mt-10 mb-16 sm:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 p-5 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                <div className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 mb-0.5">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 mb-16 sm:mb-24">
          <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image src="/about/warehouse.png" alt="Spikey Salvage yard" fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Spikey Salvage &ndash; Quality You Can Trust, Prices You&rsquo;ll Love.
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At Spikey Salvage, part of Big Sky Salvage &mdash; one of the
              biggest auto parts chains in the USA &mdash; we&rsquo;re
              committed to delivering top-quality auto parts at prices that
              won&rsquo;t break the bank. Every part we offer is carefully
              inspected to ensure performance, reliability, and customer
              satisfaction. Whether you&rsquo;re fixing up your daily driver
              or restoring a classic, you can count on us for trusted parts,
              honest service, and unbeatable value.
            </p>

            <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-primary p-5 sm:p-6 rounded-md">
              <p className="text-orange-900 dark:text-orange-200 italic text-sm sm:text-base mb-3">
                &ldquo;Our success comes from treating every customer like they&rsquo;re our only customer.&rdquo;
              </p>
              <p className="text-sm text-orange-800 dark:text-orange-300 font-semibold">
                &mdash; The Spikey Salvage Team
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3.5 sm:mr-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              To provide premium quality used auto parts that deliver new part
              performance at significant savings, while maintaining the highest
              standards of customer service and technical support.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3.5 sm:mr-4">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              To be the most trusted source for premium used auto parts
              nationwide, revolutionizing the industry through innovative
              technology, uncompromising quality standards, and exceptional
              customer experiences.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-10 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Why Choose <span className="text-primary">Spikey Salvage</span>?
            </h3>
            <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine decades of expertise with cutting-edge technology to
              deliver unmatched value and service
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-5 sm:p-8 flex flex-col">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 text-primary bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    {value.icon}
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white">{value.title}</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">{value.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {value.features.map((feature, idx) => (
                    <span key={idx} className="bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advantage list */}
        <div className="bg-orange-50 dark:bg-orange-950/20 rounded-xl p-6 sm:p-10 lg:p-12 mb-16 sm:mb-24">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 dark:text-white mb-3">
            The <span className="text-primary">Spikey Salvage</span> Advantage
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
            Discover why thousands of customers trust us for their auto parts needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-5 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium mb-1.5">
                    {feature.category}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs sm:text-sm">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-xl p-6 sm:p-8 md:p-12 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
              Ready to Experience the <span className="text-primary">Spikey Salvage</span> Difference?
            </h3>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-md sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re a professional mechanic or a weekend warrior,
              we&apos;ve got the quality parts you need at prices you&apos;ll love.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-base sm:text-lg"
              >
                Shop Parts Now
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-transparent border border-white/30 text-white hover:bg-white hover:text-gray-900 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-base sm:text-lg text-center"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AutoPartsModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default AboutSection;

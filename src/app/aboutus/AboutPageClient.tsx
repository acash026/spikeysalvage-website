"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Shield, Truck, CheckCircle, Wrench, Target, Eye, Timer, DollarSign,
  Phone, Mail, Heart, Clock, ChevronRight, Quote,
} from "lucide-react";
import { useState } from "react";
import { AutoPartsModalForm } from "@/components/Home/AutoPartsForm";
import AboutSlider from "@/components/Home/AboutSlider";
import { Timeline } from "@/components/ui/timeline";
import Testimonials from "@/components/Testimonials";
import { siteConfig } from "@/lib/site-config";

const timelineData = [
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-muted-foreground md:text-base">
          Exploring the auto parts industry and identifying gaps in the
          market &mdash; the earliest steps toward what would become Spikey
          Salvage.
        </p>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          {[4, 5, 6, 7].map((n) => (
            <div key={n} className="relative h-20 md:h-44 lg:h-60 rounded-lg overflow-hidden shadow-md">
              <Image src={`/assets/images/timeline/${n}.png`} alt="Spikey Salvage timeline" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-muted-foreground md:text-base">
          Built out the operation and inventory that would launch Spikey
          Salvage as part of the Big Sky Salvage family.
        </p>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="relative h-20 md:h-44 lg:h-60 rounded-lg overflow-hidden shadow-md">
              <Image src={`/assets/images/timeline/${n}.png`} alt="Spikey Salvage timeline" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Today",
    content: (
      <div>
        <p className="mb-4 text-sm font-normal text-muted-foreground md:text-base">
          Now part of Big Sky Salvage, one of the biggest auto parts chains in
          the USA &mdash; with a growing inventory and the same
          customer-first standards.
        </p>
        <div className="mb-4 md:mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground md:text-base">
            ✅ Launched new VIN-matching system
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground md:text-base">
            ✅ Expanded inventory to 75,000+ parts
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground md:text-base">
            ✅ Introduced 15-point quality inspection
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground md:text-base">
            ✅ Joined the Big Sky Salvage network nationwide
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          {[9, 10, 11, 12].map((n) => (
            <div key={n} className="relative h-20 md:h-44 lg:h-60 rounded-lg overflow-hidden shadow-md">
              <Image src={`/assets/images/timeline/${n}.png`} alt="Spikey Salvage timeline" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const values = [
  {
    icon: <Shield className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Uncompromising Quality",
    description: "Our 15-point inspection process ensures every part meets or exceeds OEM standards. We don't just sell parts – we deliver peace of mind.",
    features: ["15-point inspection process", "OEM quality standards", "Performance tested", "Certified technicians"],
    color: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: <Timer className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Lightning-Fast Service",
    description: "Time is money in the automotive industry. Our streamlined processes ensure you get your parts when you need them.",
    features: ["Same-day shipping", "Real-time tracking", "Express delivery options", "24/7 order processing"],
    color: "bg-green-50 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
    gradient: "from-green-500 to-green-600",
  },
  {
    icon: <DollarSign className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Exceptional Value",
    description: "Premium quality doesn't have to come with a premium price. We prove it every day with our competitive pricing.",
    features: ["Up to 70% savings", "Price matching policy", "Volume discounts", "Transparent pricing"],
    color: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: <Heart className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Customer-First Approach",
    description: "Every decision we make is guided by one question: 'How does this benefit our customers?' Your success is our success.",
    features: ["ASE-certified support", "Technical expertise", "Installation guidance", "Lifetime support"],
    color: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400",
    gradient: "from-orange-500 to-orange-600",
  },
];

const qualitySteps = [
  { step: "01", title: "Acquisition", description: "Parts sourced from verified suppliers and reputable salvage yards across the Big Sky Salvage network", icon: <Truck className="w-5 h-5 md:w-6 md:h-6" /> },
  { step: "02", title: "Inspection", description: "15-point quality inspection by certified technicians", icon: <Eye className="w-5 h-5 md:w-6 md:h-6" /> },
  { step: "03", title: "Testing", description: "Functional testing to ensure optimal performance", icon: <Wrench className="w-5 h-5 md:w-6 md:h-6" /> },
  { step: "04", title: "Certification", description: "Quality certification and warranty assignment", icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" /> },
];

const advantageFeatures = [
  { title: "15-Point Quality Inspection", description: "Every part undergoes comprehensive testing by certified technicians" },
  { title: "90-Day Warranty Minimum", description: "Industry-leading warranty coverage on all components" },
  { title: "Same-Day Shipping", description: "Orders placed before 3PM EST ship the same day" },
  { title: "ASE-Certified Technical Support", description: "Expert guidance from certified automotive professionals" },
  { title: "VIN-Specific Matching", description: "Precision part matching using advanced VIN decoding" },
  { title: "30-Day Easy Returns", description: "Hassle-free return policy with prepaid shipping labels" },
];

export default function AboutPageClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 px-3 py-1 md:px-4 md:py-2 rounded-full text-orange-400 text-xs md:text-sm font-medium mb-4 md:mb-6">
                {siteConfig.parentTagline} &mdash; {siteConfig.chainTagline}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                About <span className="text-primary">Spikey Salvage</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                We&apos;re revolutionizing the auto parts industry by delivering
                premium quality used parts with new part performance at
                unbeatable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm md:text-base"
                >
                  <Quote className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Get Quote
                </button>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm md:text-base"
                >
                  Contact Our Team
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">15,000+</div>
                  <div className="text-xs md:text-sm text-gray-300">Happy Customers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">75,000+</div>
                  <div className="text-xs md:text-sm text-gray-300">Parts Delivered</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-xs md:text-sm text-gray-300">Quality Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">65%</div>
                  <div className="text-xs md:text-sm text-gray-300">Average Savings</div>
                </div>
              </div>
            </div>

            <AboutSlider />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl pt-12 md:pt-20 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to being part of one of the biggest auto
              parts chains in the USA, discover how we&apos;re transforming the
              auto parts industry
            </p>
          </div>

          <div className="min-h-[400px] md:min-h-[500px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-900/30 dark:to-orange-800/30 rounded-2xl md:rounded-3xl"></div>
                <div className="relative bg-gray-200 dark:bg-gray-700 rounded-2xl md:rounded-3xl h-64 md:h-96 overflow-hidden">
                  <Image src="/about/warehouse.png" alt="Spikey Salvage yard" fill className="object-cover" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                  Quality You Can Trust, Prices You&apos;ll Love
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  At Spikey Salvage, part of Big Sky Salvage, we&apos;re committed
                  to delivering top-quality auto parts at prices that won&apos;t
                  break the bank. Every part we offer is carefully inspected
                  to ensure performance, reliability, and customer
                  satisfaction.
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed">
                  Whether you&apos;re fixing up your daily driver or restoring a
                  classic, you can count on us for trusted parts, honest
                  service, and unbeatable value.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-l-4 border-orange-500 p-6 md:p-8 rounded-xl md:rounded-2xl">
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4" />
                  <p className="text-orange-800 dark:text-orange-300 italic text-lg md:text-xl mb-3 md:mb-4 leading-relaxed">
                    &ldquo;Our success comes from treating every customer like
                    they&apos;re our only customer. We don&apos;t just sell parts &ndash; we
                    build relationships that last.&rdquo;
                  </p>
                  <p className="text-orange-900 dark:text-orange-200 font-bold text-sm md:text-base">
                    &mdash; The Spikey Salvage Team
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 py-12 md:py-20 lg:grid-cols-2 gap-6 md:gap-12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl md:shadow-2xl">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 md:mr-6">
                    <Target className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
                  Our mission is to provide reliable, thoroughly tested, and
                  cost-effective used auto parts with exceptional customer
                  service.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                  We aim to help car owners, mechanics, and businesses extend
                  the life of their vehicles through accessible pricing,
                  eco-friendly practices, and a commitment to quality and
                  integrity.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl md:shadow-2xl">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 md:mr-6">
                    <Eye className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
                  Our vision is to become the most trusted and affordable
                  destination for high-quality used auto parts, recognized
                  not just for our competitive pricing, but for the genuine
                  value and reliability we deliver to every customer.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                  We aim to support vehicle owners, auto repair professionals,
                  and businesses by offering a smart, sustainable alternative
                  to buying new parts&mdash;without compromising performance
                  or safety.
                </p>
              </div>
            </div>

            <Timeline data={timelineData} />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Why Choose <span className="text-primary">Spikey Salvage</span>?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our core values drive everything we do, from part selection to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className={`${value.color} rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2`}>
                  <div className="flex items-center mb-6 md:mb-8">
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mr-4 md:mr-6 text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">{value.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base lg:text-lg">{value.description}</p>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="bg-white dark:bg-gray-800 px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm flex items-center">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-1 md:mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Process */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Our <span className="text-primary">Quality</span> Process
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every part goes through our rigorous quality assurance process before reaching your hands
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {qualitySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-xl text-center relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white">
                    {step.icon}
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 md:mb-4">{step.step}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">{step.description}</p>
                </div>
                {index < qualitySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Testimonials />

        {/* Advantage */}
        <div className="my-20 md:my-32">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl md:rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                  The <span className="text-primary">Spikey Salvage</span> Advantage
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Experience the difference with our comprehensive suite of services and guarantees
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {advantageFeatures.map((feature, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start mb-3 md:mb-4">
                      <div className="mr-3 md:mr-4 mt-1">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 md:mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions? Our team is here to help you find the perfect parts for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-xl text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white">
                <Phone className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 text-sm md:text-base">Speak with our experts</p>
              <p className="text-xl md:text-2xl font-bold text-primary">
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-xl text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white">
                <Mail className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 text-sm md:text-base">We respond within 24 hours</p>
              <p className="text-lg md:text-xl font-bold text-primary break-all">
                <a href={`mailto:${siteConfig.publicEmail}`}>{siteConfig.publicEmail}</a>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-xl text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white">
                <Clock className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">Business Hours</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 md:mb-3 text-sm md:text-base">{siteConfig.hours.weekday}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{siteConfig.hours.saturday}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 rounded-2xl md:rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
                Ready to Experience the <span className="text-primary">Spikey Salvage</span> Difference?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed">
                Join thousands of satisfied customers who trust Spikey
                Salvage for their automotive needs. Whether you&apos;re a
                professional mechanic or a weekend warrior, we&apos;ve got the
                quality parts you need at prices you&apos;ll love.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 lg:gap-6">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg md:shadow-xl flex items-center justify-center text-sm md:text-base"
                >
                  <Truck className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Shop Parts Now
                </button>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 shadow-lg md:shadow-xl flex items-center justify-center text-sm md:text-base"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Contact Our Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AutoPartsModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

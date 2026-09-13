import { Link } from "react-router-dom";
import AboutSlider from "../components/Home/AboutSlider";
import {
  Users,
  Shield,
  Truck,
  CheckCircle,
  Wrench,
  Target,
  Eye,
  Timer,
  DollarSign,
  Phone,
  Mail,
  Star,
  Heart,
  Clock,
  ChevronRight,
  Quote,
} from "lucide-react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import { AutoPartsModalForm } from "../components/Home/AutoPartsForm";
import { useState } from "react";
import { Timeline } from "../components/ui/timeline";

const AboutUs = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Company timeline
  const data = [
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Exploring the auto parts industry and identifying gaps in the
            market. I have been working on this project for the past 2 years.
            Here&apos;s a timeline of our journey.
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <img
              src="assets/images/timeline/4.png"
              alt="startup template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets/images/timeline/5.png"
              alt="startup template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets/images/timeline/6.png"
              alt="startup template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets/images/timeline/7.png"
              alt="startup template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Planned to Start the Auto Parts Business in 2024. I have been
            working on this project for the past 2 years. Here&apos;s a timeline
            of our journey.
          </p>

          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <img
              src="assets/images/timeline/1.png"
              alt="hero template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets/images/timeline/2.png"
              alt="feature template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets/images/timeline/3.png"
              alt="bento template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets/images/timeline/4.png"
              alt="cards template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            We've been working on Accelera Auto parts for the past 2 years.
          </p>
          <div className="mb-4 md:mb-8">
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ Launched new VIN-matching system
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ Expanded inventory to 75,000+ parts
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ Introduced 15-point quality inspection
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ Achieved 99.9% customer satisfaction rating
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              ✅ Added ASE-certified technical support
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <img
              src="assets/images/timeline/9.png"
              alt="hero template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets/images/timeline/10.png"
              alt="feature template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets/images/timeline/11.png"
              alt="bento template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="assets/images/timeline/12.png"
              alt="cards template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  // Enhanced values with detailed explanations
  const values = [
    {
      icon: <Shield className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Uncompromising Quality",
      description:
        "Our 15-point inspection process ensures every part meets or exceeds OEM standards. We don't just sell parts – we deliver peace of mind.",
      features: [
        "15-point inspection process",
        "OEM quality standards",
        "Performance tested",
        "Certified technicians",
      ],
      color: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Timer className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Lightning-Fast Service",
      description:
        "Time is money in the automotive industry. Our streamlined processes ensure you get your parts when you need them.",
      features: [
        "Same-day shipping",
        "Real-time tracking",
        "Express delivery options",
        "24/7 order processing",
      ],
      color: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <DollarSign className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Exceptional Value",
      description:
        "Premium quality doesn't have to come with a premium price. We prove it every day with our competitive pricing.",
      features: [
        "Up to 70% savings",
        "Price matching policy",
        "Volume discounts",
        "Transparent pricing",
      ],
      color: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: <Heart className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Customer-First Approach",
      description:
        "Every decision we make is guided by one question: 'How does this benefit our customers?' Your success is our success.",
      features: [
        "ASE-certified support",
        "Technical expertise",
        "Installation guidance",
        "Lifetime support",
      ],
      color: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  // Enhanced team with more details
  // const teamMembers = [
  //   {
  //     name: "Akash Suchitha",
  //     role: "Founder & CEO",
  //     experience: "ASE Master Technician",
  //     quote:
  //       "We don't just sell parts – we keep the automotive industry moving forward.",
  //     specialties: [
  //       "Leadership",
  //       "Technical Expertise",
  //       "Innovation",
  //       "Customer Focus",
  //     ],
  //     background:
  //       "With over 15 years in the automotive industry, Akash founded Accelera with a simple mission: make quality auto parts accessible to everyone.",
  //     image: "/api/placeholder/300/400",
  //   },
  //   {
  //     name: "Sarah Johnson",
  //     role: "Operations Director",
  //     experience: "15 years in automotive logistics",
  //     quote:
  //       "Efficiency isn't just about speed – it's about getting it right the first time.",
  //     specialties: [
  //       "Operations",
  //       "Logistics",
  //       "Quality Control",
  //       "Process Optimization",
  //     ],
  //     background:
  //       "Sarah oversees our daily operations, ensuring every part meets our strict quality standards before reaching customers.",
  //     image: "/api/placeholder/300/400",
  //   },
  //   {
  //     name: "Mike Rodriguez",
  //     role: "Technical Manager",
  //     experience: "Former dealership service manager",
  //     quote:
  //       "The right part can make the difference between a repair and a restoration.",
  //     specialties: [
  //       "Technical Support",
  //       "Part Identification",
  //       "Installation",
  //       "Troubleshooting",
  //     ],
  //     background:
  //       "Mike leads our technical team, helping customers find exactly the right part for their specific needs.",
  //     image: "/api/placeholder/300/400",
  //   },
  //   {
  //     name: "Lisa Chen",
  //     role: "Customer Experience Lead",
  //     experience: "12 years in customer service",
  //     quote:
  //       "Every customer interaction is an opportunity to exceed expectations.",
  //     specialties: [
  //       "Customer Service",
  //       "Relationship Building",
  //       "Problem Solving",
  //       "Communication",
  //     ],
  //     background:
  //       "Lisa ensures every customer has an exceptional experience, from first contact to final delivery.",
  //     image: "/api/placeholder/300/400",
  //   },
  // ];

  // Customer testimonials
  const testimonials = [
    {
      name: "John Martinez",
      role: "Professional Mechanic",
      quote:
        "Accelera has been my go-to for used parts for over 3 years. The quality is consistently excellent, and their technical support is unmatched.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      name: "Maria Thompson",
      role: "Fleet Manager",
      quote:
        "Managing a fleet of 50+ vehicles, I need reliable parts at competitive prices. Accelera delivers on both fronts, every single time.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      name: "David Park",
      role: "Car Enthusiast",
      quote:
        "Restoring classic cars requires finding the right parts. Accelera's VIN matching system helped me find parts I thought were impossible to get.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
  ];

  // Quality process steps
  const qualitySteps = [
    {
      step: "01",
      title: "Acquisition",
      description:
        "Parts sourced from verified suppliers and reputable salvage yards",
      icon: <Truck className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      step: "02",
      title: "Inspection",
      description: "15-point quality inspection by certified technicians",
      icon: <Eye className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      step: "03",
      title: "Testing",
      description: "Functional testing to ensure optimal performance",
      icon: <Wrench className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      step: "04",
      title: "Certification",
      description: "Quality certification and warranty assignment",
      icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />,
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 font-[Montserrat] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 px-3 py-1 md:px-4 md:py-2 rounded-full text-orange-400 text-xs md:text-sm font-medium mb-4 md:mb-6">
                <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Trusted by 15,000+ Customers
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                About <span className="text-orange-400">Accelera</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                We're revolutionizing the auto parts industry by delivering
                premium quality used parts with new part performance at
                unbeatable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm md:text-base"
                >
                  <Quote className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Get Quote
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm md:text-base">
                  <Link to="/contact">Contact Our Team</Link>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </button>
              </div>

              {/* Stats in Grid */}
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                    15,000+
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    Happy Customers
                  </div>
                  <div className="text-xxs md:text-xs text-gray-400">
                    Trusted by mechanics nationwide
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                    75,000+
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    Parts Delivered
                  </div>
                  <div className="text-xxs md:text-xs text-gray-400">
                    Successfully shipped components
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                    99.9%
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    Quality Rating
                  </div>
                  <div className="text-xxs md:text-xs text-gray-400">
                    Customer satisfaction score
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                    65%
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    Average Savings
                  </div>
                  <div className="text-xxs md:text-xs text-gray-400">
                    Below dealer prices
                  </div>
                </div>
              </div>
            </div>

            {/* Video Placeholder */}
            <AboutSlider />
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl pt-12 md:pt-20 font-[Montserrat] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section with Tabs */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Our <span className="text-orange-500">Story</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, discover how we're
              transforming the auto parts industry
            </p>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px] md:min-h-[500px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-900/30 dark:to-orange-800/30 rounded-2xl md:rounded-3xl"></div>
                <div className="relative bg-gray-200 dark:bg-gray-700 rounded-2xl md:rounded-3xl h-64 md:h-96 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Accelera Auto Parts Warehouse"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                  Quality You Can Trust, Prices You'll Love
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  At Accelera Auto Parts, we're committed to delivering
                  top-quality auto parts at prices that won't break the bank.
                  Every part we offer is carefully inspected to ensure
                  performance, reliability, and customer satisfaction.
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed">
                  Whether you're fixing up your daily driver or restoring a
                  classic, you can count on us for trusted parts, honest
                  service, and unbeatable value. Because when it comes to
                  keeping your vehicle running smoothly, you deserve quality you
                  can trust and prices you'll love.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-l-4 border-orange-500 p-6 md:p-8 rounded-xl md:rounded-2xl">
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-orange-500 mb-3 md:mb-4" />
                  <p className="text-orange-800 dark:text-orange-300 italic text-lg md:text-xl mb-3 md:mb-4 leading-relaxed">
                    "Our success comes from treating every customer like they're
                    our only customer. We don't just sell parts – we build
                    relationships that last."
                  </p>
                  <p className="text-orange-900 dark:text-orange-200 font-bold text-sm md:text-base">
                    - Akash Suchitha, Founder & CEO
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
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    Our Mission
                  </h3>
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
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
                  At Accelera Auto Parts, our vision is to become the most
                  trusted and affordable destination for high-quality used auto
                  parts, recognized not just for our competitive pricing, but
                  for the genuine value and reliability we deliver to every
                  customer.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                  We aim to support vehicle owners, auto repair professionals,
                  and businesses by offering a smart, sustainable alternative to
                  buying new parts—without compromising performance or safety.
                </p>
              </div>
            </div>

            <Timeline data={data} />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Why Choose <span className="text-orange-500">Accelera</span>?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our core values drive everything we do, from part selection to
              customer service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div
                  className={`${value.color} rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2`}
                >
                  <div className="flex items-center mb-6 md:mb-8">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mr-4 md:mr-6 text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base lg:text-lg">
                    {value.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {value.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-gray-800 px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm flex items-center"
                      >
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

        {/* Quality Process Section */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Our <span className="text-orange-500">Quality</span> Process
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every part goes through our rigorous quality assurance process
              before reaching your hands
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {qualitySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-xl text-center relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white">
                    {step.icon}
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-3 md:mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
                {index < qualitySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-orange-500 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Meet Our <span className="text-orange-500">Expert Team</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate professionals dedicated to delivering exceptional
              service and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden hover:shadow-2xl md:hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-48 md:h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                      <Users className="w-12 h-12 md:w-16 md:h-16 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold mb-2 text-sm md:text-base">
                      {member.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                      {member.experience}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                      {member.background}
                    </p>
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-3 md:p-4 rounded-lg md:rounded-xl mb-4 md:mb-6">
                      <Quote className="w-4 h-4 md:w-5 md:h-5 text-orange-500 mb-1 md:mb-2" />
                      <p className="text-orange-800 dark:text-orange-300 italic text-sm md:text-base">
                        {member.quote}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded-full text-xs md:text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Customer Testimonials */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              What Our <span className="text-orange-500">Customers</span> Say
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it – hear from the professionals who
              trust us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mr-3 md:mr-4">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-orange-500 mb-3 md:mb-4" />
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic text-sm md:text-base">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="mb-20 md:mb-32">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl md:rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-orange-500/5 rounded-full blur-xl md:blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-orange-500/5 rounded-full blur-xl md:blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                  The <span className="text-orange-500">Accelera</span>{" "}
                  Advantage
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Experience the difference with our comprehensive suite of
                  services and guarantees
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {[
                  {
                    icon: (
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                    ),
                    title: "15-Point Quality Inspection",
                    description:
                      "Every part undergoes comprehensive testing by certified technicians",
                  },
                  {
                    icon: (
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                    ),
                    title: "90-Day Warranty Minimum",
                    description:
                      "Industry-leading warranty coverage on all components",
                  },
                  {
                    icon: (
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                    ),
                    title: "Same-Day Shipping",
                    description:
                      "Orders placed before 3PM EST ship the same day",
                  },
                  {
                    icon: (
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                    ),
                    title: "ASE-Certified Technical Support",
                    description:
                      "Expert guidance from certified automotive professionals",
                  },
                  {
                    icon: (
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                    ),
                    title: "VIN-Specific Matching",
                    description:
                      "Precision part matching using advanced VIN decoding",
                  },
                  {
                    icon: (
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                    ),
                    title: "30-Day Easy Returns",
                    description:
                      "Hassle-free return policy with prepaid shipping labels",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start mb-3 md:mb-4">
                      <div className="mr-3 md:mr-4 mt-1">{feature.icon}</div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 md:mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Get in <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions? Our team is here to help you find the perfect
              parts for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-xl text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white">
                <Phone className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                Call Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                Speak with our experts
              </p>
              <p className="text-xl md:text-2xl font-bold text-orange-500">
                <a href="tel:+13214657213">+1 (321) 465-7213</a>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-xl text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white">
                <Mail className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                Email Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                24/7 email support
              </p>
              <p className="text-lg md:text-xl font-bold text-orange-500">
                <a href="mailto:info@acceleraautoparts.com">
                  info@acceleraautoparts.com
                </a>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-xl text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-white">
                <Clock className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                Business Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 md:mb-3 text-sm md:text-base">
                Mon-Fri: 8AM-6PM EST
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                Sat: 9AM-4PM EST
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 rounded-2xl md:rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-6 left-6 md:top-10 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-orange-500/20 rounded-full blur-lg md:blur-xl animate-pulse"></div>
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 md:w-32 md:h-32 bg-blue-500/20 rounded-full blur-lg md:blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-40 md:h-40 bg-purple-500/20 rounded-full blur-lg md:blur-xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
                Ready to Experience the{" "}
                <span className="text-orange-400">Accelera</span> Difference?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed">
                Join thousands of satisfied customers who trust Accelera for
                their automotive needs. Whether you're a professional mechanic
                or a weekend warrior, we've got the quality parts you need at
                prices you'll love.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 lg:gap-6">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg md:shadow-xl flex items-center justify-center text-sm md:text-base"
                >
                  <Truck className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Shop Parts Now
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 shadow-lg md:shadow-xl flex items-center justify-center text-sm md:text-base">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <Link to="/contact">Contact Our Experts</Link>
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 shadow-lg md:shadow-xl flex items-center justify-center text-sm md:text-base"
                >
                  <Quote className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Get a Quote
                </button>
              </div>
            </div>
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

export default AboutUs;

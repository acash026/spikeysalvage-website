import {
  Users,
  Shield,
  Truck,
  CheckCircle,
  Wrench,
  BadgeDollarSign,
  Target,
  Eye,
  Timer,
  DollarSign,
  ThumbsUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AutoPartsModalForm } from "./AutoPartsForm";
import { useState } from "react";
const AboutUs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // Enhanced stats with better visual hierarchy
  const stats = [
    {
      icon: <Users className="w-10 h-10" />,
      number: "1,000+",
      label: "Satisfied Customers",
      description: "Trusted by mechanics nationwide",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Truck className="w-10 h-10" />,
      number: "5,000+",
      label: "Parts Shipped",
      description: "Successfully delivered components",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      number: "99.8%",
      label: "Quality Assurance",
      description: "Rigorous inspection standards",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <BadgeDollarSign className="w-10 h-10" />,
      number: "40-70%",
      label: "Cost Savings",
      description: "Below dealer prices",
      color: "from-orange-500 to-orange-600",
    },
  ];

  // Enhanced values with better descriptions
  const values = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Premium Quality",
      description:
        "Every component undergoes our comprehensive 12-point inspection process to ensure OEM-level performance and reliability.",
      features: [
        "12-point inspection",
        "OEM quality standards",
        "Performance tested",
      ],
      color: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Fast Delivery",
      description:
        "Same-day shipping on orders placed before 3PM EST, with nationwide coverage and tracking on every shipment.",
      features: ["Same-day shipping", "Nationwide coverage", "Full tracking"],
      color: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Unbeatable Value",
      description:
        "Premium used parts at 40-70% below dealer prices, without compromising on quality or performance.",
      features: [
        "40-70% savings",
        "No quality compromise",
        "Transparent pricing",
      ],
      color: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Expert Support",
      description:
        "ASE-certified technical staff available to help you find the right part and provide installation guidance.",
      features: [
        "ASE-certified staff",
        "Technical support",
        "Installation help",
      ],
      color: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
  ];

  // Enhanced features with categories
  const features = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "12-point inspection process on all parts",
      category: "Quality",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "90-day minimum warranty on all components",
      category: "Warranty",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Same-day shipping on orders before 3PM EST",
      category: "Shipping",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "Free technical support from ASE-certified staff",
      category: "Support",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "VIN-specific part matching system",
      category: "Accuracy",
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      text: "30-day hassle-free returns",
      category: "Returns",
    },
  ];

  // Enhanced team members
  // const teamMembers = [
  //   {
  //     name: "Akash",
  //     role: "Founder & CEO",
  //     experience: "ASE Master Technician",
  //     quote: "We don't sell parts - we keep cars on the road.",
  //     specialties: ["Leadership", "Technical Expertise", "Customer Focus"],
  //   },
  //   {
  //     name: "John Doe",
  //     role: "Quality Director",
  //     experience: "15 years in parts inspection",
  //     quote: "If I wouldn't put it on my car, it doesn't leave our warehouse.",
  //     specialties: ["Quality Control", "Inspection", "Standards"],
  //   },
  //   {
  //     name: "John Doe",
  //     role: "Technical Manager",
  //     experience: "Former dealership foreman",
  //     quote: "The right part makes all the difference.",
  //     specialties: ["Technical Support", "Installation", "Troubleshooting"],
  //   },
  //   {
  //     name: "John Doe",
  //     role: "Customer Care",
  //     experience: "10 years in auto industry",
  //     quote: "Helping customers is my top priority.",
  //     specialties: ["Customer Service", "Support", "Communication"],
  //   },
  // ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About <span className="text-orange-400">Accelera</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Premium used auto parts with new part performance at 40-70% savings
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              <Link to="/aboutus" className="flex items-center justify-center">
                Explore More
              </Link>
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="relative -mt-12 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-4xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl lg:text-2xl sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-orange-200 dark:bg-orange-900/30 rounded-2xl"></div>
            <div className="relative bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 flex items-center justify-center">
              <img
                src="/about/warehouse.png"
                alt="Accelera Auto Parts Warehouse"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-xl lg:text-4xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Accelera Auto Parts – Quality You Can Trust, Prices You’ll Love.
            </h2>
            <p className="text-sm lg:text-base md:text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At Accelera Auto Parts, we’re committed to delivering top-quality
              auto parts at prices that won’t break the bank. Every part we
              offer is carefully inspected to ensure performance, reliability,
              and customer satisfaction. Whether you’re fixing up your daily
              driver or restoring a classic, you can count on us for trusted
              parts, honest service, and unbeatable value. Because when it comes
              to keeping your vehicle running smoothly, you deserve quality you
              can trust and prices you’ll love.
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-l-4 border-orange-500 p-6 rounded-lg">
              <p className="text-orange-800 dark:text-orange-300 italic text-sm lg:text-lg md:text-base mb-3">
                "Our success comes from treating every customer like they're our
                only customer."
              </p>
              <p className=" text-sm lg:text-lg md:text-basetext-orange-900  dark:text-orange-200 font-semibold">
                - Akash Suchitha, Founder
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-lg leading-relaxed">
              To provide premium quality used auto parts that deliver new part
              performance at significant savings, while maintaining the highest
              standards of customer service and technical support. We're
              committed to keeping vehicles on the road affordably and reliably.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              To be the most trusted source for premium used auto parts
              nationwide, revolutionizing the industry through innovative
              technology, uncompromising quality standards, and exceptional
              customer experiences that make vehicle maintenance accessible to
              everyone.
            </p>
          </div>
        </div>

        {/* Enhanced Why Choose Accelera Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-xl lg:text-4xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="text-orange-500">Accelera</span>?
            </h2>
            <p className="text-xl lg:text-2xl md:text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine decades of expertise with cutting-edge technology to
              deliver unmatched value and service
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`${value.color} rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col`}
              >
                <div className="flex items-center mb-4 md:mb-6">
                  <div
                    className={`w-10 h-10 md:w-16 md:h-16 ${value.iconColor} bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mr-4 md:mr-6 shadow-md`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-xs md:text-base text-gray-700 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  {value.description}
                </p>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {value.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-white dark:bg-gray-800 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Team Section */}
        {/* <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our <span className="text-orange-500">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate professionals dedicated to delivering exceptional
              service and expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    Photo
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 dark:text-orange-400 font-semibold mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {member.experience}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4 text-sm">
                    "{member.quote}"
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Enhanced Features Section */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-6 md:p-10 lg:p-12 mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 md:mb-4">
            The <span className="text-orange-500">Accelera</span> Advantage
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-xl md:max-w-2xl mx-auto text-sm md:text-base">
            Discover why thousands of customers trust us for their auto parts
            needs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-3 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-start">
                  <div className="mr-2 md:mr-4 mt-0.5 md:mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 md:px-2 md:py-1 rounded text-[10px] md:text-xs font-medium mb-1 md:mb-2">
                      {feature.category}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs md:text-sm">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 rounded-2xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-snug sm:leading-tight">
              Ready to Experience the{" "}
              <span className="text-orange-400">Accelera</span> Difference?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-6 sm:mb-7 md:mb-8 max-w-md sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              Whether you're a professional mechanic or a weekend warrior, we've
              got the quality parts you need at prices you'll love. Join
              thousands of satisfied customers who trust Accelera for their
              automotive needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-base sm:text-lg"
              >
                Shop Parts Now
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg text-base sm:text-lg mt-2 sm:mt-0">
                <Link to="/contact">Contact Our Experts</Link>
              </button>
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

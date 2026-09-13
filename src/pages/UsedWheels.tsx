import { useState } from "react";
import {
  Phone,
  CheckCircle,
  Star,
  Truck,
  Shield,
  Award,
  Users,
  ArrowRight,
  Disc,
  Gauge,
} from "lucide-react";
import { AutoPartsModalForm } from "../components/Home/AutoPartsForm";
import { AutoPartsForm } from "../components/Home/AutoPartsForm";

const UsedWheels = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const benefits = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "60% Cost Savings",
      description:
        "Used wheels cost 60% less than new ones with same performance",
    },
    {
      icon: <Disc className="h-6 w-6" />,
      title: "Perfect Balance",
      description:
        "Restore optimal wheel balance and smooth driving experience",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety Tested",
      description:
        "Meet all safety standards and structural integrity requirements",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Eco-Conscious",
      description: "Reduce metal waste through sustainable wheel reuse",
    },
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "OEM Quality Assured",
      description: "Premium OEM used wheels with guaranteed performance",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Best Price Promise",
      description: "Unmatched pricing with complete quality assurance",
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Precision Inspected",
      description: "Thorough inspection for structural integrity and balance",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Secure Shipping",
      description: "Professional packaging and fast delivery nationwide",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-black">
        <img
          src="/assets/images/car_parts/wheel.png"
          alt="Used Wheels"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                🛞 Premium Wheel Performance
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Quality
                <span className="block text-orange-100">Used Wheels</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl">
                Upgrade your vehicle's performance with our premium quality used
                wheels. Tested for balance, durability, and road safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Get Free Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+1 (321) 465-7213">Call Now</a>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-2">
                <AutoPartsForm
                  className="max-h-[70vh] sm:max-h-[75vh] lg:max-h-[80vh] overflow-y-auto"
                  showTitle={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold mb-4">
              USED WHEELS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Used Wheels?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the perfect balance of performance, style, and value
              with our premium used wheels
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-0 h-96 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/images/car_parts/wheel.png"
                  alt="Used Wheels"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Wheels are fundamental components that directly impact your
                vehicle's performance, handling, and appearance. Our premium
                used wheels provide exceptional durability and style while
                offering significant cost savings compared to new replacements.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At Accelera Auto Parts, we carefully inspect every used wheel
                for structural integrity, balance, and cosmetic condition. Each
                wheel undergoes rigorous testing to ensure it meets or exceeds
                original performance standards for maximum safety and
                reliability.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg"
                  >
                    <div className="text-orange-500 mt-1">{benefit.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                ORDER NOW
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Accelera Auto Parts?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience excellence with our premium wheel services and
              unmatched quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100 dark:border-orange-900/30"
              >
                <div className="text-orange-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Wheel Promise
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With extensive experience in automotive wheel solutions, we at
                Accelera Auto Parts specialize in sourcing and testing premium
                used wheels. We guarantee quality and performance while offering
                transparent, competitive pricing that outperforms traditional
                salvage yard options.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Premium A-Grade OEM Used Wheels
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Best Price Guaranteed
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Balance & Structure Testing
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Fitment Compatibility Verified
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Wheel Expertise</h3>
              <p className="text-orange-100 mb-6 leading-relaxed">
                Our team of wheel specialists brings years of experience in
                wheel evaluation, testing, and customer service. We're here to
                help you find the perfect wheels for optimal performance, style,
                and safety.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-200" />
                  <span className="text-orange-100">
                    Professional Mounting Guidance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-200" />
                  <span className="text-orange-100">
                    Nationwide Parts Network
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-200" />
                  <span className="text-orange-100">
                    Expert Fitment Matching
                  </span>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-2">
                  SPEAK WITH A WHEEL SPECIALIST
                </h4>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6" />
                  <a href="tel:+13214657213">
                    <span className="text-2xl font-bold">+1 (321) 465-7213</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wheel Types Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Wheel Types We Specialize In
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From alloy to steel and performance wheels, we have the right
              solution for your vehicle's style and performance needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-orange-500 mb-4">
                <Disc className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Alloy Wheels
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lightweight, stylish wheels for enhanced performance and
                appearance
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-orange-500 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Steel Wheels
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Durable, reliable wheels for everyday driving and heavy-duty use
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-orange-500 mb-4">
                <Gauge className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Performance Wheels
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                High-performance wheels for racing, sports, and premium vehicles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready To Roll With Style?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Get started with our quick quote form or speak directly with our
                wheel specialists to find the perfect wheels for your vehicle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  FIND YOUR WHEELS
                </button>
                <div className="flex items-center justify-center text-white">
                  <span className="text-lg">Or call us - </span>
                  <a href="tel:+13214657213">
                    <span className="font-bold text-xl ml-2">
                      +1 (321) 465-7213
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-2xl blur"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-72 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Disc className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Perfect Wheel Match
                  </h3>
                  <p className="text-orange-100">
                    Quality wheels for enhanced performance and style
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AutoPartsModalForm
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </section>
    </div>
  );
};

export default UsedWheels;

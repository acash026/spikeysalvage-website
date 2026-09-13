import { useState } from "react";
import {
  Phone,
  CheckCircle,
  Star,
  Truck,
  Shield,
  Award,
  Users,
  Wrench,
  ArrowRight,
  Zap,
  Gauge,
  Cog,
} from "lucide-react";

import {
  AutoPartsForm,
  AutoPartsModalForm,
} from "../components/Home/AutoPartsForm";

const UsedTransmissions = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const benefits = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Up to 70% Savings",
      description:
        "Used transmissions cost significantly less than new ones with same performance",
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Smooth Operation",
      description: "Restore seamless gear shifting and optimal power transfer",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Tested",
      description: "Every transmission tested for performance and reliability",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Eco-Friendly",
      description: "Reduce automotive waste through sustainable part reuse",
    },
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "OEM Quality Assured",
      description:
        "Premium OEM used transmissions with guaranteed performance standards",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Best Price Promise",
      description:
        "Unmatched pricing with complete quality assurance guarantee",
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Performance Tested",
      description:
        "Comprehensive testing for optimal shifting and power delivery",
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
          src="/assets/images/car_parts/transmission.png"
          alt="Used Transmission"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                🚗 Smooth Power Transfer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Quality
                <span className="block text-orange-100">
                  Used Transmissions
                </span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl">
                Restore your vehicle's power delivery with our premium quality
                used transmissions. Tested for performance, reliability, and
                smooth operation.
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
              USED TRANSMISSIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Used Transmissions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the perfect balance of performance, reliability, and
              value with our premium used transmissions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-0 h-96 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/images/car_parts/transmission.png"
                  alt="Used Wheels"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Transmissions are the heart of your vehicle's power delivery
                system, responsible for transferring engine power to the wheels
                through precise gear ratios. Our premium used transmissions
                provide exceptional performance while offering significant cost
                savings compared to new replacements.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At Accelera Auto Parts, we meticulously inspect every used
                transmission for internal components, fluid quality, and
                operational performance. Each transmission undergoes
                comprehensive testing to ensure smooth shifting, proper
                pressure, and optimal power transfer for reliable vehicle
                operation.
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
              Experience excellence with our premium transmission services and
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
                Our Transmission Promise
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With extensive experience in automotive transmission systems, we
                at Accelera Auto Parts specialize in sourcing and testing
                premium used transmissions. We guarantee performance and
                reliability while offering transparent, competitive pricing that
                outperforms traditional salvage yard options.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Premium A-Grade OEM Used Transmissions
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
                    Performance & Pressure Testing
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Compatibility Verified
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Transmission Expertise
              </h3>
              <p className="text-orange-100 mb-6 leading-relaxed">
                Our team of transmission specialists brings years of experience
                in transmission evaluation, testing, and customer service. We're
                here to help you find the perfect transmission for optimal
                performance and reliability.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-200" />
                  <span className="text-orange-100">
                    Professional Installation Guidance
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
                    Expert Compatibility Matching
                  </span>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-2">
                  SPEAK WITH A TRANSMISSION SPECIALIST
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

      {/* Transmission Types Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Transmission Types We Specialize In
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From automatic to manual and CVT transmissions, we have the right
              power delivery solution for your vehicle's performance needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-orange-500 mb-4">
                <Cog className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Automatic Transmissions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Smooth shifting automatic transmissions for effortless driving
                experience
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-orange-500 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Manual Transmissions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Precision manual transmissions for enhanced control and
                performance
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-orange-500 mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                CVT Transmissions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously variable transmissions for optimal fuel efficiency
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
                Ready To Restore Your Power?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Get started with our quick quote form or speak directly with our
                transmission specialists to find the perfect transmission for
                your vehicle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  FIND YOUR TRANSMISSION
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
                    <Cog className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Perfect Transmission Match
                  </h3>
                  <p className="text-orange-100">
                    Quality transmissions for enhanced performance
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

export default UsedTransmissions;

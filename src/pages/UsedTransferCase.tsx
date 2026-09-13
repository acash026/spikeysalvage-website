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
  Cog,
  Settings,
} from "lucide-react";
import { AutoPartsModalForm } from "../components/Home/AutoPartsForm";
import { AutoPartsForm } from "../components/Home/AutoPartsForm";

const UsedTransferCase = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const benefits = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "70% Cost Savings",
      description:
        "Used transfer cases cost 70% less than new ones with same performance",
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Proven Reliability",
      description: "Restore power distribution and 4WD functionality",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Tested",
      description: "Thoroughly inspected and tested for optimal performance",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Eco-Friendly",
      description: "Reduce waste through sustainable automotive part reuse",
    },
  ];

  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "OEM Quality Assured",
      description:
        "Premium OEM used transfer cases with guaranteed performance",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Best Price Promise",
      description: "Unmatched pricing with complete quality assurance",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Function Tested",
      description: "Comprehensive testing for all gear ratios and operations",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Secure Shipping",
      description: "Careful packaging and fast delivery nationwide",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-black">
        <img
          src="/assets/images/car_parts/transfer_case.png"
          alt="Used Transfer Case"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                ⚙️ 4WD Power Distribution
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Quality
                <span className="block text-orange-100">
                  Used Transfer Cases
                </span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl">
                Restore your 4WD system's power distribution with our premium
                quality used transfer cases. Tested for performance,
                reliability, and seamless operation.
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
              USED TRANSFER CASES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Used Transfer Cases?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the perfect balance of performance, reliability, and
              value with our premium used transfer cases
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-0 h-96 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/images/car_parts/transfer_case.png"
                  alt="Used Transfer Cases"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Transfer cases are critical drivetrain components that
                distribute power between front and rear axles in 4WD and AWD
                vehicles. Our premium used transfer cases provide reliable power
                distribution while offering significant cost savings compared to
                new replacements.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At Accelera Auto Parts, we carefully inspect every used transfer
                case for functionality, gear engagement, and structural
                integrity. Each unit undergoes rigorous testing to ensure it
                meets or exceeds original performance standards for maximum
                drivetrain reliability.
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
              Experience excellence with our premium transfer case services and
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
                Our Transfer Case Promise
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With extensive experience in drivetrain solutions, we at
                Accelera Auto Parts specialize in sourcing and testing premium
                used transfer cases. We guarantee functionality and performance
                while offering transparent, competitive pricing that outperforms
                traditional salvage yard options.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Premium A-Grade OEM Used Transfer Cases
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
                    Function & Performance Testing
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
              <h3 className="text-2xl font-bold mb-6">Drivetrain Expertise</h3>
              <p className="text-orange-100 mb-6 leading-relaxed">
                Our team of drivetrain specialists brings years of experience in
                transfer case evaluation, testing, and customer service. We're
                here to help you find the perfect transfer case for reliable 4WD
                operation.
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
                  SPEAK WITH A DRIVETRAIN SPECIALIST
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

      {/* Transfer Case Types Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Transfer Case Types We Specialize In
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From part-time to full-time 4WD systems, we have the right
              transfer case for your vehicle's drivetrain needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-orange-500 mb-4">
                <Cog className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Part-Time 4WD
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Manual engagement systems for traditional off-road capability
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-orange-500 mb-4">
                <Settings className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Full-Time AWD
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automatic power distribution for optimal traction in all
                conditions
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-orange-500 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Electronic 4WD
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Modern electronic control systems for seamless operation
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
                Ready To Restore Your 4WD System?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Get started with our quick quote form or speak directly with our
                drivetrain specialists to find the perfect transfer case for
                your vehicle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  FIND YOUR TRANSFER CASE
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
                    Perfect 4WD Match
                  </h3>
                  <p className="text-orange-100">
                    Quality transfer cases for reliable power distribution
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

export default UsedTransferCase;

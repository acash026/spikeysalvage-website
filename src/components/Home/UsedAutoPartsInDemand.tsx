import React from "react";
import { useNavigate } from "react-router-dom";

type Part = {
  id: number;
  name: string;
  rating: number;
  image: string;
  condition: string;
  description: string;
  compatibility: string[];
  warranty: string;
  pageLink?: string;
};

const parts: Part[] = [
  {
    id: 1,
    name: "Used Engines",
    rating: 4.8,
    image: "assets/images/car_parts/engine.png",
    condition: "Tested & Certified",
    description:
      "Complete engine assembly with comprehensive testing. All engines come with detailed compression reports and performance verification.",
    compatibility: ["Honda Accord", "Toyota Camry", "Ford F-150"],
    warranty: "90-day warranty",
    pageLink: "/used-auto-parts/used-engines",
  },
  {
    id: 2,
    name: "Used Transmissions",
    rating: 4.6,
    image: "assets/images/car_parts/transmission.png",
    condition: "Rebuilt & Tested",
    description:
      "Professionally rebuilt transmissions with new seals and updated components. Bench tested for optimal performance.",
    compatibility: ["Toyota Camry", "Honda Civic", "Ford Fusion"],
    warranty: "180-day warranty",
    pageLink: "/used-auto-parts/used-transmissions",
  },
  {
    id: 3,
    name: "Used Wheels",
    rating: 4.9,
    image: "assets/images/car_parts/wheel.png",
    condition: "Excellent Condition",
    description:
      "Complete wheel sets from low-mileage vehicles. Inspected for structural integrity and balanced for smooth operation.",
    compatibility: ["Ford F-150", "Chevrolet Silverado", "Ram 1500"],
    warranty: "1-year warranty",
    pageLink: "/used-auto-parts/used-wheels",
  },
  {
    id: 4,
    name: "Used AC Compressor",
    rating: 4.7,
    image: "assets/images/car_parts/ac_compressor.png",
    condition: "Tested & Working",
    description:
      "AC compressors tested on bench and vehicle. Includes refrigerant compatibility check and performance verification.",
    compatibility: ["Chevrolet Silverado", "GMC Sierra", "Ford F-150"],
    warranty: "120-day warranty",
    pageLink: "/used-auto-parts/used-ac-compressor",
  },
  {
    id: 5,
    name: "Used Headlights",
    rating: 4.5,
    image: "assets/images/car_parts/headlight.png",
    condition: "Clear Lens",
    description:
      "Complete headlight assemblies with clear lenses. No cracks, moisture damage, or UV yellowing.",
    compatibility: ["Nissan Altima", "Honda Accord", "Toyota Camry"],
    warranty: "90-day warranty",
    pageLink: "/used-auto-parts/used-headlight",
  },
  {
    id: 6,
    name: "Used Transfer Case",
    rating: 4.6,
    image: "assets/images/car_parts/transfer_case.png",
    condition: "Refurbished",
    description:
      "Complete transfer case units with new seals and fluid. Tested for proper engagement and smooth operation.",
    compatibility: ["Ford F-150", "Chevrolet Silverado", "GMC Sierra"],
    warranty: "6-month warranty",
    pageLink: "/used-auto-parts/used-transfer-case",
  },
  {
    id: 7,
    name: "Used Axle Assembly",
    rating: 4.4,
    image: "assets/images/car_parts/axle_assembly.png",
    condition: "Tested & Certified",
    description:
      "Complete axle assemblies with new bearings and seals. Bench tested for durability and proper alignment.",
    compatibility: ["Ford F-150", "Chevrolet Silverado", "Ram 1500"],
    warranty: "90-day warranty",
    pageLink: "/used-auto-parts/used-axle-assembly",
  },
  {
    id: 8,
    name: "Drive Shaft",
    rating: 4.3,
    image: "assets/images/car_parts/Drive_shafts.png",
    condition: "Balanced & Tested",
    description:
      "Drive shafts professionally balanced and tested for vibration-free operation. Includes universal joint inspection.",
    compatibility: ["Ford F-150", "Chevrolet Silverado", "GMC Sierra"],
    warranty: "90-day warranty",
    pageLink: "/used-auto-parts/drive-shaft",
  },
  {
    id: 9,
    name: "Used Alternator",
    rating: 4.7,
    image: "assets/images/car_parts/alternator.png",
    condition: "Tested & Certified",
    description:
      "High-output alternators tested for proper charging and electrical performance. Includes voltage regulation testing.",
    compatibility: ["Honda Civic", "Toyota Corolla", "Ford Focus"],
    warranty: "120-day warranty",
    pageLink: "/used-auto-parts/used-alternator",
  },
  {
    id: 10,
    name: "Used Radiator",
    rating: 4.5,
    image: "assets/images/car_parts/radiator.png",
    condition: "Pressure Tested",
    description:
      "Complete radiator assemblies pressure tested for leaks. Includes fan assembly and cooling system compatibility check.",
    compatibility: ["Honda Accord", "Toyota Camry", "Nissan Altima"],
    warranty: "90-day warranty",
    pageLink: "/used-auto-parts/used-radiator",
  },
  {
    id: 11,
    name: "Steering Column",
    rating: 4.4,
    image: "assets/images/car_parts/steering_column.png",
    condition: "Tested & Certified",
    description:
      "Complete steering column assemblies with tested electrical components. Includes tilt and telescoping functionality check.",
    compatibility: ["Ford F-150", "Chevrolet Silverado", "GMC Sierra"],
    warranty: "90-day warranty",
    pageLink: "/used-auto-parts/steering-column",
  },
  {
    id: 12,
    name: "Exhaust Manifold",
    rating: 4.3,
    image: "assets/images/car_parts/exhaust_manifold.png",
    condition: "Crack Tested",
    description:
      "Cast iron and stainless steel exhaust manifolds inspected for cracks and warpage. Includes gasket surfaces machined flat.",
    compatibility: ["Ford Mustang", "Chevrolet Camaro", "Dodge Challenger"],
    warranty: "60-day warranty",
    pageLink: "/used-auto-parts/exhaust-manifold",
  },
  {
    id: 13,
    name: "Intake Manifold",
    rating: 4.6,
    image: "assets/images/car_parts/intake_manifold.png",
    condition: "Tested & Cleaned",
    description:
      "Complete intake manifold assemblies with throttle body and sensors. Tested for proper air flow and vacuum operation.",
    compatibility: ["Honda Civic", "Toyota Corolla", "Nissan Sentra"],
    warranty: "90-day warranty",
    pageLink: "/used-auto-parts/intake-manifold",
  },
  {
    id: 14,
    name: "Used Axle",
    rating: 4.5,
    image: "assets/images/car_parts/axle.png",
    condition: "Tested & Certified",
    description:
      "Individual axle components with new CV joints and boots. Tested for proper rotation and smooth operation.",
    compatibility: ["Honda Civic", "Toyota Corolla", "Ford Focus"],
    warranty: "90-day warranty",
    pageLink: "/used-auto-parts/used-axle",
  },
];

const UsedAutoPartsInDemand: React.FC = () => {
  const navigate = useNavigate();

  const handlePartClick = (part: Part) => {
    if (part.pageLink) navigate(part.pageLink);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Quality Used Auto Parts
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Premium tested parts with comprehensive warranties — find the
            perfect match for your vehicle.
          </p>
        </div>

        {/* Quick Access Grid (Premium look) */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-900 dark:text-white">
            Quick Access Categories
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {parts.slice(0, 12).map((part) => (
              <div
                key={part.id}
                onClick={() => handlePartClick(part)}
                className="group relative rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              >
                {/* Accent top bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70" />

                <div className="p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl overflow-hidden ring-1 ring-gray-100 dark:ring-gray-700">
                    <img
                      src={part.image}
                      alt={part.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                      draggable={false}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/api/placeholder/64/64";
                      }}
                    />
                  </div>

                  <h3 className="font-semibold text-sm text-center mb-1 text-gray-900 dark:text-white line-clamp-1">
                    {part.name}
                  </h3>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
                    <span className="rounded-full px-2 py-0.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700">
                      {part.warranty}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline">
                      {part.compatibility.length}+ models
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 line-clamp-2 text-center">
                    {part.description}
                  </p>
                </div>

                <div className="px-4 pb-4">
                  <div className="text-xs font-medium text-blue-600 dark:text-blue-400 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 md:mt-16 rounded-2xl shadow-sm p-6 md:p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-900 dark:text-white">
            Why Choose Our Used Auto Parts?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Quality Tested
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Every part undergoes rigorous testing to ensure optimal
                performance and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-green-100 dark:bg-green-900/30">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Warranty Included
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Comprehensive warranty coverage from 60 days to 1 year,
                depending on the part.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                Perfect Fit
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Verified compatibility with detailed specifications and fitment
                guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsedAutoPartsInDemand;

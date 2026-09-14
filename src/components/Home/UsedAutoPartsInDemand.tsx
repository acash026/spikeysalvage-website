"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { PARTS } from "@/data/parts";

const UsedAutoPartsInDemand = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Quality Used Auto Parts
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Premium tested parts with comprehensive warranties — find the
            perfect match for your vehicle.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-900 dark:text-white">
            Quick Access Categories
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {PARTS.slice(0, 12).map((part) => (
              <div
                key={part.id}
                onClick={() => router.push(`/used-auto-parts/${part.slug}`)}
                className="group relative rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70" />

                <div className="p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl overflow-hidden ring-1 ring-gray-100 dark:ring-gray-700 relative">
                    <Image
                      src={part.image}
                      alt={part.name}
                      fill
                      sizes="64px"
                      className="object-cover transform transition-transform duration-300 group-hover:scale-110"
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
                    <span className="hidden sm:inline">{part.compatibility.length}+ models</span>
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

        <div className="mt-12 md:mt-16 rounded-2xl shadow-sm p-6 md:p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-900 dark:text-white">
            Why Choose Our Used Auto Parts?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Quality Tested</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Every part undergoes rigorous testing to ensure optimal
                performance and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-green-100 dark:bg-green-900/30">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Warranty Included</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Comprehensive warranty coverage from 60 days to 1 year,
                depending on the part.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Perfect Fit</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Verified compatibility with detailed specifications and fitment guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsedAutoPartsInDemand;

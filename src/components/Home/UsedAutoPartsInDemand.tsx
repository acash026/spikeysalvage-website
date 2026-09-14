"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Wrench, ShieldCheck, CircleCheck } from "lucide-react";
import { PARTS } from "@/data/parts";

const UsedAutoPartsInDemand = () => {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-gray-900 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Quality Used Auto Parts
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Premium tested parts with comprehensive warranties — find the
            perfect match for your vehicle.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-white">
            Quick Access Categories
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {PARTS.slice(0, 12).map((part) => (
              <div
                key={part.id}
                onClick={() => router.push(`/used-auto-parts/${part.slug}`)}
                className="group rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="p-3.5 sm:p-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 relative">
                    <Image
                      src={part.image}
                      alt={part.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <h4 className="font-semibold text-sm text-center mb-1.5 text-gray-900 dark:text-white line-clamp-1">
                    {part.name}
                  </h4>

                  <div className="flex items-center justify-center text-[11px] text-gray-500 dark:text-gray-400 mb-2">
                    <span className="rounded-full px-2 py-0.5 bg-gray-100 dark:bg-gray-800">
                      {part.warranty}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 text-center">
                    {part.description}
                  </p>
                </div>

                <div className="px-4 pb-3">
                  <div className="text-xs font-medium text-primary text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 rounded-lg p-6 sm:p-8 bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800">
          <h3 className="text-lg sm:text-xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-white">
            Why Choose Our Used Auto Parts?
          </h3>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mx-auto mb-3.5 bg-primary/10">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-white">Quality Tested</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Every part undergoes rigorous testing to ensure optimal
                performance and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mx-auto mb-3.5 bg-primary/10">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-white">Warranty Included</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Comprehensive warranty coverage from 60 days to 1 year,
                depending on the part.
              </p>
            </div>

            <div className="text-center">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mx-auto mb-3.5 bg-primary/10">
                <CircleCheck className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-white">Perfect Fit</h4>
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

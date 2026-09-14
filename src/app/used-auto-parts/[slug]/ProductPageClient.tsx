"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap, Cog, Disc, Wrench, Snowflake, Lightbulb, Thermometer, Settings,
  Battery, Wind, Shield, CheckCircle, Star, ArrowRight, Phone,
  type LucideIcon,
} from "lucide-react";
import { AutoPartsForm, AutoPartsModalForm } from "@/components/Home/AutoPartsForm";
import type { Part } from "@/data/parts";
import { siteConfig } from "@/lib/site-config";

const ICONS: Record<Part["iconName"], LucideIcon> = {
  Zap, Cog, Disc, Wrench, Snowflake, Lightbulb, Thermometer, Settings, Battery, Wind,
};

export default function ProductPageClient({ part }: { part: Part }) {
  const [modalOpen, setModalOpen] = useState(false);
  const Icon = ICONS[part.iconName];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden py-14 sm:py-0 sm:min-h-[65vh]">
        <div className="absolute inset-0">
          <Image src={part.image} alt={part.name} fill className="object-cover opacity-25 dark:opacity-15" priority />
          <div className="absolute inset-0 bg-gray-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3.5 py-1.5 text-xs sm:text-sm text-orange-300 mb-5 sm:mb-6">
              <Icon className="w-4 h-4" />
              {part.category}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">{part.heroHeadline}</h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">{part.heroSubtext}</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors"
              >
                Get a Free Quote
              </button>
              <a
                href={siteConfig.phoneHref}
                className="bg-white/10 border border-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/15 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <AutoPartsForm showTitle />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Buy a Used {part.singularName} from Spikey Salvage?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {part.benefits.map((benefit, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-gray-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Spikey Salvage?
              </h2>
              <div className="space-y-4">
                {part.whyChooseFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{part.promiseTitle}</h3>
              </div>
              {part.promiseParagraphs.map((p, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Shield className="w-4 h-4 text-green-500" />
                {part.warranty}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types We Specialize In */}
      {part.typesSpecialize.length > 0 && (
        <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {part.singularName} Types We Specialize In
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {part.typesSpecialize.map((type, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{type.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 sm:py-12 sm:py-16 md:py-24 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Order Your {part.singularName}?
          </h2>
          <p className="text-gray-300 mb-8 text-sm sm:text-base">
            Get a free, no-obligation quote from Spikey Salvage today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <Link
              href="/used-auto-parts"
              className="bg-white/10 border border-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/15 transition-colors"
            >
              Browse All Parts
            </Link>
          </div>
        </div>
      </section>

      <div className="lg:hidden max-w-md mx-auto px-4 -mt-6 mb-12 relative z-10">
        <AutoPartsForm className="shadow-xl" showTitle />
      </div>

      <AutoPartsModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

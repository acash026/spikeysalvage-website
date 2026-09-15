"use client";

import { useMemo, useState } from "react";
import {
  Star, Shield, Wrench, Clock, CheckCircle, Phone, Search, ArrowRight,
  Award, Truck, Users, DollarSign, Filter, X, ChevronLeft, ChevronRight,
  Eye, TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AutoPartsModalForm } from "@/components/Home/AutoPartsForm";
import { PARTS, CATEGORIES } from "@/data/parts";
import { siteConfig } from "@/lib/site-config";

type SortKey = "relevance" | "rating_desc" | "rating_asc" | "name_asc" | "name_desc";

const stats = [
  { icon: Users, value: "15,000+", label: "Happy Customers" },
  { icon: Award, value: "2+", label: "Years Serving Florida" },
  { icon: Truck, value: "75,000+", label: "Parts in Stock" },
  { icon: DollarSign, value: "65%", label: "Average Savings" },
];

export default function CatalogClient() {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortKey>("relevance");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const updateSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };
  const updateCategory = (value: string) => {
    setCategory(value);
    setPage(1);
  };
  const updateSort = (value: SortKey) => {
    setSortBy(value);
    setPage(1);
  };

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: PARTS.length };
    for (const c of CATEGORIES.filter((c) => c.id !== "all")) {
      map[c.id] = PARTS.filter((p) => p.category === c.id).length;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    let out = PARTS.filter((p) => {
      const matchesQuery = !s
        ? true
        : p.name.toLowerCase().includes(s) ||
          p.description.toLowerCase().includes(s) ||
          p.features.some((f) => f.toLowerCase().includes(s));
      const matchesCat = category === "all" ? true : p.category === category;
      return matchesQuery && matchesCat;
    });

    switch (sortBy) {
      case "rating_desc":
        out = out.sort((a, b) => b.rating - a.rating);
        break;
      case "rating_asc":
        out = out.sort((a, b) => a.rating - b.rating);
        break;
      case "name_asc":
        out = out.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name_desc":
        out = out.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    return out;
  }, [search, category, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="flex items-center gap-2 text-white/50 text-xs sm:text-sm mb-6 sm:mb-8">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white font-medium">Used Auto Parts</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-white/80 text-xs sm:text-sm font-medium">
                {siteConfig.parentTagline}
              </div>

              <div className="space-y-4 sm:space-y-5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Premium Used <span className="text-primary">Auto Parts</span>
                </h1>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-lg">
                  Save up to 65% vs new without sacrificing reliability. Every
                  part is tested and backed by our warranty.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get Instant Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href={siteConfig.phoneHref} className="hover:text-white transition-colors">{siteConfig.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{siteConfig.hours.weekday}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/[0.06] border border-white/10 rounded-lg p-4 sm:p-5">
                  <stat.icon className="w-5 h-5 text-primary mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/50 text-xs sm:text-sm mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[180px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={search}
                onChange={(e) => updateSearch(e.target.value)}
                placeholder="Search parts, features, vehicles..."
                className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-gray-100 dark:bg-gray-800 border border-transparent rounded-lg focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white dark:focus:bg-gray-900 transition-colors text-sm sm:text-base"
              />
              {search && (
                <button
                  onClick={() => updateSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="hidden lg:flex items-center gap-1.5">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => updateCategory(c.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    category === c.id
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {c.name} <span className="opacity-60">({counts[c.id] || 0})</span>
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => updateSort(e.target.value as SortKey)}
              className="bg-gray-100 dark:bg-gray-800 border border-transparent rounded-lg py-2.5 px-3 text-sm focus:ring-2 focus:ring-primary/40 transition-colors"
            >
              <option value="relevance">Best Match</option>
              <option value="rating_desc">Highest Rated</option>
              <option value="rating_asc">Lowest Rated</option>
              <option value="name_asc">A → Z</option>
              <option value="name_desc">Z → A</option>
            </select>

            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden bg-gray-100 dark:bg-gray-800 rounded-lg p-2.5"
              aria-label="Open filters"
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-5">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Quality Promise</h3>
                </div>
                <ul className="space-y-2.5">
                  {["Grade-A OEM parts only", "Multi-point testing & inspection", "Warranty up to 1 year", "Fitment verification support"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Trending Parts</h3>
                </div>
                <div className="space-y-1">
                  {PARTS.slice(0, 4).map((part) => (
                    <Link
                      key={part.id}
                      href={`/used-auto-parts/${part.slug}`}
                      className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="relative w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={part.image} alt={part.name} fill className="object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{part.name}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          {part.rating}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-primary rounded-lg p-5 text-primary-foreground">
                <h3 className="font-bold mb-2">Need Help?</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Our experts are ready to help you find the perfect part for your vehicle.
                </p>
                <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-sm font-medium">
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 mb-5 -mx-4 px-4">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => updateCategory(c.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    category === c.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {c.name} ({counts[c.id] || 0})
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white">{pageItems.length}</span> of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">{filtered.length}</span> parts
              </div>
              {search && (
                <button onClick={() => updateSearch("")} className="text-primary hover:opacity-80 text-sm font-medium flex items-center gap-1">
                  <X className="w-4 h-4" />
                  Clear search
                </button>
              )}
            </div>

            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {pageItems.map((part) => (
                <article
                  key={part.id}
                  className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md transition-all duration-200"
                >
                  <div className="relative h-40 sm:h-48 bg-gray-50 dark:bg-gray-800">
                    <Image src={part.image} alt={part.name} fill className="object-contain p-4" />
                    <div className="absolute left-3 top-3 bg-white/95 dark:bg-gray-900/95 text-gray-700 dark:text-gray-200 text-xs px-2.5 py-1 rounded-md font-medium border border-gray-200 dark:border-gray-700">
                      {part.features[0]}
                    </div>
                    <button
                      onClick={() => router.push(`/used-auto-parts/${part.slug}`)}
                      aria-label="View details"
                      className="absolute right-3 top-3 w-8 h-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight mb-2">{part.name}</h3>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(part.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`} />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{part.rating.toFixed(1)}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">{part.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {part.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 text-xs px-2.5 py-1 rounded-md font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3.5 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                        <Shield className="w-3.5 h-3.5 text-primary" />
                        <span className="font-medium">{part.warranty}</span>
                      </div>
                      <Link
                        href={`/used-auto-parts/${part.slug}`}
                        className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-1.5 transition-all"
                      >
                        Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {pageItems.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No parts found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                  Try adjusting your search or filters to find what you&apos;re looking for.
                </p>
                <button
                  onClick={() => { updateSearch(""); updateCategory("all"); }}
                  className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                          page === pageNum
                            ? "bg-primary text-primary-foreground"
                            : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-14 sm:py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">Why Choose Our Used Parts?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every part undergoes rigorous testing and comes with our comprehensive quality guarantee.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Wrench, title: "Rigorously Tested", description: "Every part passes multi-point inspection for performance & reliability." },
              { icon: Shield, title: "Warranty Protected", description: "Coverage from 60 days to 1 year depending on part type." },
              { icon: CheckCircle, title: "Perfect Fitment", description: "VIN & part-number verification before shipping." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Find Your Perfect Part?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Get an instant quote and discover why thousands choose Spikey
            Salvage for reliable, tested used auto parts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="group bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href={siteConfig.phoneHref}
              className="bg-white/10 border border-white/10 text-white px-6 sm:px-8 py-3.5 rounded-lg font-semibold hover:bg-white/15 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold shadow-lg flex items-center gap-2"
        >
          Get Quote
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85vw] max-w-80 bg-white dark:bg-gray-900 shadow-xl">
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Filters</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center"
                  aria-label="Close filters"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-900 dark:text-white mb-3 block">Categories</label>
                <div className="space-y-2">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => updateCategory(c.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                        category === c.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {c.name} ({counts[c.id] || 0})
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <AutoPartsModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

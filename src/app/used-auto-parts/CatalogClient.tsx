"use client";

import { useMemo, useState } from "react";
import {
  Star, Shield, Wrench, Clock, CheckCircle, Phone, Search, ArrowRight,
  Award, Truck, Users, DollarSign, Filter, X, ChevronLeft, ChevronRight,
  Sparkles, Eye, TrendingUp, Package,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AutoPartsModalForm } from "@/components/Home/AutoPartsForm";
import { PARTS, CATEGORIES } from "@/data/parts";
import { siteConfig } from "@/lib/site-config";

type SortKey = "relevance" | "rating_desc" | "rating_asc" | "name_asc" | "name_desc";

const stats = [
  { icon: Users, value: "15,000+", label: "Happy Customers", color: "from-blue-500 to-cyan-500" },
  { icon: Award, value: "2+", label: "Years Serving Florida", color: "from-purple-500 to-pink-500" },
  { icon: Truck, value: "75,000+", label: "Parts in Stock", color: "from-green-500 to-emerald-500" },
  { icon: DollarSign, value: "65%", label: "Average Savings", color: "from-orange-500 to-red-500" },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <div className="w-1 h-1 bg-white/40 rounded-full" />
            <span className="text-white font-medium">Used Auto Parts</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {siteConfig.parentTagline}
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Premium Used{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                    Auto Parts
                  </span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  Save up to 65% vs new without sacrificing reliability. Every
                  part is meticulously tested and backed by our warranty.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group relative bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative flex items-center gap-2">
                    Get Instant Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <a href={siteConfig.phoneHref} className="hover:text-white transition-colors">{siteConfig.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{siteConfig.hours.weekday}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-700/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                value={search}
                onChange={(e) => updateSearch(e.target.value)}
                placeholder="Search by part name, feature, or vehicle..."
                className="w-full pl-12 pr-6 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-lg shadow-lg"
              />
              {search && (
                <button
                  onClick={() => updateSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="hidden lg:flex items-center gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => updateCategory(c.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    category === c.id
                      ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg shadow-orange-500/25"
                      : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:scale-105"
                  }`}
                >
                  {c.name} <span className="opacity-60">({counts[c.id] || 0})</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => updateSort(e.target.value as SortKey)}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-xl py-2.5 px-4 focus:ring-2 focus:ring-primary/50 transition-all"
              >
                <option value="relevance">Best Match</option>
                <option value="rating_desc">Highest Rated</option>
                <option value="rating_asc">Lowest Rated</option>
                <option value="name_asc">A → Z</option>
                <option value="name_desc">Z → A</option>
              </select>

              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-xl p-2.5"
                aria-label="Open filters"
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-3xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">Quality Promise</h3>
                </div>
                <ul className="space-y-3">
                  {["Grade-A OEM parts only", "Multi-point testing & inspection", "Warranty up to 1 year", "Fitment verification support"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-3xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">Trending Parts</h3>
                </div>
                <div className="space-y-3">
                  {PARTS.slice(0, 4).map((part) => (
                    <Link
                      key={part.id}
                      href={`/used-auto-parts/${part.slug}`}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="relative w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                        <Image src={part.image} alt={part.name} fill className="object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{part.name}</div>
                        <div className="text-xs text-slate-500 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          {part.rating}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl p-6 text-white shadow-xl">
                <h3 className="font-bold text-lg mb-4">Need Help?</h3>
                <p className="text-white/90 text-sm mb-4">
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
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 mb-6">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => updateCategory(c.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    category === c.id
                      ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg"
                      : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {c.name} ({counts[c.id] || 0})
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="text-slate-600 dark:text-slate-400">
                Showing <span className="font-semibold text-slate-900 dark:text-white">{pageItems.length}</span> of{" "}
                <span className="font-semibold text-slate-900 dark:text-white">{filtered.length}</span> parts
              </div>
              {search && (
                <button onClick={() => updateSearch("")} className="text-primary hover:opacity-80 text-sm font-medium flex items-center gap-1">
                  <X className="w-4 h-4" />
                  Clear search
                </button>
              )}
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {pageItems.map((part) => (
                <article
                  key={part.id}
                  className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="relative h-48 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
                    <Image src={part.image} alt={part.name} fill className="object-contain" />
                    <div className="absolute left-4 top-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                      {part.features[0]}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <button
                          onClick={() => router.push(`/used-auto-parts/${part.slug}`)}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                          aria-label="View details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-3">{part.name}</h3>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(part.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-300 dark:text-slate-600"}`} />
                        ))}
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white">{part.rating.toFixed(1)}</span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">{part.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {part.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 text-orange-800 dark:text-orange-300 text-xs px-3 py-1 rounded-full font-medium border border-orange-200/50 dark:border-orange-700/50">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Shield className="w-4 h-4 text-emerald-500" />
                        <span className="font-medium">{part.warranty}</span>
                      </div>
                      <Link
                        href={`/used-auto-parts/${part.slug}`}
                        className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-medium">Compatible:</span> {part.compatibility.slice(0, 3).join(", ")}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {pageItems.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No parts found</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Try adjusting your search or filters to find what you&apos;re looking for.
                </p>
                <button
                  onClick={() => { updateSearch(""); updateCategory("all"); }}
                  className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-4">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`w-10 h-10 rounded-xl font-semibold transition-all ${
                          page === pageNum
                            ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg"
                            : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-orange-900/20"
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
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200/60 dark:border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Our Used Parts?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Every part undergoes rigorous testing and comes with our comprehensive quality guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Wrench, title: "Rigorously Tested", description: "Every part passes multi-point inspection for performance & reliability.", color: "from-blue-500 to-cyan-500" },
              { icon: Shield, title: "Warranty Protected", description: "Coverage from 60 days to 1 year depending on part type.", color: "from-emerald-500 to-teal-500" },
              { icon: CheckCircle, title: "Perfect Fitment", description: "VIN & part-number verification before shipping.", color: "from-purple-500 to-pink-500" },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Find Your Perfect Part?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get an instant quote and discover why thousands choose Spikey
            Salvage for reliable, tested used auto parts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="group bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={siteConfig.phoneHref}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-2xl flex items-center gap-2 hover:scale-105 transition-all"
        >
          Get Quote
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Filters</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Close filters"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-slate-900 dark:text-white mb-3 block">Categories</label>
                  <div className="space-y-2">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => updateCategory(c.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                          category === c.id
                            ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                        }`}
                      >
                        {c.name} ({counts[c.id] || 0})
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
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

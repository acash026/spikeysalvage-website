import { useEffect, useMemo, useState } from "react";
import {
  Star,
  Shield,
  Wrench,
  Clock,
  CheckCircle,
  Phone,
  Search,
  ArrowRight,
  Award,
  Truck,
  Users,
  DollarSign,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Eye,
  Heart,
  ShoppingBag,
  TrendingUp,
  Package,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { AutoPartsModalForm } from "../components/Home/AutoPartsForm";

// Types
interface Part {
  id: number;
  name: string;
  rating: number;
  image: string;
  condition: string;
  description: string;
  compatibility: string[];
  warranty: string;
  pageLink: string;
  category: string;
  features: string[];
  price?: string;
  originalPrice?: string;
  discount?: number;
}

type SortKey =
  | "relevance"
  | "rating_desc"
  | "rating_asc"
  | "name_asc"
  | "name_desc";

// Enhanced DATA with pricing
const PARTS: Part[] = [
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
    category: "powertrain",
    features: [
      "Compression Tested",
      "Performance Verified",
      "Certified Quality",
    ],
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
    category: "powertrain",
    features: ["Rebuilt", "Bench Tested", "New Seals"],
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
    category: "exterior",
    features: ["Low Mileage", "Balanced", "Inspected"],
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
    category: "hvac",
    features: ["Bench Tested", "Refrigerant Checked", "Performance Verified"],
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
    category: "exterior",
    features: ["Clear Lens", "No Cracks", "No UV Yellowing"],
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
    category: "powertrain",
    features: ["New Seals", "Fluid Changed", "Tested Engagement"],
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
    category: "powertrain",
    features: ["New Bearings", "Bench Tested", "Certified"],
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
    category: "powertrain",
    features: ["Balanced", "Vibration-Free", "U-Joint Inspected"],
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
    category: "electrical",
    features: ["Voltage Tested", "Certified", "High Output"],
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
    category: "powertrain",
    features: ["Pressure Tested", "Leak-Free", "Fan Assembly Included"],
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
    category: "exterior",
    features: ["Electrical Tested", "Tilt & Telescoping", "Certified"],
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
    category: "powertrain",
    features: ["Crack Inspected", "Machined Gasket Surface", "Stainless/Steel"],
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
    category: "powertrain",
    features: ["Throttle Body Included", "Sensors Included", "Air Flow Tested"],
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
    category: "powertrain",
    features: ["New CV Joints", "Boots Included", "Rotation Tested"],
  },
];

const CATEGORIES = [
  { id: "all", name: "All Parts" },
  { id: "powertrain", name: "Powertrain" },
  { id: "exterior", name: "Exterior" },
  { id: "hvac", name: "HVAC" },
  { id: "electrical", name: "Electrical" },
];

export default function UsedAutoPartsPage() {
  const navigate = useNavigate();

  // UI State
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortKey>("relevance");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const pageSize = 9;

  useEffect(() => setPage(1), [search, category, sortBy]);

  // Derived counts
  const counts = useMemo(() => {
    const map: Record<string, number> = { all: PARTS.length };
    for (const c of CATEGORIES.filter((c) => c.id !== "all")) {
      map[c.id] = PARTS.filter((p) => p.category === c.id).length;
    }
    return map;
  }, []);

  // Filter & sort
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

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Happy Customers",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      value: "25+",
      label: "Years Experience",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Truck,
      value: "100,000+",
      label: "Parts in Stock",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: DollarSign,
      value: "60%",
      label: "Average Savings",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-green-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Premium Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with mesh gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0ibTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          {/* Breadcrumb with premium styling */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link
              to="/"
              className="hover:text-white/80 cursor-pointer transition-colors"
            >
              Home
            </Link>
            <div className="w-1 h-1 bg-white/40 rounded-full" />
            <span className="text-white font-medium">Used Auto Parts</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Premium Quality Guarantee
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Premium Used{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                    Auto Parts
                  </span>
                </h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  Save up to 60% vs new without sacrificing reliability. Every
                  part is meticulously tested and backed by our premium
                  warranty.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group relative bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                  <span className="relative flex items-center gap-2">
                    Get Instant Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                {/* <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300">
                  Browse Catalog
                </button> */}
              </div>

              <div className="flex items-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <a
                    href="tel:+13214657213"
                    className="hover:text-white transition-colors"
                  >
                    +1 (321) 465-7213
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Premium stat cards */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="relative space-y-1">
                    <div className="text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-white/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-float delay-1000" />
      </section>

      {/* Enhanced Search & Filters */}
      <section className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-700/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            {/* Premium search bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by part name, feature, or vehicle..."
                className="w-full pl-12 pr-6 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-2xl focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-lg shadow-lg"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="hidden lg:flex items-center gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    category === c.id
                      ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg shadow-orange-500/25"
                      : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:scale-105"
                  }`}
                >
                  {c.name}{" "}
                  <span className="opacity-60">({counts[c.id] || 0})</span>
                </button>
              ))}
            </div>

            {/* View mode & sort */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600"
                      : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  <Package className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600"
                      : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-xl py-2.5 px-4 focus:ring-2 focus:ring-orange-500/50 transition-all"
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
          {/* Premium Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-6">
              {/* Quality promise card */}
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-3xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">Quality Promise</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Grade-A OEM parts only",
                    "Multi-point testing & inspection",
                    "Warranty up to 1 year",
                    "Fitment verification support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trending parts */}
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-3xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">Trending Parts</h3>
                </div>
                <div className="space-y-3">
                  {PARTS.slice(0, 4).map((part) => (
                    <div
                      key={part.id}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                    >
                      <img
                        src={part.image}
                        alt={part.name}
                        className="w-10 h-10 object-contain bg-slate-100 dark:bg-slate-800 rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">
                          {part.name}
                        </div>
                        <div className="text-xs text-slate-500 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          {part.rating}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact card */}
              <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">Need Help?</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Our experts are ready to help you find the perfect part for
                  your vehicle.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+13214657213"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    +1 (321) 465-7213
                  </a>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    24/7 Support Available
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="lg:col-span-9">
            {/* Mobile category pills */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 mb-6">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
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

            {/* Results header */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-slate-600 dark:text-slate-400">
                Showing{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  {pageItems.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  {filtered.length}
                </span>{" "}
                parts
                {search && (
                  <span className="ml-2">
                    for "
                    <span className="font-medium text-slate-900 dark:text-white">
                      {search}
                    </span>
                    "
                  </span>
                )}
              </div>
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear search
                </button>
              )}
            </div>

            {/* Parts Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {pageItems.map((part) => (
                <article
                  key={part.id}
                  className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Image section */}
                  <div className="relative">
                    <img
                      src={part.image}
                      alt={part.name}
                      className={`w-full object-contain bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 ${
                        viewMode === "grid" ? "h-48" : "h-32"
                      }`}
                    />

                    {/* Condition badge */}
                    <div className="absolute left-4 top-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                      {part.condition}
                    </div>

                    {/* Discount badge */}
                    {part.discount && (
                      <div className="absolute right-4 top-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                        -{part.discount}%
                      </div>
                    )}

                    {/* Action buttons overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleFavorite(part.id)}
                          className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all ${
                            favorites.has(part.id)
                              ? "bg-red-500 text-white"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }`}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              favorites.has(part.id) ? "fill-current" : ""
                            }`}
                          />
                        </button>
                        <button
                          onClick={() => navigate(part.pageLink)}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setModalOpen(true)}
                          className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700 transition-all shadow-lg"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                        {part.name}
                      </h3>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(part.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-slate-300 dark:text-slate-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {part.rating.toFixed(1)}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {50 + part.id * 13} reviews
                      </span>
                    </div>

                    {/* Pricing */}
                    {part.price && (
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">
                          {part.price}
                        </span>
                        {part.originalPrice && (
                          <span className="text-lg text-slate-500 line-through">
                            {part.originalPrice}
                          </span>
                        )}
                        {part.discount && (
                          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                            Save {part.discount}%
                          </span>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {part.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {part.features.slice(0, 3).map((feature, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 text-orange-800 dark:text-orange-300 text-xs px-3 py-1 rounded-full font-medium border border-orange-200/50 dark:border-orange-700/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Shield className="w-4 h-4 text-emerald-500" />
                        <span className="font-medium">{part.warranty}</span>
                      </div>
                      <button
                        onClick={() => setModalOpen(true)}
                        className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Compatibility */}
                    <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-medium">Compatible:</span>{" "}
                      {part.compatibility.slice(0, 3).join(", ")}
                      {part.compatibility.length > 3 &&
                        ` +${part.compatibility.length - 3} more`}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty state */}
            {pageItems.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  No parts found
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Try adjusting your search or filters to find what you're
                  looking for.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("all");
                  }}
                  className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Enhanced Pagination */}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose Our Used Parts?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Every part undergoes rigorous testing and comes with our
              comprehensive quality guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Rigorously Tested",
                description:
                  "Every part passes multi-point inspection for performance & reliability.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Shield,
                title: "Warranty Protected",
                description:
                  "Coverage from 60 days to 1 year depending on part type.",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: CheckCircle,
                title: "Perfect Fitment",
                description: "VIN & part-number verification before shipping.",
                color: "from-purple-500 to-pink-500",
              },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Find Your Perfect Part?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get an instant quote and discover why thousands choose us for
            reliable, tested used auto parts.
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
              href="tel:+13214657213"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +1 (321) 465-7213
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-2xl flex items-center gap-2 hover:scale-105 transition-all"
        >
          Get Quote
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Filters
                </h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-slate-900 dark:text-white mb-3 block">
                    Categories
                  </label>
                  <div className="space-y-2">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setCategory(c.id)}
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

                <div>
                  <label className="text-sm font-semibold text-slate-900 dark:text-white mb-3 block">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortKey)}
                    className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="relevance">Best Match</option>
                    <option value="rating_desc">Highest Rated</option>
                    <option value="rating_asc">Lowest Rated</option>
                    <option value="name_asc">A → Z</option>
                    <option value="name_desc">Z → A</option>
                  </select>
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

      {/* Modal */}
      <AutoPartsModalForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

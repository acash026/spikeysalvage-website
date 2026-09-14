import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // adjust path as needed
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type FormDataState = {
  name: string;
  email: string;
  phone: string;
  year: string;
  make: string;
  model: string;
  partType: string;
};

// Enhanced Modal Component with blur backdrop
const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center p-4 pt-16 md:pt-4">
      {/* Enhanced backdrop with blur effect */}
      <div
        className="absolute inset-0 bg-black/60 transition-all duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl font-[Montserrat] max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100">
        {/* Enhanced close button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

// Enhanced Form Component
const AutoPartsForm = ({
  onSubmit,
  className = "",
  showTitle = true,
  onSuccess,
}: {
  onSubmit?: (formData: FormDataState) => void;
  className?: string;
  showTitle?: boolean;
  onSuccess?: () => void;
}) => {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    partType: "",
  });

  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Car data from CSV
  const carData: Record<string, string[]> = {
    Acura: [
      "CL",
      "CL Type-S",
      "CSX",
      "EL",
      "ILX",
      "ILX Hybrid",
      "Integra",
      "Integra Type R",
      "Legend",
      "MDX",
      "MDX Hybrid",
      "NSX",
      "NSX Type S",
      "RDX",
      "RL",
      "RLX",
      "RLX Sport Hybrid",
      "RSX",
      "RSX Type-S",
      "SLX",
      "TL",
      "TL Type-S",
      "TLX",
      "TLX Type S",
      "TSX",
      "TSX Sport Wagon",
      "Vigor",
      "ZDX",
      "Other",
    ],
    "Alfa Romeo": [
      "145",
      "146",
      "147",
      "155",
      "156",
      "159",
      "164",
      "166",
      "33",
      "4C",
      "4C Spider",
      "8C Competizione",
      "Brera",
      "Giulia",
      "Giulia Quadrifoglio",
      "Giulietta",
      "GT",
      "MiTo",
      "Spider",
      "Stelvio",
      "Stelvio Quadrifoglio",
      "Other",
    ],
    "Aston Martin": [
      "DB11",
      "DB11 AMR",
      "DB7",
      "DB7 Zagato",
      "DB9",
      "DB9 AMR",
      "DB9 GT",
      "DBS",
      "DBS Superleggera",
      "DBX",
      "DBX707",
      "Lagonda Taraf",
      "Rapide",
      "Rapide AMR",
      "V12 Vanquish",
      "V12 Vantage",
      "V8 Vantage",
      "Vanquish",
      "Vanquish S",
      "Vanquish Zagato",
      "Vantage",
      "Vantage AMR",
      "Virage",
      "Other",
    ],
    Asuna: ["GT", "SE", "Sunfire", "Other"],
    Audi: [
      "A2",
      "A3",
      "A3 Sportback",
      "A4",
      "A4 Allroad",
      "A5",
      "A5 Sportback",
      "A6",
      "A6 Allroad",
      "A7",
      "A7 Sportback",
      "A8",
      "A8 L",
      "e-tron",
      "e-tron GT",
      "e-tron S",
      "Q2",
      "Q3",
      "Q3 Sportback",
      "Q4 e-tron",
      "Q4 Sportback e-tror",
      "Q5",
      "Q5 Sportback",
      "Q7",
      "Q8",
      "R8",
      "R8 Spyder",
      "RS2",
      "RS3",
      "RS4",
      "RS5",
      "RS6",
      "RS7",
      "S3",
      "S4",
      "S5",
      "S6",
      "S7",
      "S8",
      "SQ2",
      "SQ5",
      "SQ7",
      "SQ8",
      "TT",
      "TT RS",
      "TTS",
      "Other",
    ],
    Austin: ["Maestro Montego", "Metro", "Other"],
    Bentley: [
      "Arnage",
      "Arnage R",
      "Arnage T",
      "Azure",
      "Azure T",
      "Bentayga",
      "Bentayga Hybrid",
      "Brooklands",
      "Continental Flying Spur",
      "Continental GT",
      "Continental GTC",
      "Continental Supersports",
      "Mulsanne",
      "Mulsanne Speed",
      "Turbo R",
      "Turbo RT",
      "Other",
    ],
    BMW: [
      "1 Series",
      "1 Series M",
      "2 Series",
      "2 Series Active Tourer",
      "2 Series Gran Coupe",
      "3 Series",
      "3 Series Gran Turismo",
      "4 Series",
      "4 Series Gran Coupe",
      "5 Series",
      "5 Series Gran Turismo",
      "6 Series",
      "6 Series Gran Coupe",
      "7 Series",
      "8 Series",
      "8 Series Gran Coupe",
      "i3",
      "i4",
      "i5",
      "i7",
      "i8",
      "iX",
      "iX3",
      "M1",
      "M2",
      "M3",
      "M4",
      "M5",
      "M6",
      "M8",
      "X1",
      "X2",
      "X3",
      "X3 M",
      "X4",
      "X4 M",
      "X5",
      "X5 M",
      "X6",
      "X6 M",
      "X7",
      "Z3",
      "Z3 M",
      "Z4",
      "Z4 M",
      "Z8",
      "Other",
    ],
    Buick: [
      "Cascada",
      "Century",
      "Enclave",
      "Encore",
      "Encore GX",
      "Envision",
      "LaCrosse",
      "LeSabre",
      "Lucerne",
      "Park Avenue",
      "Rainier",
      "Regal",
      "Regal GS",
      "Regal TourX",
      "Rendezvous",
      "Riviera",
      "Skylark",
      "Terraza",
      "Verano",
      "Other",
    ],
    Cadillac: [
      "ATS",
      "ATS-V",
      "BLS",
      "Catera",
      "CT4",
      "CT4-V",
      "CT5",
      "CT5-V",
      "CT6",
      "CT6-V",
      "CTS",
      "CTS-V",
      "DeVille",
      "DTS",
      "Eldorado",
      "Escalade",
      "Escalade ESV",
      "Escalade EXT",
      "Escalade Hybrid",
      "Fleetwood",
      "LYRIQ",
      "Seville",
      "SRX",
      "STS",
      "STS-V",
      "XLR",
      "XLR-V",
      "XT4",
      "XT5",
      "XT6",
      "Other",
    ],
    Chevrolet: [
      "Astro",
      "Avalanche",
      "Aveo",
      "Blazer",
      "Blazer EV",
      "Bolt EUV",
      "Bolt EV",
      "Camaro",
      "Camaro ZL1",
      "Caprice",
      "Captiva",
      "Cavalier",
      "Cobalt",
      "Colorado",
      "Corvette",
      "Corvette Stingray",
      "Corvette Z06",
      "Corvette ZR1",
      "Cruze",
      "Cruze Limited",
      "Equinox",
      "Express",
      "HHR",
      "Impala",
      "Impala Limited",
      "Lumina",
      "Malibu",
      "Malibu Hybrid",
      "Metro",
      "Monte Carlo",
      "Prizm",
      "Silverado",
      "Silverado EV",
      "Sonic",
      "Spark",
      "Spark EV",
      "SS",
      "SSR",
      "Suburban",
      "Tahoe",
      "Tracker",
      "Trailblazer",
      "Traverse",
      "Trax",
      "Uplander",
      "Venture",
      "Volt",
      "Other",
    ],
    Chrysler: [
      "200",
      "300",
      "300M",
      "Aspen",
      "Cirrus",
      "Concorde",
      "Crossfire",
      "Grand Voyager",
      "LHS",
      "Pacifica",
      "Pacifica Hybrid",
      "Prowler",
      "PT Cruiser",
      "Sebring",
      "Town & Country",
      "Voyager",
      "Other",
    ],
    Citroen: [
      "Ami",
      "Berlingo",
      "C1",
      "C3",
      "C4",
      "C4 Cactus",
      "C4 Grand Picasso",
      "C4 Picasso",
      "C5 Aircross",
      "e-C4",
      "Saxo",
      "SpaceTourer",
      "Xsara",
      "Other",
    ],
    Dodge: [
      "Avenger",
      "Caliber",
      "Caravan",
      "Challenger",
      "Challenger SRT",
      "Charger",
      "Charger SRT",
      "Dakota",
      "Dart",
      "Durango",
      "Durango SRT",
      "Grand Caravan",
      "Hornet",
      "Intrepid",
      "Journey",
      "Magnum",
      "Neon",
      "Nitro",
      "Ram",
      "Ramcharger",
      "Stealth",
      "Stratus",
      "Viper",
      "Viper SRT",
      "Other",
    ],
    Jeep: [
      "Cherokee",
      "CJ",
      "Comanche",
      "Commander",
      "Compass",
      "FC",
      "Gladiator",
      "Grand Cherokee",
      "Grand Wagoneer",
      "J10",
      "J20",
      "Laredo",
      "Liberty",
      "Patriot",
      "Renegade",
      "Renegade (Classic)",
      "Scrambler",
      "Wagoneer",
      "Willys",
      "Wrangler",
      "Other",
    ],
    Maserati: [
      "3200 GT",
      "Biturbo",
      "Coupe",
      "Ghibli",
      "GranSport",
      "GranTurismo",
      "Grecale",
      "Levante",
      "MC20",
      "Quattroporte",
      "Shamal",
      "Spyder",
      "Other",
    ],
    Mazda: [
      "2",
      "3",
      "5",
      "6",
      "626",
      "B-Series",
      "CX-3",
      "CX-30",
      "CX-5",
      "CX-50",
      "CX-7",
      "CX-9",
      "CX-90",
      "Millenia",
      "MPV",
      "MX-3",
      "MX-30",
      "MX-5 Miata",
      "MX-6",
      "Protege",
      "RX-7",
      "RX-8",
      "Tribute",
      "Other",
    ],
    Mercedes: [
      "A-Class",
      "AMG GT",
      "B-Class",
      "C-Class",
      "CLA",
      "CLK",
      "CLS",
      "E-Class",
      "EQA",
      "EQB",
      "EQC",
      "EQE",
      "EQS",
      "G-Class",
      "GL",
      "GLA",
      "GLC",
      "GLE",
      "GLK",
      "GLS",
      "ML",
      "R-Class",
      "S-Class",
      "SL",
      "SLK",
      "Other",
    ],
    Mercury: [
      "Cougar",
      "Grand Marquis",
      "Mariner",
      "Marquis",
      "Milan",
      "Montego",
      "Mountaineer",
      "Mystique",
      "Sable",
      "Tracer",
      "Villager",
      "Other",
    ],
    Mitsubishi: [
      "3000GT",
      "Diamante",
      "Eclipse",
      "Endeavor",
      "Galant",
      "i-MiEV",
      "Lancer",
      "Mirage",
      "Montero",
      "Montero Sport",
      "Outlander",
      "Outlander PHEV",
      "Outlander Sport",
      "Raider",
      "RVR",
      "Sigma",
      "Starion",
      "Tredia",
      "Van",
      "Other",
    ],
    Nissan: [
      "200SX",
      "240SX",
      "300ZX",
      "350Z",
      "370Z",
      "Altima",
      "Armada",
      "Cube",
      "Frontier",
      "GT-R",
      "Juke",
      "Kicks",
      "Leaf",
      "Maxima",
      "Micra",
      "Murano",
      "NV",
      "NV200",
      "Pathfinder",
      "Pulsar",
      "Quest",
      "Rogue",
      "Rogue Sport",
      "Sentra",
      "Stanza",
      "Titan",
      "Titan XD",
      "Versa",
      "Xterra",
      "Other",
    ],
    Oldsmobile: [
      "Achieva",
      "Alero",
      "Aurora",
      "Bravada",
      "Cutlass",
      "Eighty-Eight Ninety-Eight",
      "Intrigue",
      "Silhouette",
      "Other",
    ],
    Opel: [
      "Adam",
      "Astra",
      "Combo",
      "Corsa",
      "Crossland",
      "Frontera",
      "Grandland",
      "Insignia",
      "Karl",
      "Meriva",
      "Mokka",
      "Monterey",
      "Omega",
      "Signum",
      "Vectra",
      "Zafira",
      "Other",
    ],
    Pontiac: [
      "Aztek",
      "Bonneville",
      "Firebird",
      "G5",
      "G6",
      "G8",
      "Grand Am",
      "Grand Prix",
      "GTO",
      "Montana",
      "Solstice",
      "Sunfire",
      "Torrent",
      "Trans Am",
      "Vibe",
      "Other",
    ],
    Porsche: [
      "718 Boxster",
      "718 Cayman",
      "911 Carrera",
      "911 GT2",
      "911 GT3",
      "911 Turbo",
      "918 Spyder",
      "959",
      "Boxster",
      "Carrera GT",
      "Cayenne",
      "Cayenne Coupe",
      "Cayman",
      "Macan",
      "Panamera",
      "Taycan",
      "Other",
    ],
    Saturn: [
      "Astra",
      "Aura",
      "L-Series lon",
      "Outlook",
      "Relay",
      "S-Series",
      "Sky",
      "Vue",
      "Other",
    ],
    Scion: ["FR-S", "iA", "iM", "iQ", "tC", "xA", "xB", "xD", "Other"],
    Smart: [
      "EQ Forfour",
      "EQ Fortwo",
      "Forfour",
      "Fortwo",
      "Roadster",
      "Other",
    ],
    Subaru: [
      "Ascent",
      "Baja",
      "BRZ",
      "Crosstrek",
      "Forester",
      "Impreza",
      "Legacy",
      "Outback",
      "Solterra",
      "SVX",
      "Tribeca",
      "WRX",
      "WRX STI",
      "Other",
    ],
    Suzuki: [
      "Across",
      "Aerio",
      "Baleno",
      "Esteem",
      "Grand Vitara",
      "Ignis",
      "Jimny",
      "Kizashi",
      "S-Cross",
      "Swace",
      "Swift",
      "SX4",
      "Vitara",
      "Other",
    ],
    Tesla: ["Model 3", "Model S", "Model X", "Model Y", "Roadster", "Other"],
    Toyota: [
      "4Runner",
      "Avalon",
      "bZ4X",
      "Camry",
      "Camry Solara",
      "Celica",
      "Corolla",
      "Corolla Cross",
      "Crown",
      "Echo",
      "FJ Cruiser",
      "GR86",
      "Highlander",
      "Highlander Hybri",
      "Land Cruiser",
      "Matrix",
      "Mirai",
      "MR2 Spyder",
      "Paseo",
      "Previa",
      "Prius",
      "Prius c",
      "Prius v",
      "RAV4",
      "RAV4 Hybrid",
      "Sequoia",
      "Sienna",
      "Supra",
      "Tacoma",
      "Tercel",
      "Tundra",
      "Venza",
      "Yaris",
      "Other",
    ],
    Volkswagen: [
      "Arteon",
      "Atlas",
      "Beetle",
      "Bora",
      "CC",
      "Corrado",
      "Eos",
      "Fox",
      "Golf",
      "Golf GTI",
      "Golf R",
      "ID.3",
      "ID.4",
      "Jetta",
      "Passat",
      "Phaeton",
      "Polo",
      "Rabbit",
      "Scirocco",
      "Taos",
      "Tiguan",
      "Touareg",
      "Vento",
      "Other",
    ],
    Volvo: [
      "C30",
      "C40",
      "C70",
      "S40",
      "S60",
      "S70",
      "S80",
      "S90",
      "V40",
      "V50",
      "V60",
      "V70",
      "V90",
      "XC40",
      "XC60",
      "XC70",
      "XC90",
      "Other",
    ],
    Other: ["Other"],
  };

  type CarMake = keyof typeof carData;

  const years = Array.from({ length: 40 }, (_, i) => 2024 - i);
  const makes = Object.keys(carData);

  const partTypes = [
    "Engine",
    "Transmission",
    "Door Mirror",
    "Transfercase",
    "Cylinder Head",
    "Headlight",
    "Tail Light",
    "Wheels / Rims",
    "Seat belt",
    "Air bag",
    "Stering coloum",
    "Radio",
    "Suspension",
    "Electrical",
    "Rearview mirror",
    "Engine Computer",
    "Fuel System",
    "Air Conditioning",
    "Brakes",
    "Exhaust",
    "Interior Parts",
    "Body Parts",
    "Others",
  ];
   const API_URL = "https://spikeysalvage-backend-pi.vercel.app";

  useEffect(() => {
    if (
      formData.make &&
      (Object.keys(carData) as string[]).includes(formData.make)
    ) {
      setAvailableModels([...carData[formData.make as CarMake]]);
      if (
        formData.model &&
        !carData[formData.make as CarMake].includes(formData.model)
      ) {
        setFormData((prev: FormDataState) => ({ ...prev, model: "" }));
      }
    } else {
      setAvailableModels([]);
      setFormData((prev: FormDataState) => ({ ...prev, model: "" }));
    }
  }, [formData.make]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: FormDataState) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.year ||
      !formData.make ||
      !formData.model ||
      !formData.partType
    ) {
      alert("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // First API call — send email
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send email");
      }

      // ✅ Optional second API call — submission hit tracker
      await fetch(`${API_URL}/api/submissionhit`, {
        method: "GET",
      });
      await addDoc(collection(db, "autoPartRequests"), {
        ...formData,
        timestamp: new Date().toISOString(),
      });
      toast.success(
        "Your request has been submitted successfully! Check your email for confirmation."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        year: "",
        make: "",
        model: "",
        partType: "",
      });

      if (onSubmit) onSubmit(formData);
      if (onSuccess) onSuccess();
      navigate("/thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "There was an error submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 font-[Montserrat] rounded-2xl shadow-2xl p-8 ${className}`}
    >
      {showTitle && (
        <div className="text-center mb-4 lg:mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Get Your Free Quote
          </h2>
          <p className="text-sm  text-gray-600 dark:text-gray-300">
            Submit your request and we'll get back to you with the best price
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
        {/* Personal Info Row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              Your Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Contact & Year Row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              Your Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
              placeholder="Enter your phone"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              Model Year *
            </label>
            <select
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Make & Model Row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              Make *
            </label>
            <select
              name="make"
              value={formData.make}
              onChange={handleInputChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
            >
              <option value="">Select Make</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              Model *
            </label>
            <select
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              required
              disabled={!formData.make}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <option value="">Select Model</option>
              {availableModels.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Part Type - Full Width */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
            Part Type *
          </label>
          <select
            name="partType"
            value={formData.partType}
            onChange={handleInputChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
          >
            <option value="">Select Part Type</option>
            {partTypes.map((part) => (
              <option key={part} value={part}>
                {part}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
              SUBMITTING...
            </div>
          ) : (
            "SUBMIT REQUEST"
          )}
        </button>
      </form>
    </div>
  );
};

// Modal Form Component that combines both
const AutoPartsModalForm = ({
  isOpen,
  onClose,
  onSubmit,
  showTitle = true,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (formData: FormDataState) => void;
  showTitle?: boolean;
}) => {
  const handleFormSuccess = () => {
    setTimeout(() => {
      onClose(); // Close modal after successful submission with slight delay
    }, 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AutoPartsForm
        onSubmit={onSubmit}
        onSuccess={handleFormSuccess}
        showTitle={showTitle}
      />
    </Modal>
  );
};

// Hook for auto-opening modal after delay
const useAutoOpenModal = (delay: number = 5000) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  useEffect(() => {
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, hasAutoOpened]);

  return {
    isOpen,
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  };
};
export { AutoPartsForm, AutoPartsModalForm, useAutoOpenModal };
export type { FormDataState };

export type PartFeatureItem = {
  title: string;
  description: string;
};

export type Part = {
  id: number;
  slug: string;
  name: string;
  singularName: string;
  image: string;
  iconName:
    | "Zap"
    | "Cog"
    | "Disc"
    | "Wrench"
    | "Snowflake"
    | "Lightbulb"
    | "Thermometer"
    | "Settings"
    | "Battery"
    | "Wind";
  category: "Powertrain" | "Exterior" | "HVAC" | "Electrical";
  rating: number;
  warranty: string;
  compatibility: string[];
  features: string[];
  description: string;
  heroHeadline: string;
  heroSubtext: string;
  benefits: PartFeatureItem[];
  whyChooseFeatures: PartFeatureItem[];
  promiseTitle: string;
  promiseParagraphs: string[];
  typesSpecialize: PartFeatureItem[];
  metaDescription: string;
};

export const PARTS: Part[] = [
  {
    id: 1,
    slug: "used-engines",
    name: "Used Engines",
    singularName: "Engine",
    image: "/assets/images/car_parts/engine.png",
    iconName: "Zap",
    category: "Powertrain",
    rating: 4.8,
    warranty: "90-day warranty",
    compatibility: ["Honda Accord", "Toyota Camry", "Ford F-150"],
    features: ["Compression Tested", "Performance Verified", "Certified Quality"],
    description:
      "Complete engine assembly with comprehensive testing. All engines come with detailed compression reports and performance verification.",
    heroHeadline: "High-Performance Used Engines",
    heroSubtext:
      "Get the power you need with our premium quality used engines. Thoroughly tested, verified, and ready to deliver exceptional performance.",
    benefits: [
      { title: "70% Cost Savings", description: "Used engines cost 70% less than new ones with same performance" },
      { title: "Proven Reliability", description: "Tested engines with verified performance history" },
      { title: "Extended Warranty", description: "Comprehensive warranty coverage for peace of mind" },
      { title: "Eco-Friendly Choice", description: "Reduce waste and support sustainable automotive practices" },
    ],
    whyChooseFeatures: [
      { title: "Premium OEM Quality", description: "Only A-grade OEM used engines with verified history" },
      { title: "Best Price Guarantee", description: "Unbeatable prices with quality assurance" },
      { title: "Thoroughly Inspected", description: "Multi-point inspection and performance testing" },
      { title: "Fast Delivery", description: "Quick and secure shipping nationwide" },
    ],
    promiseTitle: "Our Engine Promise",
    promiseParagraphs: [
      "With decades of experience in the automotive industry, we at Spikey Salvage specialize in sourcing and testing premium used engines. We guarantee performance and reliability while offering transparent, competitive pricing that beats traditional junkyard costs.",
    ],
    typesSpecialize: [
      { title: "4-Cylinder Engines", description: "Fuel-efficient and reliable engines perfect for compact cars and sedans" },
      { title: "V6 Engines", description: "Balanced performance and efficiency for mid-size vehicles and SUVs" },
      { title: "V8 Engines", description: "High-performance engines for trucks, sports cars, and luxury vehicles" },
    ],
    metaDescription:
      "Find quality used engines at Spikey Salvage in St Cloud, FL. OEM-grade, tested for performance, and backed by warranty — save up to 70% versus buying new.",
  },
  {
    id: 2,
    slug: "used-transmissions",
    name: "Used Transmissions",
    singularName: "Transmission",
    image: "/assets/images/car_parts/transmission.png",
    iconName: "Cog",
    category: "Powertrain",
    rating: 4.6,
    warranty: "180-day warranty",
    compatibility: ["Toyota Camry", "Honda Civic", "Ford Fusion"],
    features: ["Rebuilt", "Bench Tested", "New Seals"],
    description:
      "Professionally rebuilt transmissions with new seals and updated components. Bench tested for optimal performance.",
    heroHeadline: "Premium Quality Used Transmissions",
    heroSubtext:
      "Restore your vehicle's power delivery with our premium quality used transmissions. Tested for performance, reliability, and smooth operation.",
    benefits: [
      { title: "Up to 70% Savings", description: "Used transmissions cost significantly less than new ones with same performance" },
      { title: "Smooth Operation", description: "Restore seamless gear shifting and optimal power transfer" },
      { title: "Quality Tested", description: "Every transmission tested for performance and reliability" },
      { title: "Eco-Friendly", description: "Reduce automotive waste through sustainable part reuse" },
    ],
    whyChooseFeatures: [
      { title: "OEM Quality Assured", description: "Premium OEM used transmissions with guaranteed performance standards" },
      { title: "Best Price Promise", description: "Unmatched pricing with complete quality assurance guarantee" },
      { title: "Performance Tested", description: "Comprehensive testing for optimal shifting and power delivery" },
      { title: "Secure Shipping", description: "Professional packaging and fast delivery nationwide" },
    ],
    promiseTitle: "Our Transmission Promise",
    promiseParagraphs: [
      "With extensive experience in automotive transmission systems, we at Spikey Salvage specialize in sourcing and testing premium used transmissions. We guarantee performance and reliability while offering transparent, competitive pricing that outperforms traditional salvage yard options.",
    ],
    typesSpecialize: [
      { title: "Automatic Transmissions", description: "Smooth shifting automatic transmissions for effortless driving experience" },
      { title: "Manual Transmissions", description: "Precision manual transmissions for enhanced control and performance" },
      { title: "CVT Transmissions", description: "Continuously variable transmissions for optimal fuel efficiency" },
    ],
    metaDescription:
      "Shop premium used transmissions at Spikey Salvage in St Cloud, FL. Every unit is tested for smooth shifting and reliability, with warranty coverage included.",
  },
  {
    id: 3,
    slug: "used-wheels",
    name: "Used Wheels",
    singularName: "Wheel",
    image: "/assets/images/car_parts/wheel.png",
    iconName: "Disc",
    category: "Exterior",
    rating: 4.9,
    warranty: "1-year warranty",
    compatibility: ["Ford F-150", "Chevrolet Silverado", "Ram 1500"],
    features: ["Low Mileage", "Balanced", "Inspected"],
    description:
      "Complete wheel sets from low-mileage vehicles. Inspected for structural integrity and balanced for smooth operation.",
    heroHeadline: "Premium Quality Used Wheels",
    heroSubtext:
      "Upgrade your vehicle's performance with our premium quality used wheels. Tested for balance, durability, and road safety.",
    benefits: [
      { title: "60% Cost Savings", description: "Used wheels cost 60% less than new ones with same performance" },
      { title: "Perfect Balance", description: "Restore optimal wheel balance and smooth driving experience" },
      { title: "Safety Tested", description: "Meet all safety standards and structural integrity requirements" },
      { title: "Eco-Conscious", description: "Reduce metal waste through sustainable wheel reuse" },
    ],
    whyChooseFeatures: [
      { title: "OEM Quality Assured", description: "Premium OEM used wheels with guaranteed performance" },
      { title: "Best Price Promise", description: "Unmatched pricing with complete quality assurance" },
      { title: "Precision Inspected", description: "Thorough inspection for structural integrity and balance" },
      { title: "Secure Shipping", description: "Professional packaging and fast delivery nationwide" },
    ],
    promiseTitle: "Our Wheel Promise",
    promiseParagraphs: [
      "With extensive experience in automotive wheel solutions, we at Spikey Salvage specialize in sourcing and testing premium used wheels. We guarantee quality and performance while offering transparent, competitive pricing that outperforms traditional salvage yard options.",
    ],
    typesSpecialize: [
      { title: "Alloy Wheels", description: "Lightweight, stylish wheels for enhanced performance and appearance" },
      { title: "Steel Wheels", description: "Durable, reliable wheels for everyday driving and heavy-duty use" },
      { title: "Performance Wheels", description: "High-performance wheels for racing, sports, and premium vehicles" },
    ],
    metaDescription:
      "Browse used wheels at Spikey Salvage in St Cloud, FL. Balanced, safety-tested, and OEM quality — save up to 60% versus new wheels, all backed by warranty.",
  },
  {
    id: 4,
    slug: "used-ac-compressor",
    name: "Used AC Compressor",
    singularName: "AC Compressor",
    image: "/assets/images/car_parts/ac_compressor.png",
    iconName: "Snowflake",
    category: "HVAC",
    rating: 4.7,
    warranty: "120-day warranty",
    compatibility: ["Chevrolet Silverado", "GMC Sierra", "Ford F-150"],
    features: ["Bench Tested", "Refrigerant Checked", "Performance Verified"],
    description:
      "AC compressors tested on bench and vehicle. Includes refrigerant compatibility check and performance verification.",
    heroHeadline: "Premium Used AC Compressors",
    heroSubtext:
      "Beat the heat with our premium quality used AC compressors. Tested, verified, and ready to keep you cool nationwide.",
    benefits: [
      { title: "70% Cost Savings", description: "Used AC compressor costs 70% less than a new one" },
      { title: "Optimal Cooling", description: "Restore your vehicle's cooling system efficiently" },
      { title: "Environmentally Friendly", description: "Reduce waste with quality recycled automotive parts" },
      { title: "Proven Reliability", description: "OEM compressors with tested performance history" },
    ],
    whyChooseFeatures: [
      { title: "Quality A-Grade OEM", description: "Only the finest OEM used AC compressors" },
      { title: "Best Price Guaranteed", description: "Competitive pricing with quality assurance" },
      { title: "Twice Tested", description: "Rigorous testing for cooling performance" },
      { title: "Easy Shipping", description: "Fast and secure delivery nationwide" },
    ],
    promiseTitle: "Our Promise",
    promiseParagraphs: [
      "With excellent experience in the automobile industry, we at Spikey Salvage specialize in sourcing premium used AC compressors and guaranteeing their cooling performance. Unlike inflated junkyard prices, we offer transparent, competitive pricing.",
    ],
    typesSpecialize: [],
    metaDescription:
      "Stay cool with tested used AC compressors from Spikey Salvage in St Cloud, FL. OEM quality, cooling-performance verified, and fully warranty backed.",
  },
  {
    id: 5,
    slug: "used-headlight",
    name: "Used Headlights",
    singularName: "Headlight",
    image: "/assets/images/car_parts/headlight.png",
    iconName: "Lightbulb",
    category: "Exterior",
    rating: 4.5,
    warranty: "90-day warranty",
    compatibility: ["Nissan Altima", "Honda Accord", "Toyota Camry"],
    features: ["Clear Lens", "No Cracks", "No UV Yellowing"],
    description:
      "Complete headlight assemblies with clear lenses. No cracks, moisture damage, or UV yellowing.",
    heroHeadline: "Premium Quality Used Headlights",
    heroSubtext:
      "Restore your vehicle's visibility with our premium quality used headlights. Tested for clarity, performance, and safety compliance.",
    benefits: [
      { title: "65% Cost Savings", description: "Used headlights cost 65% less than new ones with same visibility" },
      { title: "Perfect Illumination", description: "Restore optimal lighting performance and road visibility" },
      { title: "Safety Compliance", description: "Meet all safety standards and regulatory requirements" },
      { title: "Eco-Conscious", description: "Reduce electronic waste through sustainable part reuse" },
    ],
    whyChooseFeatures: [
      { title: "OEM Quality Assured", description: "Premium OEM used headlights with guaranteed performance" },
      { title: "Best Price Promise", description: "Unmatched pricing with complete quality assurance" },
      { title: "Clarity Tested", description: "Thorough inspection for optimal light output and clarity" },
      { title: "Secure Shipping", description: "Careful packaging and fast delivery nationwide" },
    ],
    promiseTitle: "Our Headlight Promise",
    promiseParagraphs: [
      "With extensive experience in automotive lighting solutions, we at Spikey Salvage specialize in sourcing and testing premium used headlights. We guarantee clarity and performance while offering transparent, competitive pricing that outperforms traditional salvage yard options.",
    ],
    typesSpecialize: [
      { title: "Halogen Headlights", description: "Traditional, reliable lighting solution for most standard vehicles" },
      { title: "HID Xenon Lights", description: "High-intensity discharge lights for superior brightness and efficiency" },
      { title: "LED Headlights", description: "Modern, energy-efficient lighting with extended lifespan" },
    ],
    metaDescription:
      "Restore visibility with used headlights from Spikey Salvage in St Cloud, FL. Clear lenses, safety tested, and covered by warranty for peace of mind.",
  },
  {
    id: 6,
    slug: "used-transfer-case",
    name: "Used Transfer Case",
    singularName: "Transfer Case",
    image: "/assets/images/car_parts/transfer_case.png",
    iconName: "Cog",
    category: "Powertrain",
    rating: 4.6,
    warranty: "6-month warranty",
    compatibility: ["Ford F-150", "Chevrolet Silverado", "GMC Sierra"],
    features: ["New Seals", "Fluid Changed", "Tested Engagement"],
    description:
      "Complete transfer case units with new seals and fluid. Tested for proper engagement and smooth operation.",
    heroHeadline: "Premium Quality Used Transfer Cases",
    heroSubtext:
      "Restore your 4WD system's power distribution with our premium quality used transfer cases. Tested for performance, reliability, and seamless operation.",
    benefits: [
      { title: "70% Cost Savings", description: "Used transfer cases cost 70% less than new ones with same performance" },
      { title: "Proven Reliability", description: "Restore power distribution and 4WD functionality" },
      { title: "Quality Tested", description: "Thoroughly inspected and tested for optimal performance" },
      { title: "Eco-Friendly", description: "Reduce waste through sustainable automotive part reuse" },
    ],
    whyChooseFeatures: [
      { title: "OEM Quality Assured", description: "Premium OEM used transfer cases with guaranteed performance" },
      { title: "Best Price Promise", description: "Unmatched pricing with complete quality assurance" },
      { title: "Function Tested", description: "Comprehensive testing for all gear ratios and operations" },
      { title: "Secure Shipping", description: "Careful packaging and fast delivery nationwide" },
    ],
    promiseTitle: "Our Transfer Case Promise",
    promiseParagraphs: [
      "With extensive experience in drivetrain solutions, we at Spikey Salvage specialize in sourcing and testing premium used transfer cases. We guarantee functionality and performance while offering transparent, competitive pricing that outperforms traditional salvage yard options.",
    ],
    typesSpecialize: [
      { title: "Part-Time 4WD", description: "Manual engagement systems for traditional off-road capability" },
      { title: "Full-Time AWD", description: "Automatic power distribution for optimal traction in all conditions" },
      { title: "Electronic 4WD", description: "Modern electronic control systems for seamless operation" },
    ],
    metaDescription:
      "Shop used transfer cases at Spikey Salvage in St Cloud, FL. Tested for reliable 4WD power distribution and backed by our parts warranty.",
  },
  {
    id: 7,
    slug: "used-axle-assembly",
    name: "Used Axle Assembly",
    singularName: "Axle Assembly",
    image: "/assets/images/car_parts/axle_assembly.png",
    iconName: "Cog",
    category: "Powertrain",
    rating: 4.4,
    warranty: "90-day warranty",
    compatibility: ["Ford F-150", "Chevrolet Silverado", "Ram 1500"],
    features: ["New Bearings", "Bench Tested", "Certified"],
    description:
      "Complete axle assemblies with new bearings and seals. Bench tested for durability and proper alignment.",
    heroHeadline: "Premium Used Axle Assemblies",
    heroSubtext:
      "Power your vehicle's performance with our premium quality used axle assemblies. Tested, verified, and ready to handle the toughest roads nationwide.",
    benefits: [
      { title: "65% Cost Savings", description: "Used axle assembly costs 65% less than a new one" },
      { title: "Superior Performance", description: "Restore your vehicle's drivetrain with proven reliability" },
      { title: "Long-lasting Durability", description: "Quality axle assemblies built to withstand heavy loads" },
      { title: "OEM Quality", description: "Original equipment manufacturer standards maintained" },
    ],
    whyChooseFeatures: [
      { title: "Quality A-Grade OEM", description: "Only the finest OEM used axle assemblies" },
      { title: "Best Price Guaranteed", description: "Competitive pricing with quality assurance" },
      { title: "Twice Tested", description: "Rigorous testing for structural integrity" },
      { title: "Easy Shipping", description: "Fast and secure delivery nationwide" },
    ],
    promiseTitle: "Our Promise",
    promiseParagraphs: [
      "With excellent experience in the automobile industry, we at Spikey Salvage specialize in sourcing premium used axle assemblies and guaranteeing their performance. Unlike inflated junkyard prices, we offer transparent, competitive pricing.",
    ],
    typesSpecialize: [],
    metaDescription:
      "Find durable used axle assemblies at Spikey Salvage in St Cloud, FL. OEM quality, bench tested, and warrantied for dependable drivetrain performance.",
  },
  {
    id: 8,
    slug: "drive-shaft",
    name: "Drive Shaft",
    singularName: "Drive Shaft",
    image: "/assets/images/car_parts/Drive_shafts.png",
    iconName: "Wrench",
    category: "Powertrain",
    rating: 4.3,
    warranty: "90-day warranty",
    compatibility: ["Ford F-150", "Chevrolet Silverado", "GMC Sierra"],
    features: ["Balanced", "Vibration-Free", "U-Joint Inspected"],
    description:
      "Drive shafts professionally balanced and tested for vibration-free operation. Includes universal joint inspection.",
    heroHeadline: "Premium Used Drive Shafts",
    heroSubtext:
      "Get the best deal on your used drive shafts with our premium quality parts. Tested, verified, and ready to ship nationwide.",
    benefits: [
      { title: "60% Cost Savings", description: "Used drive shaft costs 60% less than a new one" },
      { title: "Enhanced Performance", description: "Will increase versatility and improve performance" },
      { title: "Extended Vehicle Life", description: "Used drive shafts increase vehicle life with affordability" },
      { title: "Socially Responsible", description: "Buying reused parts is a socially responsible practice" },
    ],
    whyChooseFeatures: [
      { title: "Quality A-Grade OEM", description: "Only the finest OEM used drive shafts" },
      { title: "Best Price Guaranteed", description: "Competitive pricing with quality assurance" },
      { title: "Twice Tested", description: "Rigorous testing for reliability" },
      { title: "Easy Shipping", description: "Fast and secure delivery nationwide" },
    ],
    promiseTitle: "Our Promise",
    promiseParagraphs: [
      "With excellent experience in the automobile industry, we at Spikey Salvage specialize in sourcing premium used drive shafts and guaranteeing their performance. Unlike inflated junkyard prices, we offer transparent, competitive pricing.",
    ],
    typesSpecialize: [],
    metaDescription:
      "Get reliable used drive shafts at Spikey Salvage in St Cloud, FL. Balanced, tested, and backed by warranty for a smooth, vibration-free ride.",
  },
  {
    id: 9,
    slug: "used-alternator",
    name: "Used Alternator",
    singularName: "Alternator",
    image: "/assets/images/car_parts/alternator.png",
    iconName: "Battery",
    category: "Electrical",
    rating: 4.7,
    warranty: "120-day warranty",
    compatibility: ["Honda Civic", "Toyota Corolla", "Ford Focus"],
    features: ["Voltage Tested", "Certified", "High Output"],
    description:
      "High-output alternators tested for proper charging and electrical performance. Includes voltage regulation testing.",
    heroHeadline: "Premium Used Alternators",
    heroSubtext:
      "Keep your battery charged and electronics running with our premium quality used alternators. Voltage-tested and ready to install nationwide.",
    benefits: [
      { title: "65% Cost Savings", description: "Used alternators cost 65% less than new ones with same output" },
      { title: "Reliable Charging", description: "Restore consistent battery charging and electrical performance" },
      { title: "Voltage Verified", description: "Every unit checked for proper voltage regulation" },
      { title: "Eco-Friendly", description: "Reduce electronic waste through sustainable part reuse" },
    ],
    whyChooseFeatures: [
      { title: "OEM Quality Assured", description: "Premium OEM used alternators with guaranteed output" },
      { title: "Best Price Promise", description: "Unmatched pricing with complete quality assurance" },
      { title: "Bench Tested", description: "Load tested for real-world charging performance" },
      { title: "Secure Shipping", description: "Careful packaging and fast delivery nationwide" },
    ],
    promiseTitle: "Our Alternator Promise",
    promiseParagraphs: [
      "With extensive experience in automotive electrical systems, we at Spikey Salvage specialize in sourcing and testing premium used alternators. We guarantee output and reliability while offering transparent, competitive pricing that outperforms traditional salvage yard options.",
    ],
    typesSpecialize: [
      { title: "Standard Output", description: "Reliable charging for everyday commuter vehicles" },
      { title: "High-Output", description: "Upgraded amperage for vehicles with heavier electrical loads" },
      { title: "Hybrid-Compatible", description: "Specialized units matched to hybrid drivetrain requirements" },
    ],
    metaDescription:
      "Shop tested used alternators at Spikey Salvage in St Cloud, FL. Voltage-verified, OEM quality, and backed by warranty for dependable charging.",
  },
  {
    id: 10,
    slug: "used-radiator",
    name: "Used Radiator",
    singularName: "Radiator",
    image: "/assets/images/car_parts/radiator.png",
    iconName: "Thermometer",
    category: "Powertrain",
    rating: 4.5,
    warranty: "90-day warranty",
    compatibility: ["Honda Accord", "Toyota Camry", "Nissan Altima"],
    features: ["Pressure Tested", "Leak-Free", "Fan Assembly Included"],
    description:
      "Complete radiator assemblies pressure tested for leaks. Includes fan assembly and cooling system compatibility check.",
    heroHeadline: "Premium Quality Used Radiators",
    heroSubtext:
      "Keep your engine running cool with our premium quality used radiators. Tested for cooling efficiency, durability, and leak resistance.",
    benefits: [
      { title: "65% Cost Savings", description: "Used radiators cost 65% less than new ones with same cooling performance" },
      { title: "Optimal Cooling", description: "Restore proper engine temperature control and prevent overheating" },
      { title: "Pressure Tested", description: "Meet all cooling system pressure requirements and leak standards" },
      { title: "Eco-Friendly", description: "Reduce aluminum waste through sustainable radiator reuse" },
    ],
    whyChooseFeatures: [
      { title: "OEM Quality Assured", description: "Premium OEM used radiators with guaranteed cooling performance" },
      { title: "Best Price Promise", description: "Unmatched pricing with complete quality assurance" },
      { title: "Leak-Free Guarantee", description: "Thorough pressure testing for leak-free operation" },
      { title: "Secure Shipping", description: "Professional packaging and fast delivery nationwide" },
    ],
    promiseTitle: "Our Radiator Promise",
    promiseParagraphs: [
      "With extensive experience in automotive cooling solutions, we at Spikey Salvage specialize in sourcing and testing premium used radiators. We guarantee cooling performance and reliability while offering transparent, competitive pricing that outperforms traditional salvage yard options.",
    ],
    typesSpecialize: [
      { title: "Aluminum Radiators", description: "Lightweight, efficient radiators for enhanced cooling performance" },
      { title: "Plastic Tank Radiators", description: "Cost-effective, reliable radiators for everyday driving needs" },
      { title: "Performance Radiators", description: "High-performance radiators for racing, sports, and heavy-duty vehicles" },
    ],
    metaDescription:
      "Keep your engine cool with used radiators from Spikey Salvage in St Cloud, FL. Pressure tested for leak-free, reliable cooling performance.",
  },
  {
    id: 11,
    slug: "used-steering-column",
    name: "Used Steering Column",
    singularName: "Steering Column",
    image: "/assets/images/car_parts/steering_column.png",
    iconName: "Settings",
    category: "Exterior",
    rating: 4.4,
    warranty: "90-day warranty",
    compatibility: ["Ford F-150", "Chevrolet Silverado", "GMC Sierra"],
    features: ["Electrical Tested", "Tilt & Telescoping", "Certified"],
    description:
      "Complete steering column assemblies with tested electrical components. Includes tilt and telescoping functionality check.",
    heroHeadline: "Premium Quality Used Steering Columns",
    heroSubtext:
      "Restore your vehicle's steering precision with our premium quality used steering columns. Tested for functionality, safety, and reliability.",
    benefits: [
      { title: "70% Cost Savings", description: "Used steering columns cost 70% less than new ones with same functionality" },
      { title: "Perfect Control", description: "Restore precise steering control and driving comfort" },
      { title: "Safety Certified", description: "Meet all safety standards and regulatory requirements" },
      { title: "Eco-Friendly", description: "Reduce automotive waste through sustainable part reuse" },
    ],
    whyChooseFeatures: [
      { title: "OEM Quality Assured", description: "Premium OEM used steering columns with guaranteed performance" },
      { title: "Best Price Promise", description: "Unmatched pricing with complete quality assurance" },
      { title: "Function Tested", description: "Thorough inspection for optimal steering response and control" },
      { title: "Secure Shipping", description: "Careful packaging and fast delivery nationwide" },
    ],
    promiseTitle: "Our Steering Column Promise",
    promiseParagraphs: [
      "With extensive experience in automotive steering systems, we at Spikey Salvage specialize in sourcing and testing premium used steering columns. We guarantee functionality and safety while offering transparent, competitive pricing that outperforms traditional salvage yard options.",
    ],
    typesSpecialize: [
      { title: "Manual Steering Columns", description: "Traditional, reliable steering solution for classic and standard vehicles" },
      { title: "Power Steering Columns", description: "Enhanced steering assistance for easier handling and comfort" },
      { title: "Tilt & Telescopic Columns", description: "Adjustable steering columns for optimal driver position and comfort" },
    ],
    metaDescription:
      "Shop used steering columns at Spikey Salvage in St Cloud, FL. Safety tested, OEM quality, and warrantied for precise, reliable steering control.",
  },
  {
    id: 12,
    slug: "exhaust-manifold",
    name: "Exhaust Manifold",
    singularName: "Exhaust Manifold",
    image: "/assets/images/car_parts/exhaust_manifold.png",
    iconName: "Wind",
    category: "Powertrain",
    rating: 4.3,
    warranty: "60-day warranty",
    compatibility: ["Ford Mustang", "Chevrolet Camaro", "Dodge Challenger"],
    features: ["Crack Inspected", "Machined Gasket Surface", "Stainless/Steel"],
    description:
      "Cast iron and stainless steel exhaust manifolds inspected for cracks and warpage. Includes gasket surfaces machined flat.",
    heroHeadline: "Premium Used Exhaust Manifolds",
    heroSubtext:
      "Restore proper exhaust flow with our premium quality used exhaust manifolds. Crack-inspected and ready to install nationwide.",
    benefits: [
      { title: "60% Cost Savings", description: "Used exhaust manifolds cost 60% less than new ones with same fitment" },
      { title: "Optimal Flow", description: "Restore proper exhaust flow and engine performance" },
      { title: "Crack Inspected", description: "Checked for cracks and warpage before it ships" },
      { title: "Eco-Friendly", description: "Reduce cast-iron and steel waste through sustainable part reuse" },
    ],
    whyChooseFeatures: [
      { title: "OEM Quality Assured", description: "Premium OEM used exhaust manifolds with guaranteed fitment" },
      { title: "Best Price Promise", description: "Unmatched pricing with complete quality assurance" },
      { title: "Surface Machined", description: "Gasket surfaces machined flat for a proper seal" },
      { title: "Secure Shipping", description: "Careful packaging and fast delivery nationwide" },
    ],
    promiseTitle: "Our Exhaust Manifold Promise",
    promiseParagraphs: [
      "With extensive experience in automotive exhaust systems, we at Spikey Salvage specialize in sourcing and inspecting premium used exhaust manifolds. We guarantee fitment and integrity while offering transparent, competitive pricing that outperforms traditional salvage yard options.",
    ],
    typesSpecialize: [
      { title: "Cast Iron Manifolds", description: "Heavy-duty, heat-resistant manifolds for daily-driver reliability" },
      { title: "Stainless Steel Manifolds", description: "Corrosion-resistant manifolds for performance and longevity" },
      { title: "Performance Headers", description: "Tuned manifolds for enhanced flow on performance builds" },
    ],
    metaDescription:
      "Find crack-tested used exhaust manifolds at Spikey Salvage in St Cloud, FL. Machined gasket surfaces and warranty included on every unit.",
  },
  {
    id: 13,
    slug: "intake-manifold",
    name: "Intake Manifold",
    singularName: "Intake Manifold",
    image: "/assets/images/car_parts/intake_manifold.png",
    iconName: "Wind",
    category: "Powertrain",
    rating: 4.6,
    warranty: "90-day warranty",
    compatibility: ["Honda Civic", "Toyota Corolla", "Nissan Sentra"],
    features: ["Throttle Body Included", "Sensors Included", "Air Flow Tested"],
    description:
      "Complete intake manifold assemblies with throttle body and sensors. Tested for proper air flow and vacuum operation.",
    heroHeadline: "Premium Used Intake Manifolds",
    heroSubtext:
      "Restore proper air flow and engine efficiency with our premium quality used intake manifolds. Tested and ready to install nationwide.",
    benefits: [
      { title: "65% Cost Savings", description: "Used intake manifolds cost 65% less than new ones with same fitment" },
      { title: "Proper Air Flow", description: "Restore efficient air delivery and engine performance" },
      { title: "Vacuum Tested", description: "Checked for vacuum leaks before it ships" },
      { title: "Eco-Friendly", description: "Reduce automotive waste through sustainable part reuse" },
    ],
    whyChooseFeatures: [
      { title: "OEM Quality Assured", description: "Premium OEM used intake manifolds with guaranteed fitment" },
      { title: "Best Price Promise", description: "Unmatched pricing with complete quality assurance" },
      { title: "Sensors Included", description: "Comes complete with throttle body and sensors where applicable" },
      { title: "Secure Shipping", description: "Careful packaging and fast delivery nationwide" },
    ],
    promiseTitle: "Our Intake Manifold Promise",
    promiseParagraphs: [
      "With extensive experience in automotive intake systems, we at Spikey Salvage specialize in sourcing and testing premium used intake manifolds. We guarantee air-flow performance while offering transparent, competitive pricing that outperforms traditional salvage yard options.",
    ],
    typesSpecialize: [
      { title: "Plastic Composite Manifolds", description: "Lightweight manifolds common on modern fuel-injected engines" },
      { title: "Aluminum Manifolds", description: "Durable manifolds for higher-performance and older platforms" },
      { title: "Performance Intakes", description: "Tuned manifolds for improved throttle response" },
    ],
    metaDescription:
      "Shop tested used intake manifolds at Spikey Salvage in St Cloud, FL. Complete with sensors, vacuum-tested, and backed by warranty.",
  },
  {
    id: 14,
    slug: "used-axle",
    name: "Used Axle",
    singularName: "Axle",
    image: "/assets/images/car_parts/axle.png",
    iconName: "Cog",
    category: "Powertrain",
    rating: 4.5,
    warranty: "90-day warranty",
    compatibility: ["Honda Civic", "Toyota Corolla", "Ford Focus"],
    features: ["New CV Joints", "Boots Included", "Rotation Tested"],
    description:
      "Individual axle components with new CV joints and boots. Tested for proper rotation and smooth operation.",
    heroHeadline: "Premium Used Axles",
    heroSubtext:
      "Restore smooth power delivery to your wheels with our premium quality used axles. CV-joint tested and ready to install nationwide.",
    benefits: [
      { title: "65% Cost Savings", description: "Used axles cost 65% less than new ones with same performance" },
      { title: "Smooth Rotation", description: "Restore vibration-free power delivery to the wheels" },
      { title: "New CV Boots", description: "Fitted with new boots to keep joints protected" },
      { title: "Eco-Friendly", description: "Reduce automotive waste through sustainable part reuse" },
    ],
    whyChooseFeatures: [
      { title: "OEM Quality Assured", description: "Premium OEM used axles with guaranteed performance" },
      { title: "Best Price Promise", description: "Unmatched pricing with complete quality assurance" },
      { title: "Rotation Tested", description: "Checked for smooth, even rotation before it ships" },
      { title: "Secure Shipping", description: "Careful packaging and fast delivery nationwide" },
    ],
    promiseTitle: "Our Axle Promise",
    promiseParagraphs: [
      "With extensive experience in automotive drivetrain components, we at Spikey Salvage specialize in sourcing and testing premium used axles. We guarantee smooth performance while offering transparent, competitive pricing that outperforms traditional salvage yard options.",
    ],
    typesSpecialize: [
      { title: "Front-Wheel-Drive Axles", description: "CV axles matched to FWD compact and midsize vehicles" },
      { title: "Rear-Wheel-Drive Axles", description: "Durable axles for trucks and RWD performance vehicles" },
      { title: "All-Wheel-Drive Axles", description: "Precision-fit axles for AWD and 4WD drivetrains" },
    ],
    metaDescription:
      "Find tested used axles at Spikey Salvage in St Cloud, FL. New CV joints and boots, rotation-tested, and backed by warranty.",
  },
];

export const CATEGORIES = [
  { id: "all", name: "All Parts" },
  { id: "Powertrain", name: "Powertrain" },
  { id: "Exterior", name: "Exterior" },
  { id: "HVAC", name: "HVAC" },
  { id: "Electrical", name: "Electrical" },
] as const;

export function getPartBySlug(slug: string): Part | undefined {
  return PARTS.find((p) => p.slug === slug);
}

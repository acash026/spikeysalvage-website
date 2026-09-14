export const siteConfig = {
  name: "Spikey Salvage",
  shortName: "Spikey Salvage",
  parentTagline: "Part of Big Sky Salvage",
  chainTagline: "Part of the biggest auto parts chain in the USA",
  description:
    "Spikey Salvage offers high-quality used OEM auto parts in St Cloud, FL. Shop used engines, transmissions, wheels, radiators and more with fast US shipping.",
  url: "https://www.spikeysalvage.us",
  domain: "spikeysalvage.us",

  phone: "+1 (321) 465-7213",
  phoneHref: "tel:+13214657213",

  // Shown publicly on the site (mailto links, footer, contact page).
  publicEmail: "steve@bigskysalvage.com",
  // Technical inbox used server-side to send/receive form submissions.
  adminEmail: "spikeysalvageus@gmail.com",

  address: {
    line1: "5255 E Irlo Bronson Memorial Hwy Unit S395d",
    city: "St Cloud",
    state: "FL",
    zip: "34771",
    country: "United States",
    full: "5255 E Irlo Bronson Memorial Hwy Unit S395d, St Cloud, FL 34771",
  },

  hours: {
    weekday: "Mon-Fri: 8:00 AM - 6:00 PM",
    saturday: "Sat: 9:00 AM - 4:00 PM",
    sunday: "Sun: Closed",
  },

  mapEmbedSrc:
    "https://www.google.com/maps?q=5255+E+Irlo+Bronson+Memorial+Hwy+Unit+S395d,+St+Cloud,+FL+34771&output=embed",

  social: {
    whatsapp: "https://wa.me/13214657213",
  },
} as const;

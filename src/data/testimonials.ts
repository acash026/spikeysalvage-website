export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "John Martinez",
    role: "Professional Mechanic",
    quote:
      "Spikey Salvage has been my go-to for used parts for over 3 years. The quality is consistently excellent, and their technical support is unmatched.",
    rating: 5,
  },
  {
    name: "Maria Thompson",
    role: "Fleet Manager",
    quote:
      "Managing a fleet of 50+ vehicles, I need reliable parts at competitive prices. Spikey Salvage delivers on both fronts, every single time.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Car Enthusiast",
    quote:
      "Restoring classic cars requires finding the right parts. Spikey Salvage's VIN matching system helped me find parts I thought were impossible to get.",
    rating: 5,
  },
];

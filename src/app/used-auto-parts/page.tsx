import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "Used Auto Parts Catalog",
  description:
    "Browse Spikey Salvage's full catalog of tested used auto parts — engines, transmissions, wheels, radiators, and more. Warrantied and ready to ship.",
  alternates: { canonical: "/used-auto-parts" },
};

export default function UsedAutoPartsPage() {
  return <CatalogClient />;
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import GlobalOverlay from "@/components/Global/GlobalOverlay";
import SmoothScrollProvider from "@/components/Global/SmoothScrollProvider";
import { siteConfig } from "@/lib/site-config";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Used OEM Auto Parts in St Cloud, FL`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Spikey Salvage",
    "used auto parts St Cloud FL",
    "salvage yard Florida",
    "used engines",
    "used transmissions",
    "OEM auto parts",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Used OEM Auto Parts in St Cloud, FL`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/assets/logo/spikey-salvage-logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Used OEM Auto Parts in St Cloud, FL`,
    description: siteConfig.description,
    images: ["/assets/logo/spikey-salvage-logo.png"],
  },
  icons: {
    icon: "/assets/logo/spikey-salvage-logo.png",
  },
  verification: {
    google: "-WJmM0b9kuYN0XrJMmdz0wUnzqdUMBYW9_lJtRFZisw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-white text-gray-800 dark:bg-gray-900 dark:text-white`}
      >
        {/* Google Tag Manager / Ads */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "AW-17587383909");
          `}
        </Script>

        {/* Google Ads conversion tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17914467402"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17914467402');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function (c, l, a, r, i, t, y) {
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
              t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "sqpt6d7niv");
          `}
        </Script>

        {/* Microsoft Advertising UET */}
        <Script id="bing-uet-script" strategy="afterInteractive">
          {`
            (function (w, d, t, r, u) {
              var f, n, i;
              w[u] = w[u] || [];
              f = function () {
                var o = { ti: "52002958", enableAutoSpaTracking: true };
                o.q = w[u]; w[u] = new UET(o); w[u].push("pageLoad");
              };
              n = d.createElement(t); n.src = r; n.async = 1;
              n.onload = n.onreadystatechange = function () {
                var s = this.readyState;
                if (!s || s === "loaded" || s === "complete") { f(); n.onload = n.onreadystatechange = null; }
              };
              i = d.getElementsByTagName(t)[0]; i.parentNode.insertBefore(n, i);
            })(window, document, "script", "https://bat.bing.com/bat.js", "uetq");
          `}
        </Script>

        {/* Tawk.to live chat */}
        <Script id="tawk-to-script" strategy="lazyOnload">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function () {
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/686d2c74db3b4f190a1f1dbd/1ivl7babg";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-17587383909"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <SmoothScrollProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <GlobalOverlay />
            <Navbar />
            {children}
            <Footer />
          </div>
        </SmoothScrollProvider>

        <ToastContainer position="top-right" autoClose={5000} theme="colored" />
        <SpeedInsights />
      </body>
    </html>
  );
}

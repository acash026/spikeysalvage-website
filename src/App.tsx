// src/App.tsx
import { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import GlobalOverlay from "./components/Global/GlobalOverlay";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import UsedEngines from "./pages/UsedEngines";
import UsedTransmissions from "./pages/UsedTransmissions";
import UsedWheels from "./pages/UsedWheels";
import DriveShaft from "./pages/DriveShaft";
import UsedACCompressor from "./pages/UsedACCompressor";
import UsedHeadlights from "./pages/UsedHeadlight";
import UsedTransferCase from "./pages/UsedTransferCase";
import UsedAxleAssembly from "./pages/UsedAxleAssembly";
import UsedRadiator from "./pages/UsedRadiator";
import UsedSteeringColumn from "./pages/UsedSteeringColumn";
import ThankYouPage from "./pages/ThankYouPage";
import NotFoundPage from "./pages/NotFoundPage";
import UsedAutoPartsPage from "./pages/UsedAutoPartsPage";

import {
  AutoPartsModalForm,
  useAutoOpenModal,
} from "./components/Home/AutoPartsForm";

function App() {
  const { isOpen, closeModal } = useAutoOpenModal(10000);
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  // Reset scroll position when route changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <GlobalOverlay />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/used-auto-parts/used-engines" element={<UsedEngines />} />
        <Route
          path="/used-auto-parts/used-transmissions"
          element={<UsedTransmissions />}
        />
        <Route path="/used-auto-parts/used-wheels" element={<UsedWheels />} />
        <Route path="/used-auto-parts/drive-shaft" element={<DriveShaft />} />
        <Route
          path="/used-auto-parts/used-ac-compressor"
          element={<UsedACCompressor />}
        />
        <Route
          path="/used-auto-parts/used-headlight"
          element={<UsedHeadlights />}
        />
        <Route
          path="/used-auto-parts/used-transfer-case"
          element={<UsedTransferCase />}
        />
        <Route
          path="/used-auto-parts/used-axle-assembly"
          element={<UsedAxleAssembly />}
        />
        <Route
          path="/used-auto-parts/used-radiator"
          element={<UsedRadiator />}
        />
        <Route
          path="/used-auto-parts/used-steering-column"
          element={<UsedSteeringColumn />}
        />
        <Route path="/used-auto-parts" element={<UsedAutoPartsPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <AutoPartsModalForm isOpen={isOpen} onClose={closeModal} />
      <Footer />
    </div>
  );
}

export default App;

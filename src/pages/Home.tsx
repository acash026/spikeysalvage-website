import { Helmet } from "react-helmet-async";
import Hero from "../components/Home/Hero";
import AboutUs from "../components/Home/AboutUs";
import BrandsWeDeal from "../components/Home/BrandsWeDeal";
import UsedAutoPartsInDemand from "../components/Home/UsedAutoPartsInDemand";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Helmet>
        <title>Accelera Auto Parts | Used OEM Grade A Auto Parts | Katy, TX</title>
        <meta name="description" content="Find high-quality used OEM Grade A auto parts at Accelera Auto Parts. Shop used engines, transmissions, wheels, radiators and more. Best deals with fast US shipping." />
      </Helmet>
      <Hero />
      <UsedAutoPartsInDemand />
      <BrandsWeDeal />
      <AboutUs />
    </div>
  );
};

export default Home;
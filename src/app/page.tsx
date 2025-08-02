import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import FounderQuote from "./sections/FounderQuote";
import KernUIFeatures from "./sections/KernUIFeatures";
import DesignQuote from "./sections/DesignQuote";
import Pricing from "./sections/Pricing";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full flex justify-center px-4">
        <Nav />
      </div>
      <Hero />
      <FounderQuote />
      <KernUIFeatures />
      <DesignQuote />
      <Pricing />
    </div>
  );
};

export default Home;

import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import FounderQuote from "./sections/FounderQuote";
import KernUIFeatures from "./sections/KernUIFeatures";
import DesignQuote from "./sections/DesignQuote";
import Pricing from "./sections/Pricing";
import MoreToCome from "./sections/MoreToCome";
import ValueProposition from "./sections/ValueProposition";
import FAQ from "./sections/FAQ";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

const Home = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Top Right Icon */}
      <img
        src="/hero/layer-top.svg"
        alt="Layer Top"
        className="absolute top-[-32px] right-[-50px] z-[-1] pointer-events-none select-none"
        style={{
          width: "600px",
          height: "500px",
          maxWidth: "100%",
        }}
      />

      <div className=" flex justify-center px-4">
        <Nav />
      </div>
      <Hero />
      <FounderQuote />
      <KernUIFeatures />
      <DesignQuote />
      <Pricing />
      <Testimonials />
      <FAQ />
      <MoreToCome />

      <ValueProposition />
      <Footer />
    </div>
  );
};

export default Home;

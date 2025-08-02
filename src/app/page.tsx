import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import FounderQuote from "./sections/FounderQuote";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full flex justify-center px-4">
        <Nav />
      </div>
      <Hero />
      <FounderQuote />
    </div>
  );
};

export default Home;

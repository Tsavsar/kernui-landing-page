import TrustedBy from "../components/ui/TrustedBy";
import HeroButtons from "../components/ui/HeroButtons";

const Hero = () => {
  return (
    <section className="flex flex-col items-start md:items-center justify-center w-full py-16">
      <div className="w-full px-4 md:px-0 flex flex-col items-start md:items-center">
        <TrustedBy />

        {/* Hero Caption */}
        <div className="text-left md:text-center mt-12 max-w-4xl">
          <h1 className="text-[60px] font-medium text-[#171717] leading-tight mb-6 max-w-5xl">
            The UI Kit Your <br className="hidden md:block" />
            <span className="inline-block">
              <span
                className="relative inline-block px-2 py-1 rounded"
                style={{
                  border: "0.5px solid #FB3748",
                  background: "#FB37481A",
                  width: "245px",
                  height: "67px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Corner Boxes for Product text */}
                <span
                  className="absolute top-0 left-0 w-2 h-2 bg-white transform -translate-x-1/2 -translate-y-1/2"
                  style={{ border: "0.5px solid #FB3748" }}
                ></span>
                <span
                  className="absolute top-0 right-0 w-2 h-2 bg-white transform translate-x-1/2 -translate-y-1/2"
                  style={{ border: "0.5px solid #FB3748" }}
                ></span>
                <span
                  className="absolute bottom-0 left-0 w-2 h-2 bg-white transform -translate-x-1/2 translate-y-1/2"
                  style={{ border: "0.5px solid #FB3748" }}
                ></span>
                <span
                  className="absolute bottom-0 right-0 w-2 h-2 bg-white transform translate-x-1/2 translate-y-1/2"
                  style={{ border: "0.5px solid #FB3748" }}
                ></span>
                Product
              </span>
            </span>{" "}
            Deserves.
          </h1>
          <p className="text-[18px] text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto md:mx-auto">
            KernUI is a thoughtfully crafted UI kit of over 3,000
            production-ready components with, built-in theming, and
            crystal-clear docs for product teams.
          </p>
        </div>

        {/* Hero Buttons */}
        <HeroButtons />
      </div>

      {/* Hero Section Image */}
      <div className="mt-12 w-full">
        <img
          src="/hero-section.svg"
          alt="Hero Section"
          className="w-full max-w-6xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;

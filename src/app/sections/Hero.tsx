"use client"
import TrustedBy from "../components/ui/TrustedBy";
import HeroButtons from "../components/ui/HeroButtons";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "../components/animations/ScrollAnimations";

const Hero = () => {
  return (
    <section className="flex flex-col items-start md:items-center justify-center w-full py-16">
      <div className="w-full px-4 md:px-0 flex flex-col items-start md:items-center">
        {/* TrustedBy with fade in animation */}
        <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
          <TrustedBy />
        </ScrollAnimation>

        {/* Hero Caption with staggered animations */}
        <StaggerContainer staggerDelay={0.15} className="text-left md:text-center mt-12 max-w-4xl">
          {/* Main heading with slide up animation */}
          <StaggerItem animation="slideInUp">
            <h1 className="text-[60px] font-medium text-[#171717] leading-tight mb-6 max-w-5xl">
              The UI Kit Your <br className="hidden md:block" />
              <ScrollAnimation 
                animation="bounceIn" 
                duration={1.2} 
                delay={0.8}
                className="inline-block"
              >
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
              </ScrollAnimation>{" "}
              Deserves.
            </h1>
          </StaggerItem>

          {/* Description with fade in animation */}
          <StaggerItem animation="fadeInUp">
            <p className="text-[18px] text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto md:mx-auto">
              KernUI is a thoughtfully crafted UI kit of over 3,000
              production-ready components with, built-in theming, and
              crystal-clear docs for product teams.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Hero Buttons with slide up animation */}
        <ScrollAnimation animation="slideInUp" duration={0.8} delay={0.6}>
          <HeroButtons />
        </ScrollAnimation>
      </div>

      {/* Hero Section Image with scale in animation */}
      <ScrollAnimation 
        animation="scaleIn" 
        duration={1.0} 
        delay={0.4} 
        className="mt-12 w-full"
      >
        <img
          src="/hero-section.svg"
          alt="Hero Section"
          className="w-full max-w-6xl mx-auto"
        />
      </ScrollAnimation>
    </section>
  );
};

export default Hero;
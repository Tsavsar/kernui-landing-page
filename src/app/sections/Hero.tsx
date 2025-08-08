"use client";
import TrustedBy from "../components/ui/TrustedBy";
import HeroButtons from "../components/ui/HeroButtons";
import CursorButton from "../components/CursorButton";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/ScrollAnimations";

const Hero = () => {
  return (
    <section className="flex flex-col items-start md:items-center justify-center w-full py-16 relative">
      {/* Background Layer Image */}
      <img
        src="/hero/layer-bottom.svg"
        alt="Layer Bottom"
        className="absolute top-48 left-0 hidden md:block z-[-1]"
      />
      <div className="w-full px-4 md:px-0 flex flex-col items-start md:items-center">
        {/* TrustedBy with fade in animation */}
        <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
          <TrustedBy />
        </ScrollAnimation>

        {/* Hero Caption with staggered animations */}
        <StaggerContainer
          staggerDelay={0.15}
          className="text-left md:text-center mt-12 max-w-4xl"
        >
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
        className="mt-12 w-full relative"
      >
        <img
          src="/heroo.svg"
          alt="Hero Section"
          className="w-full max-w-6xl mx-auto"
        />

        {/* Hero Image Overlay */}
        <img
          src="/hero-img.svg"
          alt="Hero Image"
          className="absolute top-10 left-64 w-20 h-48 md:w-[120px] md:h-[305px]"
        />

        {/* Cursor Buttons */}
        {/* Green - Robin Hood (Desktop only) */}
        <div className="absolute top-32 left-96 hidden md:block">
          <CursorButton
            text="Robin Hood"
            backgroundColor="#039855"
            arrowColor="#000000"
          />
        </div>

        {/* Blue - Design (Desktop only) */}
        <div className="absolute top-20 left-20 hidden md:block">
          <CursorButton
            text="Design"
            backgroundColor="#1570EF"
            arrowColor="#1570EF"
          />
        </div>

        {/* Red - Developer (Desktop only) */}
        <div className="absolute top-40 right-20 hidden md:block">
          <CursorButton
            text="Developer"
            backgroundColor="#CA0016"
            arrowColor="#CA0016"
          />
        </div>

        {/* Yellow - Velma (Desktop only) */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:block">
          <CursorButton
            text="Velma"
            backgroundColor="#DC6803"
            arrowColor="#000000"
          />
        </div>

        {/* Mobile Cursor Buttons */}
        {/* Blue - Design (Mobile - Left Bottom) */}
        <div className="absolute bottom-10 left-4 md:hidden">
          <CursorButton
            text="Design"
            backgroundColor="#1570EF"
            arrowColor="#1570EF"
          />
        </div>

        {/* Red - Developer (Mobile - Top Right) */}
        <div className="absolute top-10 right-4 md:hidden">
          <CursorButton
            text="Developer"
            backgroundColor="#CA0016"
            arrowColor="#CA0016"
          />
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Hero;

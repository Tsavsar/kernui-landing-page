"use client";
import Image from "next/image";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  ParallaxScroll,
} from "../components/animations/ScrollAnimations";

const DesignQuote = () => {
  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-32 px-4 md:px-32 relative">
      {/* Top Right Icon */}
      <img
        src="/layers-top.svg"
        alt="Layers"
        className="absolute top-0 right-0 hidden md:block"
      />

      {/* Bottom Left Icon */}
      <img
        src="/layers-bottom.svg"
        alt="Layers"
        className="absolute bottom-0 left-0 hidden md:block"
      />

      <div className="max-w-[1440px] mx-auto text-center relative">
        <ParallaxScroll yOffset={30}>
          <ScrollAnimation animation="fadeInUp" duration={1.0} delay={0.2}>
            <blockquote className="text-[28px] md:text-[46px] font-medium text-[#000000] leading-tight mb-8 px-4 md:px-0">
              <ScrollAnimation
                animation="scaleIn"
                duration={0.6}
                delay={0.4}
                className="inline-block"
              >
                <span className="text-[#CA0016]">"</span>
              </ScrollAnimation>
              Design is the invisible foundation of everything we build. Systems{" "}
              <ScrollAnimation
                animation="fadeInLeft"
                duration={0.8}
                delay={0.6}
                className="inline-block"
              >
                <span className="text-[#666666]">
                  let us scale that foundation without breaking it.
                </span>
              </ScrollAnimation>
              <ScrollAnimation
                animation="scaleIn"
                duration={0.6}
                delay={0.8}
                className="inline-block"
              >
                <span className="text-[#CA0016]">"</span>
              </ScrollAnimation>
            </blockquote>
          </ScrollAnimation>
        </ParallaxScroll>

        <StaggerContainer
          staggerDelay={0.2}
          className="flex flex-col items-center"
        >
          <StaggerItem animation="bounceIn">
            <Image
              src="/cathy-pearl-avatar.svg"
              alt="Cathy Pearl"
              width={120}
              height={120}
              style={{ objectFit: "cover", width: "64px", height: "64px" }}
              className="w-16 h-16 md:w-20 md:h-20 mb-4"
            />
          </StaggerItem>

          <StaggerItem animation="slideInUp">
            <h3 className="text-[16px] md:text-[18px] font-medium text-[#171717] mb-1">
              Cathy Pearl
            </h3>
          </StaggerItem>

          <StaggerItem animation="fadeInUp">
            <p className="text-[13px] md:text-[14px] text-[#5C5C5C]">
              Former Director of UX at Shopify
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default DesignQuote;

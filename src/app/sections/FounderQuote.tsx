"use client";
import Image from "next/image";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/ScrollAnimations"; // Adjust path as needed

const FounderQuote = () => {
  return (
    <section className="flex justify-center w-full py-16 px-4 md:px-0">
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
        <div className="relative w-full max-w-[566px]">
          <div
            className="px-8 py-12 text-center w-full"
            style={{
              border: "1px solid #0000000D",
              borderRadius: "24px",
            }}
          >
            {/* KernUI Logo */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/kernui-black.svg"
                alt="KernUI Logo"
                className="w-16 h-16"
              />
            </div>

            {/* Quote */}
            <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.6}>
              <blockquote className="text-[18px] font-medium text-[#171717] leading-relaxed mb-8">
                "Whether you're solo or scaling with a team of 50, KernUI keeps
                everyone aligned. Built by designers and devs who've been in the
                trenches."
              </blockquote>
            </ScrollAnimation>

            {/* Founder Info */}
            <StaggerContainer
              staggerDelay={0.15}
              className="flex items-center justify-center gap-3"
            >
              <StaggerItem animation="scaleIn">
                <Image
                  src="/shater-avater.svg"
                  alt="Founder Avatar"
                  width={72}
                  height={72}
                  style={{ objectFit: "cover" }}
                />
              </StaggerItem>

              <div className="text-left">
                <StaggerItem animation="fadeInRight">
                  <p className="text-[16px] font-medium text-[#171717]">
                    @tsavsar
                  </p>
                </StaggerItem>
                <StaggerItem animation="fadeInRight">
                  <p className="text-[14px] text-[#5C5C5C]">
                    Builder & Designer
                  </p>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default FounderQuote;

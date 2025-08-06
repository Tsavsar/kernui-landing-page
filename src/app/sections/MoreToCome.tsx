"use client";

import { ArrowUpRight } from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/ScrollAnimations";

const MoreToCome = () => {
  const features = [
    {
      title: "Dashboard Template",
      description:
        "Complete UI layouts for SaaS dashboards, settings, and analytics.",
      icon: "/icons/dashboard.svg",
    },
    {
      title: "Custom Illustrations",
      description:
        "Original, brand-ready art to elevate empty states and onboarding.",
      icon: "/icons/designs.svg",
    },
    {
      title: "Charts & Data Visuals",
      description: "Beautiful, themeable charts ready to drop into dashboards.",
      icon: "/icons/chart.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-32 px-4 md:px-32">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Header with animation */}
        <ScrollAnimation animation="fadeInUp" duration={0.8}>
          <h2 className="text-[28px] md:text-[36px] font-medium text-[#171717] mb-4">
            <span className="inline-block">
              <span
                className="relative inline-block px-2 py-1 rounded"
                style={{
                  border: "0.5px solid #FB3748",
                  background: "#FB37481A",
                  width: "fit-content",
                  height: "fit-content",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Corner Boxes for Stuff text */}
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
                More Stuff
              </span>
            </span>{" "}
            To Look Forward To
          </h2>
        </ScrollAnimation>

        {/* Subtitle with animation */}
        <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
          <p className="text-[16px] md:text-[18px] text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12">
            This is just version one as packed as it is, we're cooking up more
            amazing stuff, and your one time payment covers it all!
          </p>
        </ScrollAnimation>

        {/* Features with staggered animations */}
        <StaggerContainer staggerDelay={0.15}>
          <div className="flex flex-col items-center mt-8 md:mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-6xl mx-auto mb-8 md:mb-12">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="flex flex-col items-center group">
                    <div className="flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-[16px] md:text-[18px] font-medium text-[#171717] mb-2 transition-colors duration-300 group-hover:text-[#FB3748]">
                        {feature.title}
                      </h3>
                      <p className="text-[13px] md:text-[14px] text-[#5C5C5C] leading-relaxed max-w-[280px] transition-colors duration-300 group-hover:text-[#171717]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default MoreToCome;

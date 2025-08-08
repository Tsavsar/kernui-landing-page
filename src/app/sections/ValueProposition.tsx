"use client";

import { HelpCircle } from "lucide-react";
import HeroButtons from "../components/ui/HeroButtons";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/ScrollAnimations";

const ValueProposition = () => {
  const valueCards = [
    {
      title: "Clean Handoffs",
      description:
        "Seamless collaboration between design and development teams with consistent components and clear documentation.",
      image: "/value/value-card-1.svg",
    },
    {
      title: "Flexible Components",
      description:
        "Highly customizable components that adapt to your brand while maintaining design system consistency.",
      image: "/value/value-card-2.svg",
    },
    {
      title: "Solid Workflow",
      description:
        "Streamlined design-dev workflow that reduces iteration cycles and speeds up product delivery.",
      image: "/value/value-card-3.svg",
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-32 px-4 md:px-32 relative overflow-hidden">
      {/* Background Decorations */}
      <img
        src="/layers-top.svg"
        alt="Layers"
        className="absolute top-0 right-0 hidden md:block"
      />

      <img
        src="/layers-bottom.svg"
        alt="Layers"
        className="absolute bottom-0 left-0 hidden md:block"
      />

      <div className="max-w-[1440px] mx-auto text-center relative">
        {/* Badge with Animation */}
        <ScrollAnimation animation="fadeInUp" duration={0.8}>
          <div className="flex justify-center mb-6 md:mb-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border text-xs font-medium bg-white shadow-sm"
              style={{
                border: "1px solid var(--Strokes-stroke-soft, #0000000D)",
                boxShadow: "0px 2px 4px 0px #3636360A",
              }}
            >
              <HelpCircle size={14} className="text-[#CA0016]" />
              <span className="text-[#171717]">Still Need Convincing?</span>
            </div>
          </div>
        </ScrollAnimation>

        {/* Header with Animation */}
        <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
          <h2 className="text-[28px] md:text-[36px] font-medium text-[#171717] mb-4">
            Design once. Scale forever.
          </h2>
        </ScrollAnimation>

        {/* Subtitle with Animation */}
        <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
          <p className="text-[16px] md:text-[18px] text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12">
            KernUI helps you move fast without breaking consistency. Built for
            startups and teams who want clean handoffs, flexible components, and
            a solid design-dev workflow.
          </p>
        </ScrollAnimation>

        {/* Value Cards with Staggered Animation */}
        <StaggerContainer staggerDelay={0.15}>
          <div className="flex flex-col items-center mt-8 md:mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-6xl mx-auto mb-8 md:mb-12">
              {valueCards.map((card, index) => (
                <StaggerItem key={index}>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="flex items-center justify-center overflow-hidden rounded-[20px] relative bg-[#F7F7F7] transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#CA0016] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                      <img
                        src={card.image}
                        alt={card.title}
                        style={{ width: "325.333px", height: "170px" }}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-[16px] md:text-[18px] font-medium text-[#171717] mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[13px] md:text-[14px] text-[#5C5C5C] leading-relaxed max-w-[280px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>

        {/* Hero Buttons with Animation */}
        <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.6}>
          <div className="flex justify-center">
            <HeroButtons />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ValueProposition;

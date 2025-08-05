"use client";
import { DollarSign, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const ComparePrices = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    { name: "Color Palette", icon: "/icons/color.svg" },
    { name: "Typography", icon: "/icons/typography.svg" },
    { name: "Icons", icon: "/icons/icons.svg" },
    { name: "Logos & Flags", icon: "/icons/logos.svg" },
    { name: "Variables", icon: "/icons/variables.svg" },
    { name: "Themes", icon: "/icons/themes.svg" },
    { name: "Pre-made Components", icon: "/icons/components.svg" },
    { name: "Regular Updates", icon: "/icons/updates.svg" },
    { name: "Custom Designs", icon: "/icons/designs.svg" },
    { name: "Team Training", icon: "/icons/team.svg" },
  ];

  const plans = [
    {
      name: "Freemium",
      features: [
        "Included",
        "Included",
        "Included",
        "Included",
        "Not-Included",
        "Not-Included",
        "Not-Included",
        "Not-Included",
        "Not-Included",
        "Not-Included",
      ],
    },
    {
      name: "Startup",
      features: [
        "Included",
        "Included",
        "Included",
        "Included",
        "Included",
        "Included",
        "Included",
        "Included",
        "Not-Included",
        "Not-Included",
      ],
    },
    {
      name: "Enterprise",
      features: [
        "Included",
        "Included",
        "Included",
        "Included",
        "Included",
        "Included",
        "Included",
        "Included",
        "Included",
        "Included",
      ],
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mt-16">
      {/* Compare Prices Button */}
      <div className="flex justify-center mb-8">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-center"
          style={{
            border: "1px solid var(--Strokes-stroke-soft, #0000000D)",
            borderRadius: "12px",
          }}
        >
          <DollarSign size={16} className="text-[#CA0016]" />
          <span
            className="text-[14px] font-medium"
            style={{ color: "#171717" }}
          >
            Compare prices
          </span>
        </div>
      </div>

      {/* Scroll Container with Indicators */}
      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-all duration-200"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-all duration-200"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        )}

        {/* Scrollable Content */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="min-w-[800px] mx-auto pb-4">
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              {/* Features Header */}
              <div
                className="flex items-center justify-center h-10 rounded-xl text-white font-medium"
                style={{ backgroundColor: "#1C1C1C", borderRadius: "12px" }}
              >
                Features
              </div>
              {/* Plan Headers */}
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-10 rounded-xl text-white font-medium"
                  style={{ backgroundColor: "#1C1C1C", borderRadius: "12px" }}
                >
                  {plan.name}
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {features.map((feature, featureIndex) => {
              return (
                <div key={featureIndex} className="grid grid-cols-4 gap-4 mb-2">
                  {/* Feature Name */}
                  <div
                    className="flex items-center gap-2 px-4 h-10 rounded-xl text-[#171717] font-medium"
                    style={{ backgroundColor: "#F7F7F7", borderRadius: "12px" }}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.name}
                      className="w-4 h-4 flex-shrink-0"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(8%) sepia(100%) saturate(7482%) hue-rotate(357deg) brightness(95%) contrast(118%)",
                      }}
                    />
                    <span className="text-sm truncate">{feature.name}</span>
                  </div>

                  {/* Plan Features */}
                  {plans.map((plan, planIndex) => (
                    <div
                      key={planIndex}
                      className="flex items-center justify-center gap-2 h-10 rounded-xl px-4"
                      style={{
                        backgroundColor: "#F7F7F7",
                        borderRadius: "12px",
                      }}
                    >
                      {plan.features[featureIndex] === "Included" ? (
                        <>
                          <Check size={16} className="text-[#CA0016]" />
                          <span className="text-sm text-[#171717]">
                            Included
                          </span>
                        </>
                      ) : (
                        <>
                          <X size={16} className="text-[#CA0016]" />
                          <span className="text-sm text-[#171717]">
                            Not included
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center mt-4 gap-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ComparePrices;

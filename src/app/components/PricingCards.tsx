"use client";

import {
  CircleDollarSign,
  Laptop,
  Building,
  ChevronRight,
  ArrowUpRight,
  MessageSquareText,
} from "lucide-react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "./animations/ScrollAnimations";

const PricingCards = () => {
  const pricingPlans = [
    {
      name: "Freemium",
      price: "$0.00",
      description: "Ideal for indie builders and early-stage startups.",
      action: {
        label: "Get started free",
      },
      features: ["Color palette", "Typography", "Icons", "Logos & flags"],
      isHighlighted: false,
      icon: CircleDollarSign,
    },
    {
      name: "Startup",
      price: "$99.00",
      description: "Built for teams who need speed, structure, and scale.",
      action: {
        label: "Buy now",
      },
      features: [
        "Variables",
        "Themes (Light & Dark)",
        "Pre-made components",
        "Regular updates",
      ],
      isHighlighted: true,
      icon: Laptop,
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description:
        "For companies who want a design system built around their product.",
      action: {
        label: "Contact us",
      },
      features: [
        "Everything in Startup",
        "Custom designs",
        "Team training",
        "Dedicated support",
      ],
      isHighlighted: false,
      icon: Building,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-20 max-w-5xl mx-auto justify-items-center">
      {pricingPlans.map((plan, index) => {
        const IconComponent = plan.icon;
        return (
          <StaggerItem key={index} animation="fadeInUp">
            <ScrollAnimation
              animation="fadeInUp"
              duration={0.8}
              delay={index * 0.2}
            >
              <div
                className={`w-full max-w-[320px] border border-[#0000000D] rounded-xl p-6 flex flex-col ${
                  plan.isHighlighted
                    ? "bg-[#171717] text-white lg:-mt-8"
                    : "bg-white"
                }`}
              >
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border text-xs font-medium mb-6 w-fit ${
                    plan.isHighlighted
                      ? "border-[#FFFFFF0D] text-white"
                      : "border-[#0000000D] bg-white shadow-sm"
                  }`}
                  style={{
                    boxShadow: plan.isHighlighted
                      ? "none"
                      : "0px 2px 4px 0px #3636360A",
                  }}
                >
                  <IconComponent size={14} className="text-[#CA0016]" />
                  {plan.name}
                </div>

                {/* Price */}
                <h3
                  className={`text-[36px] font-medium mb-2 text-left ${
                    plan.isHighlighted ? "text-white" : "text-[#171717]"
                  }`}
                >
                  {plan.price}
                </h3>

                {/* Description */}
                <p
                  className={`text-[14px] mb-6 text-left ${
                    plan.isHighlighted ? "text-[#A3A3A3]" : "text-[#5C5C5C]"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Button */}
                <button
                  className={`w-full py-3 px-4 rounded-xl text-[14px] font-medium mb-6 text-center flex items-center justify-center gap-2 ${
                    plan.isHighlighted
                      ? "bg-[#CA0016] text-[#F7F7F7]"
                      : "bg-[#FAFAFA] border border-[#0000000D] text-[#171717]"
                  }`}
                >
                  {plan.action.label}
                  {plan.isHighlighted && <ChevronRight size={16} />}
                  {plan.action.label === "Contact us" && (
                    <MessageSquareText size={16} />
                  )}
                </button>

                {/* Features Section */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`text-[12px] ${
                        plan.isHighlighted ? "text-[#7B7B7B]" : "text-[#A3A3A3]"
                      }`}
                    >
                      Features
                    </span>
                    <div
                      className={`flex-1 h-px border-t border-dotted ${
                        plan.isHighlighted
                          ? "border-[#7B7B7B]"
                          : "border-[#A3A3A3]"
                      }`}
                      style={{
                        borderStyle: "dotted",
                        borderSpacing: "8px",
                      }}
                    ></div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`text-[14px] text-left flex items-center gap-2 ${
                          plan.isHighlighted ? "text-white" : "text-[#171717]"
                        }`}
                      >
                        <img
                          src="/check-circle.svg"
                          alt="Check"
                          className="w-4 h-4 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mini Card for Startup */}
              {plan.isHighlighted && (
                <div className="w-full max-w-[320px] bg-[#171717] text-white border-3 border-[#171717] rounded-t-[12px] rounded-b-[24px] py-4 px-6 mt-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[14px] text-[#A3A3A3]">
                        Are you a founder or a student?
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-[12px] text-white">
                        Get a discount code
                      </p>
                      <ArrowUpRight size={16} className="text-[#CA0016]" />
                    </div>
                  </div>
                </div>
              )}
            </ScrollAnimation>
          </StaggerItem>
        );
      })}
    </div>
  );
};

export default PricingCards;

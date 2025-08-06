"use client";

import { ScrollAnimation } from "./animations/ScrollAnimations";

interface TestimonialCardProps {
  title: string;
  person: string;
  role: string;
  company: string;
  description?: string;
  isHighlighted?: boolean;
}

const TestimonialCard = ({
  title,
  person,
  role,
  company,
  description,
  isHighlighted = false,
}: TestimonialCardProps) => {
  return (
    <div
      className={`flex flex-col justify-between p-4 md:p-6 rounded-xl relative w-full max-w-[420px] min-h-[300px] md:min-h-[418px]`}
      style={{
        background: isHighlighted ? "#CA0016" : "#F7F7F7",
      }}
    >
      {/* Title */}
      <div className="text-left">
        <h3
          className="font-semibold mb-3 md:mb-4 text-[18px] md:text-[21px] leading-tight"
          style={{
            fontWeight: 600,
            color: isHighlighted ? "#FFFFFF" : "#171717",
          }}
        >
          {title}
        </h3>

        {/* Description - for both highlighted and non-highlighted cards */}
        {description && (
          <p
            className="text-sm leading-relaxed mb-4"
            style={{
              color: isHighlighted ? "#FFFFFF" : "#5C5C5C",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Person Info */}
      <div className="text-left mt-auto">
        <p
          className="font-medium mb-1 text-[15px] md:text-[16px]"
          style={{
            fontWeight: 500,
            color: isHighlighted ? "#FFFFFF" : "#171717",
          }}
        >
          {person}
        </p>
        <p
          className="text-sm text-[13px] md:text-[14px]"
          style={{
            fontWeight: 500,
            color: isHighlighted ? "rgba(255, 255, 255, 0.8)" : "#171717",
          }}
        >
          {role} @{company}
        </p>
      </div>

      {/* Layer Icon - only for non-highlighted cards */}
      {!isHighlighted && (
        <div className="absolute bottom-0 right-0">
          <img src="/testimonial/layers.svg" alt="Layers" />
        </div>
      )}

      {/* Layer Icon - for highlighted card */}
      {isHighlighted && (
        <div className="absolute bottom-0 right-0">
          <img src="/testimonial/layers-2.svg" alt="Layers" />
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;

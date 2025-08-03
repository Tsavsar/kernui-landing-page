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
      className={`flex flex-col justify-between p-6 rounded-xl  relative`}
      style={{
        width: isHighlighted ? "420px" : "184px",
        height: "418px",
        background: isHighlighted ? "#CA0016" : "#F7F7F7",
      }}
    >
      {/* Title */}
      <div className="text-left">
        <h3
          className="font-semibold mb-4"
          style={{
            fontSize: "21px",
            fontWeight: 600,
            color: isHighlighted ? "#FFFFFF" : "#171717",
          }}
        >
          {title}
        </h3>

        {/* Description - only for highlighted card */}
        {isHighlighted && description && (
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Person Info */}
      <div className="text-left">
        <p
          className="font-medium mb-1"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            color: isHighlighted ? "#FFFFFF" : "#171717",
          }}
        >
          {person}
        </p>
        <p
          className="text-sm"
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: isHighlighted ? "#FFFFFF" : "#171717",
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

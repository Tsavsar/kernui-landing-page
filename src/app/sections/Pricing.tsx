import PricingCards from "../components/PricingCards";

const Pricing = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[36px] font-medium text-[#171717] mb-4">
          Great{" "}
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
              {/* Corner Boxes for System text */}
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
              System,
            </span>
          </span>{" "}
          Great Price
        </h2>
        <p className="text-[18px] text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto">
          Start for free with the essentials. Upgrade when you need components,
          themes, and support that scale.
        </p>
        <PricingCards />
      </div>
    </section>
  );
};

export default Pricing;

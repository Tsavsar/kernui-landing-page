import FeatureCards from "../components/FeatureCards";

const KernUIFeatures = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[36px] font-medium text-[#171717] mb-4">
          What's Inside{" "}
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
              {/* Corner Boxes for KernUI text */}
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
              KernUI?
            </span>
          </span>
        </h2>
        <p className="text-[18px] text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto">
          A complete, theme-ready UI kit packed with components, icons, avatars,
          and more. All built for speed and scale.
        </p>
        <FeatureCards />
      </div>
    </section>
  );
};

export default KernUIFeatures;

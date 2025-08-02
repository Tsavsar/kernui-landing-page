const FeatureCards = () => {
  const features = [
    {
      title: "Built-in Theming",
      description:
        "Seamless light and dark support — no setup, just clean visuals.",
    },
    {
      title: "1600+ Icons",
      description: "1600+ flexible icons that scale perfectly with your UI.",
    },
    {
      title: "Smart Avatar System",
      description:
        "Supports images, initials, and statuses right out of the box.",
    },
    {
      title: "Flexible Variants & States",
      description:
        "Hover, focus, disabled — styled, accessible, and tweakable.",
    },
    {
      title: "Typography",
      description: "Responsive, readable type with built-in rhythm and scale.",
    },
    {
      title: "Prod-Ready Components",
      description: "Buttons, modals, inputs — styled and ready to ship.",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full max-w-[320px] h-[170px] bg-[#F7F7F7] border border-[#0000000D] rounded-[20px] flex items-center justify-center">
              {/* Image placeholder - will be replaced later */}
            </div>
            <div className="text-center mt-4">
              <h3 className="text-[18px] font-medium text-[#171717] mb-2">
                {feature.title}
              </h3>
              <p className="text-[14px] text-[#5C5C5C] leading-relaxed max-w-[280px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

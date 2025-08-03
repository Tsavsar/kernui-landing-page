import { ArrowUpRight } from "lucide-react";

const MoreToCome = () => {
  const upcomingFeatures = [
    {
      title: "Dashboard Templates",
      description:
        "Complete UI layouts for SaaS dashboards, settings, and analytics.",
    },
    {
      title: "Custom Illustration",
      description:
        "Original, brand-ready art to elevate empty states and onboarding.",
    },
    {
      title: "Charts & Data Visuals",
      description: "Beautiful, themeable charts ready to drop into dashboards.",
    },
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[36px] font-medium text-[#171717] mb-4">
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
              {/* Corner Boxes for More Stuff text */}
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
        <p className="text-[18px] text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto">
          This is just version one as packed as it is, we're cooking up more
          amazing stuff, and your one time payment covers it all!
        </p>

        {/* Feature Cards */}
        <div className="flex flex-col items-center mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 max-w-6xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
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

        {/* Beta Tester CTA */}
        <div className="mt-12">
          <div
            className="inline-flex items-center gap-2 px-6 h-10 rounded-[32px]"
            style={{ backgroundColor: "#F7F7F7" }}
          >
            <span className="text-[14px] text-[#5C5C5C]">
              Want to get early access?
            </span>
            <span className="text-[14px] font-medium text-[#171717]">
              Become a beta tester
            </span>
            <ArrowUpRight size={16} className="text-[#CA0016]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreToCome;

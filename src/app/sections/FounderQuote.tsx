const FounderQuote = () => {
  return (
    <section className="flex justify-center w-full py-16">
      <div className="relative">
        <div
          className="px-8 py-12 text-center"
          style={{
            width: "566px",
            border: "1px solid #0000000D",
            borderRadius: "24px",
          }}
        >
          {/* KernUI Logo */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <img
              src="/kernui-black.svg"
              alt="KernUI Logo"
              className="w-16 h-16"
            />
          </div>

          {/* Quote */}
          <blockquote className="text-[18px] font-medium text-[#171717] leading-relaxed mb-8">
            "Whether you're solo or scaling with a team of 50, KernUI keeps
            everyone aligned. Built by designers and devs who've been in the
            trenches."
          </blockquote>

          {/* Founder Info */}
          <div className="flex items-center justify-center gap-3">
            <img
              src="/shater-avater.svg"
              alt="Founder Avatar"
              className="w-[40px] h-[40px]"
            />
            <div className="text-left">
              <p className="text-[14px] font-medium text-[#171717]">@tsavsar</p>
              <p className="text-[12px] text-[#5C5C5C]">Builder & Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;

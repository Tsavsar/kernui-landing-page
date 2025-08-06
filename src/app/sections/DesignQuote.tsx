import Image from "next/image";

const DesignQuote = () => {
  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-32 px-4 md:px-32 relative">
      {/* Top Right Icon */}
      <img
        src="/layers-top.svg"
        alt="Layers"
        className="absolute top-0 right-0 hidden md:block"
      />
      {/* Bottom Left Icon */}
      <img
        src="/layers-bottom.svg"
        alt="Layers"
        className="absolute bottom-0 left-0 hidden md:block"
      />

      <div className="max-w-[1440px] mx-auto text-center relative">
        <blockquote className="text-[28px] md:text-[46px] font-medium text-[#000000] leading-tight mb-8 px-4 md:px-0">
          <span className="text-[#CA0016]">"</span>
          Design is the invisible foundation of everything we build. Systems{" "}
          <span className="text-[#666666]">
            let us scale that foundation without breaking it.
          </span>
          <span className="text-[#CA0016]">"</span>
        </blockquote>
        <div className="flex flex-col items-center">
          <Image
            src="/cathy-pearl-avatar.svg"
            alt="Cathy Pearl"
            width={120}
            height={120}
            style={{ objectFit: "cover", width: "64px", height: "64px" }}
            className="w-16 h-16 md:w-20 md:h-20 mb-4"
          />
          <h3 className="text-[16px] md:text-[18px] font-medium text-[#171717] mb-1">
            Cathy Pearl
          </h3>
          <p className="text-[13px] md:text-[14px] text-[#5C5C5C]">
            Former Director of UX at Shopify
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignQuote;

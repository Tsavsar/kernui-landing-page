import { ChevronRight } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="flex items-center gap-4 mt-8">
      {/* Buy Now Button */}
      <button
        className="flex items-center gap-[2px] h-[40px] rounded-[12px] px-[15px] py-[4px] pr-[10px] text-white font-medium text-sm"
        style={{
          background:
            "linear-gradient(0deg, #CA0016, #CA0016), linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 100%)",
          boxShadow:
            "0px 0px 0px 1px #CA0016, 0px 1px 2px 0px #0A05177D, 0px 1px 0px 0px #FFFFFF1F inset",
        }}
      >
        Buy now
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Preview in Figma Button */}
      <button
        className="flex items-center gap-[2px] h-[40px] rounded-[12px] px-[15px] py-[4px] text-gray-900 font-medium text-sm border border-white"
        style={{
          background: "#DCDCDC",
          borderImage:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1",
          boxShadow:
            "0px 0px 0px 1px #DCDCDC, 0px 1px 2px 0px #7C7C7C7D, 0px 1px 0px 0px #FEFEFE1F inset",
        }}
      >
        <img
          src="/figma-icon.svg"
          alt="Figma Icon"
          className="w-[24px] h-[24px]"
        />
        Preview in Figma
      </button>
    </div>
  );
};

export default HeroButtons;

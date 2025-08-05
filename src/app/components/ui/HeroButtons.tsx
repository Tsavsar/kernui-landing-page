import { ChevronRight } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="flex items-center gap-4 mt-8 justify-start md:justify-center">
      {/* Buy Now Button */}
      <button
        className="flex items-center gap-[2px] h-[40px] rounded-[12px] px-[15px] py-[4px] pr-[10px] text-white font-medium text-sm"
        style={{
          background: "#CA0016",
        }}
      >
        Buy now
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Preview in Figma Button */}
      <button
        className="flex items-center gap-[2px] h-[40px] rounded-[12px] px-[15px] py-[4px] text-gray-900 font-medium text-sm"
        style={{
          background: "#DCDCDC",
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

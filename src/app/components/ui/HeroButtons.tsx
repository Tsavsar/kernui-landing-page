import { ChevronRight } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="flex items-center gap-4 mt-8 justify-start md:justify-center">
      {/* Buy Now Button */}
      <a
        href="https://selar.com/114ps22911"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[2px] h-[40px] rounded-[12px] px-[15px] py-[4px] pr-[10px] text-white font-medium text-sm"
        style={{
          background: "#CA0016",
          border: "1px solid #A50012", // Deep red border
          boxShadow: `
          inset 0 1px 0 rgba(255, 255, 255, 0.2),
          inset 0 -1px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px rgba(0, 0, 0, 0.12),
          0 1px 2px rgba(0, 0, 0, 0.24)
        `,
        }}
      >
        Buy now
        <ChevronRight className="w-4 h-4" />
      </a>

      {/* Preview in Figma Button */}
      <a
        href="https://www.figma.com/design/rjtGbVAp1klmlQkfUD3O21/%E2%9C%A7-PREVIEW-%E2%9C%A7-KernUI---Design-System-%E2%9C%A7-Pro--v1.0-?node-id=570-21345&t=chmvby3Oj2Y6iS7J-0"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[2px] h-[40px] rounded-[12px] px-[15px] py-[4px] text-gray-900 font-medium text-sm relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.8) 100%), #DCDCDC",
          border: "1px solid #DCDCDC",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.05)",
        }}
      >
        <img
          src="/figma-icon.svg"
          alt="Figma Icon"
          className="w-[24px] h-[24px] relative z-10"
        />
        <span className="relative z-10">Preview in Figma</span>
      </a>
    </div>
  );
};

export default HeroButtons;

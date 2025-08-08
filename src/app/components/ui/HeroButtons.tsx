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
      </a>
    </div>
  );
};

export default HeroButtons;

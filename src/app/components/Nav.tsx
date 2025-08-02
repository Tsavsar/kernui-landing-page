"use client";

const Nav = () => {
  return (
    <nav className="flex items-center justify-center w-full mt-4">
      <div className="bg-[#171717] px-1   rounded-[29px]  h-[42px] flex items-center justify-center gap-[34px]">
        {/* KernUI Logo */}
        <img
          src="/kern-ui-logo.svg"
          alt="KernUI Logo"
          className=" self-center"
        />

        {/* Navigation Items */}
        <a
          href="#pricing"
          className="text-white hover:text-gray-300 transition-colors text-[14px] font-normal"
        >
          Pricing
        </a>
        <a
          href="#roadmap"
          className="text-white hover:text-gray-300 transition-colors text-[14px] font-normal"
        >
          Roadmap
        </a>
        <a
          href="#reviews"
          className="text-white hover:text-gray-300 transition-colors text-[14px] font-normal"
        >
          Reviews
        </a>
        <a
          href="#resources"
          className="text-white hover:text-gray-300 transition-colors text-[14px] font-normal"
        >
          Resources
        </a>
        <a
          href="#find-us"
          className="text-white hover:text-gray-300 transition-colors text-[14px] font-normal"
        >
          Find us
        </a>

        {/* Figma Button */}
        <button className="bg-white rounded-[28px] px-2 py-[5px] flex items-center gap-[2px] w-[101px] h-[34px] ring-[2px] ring-[#242628]">
          <img
            src="/figma-icon.svg"
            alt="Figma Icon"
            className="w-[24px] h-[24px]"
          />
          <span className="text-[14px] font-medium text-gray-900">Preview</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;

"use client";

import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-center w-full mt-4 bg-white py-4">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <div className="bg-[#171717] px-1 rounded-[29px] h-[42px] flex items-center justify-center gap-[34px]">
            {/* KernUI Logo */}
            <img
              src="/kern-ui-logo.svg"
              alt="KernUI Logo"
              className="self-center"
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
              <span className="text-[14px] font-medium text-gray-900">
                Preview
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div
            className={`bg-[#171717] rounded-[29px] h-[42px] flex items-center justify-between px-2 mx-auto transition-all duration-300 ${
              isMenuOpen ? "w-[300px]" : "w-[195px]"
            }`}
          >
            {/* Logo */}
            <img src="/kern-ui-logo.svg" alt="KernUI Logo" className="h-8" />

            {/* Preview Button */}
            <button
              className={`bg-white rounded-[28px] px-2 py-[5px] flex items-center justify-center gap-[2px] h-[34px] ring-[2px] ring-[#242628] transition-all duration-300 ${
                isMenuOpen ? "w-full" : "w-[120px]"
              }`}
            >
              <img
                src="/figma-icon.svg"
                alt="Figma Icon"
                className="w-[24px] h-[24px]"
              />
              <span className="text-[14px] font-medium text-gray-900">
                Preview
              </span>
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex flex-col gap-1 p-2"
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="bg-[#171717] rounded-[24px] p-6">
              <div className="flex flex-col items-center gap-6">
                <a
                  href="#pricing"
                  className="text-white hover:text-gray-300 transition-colors text-[16px] font-normal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#roadmap"
                  className="text-white hover:text-gray-300 transition-colors text-[16px] font-normal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Roadmap
                </a>
                <a
                  href="#reviews"
                  className="text-white hover:text-gray-300 transition-colors text-[16px] font-normal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </a>
                <a
                  href="#resources"
                  className="text-white hover:text-gray-300 transition-colors text-[16px] font-normal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </a>
                <a
                  href="#find-us"
                  className="text-white hover:text-gray-300 transition-colors text-[16px] font-normal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Find us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

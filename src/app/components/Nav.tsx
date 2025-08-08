"use client";

import { useState } from "react";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "./animations/ScrollAnimations";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Small delay to ensure mobile menu closes first
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 100);
    }
  };

  return (
    <ScrollAnimation
      animation="fadeInDown"
      duration={0.8}
      delay={0.2}
      className="flex items-center justify-center mt-4 py-4"
    >
      <nav className=" max-w-6xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <ScrollAnimation
            animation="scaleIn"
            duration={0.6}
            delay={0.4}
            className="bg-[#171717] px-1 rounded-[29px] h-[42px] flex items-center justify-center gap-[34px]"
          >
            {/* KernUI Logo */}
            <ScrollAnimation
              animation="fadeInLeft"
              duration={0.6}
              delay={0.6}
              className="flex items-center h-full pl-4"
            >
              <img
                src="/logo.svg"
                alt="KernUI Logo"
                className="h-auto w-auto"
              />
            </ScrollAnimation>

            {/* Navigation Items with Stagger */}
            <StaggerContainer
              staggerDelay={0.1}
              className="flex items-center gap-[34px]"
            >
              <StaggerItem animation="fadeInUp">
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-white hover:text-gray-300 transition-colors text-[14px] font-normal flex items-center"
                >
                  Pricing
                </button>
              </StaggerItem>
              <StaggerItem animation="fadeInUp">
                <button
                  onClick={() => scrollToSection("roadmap")}
                  className="text-white hover:text-gray-300 transition-colors text-[14px] font-normal flex items-center"
                >
                  Roadmap
                </button>
              </StaggerItem>
              <StaggerItem animation="fadeInUp">
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="text-white hover:text-gray-300 transition-colors text-[14px] font-normal flex items-center"
                >
                  Reviews
                </button>
              </StaggerItem>
              <StaggerItem animation="fadeInUp">
                <button
                  onClick={() => scrollToSection("resources")}
                  className="text-white hover:text-gray-300 transition-colors text-[14px] font-normal flex items-center"
                >
                  Resources
                </button>
              </StaggerItem>
              <StaggerItem animation="fadeInUp">
                <button
                  onClick={() => scrollToSection("find-us")}
                  className="text-white hover:text-gray-300 transition-colors text-[14px] font-normal flex items-center"
                >
                  Find us
                </button>
              </StaggerItem>
            </StaggerContainer>

            {/* Figma Button */}
            <ScrollAnimation animation="bounceIn" duration={0.8} delay={1.0}>
              <a
                href="https://www.figma.com/design/rjtGbVAp1klmlQkfUD3O21/%E2%9C%A7-PREVIEW-%E2%9C%A7-KernUI---Design-System-%E2%9C%A7-Pro--v1.0-?node-id=570-21345&t=chmvby3Oj2Y6iS7J-0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[28px] px-2 py-[5px] flex items-center gap-[2px] w-[101px] h-[34px] ring-[2px] ring-[#242628]"
              >
                <img
                  src="/figma-icon.svg"
                  alt="Figma Icon"
                  className="w-[24px] h-[24px]"
                />
                <span className="text-[14px] font-medium text-gray-900">
                  Preview
                </span>
              </a>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <ScrollAnimation
            animation="slideInUp"
            duration={0.6}
            delay={0.3}
            className={`bg-[#171717] rounded-[29px] h-[42px] flex items-center justify-between px-2 mx-auto transition-all duration-300 ${
              isMenuOpen ? "w-[300px]" : "w-[195px]"
            }`}
          >
            {/* Logo */}
            <ScrollAnimation animation="rotateIn" duration={0.5} delay={0.5}>
              <img
                src="/logo.svg"
                alt="KernUI Logo"
                className="h-[18.25px] w-auto self-center"
              />
            </ScrollAnimation>

            {/* Preview Button */}
            <ScrollAnimation animation="scaleIn" duration={0.5} delay={0.7}>
              <a
                href="https://www.figma.com/design/rjtGbVAp1klmlQkfUD3O21/%E2%9C%A7-PREVIEW-%E2%9C%A7-KernUI---Design-System-%E2%9C%A7-Pro--v1.0-?node-id=570-21345&t=chmvby3Oj2Y6iS7J-0"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white rounded-[28px] px-2 py-[5px] flex items-center justify-center gap-[2px] h-[34px] ring-[2px] ring-[#242628] transition-all duration-300 mx-2 ${
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
              </a>
            </ScrollAnimation>

            {/* Hamburger Menu Button */}
            <ScrollAnimation animation="fadeInRight" duration={0.5} delay={0.9}>
              <button
                onClick={toggleMenu}
                className="flex flex-col gap-1"
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
            </ScrollAnimation>
          </ScrollAnimation>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <ScrollAnimation
            animation="fadeInUp"
            duration={0.4}
            delay={0}
            className="md:hidden mt-2"
          >
            <div className="bg-[#171717] rounded-[24px] p-6">
              <StaggerContainer
                staggerDelay={0.1}
                className="flex flex-col items-center gap-6"
              >
                <StaggerItem animation="slideInLeft">
                  <button
                    onClick={() => {
                      scrollToSection("pricing");
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-gray-300 transition-colors text-[16px] font-normal"
                  >
                    Pricing
                  </button>
                </StaggerItem>
                <StaggerItem animation="slideInLeft">
                  <button
                    onClick={() => {
                      scrollToSection("roadmap");
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-gray-300 transition-colors text-[16px] font-normal"
                  >
                    Roadmap
                  </button>
                </StaggerItem>
                <StaggerItem animation="slideInLeft">
                  <button
                    onClick={() => {
                      scrollToSection("reviews");
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-gray-300 transition-colors text-[16px] font-normal"
                  >
                    Reviews
                  </button>
                </StaggerItem>
                <StaggerItem animation="slideInLeft">
                  <button
                    onClick={() => {
                      scrollToSection("resources");
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-gray-300 transition-colors text-[16px] font-normal"
                  >
                    Resources
                  </button>
                </StaggerItem>
                <StaggerItem animation="slideInLeft">
                  <button
                    onClick={() => {
                      scrollToSection("find-us");
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-gray-300 transition-colors text-[16px] font-normal"
                  >
                    Find us
                  </button>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </ScrollAnimation>
        )}
      </nav>
    </ScrollAnimation>
  );
};

export default Nav;

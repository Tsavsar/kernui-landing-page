"use client";

import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/ScrollAnimations";

const Footer = () => {
  return (
    <div className="w-full px-2 bg-[#F7F7F7]">
      <footer className="w-full bg-[#171717] rounded-[24px] pt-16 lg:pt-32 px-4 lg:px-32 py-16 relative overflow-hidden">
        {/* Background Decorations */}
        <img
          src="/footer/layer-top.svg"
          alt="Layers"
          className="absolute top-0 right-0 z-0 md:w-32 md:h-32 lg:w-auto lg:h-auto"
          style={{
            width: "292px",
            height: "250px",
          }}
        />

        <img
          src="/footer/layer-buttom.svg"
          alt="Layers"
          className="absolute bottom-0 left-0 z-0 md:w-32 md:h-32 lg:w-auto lg:h-auto"
          style={{
            width: "484px",
            height: "416px",
          }}
        />

        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-start justify-between mb-12">
            <ScrollAnimation animation="fadeInUp" duration={0.8}>
              <div className="flex-1">
                <img
                  src="/logo-footer.svg"
                  alt="KernUI Logo"
                  className="mb-4"
                />
                <p className="text-[#FFFFFF] text-[14px] leading-relaxed">
                  Design faster. Build better. Powered by <br></br> bold,
                  scalable components.
                </p>
              </div>
            </ScrollAnimation>

            {/* Navigation Links - 3 Columns with Staggered Animation */}
            <StaggerContainer staggerDelay={0.1} className="flex gap-16">
              {/* Column 1 */}
              <StaggerItem animation="fadeInUp">
                <div className="flex flex-col gap-3">
                  {[
                    "Pricing",
                    "Reviews",
                    "Resources",
                    "Roadmap",
                    "Preview",
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </StaggerItem>

              {/* Column 2 */}
              <StaggerItem animation="fadeInUp">
                <div className="flex flex-col gap-3">
                  {["Schedule A Call", "FAQ", "Request A Feature"].map(
                    (item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity duration-300"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </StaggerItem>

              {/* Column 3 */}
              <StaggerItem animation="fadeInUp">
                <div className="flex flex-col gap-3">
                  {["Twitter", "Mail", "Buy Now!"].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col">
            {/* Logo at Top */}
            <ScrollAnimation animation="fadeInUp" duration={0.8}>
              <div className="mb-8">
                <img
                  src="/logo-footer.svg"
                  alt="KernUI Logo"
                  className="mb-4"
                />
                <p className="text-[#FFFFFF] text-[14px] leading-relaxed">
                  Design faster. Build better. Powered by <br></br> bold,
                  scalable components.
                </p>
              </div>
            </ScrollAnimation>

            {/* Navigation Items in Middle - 3 Columns */}
            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-3 gap-8 mb-8"
            >
              {/* Column 1 */}
              <StaggerItem animation="fadeInUp">
                <div className="flex flex-col gap-3">
                  {[
                    "Pricing",
                    "Reviews",
                    "Resources",
                    "Roadmap",
                    "Preview",
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </StaggerItem>

              {/* Column 2 */}
              <StaggerItem animation="fadeInUp">
                <div className="flex flex-col gap-3">
                  {["Schedule A Call", "FAQ", "Request A Feature"].map(
                    (item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity duration-300"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </StaggerItem>

              {/* Column 3 */}
              <StaggerItem animation="fadeInUp">
                <div className="flex flex-col gap-3">
                  {["Twitter", "Mail", "Buy Now!"].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Product Hunt Badge */}
            <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
              <div className="flex justify-center mb-6">
                <a
                  href="https://www.producthunt.com/products/kernui-design-system?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-kernui&#0045;design&#0045;system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1001930&theme=neutral&t=1754406040054"
                    alt="KernUI&#0032;&#0045;&#0032;Design&#0032;System - The&#0032;UI&#0032;kit&#0032;your&#0032;&#0032;product&#0032;deserves&#0046; | Product Hunt"
                    style={{ width: "250px", height: "54px" }}
                    width="250"
                    height="54"
                  />
                </a>
              </div>
            </ScrollAnimation>

            {/* Built with Care Text at Bottom */}
            <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.5}>
              <div className="pt-6 w-full">
                <p className="text-[#D1D1D1] text-[14px]">
                  © 2025 Kern — built with care 🍞. All rights reserved.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Desktop Product Hunt Badge */}
          <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
            <div className="hidden lg:flex justify-center mb-6">
              <a
                href="https://www.producthunt.com/products/kernui-design-system?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-kernui&#0045;design&#0045;system"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1001930&theme=neutral&t=1754406040054"
                  alt="KernUI&#0032;&#0045;&#0032;Design&#0032;System - The&#0032;UI&#0032;kit&#0032;your&#0032;&#0032;product&#0032;deserves&#0046; | Product Hunt"
                  style={{ width: "250px", height: "54px" }}
                  width="250"
                  height="54"
                />
              </a>
            </div>
          </ScrollAnimation>

          {/* Desktop Copyright */}
          <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.5}>
            <div className="hidden lg:block pt-8">
              <p className="text-[#D1D1D1] text-[14px]">
                © 2025 Kern — built with care 🍞. All rights reserved.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

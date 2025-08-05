const Footer = () => {
  return (
    <div className="w-full px-2 bg-[#F7F7F7]">
      <footer className="w-full bg-[#171717] rounded-[24px] pt-16 lg:pt-32 px-4 lg:px-32 py-16 relative">
        {/* Top Right Icon */}
        <img
          src="/footer/layer-top.svg"
          alt="Layers"
          className="absolute top-0 right-0 z-0 md:w-32 md:h-32 lg:w-auto lg:h-auto"
          style={{
            width: "292px",
            height: "250px",
          }}
        />
        {/* Bottom Left Icon */}
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
          <div className="hidden lg:flex items-start gap-16 mb-12">
            <div className="flex-1">
              <img src="/logo-footer.svg" alt="KernUI Logo" className="mb-4" />
              <p className="text-[#FFFFFF] text-[14px] leading-relaxed">
                Design faster. Build better. Powered by <br></br> bold, scalable
                components.
              </p>
            </div>

            {/* Navigation Links - 3 Columns */}
            <div className="flex gap-16">
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Reviews
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Roadmap
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Preview
                </a>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Schedule A Call
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Request A Feature
                </a>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Mail
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Buy Now!
                </a>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col">
            {/* Logo at Top */}
            <div className="mb-8">
              <img src="/logo-footer.svg" alt="KernUI Logo" className="mb-4" />
              <p className="text-[#FFFFFF] text-[14px] leading-relaxed">
                Design faster. Build better. Powered by <br></br> bold, scalable
                components.
              </p>
            </div>

            {/* Navigation Items in Middle - 3 Columns */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Reviews
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Roadmap
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Preview
                </a>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Schedule A Call
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Request A Feature
                </a>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Mail
                </a>
                <a
                  href="#"
                  className="text-[#FFFFFF] text-[14px] hover:opacity-80 transition-opacity"
                >
                  Buy Now!
                </a>
              </div>
            </div>

            {/* Built with Care Text at Bottom */}
            <div className="pt-6 w-full">
              <p className="text-[#D1D1D1] text-[14px]">
                © 2025 Kern — built with care 🍞. All rights reserved.
              </p>
            </div>
          </div>

          {/* Desktop Copyright */}
          <div className="hidden lg:block pt-8">
            <p className="text-[#D1D1D1] text-[14px]">
              © 2025 Kern — built with care 🍞. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

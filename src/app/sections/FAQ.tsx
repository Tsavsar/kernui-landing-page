"use client";
import { Plus, Minus, ArrowUpRight, MessageSquareText } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I get all future updates after paying the base fee?",
      answer:
        "Yes — once you're in, you're locked into your plan tier and will automatically receive every future update at no extra cost. Whether it's minor improvements or full-blown new features, your toolkit will keep evolving.",
    },
    {
      question: "Can I get a custom design system?",
      answer:
        "Absolutely. If your team has unique branding, structure, or workflows, we offer tailored design systems built specifically for your needs. Just reach out, and we'll work with you to craft a system — and a quote — that fits.",
    },
    {
      question: "Do I need any permits to use KernUI?",
      answer:
        "Nope, no red tape here. Once you've made your purchase, you're free to use KernUI in any of your eligible projects based on your license type. It's yours to design, build, and scale with.",
    },
    {
      question: "Can I use KernUI across multiple projects?",
      answer:
        "Yes — KernUI is built for real-world flexibility. You're allowed to use it across multiple projects, as long as those projects fall under your team's or organization's license. No need to repurchase for every new product.",
    },
    {
      question: "Do I need to know code to use it?",
      answer:
        "Not at all. KernUI is built with both designers and developers in mind. You can fully explore its components, styles, and tokens in Figma without ever touching code — though devs will love how cleanly it translates into production.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#1C1C1C] py-16 px-4 relative">
      {/* Top Right Icon */}
      <img
        src="/faq/layers-top.svg"
        alt="Layers"
        className="absolute top-0 right-0"
      />
      {/* Left Middle Icon */}
      <img
        src="/faq/layers-middle.svg"
        alt="Layers"
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
      />
      {/* Bottom Icon */}
      <img
        src="/faq/layers-buttom.svg"
        alt="Layers"
        className="absolute bottom-0 right-0"
      />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-[36px] font-medium text-white mb-4">
          Frequently Asked{" "}
          <span className="inline-block">
            <span
              className="relative inline-block px-2 py-1 rounded"
              style={{
                border: "0.5px solid #FB3748",
                background: "#FB37481A",
                width: "fit-content",
                height: "fit-content",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="absolute top-0 left-0 w-2 h-2 bg-[#1C1C1C] transform -translate-x-1/2 -translate-y-1/2"
                style={{ border: "0.5px solid #FB3748" }}
              ></span>
              <span
                className="absolute top-0 right-0 w-2 h-2 bg-[#1C1C1C] transform translate-x-1/2 -translate-y-1/2"
                style={{ border: "0.5px solid #FB3748" }}
              ></span>
              <span
                className="absolute bottom-0 left-0 w-2 h-2 bg-[#1C1C1C] transform -translate-x-1/2 translate-y-1/2"
                style={{ border: "0.5px solid #FB3748" }}
              ></span>
              <span
                className="absolute bottom-0 right-0 w-2 h-2 bg-[#1C1C1C] transform translate-x-1/2 translate-y-1/2"
                style={{ border: "0.5px solid #FB3748" }}
              ></span>
              Questions
            </span>
          </span>
        </h2>

        <p className="text-[18px] text-[#A3A3A3] leading-relaxed max-w-2xl mx-auto mb-12">
          Got questions about KernUI? From pricing to permissions, here's
          everything you need to know before diving in.
        </p>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="text-left">
              <div
                className={`w-full rounded-xl transition-all duration-200 ${
                  openIndex === index ? "bg-[#1F1F1F]" : "bg-transparent"
                }`}
                style={{ borderRadius: "12px" }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center gap-3 p-4 text-left hover:bg-[#292929] transition-colors duration-200 rounded-t-xl"
                >
                  <div
                    className={`flex-shrink-0 transition-all duration-300 ease-in-out ${
                      openIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <Plus size={20} className="text-[#A3A3A3]" />
                  </div>
                  <span className="text-[14px] text-white font-medium">
                    {faq.question}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100 scale-y-100"
                      : "max-h-0 opacity-0 scale-y-95"
                  }`}
                  style={{
                    transformOrigin: "top",
                  }}
                >
                  <div className="px-4 pb-4 pl-11">
                    <p className="text-[14px] text-[#A3A3A3] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 cursor-pointer">
            <span className="text-[14px] text-[#A3A3A3]">
              Got any more questions?
            </span>
            <span className="text-[14px] font-medium text-white">
              Contact us
            </span>
            <ArrowUpRight size={16} className="text-[#CA0016]" />
          </div>
        </div>

        {/* Design System Resources Section */}
        <div className="mt-24">
          <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
            {/* Left Side - Header, Subtitle, and Contact */}
            <div className="flex-1 text-left lg:sticky lg:top-8 lg:self-start">
              <h3 className="text-[36px] font-medium text-white mb-4">
                Just Getting Into Design System? We Can Help!
              </h3>
              <p className="text-[18px] text-[#A3A3A3] leading-relaxed mb-8">
                Here are some resources curated so you can understand what a
                design system can do, also so you understand how to make one!
              </p>

              {/* Contact Section */}
              <div className="flex items-center gap-4">
                <h4 className="text-[18px] text-white">Any more questions?</h4>
                <button
                  className="inline-flex items-center gap-2 px-4 h-10 rounded-xl text-[14px] font-medium w-fit"
                  style={{
                    background: "#292929",
                    borderRadius: "12px",
                    height: "40px",
                  }}
                >
                  <span className="text-white">Contact us</span>
                  <MessageSquareText size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Right Side - Resource Cards */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Design Systems Crash Course",
                    description:
                      "A curated playlist covering the what, how, and why of design systems — from tokens to team workflows. Perfect for beginners, onboarding, and leveling up.",
                    link: "https://www.youtube.com/playlist?list=PLuGpMawKEhfYcJINsWkhibydvQIob1rwe&si=4X_79ujjBxaVeXAc",
                  },
                  {
                    title: "Typography - Ultimate Design System Breakdown",
                    description:
                      "Learn how the best design systems build their typography and apply the common patterns and insights for yourself.",
                    link: "https://www.youtube.com/watch?v=9w-BwzcuxYM&t=92s",
                  },
                  {
                    title: "Building blocks",
                    description:
                      "Figma's guide to design systems and component libraries.",
                    link: "https://www.youtube.com/playlist?list=PLXDU_eVOJTx4ubs6h9Y0KkhLSx4uCOseA&si=mv1S6rINKARuH40H",
                  },
                ].map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-full max-w-[472px]"
                  >
                    {/* Image */}
                    <div
                      className="w-full border mb-4 overflow-hidden"
                      style={{
                        border:
                          "1px solid var(--Strokes-stroke-soft, #FFFFFF0D)",
                        borderRadius: "34px",
                        height: "240px",
                        padding: "25px 8px 0 8px",
                      }}
                    >
                      <img
                        src={`/card-${index + 1}.svg`}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col text-left">
                      <h4 className="text-[24px] font-medium text-white mb-2">
                        {card.title}
                      </h4>
                      <p className="text-[14px] text-[#A3A3A3] leading-relaxed mb-4">
                        {card.description}
                      </p>
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 h-9 rounded-xl text-[14px] font-medium text-[#171717] border w-fit underline"
                        style={{
                          background: "#FFFFFF",
                          border:
                            "1px solid var(--Strokes-stroke-soft, #0000000D)",
                          borderRadius: "12px",
                          height: "36px",
                        }}
                      >
                        <img
                          src="/icons/youtube.svg"
                          alt="YouTube"
                          className="w-4 h-4"
                        />
                        Watch now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

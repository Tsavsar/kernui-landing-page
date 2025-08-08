"use client";

import TestimonialCard from "../components/TestimonialCard";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/ScrollAnimations";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Smart structure, scalable components.",
      person: "Deji Ajetomobi",
      role: "Designer",
      company: "Wise",
      description:
        "I'd say looking at KernUi, it's well put together with appropriate guidance for each components. The scalability of each components is well thought out as well.",
      isHighlighted: true,
    },
    {
      title: "Built for Speed, Clarity, and Focus",
      description:
        "As someone who's worked in fast-moving teams, I know how much time goes into reinventing the wheel. KernUI is the kind of system that gives you clarity, structure, and room to focus on the bigger picture",
      person: "Dami",
      role: "Founder",
      company: "Tabs",
      isHighlighted: false,
    },
  ];

  return (
    <section id="reviews" className="w-full py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollAnimation animation="fadeInUp" duration={0.8}>
          <h2 className="text-[28px] md:text-[36px] font-medium text-[#171717] mb-4">
            What{" "}
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
                  className="absolute top-0 left-0 w-2 h-2 bg-white transform -translate-x-1/2 -translate-y-1/2"
                  style={{ border: "0.5px solid #FB3748" }}
                ></span>
                <span
                  className="absolute top-0 right-0 w-2 h-2 bg-white transform translate-x-1/2 -translate-y-1/2"
                  style={{ border: "0.5px solid #FB3748" }}
                ></span>
                <span
                  className="absolute bottom-0 left-0 w-2 h-2 bg-white transform -translate-x-1/2 translate-y-1/2"
                  style={{ border: "0.5px solid #FB3748" }}
                ></span>
                <span
                  className="absolute bottom-0 right-0 w-2 h-2 bg-white transform translate-x-1/2 translate-y-1/2"
                  style={{ border: "0.5px solid #FB3748" }}
                ></span>
                People
              </span>
            </span>{" "}
            Are Saying
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
          <p className="text-[16px] md:text-[18px] text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12 px-4 md:px-0">
            Designers, devs, and founders share how KernUI has streamlined their
            workflow and elevated their product design.
          </p>
        </ScrollAnimation>

        {/* Testimonial Cards */}
        <StaggerContainer staggerDelay={0.2}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-3 mt-8 md:mt-12">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <TestimonialCard
                  title={testimonial.title}
                  person={testimonial.person}
                  role={testimonial.role}
                  company={testimonial.company}
                  description={testimonial.description}
                  isHighlighted={testimonial.isHighlighted}
                />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials;

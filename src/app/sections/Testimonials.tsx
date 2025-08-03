import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Smart structure, scalable components.",
      person: "Deji Ajetomobi",
      role: "Designer",
      company: "Wise",
    },
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
      title: "Smart structure, scalable components.",
      person: "Deji Ajetomobi",
      role: "Designer",
      company: "Wise",
    },
    {
      title: "Smart structure, scalable components.",
      person: "Deji Ajetomobi",
      role: "Designer",
      company: "Wise",
    },
  ];
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[36px] font-medium text-[#171717] mb-4">
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
              People
            </span>
          </span>{" "}
          Are Saying
        </h2>

        <p className="text-[18px] text-[#5C5C5C] leading-relaxed max-w-2xl mx-auto mb-12">
          Designers, devs, and founders share how KernUI has streamlined their
          workflow and elevated their product design.
        </p>

        {/* Testimonial Cards */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              title={testimonial.title}
              person={testimonial.person}
              role={testimonial.role}
              company={testimonial.company}
              description={testimonial.description}
              isHighlighted={testimonial.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

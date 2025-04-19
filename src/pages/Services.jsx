import React from "react";
import ServicesCard from "../components/ServicesCard";
import { expertise } from "../assets/Expertise.js";

function Services() {
  return (
    <div>
      <div className="px-5 lg:px-[10%] py-4 text-center text-text mt-4">
        <h1 className="text-2xl text-bold text-textSecondary lg:text-4xl lg:mt-5">
          Our Services
        </h1>
        <p className="py-3 px-10 lg:py- lg:px-[20%]">
          At Offset design, we offer comprehensive architectural and
          construction solutions tailored to meet your needs. From concept to
          completion, our expertise ensures precision, efficiency, and
          excellence in every project.
        </p>
      </div>
      <div>
        <h2 className="text-xl text-bold text-textSecondary lg:text-3xl lg:mt-5 text-center">
          Our Expertise
        </h2>

        <section>
          {expertise.map((item, index) => (
            <ServicesCard
              key={index}
              serviceName={item.name}
              serviceDescription={item.description}
              serviceIcon={item.icon}
              alignment={item.alignment.toLowerCase()} // normalize "Right" to "right"
            />
          ))}
        </section>
      </div>
      <p className="py-3 px-10 lg:py-20 lg:px-[33%] text-text text-center leading-7">
        At Offset Design, we transform ideas into reality with precision,
        creativity, and unwavering commitment. Whether it's a single design
        element or a full-scale construction project, we ensure the highest
        standards at every step. Let’s build something extraordinary together!
      </p>
    </div>
  );
}

export default Services;

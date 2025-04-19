import React from "react";
import { PortfolioData } from "../assets/Portfolio/PortfolioData";
import PortfolioCard from "../components/PortfolioCard";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="text-center">
      <div className="px-5 lg:px-[10%] py-4 text-center text-text mt-4">
        <h1 className="text-2xl text-bold text-textSecondary lg:text-4xl lg:mt-5">
          Portfolio
        </h1>
        <p className="text-regular py-3 px-10 lg:py- lg:px-[20%]">
          At Offset Design, we specialize in innovative architectural design and
          precision-driven construction. From concept to completion, our
          projects blend aesthetics with functionality, ensuring excellence in
          every detail.
        </p>
        <p className="text-regular py-3 px-10 lg:py- lg:px-[20%]">
          Explore our portfolio to see how we transform visions into reality,
          creating spaces that inspire and endure.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-center lg:mx-[10%] text-text text-left">
        {PortfolioData.map((item, index) => (
          <PortfolioCard
            image={item.image}
            type={item.type}
            face={item.face}
            purpose={item.purpose}
          />
        ))}
      </div>

      <button className="mt-5 border border-textSecondary text-text rounded-lg hover:bg-textSecondary/40 transition duration-300 ease-in px-4 py-2 font-bold">
        View More
      </button>

      <p className="text-regular italic text-text/40 py-3 my-4 px-10 lg:py- lg:px-[20%]">
        "Contact us today to discuss your project and discover how we can bring
        your ideas to life."
      </p>
    </div>
  );
}

export default Portfolio;

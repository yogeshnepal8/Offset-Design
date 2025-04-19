import React, { useState } from "react";

function Faq({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="faq-item py-2 px-4 lg:px-[10%]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col px-4 border border-text/40 rounded-lg py-2 transition-all duration-300 ease-in-out cursor-pointer">
        <div className="flex justify-between items-center w-full px-4 lg:px-[10%]">
          <h3 className="text-xl font-semibold text-start">{question}</h3>
          <span className="text-textSecondary text-2xl">
            {isOpen ? "-" : "+"}
          </span>
        </div>

        {isOpen && (
          <p className="text-regular text-start text-gray-400 px-4 lg:px-[10%]">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
}

export default Faq;

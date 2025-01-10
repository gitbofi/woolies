import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <div
        onClick={toggleOpen}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-base font-medium">{question}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="mt-2 text-dark">
          <p className="leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;

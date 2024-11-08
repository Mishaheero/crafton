import React from "react";

const ButtonScroll = () => {
  const scrollToTop = () => {
    const headerElement = document.getElementById("header"); 
    if (headerElement) {
      headerElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button className="p-4 bg-green-400 rounded-lg" onClick={scrollToTop}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 15L12 9L18 15"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ButtonScroll;

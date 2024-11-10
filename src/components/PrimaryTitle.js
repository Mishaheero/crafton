import React from "react";

const PrimaryTitle = ({ text }) => {
  return (
    <>
      <svg
        className="lg:w-[79px] lg:h-[50px] w-14 h-10"
        
        viewBox="0 0 79 50"
        fill="none"
      >
        <path
          d="M21.1539 22.2231V50C9.47006 50 2.28882e-05 40.0513 2.28882e-05 27.7769V0C11.6838 0 21.1539 9.94868 21.1539 22.2231Z"
          fill="url(#paint0_radial_0_953)"
        />
        <path
          d="M79 50C49.2647 50 25.1539 27.6113 25.1539 0C54.8892 0 79 22.3887 79 50Z"
          fill="url(#paint1_radial_0_953)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_0_953"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(10.573 25.0041) rotate(180) scale(26.9682 28.3314)"
          >
            <stop stopColor="#0B4D8A" />
            <stop offset="1" stopColor="#0B4D8A" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_0_953"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(52.0725 25.0041) rotate(180) scale(39.4331 36.6165)"
          >
            <stop stopColor="#2B7C62" />
            <stop offset="1" stopColor="#2B7C62" stopOpacity="0.8" />
          </radialGradient>
        </defs>
      </svg>
      <h2 className="mt-4 text-lg font-bold lg:mt-10 lg:text-xl text-darkBlue-400">{text}</h2>
    </>
  );
};

export default PrimaryTitle;

import React from "react";

const MainTitle = ({ text }) => {
  return (
    <h1 className="mb-4 text-lg font-bold md:text-xl lg:text-2xl text-darkBlue-400">
      {text}
    </h1>
  );
};

export default MainTitle;

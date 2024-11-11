import React from "react";
import EntryAnimation from "../EntryAnimation";

const MainTitle = ({ text }) => {
  return (
    <EntryAnimation animationType="entry-left">
      <h1 className="mb-4 text-lg font-bold md:text-xl lg:text-2xl text-darkBlue-400">
        {text}
      </h1>
    </EntryAnimation>
  );
};

export default MainTitle;

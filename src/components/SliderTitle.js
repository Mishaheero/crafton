import React from "react";
import PropTypes from "prop-types";

const SliderTitle = ({ text }) => {
  return <h3 className="text-white text-md xl:text-lg">{text}</h3>;
};

SliderTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SliderTitle;

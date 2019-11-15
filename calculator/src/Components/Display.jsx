/* eslint-disable react/prop-types */
import React from "react";
import "./Styles/Display.css";

const Display = (props) => {
  const { value } = props;
  return (
    <div className="display">
      <input value={value} disabled />
    </div>
  );
};

export default Display;

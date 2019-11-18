/* eslint-disable react/prop-types */
import React from "react";
import "./Styles/Display.css";

const Display = (props) => {
  const { value, operation } = props;
  return (
    <div className="display">
      <input value={value} disabled/>
      <div className="operation">
        {operation}
      </div>
    </div>
  );
};

export default Display;

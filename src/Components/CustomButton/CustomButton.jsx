import React from "react";
import "./CustomButton.css";

const CustomButton = ({ text, onClick }) => {
  return <div className="Button" onClick={onClick}>{text}</div>;
};

export default CustomButton;

import React from "react";
import "./CustomInput.css";

const CustomInput = ({ size, placeholder, type, icon, onChange }) => {
  return (
    <div
      className={`customInput ${
        size === "small"
          ? "smallWidth"
          : size === "normal"
          ? "normalWidth"
          : "fullWidth"
      }`}
    >
      <input type={type} className="input" placeholder={placeholder} onChange={onChange}/>
      <span className="material-symbols-rounded icon">{icon}</span>
    </div>
  );
};

export default CustomInput;

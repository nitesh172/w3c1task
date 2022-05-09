import React from "react";
import "./CustomInput.css";

const CustomInput = ({ size, placeholder, type, icon, onChange, textalign , maxLength, minLength, refernce, onKeyPress}) => {
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
      <input type={type} className={`input ${textalign}`} autoComplete="off" onKeyPress={onKeyPress} ref={refernce} placeholder={placeholder} onChange={onChange} maxLength={maxLength} minLength={minLength} />
      <span className="material-symbols-rounded icon">{icon}</span>
    </div>
  );
};

export default CustomInput;

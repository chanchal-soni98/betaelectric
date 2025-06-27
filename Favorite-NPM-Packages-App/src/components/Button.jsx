import React from "react";
const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` text-white px-4 py-2 rounded hover:bg-blue-700 ${className}`}
      style={{ backgroundColor: "#7b68ee" }}
    >
      {children}
    </button>
  );
};
export default Button;

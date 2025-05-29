import React from "react";

const Button = ({ label }) => {
  const baseClass = "px-4 py-2 text-red-500";
  //   console.log(props);

  return <button className={`${baseClass}`}>{label}</button>;
};

export default Button;

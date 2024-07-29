import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackButton = ({ to, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className="left mb-8 font-piazzolla hover:underline text-m text-gray-600 dark:text-gray-200"
    >
      {label}
    </button>
  );
};

export default GoBackButton;

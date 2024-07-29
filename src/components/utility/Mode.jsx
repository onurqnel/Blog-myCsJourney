import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import SunIcon from "/assets/icons/sun.png";
import MoonIcon from "/assets/icons/moon.gif";

const Mode = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="text-right">
      <button
        onClick={toggleDarkMode}
        className={`text-gray-500 dark:text-gray-400 ${
          darkMode
            ? "hover:bg-[#24292f] focus:ring-gray-200 dark:focus:ring-gray-700"
            : "hover:bg-[#D3D3D3] focus:ring-white dark:focus:ring-white"
        } focus:outline-none focus:ring-4 rounded-full text-sm p-4`}
      >
        <img
          src={darkMode ? SunIcon : MoonIcon}
          className="w-6 h-6"
          alt={darkMode ? "Sun Icon" : "Moon Icon"}
        />
      </button>
    </div>
  );
};

export default Mode;

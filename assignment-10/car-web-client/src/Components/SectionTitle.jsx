import React, { useContext } from "react";
import { AuthContext } from "../FireBase/AuthProvider";
import { ThemeContext } from "../MainLayout/MainLayout";

function SectionTitle({ title }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const textColorStyle = {
    color: theme === "light" ? "#252d41" : "#f1f1f1",
  };

  return (
    <h2
      style={textColorStyle}
      className={`text-center my-12 relative mb-10 text-4xl font-normal leading-10 uppercase before:bg-[#d54242] before:bottom-[-10px] before:h-[4px] before:rounded-lg before:left-[50%] 
      before:absolute before:translate-x-[-50%] before:w-[70%]`}
    >
      {title}
    </h2>
  );
}

export default SectionTitle;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../MainLayout/MainLayout";

function BrandCard({ item }) {
  const { brandName, brandImage } = item;
  const { theme, setTheme } = useContext(ThemeContext);
  const textColorStyle = {
    color: theme === "light" ? "#252d41" : "#f1f1f1",
  };

  return (
    <div>
      <Link to={`/brand/${brandName}`}>
        <div className="block max-w-[18rem] md:max-w-[22rem] lg:max-w-[25rem] lg:h-[350px]  mx-auto rounded-lg  shadow-[0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)] dark:bg-neutral-700 bg-base-300 shadow-xl">
          <div className="relative overflow-hidden bg-cover bg-no-repeat flex justify-center items-center w-auto h-auto lg:h-[265px] ">
            <img className="rounded-t-lg" src={brandImage} alt={brandImage} />
          </div>
          <div className="p-6">
            <p
              style={textColorStyle}
              className="text-3xl font-semibold text-center text-neutral-600 dark:text-neutral-200"
            >
              {brandName}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BrandCard;

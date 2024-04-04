import { useContext } from "react";
import { FaArrowRight, FaCheck, FaBookOpen } from "react-icons/fa";
import { ThemeContext } from "../../MainLayout/MainLayout";

function AboutUs() {
  const { theme, setTheme } = useContext(ThemeContext);
  const textColorStyle = {
    color: theme === "light" ? "#252d41" : "#f1f1f1",
  };
  return (
    <div className="p-9 flex flex-col sm:flex-row gap-8">
      <div className="w-full sm:w-1/2">
        <img
          src="https://i.ibb.co/7GXCJ6c/couple-buying-new-car-at-car-dealership-T2-UQ6-JH.jpg"
          alt="Couple Buying a Car"
          className="w-full rounded-lg"
        />
      </div>
      <div className="w-full sm:w-1/2 mt-6 text-center sm:text-left space-y-7">
        <p className="text-[#d54242] text-2xl font-medium">About Serfix</p>
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold">
          Why Choose Serfix?
        </h2>
        <p style={textColorStyle} className="text-[#393e46] text-lg sm:text-xl">
          At Serfix, we are dedicated to providing you with the best automotive
          solutions. Our commitment to excellence ensures your journey is smooth
          and enjoyable. We're here to support you every step of the way.
        </p>
        <div
          style={textColorStyle}
          className="flex flex-wrap justify-start items-start mt-4"
        >
          <div className="w-1/2 flex items-center">
            <FaCheck className="text-[#d54242] mr-2" />
            <span className="texat-[#393e46]">
              We offer top-quality vehicles.
            </span>
          </div>
          <div className="w-1/2 flex items-center">
            <FaCheck className="text-[#d54242] mr-2" />
            <span className="teaxt-[#393e46]">Our team is experienced.</span>
          </div>
          <div className="w-1/2 flex items-center">
            <FaCheck className="text-[#d54242] mr-2" />
            <span className="teaxt-[#393e46]">
              We provide competitive prices.
            </span>
          </div>
          <div className="w-1/2 flex items-center">
            <FaCheck className="text-[#d54242] mr-2" />
            <span className="teaxt-[#393e46]">
              Your satisfaction is our top priority.
            </span>
          </div>
        </div>
        <button className="mt-6 py-2 px-4 bg-[#d54242] text-white text-lg font-semibold rounded-lg hover:bg-[#FF6347] transition duration-300 flex items-center">
          <FaBookOpen className="mr-2" />
          Discover More
        </button>
      </div>
    </div>
  );
}

export default AboutUs;

import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Pages/Footer/Footer";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const CarsContext = createContext(null);
export const ThemeContext = createContext(null);
function MainLayout() {
  const [carsData, setCarsData] = useState([]);

  const fetchCarsData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cars");
      setCarsData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCarsData();
  }, []);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const contextInfo = {
    carsData,
    fetchCarsData,
  };
  const themeContext = {
    setTheme,
    theme,
  };
  // console.log(itemOnCartData);
  return (
    <ThemeContext.Provider value={themeContext}>
      <CarsContext.Provider value={contextInfo}>
        <div className="mx-auto max-w-7xl">
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </CarsContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MainLayout;

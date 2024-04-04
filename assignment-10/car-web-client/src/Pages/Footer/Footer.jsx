import { useContext } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ThemeContext } from "../../MainLayout/MainLayout";

function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);
  const bgColorStyle = {
    backgroundColor: theme === "light" ? "#cbd5e1" : "#2c2929",
  };

  return (
    <footer style={bgColorStyle} className="bg-base-100  py-8">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Contact Us</h3>
          <p>123 Car Street, Suite 101</p>
          <p>New York, United States</p>
          <p>Email: info@serfix.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="text-center">
          <div className="">
            {theme === "light" ? (
              <img
                src="https://i.ibb.co/yPGT4WM/download.png"
                className="h-full"
                alt=""
              />
            ) : (
              <img
                src="https://i.ibb.co/vYVFLfj/download1.png"
                className="h-full"
                alt=""
              />
            )}
          </div>
          <p>
            Serfix
            <br />
            Your Reliable Automotive Partner
          </p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 p-4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Stay Connected</h3>
          <p>Follow us on social media:</p>
          <div className="flex gap-4 justify-center mt-2 text-center">
            <a href="#" className="mr-2">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="mr-2">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center">
        &copy; {new Date().getFullYear()} Serfix. All rights reserved. Proudly
        serving Your City.
      </p>
    </footer>
  );
}

export default Footer;

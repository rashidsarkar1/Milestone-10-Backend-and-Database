import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FireBase/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../MainLayout/MainLayout";

function NavBar() {
  const { user, logOut } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);

  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);
  // console.log(theme);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  // console.log(setTheme);
  // const user = false; // Replace with your actual authentication logic
  const handleSingOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  // console.log(user);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#d54242] font-semibold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#d54242] font-semibold"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#d54242] font-semibold"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>

      <li></li>
    </>
  );
  const bgColorStyle = {
    backgroundColor: theme === "light" ? "#cbd5e1" : "#2c2929",
  };
  // #2c2929
  return (
    <div
      style={bgColorStyle}
      className="left-0 right-0 z-50 w-full mx-auto rounded-b-none navbar "
    >
      <div className="w-full lg:w-[50%] navbar-start">
        <div className="z-50 dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="md:h-[70px] flex items-center ">
          {/* black  */}
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

          {/* white  */}
          {/* <img src="https://i.ibb.co/vYVFLfj/download1.png" alt="" /> */}
        </div>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="inline-flex flex-row flex-wrap gap-3 p-2 px-1 text-xl font-semibold menuu menuu-horizontal">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {/* togol start  */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            checked={theme === "light" ? false : true}
            type="checkbox"
            onChange={handleToggle}
          />

          {/* sun icon */}
          <svg
            className="w-10 h-10 fill-current swap-on"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="w-10 h-10 fill-current swap-off"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {/* togol End */}
        {user ? (
          // User is authenticated, show user menu
          <div className="z-50 dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 w-[250px]  z-[99] p-2 shadow menu menu-sm  dropdown-content bg-base-100 rounded-box "
            >
              <li>
                <div className="flex flex-col px-4 py-3 ">
                  <span className="block text-sm dark:text-white">
                    {user.displayName || "Display Name"}
                  </span>
                  <span className="block text-sm truncate dark:text-gray-400">
                    {user.email || "Email"}
                  </span>
                </div>
              </li>

              <li className="mx-auto text-center ">
                <Link onClick={handleSingOut}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          // User is not authenticated, show login button
          <ul className="inline-flex flex-row flex-wrap gap-3 p-2 px-1 text-xl text-white menuu menuu-horizontal">
            <li>
              <NavLink
                to="/Login"
                className="inline-block rounded bg-[#d54242] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-[#FF6347] hover:shadow-lg focus:bg-[#d54242] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#d54242] active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-md"
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;

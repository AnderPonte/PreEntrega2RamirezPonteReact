import React from "react";
import logoNav from "../../assets/faviconlogo.svg";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between p-3.5 ">
        <Link to="/">
          <img className="w-full" src={logoNav} alt="Logo" />
        </Link>
        <div className="ml-10 flex items-center space-x-4 text-white ">
          <NavLink
            to={`/category/rnb`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            RNB
          </NavLink>
          <NavLink
            to={`/category/hiphop`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            HIPHOP
          </NavLink>
          <NavLink
            to={`/category/pop`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            POP
          </NavLink>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

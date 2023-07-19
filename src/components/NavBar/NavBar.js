import React from "react";
import logoNav from "../../assets/faviconlogo.svg";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap justify-between p-3.5 ">
        <Link to="/">
          <img className="w-full" src={logoNav} alt="Logo" />
        </Link>
        <div className="ml-10 flex items-baseline space-x-4 ">
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

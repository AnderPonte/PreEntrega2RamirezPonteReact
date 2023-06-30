import React from "react";
import logoNav from "../../assets/faviconlogo.svg";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap justify-between p-3.5 ">
        <div>
          <img className="w-full" src={logoNav} alt="Logo" />
        </div>
        <div className="ml-10 flex items-baseline space-x-4 ">
          <a
            href=""
            className="text-gray-950  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Beats
          </a>
          <a
            href=""
            className="text-gray-950  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Servicios
          </a>
          <a
            href=""
            className="text-gray-950  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Música
          </a>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

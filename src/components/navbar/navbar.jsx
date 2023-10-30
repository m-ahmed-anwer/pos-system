import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4696/4696797.png"
            alt="icon"
            className="w-10 mr-3"
          />

          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
            Habibi Stall
          </span>
        </a>

        <ul className="flex items-center space-x-8 lg:flex">
          <li>
            <Link
              className="group relative inline-block focus:outline-none focus:ring"
              to={"/login"}
            >
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span className="relative inline-block border-2 border-current px-5 py-2 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                POS System
              </span>
            </Link>
          </li>
        </ul>
        <div className="md:hidden"></div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-[#4A70A9] px-5 py-2">
        <div id="logi" className="flex items-center gap-2">
          <img
            className="h-12 w-12"
            src="../public/images/logo.png"
            alt="logo"
          />
          <p className="text-lg font-semibold">KVA Limited</p>
        </div>

        <div id="list-items" className="hidden md:flex justify-center gap-3 text-black font-semibold">
          <p className="text-lg font-semibold hover:text-white cursor-pointer">Home</p>
          <p className="text-lg font-semibold hover:text-white cursor-pointer">About Us</p>
          <p className="text-lg font-semibold hover:text-white cursor-pointer">Contact Us</p>
        </div>

        <div className="hidden md:flex md:gap-2">
          <button
            type="submit"
            className="bg-[#008BFF] text-white font-semibold py-1 w-20 rounded-md cursor-pointer hover:bg-[#5B23FF]"
          >
            Login
          </button>
          <button
            type="submit"
            className="bg-[#008BFF] text-white font-semibold py-1 w-20 rounded-md cursor-pointer hover:bg-[#5B23FF]"
          >
            Sign Up
          </button>
        </div>

        {/* bar icon for mobile view */}
        <button className="md:hidden text-xl">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;

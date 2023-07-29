import React from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaLaptopCode,
  FaIdBadge,
} from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 justify-center text-xl shadow-md bg-secondary navbar gap-x-10 text-accent md:text-5xl shadow-accent">
        <a href="#welcome">
          <FaHome className="p-1 hover:scale-125" />
        </a>
        <a href="#about">
          <FaUser className="p-1 hover:scale-125" />
        </a>
        <a href="#skillsTech">
          <FaTools className="p-1 hover:scale-125" />
        </a>
        <a href="#works">
          <FaLaptopCode className="p-1 hover:scale-125" />
        </a>
        <a
          href="https://drive.google.com/file/d/1aPx7NWAbv8bGtlGkXylRLwTRff_NaOPR/view?usp=sharing"
          target="_blank"
        >
          <FaIdBadge className="p-1 hover:scale-125" />
        </a>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import { FaHome, FaUser, FaTools, FaLaptopCode } from "react-icons/fa";
import cv from "../assets/cv.png";

function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 justify-center text-xl bg-blue-400 shadow-lg bg-opacity-30 navbar gap-x-10 text-slate-800 md:text-5xl shadow-blue-400">
        <a href="#welcome">
          <FaHome className="p-1 hover:scale-110 hover:shadow-lg hover:shadow-red-400 hover:rounded-lg" />
        </a>
        <a href="#about">
          <FaUser className="p-1 hover:scale-110 hover:shadow-lg hover:shadow-red-400 hover:rounded-lg" />
        </a>
        <a href="#skillsTech">
          <FaTools className="p-1 hover:scale-110 hover:shadow-lg hover:shadow-red-400 hover:rounded-lg" />
        </a>
        <a href="#works">
          <FaLaptopCode className="p-1 hover:scale-110 hover:shadow-lg hover:shadow-red-400 hover:rounded-lg" />
        </a>
        <a
          href="https://docs.google.com/document/d/1MRS6AefKJPPTlIwgwehtQ7oi2QmTV4xJ/edit?usp=sharing&ouid=105761074358727036623&rtpof=true&sd=true"
          target="_blank"
        >
          <img
            src={cv}
            alt="resume"
            className="p-1 w-7 md:w-12 hover:scale-110 hover:shadow-lg hover:shadow-red-400 hover:rounded-lg"
          />
        </a>
      </nav>
    </div>
  );
}

export default Navbar;

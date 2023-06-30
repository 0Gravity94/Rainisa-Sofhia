import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="grid pb-5 gap-y-10 md:gap-10">
      <a href="https://github.com/0Gravity94" target={"_blank"}>
        <FaGithub className="text-xl text-black rounded-full cursor-pointer md:text-4xl hover:shadow-xl hover:shadow-pink-600 hover:scale-125 hover" />
      </a>
      <a href="https://www.instagram.com/sofhia94/" target={"_blank"}>
        <FaInstagram className="text-xl text-red-500 rounded-lg cursor-pointer md:text-4xl hover:shadow-xl hover:shadow-pink-600 hover:scale-125 hover" />
      </a>
      <a
        href="https://www.linkedin.com/in/rainisa-sofhia-40489b257/"
        target={"_blank"}
      >
        <FaLinkedin className="text-xl text-blue-800 rounded-lg cursor-pointer md:text-4xl hover:shadow-xl hover:shadow-pink-600 hover:scale-125 hover" />
      </a>
    </div>
  );
}

export default SocialMedia;

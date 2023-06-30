import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="grid gap-y-10 md:gap-10 pb-5">
      <a href="https://github.com/0Gravity94" target={"_blank"}>
        <FaGithub className="text-xl md:text-4xl text-white rounded-full hover:shadow-xl hover:shadow-pink-600 hover:scale-125 hover cursor-pointer" />
      </a>
      <a href="https://www.instagram.com/sofhia94/" target={"_blank"}>
        <FaInstagram className="text-xl md:text-4xl text-red-500 rounded-lg hover:shadow-xl hover:shadow-pink-600 hover:scale-125 hover cursor-pointer" />
      </a>
      <a
        href="https://www.linkedin.com/in/rainisa-sofhia-40489b257/"
        target={"_blank"}
      >
        <FaLinkedin className="text-xl md:text-4xl text-blue-800 rounded-lg hover:shadow-xl hover:shadow-pink-600 hover:scale-125 hover cursor-pointer" />
      </a>
    </div>
  );
}

export default SocialMedia;

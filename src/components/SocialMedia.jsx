import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="flex py-5 gap-x-3">
      <a href="https://github.com/0Gravity94" target={"_blank"}>
        <FaGithub className="text-xl text-white rounded-full cursor-pointer md:text-4xl hover:shadow-md hover:shadow-accent hover:scale-125" />
      </a>
      <a href="https://www.instagram.com/sofhia94/" target={"_blank"}>
        <FaInstagram className="text-xl text-pink-500 rounded-full cursor-pointer md:text-4xl hover:shadow-md hover:shadow-accent hover:scale-125" />
      </a>
      <a
        href="https://www.linkedin.com/in/rainisa-sofhia-40489b257/"
        target={"_blank"}
      >
        <FaLinkedin className="text-xl text-blue-800 rounded-md cursor-pointer md:text-4xl hover:shadow-md hover:shadow-accent hover:scale-125" />
      </a>
    </div>
  );
}

export default SocialMedia;

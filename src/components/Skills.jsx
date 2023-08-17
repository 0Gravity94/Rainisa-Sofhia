import React from "react";

function Skills() {
  return (
    <div
      id="skillsTech"
      className="flex flex-col items-center justify-center w-full min-h-screen"
    >
      <h1 className="text-4xl">Tech Skills</h1>
      <div className="flex flex-wrap w-full gap-2 px-2 py-5 mt-5 mb-5 rounded-lg justify-evenly bg-primary md:gap-4 place-content-center md:w-2/3 md:py-10 md:px-10 ">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          width="60"
          height="60"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          width="60"
          height="60"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="60"
          height="60"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width="60"
          height="60"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
          alt="tailwind"
          width="60"
          height="60"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
          alt="bootstrap"
          width="60"
          height="60"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
          alt="figma"
          width="60"
          height="60"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
          alt="canva"
          width="60"
          height="60"
        />
      </div>
    </div>
  );
}

export default Skills;

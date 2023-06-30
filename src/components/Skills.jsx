import React from "react";

function Skills() {
  return (
    <div
      id="skillsTech"
      className="flex justify-center items-center min-h-screen"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 place-content-center w-full md:w-2/3 bg-white bg-opacity-10 rounded-lg shadow-2xl  my-20 py-5 md:py-10 px-2 md:px-10">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          width="100"
          height="100"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          width="100"
          height="100"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="100"
          height="100"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          alt="react"
          width="100"
          height="100"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
          alt="tailwind"
          width="100"
          height="100"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
          alt="bootstrap"
          width="100"
          height="100"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
          alt="figma"
          width="100"
          height="100"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
          alt="canva"
          width="100"
          height="100"
        />
      </div>
    </div>
  );
}

export default Skills;

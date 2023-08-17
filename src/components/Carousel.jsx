import React from "react";

import About from "./About.jsx";
import Welcome from "./Welcome.jsx";
import Skills from "./Skills.jsx";
import CardProjects from "./CardProject.jsx";

import { datas } from "../data/project.js";

function Carousel() {
  return (
    <div className="w-full carousel">
      <div className="w-full carousel-item">
        <Welcome />
      </div>
      <div className="w-full carousel-item">
        <About />
      </div>
      <div className="w-full carousel-item">
        <Skills />
      </div>
      <div className="w-full carousel-item">
        <div
          id="works"
          className="flex items-center justify-center w-full min-h-screen"
        >
          <div className="grid w-full gap-2 px-2 py-5 my-20 overflow-hidden md:flex justify-evenly md:gap-4 md:py-10 md:px-10">
            {datas.map((myprojects) => (
              <CardProjects
                key={myprojects.id}
                img={myprojects.img}
                title={myprojects.title}
                git={myprojects.git}
                live={myprojects.live}
                onNavigate={() => props.navigate(`/detail/${myprojects.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

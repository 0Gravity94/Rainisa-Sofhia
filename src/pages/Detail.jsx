import React from "react";
import { datas } from "../data/project";
import Button from "../components/Button";
import { FaGithub, FaLaptop } from "react-icons/fa";

import { WithRouter } from "../utils/Navigation";

function DetailProject() {
  return (
    <div>
      {datas.map((project) => (
        <div className="flex justify-center items-center h-screen">
          <div className="grid place-content-center">
            <img
              src={project.img}
              alt={project.title}
              className="mb-2 md:mb-5"
            />
            <h3 className="text-slate-800 text-lg font-bold">
              {project.title}
            </h3>
            <h3 className="text-slate-800 text-lg font-bold">
              Description: <br />{" "}
              <span className="text-slate-800 text-base font-normal">
                {project.description}
              </span>
            </h3>
            <h3 className="text-slate-800 text-lg font-bold">
              Tech:
              <span className="text-slate-800 text-base font-normal ml-1">
                {project.tech}
              </span>
            </h3>
            <div className="flex gap-5 mt-3 text-lg md:text-xl">
              <a href={project.git} target="_blank">
                <Button
                  label={<FaGithub />}
                  className="hover:scale-110 hover:shadow-lg hover:shadow-red-400 hover:rounded-lg p-1"
                />
              </a>
              <a href={project.live} target="_blank">
                <Button
                  label={<FaLaptop />}
                  className="hover:scale-110 hover:shadow-lg hover:shadow-red-400 hover:rounded-lg p-1"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WithRouter(DetailProject);

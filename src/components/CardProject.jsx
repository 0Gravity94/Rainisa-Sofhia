import React from "react";

import Button from "./Button";
import { FaGithub, FaLaptop } from "react-icons/fa";

function Works({ img, title, git, description, live, tech, onNavigate }) {
  return (
    <div
      id="card"
      className="grid w-full gap-5 p-2 overflow-hidden align-middle border-2 rounded-md place-content-center border-slate-800 hover:scale-110"
    >
      <img className="" src={img} alt={title} />
      <h3 className="text-lg font-bold text-center text-slate-800">{title}</h3>
      {/* <h3 className="text-lg font-bold text-slate-800">
        Description: <br />{" "}
        <span className="text-base font-normal text-slate-800">
          {description}
        </span>
      </h3>
      <h3 className="text-lg font-bold text-slate-800">
        Tech:
        <span className="ml-1 text-base font-normal text-slate-800">
          {tech}
        </span>
      </h3> */}
      <div className="flex justify-center gap-5 mt-3 text-lg md:text-xl">
        <a href={git} target="_blank">
          <Button
            label={<FaGithub />}
            className="p-1 hover:scale-110 hover:shadow-lg hover:shadow-red-400 hover:rounded-lg"
          />
        </a>
        <a href={live} target="_blank">
          <Button
            label={<FaLaptop />}
            className="p-1 hover:scale-110 hover:shadow-lg hover:shadow-red-400 hover:rounded-lg"
          />
        </a>
      </div>
      {/* <Button label={title} onClick={onNavigate} className="cursor-pointer" /> */}
    </div>
  );
}

export default Works;

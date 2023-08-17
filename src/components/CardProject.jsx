import React from "react";

import Button from "./Button";
import { FaGithub, FaLaptop } from "react-icons/fa";

function Works({ img, title, git, description, live, tech, onNavigate }) {
  return (
    <div
      id="card"
      className="grid w-full gap-5 p-2 overflow-hidden align-middle border-2 rounded-md place-content-center border-secondary hover:scale-110"
    >
      <img className="" src={img} alt={title} />
      <h3 className="text-lg font-bold text-center text-accent">{title}</h3>
      <div className="flex justify-center gap-5 mt-3 text-lg md:text-xl">
        <a href={git} target="_blank">
          <Button
            label={<FaGithub />}
            className="p-1 text-accent hover:scale-110 hover:shadow-lg hover:shadow-secondary hover:rounded-full"
          />
        </a>
        <a href={live} target="_blank">
          <Button
            label={<FaLaptop />}
            className="p-1 text-accent hover:scale-110 hover:shadow-lg hover:shadow-secondary hover:rounded-lg"
          />
        </a>
      </div>
    </div>
  );
}

export default Works;

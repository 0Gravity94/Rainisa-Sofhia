import React from "react";
import Typewriter from "typewriter-effect";

function Welcome() {
  return (
    <section id="welcome" className="flex justify-center min-h-screen">
      <div className="flex justify-center w-full px-2 py-5 md:w-2/3 md:py-10 md:px-10">
        <div className="flex items-center gap-x-5 gap-y-5">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col text-xl font-bold text-center md:gap-5 md:text-4xl lg:text-6xl text-accent">
              <span className="flex items-center justify-center">
                Hi there!{" "}
                <iframe
                  src="https://giphy.com/embed/w1OBpBd7kJqHrJnJ13"
                  width="40"
                  height="40"
                />
              </span>
              <span> I'm Rainisa Sofhia </span>
            </div>
            <div className="text-sm font-normal text-center md:text-xl lg:text-2xl text-accent">
              <Typewriter
                options={{
                  strings: [
                    "Junior Frontend Developer",
                    "Frontend Enthusiast",
                    "Video Games Lover",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;

import React from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import CardProjects from "../components/CardProject";
import Button from "../components/Button";

import Me from "../assets/Me.png";
import { datas } from "../data/project";
import "../styles/index.css";

function Home(props) {
  return (
    <Layout>
      <div id="snaps" className="w-screen h-screen overflow-auto ">
        {/* Welcome */}
        <div
          id="welcome"
          className="flex items-center justify-center min-h-screen transition-all ease-in-out"
        >
          <div className="grid w-full px-2 py-5 rounded-lg bg-primary place-content-center md:w-2/3 md:py-10 md:px-10">
            <div className="flex flex-col items-center justify-center md:flex-row gap-x-5 gap-y-5">
              <div className="flex flex-col gap-y-4 ">
                <h2
                  className="text-xl font-bold md:text-2xl lg:text-4xl text-slate-800 "
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                  data-aos-delay="50"
                >
                  Hi there! <br /> I'm Rainisa Sofhia
                </h2>
                <div
                  className="text-sm font-semibold md:text-xl lg:text-2xl text-slate-800"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                  data-aos-delay="1000"
                >
                  <Typewriter
                    options={{
                      strings: [
                        "Junior Frontend Developer",
                        "Tech Enthusiast",
                        "Video Games Lover",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                    }}
                  />
                </div>
              </div>
              <div
                className="flex flex-col items-center justify-center gap-y-4"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                data-aos-delay="50"
              >
                <img
                  src={Me}
                  alt="my-photo"
                  className="flex justify-center w-1/3 rounded-full"
                />
                <Button
                  className="flex flex-col items-center justify-center p-2 text-base bg-opacity-50 border-4 rounded-md cursor-pointer md:text-2xl bg-gray-50 border-slate-800 md:mx-5"
                  label={
                    <>
                      <a
                        className="flex justify-center gap-4 "
                        aria-label="Chat on whatsapp"
                        href="https://wa.me/+6285386664620"
                        target="_blank"
                      >
                        <span>Let's chat</span>
                        <HiOutlineChatBubbleLeftRight className="text-2xl md:text-4xl text-slate-800 animate-bounce" />
                      </a>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/* About */}
        <div
          id="about"
          className="flex items-center justify-center min-h-screen bg-secondary"
        >
          <div className="flex flex-col items-center justify-center w-full px-2 py-5 my-32 rounded-lg md:flex-row md:w-2/3 h-2/3 md:my-4 lg:my-0 md:py-10 md:px-5">
            <h1
              className="text-base italic font-thin text-justify md:text-lg lg:text-lg text-slate-800"
              // data-aos="zoom-in"
              // data-aos-duration="3000"
              // data-aos-easing="ease-in"
            >
              "I am a junior frontend developer enthusiast in developing user
              interfaces for web applications. Recently finished my study at
              Alterra Academy for Frontend Engineer program where I’d worked on
              some personal and group projects like database movie app,
              e-commerce app, and booking app. Skilled in HTML ,CSS, Javascript,
              ReactJS and TailwindCSS. I’d love to work with a company that
              values innovation, improvement, and respect among their
              employees."
            </h1>
          </div>
        </div>
        {/* Skills & Tech */}
        <div
          id="skillsTech"
          className="flex flex-col items-center justify-center min-h-screen transition-all ease-in-out"
        >
          <h1 className="text-4xl">Tech Skills</h1>
          <div
            className="flex flex-wrap w-full gap-2 px-2 py-5 mt-5 mb-5 rounded-lg justify-evenly bg-primary md:gap-4 place-content-center md:w-2/3 md:py-10 md:px-10 "
            // data-aos="fade-down"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-out"
            // data-aos-delay="50"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="60"
              height="60"
              // data-aos="flip-right"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-delay="1000"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="60"
              height="60"
              // data-aos="flip-right"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-delay="1100"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="60"
              height="60"
              // data-aos="flip-right"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-delay="1200"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="60"
              height="60"
              // data-aos="flip-right"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-delay="1300"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg"
              alt="tailwind"
              width="60"
              height="60"
              // data-aos="flip-right"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-delay="1400"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width="60"
              height="60"
              // data-aos="flip-right"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-delay="1400"
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
              alt="figma"
              width="60"
              height="60"
              // data-aos="flip-right"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-delay="1500"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
              alt="canva"
              width="60"
              height="60"
              // data-aos="flip-right"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-delay="1600"
            />
          </div>
          {/* <h1 className="text-4xl">Services</h1>
          <div className="grid w-full grid-cols-2 gap-2 px-2 py-5 mt-5 mb-5 align-middle rounded-lg bg-primary place-items-center md:grid-cols-4 md:gap-4 place-content-center md:w-2/3 md:py-10 md:px-10 ">
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
          </div> */}
        </div>
        {/* My Projects */}
        <div
          id="works"
          className="flex items-center justify-center min-h-screen transition-all ease-in-out bg-secondary"
        >
          <div
            className="grid w-full gap-2 px-2 py-5 my-20 overflow-hidden md:flex justify-evenly md:gap-4 md:py-10 md:px-10"
            // data-aos="flip-right"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-out"
            // data-aos-delay="50"
          >
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
    </Layout>
  );
}

export default WithRouter(Home);

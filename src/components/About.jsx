import React from "react";
import Me from "../assets/Me.png";
import SocialMedia from "./SocialMedia";

function About() {
  return (
    <section
      id="about"
      className="flex flex-wrap items-center justify-center min-h-screen py-28"
    >
      <div className="flex flex-col items-center mb-5 md:mb-0 profile-card gap-y-3">
        <div className="flex justify-center profile-image">
          <img src={Me} alt="Rainisa Sofhia" className="w-1/3 md:w-1/2" />
        </div>
        <div className="social-media">
          <SocialMedia />
        </div>
        <div className="my-resume">
          <a
            href="https://drive.google.com/file/d/1aPx7NWAbv8bGtlGkXylRLwTRff_NaOPR/view?usp=sharing"
            target="_blank"
            className="p-2 border-2 shadow-md rounded-2xl border-secondary shadow-secondary hover:border-none hover:shadow-none hover:bg-secondary text-accent"
          >
            My Resume
          </a>
        </div>
      </div>
      <div className="flex items-center w-72 md:w-1/2 bio">
        <h1 className="text-base italic font-thin text-justify md:text-lg lg:text-lg text-accent">
          " I am a junior frontend developer, enthusiast in developing user
          interfaces for web applications. Would love to work with a company
          that values innovation, improvement, and respect among their
          employees. "
        </h1>
      </div>
    </section>
  );
}

export default About;

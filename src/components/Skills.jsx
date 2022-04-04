import React from "react";
import JavaScrip from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import FireBase from "../assets/firebase.png";
import Git from "../assets/git.png";
import Tailwind from "../assets/tailwind.png";
import Php from "../assets/php.png";
import Mysql from "../assets/mysql.png";
import Next from "../assets/next.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-auto pb-24 md:pb-0 md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl py-3 border-b-4 inline border-[#ff1616]">
            Experience
          </p>
          <p className="font-mono py-7">
            // These are the Technologies I have worked with :
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          <div className="skill-item">
            <img src={Html} className="mx-auto" />
            <p className="my-4 text-center">HTML</p>
          </div>
          <div className="skill-item">
            <img src={Css} className="mx-auto" />
            <p className="my-4 text-center">CSS</p>
          </div>
          <div className="skill-item">
            <img src={Tailwind} className="mx-auto" />
            <p className="my-4 text-center">TAILWIND</p>
          </div>
          <div className="skill-item">
            <img src={JavaScrip} className="mx-auto" />
            <p className="my-4 text-center">JAVASCRIPT</p>
          </div>
          <div className="skill-item">
            <img src={ReactImg} className="mx-auto" />
            <p className="my-4 text-center">REACT</p>
          </div>
          <div className="skill-item">
            <img src={Next} className="mx-auto" />
            <p className="my-4 text-center">NEXT</p>
          </div>
          <div className="skill-item">
            <img src={FireBase} className="mx-auto" />
            <p className="my-4 text-center">FIREBASE</p>
          </div>
          <div className="skill-item">
            <img src={Php} className="mx-auto" />
            <p className="my-4 text-center">PHP</p>
          </div>
          <div className="skill-item">
            <img src={Mysql} className="mx-auto" />
            <p className="my-4 text-center">MYSQL</p>
          </div>
          <div className="skill-item">
            <img src={Git} className="mx-auto" />
            <p className="my-4 text-center">GIT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

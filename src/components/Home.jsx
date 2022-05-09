import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div id="home" className="home w-full h-screen bg-[#0a192f] pt-5">
      {/* container */}
      <div className="container top">
        <p className="text-[#ff1616] mt-7">Hi, My name is</p>
        <h1 className="text-3xl sm:text-7xl font-bold text-[#ccd6f6]">
          Mishaal Noureldien
        </h1>
        <h2 className="text-3xl sm:text-7xl font-bold text-[#8892b0] mb-2">
          I am a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] my-3">
          I am a full-stack developer specializing in building (and desiging)
          Exeptional Digital Experiences. Currently I am focused on building
          modern responsive full-stack Web Applications using React and NextJS.
        </p>
        <div>
          <a href="#work">
            <button className="group font-[Raleway] my-3 text-white border-2 px-6 py-2 flex items-center hover:bg-[#ff1616] hover:border-[#ff1616]">
              View Work &nbsp;
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

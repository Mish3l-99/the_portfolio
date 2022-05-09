import React from "react";
import sociaImg from "../assets/projects/socia.png";
import travelImg from "../assets/projects/travel.png";
import robotImg from "../assets/projects/robot.png";
import defiImg from "../assets/projects/defi.png";
import dataImg from "../assets/projects/data.png";
import brandImg from "../assets/projects/brand.png";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] py-32"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ff1616]">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${sociaImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mish3l-99.github.io/socia/" target="_blank">
                  <button className="work-item-hover-btn">Demo</button>
                </a>
                <a href="https://github.com/Mish3l-99/socia/" target="_blank">
                  <button className="work-item-hover-btn">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${travelImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 group-hover:duration-700">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mish3l-99.github.io/travel/" target="_blank">
                  <button className="work-item-hover-btn">Demo</button>
                </a>
                <a href="https://github.com/Mish3l-99/travel/" target="_blank">
                  <button className="work-item-hover-btn">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${robotImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                NEXT JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://robots-beta.vercel.app" target="_blank">
                  <button className="work-item-hover-btn">Demo</button>
                </a>
                <a href="https://github.com/Mish3l-99/robots" target="_blank">
                  <button className="work-item-hover-btn">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${defiImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mish3l-99.github.io/defi/" target="_blank">
                  <button className="work-item-hover-btn">Demo</button>
                </a>
                <a href="https://github.com/Mish3l-99/defi/" target="_blank">
                  <button className="work-item-hover-btn">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${dataImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mish3l-99.github.io/data/" target="_blank">
                  <button className="work-item-hover-btn">Demo</button>
                </a>
                <a href="https://github.com/Mish3l-99/data/" target="_blank">
                  <button className="work-item-hover-btn">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${brandImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mish3l-99.github.io/brand/" target="_blank">
                  <button className="work-item-hover-btn">Demo</button>
                </a>
                <a href="https://github.com/Mish3l-99/brand" target="_blank">
                  <button className="work-item-hover-btn">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

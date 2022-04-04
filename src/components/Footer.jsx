import React from "react";
import Flogo from "../assets/FMN.png";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full h-auto py-2 bg-[#050f1f] flex flex-col justify-center items-center"
    >
      <div className="px-4 mx-auto max-w-[1000px] w-full">
        <div className="flex justify-between">
          <div>
            <img
              src={Flogo}
              alt="logo"
              className="h-[40px] md:h-[36px] object-contain"
            />
          </div>
          <div className="text-green-600">
            <a href="https://wa.me/919884826404" className="hover:text-green-900 duration-500">
              <FaWhatsappSquare size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

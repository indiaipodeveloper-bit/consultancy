import React from "react";
import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import IndiaIPOLogo from "../assets/images/indiaipo.jpg";

const Footer = () => {
  return (
    <>
      <footer className="text-center relative flex-wrap justify-center gap-x-32 gap-y-5 items-center flex py-6 text-sm">
        <div className="justify-center xl:absolute  left-[15%]">
          <img src={IndiaIPOLogo} className="w-[100px] " alt="" />
        </div>
        <div className="text-center px-2.5 flex flex-col gap-2.5 text-sm font-semibold">
          <p className="font-bold text-2xl">Contact Us</p>
          <div className="flex justify-center flex-wrap px-10 items-center gap-4 gap-x-10">
            <p className="flex justify-center items-center gap-2.5">
              <FaPhoneAlt />
              <a href="tel:9650637280" className="hover:text-blue-600">
                9650637280
              </a>
            </p>
            {/* <p className="flex justify-center items-center gap-2.5">
              <FaGlobe />
              <a className="hover:text-blue-600" href="https://www.indiaipo.in">
                www.indiaipo.in
              </a>
            </p> */}
            <p className="flex justify-center items-center gap-2.5">
              <MdEmail />
              <a href="mailto:info@indiaipo.in" className="hover:text-blue-600">
                info@indiaipo.in
              </a>
            </p>
          </div>
          <div className="flex justify-center flex-wrap px-10 items-center gap-4 gap-x-5">
            <a href="" className="hover:text-blue-500">
              Disclaimer
            </a>
            <p className="">|</p>
            <a href="" className="hover:text-blue-500">
              Privacy{" "}
            </a>
            <p className="">|</p>

            <a href="" className="hover:text-blue-500">
              Terms & Conditions{" "}
            </a>
          </div>

          <div className="my-2 flex flex-col gap-1">
            <p className="">Copyright 2025 - All rights reserved</p>
          <p className="">
            India IPO - Empowering Indian Businesses to Go Public.
          </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

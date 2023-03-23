import React from "react";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { MdEmail,MdLocationOn } from "react-icons/md";
import {SiMinutemailer} from 'react-icons/si';
import {HiLink} from 'react-icons/hi';


import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 md:pb-3 pt-8 px-7 md:px-20 w-full">
      <div className="flex flex-col md:grid-cols-2 md:grid justify-between md:gap-[6em]">
        <div className="">
          {/* <h1 className="text-5xl text-slate-300 mb-1 self-start">PWH</h1> */}

          <img
            src={logo}
            alt="..."
            width="15%"
            className="ml-[-20px] shadow-md"
          />

          <p className="text-white">
            The Priority for Women's Health (PWH) is committed to advancing
            women's health in all stages of life and at all policy levels
            through health promotion, education, advocacy, and program
            implementation.
          </p>
          <div className="flex flex-row items-center my-3">
            <AiFillTwitterCircle
              className="text-lg"
              size={"1.9em"}
              color="white"
            />
            <AiFillInstagram
              className="text-lg ml-2 mr-3"
              size={"2em"}
              color="white"
            />
            <ImLinkedin className="text-lg " size={"1.5em"} color="white" />
          </div>
        </div>
        <div className="md:mt-5 mb-2">
          <div className="flex flex-row gap-3 mb-3">
            <MdEmail className="text-white text-xl"/>
            <a className=" text-white  mb-2" href="mailto:jessicabonay@priorityforwomenhealth.info">
            jessicabonay@priorityforwomenhealth.info
            </a>
          </div>
          <div className="flex flex-row gap-3 mb-3">
            <SiMinutemailer className="text-white text-xl"/>
            <p className=" text-white  mb-2">
            +(914)-575-2478
            </p>
          </div>
          <div className="flex flex-row gap-3 mb-3">
            <HiLink className="text-white text-xl"/>
            <p className=" text-white  mb-2">
              priorityforwomenhealth.info
            </p>
          </div>
          <div className="flex flex-row gap-3 mb-3">
            <MdLocationOn className="text-white text-xl"/>
            <p className=" text-white  mb-2">
              New York Office
              777 United Nations Plaza, 7th Floor
              New York, NY 10017
            </p>
          </div>
         
        </div>
      
      </div>
      {/* <p className="text-slate-400 text-center md:text-left">
        Copyright © FemiDEV
      </p> */}
    </footer>
  );
};

export default Footer;

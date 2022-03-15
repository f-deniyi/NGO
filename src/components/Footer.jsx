import React from "react";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 md:pb-5 pt-8 px-7 md:px-20 w-full">
      <div className="flex flex-col md:grid-cols-2 md:grid justify-between md:gap-[6em]">
        <div className="">
          {/* <h1 className="text-5xl text-slate-300 mb-1 self-start">PWH</h1> */}

          <img src={logo} alt="..." width="15%" className="ml-[-20px] shadow-md" />

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
        {/* <div className="mb-2">
          <p className="text-sm text-slate-400 mb-2">Blog</p>
          <p className="text-sm text-slate-400 mb-2">Lorem Ipsum</p>
          <p className="text-sm text-slate-400 mb-2">Lorem Ipsum</p>
          <p className="text-sm text-slate-400 mb-2">Lorem Ipsum</p>
          <p className="text-sm text-slate-400 mb-2">Lorem Ipsum</p>
        </div> */}
        <div className="mb-2">
          {/* <p className="text-sm text-slate-400 mb-2">News</p>
          <p className="text-sm text-slate-400 mb-2">Lorem Ipsum</p>
          <p className="text-sm text-slate-400 mb-2">Lorem Ipsum</p>
          <p className="text-sm text-slate-400 mb-2">Lorem Ipsum</p>
          <p className="text-sm text-slate-400 mb-2">Lorem Ipsum</p>
           */}
           {' '}
        </div>
      </div>
      <p className="text-slate-400 text-center md:text-left">
        Copyright © FemiDEV
      </p>
    </footer>
  );
};

export default Footer;

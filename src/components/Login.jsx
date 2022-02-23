import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
// import bgImage from '../assets/PAF.JPG'

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="block md:flex">
      <div
        className="h-screen h-full relative backdrop-opacity-50 backdrop-invert shadow-md bg-white/30 hidden md:block border-grey border-r-2 auth-bg_image"
        style={{
          width: "750px",
        }}
      >
        <div className=" flex  text-center justify-center items-center  h-screen">
          <div>
          <h1 className="text-5xl font-bold text-slate-100 opacity-2 drop-shadow-lg ">PAF</h1>
            <p className="text-slate-100 drop-shadow-lg">connect with your loved ones</p>
          </div>
        </div>
      </div>
      <div className=" h-screen w-full bg-slate-100  ">
        <div className="mx-auto flex justify-center h-screen items-center w-4/5 md:w-3/5 flex-col">
          <div className="mb-5 block md:hidden">
            <h1 className="text-5xl font-bold !text-center">PAF</h1>
            <p>connect with your loved ones</p>
          </div>
          <form className="w-full md:w-4/5   bg-white rounded-md flex flex-col py-3 pb-8 items-center shadow-md">
            <h1 className="text-3xl font-bold pt-8 pb-5">Welcome Back</h1>
            <input
              className="text-sm outline-none p-3 mb-4 text-sm rounded-md mx-auto w-4/5 bg-slate-100"
              placeholder="Email"
              type="text"
            />
            <input
              className="text-sm  outline-none p-3 mb-4 text-sm rounded-md mx-auto w-4/5 bg-slate-100"
              placeholder="Password"
              type="password"
            />
            <button className="p-3 mb-4 rounded-md mx-auto w-4/5 bg-[#CC5500] text-white"
              onClick={() => navigate("/app/overview")}
            >
              Signin
            </button>
            <p className="py-1 text-slate-600">or</p>
            <h2 className="mb-3 social-login">Sigin in with</h2>
            <div className="flex flex-row">
              <FaFacebook className="text-blue-700 " fontSize={"30px"} />
              <FcGoogle fontSize={"30px"} className="text-blue-700 mx-5" />
              <AiFillTwitterCircle className="text-sky-600" fontSize={"33px"} />
            </div>
          </form>
          <p className=" py-4 px-10 text-center shadow-sm w-full md:w-4/5 bg-white rounded-md mt-5">
            New user?
            <span
              className="text-[#CC5500] font-bold cursor-pointer"
              onClick={() => navigate("/auth/register")}
            >
              {" "}
              Signup
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from 'react'
import { NavLink } from "react-router-dom";
import { MdVolunteerActivism } from 'react-icons/md';
import h1 from '../../assets/1st.JPG'
import h2 from '../../assets/2nd.JPG'
import h3 from "../../assets/3rd.JPG";
import about from '../../assets/about.JPG';
import icon1 from "../../assets/icon-1.png"
import icon3 from "../../assets/icon-3.png"
import g11 from '../../assets/g11.jpg';
import g2 from '../../assets/2.JPG';
import g3 from '../../assets/3.JPG';
import g4 from '../../assets/4.JPG';
import g5 from '../../assets/5.JPG';
import g6 from '../../assets/6.JPG';
import g7 from '../../assets/7.JPG';
// import g8 from '../../assets/8.JPG';
import g9 from '../../assets/9.JPG';
import g10 from '../../assets/10.JPG';




const Home = () => {
  return (
    <>
      <div className='carousel_container relative'>
        <div id="carouselExampleCaptions" className="carousel carousel-fade relative w-screen" data-bs-ride="carousel" data-bs-interval='15000'>

          <div className="carousel-inner relative w-screen overflow-hidden">
            <div className="carousel-item  relative float-left overflow-hidden w-full  active ">
              <img
                src={h2}
                className=" fit-content object-fit carousel-img md:h-[28.5em]  w-full"
                alt="..."
              />
              <div className="carousel-caption  absolute text-center   h-full w-full left-[0] bottom-[0]">
                <div className='flex justify-center items-center flex-col h-full'>
                  <h5 className="carousel-caption-text text-3xl md:text-6xl">The Priority For Women Health</h5>
                  <p className='md:text-xl carousel-caption-text sm:ml-[90%] w-[70%] md:w-[100%] mx-auto'>Advancement of women's health throughout the world</p>
                  <NavLink
                    to={`/about`}
                    className='px-5 py-3 cta--btn bg-[#fbb771] rounded-md mt-3 bg-[#fbb771]'

                  >
                    Learn More
                  </NavLink>

                </div>


              </div>
            </div>
            <div className="carousel-item  relative float-left overflow-hidden overflow-hidden w-screen ">
              <img
                src={h1}
                className=" fit-content object-fit carousel-img md:h-[28.5em]  w-full"
                alt="..."
              />
              <div className="carousel-caption  absolute text-center   h-full w-full left-[0] bottom-[0]">
                <div className='flex justify-center items-center flex-col h-full'>
                  <h5 className="carousel-caption-text text-3xl md:text-6xl">The Priority For Women Health</h5>
                  <p className='md:text-xl carousel-caption-text sm:ml-[90%] w-[70%] md:w-[100%] mx-auto'>Implements women's health research and service improvement.</p>
                  <NavLink
                    to={`/about`}
                    className='px-5 py-3 cta--btn bg-[#fbb771] rounded-md mt-3 bg-[#fbb771]'

                  >
                    Learn More
                  </NavLink>
                </div>


              </div>

            </div>
            <div className="carousel-item  relative float-left overflow-hidden overflow-hidden w-screen ">
              <img
                src={h3}
                className=" fit-content object-fit carousel-img md:h-[28.5em]  w-full"
                alt="..."
              />
              <div className="carousel-caption  absolute text-center   h-full w-full left-[0] bottom-[0]">
                <div className='flex justify-center items-center flex-col h-full'>
                  <h5 className="carousel-caption-text text-3xl md:text-6xl">The Priority For Women Health</h5>
                  <p className='md:text-xl carousel-caption-text sm:ml-[90%] w-[70%] md:w-[100%] mx-auto'>Implements women's health research and service improvement.</p>
                  <NavLink
                    to={`/about`}
                    className='px-5 py-3 cta--btn bg-[#fbb771] rounded-md mt-3 bg-[#fbb771]'

                  >
                    Learn More
                  </NavLink>
                </div>


              </div>

            </div>

          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
        <div className='my-[30px] md:absolute flex-1 rounded-md w-[85%] md:w-4/5 mx-auto md:bottom-[-40%] md:left-[10%] shadow-md  z-50 p-5 md:flex flex-row justify-between  flex-1 '
          style={{ background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: 'blur(30px)' }}
        >
          <div className='border-black-300 text-center p-3 br-2 relative flex-1'>
            <div className='text-center mx-auto w-[20%]'>
              <img src={icon3} alt='...' />
            </div>

            <h1 className='font-bold text-xl mt-2'>What we do</h1>
            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
            <p>Bringing women's health to the forefront of global policy agendas.</p>
          </div>

          <div className='p-3 border-black-300 text-center p-3 br-2 relative flex-1'>
            <div className='text-center mx-auto w-[10%]'>
              <MdVolunteerActivism color='#fbb771' fontSize={'60px'} />
            </div>
            <h1 className='font-bold text-xl mt-2'>Become A Volunter</h1>
            <p> PWH continuously seek the expertise of volunteers to actualize her vision.</p>
            <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />

          </div>

          <div className='border-black-300 text-center p-3 br-2 border-black-300 p-3 br-2 relative flex-1'>
            <div className='text-center mx-auto w-[20%]'>
              <img src={icon1} alt='...' />

            </div>
            <h1 className='font-bold text-xl mt-2'>Support</h1>
            <p>PWH's journey will not be posible without partnerships and coalitions.</p>
          </div>
        </div>

      </div>


      <section class="text-gray-800 pt-[2.5em] md:pt-[12.5em] bg-white overflow-hidden pb-4">
        <h3 className='text-3xl text-center font-bold section-title'>About Us</h3>
        <div class="flex flex-wrap px-6 py-6 md:px-12  lg:text-left pb-8">
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
            <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src={h3} class="w-full" alt="Louvre" />

            </div>
          </div>

          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 tracking-speed-lg ">
            <h3 class="text-2xl font-bold mb-2">Who We Are</h3>
            <p class="text-gray-700 mb-2 tracking-wide">The
              <span className='font-semibold'> PRIORITY FOR WOMEN HEALTH (PWH)</span> was founded in 2020 The consistent under-attention given to women's health and the inadequate information available on women's health worldwide prompt the need for a foundation that will help Women in their own little capacity. PWH was founded in an effort to address these shortcomings and to bring issues of women's health to the forefront of global policy. Through advocacy, education, and promotion, PWH will be making significant strides in the public and private arenas toward the advancement of women's health throughout the world.
            </p>
            <p class="text-gray-700 tracking-wide">
              PWH will emphasized on the importance of addressing issues of women's health throughout the life span. Although efforts to advance women's health were being made by NGOs, they tended to focus exclusively upon maternal and reproductive health. While PWH applauded these early steps, we noted that maternal and reproductive health represent particular stages of women's health needs, and, in order to truly empower women worldwide, women's health must be  . . .
              <span>
                <NavLink to='/about' className='text-[#fbb771]'> {'Read more >>'} </NavLink>
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="">
        {/* Projects */}

        <section className=" text-gray-800  bg-[#f2f2f2] overflow-hidden py-8 pb-10" >
          <h3 className='text-3xl text-center font-bold pb-5'>Projects</h3>
          <div className="px-6  md:px-12 text-left">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 flex ">
                <div className="lg:mt-0">
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-4"
                  >
                    Women Health's Education Program For Students
                  </h3>
                  <p className='tracking-wide'>
                    With the help of our partners from the public and private sectors, PWH has held well over 100 symposia on women's health concerns in most regions of the world. In addition, we have initiated campaigns and petitions, created donation programs and international women's health networks, as well as published and distributed numerous informative materials on women's health. Our efforts have contributed to the dissemination of valuable information and have effectively turned the spotlight on global women's health concerns. Moreover, our efforts have facilitated public-private collaborations that have led to advancements in women's healthcare policies worldwide.
                  </p>
                  <div className='mt-3'>
                  <NavLink to='/projects' className='py-2 px-3 mt-3 rounded-md bg-[#fbb771]'>
                    {'Check more >>'}
                  </NavLink>
                  </div>
                
                </div>
                <div className="mb-12 lg:mb-0">
                  <div className="pt-[56.25%] embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                  >
                    <img src={about} className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full" alt='...' />

                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section class="mb-2 text-gray-800 bg-white px-7 md:px-10 py-5">
          <h2 class="text-3xl font-bold mb-4 text-center">
            Gallery
          </h2>

          <div class="grid lg:grid-cols-3 gap-6">
            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img alt='...' src={g9}
                class="w-full h-[200px] transition duration-300 ease-linear align-middle" />

            </div>

            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img alt='...' src={g11}
                class="w-full h-[200px] transition duration-300 ease-linear align-middle" />

            </div>

            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img alt='...' src={g4}
                class="w-full h-[200px] transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                  <div class="flex justify-start items-end h-full">
                  </div>
                </div>
                <div class="hover-overlay">
                  <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>

            {/* <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{backgroundPosition: "50%"}} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img alt='...' src={g4}
                class="w-full h-[200px] transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                  <div class="flex justify-start items-end h-full">
                  </div>
                </div>
                <div class="hover-overlay">
                  <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                </div>
              </a>
            </div> */}

            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img alt='...' src={g5}
                class="w-full h-[200px] transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                  <div class="flex justify-start items-end h-full">
                  </div>
                </div>
                <div class="hover-overlay">
                  <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>

            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img alt='...' src={g6}
                class="w-full h-[200px] transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                  <div class="flex justify-start items-end h-full">
                  </div>
                </div>
                <div class="hover-overlay">
                  <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>

            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img alt='...' src={g7}
                class="w-full h-[200px] transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                  <div class="flex justify-start items-end h-full">
                  </div>
                </div>
                <div class="hover-overlay">
                  <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>
            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img alt='...' src={g3}
                class="w-full h-[200px] transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                  <div class="flex justify-start items-end h-full">
                  </div>
                </div>
                <div class="hover-overlay">
                  <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>
            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img alt='...' src={g2}
                class="w-full h-[200px] transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                  <div class="flex justify-start items-end h-full">
                  </div>
                </div>
                <div class="hover-overlay">
                  <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>
            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img alt='...' src={g10}
                class="w-full h-[200px] transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                  <div class="flex justify-start items-end h-full">
                  </div>
                </div>
                <div class="hover-overlay">
                  <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className=" py-4 text-gray-800 text-center overflow-scroll">
          <h2 className="text-3xl font-bold  mb-5  text-[#232b2b]">Our Current Sponsors</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 px-6">

            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="tracking-wide text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                GlaxoSmithKline
              </p>

            </div>

            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="tracking-wide text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                Exxon Mobil Foundation
              </p>

            </div>
            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="tracking-wide text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                Catholic Medical Mission Board
              </p>
            </div>

            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="tracking-wide text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                Clinical Nurse Specialist Group
              </p>

            </div>


            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="tracking-wide text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                F. Hoffmann-LaRoche, Ltd
              </p>

            </div>
            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="tracking-wide text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                Edna McConnel Clark Foundation
              </p>

            </div>


            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="tracking-wide text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                GE Capital Life Insurance/ Grace K. Ijima
              </p>

            </div>

            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="tracking-wide text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                John B. Dey Elementary School
              </p>

            </div>




            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="tracking-wide text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                Grace R. and Alan D. Marcus Foundation
              </p>

            </div>

            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="tracking-wide text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                Elizabeth Glaser Pediatric AIDS Foundation
              </p>

            </div>

          </div>
        </section>
      </div>


    </>


  )
}

export default Home;

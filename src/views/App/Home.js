import React from 'react'
import { NavLink } from "react-router-dom";
import { MdVolunteerActivism } from 'react-icons/md';
import h1 from '../../assets/1st.JPG'
import h2 from '../../assets/2nd.JPG'
import h3 from "../../assets/3rd.JPG";
import p from "../../assets/project2.jpeg";

import icon1 from "../../assets/icon-1.png"
// import icon2 from "../../assets/icon-2.png"
import icon3 from "../../assets/icon-3.png"



const Home = () => {

  return (
    <>
      <div className='carousel_container relative'>
        <div id="carouselExampleCaptions" className="carousel carousel-fade relative w-screen" data-bs-ride="carousel" data-bs-interval='15000'>

          <div className="carousel-inner relative w-screen overflow-hidden">
            <div className="carousel-item  relative float-left overflow-hidden w-full  active ">
              <img
                src={h2}
                className=" fit-content object-fit carousel-img md:h-100 w-full"
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
                className=" fit-content object-fit carousel-img md:h-100 w-full"
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
                className=" fit-content object-fit carousel-img md:h-100 w-full"
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
        <div className='my-[30px] md:absolute flex-1 rounded-md w-[85%] md:w-4/5 mx-auto md:bottom-[-47%] md:left-[10%] shadow-md  z-50 p-5 md:flex flex-row justify-between  flex-1 '
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
      <div className="">
        {/* Projects */}

        <section className=" text-gray-800 pt-[2.5em] md:pt-[13em] bg-white overflow-hidden" >
          <h3 className='text-3xl text-center font-bold section-title'>Project</h3>
          <div className="px-6 py-7 md:py-12 md:px-12 text-center lg:text-left">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 flex ">
                <div className="lg:mt-0">
                  <h3 className="text-4xl font-bold tracking-tight mb-4"
                  >
                    Women Health's Education Program For Students
                  </h3>
                  <p className='tracking-wide'>
                    With the help of our partners from the public and private sectors, PWH has held well over 100 symposia on women's health concerns in most regions of the world. In addition, we have initiated campaigns and petitions, created donation programs and international women's health networks, as well as published and distributed numerous informative materials on women's health. Our efforts have contributed to the dissemination of valuable information and have effectively turned the spotlight on global women's health concerns. Moreover, our efforts have facilitated public-private collaborations that have led to advancements in women's healthcare policies worldwide.
                  </p>
                  {/* <p className="text-md"  >
                    The successful empowerment of women and their families requires healthy women in all stages of life!

                    The Priority for Women's Health (PWH) works passionately to promote women's health throughout the lifespan and strives to incorporate all stages of women's health needs into global policy agendas. Since 1994, we have called attention to a diverse range of pressing women's health issues, especially those that have been ignored or under-attended by other NGOs and UN agencies.
                  </p> */}
                  {/* <p className='font-bold mt-2'>We have addressed:</p>
                  <ul className='mb-2'>
                    <li>Diabetes and its impact on women</li>
                    <li>Cervical cancer and HPV vaccines</li>
                    <li>HIV/AIDS and access to treatment for women</li>
                    <li>Coronary heart disease</li>
                    <li>Depression</li>
                    <li>Osteoporosis and osteoarthritis</li>
                    <li>Smoking and women's health</li>
                    <li>Osteoporosis and osteoarthritis</li>
                    <li>Trachoma</li>
                  </ul>
                  <p>
                  With the help of our partners from the public and private sectors, PWH has held well over 100 symposia on women's health concerns in most regions of the world. In addition, we have initiated campaigns and petitions, created donation programs and international women's health networks, as well as published and distributed numerous informative materials on women's health. Our efforts have contributed to the dissemination of valuable information and have effectively turned the spotlight on global women's health concerns. Moreover, our efforts have facilitated public-private collaborations that have led to advancements in women's healthcare policies worldwide.
                  </p> */}
                </div>
                <div className="mb-12 lg:mb-0">
                  <div className="pt-[56.25%] embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                  >
                    <img src={p} className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full" alt='...' />
                    {/* <iframe title='...' className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                      allowfullscreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="mb-32 text-gray-800 text-center lg:text-left pt-[11.5em]">
    <div className="px-6 py-12 md:px-12">
      <div className="grid lg:grid-cols-2 lg:gap-x-1 items-center">
        <div className="mb-12 lg:mb-0">
          <h2 className="my-12 text-5xl font-bold tracking-tight leading-tight">
            Are you ready <br />
            <span className="text-green-600">for an adventure?</span>
          </h2>
          <a className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out mb-2 md:mr-2"
            href="#!" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Get started</a>
          <a className="inline-block px-7 py-3 bg-transparent text-green-600 font-medium text-sm leading-snug uppercase rounded hover:text-green-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out mb-2"
            data-mdb-ripple="true" data-mdb-ripple-color="success" href="#!" role="button">Learn more</a>
        </div>

        <div className="mb-12 lg:mb-0">
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/051.jpg" className="w-full rounded-lg sshadow-lg"
            alt="" />
        </div>
      </div>
    </div>
  </section> */}

        {/* Upcoming Events */}
        <section className=" text-gray-800 py-7 bg-[#f2f2f2] container px-10 mx-auto">


          <h2 className="text-3xl font-bold mb-5 text-center">
            Upcoming Events
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: '50%' }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg" alt='...'
                className="w-full transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundCcolor: 'rgba(0, 0, 0, 0.3)' }}>
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">Launching a campaign to expedite treatment for women with Cervical Cancer in Third World Countries</h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>

            <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: '50%' }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img src="https://mdbootstrap.com/img/new/standard/city/044.jpg" alt='...'
                className="w-full transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundCcolor: 'rgba(0, 0, 0, 0.3)' }}>
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">Genius Loci</h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>

            <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: '50%' }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img src="https://mdbootstrap.com/img/new/standard/city/045.jpg" alt='...'
                className="w-full transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundCcolor: 'rgba(0, 0, 0, 0.3)' }}>
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">Big Apple</h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>

            <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: '50%' }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" alt='...'
                className="w-full transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundCcolor: 'rgba(0, 0, 0, 0.3)' }}>
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">Sun City</h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>

            <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: '50%' }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img src="https://mdbootstrap.com/img/new/standard/city/048.jpg" alt='...'
                className="w-full transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundCcolor: 'rgba(0, 0, 0, 0.3)' }}>
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">Paris flavor</h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>

            <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: '50%' }} data-mdb-ripple="true" data-mdb-ripple-color="dark">
              <img src="https://mdbootstrap.com/img/new/standard/city/049.jpg" alt='...'
                className="w-full transition duration-300 ease-linear align-middle" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundCcolor: 'rgba(0, 0, 0, 0.3)' }}>
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-lg font-bold text-white m-6">Sky is the limit</h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                </div>
              </a>
            </div>
          </div>

        </section>

        <section className="bg-white py-8 text-gray-800 text-center overflow-scroll">
          <h2 className="text-3xl font-bold  mb-5">Meet our Sponsors</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 px-6">

            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="fm-vol text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                GlaxoSmithKline
              </p>

            </div>

            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="fm-vol text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                Exxon Mobil Foundation
              </p>

            </div>
            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="fm-vol text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                Catholic Medical Mission Board
              </p>
            </div>

            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="fm-vol text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                Clinical Nurse Specialist Group
              </p>

            </div>

            




            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="fm-vol text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                F. Hoffmann-LaRoche, Ltd
              </p>

            </div>
            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="fm-vol text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                Edna McConnel Clark Foundation
              </p>

            </div>


            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="fm-vol text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                GE Capital Life Insurance/ Grace K. Ijima
              </p>

            </div>

            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="fm-vol text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                John B. Dey Elementary School
              </p>

            </div>


           

            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="fm-vol text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
                Grace R. and Alan D. Marcus Foundation
              </p>

            </div>
            
            <div className="mb-6 lg:mb-6  mx-auto">
              <p className="fm-vol text-[16.5px] text-gray-400 img-fluid grayscale font-bold">
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

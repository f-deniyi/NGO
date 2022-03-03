import React, { useState } from 'react'
import AppLayout from '../../components/AppLayout';
import { sidebarMenu } from '../../utils/data';
// import { Link } from "react-router-dom";
import hero1 from '../../assets/right3rd.jpeg'
import hero2 from '../../assets/phone.png'
import hero3 from '../../assets/hero2nd.jpeg'
import right1 from '../../assets/right1.jpeg'
// import right2 from '../../assets/right2.jpeg'

import shoes from "../../assets/shoes.jpeg";
import TopProducts from '../../components/TopProducts';
import HomeAndFurniture from '../../components/Home&Furniture';
import TopDeals from '../../components/TopDeals';
import Clothes from '../../components/Clothes';
// import Footer from '../../components/Footer';








const Home = () => {

  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)

  // const isNotActiveStyle =
  //   " flex items-center px-2 md:px-5 gap-1 md:gap-3 my-1 py-1 md:py-2 text-gray-500  transition-all duration-200 ease-in-out capitalize";
  // const isActiveStyle =
  //   "flex items-center px-2 md:px-5 gap-1 md:gap-3 my-1 py-1 md:py-2  text-[#f8f8f8] font-extrabold  border-right-3  mr-2 transition-all duration-200 ease-in-out capitalize";
  return (
    <AppLayout>
      <div className='mx-auto px-0 md:px-3 lg:px-5 py-3'>
        <div className='flex flex-row gap-3 md:grid md:grid-cols-12 md:gap-5 '>
          <div className='col-start-1 col-end-3 md:col-end-4 bg-white rounded-md p-3 px-1'>
            <div className="flex flex-col">
              {sidebarMenu.map(({ name, icon, link }) => (
                <a
                  key={name}
                  href={`${link}`}
                  className='nav-link-item flex items-center px-2 md:px-5 gap-1 md:gap-3 my-1 py-1 md:py-2 text-gray-500  transition-all duration-200 ease-in-out capitalize'
                // className={({ isActive }) =>
                //   isActive ? isActiveStyle : isNotActiveStyle
                // }
                // onClick={handleCloseSidebar}
                >
                  {icon}
                  {name}
                </a>
              ))}
            </div>
          </div>
          <div className='md:col-start-4 md:col-end-10 col-start-3 col-start-13  rounded-md w-100   hero-section backdrop-opacity-60 backdrop-invert bg-white/30 '>
            <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
              <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item rounded-md relative float-left overflow-hidden w-full  active ">
                  <img
                    src={hero2}
                    className="rounded-md fit-content object-fit carousel-img md:h-100 w-full"
                    alt="..."
                  />
                  <div className="carousel-caption  absolute text-center ">
                    <h5 className="text-xl">First slide label</h5>
                    <p className='text-sm'>Some representative placeholder content for the first slide.</p>
                  </div>
                  <div className='px-2 bg-slate-200 drop-shadow text-black absolute left-0 bottom-0'>
                    <h2 >Shop Now</h2>
                  </div>
                </div>
                <div className="carousel-item rounded-md relative float-left overflow-hidden overflow-hidden w-full ">
                  <img
                    src={right1}
                    className="rounded-md fit-content object-fit carousel-img md:h-100 w-full"
                    alt="..."
                  />
                  <div className="carousel-caption  absolute text-center">
                    <h5 className="text-xl">Second slide label</h5>
                    <p className='text-sm'>Some representative placeholder content for the second slide.</p>
                  </div>
                  <div className='px-2 bg-black text-white absolute left-0 bottom-0'>
                    <h2 >Shop Now</h2>
                  </div>
                </div>
                <div className="carousel-item rounded-md relative float-left overflow-x-hidden ">
                  <img
                    src={shoes}
                    className="rounded-md fit-content object-fit carousel-img md:h-100 opacity-90"
                    alt="..."
                  />
                  <div className="carousel-caption  absolute text-center">
                    <h5 className="text-xl ">Third slide label</h5>
                    <p className='text-sm'>Some representative placeholder content for the third slide.</p>
                  </div>
                  <div className='px-2 bg-black drop-shadow text-white absolute left-0 bottom-0'>
                    <h2 >Shop Now</h2>
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
          </div>
          <div className='hidden md:block col-start-10 col-end-13  h-100 '>
            <div className='flex flex-col gap-3'
            >
              <div className='bg-white rounded-3 relative ' onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}>
                <img
                  src={hero1}
                  className=" w-full h-50 rounded-md"

                  alt="..."
                />
                {
                  hovered1 && <div className='absolute bottom-0 right-0 p-3  bg-slate-700  w-full rounded-md' >
                    <p className='text-orange-600 font-bold text-2xl'>First Timer</p>
                    <p className='text-orange-600 font-bold'><span className='text-3xl text-red-700'>-25%</span> Discount</p>
                  </div>
                }

              </div>
              <div className='bg-white rounded-3 relative  '
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
              >
                <img
                  src={hero3}
                  className=" w-full h-50 rounded-md"

                  alt="..."
                />
                {
                  hovered2 &&
                  <div className='absolute bottom-0 left-0 p-3  bg-slate-700  w-full' >
                    <p className='text-orange-600 font-bold text-2xl'>Family Week</p>
                    <p className='text-orange-600 font-bold'><span className='text-3xl text-red-700'>-63%</span> Discount</p>
                  </div>
                }
              </div>
            </div>

          </div>
        </div>
        <div className='my-3'>
          <TopProducts />
        </div>
        <div className='my-3'>
          <TopDeals />
        </div>

        <HomeAndFurniture />

        <Clothes />

      </div>
    </AppLayout>

  )
}

export default Home;

import React from 'react'
import { HomeNavbar } from '../components'
import connect from '../assets/connect.JPG'
import hero from '../assets/bg.png'
import great from '../assets/great.JPG'
import bns from '../assets/shopping.mp4'



import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
 

    return (
        <div className='hide-scrollbar'>
            <HomeNavbar />
            <div className='px-5 md:px-20 pt-20 mb-8 md:mb-2 '>
                <div className='flex flex-col md:flex-row justify-center items-center h-screen md:mt-2 mt-5 h-85vh md:overflow-y-hidden gap-2'>
                    <div className='w-full md:w-2/5'>
                        <h1 className='text-3xl text-center md:text-left md:text-5xl font-extrabold mb-2'

                        >
                            PAF SOCIAL SITE
                        </h1>
                        <p className='mb-3 tracking-wide text-stone-700'
                            style={{
                                lineHeight: '2em'
                            }}

                        >Social hen an unknown printer took a galley of type and scrambled make type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentialunchanged they popularised with release.Social hen.</p>
                        <button
                            className="py-3 mb-0 btn-lg rounded-md mx-auto mb-3 px-9 bg-[#967969] text-white"
                            onClick={() => navigate("/auth/register")}
                        >
                            Get Started
                        </button>
                    </div>
                    <div className='h-full w-full md:w-3/5'>
                        <img src={hero} alt='bg' className='h-full w-full' />
                    </div>
                </div>

            </div>

            <div className=' mt-4 bg-[#f8f8f8] px-5 py-10 md:px-20 z-20 '>
                {/* <p className='text-sm text-center '>What we do</p> */}
                <div className='flex flex-col md:flex-row gap-7 mb-10 '>
                    <div className='w-full md:w-1/2'>
                        <h1 className='text-3xl font-bold mb-2 text-[#967969] '>Meet Great People Online</h1>
                        <p className='tracking-wide'>
                            Social hen an unknown printer took a galley of type and scrambled make type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentialunchanged they popularised with release.Social hen an unknown printer took a galley of type and scrambled make type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentialunchanged they popularised with release.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 bg-white p-5 rounded-md shadow-md'>
                        <img src={connect} alt='connect-img' className=' rounded-md' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-7 mb-10 '>
                    <div className='w-full md:w-1/2 bg-white p-5 rounded-md text-[#967969] shadow-md '>
                        <img src={great} alt='connect-img' className=' rounded-md ' />
                    </div>
                    <div className='w-full md:w-1/2 order-first md:order-last'>
                        <h1 className='text-3xl font-bold mb-2 text-[#967969] '>Find People Near You</h1>
                        <p className='tracking-wide'>
                            Social hen an unknown printer took a galley of type and scrambled make type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentialunchanged they popularised with release.Social hen an unknown printer took a galley of type and scrambled make type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentialunchanged they popularised with release.
                        </p>
                    </div>

                </div>
                <div className='flex flex-col md:flex-row gap-7 mb-10 '>
                    <div className='w-full md:w-1/2'>
                        <h1 className='text-3xl font-bold mb-2 text-[#967969] '>Buy and Sell with ease</h1>
                        <p className='tracking-wide'>
                            Social hen an unknown printer took a galley of type and scrambled make type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentialunchanged they popularised with release.Social hen an unknown printer took a galley of type and scrambled make type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentialunchanged they popularised with release.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 bg-white p-5 rounded-md '>
                        <video
                            src={bns}
                            type="video/mp4"
                            loop
                            controls={false}
                            muted
                            autoPlay
                            className="bg-[#f8f8f8] p-1 rounded-md"
                        />
                    </div>
                </div>
            </div>

            <footer className='bg-slate-900 pb-5 pt-8 px-10 md:px-20'>
                <div className='flex flex-col md:flex-row justify-between md:items-center'>
                    <div>
                        <h1 className='text-5xl text-slate-500 mb-2 self-start'>PAF</h1>
                    </div>
                    <div className='mb-2'>
                        <p className='text-sm text-slate-400 mb-2'>Blog</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>

                    </div>
                    <div className='mb-2'>
                        <p className='text-sm text-slate-400 mb-2'>News</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                    </div>
                    <div className='mb-2'>
                        <p className='text-sm text-slate-400 mb-2'>Twitter</p>
                        <p className='text-sm text-slate-400 mb-2'>Facebook</p>
                        <p className='text-sm text-slate-400 mb-2'>Instagram</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                        <p className='text-sm text-slate-400 mb-2'>Lorem Ipsum</p>
                    </div>
                </div>
                <p className='text-slate-400 text-center md:text-left'>Copyright © FemiDEV</p>
            </footer>

        </div>


    )
}

export default Home
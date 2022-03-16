import React, { useEffect } from 'react'
import p7 from "../../assets/P7.jpeg";
// import p3 from "../../assets/3.JPG";
import p2 from '../../assets/2nd.JPG';
import g11 from '../../assets/g11.jpg';
import p4 from '../../assets/p4.jpeg';




const Projects = () => {



    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTop()
        }
    }, [])
    return (

        <div className="text-gray-800 bg-white">
            <div className='about--hero h-[230px] md:h-[270px] relative'>
                <div className='absolute bottom-[25%] left-[35%] md:bottom-[35%] md:left-[5%] mt-5'>
                    <h3 className=' text-4xl text-white mx-auto text-[#f2f2f2]  text-center'>Projects</h3>
                    <h5 className='text-[#f2f2f2] pl-[16px] md:pl-[0px]'>Home / <span className='text-[#fbb771]'>Projects</span></h5>
                </div>
            </div>
            <div className='px-5 md:px-10 bg-white py-3 md:py-5 pb-4 md:pb-7'>
                <p className="my-0 md:my-3 tracking-wide">Collaborations across academic, governmental, nonprofit and philanthropic communities are key to improving women’s health around the world. The Priority for Women's health (PWH) partners with relevant stakeholders both within and outside of The United State whose focus and activities center on women and health. The PWH has a number of projects at various stages designed to improve women’s health through research, knowledge dissemination and training.

                </p>


            </div>
            <section className='bg-white px-5 md:px-10 pb-7'>
                <div className="flex flex-wrap mb-7">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover ripple  zoom hadow-lg rounded-lg"
                            style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={p2} className="w-full  h-[300px] " alt="Louvre" />

                        </div>
                    </div>

                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
                        <h3 className="text-2xl font-bold mb-4">Publishing and distribution of Magazines themed "WELLNESS WOMEN"</h3>

                        <p className="tracking-wide">
                            It will be an international, peer-reviewed, open access Magazine of women's medicine and healthcare published yearly. The publication focuses on medicine and physical, mental, and emotional health of women in developed and developing nations. It will also address issues like fitness and exercise, Food and diet tips, Green living, Body and Mind healing and management of lifestyle disease.
                        </p>
                    </div>
                </div>


                <div className="flex flex-wrap lg:flex-row-reverse ">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover ripple zoom shadow-lg rounded-lg "
                            style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={p4} className="w-full h-[300px] " alt="Louvre" />

                        </div>
                    </div>

                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
                        <h3 className="text-2xl font-bold mb-3">Addressing Racial/Ethnic Inequities in Maternal Health</h3>
                        <p className="tracking-wide font-bold">
                            The aims of this Project are to:
                        </p>
                        <ul className='mb-2'>
                            <li className='mb-2'>Identify gaps in social support services among community-based organizations (CBOs) for women of color during pregnancy through one year postpartum</li>
                            <li className='mb-2'>Identify CBO assets, resources, programs, and expertise relevant to closing the identified gaps in social support services for women of color during pregnancy and first year postpartum</li>
                            <li className='mb-2'>identify relationships among CBOs that work at the intersection of maternal health and racial equity.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-wrap my-7">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover ripple  zoom hadow-lg rounded-lg"
                            style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={p7} className="w-full  h-[300px] " alt="Louvre" />

                        </div>
                    </div>

                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
                        <h3 className="text-2xl font-bold mb-4">Ending Preventable Maternal Mortality (EPMM)</h3>

                        <p className="tracking-wide">
                            The Priority for Women health plays an integral role in advancing the global goals and strategies for Ending Preventable Maternal Mortality (EPMM) by driving the efforts of the EPMM working group and co-leading the technical work to develop a comprehensive monitoring framework for EPMM.The EPMM working group seeks to promote and track progress towards strategic priorities for maternal health and survival and to build the necessary momentum to end preventable maternal deaths within a generation.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap lg:flex-row-reverse ">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover ripple zoom shadow-lg rounded-lg "
                            style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={g11} className="w-full h-[300px] md:h-[400px] " alt="Louvre" />
                        </div>
                    </div>

                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
                        <p className='mb-2'>Following the publication of the Lancet Commission on Women and Health that highlights women’s contributions to health care and their status in health systems globally, as well as several analyses exploring whether or not women make better doctors, PWH is working to examine the current state of evidence related to gender and the global health workforce.</p>
                        <h3 className="text-xl font-bold mb-1">Specific topics of interest include:</h3>
                        <ul className='mb-2'>
                            <li className='mb-2'> Recruitment, training and retention of the health workforce</li>
                            <li className='mb-2'>Differences in the quality of services and/or patient experience of care</li>
                            <li className='mb-2'>Gender transformative policies including parental leave and pay equity</li>
                            <li className='mb-2'> Leadership and decision-making within global health</li>
                        </ul>
                        <p className='mt-2'>As part of this project, the PWH plans to collaborate with additional partners within and outside of America. The aim of this work is to contribute valuable knowledge about women’s paid and unpaid roles in the global health workforce that will ultimately help to inform policy change.</p>
                    </div>
                </div>




            </section>

        </div>
    )
}

export default Projects;
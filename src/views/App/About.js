import React from 'react'
import mission from "../../assets/mission.jpeg";

const About = () => {
  return (

    <div className="text-gray-800 bg-white">
      <div className='about--hero h-[230px] md:h-[270px] relative'>
        <div className='absolute bottom-[25%] left-[35%] md:bottom-[35%] md:left-[5%] mt-5'>
          <h3 className=' text-4xl text-white mx-auto text-[#f2f2f2]  text-center'>About Us</h3>
          <h5 className='text-[#f2f2f2] pl-[16px] md:pl-[0px]'>Home / <span className='text-[#fbb771]'>About Us</span></h5>
        </div>
      </div>
      <div className='px-10 bg-white py-5 pb-7'>
        <p class="my-3 tracking-wide">The
          <span className='font-semibold'> PRIORITY FOR WOMEN HEALTH (PWH)</span> was founded in 2020. The consistent under-attention given to women's health and the inadequate information available on women's health worldwide prompt the need for a foundation that will help Women in their own little capacity. PWH was founded in an effort to address these shortcomings and to bring issues of women's health to the forefront of global policy. Through advocacy, education, and promotion, PWH will be making significant strides in the public and private arenas toward the advancement of women's health throughout the world.
        </p>
        <p class="tracking-wide">
          PWH will emphasized on the importance of addressing issues of women's health throughout the life span. Although efforts to advance women's health were being made by NGOs, they tended to focus exclusively upon maternal and reproductive health. While PWH applauded these early steps, we noted that maternal and reproductive health represent particular stages of women's health needs, and, in order to truly empower women worldwide, women's health must be advanced in all stages of life. Thus, since the onset of our organization, we have worked passionately to incorporate all stages of women's health needs into global policy agendas, especially those needs that fall beyond categories of maternal and reproductive health.
        </p>

      </div>
      <section className='bg-[#f2f2f2] px-10 py-12 '>
        <div class="flex flex-wrap mb-7">
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
            <div class="relative overflow-hidden bg-no-repeat bg-cover ripple  zoom hadow-lg rounded-lg"
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src={mission} class="w-full  h-[300px] " alt="Louvre" />
              
            </div>
          </div>

          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
            <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
            
            <p class="tracking-wide">
              The Priority for Women's Health (PWH) is committed to advancing women's health in all stages of life and at all policy levels through health promotion, education, advocacy, and program implementation. PWH both promotes and implements women's health care research and service improvements at local, national, and international levels by collaborating with governmental and non-governmental organizations (NGOs), the private sector, academics, and individual citizens from all regions of the world.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap lg:flex-row-reverse ">
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
            <div class="relative overflow-hidden bg-no-repeat bg-cover ripple zoom shadow-lg rounded-lg "
              style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/city/033.jpg" class="w-full h-[300px] " alt="Louvre" />
              
            </div>
          </div>

          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
            <h3 class="text-2xl font-bold mb-3">Our Guiding Principles</h3>
            <ul className='mb-2'>
                    <li className='mb-2'>Women's health is a continuum from infancy through old age</li>
                    <li className='mb-2'>All stages of this continuum have unique health care needs</li>
                    <li className='mb-2'>Women's health care has been underserved and under-attended throughout the world</li>
                    <li className='mb-2'>Long-term initiatives and commitments are needed in order to forge alliances and collaborative programs across the globe</li>
                    <li className='mb-2'>Partnering among the public-private sector is necessary in order to provide effective health care and research for women worldwide</li>
                  </ul>
          </div>
        </div>




      </section>
      <section class="text-gray-800 px-10 py-7">
        <div class="flex justify-center">
          <div class="">
            <h2 class="text-3xl font-bold mb-2 text-center">Overview</h2>
            <p class="mb-2">
              The successful empowerment of women and their families requires healthy women in all stages of life!
              The Priority for Women's Health (PWH) works passionately to promote women's health throughout the lifespan and strives to incorporate all stages of women's health needs into global policy agendas. Since 1994, we have called attention to a diverse range of pressing women's health issues, especially those that have been ignored or under-attended by other NGOs and UN agencies.
            </p>
          </div>
        </div>
        <h3 className='font-bold text-xl mb-3'>We have addressed:</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-12">
          <div class="mb-3">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-1">Diabetes and its impact on women</p>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-1">Cervical cancer and HPV vaccine</p>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-1">HIV/AIDS and access to treatment for women</p>

              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-1">Coronary heart disease</p>
              </div>
            </div>
          </div>

          <div class="">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-2 md:mb-1">Depression</p>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-1">Osteoporosis and osteoarthritis</p>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-1">Smoking and women's health</p>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-1">Trachoma</p>
              </div>
            </div>
          </div>
        </div>

        <p className='mt-2'>With the help of our partners from the public and private sectors, PWH has held well over 100 symposia on women's health concerns in most regions of the world. In addition, we have initiated campaigns and petitions, created donation programs and international women's health networks, as well as published and distributed numerous informative materials on women's health. Our efforts have contributed to the dissemination of valuable information and have effectively turned the spotlight on global women's health concerns. Moreover, our efforts have facilitated public-private collaborations that have led to advancements in women's healthcare policies worldwide.</p>
      </section>
    </div>
  )
}

export default About
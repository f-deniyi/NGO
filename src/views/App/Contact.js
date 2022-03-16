import React, { useRef, useEffect } from 'react'


const Contact = () => {
    const contactName = useRef();
    const contactEmail = useRef();
    const contactMessage = useRef();

    useEffect(() => {
        console.log(window.Email);
    }, [])

    const sendMessage = async (e) => {
        e.preventDefault();

        const details = {
            name: contactName.current.value,
            email: contactEmail.current.value,
            mesage: contactMessage.current.value
        }
        console.log(details);

        // let response = await fetch("http://localhost:5000/contact", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json;charset=utf-8",
        //     },
        //     body: JSON.stringify(details),
        // });

        // let result = await response.json();
        // alert(result.status);
    }
    return (

        <div className="mb-10 text-gray-800">
            <div className='about--hero h-[230px] md:h-[270px] relative'>
                <div className='absolute bottom-[30%] left-[35%] md:bottom-[37%] md:left-[5%] mt-5'>
                    <h3 className=' text-4xl text-white mx-auto text-[#f2f2f2]  text-center'>Contact</h3>
                    <h5 className='text-[#f2f2f2]'>Home / <span className='text-[#fbb771]'>Contact Us</span></h5>
                </div>
            </div>
            <div className="container text-gray-800 px-4 md:px-12 z-50 pt-[1.3em] md:pt-0]">
                <div className="block mt-7px md:mt-[-50px] rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6 z-10"
                    style={{ zIndex: 999, background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: 'blur(30px)' }}>
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                            <form onSubmit={(e) => sendMessage(e)}>
                                <div className="form-group mb-6">
                                    <input type="text" className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-white active:border-[none] focus:outline-none" id="exampleInput7"
                                        placeholder="Name"
                                        ref={contactName}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email" className="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-white active:border-[none] focus:outline-none" id="exampleInput8"
                                        placeholder="Email address"
                                        ref={contactEmail}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-6">
                                    <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-white active:border-[none] focus:outline-none
          " id="exampleFormControlTextarea13" rows="3" placeholder="Message"
                                        required
                                        ref={contactMessage}
                                    ></textarea>
                                </div>

                                <button type="submit" className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"

                                >Send</button>
                            </form>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                            <div className="flex flex-wrap">
                                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>

                                            </div>
                                        </div>
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1">Location</p>
                                            <p className="text-gray-500"> New York Office
                                                777 United Nations Plaza, 7th Floor
                                                New York, NY 10017</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                                            </div>
                                        </div>
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1">Phone</p>
                                            <p className="text-gray-500">+(201)-528-5887 <span className='italic'>text only</span></p>


                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                    <div className="flex align-start">
                                        <div className="shrink-0">
                                            <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="email"
                                                    className="w-5 text-white text-2xl" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor"
                                                        d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="grow ml-4">
                                            <p className="font-bold mb-1">Mail</p>
                                            <p className="text-gray-500">info@priorityforwomanhealth.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                    <div className="flex align-start">
                                        <div className="shrink-0">
                                            <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" className="w-5 text-white"
                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="grow ml-4">
                                            <p className="font-bold mb-1">Support</p>
                                            <p className="text-gray-500">info@priorityforwomanhealth.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
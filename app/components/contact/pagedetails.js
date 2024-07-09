import Link from 'next/link'
import React from 'react'
import { AiOutlineMail, AiFillSkype } from "react-icons/ai";
import { TiWorld } from "react-icons/ti";

const ContactPagedetails = () => {
  return (
    <div className="bg-[url('/images/contact-us/contact.jpg')] bg-cover bg-center">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 justify-center">
                    <div className="mt-[18px] md:mt-[150px] mx-10 md:mx-0">
                        <form action className="max-w-xl mx-auto">
                            <h2 className="text-[32px] md:text-5xl font-bold leading-tight text-gray-700 mb-4 ">Send us email</h2>
                            <p className="text-gray-600 mb-8">Get in touch to see if we can help!</p>
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <div className="relative w-full md:w-1/2">
                                    <label className="text-gray-600" htmlFor="firstName">First Name</label>
                                    <div className="relative border-2 rounded-xl">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person text-gray-500" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 4 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.831 1.418-.832 1.664h10z" />
                                            </svg>
                                        </span>
                                        <input id="firstName" type="text" placeholder="Your first name" className="pl-12 pr-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black" />
                                    </div>
                                </div>
                                <div className="relative w-full md:w-1/2">
                                    <label className="text-gray-600" htmlFor="lastName">Last Name</label>
                                    <div className="relative border-2 rounded-xl">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person text-gray-500" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 4 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.831 1.418-.832 1.664h10z" />
                                            </svg>
                                        </span>
                                        <input id="lastName" type="text" placeholder="Your last name" className="pl-12 pr-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black" />
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full mb-4">
                                <label className="text-gray-600" htmlFor="email">Email</label>
                                <div className="relative border-2 rounded-xl">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope text-gray-500" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                        </svg>
                                    </span>
                                    <input id="email" type="email" placeholder="Your email address" className="pl-12 pr-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-600" htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Your message" className="border-2 p-4 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black" rows={4} defaultValue={""} />
                            </div>
                            <div className="flex justify-center mb-[56px] md:mb-0">
                                <button type="submit" className="bg-primary border hover:bg-red-500 hover:text-white text-gray-800 w-full font-bold py-3 px-6 rounded-lg transition-colors">Submit</button>
                            </div>
                            <div className="hidden md:flex justify-between items-center mt-8 mb-[126px]">
                                <div className="flex justify-between items-center">
                                <TiWorld className="text-gray-600 ml-1 text-lg" />
                                    <Link href={"#"} className="text-gray-600 ml-1">Idark</Link>
                                </div>
                                <div className="flex justify-between items-center">
                                <AiFillSkype className="text-gray-600 ml-1 text-lg" />
                                    <Link href={"#"} className="text-gray-600 ml-1">ruslandich</Link>
                                </div>
                                <div className="flex justify-between items-center">
                                    <AiOutlineMail className="text-gray-600 ml-1 text-lg" />
                                    <Link href={"#"} className="text-gray-600 ml-1">mailsupport@demo.com</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ContactPagedetails
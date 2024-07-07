import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center md:items-center">
            <div className="bg-[#ee076e] md:p-[120px] rounded-tr-lg">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-5 md:justify-center md:items-center px-5 md:px-0 py-10 md:pt-0">
                <div>
                  <h3 className="uppercase mb-2 tracking-[4px] text-[15px] text-white md:eading-[90px]">
                    Ready To Do This
                  </h3>
                  <h1 className="font-[900] text-[30px] md:text-[75px] text-white md:leading-[90px]">
                    Let&apos;s get to work
                  </h1>
                  <button className="py-5 md:px-8 px-3 mt-[30px] border border-white rounded-lg text-white font-[500] uppercase tracking-[2px] hover:bg-white hover:text-[#ee076e]">
                    Contact Us
                  </button>
                </div>
                <div>
                  <img src="/images/big-logo.png" alt="big-logo idark" />
                </div>
              </div>
            </div>
            <div className="h-full bg-[url('/images/bg-image-8.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="md:pt-[120px] bg-white"></div>
                <div className="md:p-[120px] ">
                    <div className="grid grid-cols-2 gap-1 md:gap-5 md:justify-between md:items-center text-[#c6c9d8] px-5 md:px-0 pt-10 md:pt-0">
                        <div>
                            <h3 className="mb-[30px] text-[28px] font-[500]">Quick Links</h3>
                            <ul>
                                <li className="mt-5 text-[20px] font-normal leading-3">Work</li>
                                <li className="mt-5 text-[20px] font-normal leading-3">About</li>
                                <li className="mt-5 text-[20px] font-normal leading-3">Let&apos;s Talk</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-[30px] text-[28px] font-[500]">Say Hello</h3>
                            <ul>
                                <li className="mt-5 text-[20px] font-normal leading-3">admin@example.com</li>
                                <li className="mt-5 text-[20px] font-normal leading-3">hr@example.com</li>
                                <li className="mt-5">
                                    <div className="flex mx-auto gap-5 justify-start items-center text-[20px] font-normal leading-3">
                                    <FaFacebookF />
                                    <FaLinkedinIn />
                                    <FaInstagram />
                                    <FaTwitter />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h5 className="text-white text-sm md:text-md mt-10 mx-5">Copyright © 2024 IdeasUI-Themes. All Rights Reserved.</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

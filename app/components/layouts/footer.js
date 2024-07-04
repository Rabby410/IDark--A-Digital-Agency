import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <div className="">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="bg-[#ee076e] p-[120px] rounded-tr-lg">
              <div className="grid grid-cols-2 gap-5 justify-center items-center">
                <div>
                  <h3 className="uppercase mb-2 tracking-[4px] text-[15px] text-white leading-[90px]">
                    Ready To Do This
                  </h3>
                  <h1 className="font-[900] text-[75px] text-white leading-[90px]">
                    Let's get to work
                  </h1>
                  <button className="py-5 px-8 mt-[30px] border border-white rounded-lg text-white font-[500] uppercase tracking-[2px] hover:bg-white hover:text-[#ee076e]">
                    Contact Us
                  </button>
                </div>
                <div>
                  <img src="/images/big-logo.png" alt="" />
                </div>
              </div>
            </div>
            <div className="h-full bg-[url('/images/bg-image-8.jpg')] bg-no-repeat bg-cover bg-center">
                <div className="pt-[120px] bg-white"></div>
                <div className="p-[120px]">
                    <div className="grid grid-cols-2 gap-5 justify-between items-center text-[#c6c9d8]">
                        <div>
                            <h3 className="mb-[30px] text-[28px] font-[500]">Quick Links</h3>
                            <ul>
                                <li className="mt-5 text-[20px] font-normal leading-3">Work</li>
                                <li className="mt-5 text-[20px] font-normal leading-3">About</li>
                                <li className="mt-5 text-[20px] font-normal leading-3">Let's Talk</li>
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
                    <h5 className="text-white text-md mt-10">Copyright © 2024 IdeasUI-Themes. All Rights Reserved.</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

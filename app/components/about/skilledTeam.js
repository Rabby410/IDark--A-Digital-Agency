import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const SkilledTeam = () => {
  return (
    <>
      <div className="py-20 bg-white">
        <div className="container mx-auto justify-center items-center">
          <div className="text-center">
            <h1 className="title">Skilled Team</h1>
            <p className="para">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center max-w-70% my-20">
            <div className="group bg-[url('/images/about/team-01.jpg')] bg-cover bg-no-repeat">
              <div className="group-hover:bg-gradient-to-b from-transparent to-red-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                <div className="flex mx-auto gap-5 text-red-500 text-3xl p-10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300">
                  <FaFacebook /> <FaLinkedin /> <FaTwitter />
                </div>
                <div className="pt-96 px-10 pb-10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300">
                  <h3 className="sub-title">
                    <span className="text-white">Jone Due</span>
                  </h3>
                  <p className="para">
                    <span className="text-white">Sr. Software Engineer</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="group bg-[url('/images/about/team-02.jpg')] bg-cover bg-no-repeat">
              <div className="group-hover:bg-gradient-to-b from-transparent to-red-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                <div className="flex mx-auto gap-5 text-red-500 text-3xl p-10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300">
                  <FaFacebook /> <FaLinkedin /> <FaTwitter />
                </div>
                <div className="pt-96 px-10 pb-10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300">
                  <h3 className="sub-title">
                    <span className="text-white">Jone Due</span>
                  </h3>
                  <p className="para">
                    <span className="text-white">Sr. Software Engineer</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="group bg-[url('/images/about/team-03.jpg')] bg-cover bg-no-repeat">
              <div className="group-hover:bg-gradient-to-b from-transparent to-red-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                <div className="flex mx-auto gap-5 text-red-500 text-3xl p-10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300">
                  <FaFacebook /> <FaLinkedin /> <FaTwitter />
                </div>
                <div className="pt-96 px-10 pb-10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300">
                  <h3 className="sub-title">
                    <span className="text-white">Jone Due</span>
                  </h3>
                  <p className="para">
                    <span className="text-white">Sr. Software Engineer</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkilledTeam;

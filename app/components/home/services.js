import React from "react";

const Services = () => {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-5">
            <div className="">
              <h1 className="title mb-2">
                Services
              </h1>
              <p className="para pb-[120px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>

              <div className="mb-3">
                  <span className="inline-block whitespace-nowrap border-b-2 border-red-500 tborder-bottom hover:text-red-500">Request Custom Service</span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <div className="group hover:bg-gradient-to-r hover:from-red-600 hover:via-red-500 hover:to-pink-500 transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="5em"
                      width="5em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#f9004d] group-hover:text-white p-4"
                    >
                      <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                      <line x1="2" y1="20" x2="2" y2="20"></line>
                    </svg>
                    <div className="p-6">
                      <h2 className=" group-hover:text-white sub-title mb-3">
                        Business Strategy
                      </h2>
                      <p className="para group-hover:text-white">
                        I throw myself down among the tall grass by the stream
                        as I lie close to the earth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <div className="group hover:bg-gradient-to-r hover:from-red-600 hover:via-red-500 hover:to-pink-500 transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="5em"
                      width="5em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#f9004d] group-hover:text-white p-4"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    <div className="p-6">
                      <h2 className="sub-title group-hover:text-white mb-3">
                        Website Development
                      </h2>
                      <p className="para group-hover:text-white ">
                        I throw myself down among the tall grass by the stream
                        as I lie close to the earth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <div className="group hover:bg-gradient-to-r hover:from-red-600 hover:via-red-500 hover:to-pink-500 transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="5em"
                      width="5em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#f9004d] group-hover:text-white p-4"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <div className="p-6">
                      <h2 className="sub-title group-hover:text-white mb-3">
                        Marketing & Reporting
                      </h2>
                      <p className="para group-hover:text-white">
                        I throw myself down among the tall grass by the stream
                        as I lie close to the earth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <div className="group hover:bg-gradient-to-r hover:from-red-600 hover:via-red-500 hover:to-pink-500 transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="5em"
                      width="5em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#f9004d] group-hover:text-white p-4"
                    >
                      <rect
                        x="2"
                        y="3"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                    <div className="p-6">
                      <h2 className="sub-title group-hover:text-white mb-3">
                        Mobile App Development
                      </h2>
                      <p className="para group-hover:text-white">
                        I throw myself down among the tall grass by the stream
                        as I lie close to the earth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

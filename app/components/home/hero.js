import React from "react";
import Header from "../layouts/header";

const Hero = () => {
  return (
    <>
      <div className="bg-[#1d1d24]">
        <div className="bg-[url('/images/bg-image-8.jpg')] bg-no-repeat bg-cover bg-[50%]">
          <Header />
          <div class="container mx-auto pt-20 pb-40">
            <h1 class="font-[900] text-[65px] md:text-[120px] mx-5 md:mx-0 text-[#fd1d1d] leading-[130px] uppercase pt-[12px] mb-4">
              A digital agency.
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div class="px-[15px] py-10">
                <img
                  src="/images/icons/icon-01.png"
                  alt="Business Strategy"
                  class="mb-8"
                />
                <h3 class="text-[#c6c9d8] mb-5 text-2xl">Business Strategy</h3>
                <p class="text-[#c6c9d8] text-[18px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
              <div class="px-[15px] py-10">
                <img
                  src="/images/icons/icon-02.png"
                  alt="Website Development"
                  class="mb-8"
                />
                <h3 class="text-[#c6c9d8] mb-5 text-2xl">
                  Website Development
                </h3>
                <p class="text-[#c6c9d8] text-[18px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
              <div class="px-[15px] py-10">
                <img
                  src="/images/icons/icon-03.png"
                  alt="Marketing & Reporting"
                  class="mb-8"
                />
                <h3 class="text-[#c6c9d8] mb-5 text-2xl">
                  Marketing & Reporting
                </h3>
                <p class="text-[#c6c9d8] text-[18px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

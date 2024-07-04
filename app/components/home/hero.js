import React from "react";
import Header from "../layouts/header";

const Hero = () => {
  return (
    <>
    <div className="bg-[#1d1d24]">
      <div className="bg-[url('/images/bg-image-8.jpg')] bg-no-repeat bg-cover bg-[50%]">
      <Header/>
        <div className="container mx-auto pt-20 pb-40">
          <h1 className="font-[900] text-[120px] text-[#fd1d1d] leading-[130px] uppercase pt-[12px] mb-4">A digital agency.</h1>
          <div className="grid grid-cols-3 gap-5">
            <div className="px-[15px] py-10">
                <img src="/images/icons/icon-01.png" alt="Business Stratagy" className="mb-8"/>
                <h3 className="text-[#c6c9d8] mb-5 text-2xl">Business Stratagy</h3>
                <p className="text-[#c6c9d8] text-[18px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            </div>
            <div className="px-[15px] py-10">
                <img src="/images/icons/icon-02.png" alt="Website Development" className="mb-8"/>
                <h3 className="text-[#c6c9d8] mb-5 text-2xl">Website Development</h3>
                <p className="text-[#c6c9d8] text-[18px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            </div>
            <div className="px-[15px] py-10">
                <img src="/images/icons/icon-03.png" alt="Marketing & Reporting" className="mb-8"/>
                <h3 className="text-[#c6c9d8] mb-5 text-2xl">Marketing & Reporting</h3>
                <p className="text-[#c6c9d8] text-[18px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;

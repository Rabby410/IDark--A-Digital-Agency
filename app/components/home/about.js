import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-2 items-center">
            <div>
              <img
                src="/images/home/about/about-1.jpg"
                alt="about"
                className="-mt-[200px] rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-[#1f1f25] text-[60px] font-[700] mb-2">About</h1>
              <p className="text-[#717173] text-xl mb-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum,
              </p>
              <div className="grid grid-cols-2 gap-5 items-center">
                <div>
                    <h2 className="text-3xl font-[500] mb-5">Who we are</h2>
                    <p className="text-xl text-[#717173] pb-[120px]">There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div><div>
                    <h2 className="text-3xl font-[500] mb-5">Who we are</h2>
                    <p className="text-xl text-[#717173] pb-[120px]">There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

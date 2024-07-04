import React from "react";
import WorkSlider from "./worksSlider";

const OurWorks = () => {
  return (
    <>
      <div className="bg-white py-20">
        <div className="container mx-auto mb-7">
          <h1 className="title mb-5">Our Works</h1>
          <p className="para">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div>
            <WorkSlider/>
        </div>
      </div>
    </>
  );
};

export default OurWorks;

"use client";
import React, { useState } from "react";

const testimonialData = [
  {
    text: "Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    name: "Aklima",
    image: "/images/home/testimonial/testimonial-1.jpg",
  },
  {
    text: "Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    name: "Fatima Asrafy",
    image: "/images/home/testimonial/testimonial-2.jpg",
  },
  {
    text: "Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    name: "Jannat Tumpa",
    image: "/images/home/testimonial/testimonial-3.jpg",
  },
  {
    text: "Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    name: "Standard chunk",
    image: "/images/home/testimonial/testimonial-4.jpg",
  },
  {
    text: "John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    name: "John Doe",
    image: "/images/home/testimonial/testimonial-5.jpg",
  },
  {
    text: "Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    name: "Amar Orthi ",
    image: "/images/home/testimonial/testimonial-6.jpg",
  },
  {
    text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    name: "Fatima Ma",
    image: "/images/home/testimonial/testimonial-7.jpg",
  },
  {
    text: "Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    name: "JON CUMMINS",
    image: "/images/home/testimonial/testimonial-8.jpg",
  },
];

const Testimonials = () => {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);

  const handleClientClick = (index) => {
    setSelectedClientIndex(index);
  };

  return (
    <>
      <div className="py-20 mx-5 md:mx-0 bg-[#f8f9fc]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h3 className="sub-title text-center">
            {testimonialData[selectedClientIndex].text}
          </h3>
          <p className="pt-4 para text-center">
            <span className="text-gray-700">
              {testimonialData[selectedClientIndex].name}
            </span>{" "}
            - COO, AMERIMAR ENTERPRISES, INC.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-5 md:max-w-[40%]">
            {testimonialData.map((client, index) => (
              <div
              key={index}
              className={`relative group cursor-pointer mx-auto rounded-full overflow-hidden ${
                index === selectedClientIndex ? 'border-2 border-red-500' : ''
              }`}
              onClick={() => handleClientClick(index)}
            >
              <img
                key={index}
                src={client.image}
                alt={client.name}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
                onClick={() => handleClientClick(index)}
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

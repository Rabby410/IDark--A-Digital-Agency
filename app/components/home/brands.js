// components/BrandsSection.js

import React from "react";

const brands = [
  "/images/home/brands/brand-01.png",
  "/images/home/brands/brand-02.png",
  "/images/home/brands/brand-03.png",
  "/images/home/brands/brand-04.png",
  "/images/home/brands/brand-05.png",
  "/images/home/brands/brand-06.png",
  "/images/home/brands/brand-01.png",
  "/images/home/brands/brand-02.png",
];

const BrandsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-20 justify-center items-center">
          {brands.map((imageUrl, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 mb-4"
              style={{ maxWidth: "20%" }}
            >
              <img
                src={imageUrl}
                alt={`Brand ${index + 1}`}
                className="max-w-full h-auto hover:scale-105 transform transition-transform duration-300 ease-in-out opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

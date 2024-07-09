import React from "react";
import Header from "./header";
import Link from "next/link";

const Breadcrumbs = ({ pageTitle, parentPage, parentPageUrl, bgImage }) => {
  // Default background image URL
  const defaultBgImage = "/images/bg-image-8.jpg";

  return (
    <>
      <div className="bg-[#1d1d24]">
        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${bgImage ? bgImage : defaultBgImage})`
          }}
        >
          <Header />
          <div className="text-center md:py-32 pb-20">
            <h1 className="title">
              <span className="text-white">{pageTitle}</span>
            </h1>
            <p className="para">
              <span className="text-gray-400 hover:text-white">
                <Link href={parentPageUrl}>{parentPage}</Link>
              </span>{" "}
              /{" "}
              <span className="text-gray-400 hover:text-white">
                <Link href="#">{pageTitle}</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;

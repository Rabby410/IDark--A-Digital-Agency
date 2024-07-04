import React from "react";
import Header from "./header";
import Link from "next/link";

const Breadcrumbs = ({ pageTitle, parentPage, parentPageUrl }) => {
  return (
    <>
      <div className="bg-[#1d1d24]">
        <div className="bg-[url('/images/bg-image-8.jpg')] bg-no-repeat bg-cover bg-[50%]">
          <Header />
          <div className="text-center pb-20">
            <h1 className="title">
              <span className="text-white">{pageTitle}</span>
            </h1>
            <p className="para">
              <span className="text-gray-400 hover:text-white">
                <Link href={parentPageUrl}>Home</Link>
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

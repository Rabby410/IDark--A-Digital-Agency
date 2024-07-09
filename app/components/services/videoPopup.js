'use client'

import React, { useState } from "react";
import { FiX, FiPlayCircle } from "react-icons/fi";

const VideoPopup = () => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const openVideoPopup = () => {
    setShowVideoPopup(true);
  };

  const closeVideoPopup = () => {
    setShowVideoPopup(false);
  };

  return (
    <>
      <div className="relative">
        <img
          src="/images/services/service-02.png"
          alt="Service Image"
          className="md:pl-20 cursor-pointer"
          onClick={openVideoPopup}
        />
        {!showVideoPopup && (
          <div className="absolute inset-0 flex items-center justify-center transition-opacity">
            <FiPlayCircle className="text-white text-7xl cursor-pointer" onClick={openVideoPopup} />
          </div>
        )}
      </div>

      {showVideoPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75" onClick={closeVideoPopup}>
        <div className="relative w-full max-w-screen-lg mx-auto">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/QsY8fnvMn6c?si=ZxOhriZ1Ko5B6KO7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="absolute inset-0"
            ></iframe>
          </div>
          <button
            onClick={closeVideoPopup}
            className="absolute top-0 right-0 m-4 text-white hover:text-gray-300"
          >
            <FiX className="text-3xl" />
          </button>
        </div>
      </div>
      
      )}
    </>
  );
};

export default VideoPopup;

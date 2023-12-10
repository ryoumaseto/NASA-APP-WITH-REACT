import React from "react";
import NASA from './nasa-Yj1M5riCKk4-unsplash.jpg'

const Photo = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-50 shadow-lg md:mb-8">
        <img
          src={NASA}
          loading="lazy"
          alt='宇宙の写真'
          className="h-2/6 w-3/6  object-center mx-auto"
        />
      </div>
    </div>
  );
};

export default Photo;

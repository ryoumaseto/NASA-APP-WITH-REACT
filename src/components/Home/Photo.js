import React from "react";

const Photo = (data) => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <p class="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg">
        {data.data.title}
      </p>
      <div class="relative mb-6 overflow-hidden rounded-lg bg-gray-50 shadow-lg md:mb-8">
        <img
          src={data.data.url}
          loading="lazy"
          alt={data.data.title}
          class="h-2/6 w-3/6  object-center mx-auto"
        />
      </div>
    </div>
  );
};

export default Photo;

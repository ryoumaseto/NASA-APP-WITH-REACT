// ImageCard.js
import React from 'react';

function ImageCard({ data }) {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <p className="mb-2 font-semibold text-indigo-500 md:mb-3 lg:text-lg">{data.title}</p>
      <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-50 shadow-lg md:mb-8">
        <img src={data.url} loading="lazy" alt={data.title} className="h-2/6 w-3/6  object-center mx-auto" />
      </div>
      {data.title && (
        <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Explanation</h2>
      )}
      <p className="text-gray-500 sm:text-lg">{data.explanation}</p>
    </div>
  );
}

export default ImageCard;

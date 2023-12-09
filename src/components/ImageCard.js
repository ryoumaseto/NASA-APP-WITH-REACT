// ImageCard.js
import React from 'react';

function ImageCard({ data }) {
  return (
      <div className="image-container bg-gray-200 p-4 rounded-lg shadow-md">
        <img src={data.url} alt={data.title} className="w-full h-auto rounded-lg" />
        <h2 className="text-xl font-bold mt-4">{data.title}</h2>
        <p className="mt-2" style={{ whiteSpace: 'pre-wrap' }}>{data.explanation}</p>
      </div>
    )
}

export default ImageCard;

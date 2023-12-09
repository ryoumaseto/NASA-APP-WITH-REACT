// ImageCard.js
import React from 'react';

function ImageCard({ data }) {
  return (
      <div className="image-container">
        <img src={data.url} alt={data.title} />
        <h2>{data.title}</h2>
        <p>{data.explanation}</p>
      </div>
    )
}

export default ImageCard;

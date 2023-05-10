import React from "react";

const Card = ({ image, title }) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-32 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
  );
};

export default Card;

import React from "react";

function Testimonial({ name, location, image, quote }) {
  return (
    <div className="h-[300px] w-[240px] border border-text/30 rounded-lg mx-2">
      <div className="flex items-center h-1/4 border-b border-text/30">
        <img
          src={`./src/assets/${image}`}
          alt={name}
          className="w-[60px] h-[60px] object-cover rounded-full mx-4"
        />
        <div className="p-2">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm italic text-gray-400">"{quote}"</p>
      </div>
    </div>
  );
}

export default Testimonial;

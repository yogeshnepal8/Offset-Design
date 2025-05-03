import React from "react";

function RecentBlogs({ image, title }) {
  return (
    <div className="h-[300px] w-[240px] border border-text/30 rounded-lg mx-2 hover:shadow-lg hover:shadow-text/40 transition duration-300 ease-in-out">
      <div className="flex flex-wrap items-center h-3/4 border-b border-text/30 ">
        <img src={image} alt={name} className="w-full h-full object-cover " />
      </div>
      <div className="p-4">
        <h2 className="text-semiboldtext-text">{title}</h2>
      </div>
    </div>
  );
}

export default RecentBlogs;

import React from "react";

function PortfolioCard({ image, type, face, purpose }) {
  return (
    <div className="w-[400px] h-[500px] border border-text/30 rounded-lg shadow-md">
      <img
        className="w-full h-[400px] object-cover border-b border-text/40"
        src={image}
        alt={image}
      />
      <div className="p-4 text-text">
        <h2 className="font-semibold">
          Type: <span className="font-normal">{type}</span>
        </h2>
        <h2 className="font-semibold">
          Face: <span className="font-normal">{face}</span>
        </h2>
        <h2 className="font-semibold">
          Purpose: <span className="font-normal">{purpose}</span>
        </h2>
      </div>
    </div>
  );
}

export default PortfolioCard;

import React from "react";

function ServicesCard({
  serviceName,
  serviceDescription,
  serviceIcon,
  alignment,
}) {
  const isLeft = alignment === "left";

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isLeft ? "" : "md:flex-row-reverse"
      } items-center w-full gap-6 md:gap-12 px-4 lg:px-[20%] py-8 text-text`}
    >
      {/* Icon/Image */}
      <div className="w-full md:w-1/2 flex justify-center my-4">
        <img
          src={serviceIcon}
          alt={serviceName}
          className="w-[200px] h-[200px] object-cover rounded-full"
        />
      </div>

      {/* Text content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="lg:text-xl text-base text-text font-bold">
          {serviceName}
        </h2>
        <p className="text-normal text-text/60 lg:text-lg leading-relaxed py-2">
          {serviceDescription}
        </p>
      </div>
    </div>
  );
}

export default ServicesCard;

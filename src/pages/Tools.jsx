import React, { useState } from "react";
import ToolsEstimationTitle from "../components/ToolsEstimationTitle";
import UnitConversion from "../components/UnitConversion";
import ApproxEstimate from "../components/ApproxEstimate";

function Tools() {
  return (
    <div className="px-5 lg:px-[10%] py-4 mt-4 flex justify-evenly flex-col gap-4 lg:space-x-10 lg:flex-row items-start lg:gap-10">
      <div className="lg:w-2/3">
        <ToolsEstimationTitle />
      </div>
      <div className="lg:w-1/3">
        <ApproxEstimate />
        <UnitConversion />
      </div>
    </div>
  );
}

export default Tools;

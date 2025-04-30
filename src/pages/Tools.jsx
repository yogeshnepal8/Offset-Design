import React, { useState } from "react";
import ToolsEstimationTitle from "../components/ToolsEstimationTitle";
import UnitConversion from "../components/UnitConversion";

function Tools() {
  return (
    <div className="px-5 lg:px-[10%] py-4 mt-4 flex flex-col gap-4 lg:flex-row items-start lg:gap-10">
      <ToolsEstimationTitle />
      <UnitConversion />
    </div>
  );
}

export default Tools;

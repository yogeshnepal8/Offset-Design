import React, { useState } from "react";
import { Link } from "react-router";

function ApproxEstimate() {
  const [plotArea, setPlotArea] = useState("0");
  const [storey, setStorey] = useState("1");
  const [subStrRate, setSubStrRate] = useState("2600");
  const [superStrRate, setSuperStrRate] = useState("3000");

  const maxBuiltUpArea = plotArea * 0.7 * storey;
  const subStrCost = subStrRate * plotArea * 0.7 * 0.75;
  const superStrCost = superStrRate * plotArea * 0.7 * storey;
  const total = subStrCost + superStrCost;

  return (
    <div className="shadow-sm py-4">
      <p className="text-2xl font-bold text-textSecondary mb-3">
        Approximate Estimate
      </p>
      <div className="text-text flex flex-col gap-3 my-2">
        <label className="font-semibold inline-block">
          Area in sq.ft
          <input
            type="number"
            value={plotArea}
            onChange={(e) => setPlotArea(Number(e.target.value))}
            className="styled-input"
          />
        </label>

        <label className="font-semibold">
          No. of Storeys
          <input
            type="number"
            value={storey}
            onChange={(e) => setStorey(Number(e.target.value))}
            className="styled-input"
          />
        </label>

        <label className="font-semibold">
          Sub-Structure Rate /sq.ft
          <input
            type="number"
            value={subStrRate}
            onChange={(e) => setSubStrRate(Number(e.target.value))}
            className="styled-input"
          />{" "}
        </label>

        <label className="font-semibold">
          Super-Structure Rate /sq.ft
          <input
            type="number"
            value={superStrRate}
            onChange={(e) => setSuperStrRate(Number(e.target.value))}
            className="styled-input"
          />{" "}
        </label>

        <em>
          Maximum Built-up Area ={" "}
          {maxBuiltUpArea.toFixed(2) === "NaN"
            ? "- - -"
            : maxBuiltUpArea.toFixed(2)}{" "}
          sq.ft
        </em>
        <p className="font-bold">
          Sub-Structure Cost = ₹{" "}
          {subStrCost.toLocaleString() === "NaN"
            ? "- - -"
            : subStrCost.toLocaleString(2)}
        </p>
        <p className="font-bold">
          Super-Structure Cost = ₹
          {superStrCost.toLocaleString() === "NaN"
            ? "- - -"
            : superStrCost.toLocaleString(2)}
        </p>
        <p className="font-bold text-textSecondary">
          Total Cost = ₹
          {total.toLocaleString() === "NaN" ? "- - -" : total.toLocaleString(2)}
        </p>
      </div>
      <em className="text-sm text-text mb-4 ">
        ⚠️ This is an approximate estimate intended for preliminary
        understanding only. No construction decisions should be based solely on
        this figure. For a detailed and accurate estimate, please consult a
        qualified engineer with the full set of architectural and structural
        drawings.
      </em>{" "}
      <br />
      <p className="text-sm text-text my-2">
        <a href="https://www.facebook.com/offsetdesign1" target="_blank">
          <span className="text-textSecondary text-sm">Click Here</span>{" "}
        </a>{" "}
        to consult with our engineer
      </p>
    </div>
  );
}

export default ApproxEstimate;

import React, { useState, useEffect } from "react";

const unitOptions = [
  { label: "Length (ft → m)", from: "ft", to: "m", factor: 0.3048 },
  { label: "Area (sq.ft → sq.m)", from: "sqft", to: "sqm", factor: 0.092903 },
  {
    label: "Volume (cu.ft → cu.m)",
    from: "cuft",
    to: "cum",
    factor: 0.0283168,
  },
];

function UnitConversion() {
  const [inputValue, setInputValue] = useState("");
  const [selectedUnit, setSelectedUnit] = useState(unitOptions[0]);
  const [result, setResult] = useState(null);

  // Auto conversion effect
  useEffect(() => {
    if (inputValue && !isNaN(inputValue)) {
      const converted = parseFloat(inputValue) * selectedUnit.factor;
      setResult(converted.toFixed(3));
    } else {
      setResult(null);
    }
  }, [inputValue, selectedUnit]);

  return (
    <div className="shadow-sm py-4">
      <p className="text-2xl font-bold text-textSecondary mb-4">
        Unit Converter
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Dropdown */}
        <select
          value={selectedUnit.label}
          onChange={(e) =>
            setSelectedUnit(
              unitOptions.find((opt) => opt.label === e.target.value)
            )
          }
          className="border p-1 rounded w-full sm:w-auto"
        >
          {unitOptions.map((opt, idx) => (
            <option key={idx} value={opt.label}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Input field */}
        <input
          type="number"
          placeholder={`Enter value in ${selectedUnit.from}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-1 rounded w-full sm:w-auto"
        />
      </div>

      {/* Result display */}
      {result !== null && (
        <div className="mt-4 text-xl font-semibold text-text">
          {inputValue} {selectedUnit.from} = {result} {selectedUnit.to}
        </div>
      )}
    </div>
  );
}

export default UnitConversion;

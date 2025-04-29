import React, { useState } from "react";
import datas from "../assets/data.js";

function ToolsEstimationTitle() {
  const [selectedWork, setSelectedWork] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [rates, setRates] = useState({}); // user-entered rates

  const handleSelectionChange = (event) => {
    const selectedTitle = event.target.value;
    const selectedData = datas.find((data) => data.title === selectedTitle);
    setSelectedWork(selectedData);
    setQuantity("");
    setRates({}); // reset rates on title change
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleRateChange = (material, value) => {
    setRates((prevRates) => ({
      ...prevRates,
      [material]: parseFloat(value) || 0,
    }));
  };

  const calculateAmount = (material, materialQty) => {
    const rate = rates[material] || 0;
    const totalQty = quantity ? materialQty * quantity : 0;
    return {
      rate,
      totalQty,
      amount: totalQty * rate,
    };
  };

  const totalAmount = selectedWork
    ? Object.entries(selectedWork.materials).reduce((sum, [material, qty]) => {
        const { amount } = calculateAmount(material, qty);
        return sum + amount;
      }, 0)
    : 0;

  return (
    <div className="p-4">
      <p className="text-2xl font-bold text-textSecondary mb-4">Estimation</p>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
        {/* Title + Dropdown */}
        <div className="flex flex-row items-center gap-2">
          <label className="text-text text-xl font-bold whitespace-nowrap">
            Choose Title
          </label>
          <select
            className="border p-1 rounded min-w-[180px]"
            onChange={handleSelectionChange}
          >
            <option value="">-- Select --</option>
            {datas.map((data, index) => (
              <option key={index} value={data.title}>
                {data.title}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity + Unit */}
        <div className="flex flex-row items-center gap-2">
          <label className="text-text text-xl font-bold whitespace-nowrap">
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Enter quantity"
            className="border p-1 rounded font-normal text-black min-w-[100px]"
          />
          <p className="font-medium text-xl text-text">
            Unit:{" "}
            <span className="text-textPrimary">
              {selectedWork?.unit || "N/A"}
            </span>
          </p>
        </div>
      </div>

      {/* MATERIAL TABLE */}
      {selectedWork && (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border border-textSecondary text-left">
            <thead className="bg-gray-100/60 ">
              <tr>
                <th className="px-4 py-2 border">Material</th>
                <th className="px-4 py-2 border">Material Required</th>
                <th className="px-4 py-2 border">Rate</th>
                <th className="px-4 py-2 border">Amount</th>
              </tr>
            </thead>
            <tbody className="text-text">
              {Object.entries(selectedWork.materials).map(
                ([material, qty], index) => {
                  const { rate, totalQty, amount } = calculateAmount(
                    material,
                    qty
                  );
                  return (
                    <tr key={index}>
                      <td className="px-4 py-2 border capitalize">
                        {material}
                      </td>
                      <td className="px-4 py-2 border">
                        {totalQty.toFixed(2)}
                      </td>
                      <td className="px-4 py-2 border">
                        <input
                          type="number"
                          value={rates[material] || ""}
                          onChange={(e) =>
                            handleRateChange(material, e.target.value)
                          }
                          placeholder="Enter rate"
                          className="border focus:border-textSecondary p-1 w-full rounded bg-transparent"
                        />
                      </td>
                      <td className="px-4 py-2 border">{amount.toFixed(2)}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
            <tfoot>
              <tr className="bg-text/50 font-semibold">
                <td className="px-4 py-2 border" colSpan={3}>
                  Total Amount
                </td>
                <td className="px-4 py-2 border">{totalAmount.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}

export default ToolsEstimationTitle;

import React, { useState } from "react";
import BarChartIcon from "../assets/BarChart.svg";

const NotificationCardAlert = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="h-44 w-[189px] lg:w-[220px] xl:w-[189px] flex bg-white flex-shrink-0 rounded-lg flex-col p-3">
      <div className="flex justify-between mb-5">
        <img src={BarChartIcon} alt="BarChart Icon" />
        <input
          type="checkbox"
          id="saveCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className=""
        />
      </div>
      <div className="mt-auto text-xs font-medium pr-2 mb-2">
        Notify me when any wallets move more than
      </div>
      <div className="bg-gray-400 text-xs w-fit rounded-sm p-1">$1,000.00</div>
    </div>
  );
};

export default NotificationCardAlert;

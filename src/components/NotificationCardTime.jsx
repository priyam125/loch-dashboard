import React, { useState } from "react";
import ClockIcon from "../assets/clock.svg";

const NotificationCardTime = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="h-44 w-48 flex bg-white flex-shrink-0 rounded-lg flex-col p-3">
      <div className="flex justify-between mb-5">
        <img src={ClockIcon} alt="BarChart Icon" />
        <input
          type="checkbox"
          id="saveCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className=""
        />
      </div>
      <div className="mt-auto text-xs font-medium pr-2 mb-2">
        Notify me when any wallet dormant for
      </div>
      <div className="bg-gray-400 text-xs w-fit p-1 rounded-sm">
        {"> 30 days"}
      </div>
    </div>
  );
};

export default NotificationCardTime;

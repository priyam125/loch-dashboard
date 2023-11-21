import React from "react";
import NotificationBellIcon from "../assets/NotificationBellIcon.svg";

const NotificationCardAddress = () => {
  return (
    <div
      className="h-44 w-48 flex bg-white flex-shrink-0 rounded-lg flex-col p-3"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 60%, #165DFF 98%)",
      }}
    >
      <div className="flex justify-between mb-3">
        <img src={NotificationBellIcon} alt="Notification Bell" />
        <div className="cursor-pointer text-xs font-semibold">Save</div>
      </div>
      <div className="text-sm font-medium pr-2 mb-3.5">
        We’ll be sending notifications to you here
      </div>
      <input className="py-1 px-2 rounded-md"/>
    </div>
  );
};

export default NotificationCardAddress;

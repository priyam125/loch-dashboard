import React, { useEffect, useState } from "react";
import BellIcon from "../assets/Bell.svg";
import NotificationCardAddress from "../components/NotificationCardAddress";
import NotificationCardAlert from "../components/NotificationCardAlert";
import NotificationCardTime from "../components/NotificationCardTime";

const cards = [
  <NotificationCardAddress key="address" />,
  <NotificationCardAlert key="alert" />,
  <NotificationCardTime key="time" />,
];

const Dashboard = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Move to the next card
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 1000); // Adjust the interval as needed (e.g., every 5 seconds)

    return () => {
      // Clear the interval on component unmount
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="dashboard-container" className="flex w-screen h-screen">
      <div
        id="gradient-dashboard"
        className="flex flex-col w-[55%] bg-blue-950 p-16"
        style={{
          background:
            "radial-gradient(at 0% 100%, rgba(31,169,17,6) 12%, rgba(47,21,208,1) 55%, rgba(0,0,0,1) 90%)",
        }}
      >
        <div id="dashboard-body" className="flex flex-col mt-5 w-full">
          <div id="dashboard-notification" className="flex w-full space-x-10">
            <div
              id="notification-info"
              className="flex flex-col items-start text-white space-y-2 w-[35%] flex-shrink-0"
            >
              <img src={BellIcon} alt="Notification Bell" />
              <div className="text-3xl font-medium">
                Get notified when a highly correlated whale makes a move
              </div>
              <div className="opacity-70">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </div>
            </div>
            <div
              id="notification-carousel"
              className="flex overflow-hidden space-x-6"
            >
              <NotificationCardAddress />
              <NotificationCardAlert />
              <NotificationCardTime />
              <NotificationCardTime />
              {/* <NotificationCardTime />
              <NotificationCardTime /> */}
            </div>
          </div>
          <div id="dashboard-whales"></div>
        </div>
        <div id="dashboard-footer" className="flex"></div>
      </div>
      <div id="signUp-container">SignUp</div>
    </div>
  );
};

export default Dashboard;

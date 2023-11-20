import React from "react";

const Dashboard = () => {
  return (
    <div id="dashboard-container" className="flex w-screen h-screen">
      <div
        id="gradient-dashboard"
        className="flex flex-col w-3/5 bg-blue-950"
        style={{
          background:
            "linear-gradient(45deg, #1FA911 5.01%, #2F15D0 70%, #000000 0%)",
        }}
      >
        Dashboard
      </div>
      <div id="signUp-container">SignUp</div>
    </div>
  );
};

export default Dashboard;

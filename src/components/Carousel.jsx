import React from "react";
import NotificationCardAddress from "../components/NotificationCardAddress";
import NotificationCardAlert from "../components/NotificationCardAlert";
import NotificationCardTime from "../components/NotificationCardTime";
import "../pages/Dashboard.styles.css";

const Carousel = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <NotificationCardAddress />
        <NotificationCardAlert />
        <NotificationCardTime />
        <NotificationCardTime />
        <NotificationCardAddress />
        <NotificationCardAlert />
        <NotificationCardTime />
        <NotificationCardTime />
        <NotificationCardAddress />
        <NotificationCardAlert />
        <NotificationCardTime />
        <NotificationCardTime />
      </div>
    </div>
  );
};

export default Carousel;

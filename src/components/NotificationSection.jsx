// NotificationSection.jsx

import React from "react";
import BellIcon from "../assets/Bell.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import NotificationCardAddress from "../components/NotificationCardAddress";
import NotificationCardAlert from "../components/NotificationCardAlert";
import NotificationCardTime from "../components/NotificationCardTime";

const NotificationSection = () => {
  return (
    <div
      id="dashboard-notification"
      className="flex flex-col md:flex-row w-full md:space-x-28 space-y-10 md:space-y-0"
    >
      <div
        id="notification-info"
        className="flex flex-col items-start text-white space-y-2 md:w-[40%] w-full flex-shrink-0"
      >
        <img src={BellIcon} alt="Notification Bell" />
        <div className="text-[32px] font-medium leading-10">
          Get notified when a highly correlated whale makes a move
        </div>
        <div className="opacity-70 leading-[20px]">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
      </div>
      <div
        id="notification-carousel"
        className="flex overflow-hidden space-x-6"
      >
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={1}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
              centeredSlides: false,
            },
          }}
        >
          <SwiperSlide>
            <NotificationCardAddress />
          </SwiperSlide>
          <SwiperSlide>
            <NotificationCardAlert />
          </SwiperSlide>
          <SwiperSlide>
            <NotificationCardTime />
          </SwiperSlide>
          <SwiperSlide>
            <NotificationCardTime />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NotificationSection;

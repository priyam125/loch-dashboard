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
      className="flex flex-col md:flex-row w-full 2xl:space-x-16 3xl:space-x-28 xl:space-x-12 md:space-x-12  space-y-10 md:space-y-0 md:justify-between"
    >
      <div
        id="notification-info"
        className="flex flex-col items-start text-white space-y-2 2xl:w-full 3xl:w-[90%] w-full"
      >
        <img src={BellIcon} alt="Notification Bell" />
        <div className="text-[32px] md:text-[28px] lg:text-[40px] xl:text-[28px] 2xl:text-[32px] font-medium leading-10">
          Get notified when a highly correlated whale makes a move
        </div>
        <div className="opacity-70 leading-[20px] xl:text-sm 2xl:text-base">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
      </div>
      <div id="notification-carousel" className="flex overflow-hidden">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={2}
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
              spaceBetween: 60,
              centeredSlides: false,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 50,
              centeredSlides: false,
            },
            450: {
              spaceBetween: 5,
              slidesPerView: 2,
            },
            640: {
              spaceBetween: 5,
              slidesPerView: 3,
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

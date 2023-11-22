import React, { useEffect, useState } from "react";
import BellIcon from "../assets/Bell.svg";
import NotificationCardAddress from "../components/NotificationCardAddress";
import NotificationCardAlert from "../components/NotificationCardAlert";
import NotificationCardTime from "../components/NotificationCardTime";
import { Swiper, SwiperSlide } from "swiper/react";
import DashboardImage from "../assets/Dashboard2.png";
import EyeIcon from "../assets/Eye.svg";
import FooterIcon from "../assets/Footer.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import NotificationSection from "../components/NotificationSection";
import TestimonialCard from "../components/TestimonialCard";

const cards = [
  <NotificationCardAddress key="address" />,
  <NotificationCardAlert key="alert" />,
  <NotificationCardTime key="time" />,
];

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailSubmit = () => {
    // Regular expression for basic email validation
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{0,9}$/;

    // Check if the email matches the regex
    if (emailRegex.test(email)) {
      // Redirect to the welcome page
      window.location.href = "https://app.loch.one/welcome";
    } else {
      // Show an alert for invalid email
      alert("Please enter a valid email");
    }
  };

  return (
    <div
      id="dashboard-container"
      className="flex flex-col xl:flex-row w-screen h-screen"
    >
      <div
        id="gradient-dashboard"
        className="flex flex-col xl:w-[55%] w-full bg-blue-950 xl:p-6 2xl:p-14 lg:p-16 lg:pr-0 md:p-8 p-4 2xl:pr-0 pr-4"
        style={{
          background:
            "radial-gradient(at 0% 100%, rgba(31,169,17,6) 12%, rgba(47,21,208,1) 55%, rgba(0,0,0,1) 90%)",
        }}
      >
        <div
          id="dashboard-body"
          className="flex flex-col mt-5 w-full space-y-10"
        >
          <NotificationSection />
          <div
            id="dashboard-whales"
            className="w-full flex flex-col md:flex-row md:justify-between space-y-10 md:space-y-0"
          >
            <div className="h-full lg:w-3/4 xl:w-full 3xl:w-2/5 w-full md:w-[90%]">
              <img
                src={DashboardImage}
                alt="Dashboard"
                className="w-full h-full"
              />
            </div>
            <div
              id="whales-info"
              className="flex flex-col justify-start items-end space-y-2 md:space-y-4 lg:space-y-6 xl:space-y-2 text-white text-right lg:pr-16 xl:pr-4 2xl:pr-16"
            >
              <div>
                <img src={EyeIcon} alt="Eye" />
              </div>
              <div className="text-[32px] xl:text-[28px] font-medium md:w-[70%] lg:w-3/4 xl:w-4/5 2xl:3/5 w-[95%] leading-10 md:text-[28px] lg:text-[40px]">
                Watch what the whales are doing
              </div>
              <div className="opacity-70 self-end lg:w-3/4 2xl:w-[90%] 3xl:w-3/4 xl:text-sm 2xl:text-base leading-[20px] md:w-[80%]">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </div>
            </div>
          </div>
        </div>
        <div id="dashboard-footer" className="flex flex-col my-auto">
          <div className="self-end font-medium text-white text-2xl p-2">
            Testimonials
          </div>
          <div className="h-full w-full border-[0.5px] bg-#E5E5E6 mx-4"></div>
          <div className="flex mt-8 space-x-8">
            <div className="flex items-end mr-4 h-full w-28">
              <img src={FooterIcon} alt="Footer" />
            </div>
            <div className="flex overflow-hidden space-x-12">
              <Swiper
                spaceBetween={30}
                centeredSlides={false}
                slidesPerView={1}
                freeMode={true}
                loop={true}
                pagination={false}
                navigation={false}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                breakpoints={{
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: false,
                  },
                }}
              >
                <SwiperSlide>
                  <TestimonialCard
                    name="Jack F"
                    designation="Ex Blackrock PM"
                    review={`“Love how Loch integrates portfolio analytics and whale watching into
                    one unified app.”`}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard
                    name={"Yash P"}
                    designation={"Research, 3poch Crypto Hedge Fund"}
                    review={`“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard
                    name={"Shiv S"}
                    designation={"Co-Founder Magik Labs"}
                    review={`“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”`}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div
        id="signUp-container"
        className="flex flex-col m-auto items-center space-y-8 py-8 xl:py-0"
      >
        <div className="md:text-[42px] text-4xl font-medium text-[#B0B1B3] xl:w-[70%] w-[85%] leading-[50px] m-auto">
          Sign up for exclusive access.
        </div>
        <div className="xl:w-[70%] w-[85%] flex flex-col space-y-6">
          <input
            className="py-5 px-6 w-full border-2 border-[#E5E5E6] rounded-lg outline-none"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleEmailSubmit}
            className="bg-black text-white py-5 px-7 rounded-lg font-medium"
          >
            Get Started
          </button>
        </div>
        <div className="font-semibold text-[#19191A] md:text-xl lg:text-lg p-4 md:p-0 flex items-center justify-center text-center">
          You’ll receive an email with an invite link to join.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

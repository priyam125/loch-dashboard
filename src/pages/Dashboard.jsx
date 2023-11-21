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
        <div
          id="dashboard-body"
          className="flex flex-col mt-5 w-full space-y-10"
        >
          <NotificationSection />
          <div id="dashboard-whales" className="w-full flex justify-between">
            <div className="h-full w-1/2">
              <img src={DashboardImage} alt="Dashboard" />
            </div>
            <div
              id="whales-info"
              className="flex flex-col justify-start items-end space-y-2 text-white pl-20 text-right"
            >
              <div>
                <img src={EyeIcon} alt="Eye" />
              </div>
              <div className="text-[40px] font-medium self-end">
                Watch what the whales are doing
              </div>
              <div className="opacity-70 self-end">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </div>
            </div>
          </div>
        </div>
        <div id="dashboard-footer" className="flex flex-col my-auto">
          <div className="self-end font-medium text-white text-xl">
            Testimonials
          </div>
          <div className="h-full w-full border-[0.5px] bg-#E5E5E6 mx-4"></div>
          <div className="flex mt-8">
            <div className="flex items-end mr-4">
              <img src={FooterIcon} alt="Footer" />
            </div>
            <div className="flex overflow-hidden space-x-12">
              {/* <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
               */}
              <Swiper
                spaceBetween={30}
                centeredSlides={false}
                slidesPerView={2}
                freeMode={true}
                loop={true}
                pagination={false}
                navigation={false}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
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
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div
        id="signUp-container"
        className="flex flex-col m-auto items-center space-y-8"
      >
        <div className="text-[42px] font-medium text-[#B0B1B3] w-[70%] leading-[50px]">
          Sign up for exclusive access.
        </div>
        <div className="w-[70%] flex flex-col space-y-6">
          <input
            className="py-5 px-6 w-full border-2 border-[#E5E5E6] rounded-lg outline-none"
            placeholder="Your email address"
          />
          <button className="bg-black text-white py-5 px-7 rounded-lg font-medium">
            Get Started
          </button>
        </div>
        <div className="font-semibold text-[#19191A] text-lg">
          You’ll receive an email with an invite link to join.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

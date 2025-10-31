import React from "react";
import { FaClock, FaCalendarAlt, FaLanguage, FaVideo } from "react-icons/fa";
const TopDetails = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="lg:w-[60%] w-full aspect-video rounded-xl flex  justify-center  gap-5 flex-wrap ">
        <wistia-player media-id="fj79lqindg" aspect="1.7777777777777777"></wistia-player>
      </div>
    </div>
  );
};

export default TopDetails;

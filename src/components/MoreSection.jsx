import React from "react";
import SuccessfulConsultancies from "../assets/images/SuccessfulConsultancies.jpg"
import SuccessfulIPOListings from "../assets/images/SuccessfulIPOListings.png"
import StatesPresence from "../assets/images/StatesPresence.png"
import IPOsInPipeline from "../assets/images/IPOsInPipeline.png"

const MoreSection = ({handleClickOnContactForm}) => {
  const moreSectoinPoints = [
    {
      icon: SuccessfulConsultancies,
      number: "7500+",
      text: "7500+ Successful Consultancies",
    },
    {
      icon: SuccessfulIPOListings,
      number: "137+",
      text: "137+ Successful IPO Listings",
    },
    {
      icon: StatesPresence,
      number: "20+",
      text: "20+ States Presence",
    },
    {
      icon: IPOsInPipeline,
      number: "20+",
      text: "20+ IPOs in Pipeline",
    },
  ];
  return (
    <div className="py-20 text-center px-6 bg-white my-10">
      <p className="text-3xl md:text-4xl font-bold poppins monserrat mb-10">
        More About Team India IPO
      </p>
      <div className="flex flex-wrap justify-center items-center max-w-7xl gap-6  mx-auto">
        {moreSectoinPoints.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl w-full md:w-auto lg:min-w-[350px] flex flex-col justify-center items-center shadow-md shadow-gray-600  hover:-translate-y-2.5 p-8 transition duration-500"
          >
            <div className="text-5xl h-[150px] md:h-[100px] mb-4">
              <img src={item.icon} alt="" className="h-full" />
            </div>
            <h3 className="text-[#dd59d] text-3xl font-bold mb-2">
              {item.number}
            </h3>
            <p className="italic font-bold poppins text-gray-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <button onClick={handleClickOnContactForm} className="mt-12 buttonAnimation border-none w-full font-bold sm:w-[50%] sora bg-[#2c65ca] cursor-pointer border sm:text-lg text-[18px] hover:-translate-y-2.5 hover:bg-[#5b94eb] duration-500 text-white py-4 px-5 rounded-full transition">
        Check IPO Eligibility Now
      </button>
    </div>
  );
};

export default MoreSection;

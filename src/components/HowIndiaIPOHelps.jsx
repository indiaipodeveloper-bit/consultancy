import React from "react";
import DRHPCompliance from "../assets/images/DRHPCompliance.png";
import valuation from "../assets/images/ValuationStructuring.png"
import IPOReadinessCheck from "../assets/images/IPOReadinessCheck.png"
import ListingPostListingSupport from "../assets/images/ListingPostListingSupport.png"

const HowIndiaIPOHelps = () => {
  const reasons = [
    {
      text: " IPO Readiness Check – Find out if your company qualifies",
      icon: IPOReadinessCheck,
    },
    {
      text: " Valuation & Structuring – Determine your company’s market worth",
      icon: valuation,
    },
    {
      text: " DRHP & Compliance – Complete regulatory documentation and filings",
      icon: DRHPCompliance,
    },
    {
      text: " Listing & Post-Listing Support – Seamless coordination with exchanges",
      icon: ListingPostListingSupport,
    },
  ];
  return (
    <div className="py-16 px-2.5 w-full bg-[#f6f6f6]  mx-auto text-center">
      <div className="px- max-w-5xl  mx-auto text-center">
        <div className="font-extrabold text-2xl monserrat md:text-4xl poppins">
          <p className=" font-bold monserrat">How India IPO Helps You</p>
          <p className="font-bold monserrat">End-to-End IPO Advisory. One Expert Team.</p>
          <p className="text-xl mt-2.5 mb-10">We simplify the entire process - from eligibility to listing:</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div
              key={r.text}
              className="p-6 flex-wrap overflow-hidden justify-center bg-white poppins shadow-md shadow-gray-500 rounded-xl gap-y-2.5  flex items-center   gap-x-5  sm:flex-nowrap text-center sm:text-start sm:justify-start"
            >
              <img src={r.icon} alt="" className="md:h-[70px] h-[150px] aspect-square transition-all duration-1000 " />
              <p className="text-lg  font-medium">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowIndiaIPOHelps;

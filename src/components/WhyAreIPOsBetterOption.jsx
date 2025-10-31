import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyAreIPOsBetterOption = () => {
  const points = [
    "Open for All, Whether It's an SME or Mainboard Company",
    "Make Future Fundraising Smooth and Simple",
    "Provides Stronger Brand and Market Positioning",
    "High Investor Confidence and Visibility",
    "Immediate Liquidity for Promoters and Investors",
    "Faster Capital Infusion Than Private Alternatives",
    "Create Instant Exit Routes for Investors",
  ];
  return (
    <div className="mt-2.5 shadow-2xl px-6 py-10 text-center">
      <p className="text-3xl md:text-4xl font-extrabold mb-8 poppins">
        Why are IPOs a Better Option to raise <br /> funds than Other Channels?
      </p>
      <ul className="max-w-2xl py-10 font-semibold bg-white px-2.5 flex flex-col gap-y-2.5 poppins rounded-2xl shadow-2xl mx-auto text-left">
        {points.map((item) => (
          <li key={item} className="flex mb-2.5 items-center gap-2">
            <FaCheckCircle className="text-[#217bff] text-sm sm:text-lg  md:text-xl flex-shrink-0 transition-all duration-300" />{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyAreIPOsBetterOption;

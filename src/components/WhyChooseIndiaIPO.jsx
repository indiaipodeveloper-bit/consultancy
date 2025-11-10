import React from "react";

const WhyChooseIndiaIPO = ({handleClickOnContactForm}) => {
  const points = [
    "8+ years of SME IPO experience",
    " Proven track record of successful listings",
    " Dedicated compliance and documentation team",
    "Transparent, result-driven advisory",
  ];
  return (
    <div className="bg-gradient-to-b from-[#0a3757] via-[#0a3757] to-[#145c8a] text-white  py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="text-3xl md:text-4xl sora font-bold mb-4">
          <p className="poppins">Why Choose India IPO?</p>
        </div>

        <div className="flex justify-between items-center flex-col   gap-2.5 text-left  mb-10">
          {points.map((text, idx) => (
            <div key={idx} className="flex md:w-[40%] w-full items-start gap-3 text-base">
              <span className="text-[#217bff] text-xl">★</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <button onClick={handleClickOnContactForm} className="border-none buttonAnimation font-bold w-full my-5 sm:w-[50%] sora bg-[#2c65ca] cursor-pointer border sm:text-lg text-[18px] hover:-translate-y-2.5 hover:bg-[#5b94eb] duration-500 text-white py-4 px-5 rounded-full transition">
          Check IPO Eligibility Now
        </button>
      </div>
    </div>
  );
};

export default WhyChooseIndiaIPO;

import React from "react";
import { FaCheck } from "react-icons/fa";

const WhyConsider = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a3757] via-[#0a3757] to-[#145c8a] text-white py-20 text-center px-4">
      <div className="font-semibold w-full sm:w-[60%] sora flex flex-col mx-auto  gap-2.5 mb-4">
        <p className="text-2xl md:text-4xl poppins">Why Consider an IPO? </p>
        <p className="text-lg">Raise Funds. Build Credibility. Grow Faster.</p>
        <p className="">
          Going public isn’t just for large corporations - India’s SME platform
          enables profitable mid-sized companies to raise funds and strengthen
          their market position.
        </p>
      </div>
      <p className="text-[#f8e71c] text-lg my-5 font-bold">
        With an SME IPO, you can:
      </p>
      <div className="flex w-full my-10 xl:w-[70%]  m-auto flex-wrap  justify-center  gap-7 gap-x-20  mb-8">
        {[
          "Access new growth capital",
          " Enhance your brand image and investor trust",
          "Strengthen your balance sheet",
          "Expand your business operations confidently",
        ].map((text) => (
          <div
            key={text}
            className="bg-[#0e2d45] sm:text-xl flex-shrink-0 text-start text-md px-6 py-3 rounded-lg flex font-semibold items-center gap-2 gap-x-2.5 w-full  sm:w-[40%]"
          >
            <FaCheck className="text-green-400" /> <p className="">{text}</p>
          </div>
        ))}
      </div>
      <p className="text-white text-2xl poppins md:text-4xl font-semibold">
        India IPO helps you navigate every step of the journey with ease and
        transparency.
      </p>

      <button className="my-10 border-none w-full sm:w-[50%] bg-[#2c65ca] cursor-pointer border sm:text-lg text-[18px] hover:-translate-y-2.5 hover:bg-[#5b94eb] duration-500 text-white font-semibold py-4 px-5 rounded-full transition">
        Book Free Consultation
      </button>
    </div>
  );
};

export default WhyConsider;

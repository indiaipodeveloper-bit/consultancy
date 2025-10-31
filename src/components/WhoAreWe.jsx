import React from "react";

const WhoAreWe = () => {
  return (
    <div className="mx-auto px-4 py-10 flex flex-col  items-start gap-x-10 ">
      <p className="text-3xl md:text-4xl text-black my-2.5 font-extrabold poppins text-center m-auto">
        Who Are We?
      </p>
      <div className="flex flex-wrap justify-center gap-5 w-full py-5">
        <div className="w-full sm:w-[60%] text-start rasa px-2.5  my-auto space-y-6 text-[17px] font-medium">
          <p className="text-xl">
            India IPO is a powerhouse of expertise and brilliance, driving
            businesses and entrepreneurs forward through every step of their
            initial public offering (IPO) journey. With decades of rich
            experience across investment banking, capital markets, and corporate
            strategy, our goal is to guide companies & their founders to grow
            faster, raise funds smartly, and unlock new opportunities in the
            market.
          </p>
          <p className="text-xl">
            Specializing in both Mainboard and SME IPOs, the team of India IPO -
            the best IPO consultant in India - relentlessly demonstrates
            actionable strategies designed to maximize valuation and unlock
            liquidity. Having guided over 7,500 companies to market leadership,
            our unparalleled strategic fundraising and scale-up acumen sets us
            apart.
          </p>
          <p className="text-xl">
            Our IPO strategy and execution leadership & support team understands
            the challenges and pain points faced by businesses and founders,
            spanning the entire IPO lifecycle. This helps us serve as the
            definitive authority in transforming business dreams into publicly
            listed successes. We support innovation, transparency, and long-term
            value. We provide practical guidance and proven methods that help
            companies become IPO-ready faster and execute their listing
            smoothly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;

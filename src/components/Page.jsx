import Footer from "./Footer";
import FAQs from "./FAQs";
import WhyAreIPOsBetterOption from "./WhyAreIPOsBetterOption";
import MoreSection from "./MoreSection";
import Slider from "./YoutubeSlider";
import AllYouNeed from "./WhyConsider";
import HowIndiaIPOHelps from "./HowIndiaIPOHelps";
import WhoAreWe from "./WhoAreWe";
import WhyChooseIndiaIPO from "./WhyChooseIndiaIPO";
import TopDetails from "./TopDetails";
import YoutubeSlider from "./YoutubeSlider";
import WhyConsider from "./WhyConsider";
import ContactForm from "./ContactForm";
import { useRef } from "react";

export default function Pag() {
  const ContactFormRef = useRef(null);
  const handleClickOnContactForm = () => {
    ContactFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" text-gray-800 overflow-hidden">
      <div className="py-6 text-center">
        <div className=" mx-auto px-4">
          <h1 className="text-4xl w-full lg:w-[50%] m-auto  md:text-4xl font-bold mb-4">
            <p className="poppins">
              Is
              <span className="text-[#2c65ca]"> Your Business</span> Ready to Go
              <span className="text-[#2c65ca]"> Public </span>
              <span className="">With SME IPO?</span>
            </p>
          </h1>

          <div className="text-md  sm:text-lg mb-6 w-full sm:w-[60%] m-auto font-semibold sora">
            <p className="">
              If your company’s turnover is ₹50 crore or more, you may already
              be eligible for an SME IPO. Unlock growth capital, credibility,
              and visibility with India IPO - your trusted SME listing partner.
            </p>
          </div>
          <TopDetails />

          <button
            onClick={handleClickOnContactForm}
            className="my-10 buttonAnimation border-none w-full font-bold sm:w-[50%] sora bg-[#2c65ca] cursor-pointer border sm:text-lg text-[18px] hover:-translate-y-2.5 hover:bg-[#5b94eb] duration-500 text-white py-4 px-5 rounded-full transition"
          >
            Check IPO Eligibility Now
          </button>
        </div>
      </div>

      <WhyConsider handleClickOnContactForm={handleClickOnContactForm} />

      <HowIndiaIPOHelps />

      <WhyChooseIndiaIPO handleClickOnContactForm={handleClickOnContactForm} />

      <WhoAreWe />

      {/* youtbe videos Section */}
      <div className="bg-gradient-to-b from-[#0a3757] via-[#0a3757] to-[#145c8a] py-20 flex flex-col  text-white justify-start gap-y-2.5 p-5 text-center my-5">
        <h2 className="text-3xl sm:text-3xl lg:text-5xl  poppins font-bold">
          Moments of Success
        </h2>
        <p className="text-yellow-500">
          Check out Glimpes from Our Listing Events & What our Mentees Have to
          Say:
        </p>

        <YoutubeSlider />
      </div>

      {/* More About India IPO */}
      <MoreSection handleClickOnContactForm={handleClickOnContactForm} />

      <WhyAreIPOsBetterOption />

      <div className="bg-gradient-to-b from-[#0a3757] via-[#0a3757] to-[#145c8a] py-10 px-6">
        <p className="text-3xl md:text-4xl monserrat text-white poppins font-bold text-center mb-8">
          Frequently Asked Questions
        </p>
        <FAQs handleClickOnContactForm={handleClickOnContactForm} />
      </div>

      <ContactForm ContactFormRef={ContactFormRef} />

      <Footer />
    </div>
  );
}

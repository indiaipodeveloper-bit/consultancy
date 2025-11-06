import { useState } from "react";
import axios from "axios";
import { BackendUrl } from "../assets/constansts";
import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    businessTurnover: "",
    fundraisingTimeline: "",
    preferredCallTime: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    townCity: "",
    companyName: "",
  });

  const formDone = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.businessTurnover) {
      alert("business turnover is required");
      return false;
    }
    if (!formData.fundraisingTimeline) {
      alert("Fund Raising Timeline is required");
      return false;
    }
    if (!formData.preferredCallTime) {
      alert("Call Time  is required");
      return false;
    }
    if (!formData.fullName) {
      alert("Full Name is required");
      return false;
    }
    if (!formData.phoneNumber) {
      alert("Phone Number is required");
      return false;
    }

    if (
      formData.phoneNumber
        .split("")
        .every((e) => typeof parseInt(e) === Number) ||
      formData.phoneNumber.length < 10
    ) {
      alert("Enter a valid Phone Number");
      return false;
    }

    if (!formData.email) {
      alert("Email is required");
      return false;
    }

    if (!formData.email.includes("@")) {
      alert("Enter a valid email");
      return false;
    }

    if (!formData.townCity) {
      alert("town / City is required");
      return false;
    }
    if (!formData.companyName) {
      alert("Company Name is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    const res = await axios.post(`${BackendUrl}/api/sme-ipo/lead`, formData, {
      withCredentials: true,
    });
    if (res.status == 200) {
      formDone.current.click();
      setFormData({
        businessTurnover: "",
        fundraisingTimeline: "",
        preferredCallTime: "",
        fullName: "",
        phoneNumber: "",
        email: "",
        townCity: "",
        companyName: "",
      });
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-2xl rounded-2xl formShadow mx-auto">
        {/* Header */}
        <div className=" rounded-2xl  p-8 mb-6">
          <div className="text-center">
            <p className="text-2xl font-semibold  text-gray-900">
              Check if Your Company Qualifies
            </p>
            <p className="text-2xl font-semibold text-gray-900">
              for an SME IPO
            </p>
          </div>
        </div>

        {/* Business Turnover */}
        <div className="rounded-2xl  p-6 mb-4">
          <label className="block font-bold text-gray-900 mb-4">
            Business Turnover (₹) <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="businessTurnover"
                value="less-than-50"
                checked={formData.businessTurnover === "less-than-50"}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                Less Than 50 Crore
              </span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="businessTurnover"
                value="more-than-50"
                checked={formData.businessTurnover === "more-than-50"}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                More Than 50 Crore
              </span>
            </label>
          </div>
        </div>

        {/* Fundraising Timeline */}
        <div className="rounded-2xl   p-6 mb-4">
          <label className="block font-bold text-gray-900 mb-4">
            When are you planning to raise funds?{" "}
            <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="fundraisingTimeline"
                value="within-3-months"
                checked={formData.fundraisingTimeline === "within-3-months"}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                Within 3 months
              </span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="fundraisingTimeline"
                value="within-6-months"
                checked={formData.fundraisingTimeline === "within-6-months"}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                Within 6 months
              </span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="fundraisingTimeline"
                value="just-exploring"
                checked={formData.fundraisingTimeline === "just-exploring"}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                Just exploring
              </span>
            </label>
          </div>
        </div>

        {/* Preferred Call Time */}
        <div className="rounded-2xl p-6 mb-4">
          <label className="block font-bold text-gray-900 mb-4">
            Preferred Time for a Call <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            {[
              { label: "Morning (10 AM - 12 PM)", value: "morning" },
              { label: "Afternoon (12 PM - 4 PM)", value: "afternoon" },
              { label: "Evening (4 PM - 6 PM)", value: "evening" },
            ].map((item) => (
              <label
                key={item.value}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="radio"
                  name="preferredCallTime"
                  value={item.value}
                  checked={formData.preferredCallTime === item.value}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="rounded-2xl   p-6 mb-4">
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-900">
              Contact Information
            </p>
            <p className=" text-gray-500">Please answer the below questions</p>
          </div>

          {/* Full Name */}
          <div className="mb-5">
            <label className="block font-bold text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-5">
            <label className="block font-bold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              minLength={10}
              maxLength={10}
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block  font-bold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
            />
          </div>

          {/* Town/City */}
          <div className="mb-5">
            <label className="block  font-bold text-gray-700 mb-2">
              Town/City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="townCity"
              value={formData.townCity}
              onChange={handleChange}
              placeholder="Enter your town or city"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block  font-bold text-gray-700 mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter your company name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
            />
          </div>
        </div>

        {/* Submit Section */}
        <div className="rounded-2xl p-6 flex flex-col sm:flex-row justify-center items-center">
          <AlertDialog className="">
            <AlertDialogTrigger asChild>
              <Button variant="outline" ref={formDone} className={"hidden"}>
                Show Dialog
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className={"mx-auto text-3xl"}>
                  Thank You !
                </AlertDialogTitle>
                <AlertDialogDescription
                  className={"text-md font-semibold text-black text-center"}
                >
                  We've received your details you will be contacted soon by our
                  experts .
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  className={
                    "bg-[#2c65ca] hover:bg-[#5b94eb] mx-auto cursor-pointer w-[30%]"
                  }
                >
                  Okay
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <button
            onClick={() => {
              if (validateForm()) {
                handleSubmit();
              }
            }}
            className="w-full font-bold sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white cursor-pointer py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Check Eligibility Now
          </button>
        </div>
      </div>
    </div>
  );
}

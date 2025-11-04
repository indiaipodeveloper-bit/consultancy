import { useState } from "react";
import {FaFileWaveform} from "react-icons/fa6"
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const handleClear = () => {
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <div className="flex items-center mb-6">
            <div className="w-12 flex justify-center items-center h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mr-4"><FaFileWaveform className="text-white text-2xl" /></div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">
                Check if Your Company Qualifies
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                for an SME IPO
              </p>
            </div>
          </div>
        </div>

        {/* Business Turnover */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-4">
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-4">
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-4">
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-900">
              Contact Information
            </p>
            <p className="text-sm text-gray-500">
              Please answer the below questions
            </p>
          </div>

          {/* Full Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
            />
          </div>

          {/* Town/City */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Submit Form
          </button>
          <button
            onClick={handleClear}
            className="w-full sm:w-auto text-gray-600 hover:text-gray-900 font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            Clear Form
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Powered by Modern Forms</p>
        </div>
      </div>
    </div>
  );
}

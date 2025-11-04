import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    businessTurnover: '',
    fundraisingTimeline: '',
    preferredCallTime: '',
    fullName: '',
    phoneNumber: '',
    email: '',
    townCity: '',
    companyName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log(formData)
    
  };

  const handleClear = () => {
    setFormData({
      businessTurnover: '',
      fundraisingTimeline: '',
      preferredCallTime: '',
      fullName: '',
      phoneNumber: '',
      email: '',
      townCity: '',
      companyName: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Business Contact Form</h1>
              <p className="text-sm text-gray-500 mt-1">Please fill out all required fields</p>
            </div>
          </div>
          <div className="flex items-center text-xs text-gray-500 bg-gray-50 rounded-lg px-4 py-2">
            <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Fields marked with <span className="text-red-500 font-medium">*</span> are required</span>
          </div>
        </div>

        {/* Business Turnover */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-4">
            Business Turnover (₹) <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="businessTurnover"
                  value="less-than-50"
                  checked={formData.businessTurnover === 'less-than-50'}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">Less Than 50 Crore</span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="businessTurnover"
                  value="more-than-50"
                  checked={formData.businessTurnover === 'more-than-50'}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">More Than 50 Crore</span>
            </label>
          </div>
        </div>

        {/* Fundraising Timeline */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-4">
            When are you planning to raise funds? <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="fundraisingTimeline"
                value="within-3-months"
                checked={formData.fundraisingTimeline === 'within-3-months'}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">Within 3 months</span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="fundraisingTimeline"
                value="within-6-months"
                checked={formData.fundraisingTimeline === 'within-6-months'}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">Within 6 months</span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="fundraisingTimeline"
                value="just-exploring"
                checked={formData.fundraisingTimeline === 'just-exploring'}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">Just exploring</span>
            </label>
          </div>
        </div>

        {/* Preferred Call Time */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-4">
            Preferred Time for a Call <span className="text-red-500">*</span>
          </label>
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="preferredCallTime"
                value="morning"
                checked={formData.preferredCallTime === 'morning'}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">Morning (10 AM - 12 PM)</span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="preferredCallTime"
                value="afternoon"
                checked={formData.preferredCallTime === 'afternoon'}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">Afternoon (12 PM - 4 PM)</span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="radio"
                name="preferredCallTime"
                value="evening"
                checked={formData.preferredCallTime === 'evening'}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-gray-900">Evening (4 PM - 6 PM)</span>
            </label>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
              <p className="text-sm text-gray-500">Please answer the below questions</p>
            </div>
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

          {/* Email Address */}
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
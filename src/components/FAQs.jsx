import React from "react";

const FAQs = () => {
  return (
    <div className="max-w-4xl flex justify-center flex-col mx-auto space-y-4">
      {/* first faq */}
      <details className="bg-transparent border border-white text-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-1000">
        <summary className="font-semibold lg:text-xl transition-all duration-500 cursor-pointer">
          What is an IPO and why should my company consider it?
        </summary>
        <p className="mt-2 text-sm text-yellow-300">
          An IPO (Initial Public Offering) is when a private company offers its
          shares to the public for the first time. It helps companies to raise
          substantial capital, develop credibility in the market, generate value
          to existing stakeholders and fuel growth. IPOs enable firms to expand,
          settle debts or enhance brand credibility.
        </p>
      </details>

      {/* second faq */}
      <details className="bg-transparent border border-white text-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-1000">
        <summary className="font-semibold lg:text-xl transition-all duration-500 cursor-pointer">
          How do i know if my company is ready for an IPO?
        </summary>
        <div className="text-yellow-300">
          <p>You're IPO-ready if you have:</p>
          <ul className="list-disc px-4 font-light">
            <li className="">Consistent revenue and profitability</li>
            <li className="">Scalable business operations</li>
            <li className="">Strong governance and compliance systems</li>
            <li className="">Clear use-of-proceeds plan</li>
          </ul>
          <p>
            India IPO offers a free IPO readiness assessment to help you
            evaluate and prepare across financial, legal and strategic
            parameters.
          </p>
        </div>
      </details>

      {/* third faq */}

      <details className="bg-transparent border border-white text-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-1000">
        <summary className="font-semibold lg:text-xl transition-all duration-500 cursor-pointer">
          What are the key benefits and challenges of going public?
        </summary>
        <div className="flex w-full justify-between text-yellow-300">
          <div className="">
            <p className="font-bold">Benefits:</p>
            <ul className="list-disc px-4 font-light">
              <li className=""> Access to capital</li>
              <li className="">Better brand image</li>
              <li className="">Liquidity for shareholders</li>
              <li className="">Stronger market credibility</li>
            </ul>
          </div>

          <div className="">
            <p className="font-bold">Challenges</p>
            <ul className="list-disc px-4 font-light">
              <li className="">Regulatory compliance</li>
              <li className="">Public scrutiny</li>
              <li className="">Cost of listing and disclosures</li>
              <li className="">Managing investor expectations</li>
            </ul>
          </div>
        </div>
        <p className="font-semibold text-yellow-300">
          India IPO helps you weigh these carefully and plan accordingly.
        </p>
      </details>

      {/* fourth faq */}

      <details className="bg-transparent border border-white text-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-1000">
        <summary className="font-semibold transition-all lg:text-xl duration-500 cursor-pointer">
          How long does the IPO process usually take with the India IPO?
        </summary>
        <p className="mt-2 text-sm text-yellow-300">
          An average SME IPO requires 4-6 months between the assessment and the
          listing, whereas a Mainboard IPO may require 6-12 months. The timing
          will depend on your readiness, approvals and market conditions. India
          IPO keeps you on track with end-to-end support.
        </p>
      </details>

      {/* fifth faq */}

      <details className="bg-transparent border border-white text-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-1000">
        <summary className="font-semibold transition-all lg:text-xl duration-500 cursor-pointer">
          How does India IPO assist in the IPO Process?
        </summary>
        <div className="text-yellow-300">
          <p>India IPO provides comprehensive advisory services, including:</p>
          <ul className="list-disc px-4 font-light">
            <li className="">IPO readiness evaluation</li>
            <li className="">Due diligence & documentation</li>
            <li className="">
              Team building (merchant bankers, auditors, legal advisors)
            </li>
            <li className="">
              Regulatory filings and SEBI/NSE/BSE coordination
            </li>
            <li>Branding and investor roadshows</li>
            <li>Post-IPO compliance and governance support</li>
          </ul>
        </div>
      </details>

      {/* sixth faq */}

      <details className="bg-transparent border border-white text-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-1000">
        <summary className="font-semibold transition-all duration-500 lg:text-xl cursor-pointer">
          What makes India IPO different from other IPO consultancy firms?
        </summary>
        <div className="text-yellow-300">
          <p>
            We combine deep regulatory expertise, founder-first guidance and
            practical execution. What sets us apart:
          </p>
          <ul className="list-disc px-4 font-light text-yellow-200">
            <li className="">End-to-end IPO lifecycle support</li>
            <li className="">Access to funding & investor networks</li>
            <li className="">
              Experience with startups, MSMEs & family-run businesses
            </li>
            <li className="">
              Special asset-to-capital structuring (land, business, or legacy
              assets)
            </li>
          </ul>
        </div>
      </details>

      <button className="mt-12 buttonAnimation border-none w-full sm:w-[50%] m-auto sora bg-[#2c65ca] cursor-pointer border sm:text-lg text-[18px]hover:-translate-y-2.5 hover:bg-[#5b94eb] duration-500 text-white font-bold py-4 px-5 rounded-full transition">
        Start Your IPO Journey Today
      </button>
    </div>
  );
};

export default FAQs;

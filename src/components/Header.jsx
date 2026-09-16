// import BharatIPOLogo from "../assets/images/bharat_ipo_logo.jpg";
const BharatIPOLogo="";
const Header = ({handleClickOnContactForm}) => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="India IPO home"
        >
          <img
            src={BharatIPOLogo}
            alt="BharatIPO Logo"
            className="h-10 w-auto sm:h-12"
          />
        </button>

        <button
          type="button"
          onClick={handleClickOnContactForm}
          className="buttonAnimation rounded-full bg-[#2c65ca] px-5 py-3 text-sm font-bold text-white transition duration-500 hover:-translate-y-1 hover:bg-[#5b94eb] sm:px-7 sm:text-base"
        >
          Check IPO Eligibility
        </button>
      </div>
    </header>
  )
}

export default Header

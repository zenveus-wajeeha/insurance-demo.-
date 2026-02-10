import React, { useEffect, useState } from "react";
import zenveusLogo from "../../assets/images/Sacel with Zenveus Logo Dark.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-5 md:px-8 py-5 flex justify-between items-center rounded-full transition-all duration-300 ease-in-out
        ${isScrolled ? "bg-white shadow-md backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="flex items-center gap-0">
        <img
          src={zenveusLogo}
          alt="zenveus-logo"
          className="md:w-40 w-25 h-auto object-contain bg-transparent "
        />
      </div>

      <nav className="flex-wrap">
        <div>
          <a
            href="#"
            className="font-urbanist font-bold text-gray-700 hover:text-black p-2.5 md:text-l text-sm bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-4xl md:px-9 px-4 border border-gray-300 uppercase overflow-hidden"
          >
            Book a Call
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;

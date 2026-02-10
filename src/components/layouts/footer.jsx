import React from "react";
import zenveusLogo from "../../assets/images/Sacel with Zenveus Logo White.png";

const Footer = () => {
  return (
    <footer className="bg-[#1B1E2A] text-[#f2eee5] py-15 px-8 rounded-t-3xl w-full">
      <div className="w-full max-w-7xl flex justify-center text-center gap-16 mx-5">
        <div>
          <div className="flex items-center justify-center">
            <img
              src={zenveusLogo}
              alt="zenveus-logo"
              className="w-60 h-auto object-contain  p-8 rounded-xl bg-[#222533]" 
            />
          </div>
          <h1 className=" text-xl md:text-2xl mt-5 opacity-80">
            Ready to scale <br />
            Zenveus forward?
          </h1>
          <div className="mt-8">
            <a
              href="#"
              className="font-urbanist font-bold mx-10 py-3 px-8 bg-[#EB393C] text-[#efefef] rounded-full"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
        {/* <div className="flex md:gap-25 flex-col md:flex-row mr-130">
          <div>
            <p className="uppercase tracking-wide mb-2">Work</p>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Zenveus Platform</li>
              <li>Digital Products</li>
              <li>AI Solutions</li>
              <li>Web Applications</li>
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-wide mb-2">Connect</p>
            <ul className="space-y-1 text-sm opacity-80">
              <li>Email</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div> */}
      </div>
      <hr className="my-10 opacity-20 mx-1"></hr>
      <div className="max-w-8xl  text-xs tracking-widest opacity-70 flex gap-7 flex-col md:flex-row justify-center items-center">
        <a href="#" className="hover:underline text-sm">© 2026 Zenveus. All Rights Reserved.</a>
      </div>
    </footer>
  );
};

export default Footer;

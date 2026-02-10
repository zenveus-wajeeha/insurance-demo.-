import React from "react";
import heroImage from "../assets/images/image.png";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto">
      <div className="px-6 md:px-12 py-12 md:py-20 pb-0 bg-gradient-to-tr from-[#F4F4F2] via-[#F1E3DB] to-[#c31804] min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center">
        <div>
          <span className="py-3 border border-gray-600 rounded-xl px-3 text-xs md:text-s text-gray-800 font-serif uppercase ">
            Embedded Insurance
          </span>
          <h2 className="text-4xl font-serif mb-6 my-8 ">
            Build smarter <em className="italic">widgets</em> for modern apps.
          </h2>
          <ul className="flex gap-3 text-xs md:text-sm text-gray-600 mb-6 font-serif uppercase">
            <li>Embeddable</li>
            <li>|</li>
            <li>Customizable</li>
            <li>|</li>
            <li>Fast</li>
          </ul>

          <p className="max-w-md text-gray-700 text-sm md:text-base">
            Zenveus Widget helps you integrate powerful, customizable widgets
            into your web applications with minimal setup. Designed for
            performance, flexibility, and seamless user experience.
          </p>
        </div>
      </div>
      <div>
        <img
          src={heroImage}
          alt="Zenveus widget preview"
          className="w-full h-[300px] md:h-full object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;

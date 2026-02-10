import React, { useEffect } from "react";
import video from "../assets/video/video.mp4";
const Video = () => {
  useEffect(() => {
    const videoWrapper = document.querySelector(".video-grow-wrapper");
    const appContainer = document.querySelector(".app-container-grow");

    if (!videoWrapper || !appContainer) return;

    let latestScroll = 0;
    let ticking = false;

    const handleScroll = () => {
      latestScroll = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = latestScroll;
          const stopPoint = 250;

          let progress = scrollY / stopPoint;
          if (progress > 1) progress = 1;

          const videoMin = 60;
          const videoMax = 80;
          const videoWidth = videoMin + (videoMax - videoMin) * progress;
          videoWrapper.style.width = `${videoWidth}%`;

          const appMin = 90;
          const appMax = 100;
          const appWidth = appMin + (appMax - appMin) * progress;
          appContainer.style.width = `${appWidth}%`;

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <section className="p-12 md:px-12 py-10 md:py-16 text-center flex flex-col items-center  bg-gradient-to-tr from-[#F4F4F2] via-[#F1E3DB] to-[#c31804] animated-gradient">
    <div
      className="container-grow-wrapper mx-auto rounded-3xl overflow-hidden"
      style={{ width: "100%" }}
    >
      <section className="w-full p-12 md:px-12 py-10 md:py-16 text-center flex flex-col items-center bg-gradient-to-tr from-[#F4F4F2] via-[#F1E3DB] to-[#c31804] animated-gradient">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl ">
          <div className="w-full text-center">
            <span className="font-SemiBold py-4 rounded-xl px-4 text-xs md:text-s tracking-widest text-white uppercase w-full bg-[#d44131] ">
              Embedded Insurance
            </span>
            <h2 className="font-bold text-6xl mb-6 my-8 color-gray-800 mt-10">
              {/* Build smarter <em className="italic">widgets</em> for modern apps. */}
             Build Better. Build Faster.<br></br> Build with Zenveus.
            </h2>
            <ul className="font-Meddium flex gap-6 text-sm md:text-lg text-[#40424C] mb-6 uppercase justify-center">
              <li>Embeddable</li>
              <li>|</li>
              <li>Customizable</li>
              <li>|</li>
              <li>Fast</li>
            </ul>
          </div>
        </div>
        {/* <div className="mt-6 rounded-2xl overflow-hidden shadow-md bg-black">
        <video
          className="w-full h-[300px] sm:h-[350px] md:h-[500px] object-cover"
          controls
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div> */}
        <div
          className="video-grow-wrapper mx-auto mt-6 rounded-2xl overflow-hidden "
          style={{
            width: "80%",
          }}
        >
          <video className="w-full aspect-video object-cover" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <p className=" font-Regular max-w-3xl text-gray-700 text-md md:text-base mt-8 ">
          Zenveus Widget helps you integrate powerful, customizable widgets into
          your web applications with minimal setup. Designed for performance,
          flexibility, and seamless user experience.
        </p>
        <a
          href="#"
          className="font-urbanist font-bold py-3.5  rounded-full px-15 text-sm md:text-md text-white mt-6 bg-[#d44131] transition-all duration-300 ease-in-out hover:shadow-2xl  hover:-translate-y-1  "
        >
          Schedule a Strategy Call
        </a>
      </section>
    </div>
  );
};

export default Video;

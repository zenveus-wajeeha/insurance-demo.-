import React from "react";
import BrandNorth from "../assets/images/BrandNorth.png";
import CodeConnects from "../assets/images/Code Connects.png";
import Gigahub from "../assets/images/Gigahub.png";
import Jarvis from "../assets/images/Jarvis AI.png";
import Kayna from "../assets/images/Kayna.png";
import VanguardAi from "../assets/images/Vanguard AI.png";
const TrustedBy = () => {
  const logo = [
    { name: "BrandNorth", src: BrandNorth },
    { name: "CodeConnects", src: CodeConnects },
    { name: "Gigahub", src: Gigahub },
    { name: "Jarvis", src: Jarvis },
    { name: "Kayna", src: Kayna },
    { name: "VanguardAi", src: VanguardAi },

  ];
  return (
    <section className="w-full py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="font-urbanist font-bold flex items-center tracking-wide justify-center gap-2 text-black mb-12 ">
          <span className=" text-md md:text-lg">
            Trusted by 120+ B2B SaaS teams
          </span>
          <span className="text-lg">→</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-8 place-items-center">
          {logo.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.name}
              className="h-6 md:h-7 w-auto opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

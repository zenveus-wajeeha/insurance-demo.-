import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Peter Berm",
    role: "Founder, CTO - Kayna Innovation",
    text: "Very good communication skills and very transparent with the development process. Great at explaining technical concepts in an understandable way.",
    subtext:
      "They were reasonable and professional regarding changes in requirements as our knowledge of the space increased.",
  },
  {
    name: "Peter Berm",
    role: "Founder, CTO - Kayna Innovation",
    text: "Very good communication skills and very transparent with the development process. Great at explaining technical concepts in an understandable way.",
    subtext:
      "They were reasonable and professional regarding changes in requirements as our knowledge of the space increased.",
  },
  {
    name: "Peter Berm",
    role: "Founder, CTO - Kayna Innovation",
    text: "Very good communication skills and very transparent with the development process. Great at explaining technical concepts in an understandable way.",
    subtext:
      "They were reasonable and professional regarding changes in requirements as our knowledge of the space increased.",
  },
  {
    name: "Peter Berm",
    role: "Founder, CTO - Kayna Innovation",
    text: "Very good communication skills and very transparent with the development process. Great at explaining technical concepts in an understandable way.",
    subtext:
      "They were reasonable and professional regarding changes in requirements as our knowledge of the space increased.",
  },
  {
    name: "Peter Berm",
    role: "Founder, CTO - Kayna Innovation",
    text: "Very good communication skills and very transparent with the development process. Great at explaining technical concepts in an understandable way.",
    subtext:
      "They were reasonable and professional regarding changes in requirements as our knowledge of the space increased.",
  },
  {
    name: "Peter Berm",
    role: "Founder, CTO - Kayna Innovation",
    text: "Very good communication skills and very transparent with the development process. Great at explaining technical concepts in an understandable way.",
    subtext:
      "They were reasonable and professional regarding changes in requirements as our knowledge of the space increased.",
  },
];

export default function Testimonials() {
  const [emblaRef , emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    speed: 10,
    loop: false, 
    slidesToScroll: 1,
  });
  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };
  return (
    <section className="w-full py-20 px-6 md:px-20">
        <div className="flex justify-between items-start">
      <div>
        <span className="text-xs opacity-70 uppercase p-3 rounded-full border border-[#EB393C]">testimonials</span>
        <h1 className="font-urbanist font-bold text-3xl md:text-4xl my-8 mb-0">
          Don’t Take Our Word For It! <br />
          Hear It From Our Partners.
        </h1>
      </div>

      <div className="flex gap-3 justify-end mt-18">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
        >
          ←
        </button>

        <button
          onClick={scrollNext}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
        >
          →
        </button>
      </div>
      </div>

      <div className="overflow-hidden mt-10" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[320px] rounded-xl p-6 pb-12 bg-gray-100"
            >
              <div>
                <p className="font-urbanist font-bold text-lg mt-5">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>

              <p className="font-urbanist font-medium text-lg text-gray-700 leading-relaxed mt-4">
                {t.text}
              </p>

              {/* <span className="text-xs opacity-70">{t.subtext}</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

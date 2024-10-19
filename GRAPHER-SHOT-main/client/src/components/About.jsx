import React from "react";

export default function About() {
  return (
    <section className="w-full h-screen mt-20 md:m-0">
      <div className="flex flex-col md:flex-row h-2/3">
        {/* First div taking half width */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
          <div className="uppercase text-center">
            <h1 className="text-white font-cormorant md:text-[90px] text-[60px] leading-tight">
              About
            </h1>
            <h1 className="text-white font-cormorant  md:text-[90px] text-[60px] leading-tight md:-mt-10 -mt-5">
              Us
            </h1>
          </div>
          {/* Arrow below */}
          <div className="w-px md:h-24 h-12 bg-[#233942] -mt-3 -mb-4"></div>
          <div className="mt-4">
            <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#233942]"></div>
          </div>
        </div>

        {/* Second div taking half width */}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center ">
          <div className="max-h-[300px] md:max-w-[500px]">
            <p className="font-lato text-[18px] md:text-[20px] text-white text-center md:text-left">
              Tincidunt sagittis mollis nec suspendisse sed felis massa urna
              nec. Urna quisque blandit turpis ultrices arcu ut sed. Ultricies
              diam est aliquet porta fermentum molestie morbi libero. Ultrices
              sit in elit eget nullam sem. Urna velit imperdiet habitant in.
            </p>
          </div>
        </div>
      </div>

      {/* Div below the two horizontal divs */}
      <div className="w-full h-1/4 flex flex-col md:flex-row justify-center items-center px-6 md:px-60 mt-10 md:m-0">
        <div className="w-full md:w-1/3 h-full md:border-r-2 border-white flex flex-col justify-center items-center md:items-end">
          <div className="mb-4 md:mb-0 md:mr-5 text-center md:text-right">
            <h1 className="text-white font-cormorant text-[40px] md:text-[80px] leading-tight -mt-5 md:-mt-10">
              +10 years
            </h1>
            <p className="font-lato text-white text-[18px] md:text-[22px] m-0">
              Experience
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 h-full  md:border-r-2 border-white flex flex-col justify-center items-center md:items-end">
          <div className="mb-4 md:mb-0 md:mr-5 text-center md:text-right">
            <h1 className="text-white font-cormorant text-[40px] md:text-[80px] leading-tight -mt-5 md:-mt-10">
              +450
            </h1>
            <p className="font-lato text-white text-[18px] md:text-[22px] m-0">
              customers
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 h-full  md:border-r-2 border-white flex flex-col justify-center items-center md:items-end">
          <div className="mb-4 md:mb-0 md:mr-5 text-center md:text-right">
            <h1 className="text-white font-cormorant text-[40px] md:text-[80px] leading-tight -mt-5 md:-mt-10">
              +15K
            </h1>
            <p className="font-lato text-white text-[18px] md:text-[22px] m-0">
              portfolio photos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

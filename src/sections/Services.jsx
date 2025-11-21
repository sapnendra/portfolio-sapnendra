import React from "react";

const Services = () => {
  return (
    <>
      {/* Title Wrapper */}
      <div className="bg-white text-black">
        <div className="main-container pb-8 lg:pb-12">
          <h3>MERN Projects:</h3>
        </div>
      </div>

      {/* Porojects */}
      <div className="relative">
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>
              <h2 className="text-[8vw] md:text-5xl font-heading font-bold leading-[1]">
                Tech Terms <br /> MERN Application
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                A full-stack web application that serves as a community-driven platform for defining and sharing technology terms. Users can create, read, update, and interact with technology term definitions while building a comprehensive knowledge base. 
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[23rem] sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                02
              </span>
              <h2 className="text-[8vw] md:text-5xl font-heading font-bold leading-[1]">
                ByteBloom- <br /> <span className="md:text-4xl">Client-Acquisition Website</span>
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Client-acquisition website built with ReactJS, TailwindCSS, GSAP animations, and ExpressJS backend. Features admin panel, dark/light theme toggling, WhatsApp integration, and a clean, minimalistic design.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white text-black py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                03
              </span>
              <h2 className="text-[8vw] md:text-5xl font-heading font-bold leading-[1]">
                Portfolio- <br /> React & GSAP
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                A modern and fully responsive portfolio website built with React and GSAP animations. Showcasing projects, skills, and experience with smooth scrolling and engaging visual effects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

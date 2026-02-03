import React from "react";

const Services = () => {
  return (
    <>
      {/* Title Wrapper */}
      <section className="bg-white text-black" aria-label="MERN Stack Projects">
        <div className="main-container pb-8 lg:pb-12">
          <h2 className="text-2xl lg:text-3xl font-heading font-medium uppercase">MERN Projects:</h2>
        </div>
      </section>

      {/* Porojects */}
      <article className="relative">
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>
              <h3 className="text-[8vw] md:text-5xl font-heading font-bold leading-[1]">
                Profile Analyzer - <br /> <span className="capitalize">SaaS Application</span>
              </h3>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                A production-ready SaaS analytics platform integrating GitHub, LinkedIn, and LeetCode for comprehensive developer profile analysis. Features user authentication, subscription management, and dynamic data visualization using Next, Node.js, Express.js, MongoDB, and Chart.js.
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
              <h3 className="text-[8vw] md:text-5xl font-heading font-bold leading-[1]">
                TAANKI SHOP - <br /> <span className="capitalize">E-commerce Application</span>
              </h3>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                A complete, production-ready e-commerce application with user authentication, product management, shopping cart, wishlist, payment integration (Razorpay), and a comprehensive admin dashboard.
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
              <h3 className="text-[8vw] md:text-5xl font-heading font-bold leading-[1]">
                OSS Insights - <br /> <span className="capitalize">Software</span>
              </h3>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Open Source Software(OSS) Insights is a Next.js application that provides a user-friendly interface to explore security insights for open source packages. It integrates with the SafeDep API to fetch package information including vulnerabilities, license details, version history, and malware analysis results.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Services;

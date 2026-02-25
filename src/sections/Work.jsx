import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import projects from "../components/projectsData";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const workRef = useRef(null);
  const projectsRef = useRef(null);

  useGSAP(
    () => {
      // Horizontal scroll
      const projectsWidth = projectsRef.current.scrollWidth;
      const scrollDistance = projectsWidth - window.innerWidth + 100;

      gsap.to(projectsRef.current, {
        x: -scrollDistance,
        ease: "linear",
        scrollTrigger: {
          trigger: workRef.current,
          start: "center center",
          end: () => `+=${projectsWidth + 100}`,
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: workRef },
  );

  return (
    <>
      <section
        ref={workRef}
        className="min-h-screen bg-white text-black py-24 lg:py-40 overflow-hidden"
        aria-label="Selected Works"
      >
        {/* Title Wrapper */}
        <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
          <div className="max-w-xl">
            <h3 className="mb-3">Explore Projects</h3>
            <p className="text-lg lg:text-xl">
              A selection of my recent works showcasing my skills and expertise
              in web development and design.
            </p>
          </div>
          <GradientButton
            text="Explore All"
            link="/projects"
            className="btn-light"
          />
        </div>

        <div ref={projectsRef}>
          {/* Projects horizontal scroll */}
          <div className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6">
            {projects.map(({ id, name, image, link }) => (
              <a
                key={id}
                href={link}
                className="relative rounded-2xl w-full min-w-[340px] lg:min-w-xl h-72 lg:h-96 block overflow-hidden group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} project`}
              >
                {/* Project Image */}
                <img
                  src={image}
                  alt={`${name} — screenshot`}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Project Name */}
                <span className="absolute top-4 right-4 bg-white text-black border-2 border-black text-sm lg:text-lg uppercase leading-[1.4] font-heading px-5 py-1 rounded-full">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;

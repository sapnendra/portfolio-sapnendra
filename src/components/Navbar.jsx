import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useLocation } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  // GSAP hook
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.6,
    });
  });

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 z-30 w-full bg-black backdrop-blur-md"
        aria-label="Main navigation"
      >
        <div className="main-container py-6 flex justify-between items-center">
          {/* Logo - use span not h1 (logo is not a page heading) */}
          <Link to="/" aria-label="Home - Sapnendra Jaiswal Portfolio">
            <span className="text-4xl font-bold font-heading">SAPNENDRA</span>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menubar flex flex-col gap-1.5 cursor-pointer"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="fullscreen-menu"
          >
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            ></span>
            {/* Bottom line */}
            <span
              className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div
        id="fullscreen-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
        className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center text-3xl gap-8 transition-transform duration-500 ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
        onClick={() => setMenuOpen(false)}
      >
        <Link
          to="/"
          className="menu-link"
          tabIndex={menuOpen ? 0 : -1}
          aria-current={isActive("/") ? "page" : undefined}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="menu-link"
          tabIndex={menuOpen ? 0 : -1}
          aria-current={isActive("/projects") ? "page" : undefined}
        >
          Projects
        </Link>
        <a
          href="mailto:sapnendrajaiswal2388@gmail.com"
          className="menu-link"
          tabIndex={menuOpen ? 0 : -1}
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;

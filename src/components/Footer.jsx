import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

      {/* Footer Top */}
      <footer className="main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        <Link to="/">
          <h1 className="text-4xl font-bold md:w-56">SAPNENDRA</h1>
        </Link>
        <div>
          <h5 className="font-medium mb-5">Services</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>Static Website Building</li>
            <li>Dynamic Website Building</li>
            <li>Full-Stack Website Building</li>
            <li>E-Commerce Website Building</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Accessibility</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>Mon - Fri: 9:00 - 5:00</li>
            <li>24/7 WhatsApp & Email</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-5">Contact</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li><a href="mailto:sapnendrajaiswal2388@gmail.com">sapnendrajaiswal2388@gmail.com</a></li>
            <li>+91 9685238884</li>
          </ul>
        </div>
      </footer>

      {/* Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-20"></div>

      {/* Footer Bottom */}
      <div className="main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8 max-md:text-center">
        <div className="text-base lg:text-lg">
          © 2025 ANSAP | All rights reserved
        </div>
        <div className="flex gap-3 justify-center md:justify-end">
          <a href="https://www.linkedin.com/in/sapnendra/">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.67481 6.25003C8.67447 6.91307 8.41076 7.54882 7.94169 8.01743C7.47261 8.48604 6.8366 8.74911 6.17356 8.74878C5.51051 8.74845 4.87476 8.48474 4.40615 8.01566C3.93755 7.54659 3.67447 6.91057 3.67481 6.24753C3.67514 5.58449 3.93885 4.94874 4.40792 4.48013C4.877 4.01152 5.51301 3.74845 6.17605 3.74878C6.8391 3.74911 7.47485 4.01282 7.94346 4.4819C8.41206 4.95097 8.67514 5.58699 8.67481 6.25003ZM8.74981 10.6H3.7498V26.25H8.74981V10.6ZM16.6498 10.6H11.6748V26.25H16.5998V18.0375C16.5998 13.4625 22.5623 13.0375 22.5623 18.0375V26.25H27.4998V16.3375C27.4998 8.62503 18.6748 8.91253 16.5998 12.7L16.6498 10.6Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://github.com/sapnendra" aria-label="GitHub">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="false"
            >
              <title>GitHub</title>
              <path
                d="M12 .296a12 12 0 00-3.793 23.395c.6.11.82-.26.82-.58 0-.287-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.762-1.605-2.665-.303-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.219-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.839 1.235 1.909 1.235 3.219 0 4.61-2.803 5.624-5.475 5.92.43.37.814 1.102.814 2.222 0 1.606-.014 2.902-.014 3.293 0 .32.218.694.825.576A12 12 0 0012 .296z"
                fill="white"
              />
            </svg>
          </a>
          <a href="">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5 15C27.5 8.1 21.9 2.5 15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.05 6.8 26.0875 12.5 27.25V18.75H10V15H12.5V11.875C12.5 9.4625 14.4625 7.5 16.875 7.5H20V11.25H17.5C16.8125 11.25 16.25 11.8125 16.25 12.5V15H20V18.75H16.25V27.4375C22.5625 26.8125 27.5 21.4875 27.5 15Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

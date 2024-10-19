import React from "react";
import heroImage from "../assets/images/hero.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import CustomButton from "./reusableComponents/CustomButton";

/**
 * The Hero component is the main introductory section of the page.
 * It includes a background image, a title, a description, social media icons, and a call-to-action button.
 *
 * @returns {JSX.Element} The Hero section of the website.
 */
const Hero = () => {
  return (
    <section className="relative w-full h-screen m-0 p-0 flex items-center justify-center">
      {/* Social Media Icon Bar */}
      <div className="absolute top-0 right-4 flex flex-col items-center space-y-2 py-3 z-10">
        {/* Vertical Divider */}
        <div
          className="w-px h-40 mb-2 mt-48"
          style={{ backgroundColor: "#233942" }}
        ></div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center space-y-2">
          {[
            {
              href: "https://facebook.com",
              icon: <FaFacebook />,
              label: "Facebook",
            },
            {
              href: "https://twitter.com",
              icon: <FaTwitter />,
              label: "Twitter",
            },
            {
              href: "https://instagram.com",
              icon: <FaInstagram />,
              label: "Instagram",
            },
            {
              href: "https://linkedin.com",
              icon: <FaLinkedin />,
              label: "LinkedIn",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#233942] hover:text-white"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-40 mt-2 bg-[#233942]"></div>
      </div>

      <div className="relative w-full h-full  flex-grow hidden sm:flex">
        {/* Left Column: Title */}
        <div className="flex-1 flex justify-center items-center  bg-[#233942]">
          <div className="uppercase">
            <h1
              style={{
                color: "white",
                fontFamily: "Cormorant, serif",
                fontSize: "90px",
              }}
            >
              Photo
            </h1>
            <h1
              className="-mt-10 ml-28"
              style={{
                color: "white",
                fontFamily: "Cormorant, serif",
                fontSize: "90px",
              }}
            >
              graphy
            </h1>
          </div>
        </div>

        {/* Right Column: Description */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div style={{ maxHeight: "96px", width: "380px" }}>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "22px",
                color: "white",
                margin: "0",
                position: "relative",
                bottom: "-100px",
              }}
            >
              Pellentesque mauris a lobortis in bibendum <b /> sed lobortis
              semper. Eget eu vel eu vitae.
            </p>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center z-5">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-none"
          style={{ objectFit: "none", objectPosition: "center" }}
        />
      </div>

      {/* Call-to-Action Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <CustomButton text="Order Now" />
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-[#141F24]">
      {/* Main container for the footer section, using a grid layout on medium screens */}
      <div className="flex flex-col md:grid md:grid-cols-3">
        {/* Logo section with center alignment */}
        <div className="flex justify-center items-center md:py-42 mt-20">
          <a href="#" className="text-2xl font-bold font-lato text-white">
            GRAPHER SHOT.
          </a>
        </div>

        {/* Copyright text with center alignment */}
        <div className="flex justify-center items-end font-lato text-white pb-8">
          (C) Copyright 2022 I Photographer
        </div>

        {/* Social media icons with center alignment */}
        <div className="flex justify-center items-center md:py-36 pb-10">
          {/* Container for social media icons, creating space between each icon */}
          <div className="flex items-center space-x-2">
            {/* Map over an array of social media platforms to dynamically create icon links */}
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
                className="md:text-2xl text-white hover:text-[#233942]" // Hover effect for social icons
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-5 w-full md:w-[350px]">
      {/* Email */}
      <a href="mailto:sanjaysharma51220@gmail.com">
        <div
          className="flex items-center gap-4 bg-white shadow-md px-5 py-3  sm:py-4 rounded-lg
            gradient-bg-color-2 gradient-bg-hover
            sm:bg-linear-to-r sm:from-white sm:to-white sm:gradient-bg-hover
            text-white sm:text-gray-700 hover:text-white hover:scale-102 "
        >
          <span className="text-xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="">sanjaysharma51220@gmail.com</span>
        </div>
      </a>

      {/* Phone — Gradient Highlight */}
      <a href="tel:+918627821746">
        <div
          className="flex items-center gap-4 px-5 py-3  sm:py-4 rounded-lg shadow-md 
            bg-linear-to-r from-white to-white gradient-bg-color-2 gradient-bg-hover
            text-white sm:text-gray-700 hover:text-white
            hover:scale-102"
        >
          <span className="text-xl">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span>+91 86278 21746</span>
        </div>
      </a>

      {/* Location */}
      <div
        className="flex items-center gap-4 bg-white shadow-md px-5 py-3  sm:py-4 rounded-lg
            gradient-bg-color-2 gradient-bg-hover
            sm: sm:from-white sm:to-white 
            text-white sm:text-gray-700 hover:text-white
            hover:scale-102"
      >
        <span className="text-xl">
          <FontAwesomeIcon icon={faLocationDot} />
        </span>
        <span className="">India</span>
      </div>
    </div>
  );
}

export default ContactInfo;

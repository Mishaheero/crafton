import React, { useState, useEffect } from "react";
import "../styles/_burgerMenu.scss";
import NavMenu from "./NavMenu";
import accent from "../assets/icons/accent.svg";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls main menu open/close
  const [isMediaOpen, setIsMediaOpen] = useState(false); // Controls "Media Center" submenu

  // Toggle the main menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setIsMediaOpen(false); // Close submenu when main menu closes
  };

  // Toggle the "Media Center" submenu
  const toggleMediaMenu = () => {
    setIsMediaOpen(!isMediaOpen);
  };

  // Apply overflow-y-hidden to body when the menu is open, restore when closed
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling
      document.body.style.overflowY = "hidden";
    } else {
      // Enable scrolling again
      document.body.style.overflowY = "auto";
    }

    // Clean up the effect on unmount
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Burger button */}
      <button
        onClick={toggleMenu}
        className="z-50 transition-all duration-300 text-black-600 hover:text-darkBlue-100 focus:outline-none"
      >
        <div
          className={`w-6 h-0.5 bg-black-100 transition-all duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          style={{
            transform: isOpen ? "translateY(8px) rotate(45deg)" : "none",
          }}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black-100 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
          style={{
            height: isOpen ? "0" : "100%",
            margin: isOpen ? "0" : "4px 0",
          }}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black-100 transition-all duration-300 ${
            isOpen ? "-rotate-45" : ""
          }`}
          style={{
            transform: isOpen ? "translateY(-8px) rotate(-45deg)" : "none",
          }}
        ></div>
      </button>

      {/* Dropdown menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 left-0 z-40 w-full h-full bg-white shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between p-4 transition-opacity duration-300">
          <a href="/" className="relative">
            <img src={accent} alt="Logo" className="w-[72px]" />
          </a>
          <button
            onClick={toggleMenu}
            className="text-black-100 hover:text-darkBlue-100 focus:outline-none"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <NavMenu isMobile onLinkClick={toggleMenu} />

        <div className="w-full absolute bottom-0 md:basis-[25%]">
          <svg
            className="w-48 md:w-[317px] h-full mx-auto"
            viewBox="0 0 317 412"
            fill="none"
          >
            <g opacity="0.2">
              <path
                d="M1.49414 316.257C82.2274 315.453 147.521 249.864 148.323 168.742C67.5898 169.546 2.29572 235.135 1.49414 316.257Z"
                fill="#DCEEDE"
              />
              <path
                d="M1.49414 1.5C2.29572 82.6218 67.5898 148.229 148.323 149.015C147.539 67.9105 82.2274 2.30371 1.49414 1.5Z"
                fill="#DCEEDE"
              />
              <path
                d="M167.941 168.742C168.743 249.864 234.037 315.471 314.77 316.257C313.969 235.135 248.675 169.528 167.941 168.742Z"
                fill="#DCEEDE"
              />
              <path
                d="M167.941 149.015C248.675 148.211 313.969 82.6218 314.77 1.5C234.037 2.30371 168.743 67.8931 167.941 149.015Z"
                fill="#DCEEDE"
              />
              <path
                d="M1.49414 335.969C2.29572 417.091 67.5898 482.697 148.323 483.484C147.521 402.362 82.2274 336.755 1.49414 335.969Z"
                fill="#DCEEDE"
              />
              <path
                d="M249.668 335.969H167.941C168.726 371.402 197.565 399.881 233.026 399.881H314.753C313.969 364.448 285.129 335.969 249.668 335.969Z"
                fill="#DCEEDE"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;

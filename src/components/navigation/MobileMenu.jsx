import React, { useState, useEffect } from "react";
import "../../styles/_mobileMenu.scss";
import NavMenu from "./NavMenu";
import accent from "../../assets/icons/decorations/accent.svg";
import { ReactComponent as HeaderIconBg } from '../../assets/icons/decorations/bg.svg';

const MenuMobile = () => {
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
    <div className="lg:hidden ms-3">
      {/* Burger button */}
      <button
        onClick={toggleMenu}
        className="z-50 transition-all duration-300 text-black-600 hover:text-darkBlue-100 focus:outline-none"
      >
        <div
          className={`w-6 h-0.5 bg-black-100 transition-all duration-300 ${isOpen ? "rotate-45" : ""
            }`}
          style={{
            transform: isOpen ? "translateY(8px) rotate(45deg)" : "none",
          }}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black-100 transition-all duration-300 ${isOpen ? "opacity-0" : ""
            }`}
          style={{
            height: isOpen ? "0" : "100%",
            margin: isOpen ? "0" : "4px 0",
          }}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black-100 transition-all duration-300 ${isOpen ? "-rotate-45" : ""
            }`}
          style={{
            transform: isOpen ? "translateY(-8px) rotate(-45deg)" : "none",
          }}
        ></div>
      </button>

      {/* Dropdown menu */}
      <div
        className={`${isOpen ? "block h-full" : "hidden"
          } sticky absolute top-0 left-0 z-40 w-full bg-white shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between p-4 transition-opacity duration-300">
          <img src={accent} alt="accent" className="w-[72px]" />
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
          <HeaderIconBg className="w-48 md:w-[317px] h-full mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default MenuMobile 

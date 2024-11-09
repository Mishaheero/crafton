import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/_burgerMenu.scss";

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

  return (
    <div className="lg:hidden">
      {/* Burger button */}
      <button
        onClick={toggleMenu}
        className="z-50 text-gray-600 transition-all duration-300 hover:text-darkBlue-100 focus:outline-none"
      >
        <div
          className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          style={{
            transform: isOpen ? "translateY(8px) rotate(45deg)" : "none",
          }}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
          style={{
            height: isOpen ? "0" : "100%",
            margin: isOpen ? "0" : "4px 0",
          }}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
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
        <div className="flex justify-end p-4 transition-opacity duration-300">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-darkBlue-100 focus:outline-none"
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

        <ul className="flex flex-col items-start p-4 space-y-4">
          <li>
            <Link
              to="/who-we-are"
              className="text-gray-700 hover:text-darkBlue-100"
              onClick={toggleMenu}
            >
              Who we are
            </Link>
          </li>
          <li>
            <Link
              to="/investment"
              className="text-gray-700 hover:text-darkBlue-100"
              onClick={toggleMenu}
            >
              Our Investment
            </Link>
          </li>
          <li>
            <Link
              to="/impact"
              className="text-gray-700 hover:text-darkBlue-100"
              onClick={toggleMenu}
            >
              Our Impact
            </Link>
          </li>

          {/* Media Center with dropdown for News */}
          <li>
            <button
              className="w-full text-left text-gray-700 hover:text-darkBlue-100 focus:outline-none"
              onClick={toggleMediaMenu}
            >
              Media Center
            </button>
            {isMediaOpen && (
              <ul className="pl-4 space-y-2">
                <li className="relative">
                  <Link
                    to="/media/news"
                    className="text-gray-700 hover:text-darkBlue-100"
                    onClick={toggleMenu}
                  >
                    News
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-darkBlue-100"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              className="text-gray-700 hover:text-darkBlue-100"
              onClick={toggleMenu}
            >
              Career
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;

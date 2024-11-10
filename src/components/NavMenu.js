// NavMenu.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavMenu = ({ isMobile, onLinkClick }) => {
  const [isMediaOpen, setIsMediaOpen] = useState(false);

  // Toggles submenu visibility when Chevron is clicked
  const toggleMediaMenu = () => setIsMediaOpen(!isMediaOpen);

  return (
    <ul
      className={
        isMobile
          ? "flex flex-col items-start p-4 space-y-4"
          : "flex justify-center"
      }
    >
      <li className={isMobile ? "" : "xl:me-8 me-6"}>
        <NavLink
          to="/who-we-are"
          className={({ isActive }) =>
            `text-sm transition duration-300 hover:text-darkBlue-100 ${
              isActive ? "text-darkBlue-100" : ""
            }`
          }
          onClick={onLinkClick}
        >
          Who we are
        </NavLink>
      </li>
      <li className={isMobile ? "" : "xl:me-8 me-6"}>
        <NavLink
          to="/investment"
          className={({ isActive }) =>
            `text-sm transition duration-300 hover:text-darkBlue-100 ${
              isActive ? "text-darkBlue-100" : ""
            }`
          }
          onClick={onLinkClick}
        >
          Our Investment
        </NavLink>
      </li>
      <li className={isMobile ? "" : "xl:me-8 me-6"}>
        <NavLink
          to="/impact"
          className={({ isActive }) =>
            `text-sm transition duration-300 hover:text-darkBlue-100 ${
              isActive ? "text-darkBlue-100" : ""
            }`
          }
          onClick={onLinkClick}
        >
          Our Impact
        </NavLink>
      </li>

      {/* Media Center with Chevron */}
      <li className={isMobile ? "" : "relative xl:me-8 me-6 group pe-6"}>
        {isMobile ? (
          <>
            <div className="flex items-center gap-5">
              <NavLink
                to="/media"
                className="flex items-center w-full text-black-100 hover:text-darkBlue-100 focus:outline-none"
                onClick={onLinkClick}
              >
                Media Center
              </NavLink>
              {/* Chevron Icon for Mobile */}
              <span className="cursor-pointer">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition-transform duration-200 ${
                    isMediaOpen ? "rotate-90" : ""
                  }`}
                  onClick={toggleMediaMenu} // Toggle submenu on Chevron click
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="#4B5563"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            {isMediaOpen && (
              <ul className="pl-4 mt-2">
                <li>
                  <Link
                    to="/media/news"
                    className="text-black-100 hover:text-darkBlue-100"
                    onClick={onLinkClick}
                  >
                    News
                  </Link>
                </li>
              </ul>
            )}
          </>
        ) : (
          <>
            <NavLink
              to="/media"
              className={({ isActive }) =>
                `text-sm transition duration-300 hover:text-darkBlue-100 ${
                  isActive ? "text-darkBlue-100" : ""
                }`
              }
            >
              Media Center
            </NavLink>
            {/* Chevron for Desktop with Hover Effect */}
            <span
              className={`absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:rotate-90 ${
                isMediaOpen ? "rotate-90" : ""
              }`}
            >
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
              >
                <path
                  d="M11.3333 1.5L6.33334 6.5L1.33334 1.5"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {/* Dropdown for Desktop */}
            <ul className="absolute hidden w-full pt-2 bg-white rounded-md shadow-lg group-hover:block">
              <li className="px-4 py-2 hover:text-darkBlue-100">
                <NavLink
                  to="/media/news"
                  className={({ isActive }) =>
                    `text-sm transition duration-300 ${
                      isActive ? "text-darkBlue-100" : ""
                    }`
                  }
                >
                  News
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </li>

      <li className={isMobile ? "" : "xl:me-8 me-6"}>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-sm transition duration-300 hover:text-darkBlue-100 ${
              isActive ? "text-darkBlue-100" : ""
            }`
          }
          onClick={onLinkClick}
        >
          Contact
        </NavLink>
      </li>
      <li className={isMobile ? "" : ""}>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            `text-sm transition duration-300 hover:text-darkBlue-100 ${
              isActive ? "text-darkBlue-100" : ""
            }`
          }
          onClick={onLinkClick}
        >
          Career
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;

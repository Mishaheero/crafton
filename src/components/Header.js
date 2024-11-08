import React from "react";
import logo from "../assets/identify/logo.svg";
import ButtonPrimary from "./ButtonPrimary";
import { NavLink } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import BurgerMenu from "./BurgerMenu";

// Defining all breadcrumb elements
const breadcrumbItems = [
  {
    label: "Home",
    path: "/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9756 2.00012C11.8157 2.00558 11.6617 2.06204 11.5361 2.16125L4.42969 7.75988C3.52774 8.4707 3 9.55687 3 10.7052V20.2501C3 20.9319 3.5682 21.5001 4.25 21.5001H9.25C9.9318 21.5001 10.5 20.9319 10.5 20.2501V15.2501C10.5 15.1026 10.6025 15.0001 10.75 15.0001H13.25C13.3975 15.0001 13.5 15.1026 13.5 15.2501V20.2501C13.5 20.9319 14.0682 21.5001 14.75 21.5001H19.75C20.4318 21.5001 21 20.9319 21 20.2501V10.7052C21 9.55687 20.4723 8.4707 19.5703 7.75988L12.4639 2.16125C12.3252 2.05169 12.1522 1.99462 11.9756 2.00012ZM12 3.7052L18.6426 8.9386C19.1846 9.36578 19.5 10.0155 19.5 10.7052V20.0001H15V15.2501C15 14.2926 14.2075 13.5001 13.25 13.5001H10.75C9.79252 13.5001 9 14.2926 9 15.2501V20.0001H4.5V10.7052C4.5 10.0155 4.81537 9.36578 5.35742 8.9386L12 3.7052Z"
          fill="#4B5563"
        />
      </svg>
    ),
  },
  { label: "Who we are", path: "/who-we-are" },
  { label: "Our Investment", path: "/investment" },
  { label: "Our Impact", path: "/impact" },
  { label: "Media Center", path: "/media" },
  { label: "Contact", path: "/contact" },
  { label: "Career", path: "/career" },
];

const Header = () => {
  return (
    <header id="header" className="pt-6">
      <div className="container px-4 mx-auto max-w-1248">
        <div className="flex items-center justify-between mb-10 lg:mb-[72px]">
          <a href="/" className="relative">
            <img
              src={logo}
              alt="Logo"
              className="w-[72px] xl:me-0 me-4 md:me-6"
            />
          </a>
          {/* Main navigation with NavLink for active state */}
          <nav className="xl:ms-[118px] lg:block hidden">
            <ul className="flex justify-center">
              <li className="xl:me-8 me-6">
                <NavLink
                  to="/who-we-are"
                  className={({ isActive }) =>
                    `text-sm transition duration-300 hover:text-darkBlue-100 ${
                      isActive ? "text-darkBlue-100" : ""
                    }`
                  }
                >
                  Who we are
                </NavLink>
              </li>
              <li className="xl:me-8 me-6">
                <NavLink
                  to="/investment"
                  className={({ isActive }) =>
                    `text-sm transition duration-300 hover:text-darkBlue-100 ${
                      isActive ? "text-darkBlue-100" : ""
                    }`
                  }
                >
                  Our investment
                </NavLink>
              </li>
              <li className="xl:me-8 me-6">
                <NavLink
                  to="/impact"
                  className={({ isActive }) =>
                    `text-sm transition duration-300 hover:text-darkBlue-100 ${
                      isActive ? "text-darkBlue-100" : ""
                    }`
                  }
                >
                  Our impact
                </NavLink>
              </li>
              <li className="xl:me-8 me-6">
                <NavLink
                  to="/media"
                  className={({ isActive }) =>
                    `text-sm transition duration-300 hover:text-darkBlue-100 ${
                      isActive ? "text-darkBlue-100" : ""
                    }`
                  }
                >
                  Media center
                </NavLink>
              </li>
              <li className="xl:me-8 me-6">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-sm transition duration-300 hover:text-darkBlue-100 ${
                      isActive ? "text-darkBlue-100" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    `text-sm transition duration-300 hover:text-darkBlue-100 ${
                      isActive ? "text-darkBlue-100" : ""
                    }`
                  }
                >
                  Career
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Language Switcher */}
          <div className="lang-switcher ms-auto sm:me-0 me-3">
            <p>العربية</p>
          </div>

          {/* Search Icon */}
          <div className="hidden mx-3 xl:mx-5 search-btn sm:block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21.0004 21.0004L16.6504 16.6504M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <ButtonPrimary />

          {/* BurgerMenu na urządzeniach mobilnych */}
          <BurgerMenu />
        </div>
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex justify-between md:flex-row flex-col pt-10 lg:pt-[68px] gap-14 lg:gap-[100px] items-center">
          <div className="w-full md:basis-[75%]">
            <h1 className="mb-4 text-xl font-bold lg:text-2xl text-darkBlue-400">
              News
            </h1>
            <p className="text-base text-darkBlue-400 lg:text-md">
              Stay updated with the latest developments and achievements in the
              agricultural and livestock investment sector. From groundbreaking
              innovations to strategic global partnerships, explore our recent
              news and insights here.
            </p>
          </div>
          <div className="w-full md:basis-[25%] md:block hidden">
            <svg
              className="w-48 md:w-[317px] h-full"
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
    </header>
  );
};

export default Header;

import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/identify/logo.svg";
import ButtonPrimary from "./ButtonPrimary";
import Breadcrumb from "./Breadcrumb";
import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";

// Defining breadcrumb elements
const breadcrumbItems = [
  {
    label: "Home",
    path: "/",
    icon: (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
      >
        <path
          d="M8.97559 0.000118782C8.81566 0.00558004 8.66168 0.0620409 8.53613 0.161252L1.42969 5.75988C0.527739 6.4707 0 7.55687 0 8.7052V18.2501C0 18.9319 0.568203 19.5001 1.25 19.5001H6.25C6.9318 19.5001 7.5 18.9319 7.5 18.2501V13.2501C7.5 13.1026 7.60248 13.0001 7.75 13.0001H10.25C10.3975 13.0001 10.5 13.1026 10.5 13.2501V18.2501C10.5 18.9319 11.0682 19.5001 11.75 19.5001H16.75C17.4318 19.5001 18 18.9319 18 18.2501V8.7052C18 7.55687 17.4723 6.4707 16.5703 5.75988L9.46387 0.161252C9.32518 0.0516892 9.15225 -0.00537685 8.97559 0.000118782ZM9 1.7052L15.6426 6.9386C16.1846 7.36578 16.5 8.01552 16.5 8.7052V18.0001H12V13.2501C12 12.2926 11.2075 11.5001 10.25 11.5001H7.75C6.79252 11.5001 6 12.2926 6 13.2501V18.0001H1.5V8.7052C1.5 8.01552 1.81537 7.36578 2.35742 6.9386L9 1.7052Z"
          fill="#4B5563"
        />
      </svg>
    ),
  },
  { label: "Who we are", path: "/who-we-are" },
  { label: "Our Investment", path: "/investment" },
  { label: "Our Impact", path: "/impact" },
  {
    label: "Media Center",
    path: "/media",
    children: [{ label: "News", path: "/media/news" }],
  },
  { label: "Contact", path: "/contact" },
  { label: "Career", path: "/career" },
];

const Header = () => {
  const location = useLocation(); // Hook to get the current path

  // Function that sets the title and description based on the current page
  const getHeaderContent = () => {
    switch (location.pathname) {
      case "/":
        return { title: "Home", description: "Welcome to our homepage!" };
      case "/who-we-are":
        return {
          title: "Who We Are",
          description: "Learn more about our company and mission.",
        };
      case "/investment":
        return {
          title: "Our Investment",
          description: "Explore our investment strategy.",
        };
      case "/impact":
        return {
          title: "Our Impact",
          description: "Discover the impact we've made.",
        };
      case "/media":
        return {
          title: "Media Center",
          description: "Stay updated with the latest news.",
        };
      case "/media/news":
        return {
          title: "News",
          description:
            "Stay updated with the latest developments and achievements in the agricultural and livestock investment sector. From groundbreaking innovations to strategic global partnerships, explore our recent news and insights here.",
        };
      case "/contact":
        return { title: "Contact", description: "Get in touch with us." };
      case "/career":
        return { title: "Career", description: "Join our team!" };
      default:
        return { title: "Welcome", description: "Browse through our website." };
    }
  };

  const { title, description } = getHeaderContent();

  return (
    <header id="header" className="pt-6">
      <div className="container px-4 mx-auto max-w-1248">
        <div className="flex items-center justify-between mb-10 lg:mb-[72px]">
          <a href="/" className="relative">
            <img src={logo} alt="Logo" className="w-[72px]" />
          </a>
          {/* Main navigation with NavLink for active state */}
          <nav className="hidden lg:block xl:ms-[118px] lg:ms-6">
            <NavMenu isMobile={false} />
          </nav>

          {/* Language Switcher */}
          <div className="lang-switcher ms-auto sm:me-0 me-3">
            <p className="transition duration-300 cursor-pointer hover:text-darkBlue-100">
              العربية
            </p>
          </div>

          {/* Search Icon */}
          <div className="hidden mx-3 cursor-pointer xl:mx-5 search-btn sm:block group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-colors duration-300"
            >
              <path
                d="M21.0004 21.0004L16.6504 16.6504M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-300 group-hover:stroke-darkBlue-100"
              />
            </svg>
          </div>

          <ButtonPrimary />

          {/* BurgerMenu for mobile devices */}
          <BurgerMenu />
        </div>
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex justify-between md:flex-row flex-col pt-10 lg:pt-[68px] gap-14 lg:gap-[100px] items-center pb-12 lg:pb-24">
          <div className="w-full md:basis-[75%]">
            <h1 className="mb-4 text-xl font-bold lg:text-2xl text-darkBlue-400">
              {title}
            </h1>
            <p className="text-base text-darkBlue-400 lg:text-md">
              {description}
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

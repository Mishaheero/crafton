import React from "react";
import ButtonScrollTop from "../buttons/ButtonScrollTop";
import decorFooter from "../../assets/icons/decorations/decor-footer.svg";
import SocialIcons from "../socials/SocialIcons";

const Footer = () => {
  return (
    <footer className="relative pt-[59px] pb-[95px] bg-darkBlue-500">
      <div className="container px-4 mx-auto max-w-1248">
        <div className="flex flex-col items-center justify-between w-full gap-10 md:gap-12 md:flex-row">
          <nav>
            <ul className="flex flex-col items-center text-white md:flex-row">
              <li className="mb-5 text-xs font-light md:mb-0 md:me-12">
                Copyright © Salic 2024
              </li>
              <li className="mb-5 md:mb-0 md:me-12">
                <a className="text-xs font-light" href="/policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-xs font-light" href="/site-map">
                  Site map
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
            <div className="flex items-center">
              <SocialIcons />
            </div>
            <ButtonScrollTop />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[40px]">
        <img className="w-full" src={decorFooter} alt="Decorative footer" />
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import ProfilePic2 from "../../../assets/profile.png";
import ProfilePic3 from "../../../assets/profile_2.jpg";
import ProfilePic4 from "../../../assets/profile_3.jpg";
import ProfilePic5 from "../../../assets/profile_5.jpg";
import ProfilePic6 from "../../../assets/profile_4.jpg";

const HeroSection = () => {
  const { isDarkMode } = useSelector(selectPortfolioSlice);

  return (
    <div
      className={`${isDarkMode ? `dark:bg-dark` : `bg-primary`} transition-colors duration-500 ease-in-out w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-80`}
    >
      <div
        className={`flex flex-col items-center justify-center ${isDarkMode ? ` border-neutral-500/40 bg-dark` : `bg-primary border-neutral-200`} transition-colors duration-500 ease-in-out border-l border-r w-full h-full`}
      >
        <div
          className={`h-full items-center flex py-40 flex-col gap-8 w-1/2 font-public-sans ${isDarkMode ? `dark:text-white` : `text-neutral-700`}`}
        >
          {/* <div className="shadow inline-flex items-center rounded-full mx-auto w-[10rem] h-[10rem] bg-red-700 border-2"> */}
          <img
            src={ProfilePic5}
            alt=""
            className="rounded-full w-40 h-40 border-4 border-black"
          />
          {/* </div> */}
          <div className="flex flex-col gap-3">
            <div className="text-6xl font-bold">Hello,</div>
            <div className="lg:text-6xl font-bold tracking-wider">
              I'm Sarthak Kamble
            </div>
            <div className="lg:text-6xl font-bold">Frontend Engineer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

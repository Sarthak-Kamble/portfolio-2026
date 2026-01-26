import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";

const HeroSection = () => {
  const { isDarkMode } = useSelector(selectPortfolioSlice);

  return (
    <div
      className={`${isDarkMode ? `dark:bg-dark` : `bg-primary`} transition-colors duration-500 ease-in-out w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-80`}
    >
      <div
        className={`flex flex-col items-center ${isDarkMode ? ` border-neutral-500/40 bg-dark` : `bg-primary border-neutral-200`} transition-colors duration-500 ease-in-out border-l border-r w-full h-full`}
      >
        <div className="h-full flex flex-col gap-3 w-2/4 text-white py-52 font-public-sans">
          <div className="text-5xl font-bold">Hello,</div>
          <div className="lg:text-6xl font-bold tracking-wider">
            I'm Sarthak Kamble
          </div>
          <div className="lg:text-5xl font-bold">Frontend Engineer</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

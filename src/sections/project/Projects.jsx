import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";

const Projects = () => {
  const { theme } = useSelector(selectPortfolioSlice);

  return (
    <div
      // className={`${theme === "Dark" ? `bg-dark` : `bg-primary`} transition-colors duration-500 ease-in-out w-full min-h-screen flex flex-col items-center`}
      className={`h-full flex items-center justify-center py-28 lg:border-l lg:border-r w-full lg:w-[60%] mx-auto shadow 
        ${theme === "Dark" ? "border-neutral-700" : "border-neutral-100"}
      `}
    >
      <div
        className={`flex flex-col items-center justify-start ${theme === "Dark" ? `bg-dark` : `bg-primary`} transition-colors duration-500 ease-in-out w-full`}
      >
        <div className="">
          <h1
            className={`text-4xl font-bold ${theme === "Dark" ? `text-white` : `text-neutral-700`}`}
          >
            Projects
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;

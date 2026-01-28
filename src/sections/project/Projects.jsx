import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";

const Projects = () => {
  const { theme } = useSelector(selectPortfolioSlice);

  return (
    <div
      className={`${theme === "Dark" ? `bg-dark` : `bg-primary`} transition-colors duration-500 ease-in-out w-full min-h-screen flex flex-col items-center`}
    >
      <div
        className={`flex flex-col items-center justify-start ${theme === "Dark" ? `bg-dark` : `bg-primary`} transition-colors duration-500 ease-in-out w-full`}
      >
        <div className="py-20">
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

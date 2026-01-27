/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import ProfilePic5 from "../../../assets/profile_5.jpg";
import { motion } from "framer-motion";

const HomeSection = () => {
  const { theme } = useSelector(selectPortfolioSlice);

  return (
    <div
      className={`${theme === "Dark" ? `dark:bg-dark` : `bg-primary`} transition-colors duration-500 ease-in-out w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-80`}
    >
      <div
        className={`flex flex-col items-center justify-start ${theme === "Dark" ? ` border-neutral-500/40 bg-dark` : `bg-primary border-neutral-200`} transition-colors duration-500 ease-in-out border-l border-r w-full h-full`}
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={` h-fit items-center flex py-40 flex-col gap-8 w-1/2 font-public-sans ${theme === "Dark" ? `dark:text-white` : `text-neutral-700`}`}
        >
          <div
            className={`p-1 border rounded-full ${theme === "Dark" ? ` border-white/10` : `border-gray-200 shadow`}`}
          >
            <img src={ProfilePic5} alt="" className="rounded-full w-30 h-30" />
          </div>
          <div className="flex flex-col text-center gap-3">
            <div className="text-5xl font-bold">Hello,</div>
            <div className="lg:text-5xl font-bold tracking-wider">
              I'm Sarthak Kamble
            </div>
            <div
              className={`lg:text-5xl font-bold p-2 bg-violet-400 rounded-md w-fit mx-auto ${theme === "Dark" ? "text-[#171717]" : "text-white"}`}
            >
              Frontend Engineer
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;

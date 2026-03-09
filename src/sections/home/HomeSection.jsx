/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import ProfilePic1 from "../../../assets/profile_pic_1.webp";
import { motion } from "framer-motion";
import { BsEnvelope } from "react-icons/bs";
import TechStack from "./skills/TechStack";

const HomeSection = () => {
  const { theme } = useSelector(selectPortfolioSlice);

  return (
    <div
      className={`h-full flex items-center justify-center py-28 shadow lg:border-l lg:border-r w-full lg:w-[60%] mx-auto
        ${theme === "Dark" ? "border-neutral-700" : "border-neutral-100 tran"}
      `}
    >
      <div className={`flex flex-col items-center h-full justify-start w-full`}>
        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-fit items-center flex select-none flex-col p-6 gap-4 lg:gap-6 font-public-sans ${theme === "Dark" ? `dark:text-white` : `text-[#121212]`}`}
        >
          <motion.div
            className={`p-1 border-2 rounded-full ${
              theme === "Dark" ? `border-violet-500` : `border-gray-200 shadow`
            }`}
            animate={{
              y: [0, -6, 0], // subtle float
              rotate: [0, 2.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="rounded-full overflow-hidden">
              <img
                src={ProfilePic1}
                alt=""
                className="w-36 h-36 object-cover"
              />
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 lg:gap-5 items-center justify-center">
            <div className="flex flex-col gap-0 lg:gap-4 text-center">
              <div className="text-4xl lg:text-5xl font-bold">
                Hey, I'm Sarthak Kamble
              </div>
              <div className={`text-4xl lg:text-5xl font-bold`}>
                Frontend Engineer
              </div>
            </div>
            <div
              className={`text-xl w-full lg:w-[85%] text-center ${theme === "Dark" ? "text-neutral-400" : "text-neutral-600"}`}
            >
              I craft intuitive web experiences where design meets
              functionality. I’m a frontend engineer passionate about building
              fast, responsive, and delightful interfaces on the web.
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              className={`flex items-center gap-2 px-4 py-2 font-bold rounded-lg cursor-pointer hover:scale-95 duration-100 ease-in-out
                  ${theme === "Dark" ? "bg-violet-500/70 text-white" : "bg-violet-600 text-white"}
                `}
            >
              <BsEnvelope />
              <span>Let's Connect</span>
            </button>
            <div
              className={`relative flex items-center gap-4 px-4 py-2 rounded-lg
                ${theme === "Dark" ? "bg-green-800/20" : "border border-gray-100 shadow"}
                `}
            >
              <span className="relative flex items-center justify-center h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>

              <span className="text-green-500">Open to work</span>
            </div>
          </div>
        </motion.div>

        <div className="w-full flex items-center justify-center">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

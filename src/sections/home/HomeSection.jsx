/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import ProfilePic2 from "../../../assets/profile_pic_2.jpg";
import ProfilePic1 from "../../../assets/profile_pic_1.png";
import { motion } from "framer-motion";
import { BsEnvelope } from "react-icons/bs";

const HomeSection = () => {
  const { theme } = useSelector(selectPortfolioSlice);

  return (
    <div
      className={`h-full flex items-center justify-center py-28 border lg:border-l lg:border-r w-full lg:w-[60%] mx-auto shadow 
        ${theme === "Dark" ? "border-neutral-700" : "border-neutral-100"}
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

        {/* Dummy Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full px-8 py-20"
        >
          <h2
            className={`text-3xl font-bold mb-10 text-center ${theme === "Dark" ? `text-white` : `text-neutral-700`}`}
          >
            Featured Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            {[1, 2, 3].map((card) => (
              <motion.div
                key={card}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-lg border ${
                  theme === "Dark"
                    ? `bg-neutral-900 border-neutral-800 hover:border-violet-400`
                    : `bg-white border-gray-200 hover:border-violet-400 shadow`
                } transition-colors duration-300`}
              >
                <div className="w-12 h-12 bg-violet-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{card}</span>
                </div>
                <h3
                  className={`text-lg font-bold mb-2 ${theme === "Dark" ? `text-white` : `text-neutral-700`}`}
                >
                  Skill {card}
                </h3>
                <p
                  className={`text-sm ${theme === "Dark" ? `text-neutral-400` : `text-neutral-500`}`}
                >
                  This is a dummy card to showcase your skills and expertise.
                  You can replace this with your actual content.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;

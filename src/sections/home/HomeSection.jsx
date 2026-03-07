/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import ProfilePic2 from "../../../assets/profile_pic_2.jpg";
import ProfilePic1 from "../../../assets/profile_pic_1.png";
import { motion } from "framer-motion";

const HomeSection = () => {
  const { theme } = useSelector(selectPortfolioSlice);

  return (
    <div
      className={`w-full h-full flex items-center justify-center py-24 max-w-[60%] mx-auto shadow-md`}
    >
      <div className={`flex flex-col items-center h-full justify-start w-full`}>
        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-fit items-center flex select-none flex-col p-10 gap-8 font-public-sans ${theme === "Dark" ? `dark:text-white` : `text-[#121212]`}`}
        >
          <div
            className={`p-1 border rounded-full  ${theme === "Dark" ? ` border-white/10` : `border-gray-200 shadow`}`}
          >
            <img
              src={ProfilePic1}
              alt=""
              className="rounded-full w-36 h-36 bg-contain"
            />
          </div>
          <div className="flex flex-col gap-8 items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl lg:text-6xl text-center font-bold">
                Hey, I'm Sarthak Kamble
              </div>
              <div className={`text-3xl lg:text-6xl font-bold`}>
                Frontend Engineer
              </div>
            </div>
            <div
              className={`text-xl px-2 w-full lg:w-[50%] ${theme === "Dark" ? "text-neutral-400" : "text-neutral-600"}`}
            >
              I craft intuitive web experiences where design meets
              functionality. I’m a frontend engineer passionate about building
              fast, responsive, and delightful interfaces on the web.
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-yellow-300 px-3 py-2 font-bold text-black rounded-lg cursor-pointer">
              Contact me
            </button>
            <button className="bg-white px-3 py-2 font-bold text-black rounded-lg cursor-pointer">
              Resume
            </button>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full px-8 py-20 max-w-4xl mx-auto"
        >
          <h2
            className={`text-2xl font-bold ${theme === "Dark" ? `text-white` : `text-neutral-700`}`}
          >
            More About Me
          </h2>
          <p
            className={`text-lg leading-relaxed ${theme === "Dark" ? `text-neutral-300` : `text-neutral-600`}`}
          >
            I'm a passionate Frontend Engineer and curious builder who enjoys
            transforming ideas into engaging web interfaces. Self-taught and
            constantly learning, I love experimenting with modern web
            technologies and bringing creative concepts to life through clean,
            thoughtful code.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;

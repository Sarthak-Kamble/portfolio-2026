/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import ProfilePic5 from "../../../assets/profile_5.jpg";
import { motion } from "framer-motion";

const HomeSection = () => {
  const { theme } = useSelector(selectPortfolioSlice);

  return (
    <div className={`w-full h-full flex items-center justify-center`}>
      <div className={`flex flex-col items-center h-full justify-start w-full`}>
        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-fit items-center flex py-40 flex-col gap-8 w-1/2 font-public-sans ${theme === "Dark" ? `dark:text-white` : `text-neutral-700`}`}
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

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full px-8 py-20 max-w-4xl mx-auto"
        >
          <h2
            className={`text-3xl font-bold mb-6 ${theme === "Dark" ? `text-white` : `text-neutral-700`}`}
          >
            About Me
          </h2>
          <p
            className={`text-lg leading-relaxed ${theme === "Dark" ? `text-neutral-300` : `text-neutral-600`}`}
          >
            I'm a passionate Frontend Engineer with a love for creating
            beautiful and interactive user experiences. With expertise in modern
            web technologies like React, Tailwind CSS, and Framer Motion, I
            build responsive applications that combine aesthetics with
            functionality. When I'm not coding, you can find me exploring new
            design trends or contributing to open-source projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;

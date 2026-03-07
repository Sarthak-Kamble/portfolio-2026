import React from "react";
import { motion } from "framer-motion";
import {
  aiTools,
  backendTech,
  databases,
  devTools,
  frontendTech,
} from "../../../utils/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const iconsContainerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const TechCard = ({ title, description, data }) => {
  return (
    <motion.div
      className="flex flex-col gap-6"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={titleVariants} className="flex flex-col gap-1">
        <span className="text-2xl text-white">{title}</span>
        <span className="text-xl text-neutral-400">{description}</span>
      </motion.div>

      <motion.div
        variants={iconsContainerVariants}
        className="flex flex-wrap items-center gap-4"
      >
        {data?.map((item) => {
          return (
            <motion.div
              key={item.id ?? item.tech}
              variants={iconVariants}
              className="w-16 h-16 flex items-center justify-center border rounded-md border-white/20 p-2 bg-white/10"
            >
              <img
                src={item?.iconLink}
                alt={item?.tech}
                className="w-10 h-10 object-contain"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <section className="w-full flex items-center justify-center py-20 px-10">
      <div className="flex flex-col gap-12">
        <TechCard
          title={"Frontend Technologies"}
          description={
            "Core frontend technologies I rely on to build performant, maintainable, and user-friendly interfaces."
          }
          data={frontendTech}
        />
        <TechCard
          title={"Backend Technologies"}
          description={
            "Core backend technologies I rely on to build performant, maintainable, and user-friendly interfaces."
          }
          data={backendTech}
        />
        <TechCard
          title={"Databases"}
          description={
            "Core databases I rely on to build performant, maintainable, and user-friendly interfaces."
          }
          data={databases}
        />
        <TechCard
          title={"Developer Tools"}
          description={
            "Core frontend technologies I rely on to build performant, maintainable, and user-friendly interfaces."
          }
          data={devTools}
        />

        <TechCard
          title={"AI Tools"}
          description={
            "Core frontend technologies I rely on to build performant, maintainable, and user-friendly interfaces."
          }
          data={aiTools}
        />
      </div>
    </section>
  );
};

export default TechStack;

import React from "react";
import { motion } from "framer-motion";
import javascript from "../assets/js.webp";
import react from "../assets/react.webp";
import express from "../assets/express.webp";
import canva from "../assets/Canva.png";
import figma from "../assets/Figma.png";
import motionIcon from "../assets/framer-motion.webp";
import git from "../assets/git.webp";
import mongodb from "../assets/MongoDB.png";
import node from "../assets/node.webp";
import sql from "../assets/SQLDeveloper.png";
import tailwind from "../assets/tailwind.webp";

// Technology arrays remain the same...
const Frontend = [
  { image: javascript, title: "Javascript" },
  { image: react, title: "React" },
  { image: tailwind, title: "Tailwind CSS" },
  { image: motionIcon, title: "Framer Motion" },
];

const Backend = [
  { image: node, title: "Node.Js" },
  { image: express, title: "Express.Js" },
];

const Database = [
  { image: mongodb, title: "MongoDB" },
  { image: sql, title: "SQL" },
];

const Tools = [
  { image: git, title: "Git" },
  { image: canva, title: "Canva" },
  { image: figma, title: "Figma" },
];

// Slower animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Increased from 0.1
      delayChildren: 0.2, // Added initial delay
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 }, // Increased initial y-offset
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Increased duration
      ease: [0.16, 0.77, 0.47, 0.97], // Smooth easing curve
    },
  },
};

const sectionTitle = {
  hidden: { opacity: 0, x: -30 }, // Increased initial x-offset
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1, // Increased duration
      ease: "backOut", // Nice overshoot effect
    },
  },
};

function MyStack() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-around items-start gap-6 my-16"
    >
      <motion.div
        variants={container}
        className="flex flex-col items-start gap-6 max-w-4xl"
      >
        <motion.span
          variants={sectionTitle}
          className="text-third text-3xl md:text-5xl font-light"
        >
          Technologies I use.
        </motion.span>
        <motion.p
          variants={sectionTitle}
          transition={{ delay: 0.3 }} // Added delay for paragraph
          className="text-secondary text-xl md:text-3xl font-extralight"
        >
          Over the years, I have worked with a variety of technologies. Here are
          some of the technologies I have experience with:
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        className="flex flex-col gap-12 w-full mt-8" // Increased gap
      >
        {[
          { title: "FRONTEND", items: Frontend },
          { title: "BACKEND", items: Backend },
          { title: "DATABASE", items: Database },
          { title: "TOOLS", items: Tools },
        ].map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            variants={container}
            transition={{ delay: sectionIndex * 0.2 }} // Stagger sections
            className="flex flex-col gap-6" // Increased gap
          >
            <motion.h1
              variants={item}
              transition={{ delay: 0.4 }} // Additional delay for titles
              className="text-third text-4xl"
            >
              {section.title}
            </motion.h1>
            <motion.div variants={container} className="flex flex-wrap gap-6">
              {section.items.map((stack, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }, // Slower hover
                  }}
                  whileTap={{ scale: 0.98 }} // More subtle tap
                  className="p-4 flex items-center justify-center gap-3 bg-gray-900/50 rounded-lg backdrop-blur-sm"
                  transition={{ delay: index * 0.1 }} // Stagger items
                >
                  <motion.img
                    src={stack.image}
                    alt={stack.title}
                    className="w-10 h-10 rounded-[1px]"
                    whileHover={{
                      rotate: [0, 5, -5, 0], // Gentle wiggle
                      transition: { duration: 0.8 },
                    }}
                  />
                  <motion.span
                    className="text-secondary text-xl md:text-2xl"
                    whileHover={{ color: "#ffffff" }} // Color change on hover
                  >
                    {stack.title}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default MyStack;

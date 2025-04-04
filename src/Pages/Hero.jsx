import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <section className="relative h-screen flex items-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-start gap-12">
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl text-primary">FRONTEND</h1>
            <h1 className="text-6xl md:text-7xl ml-5 text-secondary">
              DEVELOPER
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-third max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Hi! I'm{" "}
            <span className="font-semibold text-secondary">Suraj Savle</span>. A
            passionate Full-Stack Web Developer specializing in modern
            JavaScript frameworks, with expertise in React, Node.js, and
            MongoDB. I focus on building dynamic, scalable, and user-friendly
            web applications while sharing knowledge through my platform,
            FrontendBlueprint.
          </motion.p>

          <motion.div
            className="mt-10 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-black font-semibold rounded-md hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 flex items-center gap-2"
            >
              Hire Me <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="hidden lg:block fixed right-8 bottom-0 transform -translate-y-1/2">
        <ul className="flex flex-col gap-4 text-2xl text-third">
          <li>
            <a href="#" className="hover:text-secondary transition-colors">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary transition-colors">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary transition-colors">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";

const About = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }} // Slightly early trigger
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col justify-center"
      >
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-7xl font-thin mb-20 slide-up-and-fade text-secondary max-w-[1116px]"
        >
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </motion.span>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8 flex flex-col"
        >
          <span className="text-2xl  text-third mb-1">This is me</span>
          <span className="w-full h-[0.5px] bg-third opacity-50"></span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-full text-lg flex flex-col gap-5 md:gap-0 md:flex-row items-start justify-between max-w-[1100px]"
        >
          <nav className="text-5xl md:text-6xl font-medium text-third">Hi, I'm suraj.</nav>
          <span className="flex flex-col gap-3 items-center md:max-w-[450px] text-third">
            <span>
              I'm a frontend web developer focused on building intuitive and
              high-performance web applications. As the creator of
              FrontendBlueprint, I share web development resources and ideas.
            </span>
            <span>
              I specialize in React, Tailwind CSS, and modern JavaScript
              frameworks, ensuring seamless and scalable solutions. Currently
              expanding into full-stack development with Node.js, Express.js,
              and MongoDB, I prioritize performance, accessibility, and
              responsiveness to create engaging and effective user experiences.
            </span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

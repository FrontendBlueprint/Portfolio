import React from "react";
import "../index.css";
import Slider from "../Components/Slider";
import Hero from "../Pages/Hero";
import About from "./About";
import MyStack from "./MyStack";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <Slider />
      <section className="px-5 sm:px-6 lg:px-37 ">
        <div className="hidden lg:block absolute top-[70%] left-[-4rem] rotate-90 z-20">
          <a
            href="mailto:surajsavle143@gmail.com"
            className="text-third tracking-wider hover:underline"
          >
            surajsavle143@gmail.com
          </a>
        </div>
        <Hero />
        <About />
        <MyStack />
        <Footer />
      </section>
    </>
  );
}

export default Home;

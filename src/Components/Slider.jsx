import React from "react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { TbMenu } from "react-icons/tb";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Start closed on mobile

  return (
    <>
      {/* Mobile menu button (only shows on small screens) */}
      <div
        className="fixed right-7 top-6 z-40 text-[2.5rem] cursor-pointer text-white"
        onClick={() => setIsOpen(true)}
      >
        <TbMenu />
      </div>

      {/* Backdrop (only visible when sidebar is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:bg-transparent"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <section
        className={`
        bg-slidebar fixed right-0 h-screen z-40
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        w-[80%] md:w-[50%] xl:w-[32.5%]
      `}
      >
        <div className="w-full h-full flex flex-col justify-between  px-5 py-[1rem] overflow-y-auto">
          {/* Close button */}
          <div
            className="text-[3.5rem] text-white flex justify-between items-center cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <div className="block"></div>
            <IoIosClose />
          </div>

          {/* Content - Responsive layout */}
          <div className="flex flex-col-reverse md:flex-row justify-around items-center">
            <div className="ml-[-30px] md:ml-0">
              <nav className="text-third mb-5 text-base">SOCIAL</nav>
              <ul className="space-y-2 text-secondary text-lg">
                <li>
                  <a href="#" className="hover:underline">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-[50px] md:mb-0">
              <nav className="text-third text-base mb-5">MENU</nav>
              <ul className="space-y-2 text-secondary text-lg">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <a href="/home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <a href="/about" className="hover:underline">
                    About Me
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
                  <a href="/experience" className="hover:underline">
                    Experience
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <a href="/projects" className="hover:underline">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 mb-14">
            <nav className="text-third mb-2">GET IN TOUCH</nav>
            <p className="text-secondary">surajsavle@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sidebar;

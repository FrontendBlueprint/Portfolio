import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-secondary border-t border-gray-800">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          Have a project in mind? Let's build something great together.
        </p>
        <p className="mt-2 text-third text-sm">All Rights Reserved by suraj savle © {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;
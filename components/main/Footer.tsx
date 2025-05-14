import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-4 mt-auto z-50">
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-center">
          &copy; Attar Rifai {new Date().getFullYear()} — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleScroll = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const currentPath = window.location.pathname;
    if (currentPath !== "/") {
      await router.push("/");
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 shadow-lg bg-white/10 dark:bg-[#030014e6] backdrop-blur-md z-30 duration-300 border border-[#7042f861] transition-transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 h-[65px] flex items-center justify-between">
        {/* Logo kiri */}
        <a href="/" className="flex items-center">
          <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 drop-shadow-md tracking-widest">
            RIPAY
          </h1>
        </a>

        {/* Navigasi Tengah (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/about"
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-500 transition-colors"
          >
            About Me
          </a>
          <a
            href="/skills"
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-500 transition-colors"
          >
            Skills
          </a>
          <a
            href="/projects"
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-500 transition-colors"
          >
            Projects
          </a>
        </div>

        {/* Social Media & Theme Toggle (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
          {Socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                width={22}
                height={22}
                className="hover:opacity-70 transition"
              />
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 p-1 rounded-md text-gray-800 dark:text-gray-300 hover:text-cyan-500 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 bg-white dark:bg-[#030014] flex flex-col items-center space-y-4">
          <a
            href="/about"
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-500 transition-colors"
          >
            About Me
          </a>
          <a
            href="/skills"
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-500 transition-colors"
          >
            Skills
          </a>
          <a
            href="/projects"
            className="text-gray-800 dark:text-gray-200 hover:text-cyan-500 transition-colors"
          >
            Projects
          </a>
          <div className="flex space-x-5 pt-2">
            {Socials.map((social) => (
              <a href={social.link} key={social.name} target="_blank">
                <Image
                  src={social.src}
                  alt={social.name}
                  width={22}
                  height={22}
                  className="hover:opacity-70 transition"
                />
              </a>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 p-1 rounded-md text-gray-800 dark:text-gray-300 hover:text-cyan-500 transition"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

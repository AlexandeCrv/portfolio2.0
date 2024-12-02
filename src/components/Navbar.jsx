"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaCog } from "react-icons/fa";

function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <div>
      <header
        className={`fixed top-0 w-full bg-black/40 backdrop-blur-lg border border-gray-700 rounded-md z-50 shadow-lg transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mt-3">
          <strong className="text-4xl text-white">
            <span>{"/*"}</span>
          </strong>
        </div>

        <nav>
          <ul className="navbar flex justify-center space-x-6 py-2 ">
            <li className="espelhado-transparente-nav ">
              <a
                className="inline-flex items-center px-4 py-2 text-lg font-medium text-gray-500 no-underline rounded-md transition duration-300 ease-in-out transform hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                href="#secmain"
              >
                <FaHome className="mr-2 text-2xl" />
                Início
              </a>
            </li>

            <li className="espelhado-transparente-nav">
              <a
                className="inline-flex items-center px-4 py-2 text-lg font-medium text-gray-500 no-underline rounded-md transition duration-300 ease-in-out transform hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                href="#divsobremim"
              >
                <FaUser className="mr-2 text-2xl" />
                Sobre
              </a>
            </li>

            <li className="espelhado-transparente-nav">
              <a
                className="inline-flex items-center px-4 py-2 text-lg font-medium text-gray-500 no-underline rounded-md transition duration-300 ease-in-out transform hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                href="#projetos"
              >
                <FaProjectDiagram className="mr-2 text-2xl" />
                Projetos
              </a>
            </li>

            <li className="espelhado-transparente-nav">
              <a
                className="inline-flex items-center px-4 py-2 text-lg font-medium text-gray-500 no-underline rounded-md transition duration-300 ease-in-out transform hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                href="#habilidades"
              >
                <FaCog className="mr-2 text-2xl" />
                Habilidades
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-3">
          <strong className="text-4xl text-white">
            <span>{"*/"}</span>
          </strong>
        </div>
      </header>
    </div>
  );
}

export default NavBar;

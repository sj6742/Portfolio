import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Projects = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState("home"); 

return (
    <>
    <header className="fixed w-full bg-gradient-to-r from-blue-700 to-cyan-500 shadow-xl z-50 transition-all duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
            <a
                href="/home"
                className="text-3xl font-extrabold text-white transition-transform transform hover:scale-125 hover:text-pink-400 duration-500 ease-in-out drop-shadow-lg"
            >
                Joshi Sujal
            </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 bg-gradient-to-r p-4">
            {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
            ].map((item) => (
                <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                    ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-100 after:transition-transform"
                    : "text-gray-200 hover:text-pink-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-300 after:scale-x-0 after:transition-transform hover:after:scale-x-100"
                }`}
                onClick={() => setActiveSection(item.href.slice(1))}
                >
                {item.name}
                </a>
            ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
            <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg focus:outline-none"
            >
                <span className="sr-only">Open main menu</span>

                {/* Hamburger Icon */}
                <svg
                className={`h-7 w-7 transition-transform duration-500 ease-in-out ${
                    isMenuOpen ? "scale-0 rotate-180" : "scale-100 rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                </svg>

                {/* Close Icon */}
                <svg
                className={`h-7 w-7 absolute transition-transform duration-500 ease-in-out ${
                    isMenuOpen ? "scale-100 rotate-180" : "scale-0 rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </button>
            </div>
        </div>
        </div>

        {/* Mobile menu */}
        <div
        className={`${
            isMenuOpen ? "block animate-slide-down" : "hidden"
        } md:hidden`}
        >
        <div className="px-4 pt-4 pb-5 space-y-2 bg-white shadow-lg rounded-lg">
            {["home", "about", "skills", "projects", "contact"].map(
            (section) => (
                <a
                key={section}
                href={`#${section}`}
                className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out ${
                    activeSection === section
                    ? "bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-md"
                    : "text-gray-800 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:shadow-md transform hover:scale-105"
                }`}
                onClick={() => {
                    setActiveSection(section);
                    setIsMenuOpen(false);
                }}
                >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
            )
            )}
        </div>
        </div>
    </header>

      {/* Footer */}
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Brand Name */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-extrabold tracking-wide text-white">
                Joshi Sujal
            </h3>
            <p className="mt-2 text-gray-400 text-lg">Full Stack Developer</p>
            </div>

            {/* Social Icons */}
            <motion.div
            className="flex space-x-6 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            >
            {[
                { icon: FaGithub, link: "#", color: "hover:text-gray-300" },
                { icon: FaLinkedin, link: "#", color: "hover:text-blue-400" },
                { icon: FaEnvelope, link: "#", color: "hover:text-red-400" },
            ].map(({ icon: Icon, link, color }, index) => (
                <motion.a
                key={index}
                href={link}
                className={`text-gray-400 ${color} transition-colors`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                >
                <Icon className="h-7 w-7" />
                </motion.a>
            ))}
            </motion.div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} Sujal Joshi. All rights reserved.
            </p>
        </motion.div>
        </div>
    </footer>
    </>
);
};

export default Projects;

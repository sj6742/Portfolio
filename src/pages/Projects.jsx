import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import logo7 from "../assets/perfect.jpg";
import logo1 from "../assets/project-1.jpg";
import logo2 from "../assets/project-2.jpg";
import logo3 from "../assets/project-3.jpg";
import logo5 from "../assets/Quize.jpg";
import logo6 from "../assets/Resume.jpg";
import logo4 from "../assets/snake.jpg";
// import { image, title } from "framer-motion/client";
// import { source } from "framer-motion/m";

const projects = [
  {
    id: 1,
    title: "Quick Chat",
    description:
    "A real-time chat application is a web or mobile-based platform that enables users to send and receive messages instantly. It is designed for seamless communication with minimal delays, allowing for interactive conversations between individuals or groups.",
    image: logo1,
    category: "Responsive",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    demoLink: "https://quick-chat-p1nn.onrender.com",
    sourceCode: "https://github.com/sj6742/Quick-Chat.git",
},
{
    id: 2,
    title: "Imagify",
    description:
    "A prompt-generated 3D image is a digital artwork created using AI models that interpret text descriptions to generate 3D-like visuals. These models use advanced algorithms to render depth, lighting, and perspective, producing realistic or stylized 3D effects based on the given input. This technology is widely used in game design, architecture, and creative arts. ",
    image: logo3,
    category: "Responsive",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    // demoLink: "https://github.com/sj6742/Imgify",
    sourceCode: "https://github.com/sj6742",
},
{
    id: 3,
    title: "Pelican Bookstore",
    description:
    "BookStore is a modern online platform designed for book enthusiasts to explore, purchase, and review a vast collection of books across various genres. Whether you're a fan of fiction, non-fiction, fantasy, or self-development, BookStore offers an intuitive browsing experience with personalized recommendations and seamless navigation.",
    image: logo2,
    category: "Web App",
    techStack: ["HTML", "CSS", "JS"],
    // demoLink: "https://github.com/sj6742",
    sourceCode: "https://github.com/sj6742",
},
{
    id: 4,
    title: "Resume-Builder",
    description:
    "An intuitive React-based resume builder for creating professional resumes effortlessly.",
    image: logo6,
    category: "Responsive",
    techStack: ["React.js,Tailwind CSS, HTML & CSS, JavaScript, JsPDF"],
    // demoLink: "resume-builder-two-theta.vercel.app",
    sourceCode: "https://github.com/sj6742/Resume-Builder",
},
{
    id: 5,
    title: "Snake Water Gun Game",
    description:
    "The Snake Water Gun game is a simple two-player game, similar to Rock-Paper-Scissors. It is often played between a player and the computer.",
    image: logo4,
    techStack: ["PYTHON"],
    // demoLink: "https://github.com/sj6742/Snake-Water-Gun-game",
    sourceCode: "https://github.com/sj6742/Snake-Water-Gun-game",
},
{
    id: 6,
    title: "Python Quiz ",
    description:
    "A Python-based interactive quiz application that tests users' knowledge with multiple-choice questions and tracks their score.",
    image: logo5,
    techStack: ["PYTHON"],
    // demoLink: "https://github.com/sj6742/Quiz",
    sourceCode: "https://github.com/sj6742/Quiz",
},

{
    id: 7,
    title: "The-Perfet-Guuss.",
    description:
    "A fun Python-based number guessing game that challenges players to find the perfect guess!",
    image: logo7,
    techStack: ["PYTHON"],
    // demoLink: "https://github.com/sj6742/The-Perfet-Guuss",
    sourceCode: "https://github.com/sj6742/The-Perfet-Guuss",
},
{
    id: 8,
    title: " JARVIS – Your Intelligent AI Assistant",
    description:
    "JARVIS is an advanced AI assistant designed to automate tasks, process data, and enhance user interactions with intelligent responses.",
    image: "jarvis.jpg",
    techStack:["PYTHON"],
    sourceCode: "https://github.com/sj6742/JARVIS"
}
];

const Projects = () => {
return (
    <section id="projects" className="py-16 bg-gray-100  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
    <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
            <motion.div
            key={project.id}
            className="bg-white p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, index) => (
                <span
                    key={index}
                    className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-700 rounded"
                >
                    {tech}
                </span>
                ))}
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 flex items-center hover:text-blue-700"
                >
                Live Demo <FaExternalLinkAlt className="ml-1" />
                </a>
                <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 flex items-center hover:text-gray-900"
                >
                Source Code <FaGithub className="ml-1" />
                </a>
            </div>
            </motion.div>
        ))}
        </div>
    </div>
    </section>
);
};

export default Projects;

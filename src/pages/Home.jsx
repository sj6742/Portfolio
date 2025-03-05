import React, { useState, useEffect } from "react";
import {
FaEnvelope, 
FaPhone,
FaMapMarkerAlt,
FaGithub,
FaLinkedin,
FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo1 from "../assets/project-1.jpg";
import logo2 from "../assets/project-2.jpg";
import logo3 from "../assets/project-3.jpg";
import Typewriter from "typewriter-effect";



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
    demoLink: "#",
    sourceCode: "#",
},
{
    id: 3,
    title: "Pelican Bookstore",
    description:
    "BookStore is a modern online platform designed for book enthusiasts to explore, purchase, and review a vast collection of books across various genres. Whether you're a fan of fiction, non-fiction, fantasy, or self-development, BookStore offers an intuitive browsing experience with personalized recommendations and seamless navigation.",
    image: logo2,
    category: "Web App",
    techStack: ["HTML", "CSS", "JS"],
    demoLink: "#",
    sourceCode: "#",
},
];

function Home() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState("home");
  // Handle scroll and update active section
useEffect(() => {
    const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
        ) {
        setActiveSection(section.id);
        }
    });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const [status, setStatus] = useState("");

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
    const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
        setStatus(data.error || "Failed to send message.");
    }
    } catch (error) {
    setStatus("Error: Could not send message.");
    }
};

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b25005f6-1572-44fb-abd0-c971b1a5974e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: json
    }).then((res) => res.json());

    if (res.success) {
    alert(res.message)
    }
}


return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
    <header className="fixed w-full bg-gradient-to-r from-blue-700 to-cyan-500 shadow-xl z-50 transition-all duration-500">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
                <img src="/sj.jpg" alt="Logo" className="h-15 w-15 bg-transparent" />
                <a href="#home" className="text-3xl font-extrabold text-white transition-transform transform hover:scale-125 hover:text-pink-400 duration-500 ease-in-out drop-shadow-lg">
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
    <div className={`${isMenuOpen ? "block animate-slide-down" : "hidden"} md:hidden`}>
        <div className="px-4 pt-4 pb-5 space-y-2 bg-transparent shadow-lg rounded-lg">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
                <a
                    key={section}
                    href={`#${section}`}
                    className={`block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out ${
                        activeSection === section
                            ? "bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-md"
                            : "text-gray-800 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:shadow-md transform hover:scale-105"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
            ))}
        </div>
    </div>
</header>

      {/* Hero Section */}
      <section
            id="home"
            className="relative pt-40 pb-40 text-white overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
            {/* Wavy SVG Background - Responsive */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <svg className="absolute bottom-0 left-0 w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="rgba(255, 255, 255, 0.2)"
                        fillOpacity="1"
                        d="M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,218.7C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    >
                        <animate 
                            attributeName="d"
                            dur="6s"
                            repeatCount="indefinite"
                            values="
                                M0,224L80,230C160,238,320,250,480,240C640,230,800,210,960,205C1120,200,1280,210,1360,220L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;
                                M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,218.7C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        />
                    </path>
                </svg>
            </div>

            {/* Content */}
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                {/* Left Side Content */}
                <motion.div
                    className="text-center md:text-left z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold mb-6"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
                    >
                        Hello, I'm <br />
                        <span className="text-yellow-300 drop-shadow-lg">Sujal Joshi</span>
                    </motion.h1>

                    {/* Dynamic Typing Effect */}
                    <motion.p
                        className="text-xl md:text-2xl mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <Typewriter
                            options={{
                                strings: ["Full Stack Developer", "React Enthusiast", "JavaScript Lover"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 120 }}
                    >
                        <a
                            href="#contact"
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium text-lg py-3 px-8 rounded-md transition-transform hover:scale-105 shadow-lg"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="#projects"
                            className="bg-white hover:bg-gray-200 text-gray-900 font-medium text-lg py-3 px-8 rounded-md transition-transform hover:scale-105 shadow-lg"
                        >
                            View Projects
                        </a>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        className="mt-10 flex space-x-6 justify-center md:justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <motion.a
                            href="https://github.com/sj6742"
                            target="_blank"
                            className="text-white hover:text-yellow-300 transition-colors"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub className="h-8 w-8" />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            className="text-white hover:text-yellow-300 transition-colors"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLinkedin className="h-8 w-8" />
                        </motion.a>
                        <motion.a
                            href="https://twitter.com"
                            target="_blank"
                            className="text-white hover:text-yellow-300 transition-colors"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaTwitter className="h-8 w-8" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
      {/* About Section */}

    <section
        id="about"
        className="py-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white overflow-hidden"
    >
        <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <div className="max-w-3xl mx-auto text-center mb-16 mt-16">
            <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-lg text-gray-200">
            Get to know more about me and my experience
            </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center">
            <motion.div
            className="md:w-1/2 md:pr-12 mb-8 md:mb-0 flex justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
            <div className="w-100 h-100 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition duration-500">
                <img
                src="/sujal.jpg"
                alt="About Me"
                className="w-full h-full object-cover"
                />
            </div>
            </motion.div>

            <motion.div
            className="md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
            <h3 className="text-3xl font-bold mb-4">
                My Journey as a Developer
            </h3>
            <p className="text-gray-200 mb-4 mt-2">
            <b className="text-gray-800"> 👋 Hi, I'm Sujal Joshi! </b> <br />
                I'm a passionate Information Technology student at Gandhinagar Institute of Technology, currently in <br />
                my eighth semester. I specialize in web development, backend technologies, and real-time <br />
                applications. <br />

                <b className="text-gray-800">💻 What I Do</b>
                <li>
                Full-Stack Web Development – Proficient in HTML, CSS, JavaScript, Node.js, and MongoDB
                </li>
                <li>
                Database Management – Skilled in working with MongoDB for efficient data handling
                </li>
                <li>
                Real-Time Applications – Developing chat applications and interactive web experiences
                </li>
                <b className="text-gray-800">  🚀 My Projects </b> <br />
                I have worked on exciting projects like: <br />
                ✅ A bookstore website with a user-friendly UI and backend integration <br />
                ✅ A real-time chat application for seamless messaging <br />
                ✅ A Imagify Website with 3D Image gererate using AI <br />

                <b className="text-gray-800 text-justify ">📌 Why Me? </b> <br />
                I believe in writing clean, efficient, and scalable code. I’m always eager to learn new technologies and 
                improve my skills. My goal is to build digital solutions that make an impact. 
            </p>
            <p className="text-gray-800"><b>📩 Let's Connect!</b></p>


            <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                { label: "Name", value: "Joshi Sujal" },
                { label: "Email", value: "joshisujal85@gmail.com" },
                { label: "Location", value: "Ahmedabad" },
                { label: "Availability", value: "Full-time / Part-time" },
                ].map((info, index) => (
                <div key={index}>
                    <p className="text-white font-medium">{info.label}:</p>
                    <p className="text-gray-800">{info.value}</p>
                </div>
                ))}
            </div>

            <motion.a
                href="/Sujal.CV.pdf"
                download="Sujal_Joshi_Resume.pdf"
                className="bg-white text-indigo-600 py-2 px-6 rounded-md hover:bg-gray-300 transition duration-300 block mt-6 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                e.preventDefault();
                const link = document.createElement("a");
                link.href = "/Resume.pdf";
                link.download = "Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                }}
            >
                Download Resume
            </motion.a>
        
            </motion.div>
        </div>
        </motion.div>
    </section>
      {/* Skills Section */}
    <section
        id="skills"
        className="py-24 bg-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white overflow-hidden"
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-extrabold  sm:text-4xl mb-4">
            My Skills
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-lg ">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
                </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
                Frontend Development
            </h3>
            <p className="text-gray-600 mb-4">
                Creating responsive and interactive user interfaces with modern
                technologies.
            </p>
            <div className="space-y-2">
                {[
                { name: "React", percentage: 80 },
                { name: "JavaScript", percentage: 75 },
                { name: "Tailwind CSS", percentage: 70 },
                { name: "HTML", percentage: 100 },
                { name: "WordPress", percentage: 70 },
                ].map((skill) => (
                <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                        {skill.percentage}%
                    </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                    ></div>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
                </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
                Backend Development
            </h3>
            <p className="text-gray-600 mb-4">
                Building robust and scalable server-side applications and APIs.
            </p>
            <div className="space-y-2">
                {[
                { name: "Node.js", percentage: 75 },
                { name: "Express", percentage: 65 },
                { name: "MongoDB", percentage: 75 },
                ].map((skill) => (
                <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                        {skill.percentage}%
                    </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                    ></div>
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
                </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tools & DevOps
            </h3>
            <p className="text-gray-600 mb-4">
                Streamlining development workflow and ensuring smooth
                deployment.
            </p>
            <div className="space-y-2">
                {[
                { name: "Git", percentage: 80 },
                { name: "Docker", percentage: 50 },
                { name: "AWS", percentage: 60 },
                ].map((skill) => (
                <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                        {skill.percentage}%
                    </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                    ></div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    </section>
      {/* Projects Section */}

    <section
        id="projects"
        className="py-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center mb-12"
        >
            <h2 className="text-4xl font-extrabold mb-4">My Projects</h2>
            <motion.div
            className="w-16 h-1 bg-white mx-auto mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
            <p className="text-lg opacity-80">
            Some of my recent works showcasing my skills and creativity.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
            <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
                <div className="relative group">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ rotate: 2 }}
                />
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 right-0 m-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded"
                >
                    {project.category}
                </motion.div>
                </div>
                <div className="p-5">
                <motion.h3
                    className="text-xl font-bold mb-2"
                    whileHover={{ color: "#6b46c1" }}
                >
                    {project.title}
                </motion.h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.map((tech, i) => (
                    <motion.span
                        key={i}
                        className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded"
                        whileHover={{ scale: 1.1 }}
                    >
                        {tech}
                    </motion.span>
                    ))}
                </div>
                <div className="flex space-x-4">
                    <motion.a
                    href={project.demoLink}
                    target="_blank"
                    className="text-blue-500 hover:text-purple-500 font-medium transition-transform"
                    whileHover={{ scale: 1.1, x: 5 }}
                    >
                    View Demo
                    </motion.a>
                    <motion.a
                    href={project.sourceCode}
                    target="_blank"
                    className="text-gray-700 hover:text-black font-medium transition-transform"
                    whileHover={{ scale: 1.1, x: -5 }}
                    >
                    Source Code
                    </motion.a>
                </div>
                </div>
            </motion.div>
            ))}
            </div>

        {/* <div className="flex justify-center mt-12">
            <motion.a
            href="/projects"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block bg-blue-600 hover:bg-gray-400 text-white font-medium py-3 px-8 rounded-md transition shadow-lg hover:shadow-xl "
            >
            View All Projects
            </motion.a>
        </div> */}
        </div>
    </section>
    {/* Contact Section */}
    <section
    id="contact"
    className="py-24 bg-gray-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
                Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">
                Interested in working together? Let's connect!
            </p>
        </motion.div>

        <motion.div
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Contact Information - Hidden on small screens */}
                <div className="hidden md:block p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                    <p className="mb-6">Feel free to reach out through any of these channels.</p>
                    <div className="space-y-4">
                        {[ 
                            { icon: FaEnvelope, label: "Email", value: "joshisujal85@gmail.com" },
                            { icon: FaPhone, label: "Phone", value: "(+91) 932-747-7275" },
                            { icon: FaMapMarkerAlt, label: "Location", value: "Ahemdabad" },
                        ].map((item, index) => (
                            <motion.div key={index} className="flex items-start space-x-3" whileHover={{ scale: 1.05 }}>
                                <div className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
                                    <item.icon className="h-6 w-6 text-black" />
                                </div>
                                <div>
                                    <p className="font-medium">{item.label}</p>
                                    <p className="mt-1">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <h4 className="font-medium mb-3">Connect with me</h4>
                        <div className="flex space-x-4">
                            {[ 
                                { href: "https://github.com/sj6742", icon: <FaGithub className="h-6 w-6" /> },
                                { href: "#", icon: <FaLinkedin className="h-6 w-6" /> },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="text-white hover:text-blue-200 transition-colors"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Send Me a Message - Always Visible */}
                <div className="p-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                    <h3 className="text-2xl font-bold mb-4">Send me a message</h3>
                    <form onSubmit={onSubmit} className="space-y-4">
                        {[ 
                            { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                            { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                            { id: "subject", label: "Subject", type: "text", placeholder: "How can I help you?" },
                        ].map((field, index) => (
                            <div key={index}>
                                <label htmlFor={field.id} className="block text-sm font-medium mb-1">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder={field.placeholder}
                                    required
                                />
                            </div>
                        ))}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                placeholder="Your message here..."
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </div>
        </motion.div>
    </div>
</section>

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
                { icon: FaGithub, link: "https://github.com/sj6742 ", color: "hover:text-gray-300" },
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
      {/* Scroll to top button */}
    <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
        />
        </svg>
    </button>
    </div>
);
}

export default Home;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa"; // Font Awesome Close Icon

const Certificates = () => {
const [selectedCert, setSelectedCert] = useState(null);

const certificates = [
    {
    id: 1,
    title: "Certificate of Degree",
    institution: "Teachnook",
    description: "Completing a Data Science course with Teachnook to enhance my analytical and machine learning skills.",
    image: "/Teachnook.jpg",
    },
    {
    id: 2,
    title: "Introduction to Management",
    institution: "Great Learning",
    description: "I am completing the Introduction to Management course with Great Learning, gaining foundational insights into effective management principles.",
    image: "/LEARNING.jpg",
    },
    {
    id: 3,
    title: "Cricket Achievement Certificate",
    institution: "GIT",
    description: "Recognized for outstanding performance and participation in cricket, showcasing teamwork and sportsmanship.",
    image: "/cricket.jpg",
    },
    {
    id: 4,
    title: "Project Management",
    institution: "Coursera",
    description: "Completing a Project Management course on Coursera to enhance skills in planning, execution, and team coordination.",
    image: "/COURSERA.jpg",
    },
    {
    id: 5,
    title: "Chess Achievement Certificate",
    institution: "GIT",
    description: "Awarded a chess certification from my college, showcasing strategic thinking, problem-solving skills, and competitive excellence.",
    image: "/chess.jpg",
    },
    {
    id: 6,
    title: "Badminton Achievement Certificate",
    institution: "GIT",
    description: "Earned a certification in badminton, showcasing my skills and passion for the sport.",
    image: "/badminton.jpg",
    },
    {
    id: 7,
    title: "Carrom Achievement Certificate",
    institution: "GIT",
    description: "Earned a certification in carrom, showcasing strategic thinking, precision, and competitive skills.",
    image: "/carrom.jpg",
    },
    {
    id: 8,
    title: "Full Stack Internship Certificate",
    institution: "Infividhya Pvt Ltd",
    description: "Successfully completed a 2-week Full Stack Internship at Infividhya Pvt Ltd, gaining hands-on experience in web development and full-stack technologies.",
    image: "/infividhya.jpg",
    },
    {
    id: 9,
    title: "Programming Skills Bootcamp Certification",
    institution: "Vrunda Technologies",
    description: "Successfully completed a 17-day Programming Skills bootcamp at Vrunda Technologies, enhancing coding proficiency and problem-solving abilities.",
    image: "/Programming.jpg",
    },
    {
    id: 10,
    title: "Full Stack Web Development Internship Program",
    institution: "Edureka",
    description: "Attended a demo session on the Full Stack Web Development Internship Program organized by Edureka, gaining insights into industry practices.",
    image: "/Edureka.jpg",
    },
    {
    id: 11,
    title: "Mathematical Modelling and Applications in Engineering – MMAME 2022",
    institution: "Gandhinagar University",
    description: "Participated in the MMAME-2022 event at Gandhinagar University, exploring mathematical modelling and its applications in engineering.",
    image: "/Maths.jpg",
    },
    {
    id: 12,
    title: "Entrepreneurship & Digital Innovation",
    institution: "Lingaya's Institute",
    description: "Participated in the MMAME-2022 event at Gandhinagar University, exploring mathematical modelling and its applications in engineering.",
    image: "/inyerpriter.jpg",
    },
];

return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white  flex flex-col items-center p-6 pt-20">
    <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        🏆 My Certificates
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {certificates.map((cert) => (
        <motion.div
            key={cert.id}
            className="bg-white text-gray-900 shadow-2xl rounded-xl p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedCert(cert)}
        >
            <img
            src={cert.image}
            alt={cert.title}
            className="w-72 h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-center">{cert.title}</h3>
            <p className="text-sm text-center text-gray-700">{cert.institution}</p>
            <p className="text-xs text-center text-gray-500 mt-2">{cert.description}</p>
        </motion.div>
        ))}
    </div>

      {/* Full Image Modal */}
    <AnimatePresence>
        {selectedCert && (
        <motion.div
            className="fixed top-0 left-0 w-full h-full bg-[#0f1216] bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="relative w-4/5 md:w-2/3 lg:w-1/2">
              {/* Close Button */}
            <button
                className="absolute top-4 right-4 bg-[#0f1216] text-white p-2 rounded-full hover:bg-gray-600 transition"
                onClick={() => setSelectedCert(null)}
            >
                <FaTimes size={24} /> {/* Font Awesome Close Icon */}
            </button>

              {/* Full Image */}
            <motion.img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full rounded-xl shadow-xl"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
            />
            </div>
        </motion.div>
        )}
    </AnimatePresence>
    </div>
);
};

export default Certificates;

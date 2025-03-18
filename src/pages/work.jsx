import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'react-feather'; 

const WorkExperiencePage = () => {
return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center p-6 sm:p-8 pt-20">
    <motion.section
        id="work-experience"
        className="backdrop-blur-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl rounded-3xl p-6 sm:p-8 w-full max-w-4xl mb-10 mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
        <Briefcase className="w-6 sm:w-7 h-6 sm:h-7 text-blue-500" />
        Work Experience
        </h2>
        
        <ul className="space-y-6">
        {[{
            title: "Full Stack Developer Intern",
            company: "Syndell Tech (Ongoing)",
            description: "Working with MERN Stack and Python to develop scalable web applications...",
            img: "https://tse3.mm.bing.net/th?id=OIP.Tba9Al38iLF2PqwawR5QvAAAAA&pid=Api&P=0&h=180"
        }, {
            title: "Programming Skills Bootcamp",
            company: "Vrunda Technologies (2021)",
            description: "Enhancing Coding Proficiency and Problem-Solving Abilities in Data Science...",
            img: "https://tse3.mm.bing.net/th?id=OIP.hzzu2ILcH-JgQ3CcwF1z1gHaEy&pid=Api&P=0&h=180"
        }, {
            title: "Internship at InfiVidhya Pvt. Ltd.",
            company: "Full Stack Developer (Jan 2024 - Mar 2024)",
            description: "Successfully completed a 2-week internship at Infividhya Pvt Ltd...",
            img: "https://tse1.mm.bing.net/th?id=OIP.WX4txSWr1bxKBJHOSDiSiwHaE7&pid=Api&P=0&h=180"
        }, {
            title: "Freelance Web Developer",
            company: "Worked on various client projects (2023)",
            description: "Designed and developed custom websites and web applications for clients.",
            img: "https://tse2.mm.bing.net/th?id=OIP.0JpstI66DTqo6fsTyMHaQQHaFj&pid=Api&P=0&h=180"
        }, {
            title: "Research Assistant",
            company: "AI & Data Science (Aug 2023 - Dec 2023)",
            description: "Assisted in AI research projects, data analysis, and model development.",
            img: "https://tse3.mm.bing.net/th?id=OIP.9Tw8TgbyK3iI_4B-JjEnOgHaIW&pid=Api&P=0&h=180"
        }, {
            title: "Data Science Intern",
            company: "Technook (2 Months, Online) (2022)",
            description: "Gained hands-on experience in data preprocessing, machine learning...",
            img: "https://tse2.mm.bing.net/th?id=OIP.jn_vSNW8uY4o6qAGCkmzhwHaHa&pid=Api&P=0&h=180"
        }].map((job, index) => (
            <motion.li
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-gray-800/40 hover:bg-gray-800/50 p-5 rounded-2xl shadow-xl transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            >
            <img src={job.img} alt={job.title} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-blue-500 shadow-md" />
            <div className="text-center sm:text-left">
                <p className="text-xl font-semibold text-blue-400">{job.title}</p>
                <p className="text-lg font-medium text-gray-200">{job.company}</p>
                <p className="text-gray-300 text-sm mt-2">{job.description}</p>
            </div>
            </motion.li>
        ))}
        </ul>
    </motion.section>
    </div>
);
};

export default WorkExperiencePage;

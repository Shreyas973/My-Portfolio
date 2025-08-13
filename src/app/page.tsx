'use client';

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import TabSection from '@/components/TabSection';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaCode, FaAppStore } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('skills');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "TradeMyRide",
      description: "Mobile app for buying and selling vehicles with React Native, featuring smart search filters, image-based listings, and real-time chat.",
      link: "https://github.com/Shreyas973/TradeMyRide",
      image: "/images/vehicle.jpeg"
    },
    {
      id: 2,
      title: "Inventory Management System",
      description: "Flutter and Firebase app for store owners to manage product stock with real-time inventory tracking and low-stock alerts.",
      link: "https://github.com/Shreyas973/Inventory-Management-System",
      image: "/images/inventory.jpg"
    },
    {
      id: 3,
      title: "Chat Application",
      description: "Feature-rich, real-time chat app built with React and Socket.io, featuring live messaging with typing indicators, user authentication, and media sharing.",
      link: "https://github.com/Shreyas973/Chat-app",
      image: "/images/chat-app.png"
    }
  ];

  const education = [
    {
      id: 1,
      icon: <FaCode />,
      title: "MCA",
      institution: "NMAM Institution of Technology, Nitte",
      period: "2024-26",
      details: "CGPA: 8.15"
    },
    {
      id: 2,
      icon: <FaAppStore />,
      title: "BSC",
      institution: "SDM College, Ujire",
      period: "2021-24",
      details: "CGPA: 7.7"
    }
  ];

  return (
    <AnimatePresence>
      {pageLoaded && (
        <motion.div
          className="min-h-screen bg-black text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Head>
            <title>Shreyas S - Portfolio</title>
            <meta name="description" content="Full Stack Developer Portfolio" />
          </Head>

          {/* Header Section */}
          <header id="header" className="relative pt-28 pb-20 px-4 md:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 opacity-30 z-0"></div>
            <div className="container mx-auto relative z-10">
              <Navbar />

              <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-16">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Hi, I am <span className="text-pink-500">Shreyas S</span> <br />
                    <span className="text-cyan-400">Full Stack Developer</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    Turning ideas into reality through code
                  </p>
                  <a
                    href="#contact"
                    className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full font-medium transition duration-300 inline-block"
                  >
                    Get in Touch
                  </a>
                </div>

                {/* Profile Image */}
                <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                  <div className="relative w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-500 shadow-xl">
                    <Image
                      src="/images/profil.jpg"
                      alt="Profile picture"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* About Section */}
          <section id="about" className="py-20 px-4 md:px-8 bg-gray-900">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                About <span className="text-pink-500">Me</span>
              </h2>

              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-64 h-80 relative rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                    <Image
                      src="/images/p2.jpg"
                      alt="Profile picture"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    A tech enthusiast with an insatiable curiosity, I thrive on solving complex problems and turning ideas into reality through code. With a solid foundation in Python, Java and hands-on experience in web development, mobile apps, etc. I approach every project as an opportunity to learn, innovate, and grow.
                  </p>
                  <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-20 px-4 md:px-8">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                My <span className="text-pink-500">Education</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-gray-900 rounded-xl p-8 border border-pink-500 relative overflow-hidden transform transition duration-500 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 opacity-10"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center mb-6 text-white text-2xl">
                        {edu.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{edu.title}</h3>
                      <p className="text-gray-300 mb-2">{edu.institution}</p>
                      <p className="text-gray-300 mb-4">{edu.period}</p>
                      <p className="text-gray-300">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-4 md:px-8 bg-gray-900">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                My <span className="text-pink-500">Projects</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href="https://github.com/Shreyas973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full font-medium transition duration-300"
                >
                  See More Projects
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 md:px-8">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                Contact <span className="text-pink-500">Me</span>
              </h2>

              <ContactForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} />
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 bg-gray-900 text-center text-gray-400">
            <div className="container mx-auto">
              <p>Copyright © {new Date().getFullYear()} Shreyas S. All rights reserved.</p>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

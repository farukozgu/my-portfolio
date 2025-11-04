"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { projectsData } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';
import { experiencesData } from '@/lib/data';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function Home() {
  return (
    <main>
      
      <motion.section id="home" className="min-h-[30vh] flex items-center justify-center bg-white px-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="mx-auto w-full max-w-[1080px] mt-[100px] px-4">        
          
          <p className="text-xl md:text-[32px] text-black mb-8 text-center md:text-left mx-auto">
            <Image
            src="/avatar.png"
            alt="Avatar"
            width={80} 
            height={80}
            className="rounded-full mb-3 mx-auto md:mx-0"
          />
            Hello, I'm Faruk. I am a Frontend Developer who builds user-centric experiences with React, Next.js and modern web technologies.
          </p>
          
          <div className="flex justify-center gap-2 flex-wrap md:justify-start sm:gap-0 sm:flex-nowrap space-x-4">
            <a 
              href="https://www.linkedin.com/in/farukozgu/"
              target="_blank"
              className="bg-gray-50 text-[#303030] flex items-center gap-2 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
            <FaLinkedin size={16} />
              Linkedin
              
            </a>
            <a 
              href="https://github.com/farukozgu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 text-[#303030] flex items-center gap-2 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
             <FaGithub size={16} />
              Github
            </a>
            <a 
              href="mailto:faruk.ozgufb@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 text-[#303030] flex items-center gap-2 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
             <HiOutlineEnvelope size={16} />
              Email
            </a>
            
          </div>
          
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="py-24 sm:py-32" 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}>

        <div className="mx-auto w-full max-w-[1080px] px-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-10">
            Portfolio
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="py-24 sm:py-26 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        >
      <div className="mx-auto w-full max-w-[1080px] px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-10">
          About me
        </h2>
        <div className="mx-auto w-full max-w-[1080px] text-lg text-black space-y-5 text-left md:text-left mb-20">
          <p>
            As a Frontend Developer with three years of professional experience, I specialize in building user-centric interfaces that are intuitive, engaging, and aligned with modern web standards.
          </p>
          <p>
            My expertise lies in creating performant, scalable, and aesthetic applications using a core stack of React, Next.js, JavaScript (ES6+), and Tailwind CSS. I have a proven ability to not only build new features from scratch but also to analyze and refactor existing codebases to improve quality, boost performance, and elevate the overall user experience (UX).
          </p>
          <p>
            I am an innovative problem-solver, a strong team player, and a developer deeply committed to continuous learning. I thrive in collaborative environments and am always motivated to tackle new challenges and stay current with industry trends.
          </p>
        </div>

      <h2 className="text-xl md:text-2xl font-semibold mb-16">
          Experience
      </h2>
    
    <div className="mx-auto w-full max-w-[1080px]">
      {experiencesData.map((exp, index) => (
        
        <div 
          key={index} 
          className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-2 py-6 border-b border-gray-100 last:border-b-0"
        >
          <div className="md:col-span-1 text-black">
            {exp.date}
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xl font-bold text-black mb-1">{exp.title}</h3>
            
            <p className="text-black font-medium mb-3">
              {exp.company}
            </p>
            
            <p className="text-black">
              {exp.description}
            </p>
          </div>
        </div>
        
      ))}
    </div>
    
  </div>
</motion.section>
      
      

    </main>
  );
}
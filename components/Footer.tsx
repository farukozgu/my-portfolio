"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";


export const Footer = () => {
  return (
    <motion.footer className="bg-white border-t mx-auto w-full max-w-[1080px] border-gray-100 mt-32" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      
      <div className="mx-auto w-full max-w-[1080px] px-4 py-8 flex items-center flex-col sm:flex-row sm:justify-between sm:items-center">
        
        <div className="flex space-x-5 mb-4 sm:mb-0">
            <a
            href="mailto:faruk.ozgufb@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profilim"
            className="flex items-center gap-1 text-black hover:underline transition-all"
          >
            <HiOutlineEnvelope size={16} />
            Email
          </a>
          <a
            href="https://github.com/farukozgu" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profilim"
            className="flex items-center gap-1 text-black hover:underline transition-all"
          >
            <FaGithub size={16} />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/farukozgu/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profilim"
            className="flex items-center gap-1 text-black hover:underline transition-all"
          >
            <FaLinkedin size={16} />
            Linkedin
          </a>
              <a
            href="https://www.instagram.com/faruk.ozgu/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profilim"
            className="flex items-center gap-1 text-black hover:underline transition-all"
          >
            <FaInstagram size={16} />
            Instagram
          </a>
        </div>
        
        <div className="text-black  text-center sm:text-right">
          © {new Date().getFullYear()} Faruk Ozgu
        </div>
        
      </div>
    </motion.footer>
  );
};
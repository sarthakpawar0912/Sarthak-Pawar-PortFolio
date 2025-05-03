"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Send, Code } from "lucide-react"
import { SparklesCore } from "@/components/sparkles"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Approximate navbar height
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      // Add a smooth scroll animation
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });

      // Add a highlight effect to the section
      section.style.transition = 'all 0.3s ease';
      section.style.transform = 'scale(1.02)';
      section.style.boxShadow = '0 0 20px rgba(79, 70, 229, 0.3)';
      
      setTimeout(() => {
        section.style.transform = 'scale(1)';
        section.style.boxShadow = 'none';
      }, 1000);
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#4F46E5"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">SARTHAK PAWAR</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white/90">SOFTWARE ENGINEER</h2>
          <p className="text-lg text-gray-300 max-w-xl">
            Aspiring Software Developer with hands-on experience in Java Spring Boot, backend development, and building
            scalable web applications. Skilled in RESTful API design, database management (MySQL), and debugging.
            Currently pursuing graduation while seeking to contribute to innovative projects and enhance technical
            skills in a professional environment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="group relative overflow-hidden bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Code className="w-5 h-5" />
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button 
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send className="w-5 h-5" />
                Contact Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button 
              asChild
              className="group relative overflow-hidden bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              <a href="/Sarthak Pawar.pdf" download>
                <span className="relative z-10 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-white/10 shadow-lg group">
            <img
              src="/pfpic.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ background: '#222' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

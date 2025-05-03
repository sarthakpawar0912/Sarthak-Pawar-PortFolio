"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2])

  return (
    <main ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticlesBackground />
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="about" className="py-20">
          <Hero />
        </section>

        <section id="education" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
            <Education />
          </motion.div>
        </section>

        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
            <Projects />
          </motion.div>
        </section>

        <section id="experience" className="py-20">
          <Experience />
        </section>

        <section id="skills" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
            <Skills />
          </motion.div>
        </section>

        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
            <Contact />
          </motion.div>
        </section>
      </div>
    </main>
  )
}

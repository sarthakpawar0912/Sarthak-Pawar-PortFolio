"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-white/10 shadow-lg group">
                <img
                  src="/pfpic.jpg"
                  alt="Profile Picture"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ background: '#222' }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300">
                I am a passionate Full Stack Developer with expertise in building modern web applications.
                My journey in software development has equipped me with strong skills in both frontend and
                backend technologies, allowing me to create seamless and efficient solutions.
              </p>
              <p className="text-lg text-gray-300">
                With a focus on clean code and user experience, I strive to deliver high-quality
                applications that solve real-world problems. I am constantly learning and adapting
                to new technologies to stay at the forefront of web development.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-300">Available for freelance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-300">Open to full-time opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
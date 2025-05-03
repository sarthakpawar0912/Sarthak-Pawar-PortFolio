"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "B.E ENTC",
    institution: "Dr. D.Y.Patil Institute of Technology, Pimpri",
    period: "2022 – 2026",
    score: "CGPA : 9.01",
  },
  {
    degree: "HSC",
    institution: "B.E.S. & Junior College",
    period: "2020 - 2022",
    score: "Percentage: 78.67",
  },
  {
    degree: "SSC",
    institution: "VHS High School, Pune",
    period: "2019 – 2020",
    score: "Percentage: 92.60",
  },
]

export default function Education() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      <div className="relative pl-8 space-y-12">
        <div className="timeline-line" />

        {educationData.map((edu, index) => (
          <motion.div key={index} variants={item} className="relative">
            <div className="timeline-dot" />
            <div className="card-gradient rounded-xl p-6 ml-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-300 mt-1">{edu.institution}</p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium mt-1">{edu.score}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

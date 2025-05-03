"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Multigenesys Software Pvt Ltd",
    companyLink: "https://multigenesys.com/",
    period: "December 2024 - Present",
    responsibilities: [
      "Developed scalable microservices with Java 8 and Spring Boot, using functional and reactive programming.",
      "Implemented advanced authentication for enhanced security.",
      "Optimized caching and session management with Redis, boosting API response times by 40%.",
      "Deployed secure and scalable systems on AWS (EC2, S3, RDS).",
      "Collaborated in Agile (Scrum) environments for efficient project execution and client-driven improvements."
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "AgroBeet Tech Solutions",
    companyLink: "https://agrobeet.com/",
    period: "September - December 2024",
    responsibilities: [
      "Designed and developed REST APIs with Spring Boot, leading a small team in feature development.",
      "Integrated Firebase and AWS (EC2, S3) for scalability and performance.",
      "Strengthened backend skills, React integration, and API creation.",
      "Gained experience in mobile app deployment and cloud services.",
      "Coordinated tasks and supported the team during deployment."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gradient rounded-xl p-6 h-full"
              >
                <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-400">@</span>
                  <a 
                    href={experience.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {experience.company}
                  </a>
                </div>
                <p className="text-gray-400 mb-4">{experience.period}</p>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span className="text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

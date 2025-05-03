"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Server, Cpu, PenToolIcon as Tool, Cloud, Monitor } from "lucide-react"

const skillsData = {
  Languages: ["JAVA", "CPP", "SQL"],
  Frontend: ["HTML", "CSS", "Angular-18"],
  Backend: ["Core Java", "Spring Boot", "Hibernate", "Spring MVC", "Microservice Architecture", "JPA", "Tomcat"],
  Database: ["SQL", "MySQL"],
  Testing: ["JUnit", "Mockito"],
  Tools: ["Figma", "VsCode", "Eclipse", "Postman", "IntelliJ", "GitHub"],
  "Cloud Platforms": ["AWS (EC2, S3, RDS, IAM, EBS)"],
  "Operating Systems": ["Linux/Unix", "macOS"],
  Design: ["Microservice Architecture"],
}

const iconMap = {
  Languages: Code,
  Frontend: Globe,
  Backend: Server,
  Database: Database,
  Testing: Cpu,
  Tools: Tool,
  "Cloud Platforms": Cloud,
  "Operating Systems": Monitor,
  Design: Server,
}

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {Object.entries(skillsData).map(([category, skills]) => {
        const Icon = iconMap[category as keyof typeof iconMap]

        return (
          <motion.div key={category} variants={item} className="skill-card group">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-primary/10 mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-sm font-medium text-gray-300 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

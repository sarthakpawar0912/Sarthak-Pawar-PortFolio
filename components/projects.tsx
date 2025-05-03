"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projectsData = [
  {
    title: "Task Management Application",
    description: "This Task Management System, built with Spring Boot, Angular, and MySQL, streamlines task handling for Admins and Employees. Admins manage and assign tasks, while Employees update statuses and add comments. With search and user-specific task views, the system enhances collaboration, efficiency, and workflow management.",
    technologies: [
      "Spring Boot",
      "Spring Security",
      "Spring ORM",
      "Spring Hibernate",
      "JWT Authentication",
      "MySQL",
      "RESTful API"
    ],
    link: "/projects/task-management",
    github: "https://github.com/sarthakpawar0912/Task-Management-System"
  },
  {
    title: "Restaurant Management System",
    description: "A comprehensive Restaurant Management System with separate frontend and backend components. Features include customer/admin roles, table and slot booking, food image display, secure login, and efficient restaurant operations management.",
    technologies: [
      "Spring Boot",
      "Angular 18",
      "MySQL",
      "JWT Authentication",
      "Spring Security",
      "Ng Zorro",
      "RESTful API",
      "Spring Hibernate",
      "TypeScript",
      "Bootstrap",
      "Spring AI",
      "Git"
    ],
    link: "/projects/restaurant-management",
    github: "https://github.com/sarthakpawar0912/Restaurent-management-System"
  },
  {
    title: "Service Booking Application",
    description: "A dynamic Service Booking System built with Angular, Spring Boot, MySQL, and Ng Zorro UI. It allows companies to post ads, manage bookings, and clients to search, book services, and leave reviews.",
    technologies: [
      "Spring Boot",
      "MySQL",
      "Hibernate ORM",
      "Spring Security",
      "JWT Authentication",
      "RESTful API",
      "Angular 18",
      "Ng Zorro",
      "TypeScript",
      "Bootstrap",
      "Maven",
      "Git",
      "Docker"
    ],
    link: "/projects/service-booking",
    github: "https://github.com/sarthakpawar0912/Service-Booking-System-Application"
  },
  {
    title: "Hotel Management System",
    description: "Hotel Management System with Spring Boot 3, Spring Security 6, Angular 16, Ng Zorro UI, and MySQL. Features secure JWT auth, room management, and reservation handling for admins and customers.",
    technologies: [
      "Spring Boot",
      "Spring Security",
      "Spring MVC",
      "Hibernate",
      "JWT Authentication",
      "MySQL",
      "JDBC",
      "Angular 18",
      "Ng-Zorro",
      "TypeScript",
      "HTML",
      "CSS"
    ],
    link: "/projects/hotel-management",
    github: "https://github.com/sarthakpawar0912/Hotel-Management-Application"
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="space-y-10" key={mounted ? 'mounted' : 'unmounted'}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <div className="card-gradient rounded-xl p-8 h-full flex flex-col relative z-10">
              <div className="absolute top-0 right-0 p-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="View GitHub repository"
                >
                  <Github size={22} />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="View live project"
                >
                  <ExternalLink size={22} />
                </a>
              </div>

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow text-lg">{project.description}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="outline" 
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 text-sm font-medium border-white/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button asChild variant="secondary" size="lg" className="w-full text-base">
                <a href={project.link}>View Details</a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button asChild size="lg" className="rounded-full">
          <Link href="/projects" className="px-8">
            View More Projects
          </Link>
        </Button>
      </div>
    </div>
  )
}

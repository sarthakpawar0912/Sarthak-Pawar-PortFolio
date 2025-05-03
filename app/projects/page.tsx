"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const allProjects = [
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
  },
  {
    title: "Blog Application",
    description: "A full-stack Blog Application with separate frontend and backend components. The frontend, built with Angular 18 and Ng-Zorro, enables users to create, view, and search blogs with images, real-time like/view counts, and tags. The backend, built with Spring Boot, handles blog posting, searching, commenting, and real-time interaction tracking.",
    technologies: [
      "Angular 18",
      "Ng-Zorro",
      "TypeScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Spring Boot",
      "Spring Security",
      "JWT Authentication",
      "MySQL",
      "Hibernate ORM",
      "Spring MVC",
      "Spring Core"
    ],
    link: "/projects/blog-application",
    github: "#"
  },
  {
    title: "Expense Income Tracker",
    description: "A full-stack Expense Income Tracker application with separate frontend and backend components. The frontend, built with Angular 18, enables users to track income and expenses, view statistics, and visualize financial data with charts. The backend, built with Spring Boot, handles data management, authentication, and chart generation.",
    technologies: [
      "Angular 18",
      "Chart API",
      "TypeScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "MySQL",
      "Spring Boot",
      "Spring Security",
      "Spring JDBC",
      "Spring Hibernate",
      "Spring ORM",
      "Java 8"
    ],
    link: "/projects/expense-income-tracker",
    github: "#"
  },
  {
    title: "Fitness Tracker Application",
    description: "A full-stack Fitness Tracker application with separate frontend and backend components. The frontend, built with Angular 18 and Ng-Zorro, provides dashboards, goal tracking, and interactive charts for monitoring fitness metrics. The backend, built with Spring Boot, handles data management, analytics, and secure API endpoints.",
    technologies: [
      "Angular 18",
      "Ng-Zorro",
      "TypeScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Graph API",
      "Chart API",
      "Spring Boot",
      "Spring MVC",
      "Spring ORM",
      "Spring Hibernate",
      "Spring JDBC",
      "Spring Security",
      "RESTful API"
    ],
    link: "/projects/fitness-tracker",
    github: "#"
  },
  {
    title: "Quiz Application",
    description: "A full-stack Quiz Application with separate frontend and backend components. The frontend, built with Angular 18 and Ng-Zorro, provides an interactive online examination experience with user-friendly interfaces for both admin and student roles. The backend, built with Spring Boot, handles quiz management, user authentication, and real-time test monitoring.",
    technologies: [
      "Angular 18",
      "Ng-Zorro",
      "TypeScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "MySQL",
      "Routing",
      "Spring Boot",
      "Spring Security",
      "Spring ORM",
      "Spring Hibernate",
      "Spring JDBC",
      "Spring MVC",
      "Graph API",
      "RESTful API"
    ],
    link: "/projects/quiz-application",
    github: "#"
  }
]

export default function Projects() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set loading to false after component mounts
    setIsLoading(false)
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.main 
        key="projects-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-black text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">All Projects</h1>
            <p className="text-gray-400">Explore my portfolio of full-stack applications and technical implementations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card-gradient rounded-xl p-6 h-full flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href={project.link} className="w-full">
                  <Button variant="secondary" size="lg" className="w-full">
                    View Details
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>
    </AnimatePresence>
  )
} 
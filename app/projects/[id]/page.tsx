"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Github, Youtube } from "lucide-react"
import { useState, use, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const projectDetails = {
  "task-management": {
    title: "Task Management Application",
    frontend: {
      title: "Task Management Web Front-end",
      description: "This Task Management System, built with Spring Boot, Angular, and MySQL, streamlines task handling for Admins and Employees. Admins manage and assign tasks, while Employees update statuses and add comments. With search and user-specific task views, the system enhances collaboration, efficiency, and workflow management.",
      skills: [
        "Angular 18",
        "Ng ZORRO",
        "Hosting",
        "Deployment",
        "Routing",
        "HTML",
        "CSS",
        "Bootstrap",
        "Design",
        "Web Pages"
      ],
      github: "https://github.com/sarthakpawar0912/Task-Management-System",
      video: "https://www.youtube.com/watch?v=t9Oh4ePek5E"
    },
    backend: {
      title: "Task Management Backend",
      description: "Robust backend system built with Spring Boot, featuring secure authentication, RESTful APIs, and efficient database management. Handles task operations, user management, and real-time updates.",
      skills: [
        "Spring Boot",
        "Spring Security",
        "Spring ORM",
        "Spring Hibernate",
        "JWT Authentication",
        "MySQL",
        "RESTful API"
      ],
      github: "https://github.com/sarthakpawar0912/Task-Management-System"
    }
  },
  "restaurant-management": {
    title: "Restaurant Management System",
    frontend: {
      title: "Restaurant Management Web Front-end",
      skills: [
        "NG ZORRO",
        "Angular 18",
        "MySQL",
        "JDBC",
        "Hosting",
        "Deployment",
        "Front-end",
        "HTML",
        "CSS",
        "TypeScript"
      ],
      github: "https://github.com/sarthakpawar0912/Restaurant-Management-Web",
      video: "#",
      description: "A Restaurant Management System built with Spring Boot, MySQL, and JWT. It features customer/admin roles, table and slot booking, food image display, secure login, and efficient restaurant operations management."
    },
    backend: {
      title: "Restaurant Management Application Backend",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "MySQL",
        "JWT Authentication",
        "Spring Security",
        "Spring Hibernate",
        "Spring JDBC",
        "Spring ORM",
        "Spring AI"
      ],
      github: "https://github.com/sarthakpawar0912/Restaurent-management-System",
      video: "#",
      description: "A Restaurant Management System built with Spring Boot, MySQL, and JWT. It features customer/admin roles, table and slot booking, food image display, secure login, and efficient restaurant operations management."
    }
  },
  "service-booking": {
    title: "Service Booking Application",
    frontend: {
      title: "Service Booking Web Front-end",
      skills: [
        "Angular 18",
        "Ng Zorro",
        "TypeScript",
        "Hosting",
        "Deployment",
        "Routing",
        "HTML",
        "CSS",
        "Bootstrap",
        "Styling"
      ],
      github: "https://github.com/sarthakpawar0912/Service-Booking-System-Web",
      video: "#",
      description: "A feature-rich Service Booking System that connects clients with service providers. Built using Angular, Spring Boot, MySQL, and Ng Zorro UI, it allows seamless ad posting, service booking, and reviews in a user-friendly environment."
    },
    backend: {
      title: "Service Booking Application Backend",
      skills: [
        "Spring Boot",
        "MySQL",
        "JDBC",
        "Hibernate ORM",
        "Spring Security",
        "JWT Authentication",
        "Spring MVC",
        "Spring Core",
        "RESTful API"
      ],
      github: "https://github.com/sarthakpawar0912/Service-Booking-System-Application",
      video: "#",
      description: "A dynamic Service Booking System built with Angular, Spring Boot, MySQL, and Ng Zorro UI. It allows companies to post ads, manage bookings, and clients to search, book services, and leave reviews."
    }
  },
  "hotel-management": {
    title: "Hotel Management System",
    frontend: {
      title: "Hotel Management Web Front-end",
      skills: [
        "Angular 18",
        "Routing",
        "TypeScript",
        "Ng-Zorro",
        "HTML",
        "CSS",
        "MySQL"
      ],
      github: "https://github.com/sarthakpawar0912/Hotel-Management-Web",
      video: "#",
      description: "Hotel Management System with Spring Boot 3, Spring Security 6, Angular 16, Ng Zorro UI, and MySQL. Features secure JWT auth, room management, and reservation handling for admins and customers."
    },
    backend: {
      title: "Hotel Management Application Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Hibernate",
        "Spring",
        "Spring MVC",
        "JWT Authentication",
        "Spring Security",
        "MySQL",
        "JDBC"
      ],
      github: "https://github.com/sarthakpawar0912/Hotel-Management-Application",
      video: "#",
      description: "Hotel Management System with Spring Boot 3, Spring Security 6, Angular 16, Ng Zorro UI, and MySQL. Features secure JWT auth, room management, and reservation handling for admins and customers."
    }
  },
  "blog-application": {
    title: "Blog Application",
    frontend: {
      title: "Blog Application Front-end",
      skills: [
        "Angular 18",
        "Routing",
        "Hosting",
        "Ng ZORRO",
        "HTML",
        "CSS",
        "Bootstrap",
        "Deployment",
        "TypeScript"
      ],
      github: "https://github.com/sarthakpawar0912/BlogApplication-Web",
      video: "#",
      description: "A Blog Application built with Angular 18 and Ng-Zorro, enabling users to create, view, and search blogs with images, real-time like/view counts, and tags for enhanced content organization."
    },
    backend: {
      title: "Blog Application Backend",
      skills: [
        "JWT Authentication",
        "Spring Boot",
        "MySQL",
        "ORM",
        "Hibernate",
        "Spring Security",
        "Spring MVC",
        "Spring Core"
      ],
      github: "https://github.com/sarthakpawar0912/Blog-Application",
      video: "#",
      description: "A Blog Application built with Spring Boot that allows users to post blogs, search by blog name, add comments, and track real-time like and view counts. This application ensures dynamic interaction and engagement with instant updates on blog interactions."
    }
  },
  "expense-income-tracker": {
    title: "Expense Income Tracker",
    frontend: {
      title: "Expense Income Tracker Front-end",
      skills: [
        "Chart API",
        "HTML",
        "CSS",
        "Bootstrap",
        "TypeScript",
        "Angular 18",
        "MySQL",
        "Hosting",
        "Deployment"
      ],
      github: "https://github.com/sarthakpawar0912/Expense-Income-Tracker-Web",
      video: "#",
      description: "An Income-Expense Tracker to manage personal finances. Users can post income and expenses, track statistics like total income, total expenses, and recent transactions, and visualize financial insights with charts."
    },
    backend: {
      title: "Expense Income Tracker Backend",
      skills: [
        "Spring Boot",
        "Chart API",
        "Spring Security",
        "Spring JDBC",
        "Spring Hibernate",
        "Spring ORM",
        "Java 8"
      ],
      github: "https://github.com/sarthakpawar0912/Expense-Income-Tracker",
      video: "#",
      description: "An Income-Expense Tracker to manage personal finances. Users can post income and expenses, track statistics like total income, total expenses, and recent transactions, and visualize financial insights with charts."
    }
  },
  "fitness-tracker": {
    title: "Fitness Tracker Application",
    frontend: {
      title: "Fitness Tracker Front-end",
      skills: [
        "Angular 18",
        "Routing",
        "Hosting",
        "Ng ZORRO",
        "HTML",
        "CSS",
        "Bootstrap",
        "Graph API",
        "Chart API"
      ],
      github: "https://github.com/sarthakpawar0912/Fitness-Tracker-Web",
      video: "#",
      description: "Fitness tracker that monitors calories burned, distance covered, steps taken, and workout progress. Includes dashboards, goal tracking, and interactive charts for insightful analytics."
    },
    backend: {
      title: "Fitness Tracker Backend",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Spring ORM",
        "Spring Hibernate",
        "Spring JDBC",
        "Spring Security",
        "Graph API",
        "RESTful API"
      ],
      github: "https://github.com/sarthakpawar0912/Fitness-Tracker-Application",
      video: "#",
      description: "A Spring Boot-based fitness tracker that monitors calories burned, distance covered, steps taken, and workout progress. Includes dashboards, goal tracking, and interactive charts for insightful analytics."
    }
  },
  "quiz-application": {
    title: "Quiz Application",
    frontend: {
      title: "Quiz Application Front-end",
      skills: [
        "NG ZORRO",
        "Angular 18",
        "MySQL",
        "Hosting",
        "HTML",
        "CSS",
        "Bootstrap",
        "TypeScript",
        "Routing",
        "Design"
      ],
      github: "https://github.com/sarthakpawar0912/Quiz-Application-WEB",
      video: "#",
      description: "The Quiz Application Frontend is built using Angular and connects to a Spring Boot backend to provide an interactive online examination experience. It features user-friendly interfaces for admin and student roles. Admins can manage quizzes and monitor results, while students can register, log in, take timed tests, and view their scores. Real-time countdown, automatic submission, and responsive design ensure a smooth user experience."
    },
    backend: {
      title: "Quiz Application Backend",
      skills: [
        "Spring Boot",
        "Spring Security",
        "Spring ORM",
        "Spring Hibernate",
        "Spring JDBC",
        "Graph API",
        "RESTful API",
        "MySQL",
        "Spring MVC"
      ],
      github: "https://github.com/sarthakpawar0912/Quiz-Application",
      video: "#",
      description: "Quiz Application allows users to take online quizzes while enabling admins to create and manage tests. Users can sign up, log in, take tests, and view their results. The platform supports real-time test monitoring, automatic submission when time runs out, and an admin dashboard to track test performances."
    }
  }
}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const unwrappedParams = use(params)
  const project = projectDetails[unwrappedParams.id as keyof typeof projectDetails]

  useEffect(() => {
    // Set loading to false after component mounts
    setIsLoading(false)
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Add event listener for browser back button
    const handlePopState = () => {
      router.push('/projects')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [router])

  if (!project) {
    return (
      <AnimatePresence mode="wait">
        <motion.div 
          key="not-found"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-black text-white flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Button onClick={() => router.push('/projects')}>
              Back to Projects
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main 
        key="project-detail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-black text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Frontend Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card-gradient rounded-xl p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold">{project.frontend.title}</h2>
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsVideoOpen(true)}
                    className="text-gray-400 hover:text-white"
                  >
                    <Youtube size={24} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-gray-400 hover:text-white"
                  >
                    <a
                      href={project.frontend.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={24} />
                    </a>
                  </Button>
                </div>
              </div>
              <p className="text-gray-300 mb-8 text-lg">{project.frontend.description}</p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Skills:</h3>
                <div className="flex flex-wrap gap-3">
                  {project.frontend.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-base font-medium border border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="card-gradient rounded-xl p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold">{project.backend.title}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-gray-400 hover:text-white"
                >
                  <a
                    href={project.backend.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                  </a>
                </Button>
              </div>
              <p className="text-gray-300 mb-8 text-lg">{project.backend.description}</p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Skills:</h3>
                <div className="flex flex-wrap gap-3">
                  {project.backend.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-base font-medium border border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Video Modal */}
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-4xl bg-black border-white/10">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Project Demo</DialogTitle>
            </DialogHeader>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/t9Oh4ePek5E?autoplay=1&vq=hd1080"
                title="Task Management System Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
      </motion.main>
    </AnimatePresence>
  )
} 
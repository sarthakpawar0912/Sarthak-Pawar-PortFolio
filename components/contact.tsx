"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pawarsr06@gmail.com",
      link: "mailto:pawarsr06@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8208296463",
      link: "tel:+918208296463",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sarthak-pawar",
      link: "https://linkedin.com/in/sarthak-pawar",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sarthakpawar0912",
      link: "https://github.com/sarthakpawar0912",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm actively seeking new opportunities in software development and am excited to contribute my skills to
            innovative projects.
          </p>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Whether you have a potential opportunity, a technical question, or just want to connect, I'll be glad to
            engage in a meaningful conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.link.startsWith("http") ? "_blank" : undefined}
              rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center p-6 rounded-lg card-gradient hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <info.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400">{info.label}</p>
                <p className="font-medium text-lg break-all">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Facebook, Linkedin, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/shehab.ahmed.711804", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shehab-eldinahmed", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/shehab-hub-0", label: "GitHub" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl glow-border-cyan"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-cyan-400/30 focus:border-cyan-400"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-cyan-400/30 focus:border-cyan-400"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50 border-cyan-400/30 focus:border-cyan-400 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white glow-cyan"
              >
                {submitted ? (
                  "Message Sent!"
                ) : isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Right side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl glow-border-emerald">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:shahbahmed56p@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>shahbahmed56p@gmail.com</span>
                </a>
                <a
                  href="tel:+201011457319"
                  className="flex items-center gap-4 text-muted-foreground hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span>+20 101 145 7319</span>
                </a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl glow-border-cyan">
              <h3 className="text-2xl font-bold mb-6">Social Media</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl hover:scale-110 hover:glow-cyan transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

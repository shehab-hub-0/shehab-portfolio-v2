"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Database, Cloud, BarChart3, Workflow, Activity } from "lucide-react"

const services = [
  {
    icon: Workflow,
    title: "ETL Pipelines & Data Integration",
    description:
      "Design and implement robust ETL processes to extract, transform, and load data from multiple sources.",
  },
  {
    icon: Database,
    title: "Big Data Processing",
    description:
      "Process and analyze large-scale datasets using Apache Spark, Hadoop, and distributed computing frameworks.",
  },
  {
    icon: Activity,
    title: "Real-Time Streaming",
    description:
      "Build real-time data streaming solutions with Apache Kafka for instant data processing and analytics.",
  },
  {
    icon: Cloud,
    title: "Cloud Data Engineering",
    description: "Architect and deploy scalable data solutions on AWS and Azure cloud platforms.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description: "Design efficient database schemas and optimize query performance for maximum throughput.",
  },
  {
    icon: BarChart3,
    title: "Dashboarding & Visualization",
    description: "Create interactive dashboards and visualizations to communicate data insights effectively.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-500/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl glow-border-cyan hover:glow-cyan transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-4 inline-block p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

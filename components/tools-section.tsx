"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Database,
  Cloud,
  Workflow,
  BarChart3,
  Server,
  Code2,
  Container,
  Zap,
  FileSpreadsheet,
  Snowflake,
  Boxes,
  Activity,
} from "lucide-react"

const tools = [
  { name: "Python", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "Apache Spark", icon: Zap },
  { name: "Apache Kafka", icon: Activity },
  { name: "Apache Airflow", icon: Workflow },
  { name: "Docker", icon: Container },
  { name: "Azure", icon: Cloud },
  { name: "AWS", icon: Server },
  { name: "Power BI", icon: BarChart3 },
  { name: "Snowflake", icon: Snowflake },
  { name: "Hadoop", icon: Boxes },
  { name: "Excel", icon: FileSpreadsheet },
]

export function ToolsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tools" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-6 rounded-2xl glow-border-emerald hover:glow-emerald transition-all duration-300 group cursor-pointer flex flex-col items-center justify-center gap-3"
            >
              <tool.icon className="w-10 h-10 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-center">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

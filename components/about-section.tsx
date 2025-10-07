"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  "Python",
  "SQL",
  "Apache Spark",
  "Apache Kafka",
  "Apache Airflow",
  "AWS",
  "Azure",
  "Docker",
  "PostgreSQL",
  "MongoDB",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I'm a passionate <span className="text-cyan-400 font-semibold">Data Engineer</span> with expertise in
              building robust data pipelines, processing big data, and delivering cloud-based solutions. My journey in
              data engineering has equipped me with the skills to transform raw data into actionable insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              With a strong foundation in{" "}
              <span className="text-emerald-400 font-semibold">Python, SQL, and modern data tools</span>, I specialize
              in designing scalable ETL pipelines, optimizing data workflows, and implementing real-time streaming
              solutions. I'm committed to leveraging cutting-edge technologies to solve complex data challenges.
            </p>
          </motion.div>

          {/* Right side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl glow-border-cyan"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Core Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full border border-cyan-400/30 hover:border-cyan-400 hover:glow-cyan transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

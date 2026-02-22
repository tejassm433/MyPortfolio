import { motion } from "framer-motion"

const skills = [
  "Java",
  "Spring Boot",
  "Microservices",
  "Kafka",
  "PostgreSQL",
  "System Design",
  "REST APIs",
  "Docker",
  "CI/CD",
  "Redis",
  "Transaction Management",
  "Concurrency Handling"
]

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Core Engineering Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 rounded-full 
                         bg-white dark:bg-gray-900 
                         text-gray-800 dark:text-gray-200 
                         shadow-md"
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
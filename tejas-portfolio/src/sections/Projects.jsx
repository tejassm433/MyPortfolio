import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Projects() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/tejutejas162/repos")
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6)

        setRepos(filtered)
      })
  }, [])

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-black transition"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Engineering Projects
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Production-focused backend systems with financial-grade integrity.
          </p>
        </div>

        {/* 🔥 Featured FinLedger Project */}
        <div className="mb-20 flex justify-center">
          <div className="w-full max-w-4xl p-10 rounded-3xl 
                          bg-gradient-to-br from-blue-600 to-indigo-700 
                          text-white shadow-2xl">

            <h3 className="text-2xl font-bold mb-6 text-center">
              FinLedger – Transaction-Safe Digital Wallet Backend
            </h3>

            <ul className="space-y-3 text-sm md:text-base max-w-2xl mx-auto">
              <li>✔ ACID-compliant fund transfer system</li>
              <li>✔ Idempotent API to prevent duplicate transactions</li>
              <li>✔ Row-level DB locking for concurrency safety</li>
              <li>✔ Kafka-based event publishing</li>
              <li>✔ PostgreSQL with transactional integrity</li>
            </ul>

            <div className="flex justify-center mt-8">
              <a
                href="https://github.com/tejutejas162"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:scale-105 transition"
              >
                View Source Code
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Other GitHub Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl 
                         bg-gray-100 dark:bg-gray-900 
                         hover:shadow-xl hover:-translate-y-1 
                         transition-all duration-300 
                         flex flex-col justify-between 
                         min-h-[200px]"
            >
              <div>
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {repo.name}
                </h3>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {repo.description || "Backend system implementation"}
                </p>
              </div>

              <div className="mt-6 text-xs text-gray-500 dark:text-gray-500">
                ⭐ {repo.stargazers_count} Stars
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 
                        bg-gradient-to-br 
                        from-gray-100 to-gray-200 
                        dark:from-black dark:to-gray-900 
                        transition-all duration-500">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl backdrop-blur-xl 
                   bg-white/30 dark:bg-white/5 
                   border border-white/20 
                   p-10 rounded-3xl shadow-xl">

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold 
                       text-gray-900 dark:text-white">
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Tejas SM
          </span>
        </h1>

        {/* Typing Role */}
        <p className="mt-6 text-lg md:text-xl 
                      text-gray-600 dark:text-gray-400">
          <Typewriter
            words={[
              "Backend Engineer – FinTech Systems",
              "Builder of Transaction-Safe Architectures",
              "Java & Spring Boot Specialist",
              "Event-Driven Microservices Developer"
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row 
                        items-center justify-center gap-4">

          <a
            href="#projects"
            className="px-6 py-3 rounded-xl 
                       bg-blue-600 hover:bg-blue-700 
                       text-white font-medium 
                       transition duration-300 shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl 
                       border border-gray-400 
                       dark:border-gray-600 
                       text-gray-800 dark:text-gray-200 
                       hover:bg-gray-200 
                       dark:hover:bg-gray-800 
                       transition duration-300"
          >
            Contact Me
          </a>

          <a
            href="/Tejassm_433.pdf"
            download
            className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white transition"
          >
            Download Resume
          </a>
        </div>

      </motion.div>
    </section>
  )
}

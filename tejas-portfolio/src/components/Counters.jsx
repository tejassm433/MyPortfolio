import CountUp from "react-countup"
import { motion } from "framer-motion"

export default function Counters() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 transition">

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                {[
                    { value: 4, suffix: "+", label: "Years in Backend Engineering" },
                    { value: 30, suffix: "+", label: "REST APIs Designed" },
                    { value: 3, suffix: "+", label: "Event-Driven Systems Built" },
                    { value: 99.9, suffix: "%", label: "System Reliability Targeted" }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md"
                    >
                        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                            <CountUp end={item.value} duration={2} />
                            {item.suffix}
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            {item.label}
                        </p>
                    </motion.div>
                ))}

            </div>
        </section>
    )
}
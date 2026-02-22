import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/10 dark:bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Tejas SM
        </h1>

        <div className="flex items-center gap-6">
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
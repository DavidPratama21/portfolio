import { useState } from "react";
import "./App.css";
import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            <main className="bg-white dark:bg-gray-900 min-h-screen">
                {/* Navigation */}
                {/* <Navigation /> */}
                <nav className="py-6 px-4 sm:px-10 flex justify-between items-center bg-white dark:bg-gray-900 shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                        John Doe
                    </h1>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                            {darkMode ? "Light" : "Dark"}
                        </button>
                        <div className="hidden md:flex space-x-8">
                            <a
                                href="#about"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                            >
                                Projects
                            </a>
                            <a
                                href="#skills"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                            >
                                Skills
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
                {/* Hero Section */}
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}

export default App;

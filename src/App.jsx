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
    return (
        <div>
            <main className="bg-white dark:bg-gray-900 min-h-screen">
                <Navigation />
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

const Navigation = () => {
    return (
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
    );
};

export default Navigation;

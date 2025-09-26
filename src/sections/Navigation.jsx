import Toggle_dark_mode from "../components/Toggle_dark_mode";
const Navigation = () => {
  return (
    <nav className="relative py-6 px-4 sm:px-10 flex justify-between items-center bg-white dark:bg-gray-900 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        David Pratama
      </h1>
      <div className="flex items-center space-x-4">
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
        <Toggle_dark_mode />
      </div>
    </nav>
  );
};

export default Navigation;

import Profile from "../assets/Profile.JPG"
const Hero = () => {
    return (
        <section className="py-20 px-4 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                    Hi, I'm <span className="text-blue-600">David Pratama</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
                    Frontend Developer
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                    I build exceptional digital experiences with modern
                    technologies. Currently focused on React and design systems.
                </p>
                <div className="flex space-x-4">
                    <a href="#projects" className="grid place-content-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
                        View My Work
                    </a>
                    <a href="#contact" className="grid place-content-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500">
                    <img
                        src={Profile}
                        alt="Professional headshot of John Doe, a frontend developer, wearing a blue shirt against a modern office background"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

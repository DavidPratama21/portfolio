const Projects = () => {
    const projects = [
        {
            name: "E-commerce Platform",
            description:
                "A full-featured online store with cart functionality, payment processing, and admin dashboard.",
            image: "https://placehold.co/600x400",
            tags: ["React", "Redux", "Firebase", "Stripe"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            name: "Task Management App",
            description:
                "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.",
            image: "https://placehold.co/600x400",
            tags: ["React", "TypeScript", "Tailwind CSS", "DnD"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            name: "Weather Dashboard",
            description:
                "Real-time weather information with interactive maps and 7-day forecasts for any location worldwide.",
            image: "https://placehold.co/600x400",
            tags: ["React", "Chart.js", "API Integration"],
            demoLink: "#",
            codeLink: "#",
        },
        {
            name: "Social Media Dashboard",
            description:
                "Analytics dashboard showing key metrics and trends across multiple social media platforms.",
            image: "https://placehold.co/600x400",
            tags: ["React", "Next.js", "GraphQL"],
            demoLink: "#",
            codeLink: "#",
        },
    ];
    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-10 bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 text-center">
                    My <span className="text-blue-600">Projects</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={`Screenshot of ${project.name} project showing ${project.description}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "https://placehold.co/600x400";
                                    }}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-3">
                                    <a
                                        href={project.demoLink}
                                        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-400 font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

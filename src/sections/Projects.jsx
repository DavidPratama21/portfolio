import Preview_shiba from "../assets/shibahidrolikpratama.com.png";
const Projects = () => {
    const projects = [
        {
            name: "Shiba Hidrolik Pratama",
            description:
                "A company profile website developed for PT Shiba Hidrolik Pratama to showcase their hydraulic manufacturing services, product catalog, and company information in a responsive and user-friendly layout.",
            image: Preview_shiba,
            // image: "https://placehold.co/600x400",
            tags: ["PHP", "Tailwind"],
            demoLink: "https://shibahidrolikpratama.com/",
            codeLink: "#",
        },
        {
            name: "Video Belajar",
            description:
                "An EduTech web application developed during the Harisenin bootcamp, using React.js, Zustand, and Firebase Authentication to deliver a responsive, video-based learning experience.",
            // image: "https://image.thum.io/get/width/800/https://videobelajar-harisenin.netlify.app/",
            image: "https://placehold.co/600x400",
            tags: ["React", "Tailwind CSS", "Zustand"],
            demoLink: "https://videobelajar-harisenin.netlify.app/",
            codeLink:
                "https://github.com/DavidPratama21/harisenin-videobelajar",
        },
        // {
        //     name: "Sarana Gema Rekayasa",
        //     description:
        //         "A company profile website developed for a hydraulic component manufacturer, showcasing CNC-powered production capabilities and a fully equipped workshop. Designed with a clean, responsive layout to present services and company information effectively.",
        //     image: "https://placehold.co/600x400",
        //     tags: ["React", "Tailwind CSS"],
        //     demoLink: "#",
        //     codeLink: "#",
        // },
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
                                    className="w-full h-full object-cover object-top"
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

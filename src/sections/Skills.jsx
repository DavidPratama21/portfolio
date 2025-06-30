const Skills = () => {
    const skills = [
        {
            name: "React",
            level: 90,
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "JavaScript",
            level: 95,
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "TypeScript",
            level: 85,
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "HTML",
            level: 95,
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS",
            level: 90,
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "Tailwind CSS",
            level: 85,
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
            name: "Node.js",
            level: 70,
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "Git",
            level: 80,
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
    ];
    return (
        <section id="skills" className="py-20 px-4 sm:px-10">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 text-center">
                    My <span className="text-blue-600">Skills</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <img
                                    src={skill.icon}
                                    alt={`${skill.name} programming language or technology icon`}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "https://placehold.co/64x64";
                                    }}
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                {skill.name}
                            </h3>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-3">
                                <div
                                    className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

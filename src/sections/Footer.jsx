

const Footer = () => {
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        },
        {
            name: "Twitter",
            url: "https://twitter.com",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
        },
        {
            name: "Dribbble",
            url: "https://dribbble.com",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dribbble/dribbble-original.svg",
        },
    ];
    return (
        <footer className="py-12 px-4 sm:px-10 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-4">
                            John Doe
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Frontend Developer & UI Designer
                        </p>
                    </div>
                    <div className="text-center md:text-right">
                        <div className="flex justify-center md:justify-end space-x-6 mb-6">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                                >
                                    <img
                                        src={link.icon}
                                        alt={`${link.name} social media icon`}
                                        className="w-6 h-6"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                                "https://placehold.co/24x24";
                                        }}
                                    />
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-500 dark:text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} John Doe. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

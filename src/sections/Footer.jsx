const Footer = () => {
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/DavidPratama21",
            // icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            // icon: "https://static.cdnlogo.com/logos/g/69/github-icon.svg",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/david-prt/",
            // icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
            // icon: "https://static.cdnlogo.com/logos/l/72/linkedin-icon.svg",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg",
        },
        {
            name: "Instagram",
            url: "http://instagram.com/daun_coklat",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg",
        },
    ];
    return (
        <footer className="py-12 px-4 sm:px-10 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-4">
                            David Pratama
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Frontend Developer
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
                            &copy; {new Date().getFullYear()} David Pratama. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

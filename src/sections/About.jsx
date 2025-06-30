const About = () => {
    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-10 bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 text-center">
                    About <span className="text-blue-600">Me</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                            Who am I?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            I'm a passionate frontend developer with 5 years of
                            experience creating modern web applications. I
                            specialize in React, TypeScript, and building
                            scalable UI components.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            My approach combines technical excellence with
                            design sensibility, ensuring the products I build
                            are both functional and beautiful.
                        </p>
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                Personal Information
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Name:
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        John Doe
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Email:
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        john@example.com
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Location:
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        San Francisco, CA
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Freelance:
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                            My Experience
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                                <div className="flex justify-between mb-2">
                                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                        Senior Frontend Developer
                                    </h4>
                                    <span className="text-blue-600">
                                        2020-Present
                                    </span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 mb-2">
                                    TechCorp Inc.
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Lead frontend development for enterprise
                                    SaaS products using React and TypeScript.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                                <div className="flex justify-between mb-2">
                                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                        Frontend Developer
                                    </h4>
                                    <span className="text-blue-600">
                                        2018-2020
                                    </span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 mb-2">
                                    WebSolutions LLC
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Developed responsive websites and web
                                    applications for clients across various
                                    industries.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                                <div className="flex justify-between mb-2">
                                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                        UI/UX Designer
                                    </h4>
                                    <span className="text-blue-600">
                                        2016-2018
                                    </span>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 mb-2">
                                    DesignStudio
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Created wireframes, prototypes, and final
                                    designs for web and mobile applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

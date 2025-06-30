import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 sm:px-10">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 text-center">
                    Get In <span className="text-blue-600">Touch</span>
                </h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-700 dark:text-gray-300 mb-2"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                placeholder="John Smith"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700 dark:text-gray-300 mb-2"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                            placeholder="Project Inquiry"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-gray-700 dark:text-gray-300 mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

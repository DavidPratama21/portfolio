import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    //  Variabel utk template email
    const templateParams = {
        from_name: formData.name,
        from_phoneNum: formData.phone,
        from_email: formData.email,
        to_name: "Dapid",
        message: formData.message,
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS service ID, template ID, and Public Key
        const serviceId = "service_3oynwhk";
        const templateId = "template_jaig19i";
        const publicKey = "55vSfEafeh6IkONm7";

        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);

        // Kirim email with EmailJS
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Berhasil masku", response);
                toast.success("Message sent successfully👌", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000, // Durasi toast (dalam milidetik)
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.log("Ada error nih:", error);

                toast.error("Failed to send email, please try again", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-10">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 text-center">
                    Get In <span className="text-blue-600">Touch</span>
                </h2>
                <form onSubmit={""} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
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
                                placeholder="David Pratama"
                            />
                        </div>
                        {/* Email */}
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
                                placeholder="davidprt202@gmail.com"
                            />
                        </div>
                    </div>
                    {/* Subject */}
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
                    {/* Message */}
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
            <ToastContainer />
        </section>
    );
};

export default Contact;

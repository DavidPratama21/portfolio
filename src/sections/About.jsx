const About = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      at: "PT. Shiba Hidrolik Pratama",
      desc: "Updated the company's old website using PHP, JavaScript, and Tailwind CSS into a new, modern version.",
      time: "Jul, 2024 - Nov, 2024",
    },
    {
      role: "FullStack Developer Bootcamp",
      at: "HariSenin",
      desc: "Developed an interactive edutech web platform as a Fullstack Developer using React and Express during the Harisenin bootcamp.",
      time: "Mar, 2025 - Aug, 2025",
    },
  ];

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
              I’m David, a Fullstack Developer with a background in Digital
              Business. I’ve built real-world web projects using React.js and
              Zustand through the Harisenin bootcamp, and gained practical
              experience during my internship as a Web Developer. I'm
              detail-oriented, eager to learn, and passionate about building
              impactful digital solutions.
            </p>
            {/* <p className="text-gray-600 dark:text-gray-400 mb-6">
                            I'm a passionate frontend developer with 5 years of
                            experience creating modern web applications. I
                            specialize in React and building scalable UI
                            components.
                        </p> */}
            {/* <p className="text-gray-600 dark:text-gray-400 mb-6">
                            My approach combines technical excellence with
                            design sensibility, ensuring the products I build
                            are both functional and beautiful.
                        </p> */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Personal Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Name:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    David Pratama
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Email:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    davidprt202@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Location:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Tangerang Selatan, Banten
                  </p>
                </div>
                <a
                  href="./CV_David Pratama.pdf"
                  download
                  className="grid place-content-center border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 dark:bg-gray-900 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              My Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((e, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                >
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {e.role}
                    </h4>
                    <span className="text-blue-600">{e.time}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    {e.at}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

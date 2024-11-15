import CallToAction from '../components/CallToAction';
import { FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { BiLogoNodejs } from "react-icons/bi";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";

export default function Projects() {
  const imageUrl =
    "https://www.talk-business.co.uk/wp-content/uploads/2015/12/shutterstock_122664079-min.jpg";
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 mt-3">My Projects</h1>
        <p className="text-xl">
          Explore the projects I’ve built using various technologies and
          frameworks.
        </p>
      </div>

      {/* Featured Projects Section */}
      <div className="space-y-16 p-4 ml-6 mr-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 px-6 md:px-12 bg-gray-800 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <img
              src={imageUrl}
              alt="Project 1"
              className="w-full h-auto rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Tech Blog</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              A blog website where users can post tech articles and interact
              with others. This platform allows authors to write and share
              insightful tech content, while users can leave comments, like
              articles, and engage in discussions. Built using React for the
              frontend and Node.js with MongoDB for the backend, this project
              incorporates a modern, clean design that ensures an intuitive user
              experience. It also features user authentication and content
              moderation to keep discussions healthy.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-400 text-lg font-semibold hover:underline transform transition duration-300 hover:scale-105"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 px-6 md:px-12 bg-gray-800 rounded-lg shadow-lg">
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Portfolio Website
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              A personal portfolio to showcase my skills, projects, and
              experience. This site serves as a digital resume, where potential
              clients or employers can learn about my technical abilities, view
              my previous work, and get in touch for collaborations. Built using
              HTML, CSS, JavaScript, and React, it includes a dynamic,
              responsive layout that adjusts seamlessly across different screen
              sizes. The project also features animations to enhance the user
              experience.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-400 text-lg font-semibold hover:underline transform transition duration-300 hover:scale-105"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={imageUrl}
              alt="Project 2"
              className="w-full h-auto rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 px-6 md:px-12 bg-gray-800 rounded-lg shadow-lg">
          <div className="md:w-1/2">
            <img
              src={imageUrl}
              alt="Project 3"
              className="w-full h-auto rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Weather App
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              An app that shows the current weather and forecasts for any
              location. The app uses real-time data from weather APIs to provide
              accurate weather updates, including temperature, humidity, wind
              speed, and air pressure. Users can search for any city globally
              and get instant weather reports. Built using React for the
              frontend and integrated with third-party APIs, this project
              emphasizes efficient state management and responsive design.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-400 text-lg font-semibold hover:underline transform transition duration-300 hover:scale-105"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='p-10'>
      <CallToAction/>
      </div>

      {/* Tech Stack Section */}
      <div className="py-12 px-6 md:px-12 bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gradient mb-6">
          Tech Stack
        </h2>
        <p className="text-lg text-center text-gray-300 mb-12">
          Here are the technologies I used to build the projects and
          applications.
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            <div className="flex items-center justify-center mx-12 text-5xl">
              <FaReact />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <FaHtml5 />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <FaCss3Alt />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <FaPython />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <BiLogoNodejs />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <SiMongodb />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <SiTailwindcss />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <IoLogoJavascript />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <IoLogoFirebase />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <SiExpress />
            </div>

            {/* Duplicate the same icons for continuous scrolling */}
            <div className="flex items-center justify-center mx-12 text-5xl">
              <FaReact />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <FaHtml5 />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <FaCss3Alt />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <FaPython />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <BiLogoNodejs />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <SiMongodb />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <SiTailwindcss />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <IoLogoJavascript />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <IoLogoFirebase />
            </div>
            <div className="flex items-center justify-center mx-12 text-5xl">
              <SiExpress />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Interested in working together?
        </h2>
        <p className="text-lg text-gray-500 mb-6">
          I’m always open to collaborations, freelance work, or just a friendly
          tech chat. Let’s build something amazing together!
        </p>
        <a
          href="mailto:shreyarajput600@gmail.com"
          className="inline-block text-blue-500 text-xl font-medium transition-transform transform hover:scale-105 hover:text-blue-700 mb-5"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

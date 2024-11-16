import CallToAction from "../components/CallToAction";
import { FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { BiLogoNodejs } from "react-icons/bi";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaGithub} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import chat_1 from "../assets/chat_1.png";
import chat_2 from "../assets/chat_2.png";
import chat_3 from "../assets/chat_3.png";
import chat_4 from "../assets/chat_4.png";
import chat_5 from "../assets/chat_5.png";
import chat_6 from "../assets/chat_6.png";
import shop_1 from "../assets/shop_1.png";
import shop_2 from "../assets/shop_2.png";
import shop_3 from "../assets/shop_3.png";
import shop_4 from "../assets/shop_4.png";
import shop_5 from "../assets/shop_5.png";
import shop_6 from "../assets/shop_6.png";
import shop_7 from "../assets/shop_7.png";
import shop_8 from "../assets/shop_8.png";
import blog_1 from "../assets/blog_1.png";
import blog_2 from "../assets/blog_2.png";
import blog_3 from "../assets/blog_3.png";
import blog_4 from "../assets/blog_4.png";
import blog_5 from "../assets/blog_5.png";
import blog_6 from "../assets/blog_6.png";
import blog_7 from "../assets/blog_7.png";
import blog_8 from "../assets/blog_8.png";
import blog_9 from "../assets/blog_9.png";


export default function Projects() {
  const chat_images = [chat_1, chat_2, chat_3, chat_4, chat_5, chat_6];
  const shop_images = [
    shop_1,
    shop_2,
    shop_3,
    shop_4,
    shop_5,
    shop_6,
    shop_7,
    shop_8,
  ];
  const blog_images = [
    blog_1,
    blog_2,
    blog_3,
    blog_4,
    blog_5,
    blog_6,
    blog_7,
    blog_8,
    blog_9,
  ];
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
          <div className="md:w-1/2 w-full h-full">
            <div className="w-full">
              <Fade duration={2000} arrows={false} indicators={true}>
                {chat_images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex justify-center items-center px-2"
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[300px] object-contain rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                ))}
              </Fade>
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Expressions Chat App
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Expressions is a real-time chat application built with Node.js,
              Express.js, and Socket.io, designed for instant messaging and
              seamless communication. It features user presence detection and
              message history, offering an engaging chat experience. The
              application boasts a responsive, user-friendly interface,
              optimized for both web and mobile platforms, ensuring easy access
              and interaction. With a focus on real-time communication, this
              project leverages modern web technologies to deliver a fast and
              intuitive messaging experience.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/Shreya-Kumari003/react-chat-app"
                target="_blank"
                className="text-blue-400 text-lg font-semibold hover:underline transform transition duration-300 hover:scale-105 flex"
              >
                View Project <FaGithub className="text-3xl ml-2"/>
              </a>
              <a
                href="https://react-chat-app-1-g2j7.onrender.com"
                target="_blank"
                className="text-red-400 text-lg font-semibold hover:underline transform transition duration-300 hover:scale-105 flex"
              >
                See live
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 px-6 md:px-12 bg-gray-800 rounded-lg shadow-lg">
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Style Sphere: E-Commerce site
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              "Style Sphere is an e-commerce platform for buying and selling
              products, built with React, Redux, and Node.js. The app features
              both admin and shopping views, providing an intuitive interface
              for managing products and user interactions. Users can sign up,
              browse product listings, view product details, and make purchases.
              The admin view includes a header, sidebar, and product management
              features like creating and listing products. Built with a
              modern tech stack, this app ensures seamless user experiences,
              responsive design, and secure user authentication using JWT and
              bcryptjs. Integration with PayPal for payments and Cloudinary for
              image management makes the platform highly scalable and
              efficient."
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/Shreya-Kumari003/E-Commerce-Deploy" target="_blank"
                className="text-blue-400 text-lg font-semibold hover:underline transform transition duration-300 hover:scale-105 flex"
              >
                View Project <FaGithub className="text-3xl ml-2"/>
              </a>
              <a
                href="https://e-commerce-deploy-1.onrender.com"
                target="_blank"
                className="text-red-400 text-lg font-semibold hover:underline transform transition duration-300 hover:scale-105 flex"
              >
                See live
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-full">
            <div className="w-full">
              <Fade duration={2000} arrows={false} indicators={true}>
                {shop_images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex justify-center items-center px-2"
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[300px] object-contain rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 px-6 md:px-12 bg-gray-800 rounded-lg shadow-lg">
          <div className="md:w-1/2 w-full h-full">
            <div className="w-full">
              <Fade duration={2000} arrows={false} indicators={true}>
                {blog_images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex justify-center items-center px-2"
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[300px] object-contain rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                ))}
              </Fade>
            </div>
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              My blog site
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
            "Shreya's Blog" is a platform where users can post, read, and interact with tech-related content. It allows authors to share insightful blog posts, while readers can leave comments, like articles, and engage in discussions. Built using React for the frontend and Node.js with MongoDB for the backend, the app features a user-friendly interface, robust authentication, and efficient content management. The application is designed for both web and mobile platforms, ensuring a seamless experience across devices.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/Shreya-Kumari003/Blog-App" target="_blank"
                className="text-blue-400 text-lg font-semibold hover:underline transform transition duration-300 hover:scale-105 flex"
              >
                View Project <FaGithub className="text-3xl ml-2"/>
              </a>
              <a
                href="https://blog-app-backend-rnpi.onrender.com"
                target="_blank"
                className="text-red-400 text-lg font-semibold hover:underline transform transition duration-300 hover:scale-105 flex"
              >
                See live
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <CallToAction />
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

import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-animation text-white">
      <div className="max-w-4xl mx-auto p-6 bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-xl rounded-lg">
        {/* Hero Section */}
        <div className="text-center my-10">
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Welcome to Shreya's Tech Haven
          </h1>
          <p className="mt-4 text-lg text-gray-300 flex items-center justify-center">
            <span className="text-pink-500">&lt;</span>
            <span className="mx-2">
              <Typewriter
                words={[
                  "Explore the latest in tech!",
                  "Learn coding step by step!",
                  "Stay updated with AI trends!",
                  "Dive into the future with us!",
                ]}
                loop={0}
                cursor
                cursorStyle=""
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            <span className="text-pink-500">/&gt;</span>
          </p>
        </div>

        <div className="my-10 border-t border-gray-700"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://media.istockphoto.com/photos/chalkboard-background-about-me-picture-id467101514?k=6&m=467101514&s=170667a&w=0&h=VRSPaONHHFOd_uIa8eUv8rEWvPXWiIOBYRL7Vtao8F0="
              alt="About us illustration"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-lg opacity-50 hover:opacity-30 transition-opacity duration-300"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold drop-shadow-md">
              About Shreya's Blog
            </h2>
            <p className="leading-relaxed">
              At Shreya's Tech Haven, we believe in simplifying the complexities
              of technology. From cutting-edge innovations to hands-on
              tutorials, we aim to provide tech enthusiasts and professionals
              with knowledge, inspiration, and a supportive community.
            </p>
            <p className="leading-relaxed">
              Whether you're diving into coding, exploring the latest gadgets,
              or staying ahead in AI and cloud computing, we've got you covered.
            </p>
            <Link to="/search">
              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
                Explore Articles
              </button>
            </Link>
          </div>
        </div>
        <div className="my-20">
          <h2 className="text-center text-4xl font-bold mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Card 1 */}
            <div
              className="p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-700
"
            >
              <h2 className="text-xl font-bold text-white">
                Latest Technologies
              </h2>
              <p className="mt-2 text-gray-300">
                Discover emerging trends and innovations shaping the tech world.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-700">
              <h2 className="text-xl font-bold text-white">Coding Tutorials</h2>
              <p className="mt-2 text-gray-300">
                Learn programming step-by-step with our beginner-friendly
                guides.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-700">
              <h2 className="text-xl font-bold text-white">AI and Beyond</h2>
              <p className="mt-2 text-gray-300">
                Stay informed about artificial intelligence and its impact on
                the future.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-gradient-animation {
          background: linear-gradient(
            45deg,
            #1e3a8a,
            /* Navy Blue */ #2563eb,
            /* Sky Blue */ #14b8a6,
            /* Green */ #facc15,
            /* Bright Pink */ #9333ea,
            /* Purple */ #ff5722,
            /* Orange */ #00bcd4,
            /* Cyan */ #ff4081 /* Hot Pink */
          );
          background-size: 500% 500%;
          animation: gradientBG 20s ease infinite;
        }

        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}

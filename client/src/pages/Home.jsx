import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "flowbite-react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="relative flex flex-col gap-6 p-28 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Welcome to my Blog
        </h1>
        <hr className="border-t-2 border-teal-500 w-1/3 mb-6 mx-auto" />
        <p className="text-xl sm:text-base mb-6">
          <span className="text-teal-500 text-xl">
            <Typewriter
              words={[
                "Web Development",
                "UI/UX design",
                "Programming Language",
              ]}
              loop={0}
              cursor
              cursorStyle=""
            />
          </span>{" "}
          <span className="text-xl">
            tutorials and articles. Dive into the world of tech and programming!
          </span>
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl rounded-lg w-full sm:w-auto"
          >
            <Link
              to="/search"
              rel="noopener noreferrer"
              className="block text-center w-full"
            >
              View all posts
            </Link>
          </Button>
          <Button
            gradientDuoTone="pinkToOrange"
            outline
            className="w-full sm:w-auto"
          >
            <Link
              to="/projects"
              rel="noopener noreferrer"
              className="block text-center w-full"
            >
              Explore projects
            </Link>
          </Button>
        </div>

        <div className="text-center mt-8">
          <h3 className="text-lg font-semibold">Connect with Me</h3>
          <p className="text-sm mb-6">
            Feel free to reach out to discuss projects, collaborations, or
            simply chat about tech!
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Shreya-Kumari003"
              className="text-teal-500 hover:text-teal-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/shreya-kumari-b650b921a/"
              className="text-teal-500 hover:text-teal-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>

        <div className="absolute top-0 right-0 h-full w-1/4 p-6 hidden lg:block">
          {/* Title */}
          <h3 className="text-lg font-semibold mb-4">
            Popular Topics
          </h3>

          <div className="flex flex-wrap gap-4 mt-5">
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition-all duration-200">
              #JavaScript
            </span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition-all duration-200">
              #TailwindCSS
            </span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition-all duration-200">
              #ReactJS
            </span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition-all duration-200">
              #NodeJS
            </span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition-all duration-200">
              #Express
            </span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition-all duration-200">
              #Python
            </span>
          </div>
        </div>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="max-w-8xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6 ">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-7 items-center justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";
import { FaRegCopy } from "react-icons/fa";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    const postContentElement = document.querySelector(".post-content");

    if (postContentElement) {
      const syntaxElements = postContentElement.querySelectorAll(".ql-syntax");

      syntaxElements.forEach((syntaxElement) => {
        if (!syntaxElement.querySelector(".copy-btn")) {
          const button = document.createElement("button");
          button.className = "copy-btn";
          button.style.position = "absolute";
          button.style.top = "10px";
          button.style.right = "10px";
          button.style.color = "white";
          button.style.border = "none";
          button.style.borderRadius = "5px";
          button.style.padding = "5px 5px";
          button.style.cursor = "pointer";
          button.style.fontSize = "1.2rem";
          button.style.zIndex = "10";

          const svgIcon = `
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#dbc7c7" stroke-width="1.5"/>
              <path opacity="0.5" d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#dbc7c7" stroke-width="1.5"/>
            </svg>
          `;

          button.innerHTML = svgIcon;

          if (!syntaxElement.parentElement.classList.contains("pre-wrapper")) {
            const preWrapper = document.createElement("div");
            preWrapper.className = "pre-wrapper";
            preWrapper.style.position = "relative";

            syntaxElement.parentElement.insertBefore(preWrapper, syntaxElement);
            preWrapper.appendChild(syntaxElement);
          }

          const preWrapper = syntaxElement.parentElement;
          preWrapper.appendChild(button);

          button.addEventListener("click", () => {
            navigator.clipboard.writeText(syntaxElement.innerText);
          });
        }
      });
    }
  }, [post]);

  useEffect(() => {
    const postContentElement = document.querySelector(".post-content");

    if (postContentElement) {
      const syntaxElements = postContentElement.querySelectorAll(".ql-syntax");
      syntaxElements.forEach((syntaxElement) => {
        if (!syntaxElement.nextElementSibling?.classList.contains("copy-btn")) {
          const button = document.createElement("button");
          button.textContent = "Copy";
          button.className = "copy-btn";
          button.style.marginLeft = "10px";
          button.style.backgroundColor = "#4CAF50";
          button.style.color = "white";
          button.style.border = "none";
          button.style.borderRadius = "5px";
          button.style.padding = "5px 10px";
          button.style.cursor = "pointer";

          button.addEventListener("click", () => {
            navigator.clipboard.writeText(syntaxElement.innerText).then(() => {
              alert("Code copied to clipboard!");
            });
          });

          syntaxElement.insertAdjacentElement("afterend", button);
        }
      });
    }
  }, [post]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  return (
    <>
      <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
        <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
          {post && post.title}
        </h1>
        <Link
          to={`/search?category=${post && post.category}`}
          className="self-center mt-5"
        >
          <Button color="gray" pill size="xs">
            {post && post.category}
          </Button>
        </Link>
        <img
          src={post && post.image}
          alt={post && post.title}
          className="mt-10 p-3 max-h-[600px] w-full object-cover"
        />
        <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
          <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
          <span className="italic">
            {post && (post.content.length / 1000).toFixed(0)} mins read
          </span>
        </div>
        <div
          className="p-3 max-w-2xl mx-auto w-full post-content"
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>
        <div className="max-w-4xl mx-auto w-full">
          <CallToAction />
        </div>
        <CommentSection postId={post._id} postTitle={post.title} />
      </main>
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </>
  );
}

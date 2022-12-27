import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPencilAlt } from "react-icons/fa";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/posts/")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const editPost = () => {
    console.log("amma edit you");
  };

  return (
    <div>
      {posts.map((post) => (
        <div class="card" style={{ width: "18 rem" }} key={post._id}>
          <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{post.postText}</p>
            <em href="#" class="card-link">
              {post.creatorUsername}
            </em>
            <em href="#" class="card-link">
              {post.createdAt.substring(0, 10)}
            </em>
            <br />
            {window.localStorage.getItem("currentUser") ===
              post.creatorUsername && <FaPencilAlt onClick={editPost} />}
          </div>
        </div>
      ))}
    </div>
  );
}

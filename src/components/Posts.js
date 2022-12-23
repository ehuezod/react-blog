import React, { useEffect, useState } from "react";
import axios from "axios";

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
              {post.createdAt}
            </em>
          </div>
        </div>
      ))}
    </div>
  );
}

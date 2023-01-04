import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditPost() {
  const params = useParams();
  const id = params.id;
  console.log(id);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const updatePost = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/posts/${id}`, post)
      .then((res) => console.log(res.data));
    window.location = "/posts";
  };

  return (
    <form>
      <h1>Create New Post</h1>
      <div class="mb-3">
        <label for="createPostTitle" class="form-label">
          Title
        </label>
        <input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })} // uses spead operator to keep all what was done before
          type="text"
          class="form-control"
          id="createPostTitle"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="createPostContent" class="form-label">
          Type whatever you want!
        </label>
        <textarea
          value={post.postText}
          class="form-control"
          id="createPostContent"
          onChange={(e) => setPost({ ...post, postText: e.target.value })} // assigns current value to the object
        />
      </div>

      <button type="submit" class="btn btn-primary" onClick={updatePost}>
        Submit
      </button>
    </form>
  );
}

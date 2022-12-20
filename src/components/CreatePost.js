import React, { useState } from "react";

export default function CreatePost() {
  const [newPost, setNewPost] = useState({
    title: "",
    postText: "",
    creatorUsername: "ehuezo",
  });

  const submitPost = (e) => {
    e.preventDefault();
    console.log(newPost); //should send to api instead of console log
  };

  return (
    <form>
      <h1>Create New Post</h1>
      <div class="mb-3">
        <label for="createPostTitle" class="form-label">
          Title
        </label>
        <input
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} // uses spead operator to keep all what was done before
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
          value={newPost.postText}
          type="password"
          class="form-control"
          id="createPostContent"
          onChange={(e) => setNewPost({ ...newPost, postText: e.target.value })} // assigns current value to the object
        />
      </div>

      <button type="submit" class="btn btn-primary" onClick={submitPost}>
        Submit
      </button>
    </form>
  );
}

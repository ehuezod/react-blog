import React, { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  return (
    <form>
      <h1>Create New Post</h1>
      <div class="mb-3">
        <label for="createPostTitle" class="form-label">
          Title
        </label>
        <input
          onChange={updateTitle}
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
        <textarea type="password" class="form-control" id="createPostContent" />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

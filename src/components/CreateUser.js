import React, { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    profilePicture: "",
  });

  const createNewUser = (e) => {
    e.preventDefault();
    console.log(newUser);
    axios
      .post("http://localhost:4000/users/add", newUser)
      .then((res) => console.log(res.data));
    window.location = "/"; //should redirect to login
  };

  return (
    <form>
      <div class="mb-3">
        <label for="registerEmail" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="registerEmail"
          aria-describedby="emailHelp"
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
      </div>
      <div class="mb-3">
        <label for="registerPassword" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="registerPassword"
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
      </div>

      <div class="mb-3">
        <label for="registerUsername" class="form-label">
          Username
        </label>
        <input
          type="text"
          class="form-control"
          id="registerUsername"
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
      </div>

      <button type="submit" class="btn btn-primary" onClick={createNewUser}>
        Submit
      </button>
    </form>
  );
}

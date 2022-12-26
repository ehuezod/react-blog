import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const validateUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/users/validate", loginUser)
      .then((res) => {
        window.localStorage.setItem("logged", res.data);
        window.localStorage.setItem("currentUser", loginUser.username);
        if (res.data) {
          window.location = "/posts";
        }
      });
  };

  return (
    <>
      <h3>Sign In</h3>
      <form>
        <div class="mb-3">
          <label for="login-username" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="login-username"
            aria-describedby="emailHelp"
            onChange={(e) =>
              setLoginUser({ ...loginUser, username: e.target.value })
            }
          />
        </div>
        <div class="mb-3">
          <label for="login-password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="login-password"
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={validateUser}>
          Sign In
        </button>
      </form>
    </>
  );
}

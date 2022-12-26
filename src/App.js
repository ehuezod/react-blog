import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import CreateUser from "./components/CreateUser";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/newuser" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

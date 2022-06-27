import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>

        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/createpost">Create Post</Link>
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />{" "}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;

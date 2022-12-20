import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            Blogger
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/posts"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/createpost" className="nav-link" href="#">
                  Create Post
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/newuser" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
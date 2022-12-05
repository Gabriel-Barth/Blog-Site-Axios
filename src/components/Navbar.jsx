import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <Link to={"/"}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link className="new-btn" to={"/new"}>
            Novo Post
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

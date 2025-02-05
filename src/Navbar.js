import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src="https://cataas.com/cat" className="profile-image"></img>
      <ul style={{ display: "inline-flex", padding: "0rem" }}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

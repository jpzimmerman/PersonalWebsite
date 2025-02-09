import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <section className="navbar-container">
      <img
        src="https://cataas.com/cat"
        alt="Candidate"
        className="profile-image"
      ></img>
      <section className="nav-total-section">
        <nav>
          <section className="navbar-banner">
            <Link to="/">
              <p>Joshua Zimmerman</p>
              <p>Software Engineer for Hire</p>
            </Link>
          </section>
          <section className="nav-buttons-section">
            <Link to="/about" className="nav-header">
              About
            </Link>
            <section className="dropdown nav-header">
              Projects
              <div className="dropdown-content">
                <a href="#">BarNone Bar App</a>
                <a href="#">Empathy Generator</a>
                <a href="#">Project Rubicon</a>
              </div>
            </section>
            <Link to="/blog" className="nav-header">
              Blog
            </Link>
          </section>
        </nav>
      </section>
    </section>
  );
}

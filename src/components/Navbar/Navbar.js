import { Link } from "react-router-dom";
import React from "react";
import "./navbar.css";
import { FaCaretDown } from "react-icons/fa6";

export default function Navbar() {
  return (
    <section className="navbar-container">
      <img
        src="https://jzshowcasesa.blob.core.windows.net/showcase-images/profile-image-2025.jpg"
        alt="Candidate"
        className="profile-image"
      ></img>
      <section className="nav-total-section">
        <nav>
          <section className="navbar-banner">
            <Link to="/">
              <span>Joshua Zimmerman</span>
              <br></br>
              <span className="navbar-subtitle">
                Software Engineer for Hire
              </span>
            </Link>
          </section>
          <section className="nav-buttons-section">
            <Link to="/about" className="nav-header">
              About
            </Link>
            <section className="dropdown nav-header">
              Projects <FaCaretDown />
              <div className="dropdown-content">
                <Link to="/barapp">BarNone Bar App</Link>
                <Link to="/empathygen">Empathy Generator</Link>
                <Link to="/about">Project Rubicon</Link>
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

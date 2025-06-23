import React from "react";
import "./titlecard.css";
import githublogo from "../../content/images/github-link-logo.svg";
import linkedinlogo from "../../content/images/InBug-White.png";
import { FaEnvelope, FaFilePdf, FaPhone } from "react-icons/fa6";

export default function TitleCard() {
  return (
    <section className="landing-body title-card">
      <h3>Joshua Zimmerman, Software Engineer</h3>
      <section className="socials-section">
        <a
          href="https://www.linkedin.com/in/joshua-zimmerman-235810247/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedinlogo}
            alt="LinkedIn profile"
            className="socials-link-button"
            target="_blank"
            title="LinkedIn profile"
          ></img>
        </a>
        <a
          href="https://github.com/jpzimmerman"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={githublogo}
            alt="link to GitHub profile"
            className="socials-link-button filter-white"
            target="_blank"
            title="GitHub profile"
          ></img>
        </a>
      </section>
      <hr></hr>
      <p className="landing-body-text">
        Experienced full-stack software engineer, looking for an opportunity to
        apply wide range of technical skills to craft impactful software
        applications.
      </p>
      <br></br>
      <a
        href="https://jzshowcasesa.blob.core.windows.net/showcase-docs/JoshZimmerman_Resume.pdf"
        download
        title="Download My Resume"
      >
        <FaFilePdf style={{ scale: 1.25, color: "lightgreen" }} /> Download My
        Résumé
      </a>
      <br></br>
      <h3>Contact</h3>
      Cell:
      <a
        href={process.env.REACT_APP_PHONE_RAW}
        target="_blank"
        rel="noreferrer"
      >
        <button className="contact-button" target="_blank" rel="noreferrer">
          <FaPhone /> {process.env.REACT_APP_PHONE_FORMATTED}
        </button>
      </a>
      <br></br>
      Email:{" "}
      <a
        href="mailto:zimmerman.joshua.p@gmail.com"
        target="_blank"
        rel="noreferrer"
        title="Send email to zimmerman.joshua.p@gmail.com"
      >
        <button className="contact-button" target="_blank" rel="noreferrer">
          <FaEnvelope /> Email
        </button>
      </a>
    </section>
  );
}

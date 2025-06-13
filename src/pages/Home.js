import React from "react";
import githublogo from "../content/images/github-link-logo.svg";
import linkedinlogo from "../content/images/LI-In-Bug.png";

export default function Home() {
  return (
    <section className="landing-body">
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
            className="socials-link-button"
            target="_blank"
            title="GitHub profile"
          ></img>
        </a>
      </section>
      <hr></hr>
      <p className="landing-body-text">
        Experienced full-stack software engineer, looking for an opportunity to
        apply unique synergy of technical skills and client service experience
        to craft impactful software applications.
      </p>
    </section>
  );
}

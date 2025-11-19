import React, { useEffect, useRef, useState } from "react";
import "./titlecard.css";
import githublogo from "../../content/images/github-link-logo.svg";
import linkedinlogo from "../../content/images/InBug-White.png";
import { FaEnvelope, FaFilePdf, FaPhone } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function TitleCard() {
  let location = useLocation();

  const titleCardToggleButtonRef = useRef(null);
  const titleCardRef = useRef(null);

  let [isTitleCardOpened, setTitleCardOpened] = useState(true);

  useEffect(() => {
    titleCardRef.current.style.setProperty(
      "display",
      location.pathname != "/" && window.screen.width < 640 ? "none" : "block"
    );
    titleCardRef.current.style.setProperty(
      "margin-top",
      location.pathname !== "/" ? "2%" : "5%"
    );
    titleCardRef.current.style.setProperty(
      "opacity",
      location.pathname !== "/" ? "100%" : "85%"
    );
    titleCardToggleButtonRef.current.style.setProperty(
      "visibility",
      location.pathname != "/" ? "visible" : "hidden"
    );
  }, [location]);

  useEffect(() => {
    titleCardToggleButtonRef.current.addEventListener(
      "click",
      toggleTitleCardView,
      false
    );
  }, []);

  function toggleTitleCardView() {
    setTitleCardOpened(isTitleCardOpened = !isTitleCardOpened);
    
    titleCardRef.current.style.setProperty(
      "display",
      titleCardRef.current.style.display == "none" ? "block" : "none"
    );
  }

  return (
    <section className="title-card-container">
      {isTitleCardOpened && <div className="title-card-page-overlay"></div>}
      <section
        id="title-card"
        className="title-card-body title-card"
        ref={titleCardRef}
      >
        <h3>
          <Link to="/">Joshua Zimmerman, Software Engineer</Link>
        </h3>
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
        <p id="title-card-summary" className="landing-body-text">
          Experienced full-stack software engineer, looking for an opportunity
          to apply wide range of technical skills to craft impactful software
          applications.
        </p>
        <br></br>
        <a
          href="https://jzshowcasesa.blob.core.windows.net/showcase-docs/JoshuaZimmerman-Resume.pdf"
          target="_blank"
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
      <input
        type="button"
        className="toggle-collapse-button"
        ref={titleCardToggleButtonRef}
      ></input>
    </section>
  );
}

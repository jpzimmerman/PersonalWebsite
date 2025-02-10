import React from "react";
import githublogo from "../content/images/github-link-logo.svg";

export default function Home() {
  return (
    <section className="landing-body">
      <h3>Joshua Zimmerman, Software Engineer</h3>
      <section className="socials-section">
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
          ></img>
        </a>
      </section>
      <hr></hr>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
        elementum arcu. Nullam porta nibh eu tempor convallis. Phasellus eget
        faucibus enim. Sed efficitur urna nec risus dapibus, eget commodo eros
        consectetur. Mauris blandit dui cursus purus dictum fringilla sit amet
        ac metus. In quis nisi sollicitudin, venenatis nunc in, rutrum arcu.
        Fusce ullamcorper lacus ut leo tincidunt consequat. Nam eu lacus at
        lectus pretium congue. Nulla sagittis euismod porta. Fusce eget nibh
        feugiat, interdum sem in, vestibulum magna. Sed eget volutpat ligula,
        eget maximus sem. Aenean sollicitudin sed odio nec tincidunt. Aliquam a
        dolor commodo, pulvinar sapien ut, luctus arcu. Aenean porta purus mi,
        quis ornare dolor elementum eu.{" "}
      </p>
    </section>
  );
}

import { React, useRef, useEffect } from "react";
import { FaCaretDown, FaCaretLeft } from "react-icons/fa6";

export default function EmpathyDetail() {
  const summaryButtonRef = useRef(document.getElementById("summary-header"));
  const stackButtonRef = useRef(null);
  const mediaButtonRef = useRef(null);
  const summaryTextRef = useRef(null);
  let isSummaryCollapsed = true;

  useEffect(() => {
    summaryButtonRef.current.addEventListener("click", onClick, true);
    stackButtonRef.current.addEventListener("click", onClick, false);
    isSummaryCollapsed = summaryButtonRef.current.style.display !== "block";
  }, []);

  function onClick() {
    let content = this.nextElementSibling;
    content.style.display = content.style.display != "block" ? "block" : "none";
    isSummaryCollapsed = true;
    summaryTextRef.current.classList.add("detail-page-text-body");
  }

  function summaryCollapsedCaret() {
    return isSummaryCollapsed ? <FaCaretDown /> : <FaCaretLeft />;
  }

  return (
    <section className="landing-body landing-body-detail detail-page">
      <h3 className="card-title">
        Empathy Generator - VR Accessibility Training
      </h3>
      <hr></hr>
      <section className="detail-page-text-body">
        <h4
          id="summary-header"
          className="collapsible-header"
          ref={summaryButtonRef}
        >
          <strong>Summary </strong>
          {summaryCollapsedCaret()}
        </h4>
        <span id="summary-text" ref={summaryTextRef}>
          Empathy Generator was a virtual reality training experience meant to
          teach developers about the importance of accessibility in product
          design. I worked on this project with a team as part of a
          rapid-development initiative during my time at Rocket Mortgage.
          <br></br>
          <br></br>
          It used a suite of four games to simulate the experience of a person
          with disabilities such as colorblindness and deafness. Having to use
          what may well have been their own product through the experience of a
          person with a disability, the developer learns to treat accessibility
          considerations as part of their product's core feature set. They
          become keenly aware of industry accessibility standards such as WCAG,
          and learn about the available tools that can check and facilitate
          accessibility in design.
        </span>
        <span className="landing-body-text" ref={stackButtonRef}>
          <h4>
            <strong>Tech Stack </strong>
            <FaCaretDown />
          </h4>
        </span>
        <span>
          <ul>
            <li>Game Engine: Unity</li>
            <li>Language: C#</li>
            <li>Platform: Oculus Rift, HTC Vive, Mobile VR</li>
          </ul>
        </span>
        <span className="landing-body-text" ref={mediaButtonRef}>
          <h4>
            <strong>Media </strong>
            <FaCaretDown />
          </h4>
        </span>
      </section>
    </section>
  );
}

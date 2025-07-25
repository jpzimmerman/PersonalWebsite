import { React, useRef, useEffect, useState, useMemo } from "react";
import "./detail.css";
import { FaCaretDown, FaCaretLeft } from "react-icons/fa6";
import ImageModal from "../../components/ImageModal/ImageModal";
import Carousel from "../../components/Carousel/Carousel";

export default function BarAppDetail() {
  const summaryButtonRef = useRef(document.getElementById("summary-header"));
  const stackButtonRef = useRef(null);
  const mediaButtonRef = useRef(null);
  const summaryTextRef = useRef(null);
  let isSummaryCollapsed = true;

  let [modalOpen, setModalOpen] = useState(false);
  let [modalContent, setModalContent] = useState("content");

  useEffect(() => {
    summaryButtonRef.current.addEventListener("click", onClick, true);
    stackButtonRef.current.addEventListener("click", onClick, false);
    mediaButtonRef.current.addEventListener("click", onClick, false);
    isSummaryCollapsed = summaryButtonRef.current.style.display !== "block";
  }, []);

  const projectImagePaths = useMemo(() => {
    return [
      "https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr00.JPG",
      "https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr01.JPG",
      "https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr02.JPG",
      "https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr03.JPG",
      "https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr04.JPG",
    ];
  }, []);

  function onClick() {
    let content = this.nextElementSibling;
    content.style.display = content.style.display != "block" ? "block" : "none";
    isSummaryCollapsed = true;
  }

  function summaryCollapsedCaret() {
    return isSummaryCollapsed ? <FaCaretDown /> : <FaCaretLeft />;
  }

  function openModal() {
    setModalContent(this.src);
    setModalOpen(true);
  }

  return (
    <section>
      <ImageModal
        isOpen={modalOpen}
        handleClose={() => setModalOpen(false)}
        children={<img src={modalContent} className="modal-main modal-image" />}
      />
      <section className="landing-body landing-body-detail detail-page">
        <h3 className="card-title">
          <strong>BarNone - Cocktail Menu</strong>
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
            BarNone is a full-stack cocktail menu application, used for ordering
            and customizing drinks. The backend API serves a menu, accepts
            orders, and allows an admin to maintain an inventory, while the
            decoupled frontend allows a developer to build a cocktail menu
            around a given theme. My first iteration of the frontend also
            includes options allowing the user to filter the menu by tastes, as
            well as request ingredient substitutions. <br></br>
            <br></br>I built this application for use in my role as designated
            bartender in my Dungeons & Dragons group.<br></br>
            <br></br>Link:{" "}
            <a
              href="https://legendslair-dwhrf9e3ceb4face.centralus-01.azurewebsites.net/"
              target="_blank"
              className="select-link"
            >
              Legends' Lair
            </a>{" "}
          </span>
          <span ref={stackButtonRef}>
            <h4>
              <strong>Tech Stack </strong>
              <FaCaretDown />
            </h4>
          </span>
          <span>
            <ul>
              <li>Backend: .NET 9.0</li>
              <li>Frontend: Angular 19</li>
              <li>Inventory Micro-Frontend: React</li>
              <li>Database: SQL Server, MySQL</li>
              <li>Cloud platform: Azure</li>
              <li>Infrastructure-as-Code: Terraform</li>
              <li>Mobile app for vendor: React Native</li>
            </ul>
          </span>
          <span ref={mediaButtonRef} className="collapsible-header">
            <h4>
              <strong>Media </strong>
              <FaCaretDown />
            </h4>
          </span>
          <Carousel
            onClickToExpand={openModal}
            imagePaths={projectImagePaths}
          />
        </section>
      </section>
    </section>
  );
}

import { React, useRef, useEffect, useState } from "react";
import "./detail.css";
import { FaCaretDown, FaCaretLeft } from "react-icons/fa6";
import Dashboard from "../../components/Dashboard/Dashboard";
import ImageModal from "../../components/ImageModal/ImageModal";
import { wait } from "@testing-library/user-event/dist/cjs/utils/index.js";
import CarouselImage from "../../components/CarouselImage/CarouselImage";

export default function BarAppDetail() {
  const summaryButtonRef = useRef(document.getElementById("summary-header"));
  const stackButtonRef = useRef(null);
  const mediaButtonRef = useRef(null);
  const summaryTextRef = useRef(null);
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const imageRef5 = useRef(null);
  let isSummaryCollapsed = true;

  let [modalOpen, setModalOpen] = useState(false);
  let [modalContent, setModalContent] = useState("content");

  useEffect(() => {
    summaryButtonRef.current.addEventListener("click", onClick, true);
    stackButtonRef.current.addEventListener("click", onClick, false);
    mediaButtonRef.current.addEventListener("click", onClick, false);
    imageRef.current.addEventListener("click", openModal, false);
    imageRef2.current.addEventListener("click", openModal, false);
    imageRef3.current.addEventListener("click", openModal, false);
    imageRef4.current.addEventListener("click", openModal, false);
    imageRef5.current.addEventListener("click", openModal, false);
    isSummaryCollapsed = summaryButtonRef.current.style.display !== "block";
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
            around a given theme. My first iteration also includes options
            allowing the user to filter the menu by tastes, as well as request
            ingredient substitutions. <br></br>
            <br></br>I built this application for use in my role as designated
            bartender in my Dungeons & Dragons group.
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
          <section className="media-carousel-container">
            <section className="media-carousel">
              <section className="media-carousel-item">
                <img
                  src="https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr00.JPG"
                  ref={imageRef}
                ></img>
              </section>
              <section className="media-carousel-item">
                <CarouselImage
                  source={
                    "https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr04.JPG"
                  }
                ></CarouselImage>
              </section>
              <div className="media-carousel-item">
                <img
                  src="https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr01.JPG"
                  ref={imageRef2}
                ></img>
              </div>
              <div className="media-carousel-item">
                <img
                  src="https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr02.JPG"
                  ref={imageRef3}
                ></img>
              </div>
              <div className="media-carousel-item">
                <img
                  src="https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr03.JPG"
                  ref={imageRef4}
                ></img>
              </div>
              <div className="media-carousel-item">
                <img
                  src="https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr04.JPG"
                  ref={imageRef5}
                ></img>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

import { React, useRef, useEffect } from "react";
import "./detail.css";
import { FaCaretDown, FaCaretLeft } from "react-icons/fa6";
import Dashboard from "../../components/Dashboard/Dashboard";
import ImageModal from "../../components/ImageModal/ImageModal";

export default function BarAppDetail() {
  const summaryButtonRef = useRef(document.getElementById("summary-header"));
  const stackButtonRef = useRef(null);
  const mediaButtonRef = useRef(null);
  const summaryTextRef = useRef(null);
  let isSummaryCollapsed = true;

  useEffect(() => {
    summaryButtonRef.current.addEventListener("click", onClick, true);
    stackButtonRef.current.addEventListener("click", onClick, false);
    mediaButtonRef.current.addEventListener("click", onClick, false);
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

  return (
    <section className="landing-body landing-body-detail detail-page">
      <h3 className="card-title">
        <strong>BarNone - Cocktail Menu</strong>
      </h3>
      <ImageModal />
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
          BarNone is a full-stack Web application that allows users to order and
          customize cocktails. The backend API serves a menu, accepts orders,
          and allows an admin to maintain an inventory, while the decoupled
          frontend allows a developer to build a cocktail menu around a given
          theme.
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
              <img src="https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr00.JPG"></img>
            </section>
            <div className="media-carousel-item">
              <img src="https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr01.JPG"></img>
            </div>
            <div className="media-carousel-item">
              <img src="https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr02.JPG"></img>
            </div>
            <div className="media-carousel-item">
              <img src="https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr03.JPG"></img>
            </div>
            <div className="media-carousel-item">
              <img src="https://jzshowcasesa.blob.core.windows.net/showcase-images/barapp-scr04.JPG"></img>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

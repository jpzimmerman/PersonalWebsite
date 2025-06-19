import React from "react";
import "./detail.css";

export default function BarAppDetail() {
  return (
    <section className="landing-body landing-body-detail detail-page">
      <h3>BarNone - Cocktail Menu</h3>
      <hr></hr>
      <section className="detail-page-text-body">
        <h4 className="collapsible-header">
          <strong>Summary</strong>
        </h4>
        <span className="collapsible-content">
          BarNone is a full-stack Web application that allows users to order and
          customize cocktails. The backend API serves a menu, accepts orders,
          and allows an admin to maintain an inventory, while the decoupled
          frontend allows a developer to build a cocktail menu around a given
          theme.
        </span>
        <p className="landing-body-text">
          <h4>
            <strong>Tech Stack</strong>
          </h4>
          <ul>
            <li>Backend: .NET 9.0</li>
            <li>Frontend: Angular 19</li>
            <li>Inventory Micro-Frontend: React</li>
            <li>Database: SQL Server, MySQL</li>
            <li>Cloud platform: Azure</li>
            <li>Infrastructure-as-Code: Terraform</li>
            <li>Mobile app for vendor: React Native</li>
          </ul>
          <br></br>
        </p>
      </section>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-nav">
        BlackRose
      </a>
      <ul style={{ display: "inline-flex", padding: "0rem" }}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Projects</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

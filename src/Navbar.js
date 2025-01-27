export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-nav">
        BlackRose
      </a>
      <ul style={{ display: "inline-flex", padding: "0rem" }}>
        <li>About</li>
        <li>Projects</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

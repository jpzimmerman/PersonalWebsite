export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-nav">
        BlackRose
      </a>
      <ul style={{ display: "inline-flex", padding: "1% 1% 1% 1%" }}>
        <li>Projects</li>
        <li>About</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

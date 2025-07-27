import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/about/About";
import React from "react";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import BarAppDetail from "./pages/barappdetail/BarAppDetail";
import EmpathyDetail from "./pages/empathydetail/EmpathyGeneratorDetail";
import ImageModal from "./components/ImageModal/ImageModal";
import TitleCard from "./components/TitleCard/TitleCard";
import BlogView from "./pages/blog/BlogView";

function App() {
  return (
    <>
      <section className="App">
        <header>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Joshua Zimmerman, Software Engineer</title>
          <link rel="icon" href="../public/logo192.png" type="image/png"></link>
        </header>
        <main className="page-content">
          <section id="root"></section>
          <Navbar></Navbar>
          <section>
            <section
              id="title=card-tab"
              className="card-tab-container flex-child"
            >
              <TitleCard />
              {/* <input type="button"></input> */}
            </section>
            <ImageModal show={false} />
          </section>
        </main>
      </section>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/barapp" element={<BarAppDetail />} />
        <Route path="/empathygen" element={<EmpathyDetail />} />
        <Route path="/blog" element={<BlogView />} />
      </Routes>
    </>
  );
}

export default App;

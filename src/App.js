import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/about/About";
import React from "react";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import BarAppDetail from "./pages/barappdetail/BarAppDetail";
import EmpathyDetail from "./pages/empathydetail/EmpathyGeneratorDetail";

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
        <main>
          <section id="root"></section>
          <Navbar></Navbar>
          <section className="page-content">
            <Home />
          </section>
        </main>
      </section>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/barapp" element={<BarAppDetail />} />
        <Route path="/empathygen" element={<EmpathyDetail />} />
      </Routes>
    </>
  );
}

export default App;

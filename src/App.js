import Navbar from "./Navbar";
import About from "./pages/About";
import React from "react";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";

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
        </header>
        <main>
          <section id="root"></section>
          <Navbar></Navbar>
          <p>Joshua Zimmerman</p>
        </main>
      </section>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;

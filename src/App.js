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
          <h3>Joshua Zimmerman, Software Engineer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
            elementum arcu. Nullam porta nibh eu tempor convallis. Phasellus
            eget faucibus enim. Sed efficitur urna nec risus dapibus, eget
            commodo eros consectetur. Mauris blandit dui cursus purus dictum
            fringilla sit amet ac metus. In quis nisi sollicitudin, venenatis
            nunc in, rutrum arcu. Fusce ullamcorper lacus ut leo tincidunt
            consequat. Nam eu lacus at lectus pretium congue. Nulla sagittis
            euismod porta. Fusce eget nibh feugiat, interdum sem in, vestibulum
            magna. Sed eget volutpat ligula, eget maximus sem. Aenean
            sollicitudin sed odio nec tincidunt. Aliquam a dolor commodo,
            pulvinar sapien ut, luctus arcu. Aenean porta purus mi, quis ornare
            dolor elementum eu.{" "}
          </p>
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

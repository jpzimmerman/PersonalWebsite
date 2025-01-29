import Navbar from "./Navbar";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <html lang="en">
      <div className="App">
        <header>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Joshua Zimmerman, Software Engineer</title>
        </header>
        <body>
          <div id="root"></div>
          <Navbar></Navbar>
          <p>Joshua Zimmerman</p>
        </body>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </html>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";

function App() {
  return (
    <>
      <Router>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
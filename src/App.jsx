import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: "56px" }}>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/quiz" element={<div>Quiz Page</div>} />
        <Route path="/favorites" element={<div>Favorites Page</div>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: "56px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

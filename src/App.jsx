import React from "react";
 feature/favorites
import { BrowserRouter as Router } from "react-router-dom";
import Favorites from "./pages/Favorites";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
 main

function App() {
  return (
    <Router>
 feature/favorites
      <div style={{ paddingTop: "56px" }}>
        <Favorites />

      <Header />
      <div style={{ paddingTop: "56px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
 main
      </div>
    </Router>
  );
}

export default App;

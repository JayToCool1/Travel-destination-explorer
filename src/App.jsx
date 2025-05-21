import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Destinations from "./pages/Destinations";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </Router>
  );
}


export default App;

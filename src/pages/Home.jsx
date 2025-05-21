import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <h1>Find Your Next Adventure</h1>
        <p>Explore food, nature, and culture around the world.</p>

        <button onClick={() => navigate("/quiz")}>Start Quiz</button>

        <section className="categories">
          <h2>Choose Your Interest</h2>
          <div className="category-buttons">
            <button onClick={() => navigate("/destinations?category=Food")}>🍽️ Food</button>
            <button onClick={() => navigate("/destinations?category=Nature")}>🌲 Nature</button>
            <button onClick={() => navigate("/destinations?category=Fun")}>🎉 Fun</button>
            <button onClick={() => navigate("/destinations?category=History")}>🏛️ History</button>
         </div>
        </section>
      </div>
    </div>
  );
}

export default Home;


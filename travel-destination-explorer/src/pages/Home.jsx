import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg"; 

function Home() {
  return (
    <div className="home">
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1>Find Your Next Adventure</h1>
          <p>Explore food, nature, and culture around the world.</p>
          <Link to="/quiz" className="quiz-button">
            Start Quiz
          </Link>
        </div>
      </section>

      <section className="categories">
        <h2>Choose Your Interest</h2>
        <div className="category-buttons">
          <button>🍜 Food</button>
          <button>🌲 Nature</button>
          <button>🏛️ History</button>
        </div>
      </section>
    </div>
  );
}

export default Home;

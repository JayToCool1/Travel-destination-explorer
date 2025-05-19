import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Find Your Next Adventure</h1>
        <p>Explore food, nature, and culture around the world.</p>
        <Link to="/quiz" className="quiz-button">Start Quiz</Link>
      </section>

      <section className="categories">
        <h2>Choose Your Interest</h2>
        <div className="category-buttons">
          <button>🍽️ Food</button>
          <button>🌲 Nature</button>
          <button>🎉 Fun</button>
          <button>🏛️ History</button>
        </div>
      </section>
    </div>
  );
}

export default Home;

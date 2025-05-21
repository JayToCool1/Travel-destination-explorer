import React, { useState } from "react";
import "./Quiz.css";
import destinations from "../data/destinations";

function Quiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);

    const questions = [
        {
           question: "What type of trip do you prefer?",
           options: ["Food", "Nature", "History", "Fun"]
        },
        {
           question: "How long do you want to stay?",
           options: ["1-3 days", "4-7 days", "1+ weeks"]
        },
        {
           question: "What's most important?",
           options: ["Relaxing", "Adventure", "Culture", "Nightlife"]
        }
    ];

    
    const handleAnswer = (option) => {
      const updated = [...answers, option];
      setAnswers(updated);
      if (step < questions.length - 1) setStep(step + 1);
      else setStep("done");
    };

    const getResult = () => {
      const mainCategory = answers.find((a) =>
        ["Food", "Nature", "History", "Fun"].includes(a)
      );
      return destinations.find((d) => d.category === mainCategory);
    };
    
    const handleSaveToFavorites = (destination) => {
      const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
      const alreadySaved = existingFavorites.some(
        (fav) => fav.name === destination.name
      );
    
      if (!alreadySaved) {
        const updatedFavorites = [...existingFavorites, destination];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        alert(`${destination.name} has been added to your favorites!`);
      } else {
        alert(`${destination.name} is already in your favorites.`);
      }
    };
    

    return (
      <div className="page-wrapper">
        <div className="quiz-page">
          <h1>Find Your Ideal Destination</h1>
          {step === "done" ? (
            <div>
              <h2>Your Match:</h2>
              {getResult() ? (
                <div className="result-card">
                  <img src={getResult().image} alt={getResult().name} />
                  <h3>{getResult().name}</h3>
                  <p>{getResult().description}</p>
                  <button onClick={() => handleSaveToFavorites(getResult())}>
                    ❤️ Save to Favorites
                  </button>
                  <button className="retake-btn" onClick={() => {
                    setStep(0);
                    setAnswers([]);
                }}>
                    🔁 Retake Quiz
                  </button>

                </div>
              ) : (
                <p>No match found. Try again!</p>
              )}
            </div>
          ) : (
            <div className="quiz-box">
              <h2>{questions[step].question}</h2>
              <div className="quiz-options">
                {questions[step].options.map((option) => (
                  <button key={option} onClick={() => handleAnswer(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  
  export default Quiz;
  
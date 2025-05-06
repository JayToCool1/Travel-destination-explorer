import React, { useState } from "react";
import destinations from "../data/destinations";
import "./Quiz.css";

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
      const suggestion = destinations.find((d) => d.category === mainCategory);
      return suggestion
    };

    return (
      <div className="quiz-page">
        <h1>Find Your Ideal Destination</h1>
        {step === "done" ? (
          <div>
            <h2>Your Match:</h2>
            <p>{getResult()?.name || "Try again!"}</p>
          </div>
        ) : (
          <div>
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
    );
  }
  
  export default Quiz;
  
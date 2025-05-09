import React from 'react';
import './Result.css';

function Result({ score, totalQuestions, isCorrect, correctAnswer, onNext, isLastQuestion }) {
  return (
    <div className="result-container">
      <div className="score-container">
        Score: {score} / {totalQuestions}
      </div>
      <p className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
        {isCorrect
          ? "Correct!"
          : `Incorrect! The correct answer is: ${correctAnswer}`}
      </p>
      <button className="next-button" onClick={onNext}>
        {isLastQuestion ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default Result;

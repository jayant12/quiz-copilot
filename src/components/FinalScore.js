import React from 'react';
import './Result.css';

function FinalScore({ score, totalQuestions, onRestart, onExit }) {
  return (
    <div className="result-container">
      <div className="score-container">
        Final Score: {score} / {totalQuestions}
      </div>
      <div className="button-container">
        <button className="next-button" onClick={onRestart}>
          Restart Quiz
        </button>
        <button className="next-button" onClick={onExit}>
          Exit to Home
        </button>
      </div>
    </div>
  );
}

export default FinalScore;

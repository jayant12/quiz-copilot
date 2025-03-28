import React from 'react';
import './Question.css';

function Question({ question, current, total }) {
  return (
    <div className="question-container">
      <p className="question-number">{`Question ${current}/${total}`}</p>
      <p className="question-text">{question}</p>
    </div>
  );
}

export default Question;

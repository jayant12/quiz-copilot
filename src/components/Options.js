import React from 'react';
import './Options.css';

function Options({ options, selectedOption, onOptionChange, showResult, correctAnswer }) {
  return (
    <div className="options-container">
      {options.map((option, index) => {
        let optionClass = "option";
        if (showResult) {
          if (option === correctAnswer) {
            optionClass += " correct";
          } else if (option === selectedOption) {
            optionClass += " incorrect";
          }
        }
        return (
          <div
            key={index}
            className={optionClass}
            onClick={() => onOptionChange({ target: { value: option } })}
          >
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
              className="radio-input"
              disabled={showResult} // Disable input after submission
            />
            <span className="option-label">{option}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Options;

import React, { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Options from './components/Options';
import Result from './components/Result';
import questions from './constants/questions';
import FinalScore from './components/FinalScore';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(questions.length);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    const isAnswerCorrect = selectedOption === questions[currentQuestionIndex].correctAnswer;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setShowResult(false);
    setSelectedOption("");
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    setShowResult(false);
    setSelectedOption("");
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption("");
    setShowResult(false);
  };

  const handleExit = () => {
    // Logic to exit to home (e.g., redirect or reset state)
    console.log("Exiting to home...");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Curriculum Quiz</p>
        <div>
          {!quizCompleted ? (
            <>
              <Question 
                question={questions[currentQuestionIndex].question} 
                current={currentQuestionIndex + 1} 
                total={questions.length} 
              />
              <Options
                options={questions[currentQuestionIndex].options}
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
                showResult={showResult}
                correctAnswer={questions[currentQuestionIndex].correctAnswer}
              />
              <div className="button-container">
                {!showResult && (
                  <button 
                    onClick={handleSubmit} 
                    disabled={!selectedOption} 
                    className="button"
                  >
                    Submit
                  </button>
                )}
                {currentQuestionIndex > 0 && !showResult && (
                  <button 
                    onClick={handlePrevious} 
                    className="button"
                  >
                    Previous
                  </button>
                )}
              </div>
              {showResult && (
                <Result
                  isCorrect={isCorrect}
                  correctAnswer={questions[currentQuestionIndex].correctAnswer}
                  onNext={handleNext}
                  isLastQuestion={currentQuestionIndex === questions.length - 1}
                  score={score}
                  totalQuestions={totalQuestions}
                />
              )}
            </>
          ) : (
            <FinalScore
              score={score}
              totalQuestions={totalQuestions}
              onRestart={handleRestart}
              onExit={handleExit}
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

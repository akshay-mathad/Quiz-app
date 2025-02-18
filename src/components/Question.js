import React, { useState } from 'react';

function Question({ question, options, correctAnswer, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputAnswer, setInputAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e) => {
    setInputAnswer(e.target.value);
  };

  const handleSubmit = () => {
    const answer = options.length > 1 ? selectedOption : inputAnswer;
    const isCorrect = answer === correctAnswer;
    setFeedback(isCorrect ? 'Correct! Well done.' : `Incorrect. The correct answer is ${correctAnswer}.`);
    onAnswer(isCorrect);
    setSelectedOption(null);
    setInputAnswer('');
  };

  return (
    <div className="question">
      <h2>{question}</h2>
      {options.length > 1 ? (
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={selectedOption === option ? 'selected' : ''}
            >
              {option}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <input
            type="text"
            value={inputAnswer}
            onChange={handleInputChange}
            placeholder="Type your answer"
          />
        </div>
      )}
      <button onClick={handleSubmit} disabled={options.length > 1 && !selectedOption}>
        Submit
      </button>
      {feedback && (
        <p className={`feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>
          {feedback}
        </p>
      )}
    </div>
  );
}

export default Question; 
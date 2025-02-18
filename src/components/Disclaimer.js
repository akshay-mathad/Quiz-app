import React, { useState } from 'react';

function Disclaimer({ onAccept }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleStartQuiz = () => {
    if (isChecked) {
      onAccept();
    } else {
      alert('Please confirm that you have read the rules.');
    }
  };

  return (
    <div className="disclaimer">
      <h2>Quiz Rules</h2>
      <ul>
        <li>1. For multiple-choice questions, select the one best answer (A, B, C, or D).</li>
        <li>2. For integer-type questions, write your numerical answer clearly.</li>
        <li>3. No calculators unless specified.</li>
        <li>4. You have 30 minutes to complete this quiz.</li>
        <li>5. Once you click on a submit you cannot change answer of that question.</li>
      </ul>
      <div>
        <input
          type="checkbox"
          id="readRules"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="readRules"> I have read and understood the rules.</label>
      </div>
      <button onClick={handleStartQuiz} disabled={!isChecked}>
        Start Quiz
      </button>
    </div>
  );
}

export default Disclaimer; 
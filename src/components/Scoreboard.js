import React from 'react';

function Scoreboard({ score, total, onReset }) {
  return (
    <div className="scoreboard">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={onReset}>Try Again</button>
    </div>
  );
}

export default Scoreboard;

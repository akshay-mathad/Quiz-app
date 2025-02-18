import React from 'react';

function History({ attempts }) {
  return (
    <div className="history">
      <h3>Attempt History</h3>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>
            {attempt.question} - {attempt.isCorrect ? 'Correct' : 'Incorrect'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;

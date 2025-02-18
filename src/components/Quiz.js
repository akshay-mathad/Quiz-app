import React, { useState } from 'react';
import Question from './Question';
import Timer from './Timer';
import Scoreboard from './Scoreboard';
import History from './History';
import Disclaimer from './Disclaimer';

const sampleQuestions = [
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: "Mercury"
  },
  {
    question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: "Queue"
  },
  {
    question: "Which of the following is primarily used for structuring web pages?",
    options: ["Python", "Java", "HTML", "C++"],
    correctAnswer: "HTML"
  },
  {
    question: "Which chemical symbol stands for Gold?",
    options: ["Au", "Gd", "Ag", "Pt"],
    correctAnswer: "Au"
  },
  {
    question: "Which of these processes is not typically involved in refining petroleum?",
    options: ["Fractional distillation", "Cracking", "Polymerization", "Filtration"],
    correctAnswer: "Filtration"
  },
  {
    question: "What is the value of 12 + 28?",
    options: ["40"],
    correctAnswer: "40"
  },
  {
    question: "How many states are there in the United States?",
    options: ["50"],
    correctAnswer: "50"
  },
  {
    question: "In which year was the Declaration of Independence signed?",
    options: ["1776"],
    correctAnswer: "1776"
  },
  {
    question: "What is the value of pi rounded to the nearest integer?",
    options: ["3"],
    correctAnswer: "3"
  },
  {
    question: "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
    options: ["120"],
    correctAnswer: "120"
  }
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState([]);
  const [hasAcceptedRules, setHasAcceptedRules] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setAttempts([...attempts, { question: sampleQuestions[currentQuestionIndex].question, isCorrect }]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onTimeUp = () => {
    setAttempts([...attempts, { question: sampleQuestions[currentQuestionIndex].question, isCorrect: false }]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAttempts([]);
  };

  const startQuiz = () => {
    setHasAcceptedRules(true);
  };

  return (
    <div className="quiz">
      {!hasAcceptedRules ? (
        <Disclaimer onAccept={startQuiz} />
      ) : currentQuestionIndex < sampleQuestions.length ? (
        <>
          <Timer onTimeUp={onTimeUp} />
          <Question
            question={sampleQuestions[currentQuestionIndex].question}
            options={sampleQuestions[currentQuestionIndex].options}
            correctAnswer={sampleQuestions[currentQuestionIndex].correctAnswer}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <Scoreboard score={score} total={sampleQuestions.length} onReset={resetQuiz} />
      )}
      <History attempts={attempts} />
    </div>
  );
}

export default Quiz;

import React, { useState, useEffect } from 'react';
import styles from './QuizGame.module.scss';

// an array of objects containing each quiz question's id, question text, answer options, and correct answer
const questions = [ 
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    id: 2,
    question: 'What is the highest mountain in the world?',
    options: ['Mount Everest', 'Mount Kilimanjaro', 'Mount McKinley', 'Mount Everest Base Camp'],
    answer: 'Mount Everest'
  },
  {
    id: 3,
    question: 'Who is the author of "The Great Gatsby"?',
    options: ['Ernest Hemingway', 'F. Scott Fitzgerald', 'William Faulkner', 'J.D. Salinger'],
    answer: 'F. Scott Fitzgerald'
  },
];

// component for displaying quiz results, showing the user's score and percentage
const QuizResults = ({ score, totalQuestions }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const message = `You scored ${score} out of ${totalQuestions} (${percentage}%).`;

  return (
    <>
      <h2>Quiz Results</h2>
      <p>{message}</p>
    </>
  );
};

// main component for the quiz game
const QuizGame = () => {
  // state variables to keep track of current question index, selected answer, user score, and quiz completion status
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // effect hook to check if quiz is completed (i.e. current question index is equal to the length of the questions array)
  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      setQuizCompleted(true);
    }
  }, [currentQuestionIndex]);

  // function to handle user selection of an answer option
  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  // function to handle moving on to the next question or finishing the quiz
  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1); // increment score if selected answer is correct
    }
  
    // go to the next question or end the quiz
    if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex);
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    }
  };

  // get the current question object based on the current question index
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={styles.quiz}>
      {!quizCompleted ? (
        <>
          <h2>Question {currentQuestion.id}</h2>
          <p>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelection(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>{currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}</button>
        </>
      ) : (
        <QuizResults score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
};

export default QuizGame;

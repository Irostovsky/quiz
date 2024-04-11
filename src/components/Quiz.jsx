import { useState } from "react";
import QUESTIONS from "../questions.js";
import { shuffleArray } from "../utils.js";
import quizCompleteImg from "../assets/quiz-complete.png";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestionIndex = userAnswers.length;
  const quizIsComplete = QUESTIONS.length === currentQuestionIndex;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz complete" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  const question = QUESTIONS[currentQuestionIndex];
  let shuffledAnswers = [...question.answers];
  shuffleArray(shuffledAnswers);

  const handleSelectedAnswer = (answer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  };

  return (
    <div id="quiz">
      <div id="question">
        <h2>{question.text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;

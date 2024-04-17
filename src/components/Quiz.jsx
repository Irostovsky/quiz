import { useCallback, useEffect, useState } from "react";
import QUESTIONS from "../questions.js";
import { shuffleArray } from "../utils.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestionIndex = userAnswers.length;
  const quizIsComplete = QUESTIONS.length === currentQuestionIndex;

  const handleSelectedAnswer = useCallback((answer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

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

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={currentQuestionIndex}
          timeout="5000"
          onTimeout={handleSkipAnswer}
        />
        <h2>
          {question.text}
          {question.id}
        </h2>
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

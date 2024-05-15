import { useRef } from "react";
import { shuffleArray } from "../utils.js";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffleArray(shuffledAnswers.current);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let btnClass = "";
        const isSelected = selectedAnswer === answer;
        if (answerState === "answered" && isSelected) {
          btnClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          btnClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={btnClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;

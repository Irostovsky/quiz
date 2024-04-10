import { useState } from "react";
import QUESTIONS from "../questions.js";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestionIndex = userAnswers.length;
  return <h2>{QUESTIONS[currentQuestionIndex].text}</h2>;
};

export default Quiz;

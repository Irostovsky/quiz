import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
import { displayPercent } from "../utils.js";

const Summary = ({ userAnswers }) => {
  let result = {
    skipped: 0,
    correct: 0,
    incorrect: 0,
  };

  userAnswers.forEach((answer, index) => {
    if (!answer) {
      result["skipped"] += 1;
    } else if (answer == QUESTIONS[index].answers[0]) {
      result["correct"] += 1;
    } else {
      result["incorrect"] += 1;
    }
  });
  const totalCount = QUESTIONS.length;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz complete" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {displayPercent(result["skipped"] / totalCount)} %
          </span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">
            {displayPercent(result["correct"] / totalCount)} %
          </span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">
            {displayPercent(result["incorrect"] / totalCount)} %
          </span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;

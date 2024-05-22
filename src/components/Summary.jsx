import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

const Summary = ({ userAnswers }) => {
  const totalCount = QUESTIONS.length;

  const skippedAnswers = userAnswers.filter((answer) => !answer);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / totalCount) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / totalCount) * 100
  );
  const incorrectAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz complete" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let userAnswerClass = "user-answer";
          const correctAnswer = QUESTIONS[index].answers[0];
          if (answer === correctAnswer) {
            userAnswerClass += " correct";
          } else if (answer) {
            userAnswerClass += " wrong";
          } else {
            userAnswerClass += " skipped";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={userAnswerClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;

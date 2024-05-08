import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

const Question = ({
  question,
  selectedAnswer,
  answerState,
  onSelectAnswer,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout="5000" onTimeout={onSkipAnswer} />
      <h2>
        {question.text} - {question.id}
      </h2>
      <Answers
        answers={question.answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Question;

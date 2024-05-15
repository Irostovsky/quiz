import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timeoutTimer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timeoutTimer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setRemainingTime((prevValue) => prevValue - 100);
    }, 100);
    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className={mode}
    />
  );
};

export default QuestionTimer;

import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timeoutTimer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timeoutTimer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setRemainingTime((prevValue) => prevValue - 500);
    }, 500);
    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
};

export default QuestionTimer;

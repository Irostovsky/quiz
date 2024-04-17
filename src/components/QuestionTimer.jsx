import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timeoutTimer = setTimeout(onTimeout, timeout);
    return () => {
      console.log("CLEAR TIMEOUT");
      clearTimeout(timeoutTimer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const progressInterval = setInterval(() => {
      setRemainingTime((prevValue) => prevValue - 500);
    }, 500);
    return () => {
      console.log("CLEAR INTERVAL");
      clearInterval(progressInterval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
};

export default QuestionTimer;

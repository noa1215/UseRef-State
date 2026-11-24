import { useState } from "react";

export default function TimerState() {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function handleStart() {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    setIntervalId(id);
  }
  function handleStop() {
    clearInterval(intervalId);
  }

  return (
    <>
      <p>seconds : {seconds}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  );
}

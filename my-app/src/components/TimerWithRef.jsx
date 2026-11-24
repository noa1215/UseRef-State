import { useRef, useState } from "react";

export default function TimerState() {
  const [seconds, setSeconds] = useState(0);
const intervalRef= useRef(null)
function handleStart() {

  intervalRef.current = setInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);
}

function handleStop() {
  clearInterval(intervalRef.current);
}

  return (
    <>
      <p>seconds : {seconds}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  );
}

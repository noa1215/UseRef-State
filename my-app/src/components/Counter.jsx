import { useRef, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const previousCount = useRef(0);

  function handleInc() {
    previousCount.current = counter;
    setCounter(counter+1)
  }
  function handleDec() { 
    previousCount.current = counter;
    setCounter(counter-1)}

  return (
    <>
      <p>{`Current: ${counter} (Previous: ${previousCount.current})`}</p>
      <button onClick={handleInc}>+1</button>
      <button onClick={handleDec}>-1</button>
    </>
  );
}

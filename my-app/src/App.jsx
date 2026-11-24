import { useState } from "react";
import "./App.css";
import ClearState from "./components/ClearState.jsx";
import ClearRef from "./components/ClearRef.jsx";
import TextBox from "./components/TextBox.jsx";
import { useRef } from "react";
import Counter from "./components/Counter.jsx";
import TimerState from "./components/TimerState.jsx";
import TimerWithRef from "./components/TimerWithRef.jsx";
import CountRef from "./components/CountRef.jsx";
function App() {
  const textBoxRef = useRef(null);

  function handleClick() {
    alert(textBoxRef.current.value);
  }
  return (
    <>
      <ClearState />

      <ClearRef />

      <TextBox ref={textBoxRef} />
      <button onClick={handleClick}>show Value</button>

      <Counter />

      <TimerState />

      <TimerWithRef />

      <CountRef />
    </>
  );
}

export default App;

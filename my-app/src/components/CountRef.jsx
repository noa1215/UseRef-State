import { useRef, useState } from "react";

export default function CountRef() {
  const clicks = useRef(0);
  const [showClick, setShowClick] = useState(0);
  function handleClickCount() {
    clicks.current++;
  }
function handleSetCLicks(){
    setShowClick(clicks.current)
}
  return <>
  <button onClick={handleSetCLicks}>show Clicks</button>
  <button onClick={handleClickCount}>click me</button>
  <p>Total clicks: {showClick}</p></>
}

import { useRef } from "react"

export default function ClearRef(){

    const inputRef=useRef(null)

    function handleClear(){
        inputRef.current.value=''
    }
      return <>
    <label >input
        <input type="text" ref={inputRef} />
    </label>

    <button onClick={handleClear}>clear-ref</button>
    </>
}
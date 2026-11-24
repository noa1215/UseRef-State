import { useState } from "react"

export default function ClearState(){
    const [inputValue, setInputValue] = useState('')

    function handleClick(){
        setInputValue('')
    }

    function handleSetText(e){
        setInputValue(e.target.value)
    }

    return <>
    <label >input
        <input type="text" value={inputValue} onChange={handleSetText} />
    </label>

    <button onClick={handleClick}>clear</button>
    </>
}
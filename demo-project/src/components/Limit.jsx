import { useState } from "react";

export default function Limit () {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }
    
  return(
    <>
        <h1>Counter:{count} </h1>
      <button onClick={increment} disabled={count==10}>Add Count Button</button>
      <button onClick={decrement}>Decrese Count Button</button>

      {
        count == 5 ? "reached 5": ""
      }

      {
        count == 8 ? "reached 8": ""
      }
      {
        count == 10 ? "reached 10": ""
      }
    </>
  )
}

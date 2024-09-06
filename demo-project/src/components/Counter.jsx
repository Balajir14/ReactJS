import { useState } from "react";

export default function Counter () {
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
    </>
  )
}

// export default Counter
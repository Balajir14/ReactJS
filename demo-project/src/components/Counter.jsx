import { useState } from "react";
import Link from '@mui/material/Link';

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
      <Link href="/">Back</Link>
        <h1>Counter:{count} </h1>
      <button onClick={increment} disabled={count==10}>Add Count Button</button>
      <button onClick={decrement}>Decrese Count Button</button>
    </>
  )
}

// export default Counter
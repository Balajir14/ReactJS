import { useEffect, useState } from "react";

export default function LimitHook () {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }

    useEffect(()=>{
        if(count == 5){
            setMessage('You have reached limit of 5')
        }else if(count==8){
            setMessage('You have reached limit of 8')
        }else{
            setMessage("");
        }
    },[count])
    
  return(
    <>
        <h1>Counter:{count} </h1>
      <button onClick={increment} disabled={count==10}>Add Count Button</button>
      <button onClick={decrement}>Decrese Count Button</button>
      <h3>This is my Message: {message}</h3>
    </>
  )
}

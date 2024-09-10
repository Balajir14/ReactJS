import { useState } from "react"
import { useEffect } from "react"

export default function NewHook (){

    const [count, setCount] = useState(10); 
    const [message, setMessage] = useState(''); 

    useEffect(() => {
        if(count == 5){
             setMessage('You have reached 5')
        } else if(count == 8){
           setMessage('You have reached 8')
        } else if( count == 10){
            setMessage('You have reached 10')
        }
    },[count])
    
    console.log(message);
    

    //1. function - () => { }
    //2. dependency - [] 
        // optional
        // Empty 
        // Dependency

    return(
        <>
       {message}
        </>
    )
}
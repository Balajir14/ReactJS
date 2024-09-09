import { TextField } from "@mui/material/TextField";
import { useState } from "react";

export default function Form (){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }

     const handleLastName = (event) => {
        setLastName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       console.log(firstName + " " + lastName + " " + email);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <TextField type="text" label="First Name" variant="outlined" onChange={handleFirstName} />
                <input
                type="text"
                onChange={handleLastName}
                />
                 <input
                type="email"
                onChange={handleEmail}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
import { TextField } from "@mui/material";
import { useState } from "react";


export default function NewForm (){

    const [formData, setFormData] = useState({
        "firstName":'',
        "lastName": '',
        "email": ''
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData,  [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <TextField type="text" name="firstName" label="First Name" variant="outlined" onChange={handleChange} />
                <TextField type="text" name="lastName"  label="Last Name" variant="outlined" onChange={handleChange} />
                <TextField type="text" name="email"  label="Email" variant="outlined" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
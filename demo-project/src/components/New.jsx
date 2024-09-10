// import TextField from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function New() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${formData.firstName} ${formData.lastName} ${formData.email}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField label="First Name" name="firstName" variant="outlined" onChange={handleChange} />
            <input type="text" name="lastName" onChange={handleChange} />
            <input type="email" name="email" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

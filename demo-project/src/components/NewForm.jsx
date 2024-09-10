import { TextField, Container, Box, Paper } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState } from "react";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

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
          <Container maxWidth="sm">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                     <form onSubmit={handleSubmit}>
                    <Grid size={12}>
                    <Item>
                        <TextField type="text" name="firstName" label="First Name" variant="outlined" onChange={handleChange} />
                    </Item>
                    </Grid>
                    <Grid size={12}>
                    <Item>
                        <TextField type="text" name="lastName"  label="Last Name" variant="outlined" onChange={handleChange} />

                    </Item>
                    </Grid>
                    <Grid size={12}>
                    <Item>
                        <TextField type="text" name="email"  label="Email" variant="outlined" onChange={handleChange} />

                    </Item>
                    </Grid>
                    <Grid size={8}>
                    <Item>  
                        <button type="submit">Submit</button>
                        </Item>
                    </Grid>
                     </form>
                </Grid>
            </Box>
         </Container>
        </>
    )
}
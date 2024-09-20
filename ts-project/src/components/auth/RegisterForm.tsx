import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { ageCalculator } from "../../common/ageCalculator";
import { useCurrentUser, UserTypeWithoutAge } from "../../context/UserContext";

// interface FormDataType {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   dob: string;
//   email: string;
//   phone: string;
//   address: string;
//   password: string;
//   confirmPassword: string;
// }
export default function RegisterForm() {
  const userContext = useCurrentUser();
  console.log(userContext?.users);

  const [formData, setFormData] = useState<UserTypeWithoutAge>({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const age = ageCalculator(formData.dob);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      firstName,
      middleName,
      lastName,
      dob,
      phone,
      address,
      email,
      password,
      confirmPassword,
    } = formData;

    const newValue = {
      firstName,
      middleName,
      lastName,
      dob,
      age,
      phone,
      address,
      email,
      password,
      confirmPassword,
    };

    // const newValues = {...formData, age}

    userContext?.storeUserData(newValue);
  };

  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h5" gutterBottom>
          User Registration
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <TextField
              variant="outlined"
              type="text"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label="Middle Name"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label="DOB"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label="Address"
              name="address"
              value={formData.address}
              multiline
              rows={3}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              fullWidth
            />
          </Box>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Register User
          </Button>
        </Box>
      </Container>
    </>
  );
}

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ageCalculator } from "../../common/ageCalculator";
import { useCurrentUser, UserTypeWithoutAge } from "../../context/UserContext";
import { FormErrors, validateForm } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { setRegister } from "../../store/registerSlice";

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
// const , var, let - js

export default function RegisterForm() {
  const userContext = useCurrentUser();
  console.log(userContext?.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

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
    const validatedErrors = validateForm(formData);
    setErrors(validatedErrors);
    if (Object.keys(validatedErrors).length === 0) {
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
      dispatch(setRegister(newValue));
      // const newValues = {...formData, age}
      userContext?.storeUserData(newValue);
      dispatch(setUser({ name: newValue.firstName, age: 10 }));
      navigate("/");
    } else {
      alert("Validation required.");
    }
  }; // handlesubmit close here

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
              // required
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <TextField
              variant="outlined"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              // required
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
            <TextField
              variant="outlined"
              label="Middle Name"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              // required
              fullWidth
            />
            <TextField
              variant="outlined"
              label="DOB"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              // required
              fullWidth
              error={!!errors.dob}
              helperText={errors.dob}
            />
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              // required
              fullWidth
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              variant="outlined"
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              // required
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone}
            />
            <TextField
              variant="outlined"
              label="Address"
              name="address"
              value={formData.address}
              multiline
              rows={3}
              onChange={handleChange}
              // required
              fullWidth
              error={!!errors.address}
              helperText={errors.address}
            />
            <TextField
              variant="outlined"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              // required
              fullWidth
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              variant="outlined"
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              // required
              fullWidth
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
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

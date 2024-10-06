import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import MenuAppBar from "./MenuAppBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
}

const AddUser: React.FC = () => {
  const [user, setUser] = useState<User>({ name: "", email: "" });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/users", user);
      navigate("/");
    } catch (error: any) {
      console.log(error);
    } finally {
      setUser({ name: "", email: "" });
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 400,
          margin: "0 auto",
          padding: 10,
          backgroundColor: "white",
          borderRadius: 2,
        }}
      >
        <MenuAppBar title={"Add User"} />
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Box mb={2} mt={3}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </Box>
          <Button
            type="submit"
            variant="outlined"
            onClick={() => {
              navigate("/");
            }}
            sx={{ color: "teal", borderRadius: "2rem", mr: 2 }}
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "teal", borderRadius: "2rem" }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddUser;

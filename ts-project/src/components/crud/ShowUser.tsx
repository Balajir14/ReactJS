import { useEffect, useState } from "react";
import axios from "axios";
import {
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import MenuAppBar from "./MenuAppBar";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

export default function ShowUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
    setLoading(false);
  }, []);

  const handleDeleteUser = async (id: number) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleEditUser = async (id: number) => {
    navigate(`/edit-user/${id}`);
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <MenuAppBar title={"Users List"} />
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "teal",
            margin: 2,
            float: "right",
            borderRadius: "2rem",
          }}
          onClick={() => {
            navigate("/add-user");
          }}
        >
          Add User
        </Button>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date Created</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {new Date(user.created_at).toISOString().split("T")[0]}
                </TableCell>
                <TableCell>
                  <Tooltip title="Edit User">
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        handleEditUser(user.id);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete User">
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        handleDeleteUser(user.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

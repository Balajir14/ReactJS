import {
  Alert,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

interface Todo {
  id: number;
  task: string;
}

export default function Todo() {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);
  const [alert, setAlert] = useState<boolean>(false);

  const addTodo = () => {
    setAlert(false);
    if (task.trim()) {
      setTodo([...todo, { id: Date.now(), task }]);
      setTask("");
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      {alert && <Alert severity="warning">Empty task provided!</Alert>}
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#edf2ec",
          borderRadius: "1rem",
          padding: "50px",
        }}
      >
        <Typography variant="h3" gutterBottom>
          TODO APP
        </Typography>

        <TextField
          variant="outlined"
          label="New Task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          fullWidth
          sx={{ marginBottom: 3 }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ mb: 3, backgroundColor: "#A1D6B2", color: "black" }}
          onClick={addTodo}
        >
          Add Task
        </Button>

        <List>
          {todo.map((item) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      console.log(item.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              {item.task}
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}

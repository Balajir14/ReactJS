import {
  Alert,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { getColor } from "../../common/todo";

interface Todo {
  id: number;
  task: string;
  status: "started" | "progress" | "completed";
}

export default function Todo() {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);
  const [alert, setAlert] = useState<boolean>(false);
  const [status, setStatus] = useState<"started" | "progress" | "completed">(
    "started"
  );
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const addTodo = () => {
    setAlert(false);
    if (task.trim()) {
      setTodo([...todo, { id: Date.now(), task, status }]);
      setTask("");
    } else {
      setAlert(true);
    }
  };

  const updateTodo = () => {
    if (task.trim() && editingTaskId !== null) {
      const newValue = todo.map((item) =>
        item.id === editingTaskId ? { ...item, task } : item
      );
      setTodo(newValue);
      setTask("");
      setEditingTaskId(null);
    }
  };

  const deleteTodo = (id: number) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number, task: string) => {
    setTask(task);
    setEditingTaskId(id);
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
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Age"
          onChange={(event) => setStatus(event.target.value)}
          fullWidth
          sx={{ mb: 3 }}
        >
          <MenuItem value={"started"}>Started</MenuItem>
          <MenuItem value={"progress"}>In Progress</MenuItem>
          <MenuItem value={"completed"}>Completed</MenuItem>
        </Select>
        <Button
          variant="contained"
          fullWidth
          sx={{ mb: 3, backgroundColor: "#A1D6B2", color: "black" }}
          // onClick={addTodo}
          onClick={editingTaskId !== null ? updateTodo : addTodo}
        >
          {editingTaskId ? "Edit Task" : "Add Task"}
        </Button>

        <List>
          {todo.map((item) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <>
                  <Button color="secondary">{item.status}</Button>
                  <IconButton
                    onClick={() => {
                      handleEdit(item.id, item.task);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      deleteTodo(item.id);
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

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
import { useEffect, useState } from "react";
import { getColor } from "../../common/todo";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface Todo {
  id: number;
  task: string;
  status: "started" | "progress" | "completed";
}

export default function Todo() {
  const registerData = useSelector((state: RootState) => state.register);
  console.log(registerData);
  const [task, setTask] = useState<string>();
  const [todo, setTodo] = useState<Todo[]>([]);
  const [alert, setAlert] = useState<boolean>(false);
  const [status, setStatus] = useState<"started" | "progress" | "completed">(
    "started"
  );
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const addTodo = () => {
    if (!task) return;
    setAlert(false);

    const isDuplicate = todo.some(
      (item) => item.task.toLowerCase() === task.trim().toLowerCase()
    );

    if (isDuplicate) {
      setAlert(true); // show alert

      setTimeout(() => {
        setAlert(false);
      }, 3000); // hide alert

      return;
    }

    if (task.trim()) {
      setTodo([...todo, { id: Date.now(), task, status }]);
      setTask("");
    } else {
      setAlert(true);
    }
  };

  const updateTodo = () => {
    if (!task) return;
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
    setIsEditing(true);
  };

  useEffect(() => {
    if (!task) return;
    const originalTask = todo.find((item) => item.id === editingTaskId);

    if (originalTask?.task !== task) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [task]);

  return (
    <>
      <h1>Welcome {registerData.firstName} </h1>
      {alert && <Alert severity="warning">Oops! Something went wrong.</Alert>}
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
          onChange={(event) =>
            setStatus(
              event.target.value as "started" | "progress" | "completed"
            )
          }
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
          onClick={editingTaskId !== null ? updateTodo : addTodo}
          disabled={isEditing}
        >
          {editingTaskId ? "Edit Task" : "Add Task"}
        </Button>

        <List>
          {todo.map((item) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <>
                  <Button
                    color="secondary"
                    sx={{
                      backgroundColor: getColor(item.status),
                      color: "black",
                    }}
                  >
                    {item.status}
                  </Button>
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

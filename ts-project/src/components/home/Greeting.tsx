import Button from "@mui/material/Button";
import { useTheme } from "../../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function Greeting() {
  const data = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome</h1>
      <DatePicker />
      <DateTimePicker label="Basic date time picker" />
      My current Theme is: {data?.theme}
      <Button variant="outlined" href="/home">
        Go to Home
      </Button>
      <Button variant="outlined" onClick={() => navigate("/todo")}>
        Todo App
      </Button>
      <Link to="/todo">Todo App\</Link>
      <Button variant="outlined" onClick={() => navigate("/add-blog")}>
        Add Blog
      </Button>
    </>
  );
}

import Button from "@mui/material/Button";
import { useTheme } from "../../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";

export default function Greeting() {
  const data = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome</h1>
      My current Theme is: {data?.theme}
      <Button variant="outlined" href="/home">
        Go to Home
      </Button>
      <Button variant="outlined" onClick={() => navigate("/todo")}>
        Todo App
      </Button>
      <Link to="/todo">Todo App\</Link>
    </>
  );
}

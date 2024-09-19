import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import { useTheme } from "../../context/ThemeContext";

export default function Greeting() {
  const data = useTheme();
  return (
    <>
      <h1>Welcome</h1>
      My current Theme is: {data?.theme}
      <Button variant="outlined" href="/home">
        Go to Home
      </Button>
      <Button variant="outlined" href="/todo">
        Todo App
      </Button>
      <Link href="/todo">Todo App</Link>
    </>
  );
}

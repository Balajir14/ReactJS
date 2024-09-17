import { Link } from "@mui/material";
import Button from "@mui/material/Button";

export default function Greeting() {
  return (
    <>
      <h1>Welcome</h1>
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

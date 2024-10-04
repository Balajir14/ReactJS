import Button from "@mui/material/Button";
import { useTheme } from "../../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Greeting() {
  const data = useTheme();
  const navigate = useNavigate();

  // const userData = useSelector((state: RootState) => state.user);

  const registerData = useSelector((state: RootState) => state.register);
  console.log(registerData);

  return (
    <>
      <h1>Welcome {registerData.firstName} </h1>
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
      <Button variant="outlined" onClick={() => navigate("/reducer")}>
        Go go Reducer
      </Button>
    </>
  );
}

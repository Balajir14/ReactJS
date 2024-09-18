import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Greeting from "./components/home/Greeting";
import TableComponent from "./components/table/Table";
import ApiTable from "./components/table/ApiTable";
import Mui from "./components/mui/Mui";
import Todo from "./components/home/Todo";
import Parent from "./components/callback/Parent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/home" element={<Home />} />
          <Route path="/table" element={<TableComponent />} />
          <Route path="/api" element={<ApiTable />} />

          <Route path="/mui" element={<Mui />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/parent" element={<Parent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

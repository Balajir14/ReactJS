import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Greeting from "./components/home/Greeting";
import TableComponent from "./components/table/Table";
import ApiTable from "./components/table/ApiTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/home" element={<Home />} />
          <Route path="/table" element={<TableComponent />} />
          <Route path="/api" element={<ApiTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

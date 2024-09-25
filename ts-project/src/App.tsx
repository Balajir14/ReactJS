import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./components/home/Home";
// import Greeting from "./components/home/Greeting";
import TableComponent from "./components/table/Table";
import ApiTable from "./components/table/ApiTable";
import Mui from "./components/mui/Mui";
// import Todo from "./components/home/Todo";
import Parent from "./components/callback/Parent";
import ThemeProvider from "./context/ThemeContext";
import ThemeToogleButton from "./components/home/ThemeToogleButton";
import UserProvider from "./context/UserContext";
import RegisterForm from "./components/auth/RegisterForm";
import { lazy, Suspense } from "react";
import BlogProvider from "./context/BlogContext";

const Greeting = lazy(() => import("./components/home/Greeting"));
const Home = lazy(() => import("./components/home/Home"));
const Todo = lazy(() => import("./components/home/Todo"));

function App() {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <BlogProvider>
            <BrowserRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Greeting />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/table" element={<TableComponent />} />
                  <Route path="/api" element={<ApiTable />} />

                  <Route path="/mui" element={<Mui />} />
                  <Route path="/todo" element={<Todo />} />
                  <Route path="/parent" element={<Parent />} />
                  <Route path="/toggle" element={<ThemeToogleButton />} />

                  <Route path="/register" element={<RegisterForm />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </BlogProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

// react-router-dom
// 1. Routing
// 2. Redirect (useNavigate(), to, useParam());

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
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Reducer from "./components/home/Reducer";
import UseRefExample from "./components/hooks/UseRefExample";
import UseRefFileUpload from "./components/hooks/UseRefFileUpload";
import UseMemoExample from "./components/hooks/UseMemoExample";
import UseMemoFilter from "./components/hooks/useMemoFilter";
import BasicGrid from "./components/grid/GridComponent";
import { Provider } from "react-redux";
import store from "./store/store";

const Greeting = lazy(() => import("./components/home/Greeting"));
const Home = lazy(() => import("./components/home/Home"));
const Todo = lazy(() => import("./components/home/Todo"));
const AddBlog = lazy(() => import("./components/blog/AddBlog"));
const BlogList = lazy(() => import("./components/blog/BlogList"));
const BlogDetail = lazy(() => import("./components/blog/BlogDetails"));

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <ErrorBoudary> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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

                      <Route path="/add-blog" element={<AddBlog />} />
                      <Route path="/blog-list" element={<BlogList />} />
                      <Route path="/blog-detail/:id" element={<BlogDetail />} />

                      <Route path="/reducer" element={<Reducer />} />
                      <Route path="/ref" element={<UseRefExample />} />
                      <Route path="/ref-file" element={<UseRefFileUpload />} />
                      <Route path="/memo" element={<UseMemoExample />} />
                      <Route path="/memo-filter" element={<UseMemoFilter />} />

                      <Route path="/grid" element={<BasicGrid />} />
                    </Routes>
                  </Suspense>
                </BrowserRouter>
              </BlogProvider>
            </UserProvider>
          </ThemeProvider>
        </LocalizationProvider>
        {/* </ErrorBoudary> */}
      </Provider>
    </>
  );
}

export default App;

// react-router-dom
// 1. Routing
// 2. Redirect (useNavigate(), to, useParams());

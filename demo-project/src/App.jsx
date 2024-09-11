import {BrowserRouter, Routes, Route} from "react-router-dom";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Loading from "./components/Loading";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/count" element={<Counter />} />
          <Route path="/forms" element={<Form />} />
          <Route path="/loading" element={<Loading isLoading={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

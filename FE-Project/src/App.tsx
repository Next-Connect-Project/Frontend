import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Login from "./page/Login";
import NewPost from "./page/NewPost";
import NotFound from "./page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<NewPost />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

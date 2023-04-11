import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProjectDetail from "./components/project/ProjectDetail";
import Home from "./page/Home"
import Login from "./page/Login";
import NewPost from "./page/NewPost";
import NotFound from "./page/NotFound";
import Project  from "./page/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<NewPost />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/project/:id" element={<Project />}></Route>
        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

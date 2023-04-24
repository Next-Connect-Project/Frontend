import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProjectDetail from "./components/project/ProjectDetail";
import Home from "./page/Home"
import NewPost from "./page/NewPost";
import NotFound from "./page/NotFound";
import Project  from "./page/Project";
import Recruitment from "./page/Recruitment";
import Promotion from "./page/Promotion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<NewPost />}></Route>
        <Route path="/recruitment" element={<Recruitment/>}></Route>
        <Route path="/promotion" element={<Promotion/>}></Route>
        <Route path="/project/:id" element={<Project />}></Route>
        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

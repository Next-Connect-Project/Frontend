import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import NewPost from "./page/NewPost";
import NotFound from "./page/NotFound";
import Project  from "./page/Project";
import Recruitment from "./page/Recruitment";
import Promotion from "./page/Promotion";
import EditPost from "./page/EditPost";
import MyPost from "./page/MyPost";
import Setting from "./page/Setting"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<NewPost />}></Route>
        <Route path="/recruitment" element={<Recruitment/>}></Route>
        <Route path="/promotion" element={<Promotion/>}></Route>
        <Route path="/project/:id" element={<Project />}></Route>
        <Route path="/edit/:id" element={<EditPost />}></Route>
        <Route path="/mypost" element={<MyPost />}></Route>
        <Route path="/setting" element={<Setting />}></Route>

        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

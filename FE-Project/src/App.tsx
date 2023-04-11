import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import NewPost from "./page/NewPost";
import NotFound from "./page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<NewPost />}></Route>
        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import NewRecruitPost from "./page/NewRecruitPost";
import NotFound from "./page/NotFound";
import Recruitment from "./page/Recruitment";
import Promotion from "./page/Promotion";
import EditPost from "./page/EditPost";
import MyPost from "./page/MyPost";
import Setting from "./page/Setting"
import NewPromotionPost from "./page/NewPromotionPost";
import ProjectDetail from "./page/ProjectDetail";
import PromotionDetail from "./page/PromotionDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recruitpost" element={<NewRecruitPost />}></Route>
        <Route path="/promotionpost" element={<NewPromotionPost />}></Route>
        <Route path="/recruitment" element={<Recruitment/>}></Route>
        <Route path="/promotion" element={<Promotion/>}></Route>
        <Route path="/project/:id" element={<ProjectDetail />}></Route>
        <Route path="/promotion/:id" element={<PromotionDetail />}></Route>
        <Route path="/edit/:id" element={<EditPost />}></Route>
        <Route path="/mypost" element={<MyPost />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

import React, { useEffect, useState } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { useAppSelector } from "../../hooks/redux/store";
import { Mypostprops } from "../mypost/MyPost.interface";
import { getMyPostlist, getMyPromotion } from "../../hooks/axios/MyPostlist";
import { PromotionDetail } from "../promotiondetail/PromotionDetail.interface";
import { Link , useParams} from "react-router-dom";

export default function MyPostMain() {
  const [list, setList] = useState<Mypostprops[]>([]);
  const [promotionlist, setPromotionlist] = useState<PromotionDetail[]>([]);
  const token = useAppSelector((state) => state.login);
  const { id } = useParams();

  const getData = async () => {
    const recruitment = await getMyPostlist(token.token);
    console.log (recruitment);
    setList (recruitment.recruitments);
  };

  const getPromotion = async () => {
    const detail = await getMyPromotion(token.token);
    setPromotionlist(detail);
  };



  useEffect(() => {
    getData();
    getPromotion();
  }, []);

  return (
    <div className="mypost_wrapper">
      <div className="announcement">
        <AiFillFolderOpen />
        내가 쓴 글
      </div>
      
      <div className="announcement">
        모집
      </div>
      {list.map((item) => (
        <div className="post_wrapper" key={item.id}>
          <div>제목: {item.title}</div>
          <div>작성일: {item.createdAt}</div>
          <div>모집 마감: {item.deadline}</div>
          <div>마감 여부: {item.state}</div>
          <div>기술 스택: {item.tech.join(", ")}</div>
          <Link className="link" to={`/project/${item.id}`}>
            <div className="owner_button">상세보기</div>
          </Link>
        </div>
      ))}

      <div className="announcement">
        홍보
      </div>
    </div>
  );
}

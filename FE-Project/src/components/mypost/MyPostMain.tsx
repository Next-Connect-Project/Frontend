import React, { useEffect, useState } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { useAppSelector } from "../../hooks/redux/store";
import { MyRecuritment, MyPromotion } from "../mypost/MyPost.interface";
import { getMyRecuritment, getMyPromotion } from "../../hooks/axios/MyPage";
import { Link , useParams} from "react-router-dom";

export default function MyPostMain() {
  const [list, setList] = useState<MyRecuritment[]>([]);
  const [promotionlist, setPromotionlist] = useState<MyPromotion[]>([]);
  const token = useAppSelector((state) => state.login);
  const { id } = useParams();

  const getData = async () => {
    const data = await getMyRecuritment(token.token);
    console.log("page");
    console.log (data);
    setList (data.recruitments);
  };

  const getPromotion = async () => {
    const data = await getMyPromotion(token.token);
    console.log("promotion");
    console.log (data);
    setPromotionlist(data.promotionOverviewDtoList);
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
          <div className="content"><span>제목:</span> {item.title}</div>
          <div className="content"><span>작성일:</span> {item.createdAt}</div>
          <div className="content"><span>모집 마감:</span> {item.deadline}</div>
          <div className="content"><span>마감 여부:</span> {item.state}</div>
          <div className="content"><span>기술 스택:</span> {item.tech.join(", ")}</div>
          <Link className="link" to={`/recruit/${item.id}`}>
            <div className="owner_button">상세보기</div>
          </Link>
        </div>
      ))}

      <div className="announcement">
        홍보
      </div>
      
      
        {promotionlist.map( (item) => (
        <div className="post_wrapper">
          <div className="content"><span>제목:</span> {item.title} </div>
          <div className="content"><span>작성일:</span> {item.createdAt}</div>
          <div className="content"><span>모집 마감:</span> {item.abstractContent}</div>
          <div className="content"><span>추천수:</span> {item.likeCount}</div>
          <div className="content"><span>조회수:</span> {item.view}</div>
          
          <Link className="link" to={`/promotion/${item.id}`}>
            <div className="owner_button">상세보기</div>
          </Link>
        </div>
        ))}




    </div>
  );
}

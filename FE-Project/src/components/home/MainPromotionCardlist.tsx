import React, { useEffect, useState } from "react";
import MainPromotionCard from "../card/PromotionCard";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineCaretRight,
} from "react-icons/ai";
import { getMainPromotionCardData } from "../../hooks/axios/MainCardlist";
import { Link, useNavigate } from "react-router-dom";
import { PromotionCardprops } from "./Main.interface";

export default function MainPromotionCardlist() {
  const [list, setList] = useState<PromotionCardprops[]>([]);
  const navigate = useNavigate();

  /*모집글 메인 조회 API*/
  const getData = async () => {
    const card = await getMainPromotionCardData();
    if (card.resultCode === 200) {
      setList(card.response);
    } else {
      navigate("/NotFonud");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="cardlist_wrapper">
      <div className="announcement">
        <AiOutlineFundProjectionScreen />
        홍보중인 프로젝트
      </div>
      <div className="cardlists">
        {list.map((card: PromotionCardprops) => {
          return <MainPromotionCard card={card} key={card.id} />;
        })}
      </div>
      <div className="show_more_wrapper">
        <Link to="/promotion" className="show_more_Link">
          <div className="show_more">
            홍보 더 보기 <AiOutlineCaretRight />
          </div>
        </Link>
      </div>
    </div>
  );
}

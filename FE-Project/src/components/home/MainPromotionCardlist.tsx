import React, { useEffect, useState } from "react";
import MainPromotionCard from "../card/PromotionCard";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineCaretRight,
} from "react-icons/ai";
import { getMainPromotionCardData } from "../../hooks/axios/MainCardlist";
import { PromotionCard } from "./Main.interface";
import { Link } from "react-router-dom";

export default function MainPromotionCardlist() {
  const [list, setList] = useState<PromotionCard[]>([]);

  const getData = async () => {
    const card = await getMainPromotionCardData();
    setList(card);
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
        {/* 나중에 API 받아서 map으로 표현하기 */}
        {list.map((card) => {
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

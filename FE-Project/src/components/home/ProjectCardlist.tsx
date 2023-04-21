import React, { useEffect, useState } from "react";
import MainProjectCard from "./MainProjectCard";
import { ImFire } from "react-icons/im";
import { AiOutlineCaretRight } from "react-icons/ai";
import { getMainCardData } from "../../hooks/axios/Cardlist";
import { Card } from "./Main.interface";
import { Link } from "react-router-dom";

export default function ProjectCardlist() {
  const [list, setList] = useState<Card[]>([]);

  const getData = async () => {
    const card = await getMainCardData();
    setList(card);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="cardlist_wrapper">
      <div className="announcement">
        <ImFire className="fire" />
        모집중인 공고
      </div>
      <div className="cardlists">
        {/* 나중에 API 받아서 map으로 표현하기 */}
        {list.map((card) => {
          return <MainProjectCard card={card} key={card.id} />;
        })}
      </div>
      <div className="show_more_wrapper">
        <Link to="/recruitment" className="show_more_Link">
          <div className="show_more">
            모집공고 더 보기 <AiOutlineCaretRight />
          </div>
        </Link>
      </div>
    </div>
  );
}

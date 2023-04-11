import React, { useEffect, useState } from "react";
import MainCard from "./MainCard";
import { ImFire } from "react-icons/im";
import { getMainCardData } from "../../hooks/axios/Cardlist";
import { Card } from "./Main.interface";

export default function Cardlist() {
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
          return (
              <MainCard card={card} key={card.id} />
          );
        })}
      </div>
    </div>
  );
}

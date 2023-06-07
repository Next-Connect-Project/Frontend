import React, { useEffect, useState } from "react";
import { ImFire } from "react-icons/im";
import { AiOutlineCaretRight } from "react-icons/ai";
import { getMainCardData } from "../../hooks/axios/MainCardlist";
import { Link } from "react-router-dom";
import RecruitmentCard from "../card/RecruitmentCard";
import { Cardprops } from "../card/Card.interface";
import RecruitmentCardClosed from "../card/RecruitmentCardClosed";

export default function MainRecruitmentCardlist() {
  const [list, setList] = useState<Cardprops[]>([]);

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
        {list.map((card: Cardprops) => {
          return card.state === "OPEN" ? (
            <RecruitmentCard card={card} key={card.id} />
          ) : (
            <RecruitmentCardClosed card={card} key={card.id} />
          );
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

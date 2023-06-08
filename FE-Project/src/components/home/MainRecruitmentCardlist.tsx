import React, { useEffect, useState } from "react";
import { ImFire } from "react-icons/im";
import { AiOutlineCaretRight } from "react-icons/ai";
import { getMainCardData } from "../../hooks/axios/MainCardlist";
import { Link, useNavigate } from "react-router-dom";
import RecruitmentCard from "../card/RecruitmentCard";
import RecruitmentCardClosed from "../card/RecruitmentCardClosed";
import { RecruitCardprops } from "./Main.interface";

export default function MainRecruitmentCardlist() {
  const [list, setList] = useState<RecruitCardprops[]>([]);
  const navigate = useNavigate();
  
  /*홍보글 메인페이지 조회 API*/
  const getData = async () => {
    const card = await getMainCardData();
    if (card.resultCode === 200) {
      setList(card.response.recruitments);
    } else {
      navigate("/NotFonud")
    }
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
        {list.map((card: RecruitCardprops) => {
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

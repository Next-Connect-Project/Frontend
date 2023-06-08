import React, { useEffect, useState } from "react";
import RecruitmentCard from "../card/RecruitmentCard";
import { getRecruitmentCards } from "../../hooks/axios/Recruitment";
import { RecruitmentCardlistProps } from "./Recruitment.interface";
import Paging from "./Paging";
import RecruitmentCardClosed from "../card/RecruitmentCardClosed";
import { RecruitCardprops } from "../home/Main.interface";
import { useNavigate } from "react-router-dom";

export default function RecruitmentCardlist({
  classification,
  state,
  page,
  setPage,
}: RecruitmentCardlistProps) {
  const [list, setList] = useState<RecruitCardprops[]>([]);
  const [totalcards, setTotalcards] = useState<number>(0);
  const cards = 16;
  const navigate = useNavigate();

  /* 모집글 검색 조회 API */
  const getData = async () => {
    const card = await getRecruitmentCards(classification, state, page);
    if (card.resultCode === 200) {
      setTotalcards(card.response.count);
      setList(card.response.recruitments);
    } else {
      navigate("/Notfound");
    }
  };

  /* 분류, 상태, 페이지 바뀔때 마다 Rerender */
  useEffect(() => {
    getData();
  }, [classification, state, page]);

  return (
    <>
      <div className="recruit_cardlist_wrapper">
        <div className="cardlists">
          {list.map((card: RecruitCardprops) => {
            return card.state === "OPEN" ? (
              <RecruitmentCard card={card} key={card.id} />
            ) : (
              <RecruitmentCardClosed card={card} key={card.id} />
            );
          })}
        </div>
        <div className="show_more_wrapper"></div>
      </div>
      <Paging
        page={page}
        setPage={setPage}
        cards={cards}
        totalcards={totalcards}
      />
    </>
  );
}

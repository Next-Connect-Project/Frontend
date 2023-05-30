import React, { useEffect, useState } from "react";
import RecruitmentCard from "../card/RecruitmentCard";
import { getRecruitmentCard } from "../../hooks/axios/Recruitment";
import { RecruitmentCardlistProps } from "./Recruitment.interface";
import Paging from "./Paging";
import { Cardprops } from "../card/Card.interface";
import RecruitmentCardClosed from "../card/RecruitmentCardClosed";

export default function RecruitmentCardlist({
  classification,
  state,
  page,
  setPage,
}: RecruitmentCardlistProps) {
  const [list, setList] = useState<Cardprops[]>([]);

  //페이지네이션을 위한 상태변수
  const [totalcards, setTotalcards] = useState<number>(0);
  const cards = 16;

  const getData = async () => {
    const card = await getRecruitmentCard(classification, state, page);
    console.log(card);
    //페이지네이션 페이지 수 계산
    setTotalcards(card.count);
    //카드출력
    setList(card.recruitments);
  };

  useEffect(() => {
    getData();
  }, [classification, state, page]);

  return (
    <>
      <div className="recruit_cardlist_wrapper">
        <div className="cardlists">
          {/* 나중에 API 받아서 map으로 표현하기 */}
          {list.map((card: Cardprops) => {
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

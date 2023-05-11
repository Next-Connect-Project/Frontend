import React, { useEffect, useState } from "react";
import { Card } from "../home/Main.interface";
import RecruitmentCard from "../card/RecruitmentCard";
import { getRecruitmentCard } from "../../hooks/axios/RecruitmentCartlist";
import { RecruitmentCardlistProps } from "./Recruitment.interface";
import Paging from "./Paging";

export default function RecruitmentCardlist({
  classification,
  state,
}: RecruitmentCardlistProps) {
  const [list, setList] = useState<Card[]>([]);

  //페이지네이션을 위한 상태변수
  const [totalcards, setTotalcards] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const cards = 12;

  const getData = async () => {
    //classification, state,page 바뀔때마다 reRender!! API 만들어지면 수정
    const card = await getRecruitmentCard();
    //페이지네이션 페이지 수 계산
    setTotalcards(card.length);
    //카드출력
    setList(card);
  };

  useEffect(() => {
    getData();
  }, [classification, state, page]);

  return (
    <>
      <div className="recruit_cardlist_wrapper">
        <div className="cardlists">
          {/* 나중에 API 받아서 map으로 표현하기 */}
          {list.map((card) => {
            return <RecruitmentCard card={card} key={card.id} />;
          })}
        </div>
        <div className="show_more_wrapper"></div>
      </div>
      <Paging page={page} setPage={setPage} cards={cards} totalcards={totalcards} />
    </>
  );
}

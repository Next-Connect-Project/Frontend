import React, { useEffect, useState } from "react";
import RecruitmentCard from "../card/RecruitmentCard";
import { RecruitmentCardlistProps } from "./Promotion.interface";
import Paging from "./Paging";
import { getPromotionCard } from "../../hooks/axios/Promotion";
import PromotionCard from "../card/PromotionCard";
import { PromotionCardprops } from "../card/Card.interface";

export default function PromotionCardlist({
  sort,
  page,
  setPage,
}: RecruitmentCardlistProps) {
  const [list, setList] = useState<PromotionCardprops[]>([]);

  //페이지네이션을 위한 상태변수
  const [totalcards, setTotalcards] = useState<number>(0);
  const cards = 16;

  const getData = async () => {
    const card = await getPromotionCard(page, cards, sort);
    console.log(card);
    //페이지네이션 페이지 수 계산
    setTotalcards(card.count);
    //카드출력
    setList(card.promotionOverviewDtoList);
  };

  useEffect(() => {
    getData();
  }, [sort, page]);

  return (
    <>
      <div className="recruit_cardlist_wrapper">
        <div className="cardlists">
          {list.map((card: PromotionCardprops) => {
            return <PromotionCard card={card} key={card.id} />;
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

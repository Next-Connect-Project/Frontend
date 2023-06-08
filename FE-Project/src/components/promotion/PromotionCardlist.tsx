import React, { useEffect, useState } from "react";
import { RecruitmentCardlistProps } from "./Promotion.interface";
import Paging from "./Paging";
import PromotionCard from "../card/PromotionCard";
import { PromotionCardprops } from "../home/Main.interface";
import { getPromotionCards } from "../../hooks/axios/Promotion";
import { useNavigate } from "react-router-dom";

export default function PromotionCardlist({
  sort,
  page,
  setPage,
}: RecruitmentCardlistProps) {
  const [list, setList] = useState<PromotionCardprops[]>([]);
  const [totalcards, setTotalcards] = useState<number>(0);
  const cards = 16;
  const navigate = useNavigate();

  /*전체 홍보 글 조회 API*/
  const getData = async () => {
    const card = await getPromotionCards(page, cards, sort);
    if (card.resultCode === 200) {
      setTotalcards(card.response.count);
      setList(card.response.promotionOverviewDtoList);
    } else {
      navigate("/Notfound");
    }
  };

  /* 정렬순서, 페이지 바뀔때 마다 Rerender */
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

import React from "react";
import { PromotionFilterProps } from "./Promotion.interface";

export default function Filter(props: PromotionFilterProps) {
  /* 정렬 Filter 0:최신글 1:추천수 2: 최신글+추천 */
  const onClickRecommend = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (props.sort !== 1) {
      props.sort === 2 ? props.setSort(1) : props.setSort(2);
    }
  };

  const onClickNewest = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (props.sort !== 0) {
      props.sort === 2 ? props.setSort(0) : props.setSort(2);
    }
  };

  return (
    <div className="filter_wrapper">
      <div>
        <div className="filter_title">정렬 순서</div>
        <div className="filter_desc">
          {props.sort === 0 ? (
            <>
              <div className="filter_selected" onClick={onClickNewest}>
                최신글
              </div>
              <div className="filter" onClick={onClickRecommend}>
                추천수
              </div>
            </>
          ) : props.sort === 1 ? (
            <>
              <div className="filter" onClick={onClickNewest}>
                최신글
              </div>
              <div className="filter_selected" onClick={onClickRecommend}>
                추천수
              </div>
            </>
          ) : (
            <>
              <div className="filter_selected" onClick={onClickNewest}>
                최신글
              </div>
              <div className="filter_selected" onClick={onClickRecommend}>
                추천수
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { PromotionFilterProps } from "./Promotion.interface";

export default function Filter(props: PromotionFilterProps) {
  //분류 Filter 0:ALL 1:PROJECT 2:STUDY
  const onClickStudy = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.setSort(1);
  };

  const onClickProject = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    props.setSort(0);
  };

  return (
    <div className="filter_wrapper">
      <div>
        <div className="filter_title">정렬 순서</div>
        <div className="filter_desc">
          {props.sort === 0 ? (
            <>
              <div className="filter_selected" onClick={onClickProject}>
                최신글
              </div>
              <div className="filter" onClick={onClickStudy}>
                추천수
              </div>
            </>
          ) : (
            <>
              <div className="filter" onClick={onClickProject}>
                최신글
              </div>
              <div className="filter_selected" onClick={onClickStudy}>
                추천수
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
//Promotion Sorting 어떻게? 최신글 순서, 추천순 2개하고  Default는 무엇?

import React from "react";
import { Link } from "react-router-dom";
import { MainCardProps } from "./Card.interface";

export default function RecruitmentCardClosed({ card }: MainCardProps) {
  return (
    <div className="card_wrapper_closed">
      <Link className="link" to={`/project/${card.id}`}></Link>
      <div className="card_top">
        <div className="card_top_category">
          {card.category === "project" ? (
            <div className="card_top_category_sideproject">사이드 프로젝트</div>
          ) : (
            <div className="card_top_category_study">스터디</div>
          )}
        </div>
      </div>
      <div className="card_classification">{card.classification}</div>
      <div className="card_name">{card.name}</div>
      <div className="card_title">{card.title}</div>
      <div className="card_stack">
        {card.stack.map((list: string, index: number) => {
          return (
            <span key={index} className="stack">
              {list}
            </span>
          );
        })}
      </div>
      <hr />
      <div>
        모집현황 {card.gathered}/{card.total}
      </div>
    </div>
  );
}

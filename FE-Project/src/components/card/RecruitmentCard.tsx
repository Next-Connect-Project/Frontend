import React from "react";
import { Link } from "react-router-dom";
import { ChangeMonthForm } from "../../hooks/Others";
import { MainCardProps } from "./Card.interface";

export default function RecruitmentCard({ card }: MainCardProps) {
  const startDate = ChangeMonthForm(new Date(card.createdAt));
  const endDate = ChangeMonthForm(new Date(card.deadline));
  return (
    <div className="card_wrapper">
      <Link className="link" to={`/recruit/${card.id}`}></Link>
      <div className="card_top">
        <div className="card_top_category">
          {card.category === "PROJECT" ? (
            <div className="card_top_category_sideproject">프로젝트</div>
          ) : (
            <div className="card_top_category_study">스터디</div>
          )}
        </div>
      </div>
      <div className="card_classification">{startDate}</div>
      <div className="card_name">{card.memberName}</div>
      <div className="card_title">{card.title}</div>
      <hr />
      <div className="card_stack">
        {card.tech.map((list: string, index: number) => {
          return (
            <span key={index} className="stack">
              {list}
            </span>
          );
        })}
      </div>
      <div>
        <span>마감:</span> {endDate}
      </div>
    </div>
  );
}

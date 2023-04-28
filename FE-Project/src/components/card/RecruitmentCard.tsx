import React from "react";
import { MainCardProps } from "../home/Main.interface";
import { Link } from "react-router-dom";

export default function RecruitmentCard({ card }: MainCardProps) {
  return (
    <div className="card_wrapper">
      <Link className="link" to={`/project/${card.id}`}></Link>
        <div className="card_top">
          <div className="card_top_category">
            {card.category === "project" ? (
              <div className="card_top_category_sideproject">
                사이드 프로젝트
              </div>
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

//모집중인 공고
//id
//PROJECT STUDY
//게시일 -> 뷰티/패션에서 변경
//작성자 이름
//제목
//기술스택
//모집현황

//홍보중인 프로젝트
//추천수 빼기
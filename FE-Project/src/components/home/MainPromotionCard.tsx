import React from "react";
import { RiThumbUpFill } from "react-icons/ri";
import { MainPromotionCardProps } from "./Main.interface";
import { Link } from "react-router-dom";

export default function MainPromotionCard({ card }: MainPromotionCardProps) {
  return (
    <div className="card_wrapper">
      <Link className="link" to={`/promotion/${card.id}`}></Link>
      <div className="card_top">
        <div className="card_top_category_promotion">홍보</div>
        <div className="card_top_detail">
          <div className="card_top_count">
            <span>
              <RiThumbUpFill />
            </span>
            <span>{card.recommend}</span>
          </div>
        </div>
      </div>
      <div className="card_date">{card.date}</div>
      <div className="card_name">{card.name}</div>
      <div className="card_title">{card.title}</div>
      <hr />
      <div className="card_summary">{card.summary}</div>
    </div>
  );
}

import React from "react";
import { RiThumbUpFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { MainPromotionCardProps } from "./Card.interface";

export default function PromotionCard({ card }: MainPromotionCardProps) {
  return (
    <div className="card_wrapper">
      <Link className="link" to={`/promotion/${card.id}`}></Link>
      <div className="card_top">
        <div className="card_top_category_promotion">홍보</div>
        <div className="card_top_detail">
          <div className="card_top_count">
            <div className="count_gap">
              <span>
                <GrView />
              </span>
              <span>{card.view}</span>
            </div>
            <div className="count_gap">
              {card.likeStatus ? (
                <span className="status_like">
                  <RiThumbUpFill />
                </span>
              ) : (
                <span>
                  <RiThumbUpFill />
                </span>
              )}
              <span>{card.likeCount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card_date">{card.createdAt}</div>
      <div className="card_name">{card.name}</div>
      <div className="card_title">{card.title}</div>
      <hr />
      <div className="card_summary">{card.abstractContent}</div>
    </div>
  );
}

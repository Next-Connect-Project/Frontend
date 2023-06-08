import React from "react";
import { LikeButtonProps } from "./PromotionDetail.interface";
import { RiThumbUpFill } from "react-icons/ri";
import { ChangeLikeStatus } from "../../hooks/axios/Promotion";
import { useAppSelector } from "../../hooks/redux/store";

export default function LikeButton({
  like,
  setLike,
  likeCount,
  setLikeCount,
  id,
}: LikeButtonProps) {
  const token = useAppSelector((state) => state.login);

  /* 홍보 게시물 추천 API */
  const ClickLikeButton = async (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    const result_data = await ChangeLikeStatus(id, token.token);

    if (result_data.resultCode === 200) {
      setLike(!like);
      if (like == true && likeCount !== undefined) {
        setLikeCount(likeCount - 1);
      } else if (like === false && likeCount !== undefined) {
        setLikeCount(likeCount + 1);
      }
    }
  };

  return (
    <div>
      <span className="like_button" onClick={ClickLikeButton}>
        {like ? (
          <RiThumbUpFill className="like_button_clicked" />
        ) : (
          <RiThumbUpFill />
        )}
      </span>
      &nbsp;{likeCount}
    </div>
  );
}

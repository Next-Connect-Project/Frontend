import React from "react";
import { Link } from "react-router-dom";
import item from "../../assets/logo.png";

export default function NotFoundPage() {
  return (
    <div className="notfound_wrapper">
      <div className="notfound">
        <img src={item} className="notfound_image" alt="로고" />
        <div className="notfound_message">
          <span>404 Not Found</span>
          <Link to="/" className="notfound_gohome">
            <button className="btn btn-primary">홈으로 돌아가기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

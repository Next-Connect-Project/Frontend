import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header_wrapper">
      <Link to="/" className="header_title">
        <div>Pragora</div>
      </Link>
      <div className="header_list">
        <Link to="/post" className="header_link">
          <div> 새글 쓰기</div>
        </Link>
        <Link to="/login" className="header_link">
          <div> 로그인</div>
        </Link>
      </div>
    </header>
  );
}

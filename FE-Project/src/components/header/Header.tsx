import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../modal/LoginModal";

export default function Header() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const ClickModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setModalOpen(true);
  };
  return (
    <header className="header_wrapper">
      <div className="header_left">
      <Link to="/" className="header_title">
        <div>NextConnect</div>
      </Link>
      </div>
      <div className="header_right">
        <Link to="/post" className="header_link">
          <div> 새글 쓰기</div>
        </Link>
        <div className="header_link" onClick={ClickModalOpen}>
          {" "}
          로그인
        </div>
      </div>
      {modalOpen? <LoginModal setModalOpen={setModalOpen} /> :null}
    </header>
  );
}

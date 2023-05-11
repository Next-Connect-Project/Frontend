import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux/store";
import LoginModal from "../modal/LoginModal";

export default function NewPostButton() {
  const accessToken = useAppSelector((state) => state.login);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const ClickModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setModalOpen(true);
  };
  return (
    <>
      {accessToken.token ? (
        <Link to="/post" className="header_link">
          <div> 새 글 쓰기</div>
        </Link>
      ) : (
        <div className="header_link" onClick={ClickModalOpen}>
          새 글 쓰기
        </div>
      )}
      {modalOpen ? <LoginModal setModalOpen={setModalOpen} /> : null}
    </>
  );
}

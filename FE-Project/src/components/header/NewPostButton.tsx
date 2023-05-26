import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux/store";
import LoginModal from "../modal/LoginModal";
import PostModal from "../modal/PostModal";

export default function NewPostButton() {
  const accessToken = useAppSelector((state) => state.login);
  const [loginmodal, setLoginModal] = useState<boolean>(false);
  const [postmodal, setPostModal] = useState<boolean>(false);

  const ClickLoginModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLoginModal(true);
  };

  const ClickPostModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setPostModal(true);
  };

  return (
    <>
      {accessToken.token ? (
        <div className="header_link" onClick={ClickPostModalOpen}>
          새 글 쓰기
        </div>
      ) : (
        <div className="header_link" onClick={ClickLoginModalOpen}>
          새 글 쓰기
        </div>
      )}
      {postmodal ? <PostModal setModalOpen={setPostModal} /> : null}
      {loginmodal ? <LoginModal setModalOpen={setLoginModal} /> : null}
    </>
  );
}

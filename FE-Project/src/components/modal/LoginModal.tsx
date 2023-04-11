import React from "react";
import { LoginModalProps } from "./Modal.interface";
import { IoCloseSharp } from "react-icons/io5";
import {SiNaver} from "react-icons/si"
export default function LoginModal({ setModalOpen }: LoginModalProps) {
  const closeModal = () => {
    setModalOpen(false);
  };

  const ClickNaverLogin = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("네이버 소셜로그인 API연결")
  };

  return (
    <div className="modal_outside" onClick={closeModal}>
      <div className="modal_inside" onClick={(e) => e.stopPropagation()}>
        <div className="modal_login_top">
          <div className="modal_top_title">로그인</div>
          <button className="modal_close_button" onClick={closeModal}>
            <IoCloseSharp />
          </button>
        </div>
        <hr />
        <div className="modal_login_bottom">
          <div className="naver_Login_wrapper" onClick={ClickNaverLogin}>
            <SiNaver className="naver_logo" />
            <div className="naver_start">네이버로 시작하기</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { LoginModalProps } from "./Modal.interface";
import { IoCloseSharp } from "react-icons/io5";
import { SiNaver } from "react-icons/si";

export default function LoginModal({ setModalOpen }: LoginModalProps) {
  const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const Naver_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=http://localhost:5173`;
  const closeModal = () => {
    setModalOpen(false);
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
          <a href={Naver_URL} className="naver_login">
            <div className="naver_Login_wrapper">
              <SiNaver className="naver_logo" />
              <div className="naver_start">네이버로 시작하기</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

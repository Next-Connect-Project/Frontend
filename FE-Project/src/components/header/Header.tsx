import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import LoginModal from "../modal/LoginModal";
import { SortingParameter } from "../../hooks/Others";
import { GetNaverToken, RequestNaverLogin } from "../../hooks/axios/Login";

export default function Header() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const naver_token = SortingParameter(document.location.search);

  const ClickModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setModalOpen(true);
  };

  //인가코드로 네이버에서 토큰을 받아온후 백엔드 서버에 자체 JWT토큰 요청
  const LoginClicked = async() => {
    const token = await GetNaverToken(naver_token);
    console.log(token);
    if (token?.data.access_token) {
      const result = await RequestNaverLogin(token.data.access_token);
      console.log(result);
    }
  }
  
  //redirect 완료시 주소창에 인가코드 달려서 옴
  useEffect(() => {
    if (document.location.search) {
      LoginClicked()  
    }
  }, [])
  
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

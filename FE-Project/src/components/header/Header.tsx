import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../modal/LoginModal";
import { SortingParameter } from "../../hooks/Others";
import { RequestNaverLogin } from "../../hooks/axios/Login";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/store";
import { setToken } from "../../hooks/redux/LoginSlice";
import { setExpire } from "../../hooks/redux/ExpireSlice";
import { setCookie } from "../../hooks/Cookie";
import LoginButton from "./LoginButton";
import NewPostButton from "./NewPostButton";


export default function Header() {

  const naver_token = SortingParameter(document.location.search);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  //인가코드로 네이버에서 토큰을 받아온후 백엔드 서버에 자체 JWT토큰 요청
  const LoginClicked = async () => {
    try {
      const click_res = await RequestNaverLogin(naver_token);
      console.log(click_res);
      //리프레시 토큰은 쿠키로 저장 어세스토큰은 response로 반환후 로컬에서 redux로 저장
      if (click_res?.data.response.accessToken) {
        let accessExp = new Date(click_res.data.response.accessExp);
        let refreshExp = new Date(click_res.data.response.refreshExp);
        let real_accessToken = `Bearer ${click_res.data.response.accessToken}`;
        dispatch(setToken(real_accessToken));
        dispatch(setExpire(accessExp));
        setCookie(
          "refreshToken",
          `Bearer ${click_res.data.response.refreshToken}`,
          {
            path: "/",
            expires: refreshExp,
            //실제 운용할때는 httpOnly:true로 설정 하는것이 보안상 좋으나 실제 쿠키가 적용되는지 확인하기 어려으므로 임의로 false로 설정
            httpOnly: false,
          }
        );
        navigate("/");
      }
    } catch {
      alert("오류 발생");
      navigate("/");
    }
  };

  //redirect 완료시 주소창에 인가코드 달려서 옴
  useEffect(() => {
    if (document.location.search) {
      LoginClicked();
    }
  }, []);

  return (
    <header className="header_wrapper">
      <div className="header_left">
        <Link to="/" className="header_title">
          <div>NextConnect</div>
        </Link>
        <Link to="/recruitment" className="header_link">
          <div>모집공고</div>
        </Link>
        <Link to="/promotion" className="header_link">
          <div>홍보</div>
        </Link>
      </div>
      <div className="header_right">
        <NewPostButton />
        <LoginButton />
      </div>
      
    </header>
  );
}

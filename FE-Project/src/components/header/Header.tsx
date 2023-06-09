import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SortingParameter } from "../../hooks/Others";
import { RequestNaverLogin, RegetAccessToken } from "../../hooks/axios/Login";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/store";
import { setToken } from "../../hooks/redux/LoginSlice";
import { setExpire } from "../../hooks/redux/ExpireSlice";
import { getCookie, setCookie } from "../../hooks/Cookie";
import LoginButton from "./LoginButton";
import NewPostButton from "./NewPostButton";

export default function Header() {
  const naver_token = SortingParameter(document.location.search);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accessTokenExpired = useAppSelector((state) => state.expire).expire;
  const token = useAppSelector((state) => state.login).token;

  /* 로그인 API */
  /* 인가코드로 네이버에서 토큰을 받아온후 백엔드 서버에 자체 JWT토큰 요청 */
  const LoginClicked = async () => {
    try {
      const login_res = await RequestNaverLogin(naver_token);
      console.log(login_res);
      /* AccessToken -> redux로 저장 */
      if (login_res?.data.response.accessToken) {
        let accessExp = new Date(login_res.data.response.accessExp);
        let refreshExp = new Date(login_res.data.response.refreshExp);
        let real_accessToken = `Bearer ${login_res.data.response.accessToken}`;
        dispatch(setToken(real_accessToken));
        dispatch(setExpire(accessExp));

        /* 배포X 버전  - 배포 할 시 아래 쿠키 제거 삭제 */
        setCookie(
          "refreshToken",
          login_res.data.response.refreshToken,
          {
            path: "/",
            expires: refreshExp,
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

  /* 토큰 재발급 API */
  /* 현재시간과 AccessToken 만료시간 비교후 토큰 재요청 */
  const ReIssue = async () => {
    let now = new Date();
    if (accessTokenExpired !== null && token !== null) {
      let ExpireDate = new Date(accessTokenExpired);
      console.log(ExpireDate);
      if (now < ExpireDate) {
        try {
          /* 배포X 버전  - 배포 할 시 아래 주석 추가 */
          const refreshToken =getCookie('refreshToken')
          const reissue = await RegetAccessToken(token,refreshToken);
          /* 배포 버전  - 배포 안할 시 아래 주석 제거 */
          // const reissue = await RequestAccessToken(token);
          console.log(reissue);
          if (reissue?.data.response.accessToken) {
            let accessExp = new Date(reissue.data.response.accessExp);
            let real_accessToken = `Bearer ${reissue.data.response.accessToken}`;
            dispatch(setToken(real_accessToken));
            dispatch(setExpire(accessExp));
          }
        } catch {
          console.log("Reissue error");
        }
      }
    }
  };

  /* Login 요청 아닐시에 토큰 재요청*/
  useEffect(() => {
    if (document.location.search) {
      LoginClicked();
    } else {
      ReIssue();
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

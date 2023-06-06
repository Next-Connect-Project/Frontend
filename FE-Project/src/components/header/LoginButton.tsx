import React, { useState } from "react";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/store";
import LoginModal from "../modal/LoginModal";
import { Link, useNavigate } from "react-router-dom";
import { RequestLogout } from "../../hooks/axios/Login";
import { setToken } from "../../hooks/redux/LoginSlice";
import { setExpire } from "../../hooks/redux/ExpireSlice";
import { removeCookie } from "../../hooks/Cookie";

export default function LoginButton() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const accessToken = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const ClickModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const ClickLogout = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const logout_result = await RequestLogout();
    console.log(logout_result);
    if (logout_result.resultCode === 200) {
      dispatch(setToken(null));
      dispatch(setExpire(null));
      /* 배포X 버전  - 배포 할 시 아래 쿠키 제거 삭제 */ 
      removeCookie("refreshToken");
      navigate('/');
    }
  };

  return (
    <>
      {accessToken.token ? (
        <div className="header_link_loggedin">
          <DropdownButton
            className="dropdown-button"
            id="required"
            title={<BiUserCircle className="header_user" />}
          >
            <Dropdown.Item as={Link} to="/mypost">
              내가 쓴 글
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/setting">
              설정
            </Dropdown.Item>
            <Dropdown.Item as={Button} onClick={ClickLogout}>
              로그아웃
            </Dropdown.Item>
          </DropdownButton>
        </div>
      ) : (
        <div className="header_link" onClick={ClickModalOpen}>
          로그인
        </div>
      )}
      {modalOpen ? (
        accessToken.token ? (
          <></>
        ) : (
          <LoginModal setModalOpen={setModalOpen} />
        )
      ) : null}
    </>
  );
}

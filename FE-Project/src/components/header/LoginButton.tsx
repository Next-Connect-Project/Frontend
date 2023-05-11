import React, { useState } from "react";
import { DropdownButton,Dropdown, DropdownProps } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { useAppSelector } from "../../hooks/redux/store";
import LoginModal from "../modal/LoginModal";
import { Link } from 'react-router-dom';

export default function LoginButton() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const accessToken = useAppSelector((state) => state.login);

  const ClickModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setModalOpen(true);
  };

  

  return (
    <>
      {accessToken.token ? (
        <div className="header_link_loggedin" onClick={ClickModalOpen}>
          <DropdownButton
                  className="dropdown-button"
                  id="required"
                  title={<BiUserCircle className="header_user"/>}
          >
                <Dropdown.Item eventKey="item2">
                  <Link to="/mypost">내가 쓴 글</Link>
                </Dropdown.Item>

                <Dropdown.Item eventKey="item2">
                      <Link to="/setting">설정</Link>
                </Dropdown.Item>

                {/* 로그아웃 */}
                <Dropdown.Item eventKey="item3">로그아웃</Dropdown.Item>
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

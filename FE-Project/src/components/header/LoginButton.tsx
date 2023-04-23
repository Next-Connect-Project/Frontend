import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useAppSelector } from "../../hooks/redux/store";
import LoginModal from "../modal/LoginModal";

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
        <div className="header_link_loggedin">
          <BiUserCircle className="header_user" />
        </div>
      ) : (
        <div className="header_link" onClick={ClickModalOpen}>
          로그인
        </div>
      )}
      {modalOpen ? <LoginModal setModalOpen={setModalOpen} /> : null}
    </>
  );
}

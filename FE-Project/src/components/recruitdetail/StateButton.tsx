import React from "react";
import { StateButtonProps } from "./ProjectDetail.interface";
import { useAppSelector } from "../../hooks/redux/store";
import { ChacngePostState } from "../../hooks/axios/Recruitment";

export default function StateButton({ state, setState, id }: StateButtonProps) {
  const token = useAppSelector((state) => state.login);

  /* 모집글 오픈/마감(Patch) API */
  const onClickClose = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const result_data = await ChacngePostState(id, token.token);
    if (result_data.resultCode === 200) {
      setState("CLOSE");
    }
  };

  /* 모집글 오픈/마감(Patch) API */
  const onClickOpen = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const result_data = await ChacngePostState(id, token.token);
    if (result_data.resultCode === 200) {
      setState("OPEN");
    }
  };

  return state === "OPEN" ? (
    <div className="open_button" onClick={onClickClose}>
      모집중
    </div>
  ) : (
    <div className="close_button" onClick={onClickOpen}>
      모집완료
    </div>
  );
}
